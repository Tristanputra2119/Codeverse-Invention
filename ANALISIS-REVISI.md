# Analisis Revisi EduVerse

## Ringkasan

EduVerse sudah memiliki fondasi visual yang konsisten: warna kuning-navy, font Inter, layout responsif, halaman katalog, detail kelas, bootcamp, autentikasi, pembayaran, dashboard, dan forum.

Revisi paling penting bukan pada warna, tetapi pada konsistensi identitas, alur utama, validitas data, dan beberapa fungsi yang masih berupa placeholder. Temuan ini penting dibereskan sebelum demo lomba agar juri tidak menemukan tautan salah atau fitur yang terlihat aktif tetapi tidak bekerja.

## Metode Audit

- Server lokal: `http://localhost:8000`
- Browser: Chrome DevTools MCP
- Viewport desktop: `1440 x 900`
- Viewport mobile: `390 x 844`
- Lighthouse homepage: Accessibility `96`, Best Practices `100`, SEO `100`
- Lighthouse menemukan satu kegagalan kontras warna
- Audit source: `index.html`, `pages/`, `js/`, `README.md`

## Prioritas Revisi

| Prioritas | Area | Temuan | Rekomendasi |
|---|---|---|---|
| P0 | Detail course | Empat kartu AI di `index.html:331`, `341`, `351`, dan `361` semuanya mengarah ke `course-detail.html?id=generative-ai-specialist`. Akibatnya semua kartu membuka detail yang sama. | Tambahkan ID course yang benar ke `js/courses-data.js`, lalu ubah setiap `href` sesuai kartu. Pastikan setiap kartu menghasilkan judul, gambar, deskripsi, dan kurikulum yang berbeda. |
| P0 | Fallback detail | `js/course-detail.js:7-10`, `js/bootcamp-detail.js:11-15`, dan `js/payment.js:11-15` mengganti ID tidak dikenal dengan data pertama. URL salah tetap terlihat valid tetapi menampilkan data yang salah. | Tampilkan halaman `404` atau pesan `Data tidak ditemukan` ketika ID tidak valid. Jangan fallback diam-diam ke item pertama. |
| P0 | Search dan filter homepage | `js/main.js:15-75` mencari `.course-card` dan `.filter-btn`, tetapi `index.html` tidak memiliki elemen tersebut. Search homepage terlihat aktif tetapi tidak memfilter konten. | Pilih satu: tambahkan katalog course beserta class/filter yang sesuai, atau hapus klaim bahwa search/filter homepage bekerja. Pastikan search mencari judul, kategori, dan deskripsi. |
| P0 | Akses halaman private | `pages/dashboard.html`, `courses.html`, `bootcamps.html`, `certificates.html`, dan `payment.html` memuat komentar bahwa auth guard dihapus. Audit pada browser terisolasi tanpa session tetap membuka dashboard. Ini bertentangan dengan klaim keamanan di `README.md:30-31` dan `README.md:94`. | Jika alur login memang wajib, pulihkan guard berbasis session pada setiap halaman private. Jika ini sengaja demo publik, ubah dokumentasi dan label UI agar tidak mengklaim halaman terlindungi. |
| P0 | Pembayaran | `js/payment.js:28-37` langsung membuka modal sukses ketika form disubmit. Tidak ada penyimpanan pesanan, verifikasi transaksi, atau status pembayaran. | Untuk demo, ubah teks menjadi `Pendaftaran berhasil (simulasi)` dan tampilkan data input secara aman. Untuk produk nyata, gunakan backend/payment gateway dan jangan menyatakan pembayaran berhasil sebelum ada konfirmasi server. |
| P1 | Identitas brand | Sebelum revisi, nama brand tidak konsisten pada title, footer, metadata, komentar, data, dan heading. | Gunakan `EduVerse` secara konsisten pada semua title, footer, metadata, data, dan copy promosi. Status: selesai. |
| P1 | Bahasa antarmuka | Sebagian halaman memakai `lang="en"`, sebagian `lang="id"`. Copy juga bercampur antara Bahasa Indonesia dan Inggris. | Karena target laporan dan lomba berbahasa Indonesia, gunakan `lang="id"` secara konsisten lalu terjemahkan label utama, CTA, footer, metadata, dan pesan error. Istilah teknis seperti HTML, CSS, dan JavaScript tetap boleh berbahasa Inggris. |
| P1 | Konsistensi waktu dan data | Footer masih bertuliskan `2024`, sementara data bootcamp memakai tanggal `2026`. Homepage memakai teks statis `Starts in 2 days`; pada tanggal audit `24 Agustus 2026`, beberapa jadwal sudah lewat. | Buat tanggal berbasis data dan hitung countdown secara dinamis. Samakan tahun footer, jadwal, sertifikat, dan konten promosi. |
| P1 | Placeholder link | Sebelum revisi, banyak link memakai `href="#"`, termasuk sosial media, footer, kategori Learn Path, `View All`, `View History`, dan `See Mentors`. | Link legal kini menuju halaman kebijakan, navigasi bootcamp menuju anchor nyata, dan fitur yang belum tersedia menuju `Segera Hadir`. Status: selesai. |
| P1 | Aksesibilitas kontras | Lighthouse gagal pada teks `Professional` di `index.html:107`: `#FDC937` di atas putih hanya memiliki rasio kontras `1.54`, padahal teks besar membutuhkan minimal `3:1`. | Gunakan `#765A00` atau `#272E3F` untuk teks kuning di atas putih. Pertahankan `#FDC937` untuk background tombol, badge, atau teks di atas navy. |
| P1 | Forum mobile | `pages/discussion.html:52-54` memiliki tombol hamburger dengan `aria-controls="mobile-menu"`, tetapi halaman tidak memiliki elemen `#mobile-menu`. Tombol tidak berubah saat diklik pada mobile. | Tambahkan menu mobile yang sama dengan halaman lain, atau hilangkan tombol hamburger dan tampilkan navigasi yang sesuai. |
| P1 | Forum accessibility | Tombol kirim pada `pages/discussion.html:308-312` hanya berisi ikon SVG tanpa accessible name. Snapshot accessibility membacanya sebagai button kosong. | Tambahkan `aria-label="Kirim pesan"`. Pastikan tombol pencarian, menu, attachment, image, emoji, dan tombol accordion memiliki fungsi atau status yang jelas. |
| P1 | Metric dashboard | `pages/dashboard.html:212` memakai label `Certification expired`, tetapi angka `8` dan teks `60% monthly increase` tidak menjelaskan konteks dengan baik. | Ganti dengan metrik yang benar, misalnya `Certificates Earned`, atau tampilkan status expired lengkap dengan tanggal dan tindakan perpanjangan. |
| P2 | Social login | Tombol Google, Apple, dan Facebook pada `pages/signup.html:94-102` serta `153-162` tidak memiliki handler. Tombol terlihat seperti fitur aktif. | Hubungkan ke OAuth jika diperlukan. Jika belum, ubah menjadi tombol disabled atau beri label `Segera hadir`. |
| P2 | Tab autentikasi | `pages/signup.html:41-42` memakai button sebagai tab, tetapi belum memakai role `tab`, `aria-controls`, dan `aria-selected` pada struktur tab yang lengkap. | Lengkapi pola WAI-ARIA tab atau gunakan heading/link sederhana jika pergantian panel tidak perlu diperlakukan sebagai tab. |
| P2 | Forum mock | Search within chat, More options, attachment, image, emoji, dan beberapa tombol diskusi belum memiliki perilaku nyata. | Tandai sebagai mock/demo dengan feedback visual, atau implementasikan satu per satu. Jangan biarkan interaksi tampak rusak tanpa respons. |
| P2 | Produksi dan performa | Semua halaman memuat Tailwind melalui CDN dan browser memberi peringatan `cdn.tailwindcss.com should not be used in production`. Beberapa aset lokal berukuran besar, termasuk `certificate_3.jpg` sekitar `11 MB`, `certificate_4.jpg` sekitar `9.2 MB`, dan `cert-ibm.png` sekitar `5.1 MB`. | Build Tailwind secara lokal. Kompres gambar, ubah ke WebP/AVIF, sediakan ukuran responsif dengan `srcset`, dan self-host aset penting agar demo tidak bergantung pada CDN/Unsplash. |
| P2 | Design token | Mayoritas spacing mengikuti kelipatan 4 px, tetapi kartu AI memakai `p-[17px]` pada `index.html:324`, `334`, `344`, dan `354`. Radius aktual juga bercampur: 8 px untuk kontrol, 12 px untuk kartu, dan 9999 px untuk pill. | Ganti `p-[17px]` menjadi `p-4` atau `p-5`. Dokumentasikan radius sebagai token: `8px` kontrol, `12px` kartu, `9999px` pill. |

