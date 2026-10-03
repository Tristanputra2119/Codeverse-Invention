import { databaseConfig } from './config.js';
import { openDatabase } from './db.js';

const email = process.argv[2];
if (!email?.trim()) throw new Error('Gunakan: npm run admin:promote --workspace api -- email@contoh.com');
const db = await openDatabase(databaseConfig());
try {
  if (!await db.promoteAdmin(email)) throw new Error('Akun belum ada. Daftarkan akun terlebih dahulu.');
  console.log(`Role admin diberikan ke ${email.trim()}.`);
} finally { db.close(); }
