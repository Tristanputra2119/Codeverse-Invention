import { DatabaseSync } from 'node:sqlite';
import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
import { courses, bootcamps } from './seed.js';

export interface User { id: number; name: string; email: string }
export interface Course { id: string; category: string; title: string; image: string; duration: string; description: string; fullDescription: string; lessonCount: number }
export interface Lesson { id: number; courseId: string; title: string; duration: string; position: number }
export interface Bootcamp { id: string; category: string; title: string; image: string; startDate: string; duration: string; groupSize: string; price: number; originalPrice: number; description: string; fullDescription: string; mentorName: string; mentorRole: string; schedule: { title: string; duration: string }[] }

const hashToken = (token: string) => createHash('sha256').update(token).digest('hex');

export function openDatabase(path: string) {
  // ponytail: synchronous local SQLite keeps this portfolio simple; move to hosted Postgres for concurrent production traffic.
  const db = new DatabaseSync(path);
  db.exec(`
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, expires_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS courses (id TEXT PRIMARY KEY, category TEXT NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, duration TEXT NOT NULL, description TEXT NOT NULL, full_description TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY, course_id TEXT NOT NULL REFERENCES courses(id), title TEXT NOT NULL, duration TEXT NOT NULL, position INTEGER NOT NULL, UNIQUE(course_id, position));
    CREATE TABLE IF NOT EXISTS enrollments (user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, course_id TEXT NOT NULL REFERENCES courses(id), created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id, course_id));
    CREATE TABLE IF NOT EXISTS lesson_progress (user_id INTEGER NOT NULL, course_id TEXT NOT NULL, lesson_id INTEGER NOT NULL REFERENCES lessons(id), completed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id, lesson_id), FOREIGN KEY(user_id, course_id) REFERENCES enrollments(user_id, course_id) ON DELETE CASCADE);
    CREATE TABLE IF NOT EXISTS bootcamps (id TEXT PRIMARY KEY, category TEXT NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, start_date TEXT NOT NULL, duration TEXT NOT NULL, group_size TEXT NOT NULL, price INTEGER NOT NULL, original_price INTEGER NOT NULL, description TEXT NOT NULL, full_description TEXT NOT NULL, mentor_name TEXT NOT NULL, mentor_role TEXT NOT NULL, schedule_json TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS bootcamp_enrollments (user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, bootcamp_id TEXT NOT NULL REFERENCES bootcamps(id), status TEXT NOT NULL CHECK(status = 'simulated'), created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id, bootcamp_id));
    CREATE TABLE IF NOT EXISTS certificates (code TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, course_id TEXT NOT NULL REFERENCES courses(id), issued_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id, course_id));
  `);

  if (!(db.prepare('SELECT 1 FROM courses LIMIT 1').get())) {
    const insertCourse = db.prepare('INSERT INTO courses (id, category, title, image, duration, description, full_description) VALUES (?, ?, ?, ?, ?, ?, ?)');
    const insertLesson = db.prepare('INSERT INTO lessons (course_id, title, duration, position) VALUES (?, ?, ?, ?)');
    for (const [id, course] of Object.entries(courses)) {
      insertCourse.run(id, course.category, course.title, course.image, course.duration, course.description, course.fullDescription);
      course.curriculum.forEach((lesson, index) => insertLesson.run(id, lesson.title, lesson.duration, index + 1));
    }
  }
  if (!(db.prepare('SELECT 1 FROM bootcamps LIMIT 1').get())) {
    const insert = db.prepare('INSERT INTO bootcamps VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    for (const [id, camp] of Object.entries(bootcamps)) {
      insert.run(id, camp.category, camp.title, camp.image, camp.startDate, camp.duration, camp.groupSize, camp.price, camp.originalPrice, camp.description, camp.fullDescription, camp.mentor.name, camp.mentor.role, JSON.stringify(camp.schedule));
    }
  }
  db.prepare("UPDATE bootcamps SET start_date = 'Jadwal menyusul' WHERE start_date IN ('20 Juli 2026', '3 Agustus 2026', '17 Agustus 2026')").run();

  return {
    register(name: string, email: string, password: string): User | null {
      const salt = randomBytes(16).toString('hex');
      const hash = scryptSync(password, salt, 64).toString('hex');
      try {
        const result = db.prepare('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)').run(name, email.toLowerCase(), `${salt}:${hash}`);
        return { id: Number(result.lastInsertRowid), name, email: email.toLowerCase() };
      } catch (error) {
        if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) return null;
        throw error;
      }
    },
    login(email: string, password: string): User | null {
      const row = db.prepare('SELECT id, name, email, password_hash FROM users WHERE email = ?').get(email.toLowerCase()) as (User & { password_hash: string }) | undefined;
      if (!row) return null;
      const [salt, storedHash] = row.password_hash.split(':');
      if (!salt || !storedHash) return null;
      const given = scryptSync(password, salt, 64);
      const expected = Buffer.from(storedHash, 'hex');
      if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
      return { id: row.id, name: row.name, email: row.email };
    },
    createSession(userId: number): string {
      const token = randomBytes(32).toString('hex');
      db.prepare('INSERT INTO sessions VALUES (?, ?, ?)').run(hashToken(token), userId, Date.now() + 7 * 24 * 60 * 60 * 1000);
      return token;
    },
    userForSession(token: string): User | null {
      return (db.prepare('SELECT u.id, u.name, u.email FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?').get(hashToken(token), Date.now()) as User | undefined) ?? null;
    },
    deleteSession(token: string) { db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(hashToken(token)); },
    courses(): Course[] {
      return db.prepare('SELECT id, category, title, image, duration, description, full_description AS fullDescription, (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) AS lessonCount FROM courses ORDER BY rowid').all() as unknown as Course[];
    },
    course(id: string): (Course & { lessons: Lesson[] }) | null {
      const course = db.prepare('SELECT id, category, title, image, duration, description, full_description AS fullDescription, (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) AS lessonCount FROM courses WHERE id = ?').get(id) as Course | undefined;
      if (!course) return null;
      const lessons = db.prepare('SELECT id, course_id AS courseId, title, duration, position FROM lessons WHERE course_id = ? ORDER BY position').all(id) as unknown as Lesson[];
      return { ...course, lessons };
    },
    bootcamps(): Bootcamp[] {
      const rows = db.prepare('SELECT id, category, title, image, start_date AS startDate, duration, group_size AS groupSize, price, original_price AS originalPrice, description, full_description AS fullDescription, mentor_name AS mentorName, mentor_role AS mentorRole, schedule_json AS scheduleJson FROM bootcamps ORDER BY rowid').all() as unknown as (Omit<Bootcamp, 'schedule'> & { scheduleJson: string })[];
      return rows.map(({ scheduleJson, ...row }) => ({ ...row, schedule: JSON.parse(scheduleJson) as Bootcamp['schedule'] }));
    },
    bootcamp(id: string): Bootcamp | null { return this.bootcamps().find((camp) => camp.id === id) ?? null; },
    enrollCourse(userId: number, courseId: string): 'created' | 'existing' | 'missing' {
      if (!this.course(courseId)) return 'missing';
      const result = db.prepare('INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?, ?)').run(userId, courseId);
      return result.changes ? 'created' : 'existing';
    },
    completeLesson(userId: number, courseId: string, lessonId: number): 'updated' | 'missing' | 'not-enrolled' {
      const enrolled = db.prepare('SELECT 1 FROM enrollments WHERE user_id = ? AND course_id = ?').get(userId, courseId);
      if (!enrolled) return 'not-enrolled';
      const lesson = db.prepare('SELECT 1 FROM lessons WHERE id = ? AND course_id = ?').get(lessonId, courseId);
      if (!lesson) return 'missing';
      db.prepare('INSERT OR IGNORE INTO lesson_progress (user_id, course_id, lesson_id) VALUES (?, ?, ?)').run(userId, courseId, lessonId);
      const counts = db.prepare(`SELECT (SELECT COUNT(*) FROM lessons WHERE course_id = ?) AS total,
        (SELECT COUNT(*) FROM lesson_progress WHERE user_id = ? AND course_id = ?) AS completed`).get(courseId, userId, courseId) as { total: number; completed: number };
      if (counts.total > 0 && counts.total === counts.completed) {
        db.prepare('INSERT OR IGNORE INTO certificates (code, user_id, course_id) VALUES (?, ?, ?)').run(`EV-${randomBytes(8).toString('hex').toUpperCase()}`, userId, courseId);
      }
      return 'updated';
    },
    enrollBootcamp(userId: number, bootcampId: string): 'created' | 'existing' | 'missing' {
      if (!this.bootcamp(bootcampId)) return 'missing';
      const result = db.prepare("INSERT OR IGNORE INTO bootcamp_enrollments (user_id, bootcamp_id, status) VALUES (?, ?, 'simulated')").run(userId, bootcampId);
      return result.changes ? 'created' : 'existing';
    },
    dashboard(userId: number) {
      const courses = db.prepare(`SELECT c.id, c.title, c.image, c.category, COUNT(DISTINCT l.id) AS totalLessons, COUNT(DISTINCT p.lesson_id) AS completedLessons
        FROM enrollments e JOIN courses c ON c.id = e.course_id JOIN lessons l ON l.course_id = c.id
        LEFT JOIN lesson_progress p ON p.lesson_id = l.id AND p.user_id = e.user_id
        WHERE e.user_id = ? GROUP BY c.id ORDER BY e.created_at DESC`).all(userId);
      const bootcamps = db.prepare('SELECT b.id, b.title, b.image, e.status FROM bootcamp_enrollments e JOIN bootcamps b ON b.id = e.bootcamp_id WHERE e.user_id = ?').all(userId);
      return { courses, bootcamps };
    },
    certificates(userId: number) {
      return db.prepare('SELECT c.code, c.course_id AS courseId, k.title AS courseTitle, u.name AS learnerName, c.issued_at AS issuedAt FROM certificates c JOIN courses k ON k.id = c.course_id JOIN users u ON u.id = c.user_id WHERE c.user_id = ? ORDER BY c.issued_at DESC').all(userId);
    },
    certificate(code: string) {
      return db.prepare('SELECT c.code, c.course_id AS courseId, k.title AS courseTitle, u.name AS learnerName, c.issued_at AS issuedAt FROM certificates c JOIN courses k ON k.id = c.course_id JOIN users u ON u.id = c.user_id WHERE c.code = ?').get(code) ?? null;
    },
  };
}