## Hal yang Sudah Baik

- Homepage tidak mengalami horizontal overflow pada mobile `390px`.
- Hamburger homepage dapat membuka menu mobile.
- Skip link tersedia pada banyak halaman.
- Sebagian besar gambar memiliki `alt` text.
- Struktur heading dan landmark homepage cukup baik.
- Lighthouse Best Practices dan SEO homepage memperoleh skor `100` pada snapshot audit.
- Token warna utama sudah mudah dikenali: primary `#FDC937`, secondary `#272E3F`, neutral `#F5F5F5`.

## Urutan Pengerjaan yang Disarankan

1. Perbaiki ID dan data detail course.
2. Perbaiki fallback ID agar URL salah tidak menampilkan konten palsu.
3. Putuskan status autentikasi: alur private sungguhan atau demo publik yang terdokumentasi.
4. Ubah wording pembayaran agar tidak mengklaim transaksi nyata.
5. Aktifkan search/filter homepage atau hilangkan UI yang belum bekerja.
6. Samakan brand, bahasa, tahun, tanggal, dan angka statistik.
7. [Selesai] Ganti seluruh placeholder `href="#"` yang terlihat oleh pengguna.
8. Perbaiki kontras hero dan accessible name forum.
9. Tambahkan mobile menu pada forum.
10. Optimalkan aset dan pindahkan Tailwind dari CDN sebelum deployment.

## Kriteria Selesai

- Setiap kartu AI membuka detail yang sesuai.
- ID tidak valid menampilkan pesan error/404 yang jelas.
- Search dan filter benar-benar mengubah daftar konten.
- Halaman private konsisten dengan keputusan auth yang dipilih.
- Pembayaran diberi label simulasi atau terhubung ke verifikasi server.
- Tidak ada link pengguna yang masih memakai `href="#"` tanpa alasan.
- Semua halaman memakai nama brand, bahasa, dan tahun yang konsisten.
- Homepage dan forum lulus uji mobile, termasuk hamburger menu forum.
- Lighthouse tidak lagi melaporkan kegagalan kontras hero.
- Gambar besar sudah dikompres dan aset CDN memiliki fallback/local build.
