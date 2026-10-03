export interface SeedCourse { category: string; title: string; image: string; duration: string; description: string; fullDescription: string; curriculum: { title: string; duration: string; content: string }[] }
export interface SeedBootcamp { category: string; title: string; image: string; startDate: string; duration: string; groupSize: string; price: number; originalPrice: number; description: string; fullDescription: string; schedule: { title: string; duration: string }[]; mentor: { name: string; role: string } }
export const courses: Record<string, SeedCourse> = {
  "literasi-digital-pemula": {
    "category": "Literasi Digital Dasar",
    "title": "Literasi Digital untuk Pemula",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar mengelola folder, email, dan identitas digital secara mandiri. Hasil belajar berupa folder dokumen lamaran dan email pengantar.",
    "fullDescription": "Kelas mandiri EduVerse untuk mengelola folder, email, dan identitas digital secara mandiri. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: folder dokumen lamaran dan email pengantar. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Perangkat, folder, dan browser",
        "duration": "60 menit",
        "content": "Tujuan belajar: perangkat, folder, dan browser.\n\nSistem operasi mengelola berkas dan aplikasi. Bedakan berkas dengan folder, lalu beri nama berkas yang menjelaskan isi serta versinya. Browser membuka situs melalui alamat URL; gembok HTTPS menunjukkan koneksi terenkripsi, bukan jaminan bahwa penjual dapat dipercaya.\n\nLatihan: Buat folder Lamaran dengan subfolder CV dan Portofolio. Simpan berkas cv-nama-v1.pdf, lalu temukan kembali tanpa memakai daftar berkas terakhir.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Email profesional dan lampiran",
        "duration": "60 menit",
        "content": "Tujuan belajar: email profesional dan lampiran.\n\nKolom To ditujukan kepada penerima utama, CC untuk tembusan, dan BCC menyembunyikan daftar penerima. Subjek harus menjelaskan tujuan pesan. Sebelum mengirim, periksa alamat, ukuran lampiran, dan apakah berkas yang dimaksud benar-benar terpasang.\n\nLatihan: Tulis email lamaran dengan subjek, sapaan, dua paragraf singkat, dan lampiran PDF. Kirim dahulu ke alamat sendiri untuk memeriksa hasilnya.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Memeriksa tautan dan izin akun",
        "duration": "60 menit",
        "content": "Tujuan belajar: memeriksa tautan dan izin akun.\n\nPenipu sering memakai urgensi untuk meminta OTP atau transfer uang. Periksa ejaan domain dan buka aplikasi resmi secara mandiri. OTP dan kode pemulihan tidak boleh dibagikan. Batasi izin aplikasi hanya pada akses yang diperlukan.\n\nLatihan: Bandingkan domain bank-contoh.id dengan bank-contoh.id.login-palsu.example. Jelaskan domain utama masing-masing dan susun daftar izin aplikasi yang dapat dicabut.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Proyek identitas digital",
        "duration": "60 menit",
        "content": "Tujuan belajar: proyek identitas digital.\n\nDokumen yang rapi memudahkan orang lain memahami pekerjaan Anda. Gunakan satu format penamaan, simpan cadangan, dan bagikan tautan dengan izin baca. Hindari mencantumkan nomor identitas atau alamat rumah pada portofolio publik.\n\nLatihan: Selesaikan folder lamaran, email pengantar, serta tautan portofolio baca-saja. Uji tautan melalui jendela browser tanpa login.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "office-produktivitas-kerja": {
    "category": "Produktivitas & Perkantoran",
    "title": "Microsoft Office untuk Produktivitas Kerja",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar menyusun dokumen, tabel penjualan, dan presentasi yang konsisten. Hasil belajar berupa laporan penjualan bulanan beserta presentasi.",
    "fullDescription": "Kelas mandiri EduVerse untuk menyusun dokumen, tabel penjualan, dan presentasi yang konsisten. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: laporan penjualan bulanan beserta presentasi. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Dokumen dengan struktur heading",
        "duration": "60 menit",
        "content": "Tujuan belajar: dokumen dengan struktur heading.\n\nHeading membentuk hierarki dokumen dan dapat dipakai membuat daftar isi. Pisahkan isi dari format: gunakan style untuk judul dan paragraf, bukan mengubah ukuran huruf satu per satu. Tabel cocok untuk data berulang, bukan seluruh tata letak halaman.\n\nLatihan: Buat laporan satu halaman dengan judul, ringkasan, dua heading, dan tabel tiga produk.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Rumus dan referensi sel",
        "duration": "60 menit",
        "content": "Tujuan belajar: rumus dan referensi sel.\n\nRumus dimulai dengan tanda sama dengan. Referensi relatif berubah saat disalin, sedangkan $A$1 mengunci baris serta kolom. Untuk menghitung omzet, kalikan jumlah unit dengan harga per unit, lalu jumlahkan hasilnya dengan SUM.\n\nLatihan: Buat lima baris transaksi. Gunakan =B2*C2 untuk omzet, salin ke bawah, dan periksa total dengan perhitungan manual.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Slide dengan pesan tunggal",
        "duration": "60 menit",
        "content": "Tujuan belajar: slide dengan pesan tunggal.\n\nSatu slide sebaiknya membawa satu pesan utama. Judul menyatakan temuan, bukan sekadar nama topik. Gunakan grafik untuk perbandingan angka dan tulis satuan secara jelas agar pembaca tidak salah menafsirkan data.\n\nLatihan: Buat tiga slide: hasil bulanan, produk terlaris, dan tindakan berikutnya. Cantumkan satu temuan pada setiap judul.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Proyek laporan bulanan",
        "duration": "60 menit",
        "content": "Tujuan belajar: proyek laporan bulanan.\n\nAngka dalam dokumen, spreadsheet, dan slide harus berasal dari sumber yang sama. Tentukan periode laporan, satuan mata uang, serta asumsi yang digunakan. Periksa kembali total sebelum mengekspor PDF.\n\nLatihan: Kumpulkan spreadsheet transaksi, PDF laporan, dan tiga slide. Pastikan angka total identik pada ketiga berkas.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "pemasaran-digital-umkm": {
    "category": "Pemasaran Digital",
    "title": "Dasar Pemasaran Digital untuk UMKM",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar merancang kampanye produk dengan target dan ukuran hasil yang jelas. Hasil belajar berupa kalender konten tujuh hari untuk usaha kopi.",
    "fullDescription": "Kelas mandiri EduVerse untuk merancang kampanye produk dengan target dan ukuran hasil yang jelas. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: kalender konten tujuh hari untuk usaha kopi. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Target pasar dan pesan produk",
        "duration": "60 menit",
        "content": "Tujuan belajar: target pasar dan pesan produk.\n\nTarget pasar adalah kelompok dengan kebutuhan spesifik. Mulai dari masalah pelanggan, bukan daftar fitur produk. Pisahkan segmen berdasarkan kebutuhan dan cara membeli agar pesan promosi tidak terlalu umum.\n\nLatihan: Tulis profil pelanggan kopi rumahan: kebutuhan, hambatan, kanal yang dipakai, dan alasan membeli.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Konten dan ajakan bertindak",
        "duration": "60 menit",
        "content": "Tujuan belajar: konten dan ajakan bertindak.\n\nKonten dapat bertujuan memberi informasi, membangun kepercayaan, atau mengajak pembelian. Satu konten cukup memakai satu ajakan bertindak. Hindari klaim manfaat yang tidak dapat dibuktikan.\n\nLatihan: Buat tiga caption: tutorial menyeduh, cerita proses produksi, dan penawaran paket. Tentukan satu CTA untuk tiap caption.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Anggaran dan metrik kampanye",
        "duration": "60 menit",
        "content": "Tujuan belajar: anggaran dan metrik kampanye.\n\nJangkauan menghitung orang yang melihat konten; klik menunjukkan tindakan pada tautan. CTR adalah klik dibagi tayangan, bukan dibagi pembelian. Catat biaya dan hasil setiap kanal sebelum memutuskan kampanye mana yang diteruskan.\n\nLatihan: Dengan 2000 tayangan dan 60 klik, hitung CTR. Buat tabel anggaran simulasi Rp100.000 tanpa menjalankan iklan berbayar.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Proyek kalender promosi",
        "duration": "60 menit",
        "content": "Tujuan belajar: proyek kalender promosi.\n\nKalender konten menyatukan tanggal, tujuan, format, pesan, dan metrik. Gunakan asumsi yang tertulis agar hasil simulasi tidak dianggap penjualan nyata. Setelah publikasi, bandingkan hasil dengan target.\n\nLatihan: Susun tujuh konten untuk satu produk kopi beserta CTA dan metrik. Tandai semua angka contoh sebagai simulasi.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "coding-dasar-website": {
    "category": "Coding Dasar",
    "title": "Membuat Website Pertamamu",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar membangun halaman portofolio yang responsif dan mudah digunakan. Hasil belajar berupa website portofolio satu halaman.",
    "fullDescription": "Kelas mandiri EduVerse untuk membangun halaman portofolio yang responsif dan mudah digunakan. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: website portofolio satu halaman. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "HTML semantik",
        "duration": "60 menit",
        "content": "Tujuan belajar: html semantik.\n\nHTML menyatakan makna isi halaman. Gunakan header, nav, main, section, dan footer sesuai fungsinya. Heading membentuk hierarki informasi; tombol menjalankan aksi, sedangkan tautan memindahkan pengguna ke halaman atau lokasi lain.\n\nLatihan: Buat halaman berisi profil, tiga proyek, serta formulir kontak dengan label yang terhubung ke input.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "CSS responsif",
        "duration": "60 menit",
        "content": "Tujuan belajar: css responsif.\n\nBox model terdiri dari content, padding, border, dan margin. Flexbox cocok untuk susunan satu arah; Grid cocok untuk baris dan kolom. Gunakan ukuran fleksibel dan media query agar konten tetap terbaca pada layar sempit.\n\nLatihan: Buat kartu proyek memakai Grid. Tampilkan satu kolom pada ponsel dan tiga kolom pada desktop tanpa scroll horizontal.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Interaksi JavaScript",
        "duration": "60 menit",
        "content": "Tujuan belajar: interaksi javascript.\n\nDOM adalah representasi halaman yang dapat dibaca dan diubah JavaScript. Gunakan addEventListener untuk menangani aksi. Periksa input sebelum memprosesnya dan tampilkan pesan kesalahan dekat bagian yang perlu diperbaiki.\n\nLatihan: Tambahkan filter proyek berdasarkan kategori dengan tombol. Pastikan semua proyek dapat ditampilkan kembali.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Proyek portofolio",
        "duration": "60 menit",
        "content": "Tujuan belajar: proyek portofolio.\n\nPortofolio yang baik menjelaskan masalah, kontribusi, dan hasil setiap proyek. Periksa navigasi keyboard, teks alternatif gambar, dan kontras. Jangan memasukkan kunci API atau token ke kode frontend.\n\nLatihan: Selesaikan halaman dan uji pada lebar 360px serta 1280px. Pastikan semua tombol dapat dipakai tanpa mouse.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "keamanan-data-privasi": {
    "category": "Literasi Digital Dasar",
    "title": "Keamanan Data & Privasi di Internet",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar melindungi akun dan mengurangi paparan data pribadi. Hasil belajar berupa checklist keamanan tiga akun pribadi.",
    "fullDescription": "Kelas mandiri EduVerse untuk melindungi akun dan mengurangi paparan data pribadi. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: checklist keamanan tiga akun pribadi. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Phishing dan domain",
        "duration": "60 menit",
        "content": "Tujuan belajar: phishing dan domain.\n\nPhishing meniru pihak tepercaya untuk memperoleh rahasia. Nama pengirim tidak membuktikan keaslian pesan. Periksa domain utama, hindari lampiran yang tidak diharapkan, dan konfirmasi permintaan sensitif melalui kanal terpisah.\n\nLatihan: Susun checklist lima langkah untuk memeriksa pesan hadiah yang meminta OTP.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Kata sandi dan autentikasi",
        "duration": "60 menit",
        "content": "Tujuan belajar: kata sandi dan autentikasi.\n\nGunakan kata sandi unik untuk setiap akun agar satu kebocoran tidak membuka semua akun. Password manager membantu membuat dan menyimpannya. Aktifkan verifikasi dua langkah dan simpan kode pemulihan di tempat terpisah.\n\nLatihan: Buat rencana pengamanan tiga akun. Jangan menuliskan kata sandi atau kode pemulihan pada tugas.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Privasi dan cadangan",
        "duration": "60 menit",
        "content": "Tujuan belajar: privasi dan cadangan.\n\nData yang sudah dibagikan dapat disalin pihak lain. Batasi informasi publik, tinjau izin aplikasi, dan simpan cadangan berkas penting. Cadangan perlu diuji pemulihannya agar benar-benar berguna saat perangkat hilang.\n\nLatihan: Tinjau izin satu aplikasi dan pulihkan satu berkas dari cadangan tanpa memakai data sensitif.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Proyek audit akun",
        "duration": "60 menit",
        "content": "Tujuan belajar: proyek audit akun.\n\nAudit keamanan mencatat kondisi dan tindakan berikutnya. Prioritaskan email utama karena sering dipakai memulihkan akun lain. Catat tanggal pemeriksaan tanpa memasukkan rahasia ke laporan.\n\nLatihan: Buat checklist tiga akun dengan status kata sandi unik, 2FA, dan pemulihan. Gunakan nama samaran.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "desain-konten-canva": {
    "category": "Pemasaran Digital",
    "title": "Desain Konten dengan Canva",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar membuat konten promosi dengan hierarki visual yang jelas. Hasil belajar berupa tiga desain promosi untuk usaha kopi.",
    "fullDescription": "Kelas mandiri EduVerse untuk membuat konten promosi dengan hierarki visual yang jelas. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: tiga desain promosi untuk usaha kopi. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Brief dan ukuran kanvas",
        "duration": "60 menit",
        "content": "Tujuan belajar: brief dan ukuran kanvas.\n\nBrief menyatakan audiens, pesan, format, dan tindakan yang diharapkan. Ukuran desain mengikuti tempat publikasi. Template membantu memulai, tetapi isi dan prioritas visual perlu disesuaikan dengan tujuan.\n\nLatihan: Tulis brief promosi kopi dan buat kanvas persegi 1080 x 1080 piksel.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Tipografi dan kontras",
        "duration": "60 menit",
        "content": "Tujuan belajar: tipografi dan kontras.\n\nGunakan sedikit jenis huruf dan bedakan judul dengan isi melalui ukuran serta ketebalan. Kontras membantu teks terbaca. Ruang kosong memisahkan elemen dan mengurangi beban visual.\n\nLatihan: Susun judul, harga, dan CTA memakai dua ukuran huruf. Uji keterbacaan desain pada layar ponsel.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Konsistensi konten",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsistensi konten.\n\nGunakan warna, jarak, dan posisi elemen yang konsisten agar rangkaian konten mudah dikenali. Foto harus relevan dengan pesan dan memiliki hak penggunaan yang sesuai. Simpan versi sumber agar desain bisa diperbarui.\n\nLatihan: Buat tiga variasi konten dengan palet dan logo yang sama, tetapi pesan berbeda.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Proyek paket promosi",
        "duration": "60 menit",
        "content": "Tujuan belajar: proyek paket promosi.\n\nEkspor sesuai kebutuhan: PNG untuk gambar transparan atau detail tajam, JPEG untuk foto yang lebih ringan. Periksa ejaan, ukuran file, dan tampilan setelah ekspor.\n\nLatihan: Ekspor tiga desain, lalu dokumentasikan tujuan dan CTA masing-masing dalam satu halaman.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "generative-ai-specialist": {
    "category": "Artificial Intelligence",
    "title": "Generative AI untuk Produktivitas",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar menerapkan generative ai untuk produktivitas melalui latihan terukur. Hasil belajar berupa workflow ringkasan dokumen dengan pemeriksaan fakta.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan generative ai untuk produktivitas melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: workflow ringkasan dokumen dengan pemeriksaan fakta. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nModel generatif memprediksi keluaran berdasarkan pola data, sehingga jawabannya dapat keliru walau terdengar meyakinkan. Pisahkan instruksi, konteks, dan format keluaran; sertakan contoh bila tugas ambigu. Jangan memasukkan informasi rahasia ke layanan tanpa izin.\n\nLatihan: Gunakan dokumen contoh buatan sendiri, minta ringkasan lima poin, lalu cocokkan setiap poin dengan kalimat sumber.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Evaluasi dengan rubrik",
        "duration": "60 menit",
        "content": "Tujuan belajar: evaluasi dengan rubrik.\n\nNilai ketepatan, kelengkapan, dan konsistensi menggunakan rubrik tertulis. Simpan contoh input, output, serta koreksi agar percobaan dapat dibandingkan. Sediakan pemeriksaan manusia untuk keputusan yang berdampak pada pengguna.\n\nLatihan: Bandingkan dua prompt pada tiga dokumen. Catat klaim tanpa sumber dan perbaiki prompt tanpa mengubah dokumen pengujian.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Workflow ringkasan yang dapat ditelusuri",
        "duration": "60 menit",
        "content": "Tujuan belajar: workflow ringkasan yang dapat ditelusuri.\n\nWorkflow memisahkan pengambilan dokumen, pembuatan ringkasan, dan pemeriksaan hasil. Setiap ringkasan perlu mencantumkan identitas dokumen serta bagian sumbernya. Bila sumber tidak menyediakan jawaban, keluaran harus menyatakan keterbatasan itu alih-alih mengisi informasi baru.\n\nLatihan: Susun alur tiga tahap untuk merangkum dua dokumen contoh. Tambahkan langkah yang menolak klaim tanpa bagian sumber.\n\nChecklist hasil: simpan input dan hasil percobaan, catat asumsi, lalu jelaskan bagaimana pendekatan berubah ketika data atau kebutuhan pengguna berbeda."
      },
      {
        "title": "Proyek akhir",
        "duration": "60 menit",
        "content": "Tujuan belajar: menyusun proyek yang dapat diperiksa ulang.\n\nMulai dari pertanyaan yang ingin dijawab, tentukan input yang dibutuhkan, lalu tulis langkah kerja secara berurutan. Gunakan data sintetis tanpa informasi pribadi. Hasil yang baik tidak hanya menampilkan keluaran akhir, tetapi juga asumsi, cara pengujian, dan kondisi ketika pendekatan gagal.\n\nLatihan: Susun workflow ringkasan dokumen dengan pemeriksaan fakta. Dokumentasikan input, hasil, dan keterbatasan; gunakan data sintetis yang tidak mengandung informasi pribadi.\n\nChecklist hasil: sertakan ringkasan tujuan, contoh input-output, hasil evaluasi, keterbatasan, dan petunjuk menjalankan ulang proyek."
      }
    ]
  },
  "ai-machine-learning-engineer": {
    "category": "Artificial Intelligence",
    "title": "Machine Learning Terapan",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar menerapkan machine learning terapan melalui latihan terukur. Hasil belajar berupa model prediksi harga dengan laporan evaluasi.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan machine learning terapan melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: model prediksi harga dengan laporan evaluasi. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nPisahkan data pelatihan dan data pengujian sebelum menyesuaikan model. Data leakage terjadi ketika informasi dari target atau masa depan masuk ke fitur. Mulai dengan baseline sederhana, lalu bandingkan model menggunakan split yang sama.\n\nLatihan: Buat dataset harga sintetis dan pisahkan 80 persen untuk latihan serta 20 persen untuk pengujian.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Evaluasi prediksi",
        "duration": "60 menit",
        "content": "Tujuan belajar: evaluasi prediksi.\n\nMAE mengukur rata-rata selisih absolut prediksi dan nilai aktual dalam satuan target. Nilai metrik harus disertai konteks data dan baseline. Kesalahan pada subkelompok tertentu dapat tersembunyi oleh rata-rata keseluruhan.\n\nLatihan: Hitung MAE untuk prediksi [10, 20, 30] terhadap nilai [12, 18, 33]. Tulis keterbatasan sampel kecil tersebut.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Fitur dan baseline",
        "duration": "60 menit",
        "content": "Tujuan belajar: fitur dan baseline.\n\nFitur harus tersedia pada waktu prediksi dilakukan. Untuk harga rumah, luas dapat digunakan tetapi harga jual akhir tidak boleh dijadikan fitur. Baseline median harga menunjukkan apakah model yang lebih rumit memberikan peningkatan yang berarti.\n\nLatihan: Bandingkan prediksi median dengan model sederhana pada split yang sama. Catat MAE keduanya dan jelaskan fitur yang dikeluarkan.\n\nChecklist hasil: simpan input dan hasil percobaan, catat asumsi, lalu jelaskan bagaimana pendekatan berubah ketika data atau kebutuhan pengguna berbeda."
      },
      {
        "title": "Proyek akhir",
        "duration": "60 menit",
        "content": "Tujuan belajar: menyusun proyek yang dapat diperiksa ulang.\n\nMulai dari pertanyaan yang ingin dijawab, tentukan input yang dibutuhkan, lalu tulis langkah kerja secara berurutan. Gunakan data sintetis tanpa informasi pribadi. Hasil yang baik tidak hanya menampilkan keluaran akhir, tetapi juga asumsi, cara pengujian, dan kondisi ketika pendekatan gagal.\n\nLatihan: Susun model prediksi harga dengan laporan evaluasi. Dokumentasikan input, hasil, dan keterbatasan; gunakan data sintetis yang tidak mengandung informasi pribadi.\n\nChecklist hasil: sertakan ringkasan tujuan, contoh input-output, hasil evaluasi, keterbatasan, dan petunjuk menjalankan ulang proyek."
      }
    ]
  },
  "ai-product-manager": {
    "category": "Product & Technology",
    "title": "Product Management untuk Produk AI",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar menerapkan product management untuk produk ai melalui latihan terukur. Hasil belajar berupa product brief asisten pencarian dokumen.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan product management untuk produk ai melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: product brief asisten pencarian dokumen. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nMulai dari masalah pengguna dan biaya kegagalan, lalu tentukan apakah AI memang dibutuhkan. Petakan input, keluaran, dan pihak yang memeriksa hasil. Produk perlu memberikan manfaat yang dapat diuji, bukan sekadar memakai model terbaru.\n\nLatihan: Wawancarai pengguna imajiner pencarian dokumen dan tulis tiga asumsi yang perlu divalidasi.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Metrik dan eksperimen",
        "duration": "60 menit",
        "content": "Tujuan belajar: metrik dan eksperimen.\n\nMetrik keberhasilan harus mengukur hasil pengguna, seperti waktu menemukan informasi yang benar. Tentukan baseline, kriteria penerimaan, dan jalur saat model gagal. Batasi pilot agar dampak kesalahan dapat diamati.\n\nLatihan: Susun eksperimen sepuluh pertanyaan dengan metrik ketepatan jawaban dan waktu pengerjaan.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Roadmap dan batas penggunaan",
        "duration": "60 menit",
        "content": "Tujuan belajar: roadmap dan batas penggunaan.\n\nRoadmap mengurutkan pembelajaran serta pengiriman manfaat pengguna. Tentukan scope pilot, siapa yang dapat memakai fitur, dan kapan hasil harus ditinjau manusia. Kegagalan model perlu memiliki pengalaman pengguna yang jelas, seperti meminta klarifikasi atau menunjukkan sumber.\n\nLatihan: Susun roadmap tiga tahap: validasi masalah, pilot terbatas, dan evaluasi. Tulis kriteria lanjut serta kriteria berhenti setiap tahap.\n\nChecklist hasil: simpan input dan hasil percobaan, catat asumsi, lalu jelaskan bagaimana pendekatan berubah ketika data atau kebutuhan pengguna berbeda."
      },
      {
        "title": "Proyek akhir",
        "duration": "60 menit",
        "content": "Tujuan belajar: menyusun proyek yang dapat diperiksa ulang.\n\nMulai dari pertanyaan yang ingin dijawab, tentukan input yang dibutuhkan, lalu tulis langkah kerja secara berurutan. Gunakan data sintetis tanpa informasi pribadi. Hasil yang baik tidak hanya menampilkan keluaran akhir, tetapi juga asumsi, cara pengujian, dan kondisi ketika pendekatan gagal.\n\nLatihan: Susun product brief asisten pencarian dokumen. Dokumentasikan input, hasil, dan keterbatasan; gunakan data sintetis yang tidak mengandung informasi pribadi.\n\nChecklist hasil: sertakan ringkasan tujuan, contoh input-output, hasil evaluasi, keterbatasan, dan petunjuk menjalankan ulang proyek."
      }
    ]
  },
  "computer-vision-nlp-specialist": {
    "category": "Artificial Intelligence",
    "title": "Computer Vision dan NLP Terapan",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar menerapkan computer vision dan nlp terapan melalui latihan terukur. Hasil belajar berupa prototipe klasifikasi gambar atau ulasan.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan computer vision dan nlp terapan melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: prototipe klasifikasi gambar atau ulasan. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nPreprocessing menyamakan bentuk data tanpa menghilangkan informasi penting. Untuk gambar, perhatikan ukuran dan normalisasi; untuk teks, perhatikan bahasa serta label. Split harus mencegah sampel sangat mirip berada di latihan dan pengujian.\n\nLatihan: Susun 20 contoh label ulasan sintetis dan jelaskan aturan pelabelannya.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Analisis kesalahan klasifikasi",
        "duration": "60 menit",
        "content": "Tujuan belajar: analisis kesalahan klasifikasi.\n\nConfusion matrix membedakan true positive, false positive, true negative, dan false negative. Precision berguna ketika false positive mahal; recall berguna ketika kasus positif yang terlewat mahal. Pemilihan metrik mengikuti tujuan produk.\n\nLatihan: Dengan TP=8, FP=2, dan FN=4, hitung precision dan recall. Jelaskan trade-off untuk moderasi ulasan.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Dataset dan kualitas label",
        "duration": "60 menit",
        "content": "Tujuan belajar: dataset dan kualitas label.\n\nLabel yang tidak konsisten membatasi kualitas model. Buat pedoman yang mencakup kasus ambigu, lalu periksa sampel antar penilai. Jangan memasukkan identitas pribadi yang tidak diperlukan. Dokumentasikan asal, cakupan, dan bias dataset agar pengguna memahami batas model.\n\nLatihan: Labeli sepuluh ulasan sintetis sebagai positif, negatif, atau netral. Tandai tiga kasus ambigu dan tulis aturan pemutusannya.\n\nChecklist hasil: simpan input dan hasil percobaan, catat asumsi, lalu jelaskan bagaimana pendekatan berubah ketika data atau kebutuhan pengguna berbeda."
      },
      {
        "title": "Proyek akhir",
        "duration": "60 menit",
        "content": "Tujuan belajar: menyusun proyek yang dapat diperiksa ulang.\n\nMulai dari pertanyaan yang ingin dijawab, tentukan input yang dibutuhkan, lalu tulis langkah kerja secara berurutan. Gunakan data sintetis tanpa informasi pribadi. Hasil yang baik tidak hanya menampilkan keluaran akhir, tetapi juga asumsi, cara pengujian, dan kondisi ketika pendekatan gagal.\n\nLatihan: Susun prototipe klasifikasi gambar atau ulasan. Dokumentasikan input, hasil, dan keterbatasan; gunakan data sintetis yang tidak mengandung informasi pribadi.\n\nChecklist hasil: sertakan ringkasan tujuan, contoh input-output, hasil evaluasi, keterbatasan, dan petunjuk menjalankan ulang proyek."
      }
    ]
  },
  "cloud-architect": {
    "category": "Cloud Computing",
    "title": "Dasar Arsitektur Cloud",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan dasar arsitektur cloud melalui latihan terukur. Hasil belajar berupa diagram arsitektur toko daring.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan dasar arsitektur cloud melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: diagram arsitektur toko daring. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nPisahkan compute, penyimpanan, dan jaringan dalam diagram. Tentukan kebutuhan kapasitas, ketersediaan, dan pemulihan sebelum memilih layanan. Layanan terkelola mengurangi pekerjaan operasional tetapi tetap membutuhkan pengaturan akses.\n\nLatihan: Gambar alur browser, API, database, dan penyimpanan gambar untuk toko kecil.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Keandalan dan biaya",
        "duration": "60 menit",
        "content": "Tujuan belajar: keandalan dan biaya.\n\nTetapkan titik kegagalan, kebutuhan backup, serta batas biaya. Skalabilitas tidak selalu membutuhkan banyak layanan. Catat alasan pemilihan komponen dan uji asumsi melalui beban yang realistis.\n\nLatihan: Bandingkan arsitektur satu server dengan layanan terkelola menggunakan daftar biaya dan risiko, tanpa membuat resource berbayar.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "google-cloud-architect": {
    "category": "Cloud Computing",
    "title": "Arsitektur Aplikasi di Google Cloud",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan arsitektur aplikasi di google cloud melalui latihan terukur. Hasil belajar berupa rancangan deployment API dan penyimpanan.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan arsitektur aplikasi di google cloud melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: rancangan deployment API dan penyimpanan. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nProyek memisahkan resource dan billing. IAM mengatur siapa dapat melakukan tindakan pada resource. Pisahkan identitas aplikasi dari akun pribadi dan berikan izin minimum sesuai tugas.\n\nLatihan: Buat matriks izin untuk developer, aplikasi API, dan pembaca laporan tanpa menyalin kredensial.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Rancangan deployment",
        "duration": "60 menit",
        "content": "Tujuan belajar: rancangan deployment.\n\nPilih compute berdasarkan kebutuhan runtime, pola traffic, dan operasi. Database serta object storage memiliki fungsi berbeda. Dokumentasikan alur jaringan, secrets, logging, dan rencana pemulihan.\n\nLatihan: Rancang deployment API, database, dan bucket gambar dalam diagram. Tulis asumsi biaya; jangan menyalakan layanan berbayar.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "aws-solutions-architect": {
    "category": "Cloud Computing",
    "title": "Arsitektur Aplikasi di AWS",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan arsitektur aplikasi di aws melalui latihan terukur. Hasil belajar berupa diagram aplikasi web dengan akses minimum.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan arsitektur aplikasi di aws melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: diagram aplikasi web dengan akses minimum. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nRegion dan Availability Zone membatasi lokasi serta domain kegagalan. VPC mengatur jaringan virtual. Pisahkan akses publik dari database, gunakan identitas aplikasi, dan hindari penyimpanan access key pada source code.\n\nLatihan: Buat diagram subnet publik untuk frontend dan subnet privat untuk database.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Penyimpanan dan pemulihan",
        "duration": "60 menit",
        "content": "Tujuan belajar: penyimpanan dan pemulihan.\n\nObject storage cocok untuk berkas, sementara database menyimpan data yang perlu query dan transaksi. Backup perlu memiliki tujuan waktu pemulihan serta kehilangan data yang dapat diterima. Tentukan kebijakan lifecycle untuk mengendalikan biaya.\n\nLatihan: Tulis rencana backup harian, uji pemulihan, dan kebijakan penyimpanan gambar tanpa membuat resource berbayar.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "ibm-data-science": {
    "category": "Data Science",
    "title": "Data Science dengan Python",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan data science dengan python melalui latihan terukur. Hasil belajar berupa laporan analisis penjualan sintetis.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan data science dengan python melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: laporan analisis penjualan sintetis. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nDataFrame menyusun data dalam baris dan kolom. Periksa tipe, nilai kosong, duplikasi, dan satuan sebelum menghitung statistik. Perubahan data perlu dicatat agar analisis dapat diulang.\n\nLatihan: Buat CSV sepuluh transaksi contoh dengan dua nilai kosong. Dokumentasikan cara menangani keduanya.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Analisis dan komunikasi",
        "duration": "60 menit",
        "content": "Tujuan belajar: analisis dan komunikasi.\n\nRata-rata dapat terpengaruh nilai ekstrem; median memberi gambaran berbeda. Grafik perlu memiliki judul, satuan, dan sumber data. Korelasi tidak membuktikan bahwa satu variabel menyebabkan perubahan variabel lain.\n\nLatihan: Hitung median omzet, buat grafik per kategori, lalu tulis tiga temuan dan dua keterbatasan data.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "meta-social-media-marketing": {
    "category": "Pemasaran Digital",
    "title": "Strategi Social Media Marketing",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan strategi social media marketing melalui latihan terukur. Hasil belajar berupa rencana konten dan evaluasi satu kampanye.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan strategi social media marketing melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: rencana konten dan evaluasi satu kampanye. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nPilih kanal berdasarkan kebiasaan audiens, bukan hanya popularitas. Hubungkan konten dengan tahap perjalanan pelanggan: mengenal, mempertimbangkan, dan membeli. Satu posting sebaiknya memiliki tujuan yang jelas.\n\nLatihan: Buat profil pelanggan usaha roti dan tiga ide konten untuk tahap perjalanan yang berbeda.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Evaluasi kampanye",
        "duration": "60 menit",
        "content": "Tujuan belajar: evaluasi kampanye.\n\nBedakan tayangan, jangkauan, klik, dan konversi. Angka engagement tinggi belum tentu berarti penjualan meningkat. Gunakan tautan kampanye dan catatan periode agar perbandingan tidak mencampur kondisi berbeda.\n\nLatihan: Susun laporan simulasi dengan 1000 tayangan, 40 klik, dan 4 pembelian; hitung CTR serta konversi dari klik.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "html-css-foundation": {
    "category": "Coding Dasar",
    "title": "HTML dan CSS Foundation",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan html dan css foundation melalui latihan terukur. Hasil belajar berupa landing page produk yang responsif.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan html dan css foundation melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: landing page produk yang responsif. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nHTML semantik menyatakan struktur dan makna. Gunakan heading berurutan, label untuk formulir, dan alt yang menjelaskan gambar informatif. Atribut class menghubungkan elemen dengan aturan CSS tanpa mengubah maknanya.\n\nLatihan: Buat header, navigasi, tiga kartu produk, dan formulir berlabel.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Layout dan aksesibilitas",
        "duration": "60 menit",
        "content": "Tujuan belajar: layout dan aksesibilitas.\n\nBox sizing border-box membuat ukuran elemen mencakup padding dan border. Grid membantu membagi kolom, sedangkan media query menyesuaikan layout. Fokus keyboard harus tetap terlihat agar tombol dapat digunakan tanpa mouse.\n\nLatihan: Tampilkan kartu dalam satu kolom pada ponsel dan tiga pada desktop. Uji semua tautan menggunakan tombol Tab.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "figma-for-developers": {
    "category": "Desain Digital",
    "title": "Figma untuk Developer",
    "image": "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan figma untuk developer melalui latihan terukur. Hasil belajar berupa spesifikasi komponen kartu produk.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan figma untuk developer melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: spesifikasi komponen kartu produk. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nFrame menampung bagian antarmuka, sementara Auto Layout mengatur jarak dan susunan otomatis. Gunakan komponen untuk pola yang berulang dan variants untuk keadaan berbeda agar spesifikasi konsisten.\n\nLatihan: Buat komponen tombol dengan keadaan default, hover, dan disabled.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Handoff dan token desain",
        "duration": "60 menit",
        "content": "Tujuan belajar: handoff dan token desain.\n\nCatat warna, typography, spacing, serta perilaku responsive sebagai token. Developer membutuhkan keadaan loading, kosong, dan error selain tampilan ideal. Aset harus diekspor dengan ukuran serta format sesuai kebutuhan.\n\nLatihan: Buat kartu produk dan dokumentasikan token warna, jarak, serta perubahan layout di layar sempit.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "modern-javascript": {
    "category": "Coding Dasar",
    "title": "JavaScript Modern",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan javascript modern melalui latihan terukur. Hasil belajar berupa aplikasi pencarian katalog dengan fetch.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan javascript modern melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: aplikasi pencarian katalog dengan fetch. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nGunakan const untuk binding yang tidak berubah dan let bila nilainya perlu diubah. Array map membentuk hasil baru, filter memilih elemen, dan destructuring mengambil properti dengan ringkas. Hindari mutasi data bersama tanpa alasan jelas.\n\nLatihan: Filter array produk berdasarkan kategori, lalu gunakan map untuk menghasilkan judul. Tunjukkan bahwa array sumber tetap sama.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Async, fetch, dan penanganan error",
        "duration": "60 menit",
        "content": "Tujuan belajar: async, fetch, dan penanganan error.\n\nPromise menyatakan hasil operasi asynchronous. await menunggu penyelesaiannya di fungsi async. fetch tidak otomatis gagal untuk HTTP 404, sehingga periksa response.ok sebelum membaca data. Pisahkan keadaan loading, berhasil, kosong, dan error.\n\nLatihan: Bangun pencarian katalog dengan fetch dan try/catch. Uji ketika hasil kosong serta ketika server mengembalikan 500.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "interactive-jquery": {
    "category": "Coding Dasar",
    "title": "Interaksi Web dengan jQuery",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan interaksi web dengan jquery melalui latihan terukur. Hasil belajar berupa filter daftar produk pada halaman lama.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan interaksi web dengan jquery melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: filter daftar produk pada halaman lama. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\njQuery menyediakan selektor dan event handler yang ringkas untuk aplikasi yang sudah memakainya. Gunakan on untuk event dan delegated events untuk elemen yang ditambahkan setelah halaman dimuat. Jangan memasukkan input pengguna sebagai HTML mentah.\n\nLatihan: Buat daftar produk dan gunakan delegated click untuk tombol yang ditambahkan kemudian.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Filter dan validasi",
        "duration": "60 menit",
        "content": "Tujuan belajar: filter dan validasi.\n\nPisahkan nilai input dari tampilan hasil. Debounce dapat mengurangi pemrosesan saat mengetik, tetapi belum diperlukan untuk daftar kecil. Perbarui teks dengan text agar masukan dianggap teks, bukan markup.\n\nLatihan: Implementasikan filter berdasarkan nama dan pesan hasil kosong. Uji masukan berisi tag HTML dan pastikan tidak dieksekusi.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "basic-javascript": {
    "category": "Coding Dasar",
    "title": "JavaScript untuk Pemula",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan javascript untuk pemula melalui latihan terukur. Hasil belajar berupa kalkulator total belanja.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan javascript untuk pemula melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: kalkulator total belanja. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nTipe dasar mencakup string, number, boolean, null, dan undefined. Operator tambah dapat menggabungkan string, sehingga konversi input angka perlu dilakukan dengan sengaja. Gunakan perbandingan ketat agar tipe tidak berubah diam-diam.\n\nLatihan: Konversi dua nilai input menggunakan Number dan tampilkan pesan jika hasilnya bukan angka valid.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Fungsi dan kondisi",
        "duration": "60 menit",
        "content": "Tujuan belajar: fungsi dan kondisi.\n\nFungsi menerima input dan mengembalikan hasil agar logika dapat dipakai kembali. Gunakan kondisi untuk aturan diskon dan loop untuk menjumlahkan item. Pisahkan perhitungan dari perubahan DOM agar lebih mudah diperiksa.\n\nLatihan: Tulis fungsi totalBelanja yang menjumlahkan tiga item dan memberi diskon 10 persen bila total minimal 100000.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "project-management-scrum": {
    "category": "Pengembangan Karier",
    "title": "Manajemen Proyek dengan Scrum",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan manajemen proyek dengan scrum melalui latihan terukur. Hasil belajar berupa backlog dan rencana sprint aplikasi belajar.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan manajemen proyek dengan scrum melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: backlog dan rencana sprint aplikasi belajar. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nScrum memakai iterasi untuk mengerjakan masalah kompleks dengan inspeksi dan adaptasi. Product Owner mengurutkan backlog, Developers mengerjakan produk, dan Scrum Master membantu efektivitas tim. Sprint Goal menyatakan tujuan yang menyatukan pekerjaan.\n\nLatihan: Tulis lima backlog item untuk katalog kelas dan satu Sprint Goal yang dapat diuji.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Definition of Done dan review",
        "duration": "60 menit",
        "content": "Tujuan belajar: definition of done dan review.\n\nDefinition of Done menjelaskan syarat kualitas increment yang selesai. Sprint Review memeriksa hasil bersama stakeholder, sedangkan Retrospective memperbaiki cara kerja tim. Estimasi adalah alat perencanaan, bukan jaminan tanggal.\n\nLatihan: Buat Definition of Done berisi validasi input, test, dan dokumentasi. Susun agenda review serta satu perbaikan proses.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  },
  "ui-ux-design": {
    "category": "Desain Digital",
    "title": "Dasar UI/UX Design",
    "image": "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1200&q=80",
    "duration": "2 jam",
    "description": "Belajar menerapkan dasar ui/ux design melalui latihan terukur. Hasil belajar berupa prototipe alur pendaftaran kelas.",
    "fullDescription": "Kelas mandiri EduVerse untuk menerapkan dasar ui/ux design melalui latihan terukur. Materi mencakup penjelasan konsep, langkah praktik, dan latihan yang bisa dikerjakan tanpa membeli layanan. Prasyarat: dapat menggunakan browser dan mengelola berkas; untuk kelas pemrograman, siapkan editor kode. Proyek akhir: prototipe alur pendaftaran kelas. Periksa hasil menggunakan checklist pada setiap pelajaran. Materi disusun dengan bantuan AI dan perlu dibandingkan dengan dokumentasi resmi saat digunakan dalam pekerjaan. Kelas ini bukan program sertifikasi resmi vendor.",
    "curriculum": [
      {
        "title": "Konsep dan langkah awal",
        "duration": "60 menit",
        "content": "Tujuan belajar: konsep dan langkah awal.\n\nRiset dimulai dari tujuan pengguna, konteks, dan hambatan. Pertanyaan terbuka membantu memahami perilaku tanpa mengarahkan jawaban. Pisahkan temuan yang benar-benar diamati dari asumsi sebelum membuat solusi.\n\nLatihan: Susun lima pertanyaan wawancara tentang pengalaman memilih kelas daring.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      },
      {
        "title": "Wireframe dan usability test",
        "duration": "60 menit",
        "content": "Tujuan belajar: wireframe dan usability test.\n\nWireframe menekankan urutan informasi serta alur, bukan dekorasi. Uji dengan tugas konkret dan amati apakah peserta dapat menyelesaikannya tanpa petunjuk. Catat masalah berdasarkan dampak, lalu perbaiki bagian yang menghambat tujuan.\n\nLatihan: Buat tiga layar pendaftaran dan uji tugas mencari kelas lalu mendaftar. Catat titik kebingungan dan satu revisi.\n\nChecklist hasil: jelaskan alasan setiap langkah, simpan hasil latihan, dan periksa kembali dengan contoh input berbeda. Catat kesalahan yang ditemukan serta cara memperbaikinya sebelum menandai materi selesai."
      }
    ]
  }
};
export const bootcamps: Record<string, SeedBootcamp> = {
  "bootcamp-literasi-digital": {
    "category": "Online Camp",
    "title": "Bootcamp Literasi Digital 2 Minggu",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "2 minggu",
    "groupSize": "30 peserta/kelompok",
    "price": 149000,
    "originalPrice": 299000,
    "description": "Program belajar berbasis proyek untuk membuat paket dokumen lamaran dan checklist keamanan.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa paket dokumen lamaran dan checklist keamanan. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Pengelolaan folder, email, dan kolaborasi dokumen",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Audit izin akun, backup, dan presentasi hasil",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "bootcamp-pemasaran-umkm": {
    "category": "Online Camp",
    "title": "Bootcamp Pemasaran Digital UMKM",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "3 minggu",
    "groupSize": "25 peserta/kelompok",
    "price": 199000,
    "originalPrice": 349000,
    "description": "Program belajar berbasis proyek untuk membuat kampanye tujuh hari untuk produk UMKM.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa kampanye tujuh hari untuk produk UMKM. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Riset audiens dan pesan produk",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Desain konten serta kalender publikasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: Laporan metrik kampanye simulasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "bootcamp-web-developer": {
    "category": "Online Camp",
    "title": "Bootcamp Web Developer Pemula",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 249000,
    "originalPrice": 399000,
    "description": "Program belajar berbasis proyek untuk membuat website portofolio responsif.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa website portofolio responsif. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: HTML semantik dan formulir",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: CSS Grid, Flexbox, dan responsivitas",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: DOM dan filter proyek",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Pemeriksaan aksesibilitas serta presentasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "full-stack-engineering": {
    "category": "Online Camp",
    "title": "Full Stack Engineering",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program belajar berbasis proyek untuk membuat aplikasi katalog kelas dengan autentikasi.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa aplikasi katalog kelas dengan autentikasi. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Perancangan alur pengguna dan schema SQL",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Antarmuka Next.js dengan TypeScript",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: API Express, validasi, dan session",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Test integrasi, deployment, dan dokumentasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "data-science-machine-learning": {
    "category": "Online Camp",
    "title": "Data Science & Machine Learning",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program belajar berbasis proyek untuk membuat laporan prediksi penjualan sintetis.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa laporan prediksi penjualan sintetis. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Pembersihan CSV dan eksplorasi data",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Visualisasi dan baseline statistik",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: Split data, training, dan evaluasi model",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Analisis kesalahan dan presentasi temuan",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "mobile-development": {
    "category": "Online Camp",
    "title": "Mobile Development",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program belajar berbasis proyek untuk membuat prototipe aplikasi catatan belajar.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa prototipe aplikasi catatan belajar. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Navigasi layar dan komponen antarmuka",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Formulir, state, dan validasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: Penyimpanan lokal dan sinkronisasi API",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Uji perangkat, aksesibilitas, dan demo",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "ui-ux-design": {
    "category": "Online Camp",
    "title": "UI/UX Design Bootcamp",
    "image": "https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program belajar berbasis proyek untuk membuat prototipe pendaftaran kelas yang diuji.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa prototipe pendaftaran kelas yang diuji. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Riset kebutuhan dan user journey",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Wireframe serta information architecture",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: Komponen Figma dan prototipe interaktif",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Usability test dan dokumentasi revisi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "mern-fullstack": {
    "category": "Online Camp",
    "title": "Software Engineering: MERN Tech For Fullstack",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program belajar berbasis proyek untuk membuat aplikasi daftar tugas dengan API.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa aplikasi daftar tugas dengan API. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Model dokumen MongoDB dan kontrak API",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: Express, validasi input, dan autentikasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: React, state formulir, dan keadaan error",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Integrasi, test, dan demonstrasi produk",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  },
  "cybersecurity-ethical-hacking": {
    "category": "Online Camp",
    "title": "Cybersecurity: Ethical Hacking",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program belajar berbasis proyek untuk membuat laporan audit aplikasi di lab lokal.",
    "fullDescription": "Rancangan program EduVerse dengan tugas bertahap dan proyek akhir berupa laporan audit aplikasi di lab lokal. Setiap minggu mencakup diskusi konsep, praktik mandiri, dan review hasil. Output dikumpulkan sebagai repositori, laporan, atau prototipe sesuai bidang. Konten disusun dengan bantuan AI untuk portofolio; program ini belum membuka sesi mentor langsung. Tanggal tetap menunggu konfirmasi, harga yang tampil adalah simulasi, dan pendaftaran tidak memproses pembayaran.",
    "schedule": [
      {
        "title": "Minggu 1: Etika, izin tertulis, dan setup lab lokal",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 2: HTTP, session, dan kontrol akses",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 3: Validasi input dan analisis konfigurasi",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      },
      {
        "title": "Minggu 4: Laporan temuan, perbaikan, dan retest",
        "duration": "Rencana 2 sesi × 90 menit + praktik mandiri"
      }
    ],
    "mentor": {
      "name": "Tim EduVerse",
      "role": "Pendamping belum ditetapkan"
    }
  }
};
