# EduVerse — INVENTION 2026

Website statis untuk kompetisi INVENTION 2026, subtema **Building Smarter Communities Through Digital Learning**.

## Cara Buka
Buka `index.html` langsung di browser, atau jalankan local server sederhana:

```bash
python3 -m http.server 8000
```

Lalu akses `http://localhost:8000`.

## Panduan Testing untuk Tim

Tidak perlu install apa pun selain browser — semua fitur jalan di sisi client (`localStorage`), tidak ada backend sungguhan. Ikuti urutan di bawah dari awal biar ketemu semua fitur wajib lomba.

### 1. Homepage (`index.html`)
- Buka `http://localhost:8000`. Cek Announcement Bar, Navbar, dan scroll semua section sampai Footer.
- Coba klik kategori filter di section "Kelas Populer" (Semua / Literasi Digital Dasar / dst) — kartu kelas harus ikut berubah.
- Ketik sesuatu di kolom pencarian navbar (misal "canva") — kartu kelas ikut ter-filter live.
- Klik beberapa kartu kelas berbeda di "Kelas Populer" → tombol "Lihat Kelas" harus membuka `course-detail.html` dengan **konten yang berbeda-beda** (judul, deskripsi, kurikulum, ulasan sesuai kelasnya).
- Klik beberapa kartu di section "Bootcamp" → juga harus membuka `bootcamp-detail.html` dengan konten berbeda per bootcamp.
- Kecilkan lebar browser (atau buka DevTools → toggle device toolbar) untuk cek breakpoint mobile/tablet: hamburger menu di navbar harus muncul dan bisa dibuka/ditutup.

### 2. Daftar & Masuk (`pages/signup.html`) — fitur Authentication
- Klik "Gabung Sekarang" dari navbar/hero. Coba submit form kosong → harus muncul pesan error, bukan lolos begitu saja.
- Coba isi kata sandi & konfirmasi yang beda → harus muncul error "Konfirmasi kata sandi tidak sama".
- Daftar dengan data valid → otomatis masuk ke `dashboard.html`.
- Logout (tombol "Keluar" di navbar dashboard), lalu buka lagi `pages/signup.html`, klik tab "Masuk", coba login pakai email/sandi yang salah → harus muncul error. Login dengan data yang benar → balik lagi ke dashboard.
- Coba akses langsung `pages/dashboard.html` tanpa login (mode private browser) → harus otomatis dilempar ke halaman Daftar/Masuk.

### 3. Dashboard & Tracking Progress (`pages/dashboard.html`)
- Cek nama & inisial di sidebar/navbar sudah sesuai nama yang didaftarkan.
- Cek kartu statistik dan progress bar "Lanjutkan Belajar" & "Progres Jalur Belajar".
- Klik salah satu kartu "Lanjutkan Belajar" → pastikan membuka `course-detail.html` dengan kelas yang sesuai (bukan selalu kelas yang sama).

### 4. Chatbot (mock)
- Di halaman logged-in mana pun, klik tombol kuning "🔧 Our Service" di sisi kanan layar → widget Customer Service harus muncul.
- Klik salah satu pertanyaan FAQ → jawaban otomatis muncul di area chat.
- Ketik pertanyaan bebas di kolom input lalu kirim → harus muncul balasan otomatis juga.
- Klik "💬 Discussion Forum" → muncul toast "akan segera hadir".

### 5. Kelas Saya, Bootcamp Saya, Sertifikat (`pages/courses.html`, `pages/bootcamps.html`, `pages/certificates.html`)
- Cek tombol filter status di "Kelas Saya" (Semua/Sedang Berjalan/Selesai).
- Di "Bootcamp Saya", klik "Buka Bootcamp" (yang sudah terdaftar) dan "Daftar Bootcamp" (yang tersedia) → harus membuka `bootcamp-detail.html` dengan bootcamp yang sesuai.
- Di halaman detail bootcamp, klik "Daftar Bootcamp Sekarang" → lanjut ke `pages/payment.html` dengan ringkasan pesanan (nama bootcamp & harga) yang sesuai.
- Isi form pembayaran lalu submit → modal "Terima Kasih" harus muncul menyebut nama bootcamp yang benar.
- Di "Sertifikat Saya", klik "Lihat Sertifikat" → cek halaman `certificate-detail.html` menampilkan kode verifikasi & tanggal terbit.

### 6. Aksesibilitas cepat
- Coba navigasi pakai keyboard saja (Tab/Enter) dari navbar sampai footer — pastikan ada garis fokus yang terlihat di setiap link/tombol.
- Cek semua teks masih terbaca jelas (kontras) di light mode browser standar.

Kalau ada tombol yang salah arah, data yang ketuker, atau halaman yang error, catat halaman + langkah reproduksinya lalu laporkan.

## Struktur Folder
```
project-root/
├── index.html                     # Homepage
├── pages/
│   ├── signup.html                # Daftar / Masuk (Auth)
│   ├── dashboard.html              # Dashboard (logged-in)
│   ├── courses.html                # Kelas Saya (logged-in)
│   ├── bootcamps.html              # Bootcamp Saya (logged-in)
│   ├── certificates.html           # Sertifikat Saya (logged-in)
│   ├── course-detail.html          # Detail Kelas (publik, dinamis via ?id=)
│   ├── bootcamp-detail.html        # Detail Bootcamp (publik, dinamis via ?id=)
│   ├── certificate-detail.html     # Verifikasi Sertifikat (publik)
│   ├── learn-path.html             # Jalur Belajar (publik)
│   └── payment.html                # Pembayaran Bootcamp (logged-in, dinamis via ?id=)
├── assets/
│   ├── images/
│   └── icons/
├── css/                            # custom CSS tambahan
├── js/
│   ├── main.js                     # nav mobile, filter & search kelas (global)
│   ├── auth.js                     # logic Daftar/Masuk (mock localStorage)
│   ├── dashboard.js                # identitas user, logout, widget chatbot
│   ├── courses-data.js             # data katalog kelas (dipakai lintas halaman)
│   ├── course-detail.js            # render detail kelas dari ?id=
│   ├── bootcamps-data.js           # data katalog bootcamp (dipakai lintas halaman)
│   ├── bootcamp-detail.js          # render detail bootcamp dari ?id=
│   ├── payment.js                  # ringkasan pesanan + modal Thank You
│   └── tailwind-config.js          # token warna & font Design.md
└── README.md
```

## Fitur Interaktif
1. **Authentication (Daftar/Masuk)** — `pages/signup.html` + `js/auth.js`, mock via `localStorage`.
2. **Dashboard & Tracking Progress** — `pages/dashboard.html`, `pages/courses.html`, `pages/learn-path.html`: progress bar kelas & jalur belajar.
3. **Chatbot (mock)** — widget Customer Service di semua halaman logged-in, FAQ + balasan otomatis.

Semua 10 halaman pada `.claude/agent.md` sudah dibangun. Halaman logged-in (`dashboard`, `courses`, `bootcamps`, `certificates`, `payment`) dilindungi guard sederhana: jika `localStorage.codeverse_session` belum ada, otomatis diarahkan ke `pages/signup.html`.

## Tech Stack
- Plain HTML per halaman
- Tailwind CSS via CDN
- Vanilla JS
