import { databaseConfig } from './config.js';
import { openDatabase } from './db.js';

const password = process.env.DEMO_PASSWORD;
if (!password || password.length < 8) throw new Error('Isi DEMO_PASSWORD minimal 8 karakter sebelum menjalankan seed.');
const db = await openDatabase(databaseConfig());
try {
  await db.seedCatalog(true);
  for (const [name, email] of [
    ['Nadia Demo', 'nadia.demo@example.com'],
    ['Budi Demo', 'budi.demo@example.com'],
    ['Rina Demo', 'rina.demo@example.com'],
  ] as const) {
    const created = await db.register(name, email, password);
    console.log(`${email}: ${created ? 'dibuat' : 'sudah ada, tidak diubah'}`);
  }
  console.log('Schema, katalog, dan akun demo siap.');
} finally {
  db.close();
}
