import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';
import { fileURLToPath } from 'node:url';
import type { Config } from '@libsql/client';

// Existing shell variables take precedence; api/.env takes precedence over root .env.
for (const relative of ['../.env', '../../.env']) {
  const path = fileURLToPath(new URL(relative, import.meta.url));
  if (existsSync(path)) loadEnvFile(path);
}

export function databaseConfig(): Config {
  const url = process.env.TURSO_DATABASE_URL?.trim() || `file:${process.env.DATABASE_PATH || 'eduverse.sqlite'}`;
  if (!url.startsWith('file:') && !process.env.TURSO_AUTH_TOKEN?.trim()) {
    throw new Error('TURSO_AUTH_TOKEN diperlukan untuk koneksi Turso.');
  }
  return { url, authToken: process.env.TURSO_AUTH_TOKEN?.trim() || undefined };
}
