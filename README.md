# EduVerse

Portfolio aplikasi belajar digital dengan Next.js, Tailwind CSS, Express.js, TypeScript, dan SQLite. Data katalog, akun, pendaftaran, progres, dan sertifikat dibaca dari SQLite lokal atau Turso; tidak ada akun atau kata sandi di `localStorage`.

## Menjalankan lokal

Gunakan Node.js 22.13 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Frontend meneruskan `/api/*` ke Express di port 4000. Jika Turso belum dikonfigurasi, database `api/eduverse.sqlite` dibuat otomatis saat server dimulai dan diisi dengan katalog awal. Atur `DATABASE_PATH` untuk lokasi database lain dan `API_URL` pada frontend jika API berada di host berbeda.

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

Test mencakup auth, katalog, pendaftaran, progres, pendaftaran bootcamp simulasi, sertifikat, dan seed akun demo yang aman diulang. ESLint memeriksa frontend dan API; pemeriksaan tipe dan build dijalankan untuk kedua workspace.

## Turso dan akun demo

Salin contoh konfigurasi, lalu isi URL dan token Turso Anda:

```bash
cp api/.env.example api/.env
```

```dotenv
TURSO_DATABASE_URL=libsql://nama-database-anda.turso.io
TURSO_AUTH_TOKEN=token-anda
DEMO_PASSWORD=EduVerseDemo2026!
PORT=4000
```

Backend membaca `api/.env`, lalu `.env` di root sebagai cadangan. Environment dari terminal/deployment memiliki prioritas. `.env` tidak ikut Git; URL dan token hanya digunakan backend.

Setelah URL dan token benar, jalankan dari root proyek:

```bash
npm run db:seed --workspace api
npm run db:test --workspace api
npm run dev
```

Seed membuat/memperbarui schema dan katalog dengan mempertahankan ID pelajaran serta progres, lalu menambahkan tiga akun: `nadia.demo@example.com`, `budi.demo@example.com`, `rina.demo@example.com`. Semua memakai `DEMO_PASSWORD` yang disimpan sebagai hash scrypt. Seed boleh diulang; akun yang sudah ada dan kata sandinya tidak diubah. Akun demo hanya dibuat oleh perintah seed. Schema dan katalog kosong juga diinisialisasi saat API dimulai. Materi teks, latihan, dan proyek akhir tersedia pada detail kelas serta dashboard.

Untuk SQLite lokal, kosongkan `TURSO_DATABASE_URL` dan `TURSO_AUTH_TOKEN`; opsional atur `DATABASE_PATH`. Jangan gunakan akun demo untuk data pribadi.

## Batas demo

- Pendaftaran bootcamp adalah simulasi yang tersimpan di database. Tidak ada transaksi, email, atau akses bootcamp berbayar.
- Materi EduVerse disusun dengan bantuan AI: 22 kelas berisi penjelasan, latihan, dan proyek akhir. Tidak ada afiliasi atau sertifikasi resmi Google, AWS, IBM, atau Meta.
- Sembilan bootcamp berisi rancangan kurikulum; belum ada mentor atau sesi langsung yang dikonfirmasi. Tanggal tetap “Jadwal menyusul” dan harga merupakan simulasi.
- Sertifikat hanya memverifikasi penyelesaian daftar materi dalam demo portfolio ini; sertifikat tersebut bukan sertifikasi dari pihak ketiga.

## Struktur

- `web/`: Next.js App Router dan Tailwind CSS.
- `api/`: Express API, libSQL/SQLite/Turso, seed, dan test integrasi.
- `agent.md`: aturan kerja proyek.
- `eslint.config.mjs`: konfigurasi lint untuk frontend dan API.

`db:test` menguji API langsung dengan database Turso dan meninggalkan contoh progres pada akun demo: Nadia selesai JavaScript Modern, Budi mulai HTML/CSS, dan Rina mendaftar bootcamp simulasi. Test lokal `npm test` memakai database sementara dan tidak mengakses Turso.

## Gambar katalog

Gambar diambil dari Unsplash dan diakses melalui URL `images.unsplash.com`. Lisensi: https://unsplash.com/license. Daftar sumber gambar:

- Coding: https://images.unsplash.com/photo-1498050108023-c5249f4df085
- Data: https://images.unsplash.com/photo-1551288049-bebda4e38f71
- Belajar: https://images.unsplash.com/photo-1516321318423-f06f85e504b3
- Cloud: https://images.unsplash.com/photo-1558494949-ef010cbdcc31
- Desain: https://images.unsplash.com/photo-1559028006-448665bd7c7f
