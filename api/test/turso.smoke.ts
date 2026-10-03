import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';
import { databaseConfig } from '../src/config.js';
import type { Course, Lesson } from '../src/db.js';

const config = databaseConfig();
assert(!config.url.startsWith('file:'), 'Isi konfigurasi Turso sebelum menjalankan test remote.');
assert(process.env.DEMO_PASSWORD, 'DEMO_PASSWORD diperlukan.');
const app = await createApp(config);
const server = app.listen(0);
await new Promise<void>((resolve) => server.once('listening', resolve));
const address = server.address();
assert(address && typeof address !== 'string');
let cookie = '';
const request = (path: string, method = 'GET', body?: unknown) => fetch(`http://127.0.0.1:${address.port}/api${path}`, {
  method, headers: { 'content-type': 'application/json', cookie },
  body: body === undefined ? undefined : JSON.stringify(body),
});

// Explicit remote check: leaves learning examples on the three demo accounts.
try {
  assert.equal((await request('/auth/me')).status, 401);
  const catalog = await (await request('/courses')).json() as Course[];
  assert.equal(catalog.length, 22);
  for (const course of catalog) {
    const response = await request(`/courses/${course.id}`);
    assert.equal(response.status, 200);
    const detail = await response.json() as Course & { lessons: Lesson[] };
    assert(detail.lessons.every((lesson) => lesson.content.length > 300));
  }
  const camps = await (await request('/bootcamps')).json() as { id: string; startDate: string }[];
  assert.equal(camps.length, 9);
  assert(camps.every((camp) => camp.startDate === 'Jadwal menyusul'));
  assert.equal((await request('/auth/login', 'POST', { email: 'nadia.demo@example.com', password: 'incorrect' })).status, 401);

  for (const [email, courseId, finish] of [
    ['nadia.demo@example.com', 'modern-javascript', true],
    ['budi.demo@example.com', 'html-css-foundation', false],
    ['rina.demo@example.com', '', false],
  ] as const) {
    const login = await request('/auth/login', 'POST', { email, password: process.env.DEMO_PASSWORD });
    assert.equal(login.status, 200);
    cookie = login.headers.get('set-cookie')?.split(';')[0] ?? '';
    assert(cookie);
    assert.equal((await (await request('/auth/me')).json() as { email: string }).email, email);
    if (courseId) {
      assert([200, 201].includes((await request('/enrollments', 'POST', { courseId })).status));
      const detail = await (await request(`/courses/${courseId}`)).json() as { lessons: Lesson[] };
      for (const lesson of finish ? detail.lessons : detail.lessons.slice(0, 1)) {
        assert.equal((await request(`/enrollments/${courseId}/lessons/${lesson.id}`, 'PUT')).status, 200);
      }
      const dashboard = await (await request('/dashboard')).json() as { courses: { id: string; completedLessons: number }[] };
      assert.equal(dashboard.courses.find((course) => course.id === courseId)?.completedLessons, finish ? detail.lessons.length : 1);
      if (finish) {
        const certificates = await (await request('/certificates')).json() as { code: string; courseId: string }[];
        const certificate = certificates.find((item) => item.courseId === courseId);
        assert(certificate);
        assert.equal((await request(`/certificates/${certificate.code}`)).status, 200);
      }
    } else {
      assert([200, 201].includes((await request('/bootcamp-enrollments', 'POST', { bootcampId: 'full-stack-engineering' })).status));
      assert.deepEqual(await (await request('/certificates')).json(), []);
    }
    assert.equal((await request('/auth/logout', 'POST')).status, 204);
    assert.equal((await request('/auth/me')).status, 401);
    cookie = '';
  }
  console.log('Turso OK: 22 kelas, 9 bootcamp, semua materi, 3 login, session/logout, progres, sertifikat, dan pendaftaran simulasi.');
} finally {
  await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
}
