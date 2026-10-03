import express, { type Request, type Response } from 'express';
import { type Config } from '@libsql/client';
import { openDatabase, type User } from './db.js';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const cookieName = 'eduverse_session';

function fields(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
}

export async function createApp(databasePath: string | Config) {
  const db = await openDatabase(databasePath);
  const app = express();
  app.use(express.json({ limit: '16kb' }));

  function token(req: Request): string {
    return req.headers.cookie?.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${cookieName}=`))?.slice(cookieName.length + 1) ?? '';
  }
  async function user(req: Request, res: Response): Promise<User | null> {
    const current = await db.userForSession(token(req));
    if (!current) res.status(401).json({ error: 'Silakan masuk terlebih dahulu.' });
    return current;
  }
  function setCookie(res: Response, value: string, maxAge: number) {
    res.cookie(cookieName, value, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge });
  }

  app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = fields(req.body);
    if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' || !emailPattern.test(email) || typeof password !== 'string' || password.length < 8) {
      res.status(400).json({ error: 'Nama, email valid, dan kata sandi minimal 8 karakter diperlukan.' }); return;
    }
    const created = await db.register(name.trim(), email.trim(), password);
    if (!created) { res.status(409).json({ error: 'Email sudah terdaftar.' }); return; }
    setCookie(res, await db.createSession(created.id), 7 * 24 * 60 * 60 * 1000);
    res.status(201).json(created);
  });
  app.post('/api/auth/login', async (req, res) => {
    const { email, password } = fields(req.body);
    if (typeof email !== 'string' || typeof password !== 'string') { res.status(400).json({ error: 'Email dan kata sandi diperlukan.' }); return; }
    const current = await db.login(email.trim(), password);
    if (!current) { res.status(401).json({ error: 'Email atau kata sandi salah.' }); return; }
    setCookie(res, await db.createSession(current.id), 7 * 24 * 60 * 60 * 1000);
    res.json(current);
  });
  app.get('/api/auth/me', async (req, res) => { const current = await user(req, res); if (current) res.json(current); });
  app.post('/api/auth/logout', async (req, res) => { const value = token(req); if (value) await db.deleteSession(value); setCookie(res, '', 0); res.status(204).end(); });

  app.get('/api/courses', async (_req, res) => res.json(await db.courses()));
  app.get('/api/courses/:id', async (req, res) => { const course = await db.course(String(req.params.id)); if (course) res.json(course); else res.status(404).json({ error: 'Kelas tidak ditemukan.' }); });
  app.get('/api/bootcamps', async (_req, res) => res.json(await db.bootcamps()));
  app.get('/api/bootcamps/:id', async (req, res) => { const camp = await db.bootcamp(String(req.params.id)); if (camp) res.json(camp); else res.status(404).json({ error: 'Bootcamp tidak ditemukan.' }); });
  app.get('/api/dashboard', async (req, res) => { const current = await user(req, res); if (current) res.json(await db.dashboard(current.id)); });
  app.get('/api/certificates', async (req, res) => { const current = await user(req, res); if (current) res.json(await db.certificates(current.id)); });
  app.get('/api/certificates/:code', async (req, res) => { const certificate = await db.certificate(String(req.params.code)); if (certificate) res.json(certificate); else res.status(404).json({ error: 'Sertifikat tidak ditemukan.' }); });
  app.post('/api/enrollments', async (req, res) => {
    const current = await user(req, res); if (!current) return;
    const { courseId } = fields(req.body);
    if (typeof courseId !== 'string') { res.status(400).json({ error: 'courseId diperlukan.' }); return; }
    const result = await db.enrollCourse(current.id, courseId);
    res.status(result === 'missing' ? 404 : result === 'created' ? 201 : 200).json(result === 'missing' ? { error: 'Kelas tidak ditemukan.' } : { courseId, status: 'enrolled' });
  });
  app.put('/api/enrollments/:courseId/lessons/:lessonId', async (req, res) => {
    const current = await user(req, res); if (!current) return;
    const lessonId = Number(req.params.lessonId);
    if (!Number.isSafeInteger(lessonId) || lessonId < 1) { res.status(400).json({ error: 'ID pelajaran tidak valid.' }); return; }
    const result = await db.completeLesson(current.id, String(req.params.courseId), lessonId);
    res.status(result === 'updated' ? 200 : result === 'missing' ? 404 : 403).json(result === 'updated' ? { status: 'completed' } : { error: result === 'missing' ? 'Pelajaran tidak ditemukan.' : 'Daftar kelas terlebih dahulu.' });
  });
  app.post('/api/bootcamp-enrollments', async (req, res) => {
    const current = await user(req, res); if (!current) return;
    const { bootcampId } = fields(req.body);
    if (typeof bootcampId !== 'string') { res.status(400).json({ error: 'bootcampId diperlukan.' }); return; }
    const result = await db.enrollBootcamp(current.id, bootcampId);
    res.status(result === 'missing' ? 404 : result === 'created' ? 201 : 200).json(result === 'missing' ? { error: 'Bootcamp tidak ditemukan.' } : { bootcampId, status: 'simulated' });
  });
  app.use((error: Error & { status?: number }, _req: Request, res: Response, _next: express.NextFunction) => {
    if (error.status === 400) { res.status(400).json({ error: 'Format JSON tidak valid.' }); return; }
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan server.' });
  });
  return app;
}
