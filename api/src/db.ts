import { createClient, type Config, type InValue, type Row } from '@libsql/client';
import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
import { courses, bootcamps } from './seed.js';

export interface User { id: number; name: string; email: string; role: 'learner' | 'admin' }
export interface Maintenance { enabled: boolean; message: string }
export interface Course { id: string; category: string; title: string; image: string; duration: string; description: string; fullDescription: string; lessonCount: number }
export interface Lesson { id: number; courseId: string; title: string; duration: string; position: number; content: string }
export interface Bootcamp { id: string; category: string; title: string; image: string; startDate: string; duration: string; groupSize: string; price: number; originalPrice: number; description: string; fullDescription: string; mentorName: string; mentorRole: string; schedule: { title: string; duration: string }[] }

const hashToken = (token: string) => createHash('sha256').update(token).digest('hex');

export async function openDatabase(config: string | Config) {
  const db = createClient(typeof config === 'string' ? { url: `file:${config}` } : config);
  const run = (sql: string, ...args: InValue[]) => db.execute({ sql, args });
  const rows = async <T = Row>(sql: string, ...args: InValue[]): Promise<T[]> => (await run(sql, ...args)).rows as unknown as T[];
  const first = async <T = Row>(sql: string, ...args: InValue[]): Promise<T | undefined> => (await rows<T>(sql, ...args))[0];
  await db.executeMultiple(`
    PRAGMA foreign_keys = ON;
    CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS sessions (token_hash TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, expires_at INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS courses (id TEXT PRIMARY KEY, category TEXT NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, duration TEXT NOT NULL, description TEXT NOT NULL, full_description TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY, course_id TEXT NOT NULL REFERENCES courses(id), title TEXT NOT NULL, duration TEXT NOT NULL, position INTEGER NOT NULL, content TEXT NOT NULL DEFAULT '', UNIQUE(course_id, position));
    CREATE TABLE IF NOT EXISTS enrollments (user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, course_id TEXT NOT NULL REFERENCES courses(id), created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id, course_id));
    CREATE TABLE IF NOT EXISTS lesson_progress (user_id INTEGER NOT NULL, course_id TEXT NOT NULL, lesson_id INTEGER NOT NULL REFERENCES lessons(id), completed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id, lesson_id), FOREIGN KEY(user_id, course_id) REFERENCES enrollments(user_id, course_id) ON DELETE CASCADE);
    CREATE TABLE IF NOT EXISTS bootcamps (id TEXT PRIMARY KEY, category TEXT NOT NULL, title TEXT NOT NULL, image TEXT NOT NULL, start_date TEXT NOT NULL, duration TEXT NOT NULL, group_size TEXT NOT NULL, price INTEGER NOT NULL, original_price INTEGER NOT NULL, description TEXT NOT NULL, full_description TEXT NOT NULL, mentor_name TEXT NOT NULL, mentor_role TEXT NOT NULL, schedule_json TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS bootcamp_enrollments (user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, bootcamp_id TEXT NOT NULL REFERENCES bootcamps(id), status TEXT NOT NULL CHECK(status = 'simulated'), created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(user_id, bootcamp_id));
    CREATE TABLE IF NOT EXISTS certificates (code TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE, course_id TEXT NOT NULL REFERENCES courses(id), issued_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id, course_id));
  `);

  const columns = await rows<{ name: string }>('PRAGMA table_info(lessons)');
  if (!columns.some((column) => column.name === 'content')) {
    await run("ALTER TABLE lessons ADD COLUMN content TEXT NOT NULL DEFAULT ''");
  }
  const userColumns = await rows<{ name: string }>('PRAGMA table_info(users)');
  if (!userColumns.some((column) => column.name === 'role')) {
    await run("ALTER TABLE users ADD COLUMN role TEXT NOT NULL DEFAULT 'learner' CHECK(role IN ('learner', 'admin'))");
  }
  await db.executeMultiple(`
    CREATE TABLE IF NOT EXISTS site_settings (id INTEGER PRIMARY KEY CHECK(id = 1), maintenance_enabled INTEGER NOT NULL DEFAULT 0 CHECK(maintenance_enabled IN (0, 1)), maintenance_message TEXT NOT NULL);
    INSERT OR IGNORE INTO site_settings VALUES (1, 0, 'Kami sedang meningkatkan layanan. Silakan kembali beberapa saat lagi.');
  `);

  async function seedCatalog(refresh = false) {
    const statements: { sql: string; args: InValue[] }[] = [];
    if (refresh || !await first('SELECT 1 FROM courses LIMIT 1')) {
      for (const [id, course] of Object.entries(courses)) {
        statements.push({ sql: 'INSERT INTO courses (id, category, title, image, duration, description, full_description) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET category=excluded.category, title=excluded.title, image=excluded.image, duration=excluded.duration, description=excluded.description, full_description=excluded.full_description', args: [id, course.category, course.title, course.image, course.duration, course.description, course.fullDescription] });
        course.curriculum.forEach((lesson, index) => statements.push({ sql: 'INSERT INTO lessons (course_id, title, duration, position, content) VALUES (?, ?, ?, ?, ?) ON CONFLICT(course_id, position) DO UPDATE SET title=excluded.title, duration=excluded.duration, content=excluded.content', args: [id, lesson.title, lesson.duration, index + 1, lesson.content] }));
      }
    }
    if (refresh || !await first('SELECT 1 FROM bootcamps LIMIT 1')) {
      for (const [id, camp] of Object.entries(bootcamps)) {
        statements.push({ sql: 'INSERT INTO bootcamps VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO UPDATE SET category=excluded.category, title=excluded.title, image=excluded.image, start_date=excluded.start_date, duration=excluded.duration, group_size=excluded.group_size, price=excluded.price, original_price=excluded.original_price, description=excluded.description, full_description=excluded.full_description, mentor_name=excluded.mentor_name, mentor_role=excluded.mentor_role, schedule_json=excluded.schedule_json', args: [id, camp.category, camp.title, camp.image, camp.startDate, camp.duration, camp.groupSize, camp.price, camp.originalPrice, camp.description, camp.fullDescription, camp.mentor.name, camp.mentor.role, JSON.stringify(camp.schedule)] });
      }
    }
    if (statements.length) await db.batch(statements, 'write');
    await run("UPDATE bootcamps SET start_date = 'Jadwal menyusul' WHERE start_date IN ('20 Juli 2026', '3 Agustus 2026', '17 Agustus 2026')");

  }
  await seedCatalog();

  return {
    close: () => db.close(),
    seedCatalog,
    async maintenance(): Promise<Maintenance> {
      const row = await first<{ enabled: number; message: string }>('SELECT maintenance_enabled AS enabled, maintenance_message AS message FROM site_settings WHERE id = 1');
      if (!row) throw new Error('Pengaturan situs tidak tersedia.');
      return { enabled: row.enabled === 1, message: row.message };
    },
    async setMaintenance(value: Maintenance) {
      await run('UPDATE site_settings SET maintenance_enabled = ?, maintenance_message = ? WHERE id = 1', value.enabled ? 1 : 0, value.message);
    },
    async promoteAdmin(email: string) {
      const result = await run("UPDATE users SET role = 'admin' WHERE email = ?", email.trim().toLowerCase());
      return result.rowsAffected > 0;
    },
    async register(name: string, email: string, password: string): Promise<User | null> {
      const salt = randomBytes(16).toString('hex');
      const hash = scryptSync(password, salt, 64).toString('hex');
      try {
        const result = await run('INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)', name, email.toLowerCase(), `${salt}:${hash}`);
        return { id: Number(result.lastInsertRowid), name, email: email.toLowerCase(), role: 'learner' };
      } catch (error) {
        if (error instanceof Error && error.message.includes('UNIQUE constraint failed')) return null;
        throw error;
      }
    },
    async login(email: string, password: string): Promise<User | null> {
      const row = await first('SELECT id, name, email, role, password_hash FROM users WHERE email = ?', email.toLowerCase()) as (User & { password_hash: string }) | undefined;
      if (!row) return null;
      const [salt, storedHash] = row.password_hash.split(':');
      if (!salt || !storedHash) return null;
      const given = scryptSync(password, salt, 64);
      const expected = Buffer.from(storedHash, 'hex');
      if (given.length !== expected.length || !timingSafeEqual(given, expected)) return null;
      return { id: row.id, name: row.name, email: row.email, role: row.role };
    },
    async createSession(userId: number): Promise<string> {
      const token = randomBytes(32).toString('hex');
      await run('INSERT INTO sessions VALUES (?, ?, ?)', hashToken(token), userId, Date.now() + 7 * 24 * 60 * 60 * 1000);
      return token;
    },
    async userForSession(token: string): Promise<User | null> {
      return (await first('SELECT u.id, u.name, u.email, u.role FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?', hashToken(token), Date.now()) as User | undefined) ?? null;
    },
    async deleteSession(token: string) { await run('DELETE FROM sessions WHERE token_hash = ?', hashToken(token)); },
    async courses(): Promise<Course[]> {
      return await rows('SELECT id, category, title, image, duration, description, full_description AS fullDescription, (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) AS lessonCount FROM courses ORDER BY rowid') as unknown as Course[];
    },
    async course(id: string): Promise<(Course & { lessons: Lesson[] }) | null> {
      const course = await first('SELECT id, category, title, image, duration, description, full_description AS fullDescription, (SELECT COUNT(*) FROM lessons WHERE course_id = courses.id) AS lessonCount FROM courses WHERE id = ?', id) as Course | undefined;
      if (!course) return null;
      const lessons = await rows('SELECT id, course_id AS courseId, title, duration, position, content FROM lessons WHERE course_id = ? ORDER BY position', id) as unknown as Lesson[];
      return { ...course, lessons };
    },
    async bootcamps(): Promise<Bootcamp[]> {
      const camps = await rows('SELECT id, category, title, image, start_date AS startDate, duration, group_size AS groupSize, price, original_price AS originalPrice, description, full_description AS fullDescription, mentor_name AS mentorName, mentor_role AS mentorRole, schedule_json AS scheduleJson FROM bootcamps ORDER BY rowid') as unknown as (Omit<Bootcamp, 'schedule'> & { scheduleJson: string })[];
      return camps.map(({ scheduleJson, ...row }) => ({ ...row, schedule: JSON.parse(scheduleJson) as Bootcamp['schedule'] }));
    },
    async bootcamp(id: string): Promise<Bootcamp | null> { return (await this.bootcamps()).find((camp) => camp.id === id) ?? null; },
    async enrollCourse(userId: number, courseId: string): Promise<'created' | 'existing' | 'missing'> {
      if (!await this.course(courseId)) return 'missing';
      const result = await run('INSERT OR IGNORE INTO enrollments (user_id, course_id) VALUES (?, ?)', userId, courseId);
      return result.rowsAffected ? 'created' : 'existing';
    },
    async completeLesson(userId: number, courseId: string, lessonId: number): Promise<'updated' | 'missing' | 'not-enrolled'> {
      const enrolled = await first('SELECT 1 FROM enrollments WHERE user_id = ? AND course_id = ?', userId, courseId);
      if (!enrolled) return 'not-enrolled';
      const lesson = await first('SELECT 1 FROM lessons WHERE id = ? AND course_id = ?', lessonId, courseId);
      if (!lesson) return 'missing';
      await run('INSERT OR IGNORE INTO lesson_progress (user_id, course_id, lesson_id) VALUES (?, ?, ?)', userId, courseId, lessonId);
      const counts = await first(`SELECT (SELECT COUNT(*) FROM lessons WHERE course_id = ?) AS total,
        (SELECT COUNT(*) FROM lesson_progress WHERE user_id = ? AND course_id = ?) AS completed`, courseId, userId, courseId) as { total: number; completed: number };
      if (counts.total > 0 && counts.total === counts.completed) {
        await run('INSERT OR IGNORE INTO certificates (code, user_id, course_id) VALUES (?, ?, ?)', `EV-${randomBytes(8).toString('hex').toUpperCase()}`, userId, courseId);
      }
      return 'updated';
    },
    async enrollBootcamp(userId: number, bootcampId: string): Promise<'created' | 'existing' | 'missing'> {
      if (!await this.bootcamp(bootcampId)) return 'missing';
      const result = await run("INSERT OR IGNORE INTO bootcamp_enrollments (user_id, bootcamp_id, status) VALUES (?, ?, 'simulated')", userId, bootcampId);
      return result.rowsAffected ? 'created' : 'existing';
    },
    async dashboard(userId: number) {
      const courses = await rows(`SELECT c.id, c.title, c.image, c.category, COUNT(DISTINCT l.id) AS totalLessons, COUNT(DISTINCT p.lesson_id) AS completedLessons
        FROM enrollments e JOIN courses c ON c.id = e.course_id JOIN lessons l ON l.course_id = c.id
        LEFT JOIN lesson_progress p ON p.lesson_id = l.id AND p.user_id = e.user_id
        WHERE e.user_id = ? GROUP BY c.id ORDER BY e.created_at DESC`, userId);
      const bootcamps = await rows('SELECT b.id, b.title, b.image, e.status FROM bootcamp_enrollments e JOIN bootcamps b ON b.id = e.bootcamp_id WHERE e.user_id = ?', userId);
      return { courses, bootcamps };
    },
    async certificates(userId: number) {
      return await rows('SELECT c.code, c.course_id AS courseId, k.title AS courseTitle, u.name AS learnerName, c.issued_at AS issuedAt FROM certificates c JOIN courses k ON k.id = c.course_id JOIN users u ON u.id = c.user_id WHERE c.user_id = ? ORDER BY c.issued_at DESC', userId);
    },
    async certificate(code: string) {
      return await first('SELECT c.code, c.course_id AS courseId, k.title AS courseTitle, u.name AS learnerName, c.issued_at AS issuedAt FROM certificates c JOIN courses k ON k.id = c.course_id JOIN users u ON u.id = c.user_id WHERE c.code = ?', code) ?? null;
    },
  };
}
