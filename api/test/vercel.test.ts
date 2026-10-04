import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

test('Vercel entrypoint serves catalog and session cookies without starting its own listener', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'eduverse-vercel-'));
  process.env.TURSO_DATABASE_URL = `file:${join(directory, 'test.sqlite')}`;
  process.env.TURSO_AUTH_TOKEN = '';
  const { default: app } = await import('../src/index.js');
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once('listening', resolve));
  const address = server.address();
  assert(address && typeof address !== 'string');
  const baseUrl = `http://127.0.0.1:${address.port}/api`;
  try {
    assert.equal((await fetch(`${baseUrl}/site-status`)).status, 200);
    const courses = await (await fetch(`${baseUrl}/courses`)).json();
    assert(courses.some((course: { id: string }) => course.id === 'modern-javascript'));
    const registration = await fetch(`${baseUrl}/auth/register`, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: 'Vercel User', email: 'vercel@example.com', password: 'integration-password' }),
    });
    assert.equal(registration.status, 201);
    const setCookie = registration.headers.get('set-cookie');
    assert(setCookie?.includes('HttpOnly'));
    const session = await fetch(`${baseUrl}/auth/me`, { headers: { cookie: setCookie.split(';')[0] ?? '' } });
    assert.equal(session.status, 200);
    assert.equal((await session.json()).role, 'learner');
    assert.equal((await fetch(`${baseUrl}/admin/maintenance`, { headers: { cookie: setCookie.split(';')[0] ?? '' } })).status, 403);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
    rmSync(directory, { recursive: true, force: true });
  }
});
