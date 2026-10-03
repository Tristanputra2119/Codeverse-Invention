import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { createApp } from '../src/app.js';

test('seed command creates demo users that can log in and can be rerun safely', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'eduverse-demo-'));
  const path = join(directory, 'demo.sqlite');
  const env = { ...process.env, TURSO_DATABASE_URL: `file:${path}`, TURSO_AUTH_TOKEN: '', DEMO_PASSWORD: 'EduVerseDemo2026!' };
  try {
    for (let attempt = 0; attempt < 2; attempt++) {
      execFileSync(process.execPath, ['--import', 'tsx', 'src/seed-demo.ts'], { env: { ...env, DEMO_PASSWORD: attempt === 0 ? env.DEMO_PASSWORD : 'DifferentPassword2026!' } });
    }
    const app = await createApp(path);
    const server = app.listen(0);
    await new Promise<void>((resolve) => server.once('listening', resolve));
    try {
      const address = server.address();
      assert(address && typeof address !== 'string');
      for (const email of ['nadia.demo@example.com', 'budi.demo@example.com', 'rina.demo@example.com']) {
        const response = await fetch(`http://127.0.0.1:${address.port}/api/auth/login`, {
          method: 'POST', headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email, password: env.DEMO_PASSWORD }),
        });
        assert.equal(response.status, 200);
        assert.equal((await response.json()).email, email);
      }
    } finally {
      await new Promise<void>((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
