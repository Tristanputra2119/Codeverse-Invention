# EduVerse

Portfolio aplikasi belajar digital dengan Next.js, Tailwind CSS, Express.js, TypeScript, dan SQLite. Data katalog, akun, pendaftaran, progres, dan sertifikat dibaca dari database lokal; tidak ada akun atau kata sandi di `localStorage`.

## Menjalankan lokal

Gunakan Node.js 22.13 atau lebih baru.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`. Frontend meneruskan `/api/*` ke Express di port 4000. Database `api/eduverse.sqlite` dibuat otomatis saat server dimulai dan diisi dengan konten katalog awal dari proyek lama. Atur `DATABASE_PATH` untuk lokasi database lain dan `API_URL` pada frontend jika API berada di host berbeda.

```bash
npm test
npm run typecheck
npm run build
```

Test API ditulis sebelum model dan endpoint. Test mencakup auth, katalog, pendaftaran, progres, pendaftaran bootcamp simulasi, dan sertifikat.

## Batas demo

- Pendaftaran bootcamp adalah simulasi yang tersimpan di database. Tidak ada transaksi, email, atau akses bootcamp berbayar.
- Katalog bootcamp memakai data contoh sementara. Semua tanggal mulai ditampilkan sebagai “Jadwal menyusul”; materi lengkap dan jadwal komersial belum disediakan.
- Sertifikat hanya memverifikasi penyelesaian daftar materi dalam demo portfolio ini; sertifikat tersebut bukan sertifikasi dari pihak ketiga.

## Struktur

- `web/`: Next.js App Router dan Tailwind CSS.
- `api/`: Express API, SQLite, seed, dan test integrasi.
- `agent.md`: aturan kerja proyek.
- `legacy/`: sumber statis lama sebagai referensi desain dan konten. Aplikasi baru tidak menjalankan file tersebut.
