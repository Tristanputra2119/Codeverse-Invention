import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { createClient } from '@libsql/client';
import { createApp } from '../src/app.js';

test('only admins control persistent maintenance; public signup cannot grant admin', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'eduverse-admin-'));
  const path = join(directory, 'test.sqlite');
  const fixture = createClient({ url: `file:${path}` });
  // Exercise migration from the original users schema.
  await fixture.execute('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password_hash TEXT NOT NULL)');
  const app = await createApp(path);
  const server = app.listen(0);
  await new Promise<void>((resolve) => server.once('listening', resolve));
  const address = server.address();
  assert(address && typeof address !== 'string');
  const base = `http://127.0.0.1:${address.port}/api`;
  const request = (route: string, method = 'GET', body?: unknown, cookie = '') => fetch(`${base}${route}`, {
    method, headers: { 'content-type': 'application/json', cookie }, body: body === undefined ? undefined : JSON.stringify(body),
  });
  try {
    assert.equal((await request('/admin/maintenance', 'PUT', { enabled: true, message: 'Perbaikan sistem' })).status, 401);
    const registered = await request('/auth/register', 'POST', { name: 'Admin Test', email: 'admin@example.com', password: 'test-password', role: 'admin' });
    const cookie = registered.headers.get('set-cookie')?.split(';')[0] ?? '';
    assert.equal((await registered.json()).role, 'learner');
    assert.equal((await request('/admin/maintenance', 'GET', undefined, cookie)).status, 403);
    assert.equal((await request('/admin/maintenance', 'PUT', { enabled: true, message: 'Perbaikan sistem' }, cookie)).status, 403);
    await fixture.execute("UPDATE users SET role = 'admin' WHERE email = 'admin@example.com'");
    assert.equal((await (await request('/auth/me', 'GET', undefined, cookie)).json()).role, 'admin');
    for (const body of [{ enabled: 'true', message: 'test' }, { enabled: true, message: '' }, { enabled: true, message: 'x'.repeat(501) }]) {
      assert.equal((await request('/admin/maintenance', 'PUT', body, cookie)).status, 400);
    }
    assert.equal((await request('/admin/maintenance', 'PUT', { enabled: true, message: 'Perbaikan sistem' }, cookie)).status, 200);
    assert.deepEqual(await (await request('/site-status')).json(), { enabled: true, message: 'Perbaikan sistem' });
    const blocked = await request('/courses');
    assert.equal(blocked.status, 503);
    assert.equal(blocked.headers.get('retry-after'), '300');
    assert.equal((await request('/auth/register', 'POST', {})).status, 503);
    assert.equal((await request('/courses', 'GET', undefined, cookie)).status, 200);
    assert.equal((await request('/auth/login', 'POST', { email: 'admin@example.com', password: 'test-password' })).status, 200);
    const reopened = await createApp(path);
    const second = reopened.listen(0);
    await new Promise<void>((resolve) => second.once('listening', resolve));
    try {
      const secondAddress = second.address();
      assert(secondAddress && typeof secondAddress !== 'string');
      const persisted = await fetch(`http://127.0.0.1:${secondAddress.port}/api/site-status`);
      assert.equal((await persisted.json()).enabled, true);
    } finally { await new Promise<void>((resolve) => second.close(() => resolve())); }
    assert.equal((await request('/admin/maintenance', 'PUT', { enabled: false, message: 'Perbaikan sistem' }, cookie)).status, 200);
    assert.equal((await request('/courses')).status, 200);
    assert.equal((await request('/unknown')).status, 404);
    assert.match((await (await request('/unknown')).json()).error, /tidak ditemukan/);
  } finally {
    await new Promise<void>((resolve) => server.close(() => resolve()));
    fixture.close();
    rmSync(directory, { recursive: true, force: true });
  }
});
