import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, before, test } from 'node:test';
import type { Server } from 'node:http';
import { createApp } from '../src/app.js';

const directory = mkdtempSync(join(tmpdir(), 'eduverse-api-'));
let server: Server;
let baseUrl: string;
let cookie = '';

before(async () => {
  const app = await createApp(join(directory, 'test.sqlite'));
  server = app.listen(0);
  await new Promise<void>((resolve) => server.once('listening', resolve));
  const address = server.address();
  assert(address && typeof address !== 'string');
  baseUrl = `http://127.0.0.1:${address.port}/api`;
});

after(async () => {
  await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
  rmSync(directory, { recursive: true, force: true });
});

async function request(path: string, init: RequestInit = {}) {
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: { 'content-type': 'application/json', ...(cookie ? { cookie } : {}), ...init.headers },
  });
}

test('registration, login, session, and logout protect user data', async () => {
  const malformed = await request('/auth/register', { method: 'POST', body: '{' });
  assert.equal(malformed.status, 400);
  const invalid = await request('/auth/register', { method: 'POST', body: JSON.stringify({ name: '', email: 'bad', password: '123' }) });
  assert.equal(invalid.status, 400);

  const registered = await request('/auth/register', { method: 'POST', body: JSON.stringify({ name: 'Nadia', email: 'nadia@example.com', password: 'long-password' }) });
  assert.equal(registered.status, 201);
  cookie = registered.headers.get('set-cookie')?.split(';')[0] ?? '';
  assert(cookie.startsWith('eduverse_session='));
  assert.deepEqual(await registered.json(), { id: 1, name: 'Nadia', email: 'nadia@example.com' });

  const duplicate = await request('/auth/register', { method: 'POST', body: JSON.stringify({ name: 'Other', email: 'nadia@example.com', password: 'long-password' }) });
  assert.equal(duplicate.status, 409);
  const me = await request('/auth/me');
  assert.equal((await me.json()).name, 'Nadia');

  await request('/auth/logout', { method: 'POST' });
  cookie = '';
  assert.equal((await request('/auth/me')).status, 401);
  assert.equal((await request('/auth/login', { method: 'POST', body: JSON.stringify({ email: 'nadia@example.com', password: 'wrong' }) })).status, 401);
  const login = await request('/auth/login', { method: 'POST', body: JSON.stringify({ email: 'nadia@example.com', password: 'long-password' }) });
  assert.equal(login.status, 200);
  cookie = login.headers.get('set-cookie')?.split(';')[0] ?? '';
});

test('catalog has database-backed course and bootcamp detail', async () => {
  const courses = await (await request('/courses')).json();
  assert(Array.isArray(courses));
  assert(courses.some((course: { id: string }) => course.id === 'literasi-digital-pemula'));
  const detail = await (await request('/courses/literasi-digital-pemula')).json();
  assert.equal(detail.lessons.length, 4);
  assert.equal((await request('/courses/unknown')).status, 404);

  const bootcamps = await (await request('/bootcamps')).json();
  assert(bootcamps.some((bootcamp: { id: string }) => bootcamp.id === 'bootcamp-literasi-digital'));
  assert(bootcamps.every((bootcamp: { startDate: string }) => bootcamp.startDate === 'Jadwal menyusul'));
  assert.equal((await request('/bootcamps/unknown')).status, 404);
});

test('course lessons provide a practical explanation and exercise with internet cover images', async () => {
  const detail = await (await request('/courses/modern-javascript')).json();
  assert.match(detail.image, /^https:\/\/images\.unsplash\.com\//);
  assert.match(detail.fullDescription, /Proyek akhir:/);
  assert.match(detail.lessons[0].content, /Tujuan belajar:/);
  assert.match(detail.lessons[0].content, /Latihan:/);
  assert(detail.lessons[0].content.length > 300);
});

test('enrollment and lesson progress belong to the signed-in learner', async () => {
  const enrolled = await request('/enrollments', { method: 'POST', body: JSON.stringify({ courseId: 'literasi-digital-pemula' }) });
  assert.equal(enrolled.status, 201);
  assert.equal((await request('/enrollments', { method: 'POST', body: JSON.stringify({ courseId: 'literasi-digital-pemula' }) })).status, 200);
  const course = await (await request('/courses/literasi-digital-pemula')).json();
  const lessonId = course.lessons[0].id;
  const completed = await request(`/enrollments/literasi-digital-pemula/lessons/${lessonId}`, { method: 'PUT' });
  assert.equal(completed.status, 200);
  const dashboard = await (await request('/dashboard')).json();
  assert.equal(dashboard.courses[0].completedLessons, 1);
  assert.equal(dashboard.courses[0].totalLessons, 4);
  assert.equal((await request('/enrollments/literasi-digital-pemula/lessons/999999', { method: 'PUT' })).status, 404);
});

test('simulated bootcamp registration is persistent and does not claim payment', async () => {
  const result = await request('/bootcamp-enrollments', { method: 'POST', body: JSON.stringify({ bootcampId: 'bootcamp-literasi-digital' }) });
  assert.equal(result.status, 201);
  assert.equal((await result.json()).status, 'simulated');
  const dashboard = await (await request('/dashboard')).json();
  assert.equal(dashboard.bootcamps[0].id, 'bootcamp-literasi-digital');
});

test('finishing a course issues a verifiable certificate visible only to its learner', async () => {
  const course = await (await request('/courses/literasi-digital-pemula')).json();
  for (const lesson of course.lessons) {
    assert.equal((await request(`/enrollments/literasi-digital-pemula/lessons/${lesson.id}`, { method: 'PUT' })).status, 200);
  }
  const certificates = await (await request('/certificates')).json();
  assert.equal(certificates.length, 1);
  assert.equal(certificates[0].courseId, 'literasi-digital-pemula');
  assert.equal(certificates[0].learnerName, 'Nadia');
  assert.equal((await request(`/certificates/${certificates[0].code}`)).status, 200);

  const second = await request('/auth/register', { method: 'POST', body: JSON.stringify({ name: 'Budi', email: 'budi@example.com', password: 'another-password' }) });
  cookie = second.headers.get('set-cookie')?.split(';')[0] ?? '';
  assert.deepEqual(await (await request('/certificates')).json(), []);
  assert.equal((await request('/dashboard')).status, 200);
  assert.equal((await request('/enrollments/literasi-digital-pemula/lessons/1', { method: 'PUT' })).status, 403);
});
