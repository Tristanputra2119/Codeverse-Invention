export interface SeedCourse { category: string; title: string; image: string; duration: string; description: string; fullDescription: string; curriculum: { title: string; duration: string }[] }
export interface SeedBootcamp { category: string; title: string; image: string; startDate: string; duration: string; groupSize: string; price: number; originalPrice: number; description: string; fullDescription: string; schedule: { title: string; duration: string }[]; mentor: { name: string; role: string } }
export const courses: Record<string, SeedCourse> = {
  "literasi-digital-pemula": {
    "category": "Literasi Digital Dasar",
    "title": "Literasi Digital untuk Pemula",
    "image": "https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Kelas dasar untuk memahami perangkat, internet, email, dan keamanan digital sehari-hari — dirancang untuk yang benar-benar baru mengenal teknologi.",
    "fullDescription": "Kelas ini cocok untuk pelajar, pencari kerja, maupun anggota keluarga yang ingin mulai percaya diri menggunakan perangkat digital: mulai dari mengoperasikan komputer/HP, membuat email profesional, hingga mengenali penipuan digital yang umum terjadi.",
    "curriculum": [
      {
        "title": "Mengenal Perangkat & Internet",
        "duration": "20 menit"
      },
      {
        "title": "Membuat & Mengelola Email",
        "duration": "35 menit"
      },
      {
        "title": "Mengenali Penipuan Digital",
        "duration": "40 menit"
      },
      {
        "title": "Kuis & Sertifikasi",
        "duration": "15 menit"
      }
    ]
  },
  "office-produktivitas-kerja": {
    "category": "Produktivitas & Perkantoran",
    "title": "Microsoft Office untuk Produktivitas Kerja",
    "image": "https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&w=1200&q=80",
    "duration": "6 jam",
    "description": "Kuasai Word, Excel, dan PowerPoint untuk kebutuhan kerja sehari-hari, dari surat lamaran sampai laporan bulanan.",
    "fullDescription": "Kelas ini membekali kamu dengan keterampilan Office yang paling sering diminta di dunia kerja: menulis dokumen rapi di Word, mengolah data dengan rumus dasar Excel, dan membuat presentasi yang meyakinkan di PowerPoint.",
    "curriculum": [
      {
        "title": "Dasar Microsoft Word",
        "duration": "45 menit"
      },
      {
        "title": "Rumus & Tabel Excel Dasar",
        "duration": "1 jam"
      },
      {
        "title": "Membuat Presentasi PowerPoint",
        "duration": "50 menit"
      },
      {
        "title": "Kuis & Sertifikasi",
        "duration": "15 menit"
      }
    ]
  },
  "pemasaran-digital-umkm": {
    "category": "Pemasaran Digital",
    "title": "Dasar Pemasaran Digital untuk UMKM",
    "image": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    "duration": "5 jam",
    "description": "Belajar strategi promosi produk lewat media sosial dan marketplace, dirancang khusus untuk pelaku usaha kecil.",
    "fullDescription": "Kelas ini membahas cara memasarkan produk UMKM secara digital: menyusun konten promosi yang menarik, memilih platform yang tepat, hingga membaca data sederhana untuk mengetahui promosi mana yang paling efektif.",
    "curriculum": [
      {
        "title": "Mengenal Kanal Pemasaran Digital",
        "duration": "30 menit"
      },
      {
        "title": "Menyusun Konten Promosi",
        "duration": "45 menit"
      },
      {
        "title": "Iklan Berbayar untuk Pemula",
        "duration": "50 menit"
      },
      {
        "title": "Kuis & Sertifikasi",
        "duration": "15 menit"
      }
    ]
  },
  "coding-dasar-website": {
    "category": "Coding Dasar",
    "title": "Membuat Website Pertamamu",
    "image": "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?auto=format&fit=crop&w=1200&q=80",
    "duration": "8 jam",
    "description": "Belajar HTML, CSS, dan sedikit JavaScript untuk membangun website sederhana dari nol, tanpa pengalaman coding sebelumnya.",
    "fullDescription": "Kelas ini menuntunmu membuat website pertama langkah demi langkah: struktur halaman dengan HTML, mempercantik tampilan dengan CSS, dan menambahkan interaksi dasar dengan JavaScript.",
    "curriculum": [
      {
        "title": "Struktur Dasar HTML",
        "duration": "1 jam"
      },
      {
        "title": "Mempercantik dengan CSS",
        "duration": "1,5 jam"
      },
      {
        "title": "Interaksi Dasar dengan JavaScript",
        "duration": "2 jam"
      },
      {
        "title": "Proyek Akhir & Sertifikasi",
        "duration": "30 menit"
      }
    ]
  },
  "keamanan-data-privasi": {
    "category": "Literasi Digital Dasar",
    "title": "Keamanan Data & Privasi di Internet",
    "image": "https://images.unsplash.com/photo-1768839720936-87ce3adf2d08?auto=format&fit=crop&w=1200&q=80",
    "duration": "3 jam",
    "description": "Pahami cara melindungi data pribadi, mengenali phishing, dan menjaga akun digital tetap aman.",
    "fullDescription": "Kelas ini membahas ancaman digital yang paling umum dihadapi masyarakat: kata sandi lemah, tautan phishing, dan penipuan berkedok hadiah — lengkap dengan langkah konkret untuk melindungi diri.",
    "curriculum": [
      {
        "title": "Mengenali Phishing & Penipuan Online",
        "duration": "40 menit"
      },
      {
        "title": "Kata Sandi Kuat & Verifikasi Dua Langkah",
        "duration": "35 menit"
      },
      {
        "title": "Menjaga Privasi di Media Sosial",
        "duration": "30 menit"
      },
      {
        "title": "Kuis & Sertifikasi",
        "duration": "15 menit"
      }
    ]
  },
  "desain-konten-canva": {
    "category": "Pemasaran Digital",
    "title": "Desain Konten dengan Canva",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    "duration": "4 jam",
    "description": "Belajar membuat desain promosi, poster, dan konten media sosial yang menarik pakai Canva, tanpa perlu skill desain sebelumnya.",
    "fullDescription": "Kelas ini mengajarkan dasar-dasar desain grafis praktis menggunakan Canva: memilih template, mengatur warna dan tipografi, hingga menyusun konten media sosial yang konsisten untuk usaha atau personal branding.",
    "curriculum": [
      {
        "title": "Mengenal Canva & Template",
        "duration": "30 menit"
      },
      {
        "title": "Warna, Font, dan Layout",
        "duration": "45 menit"
      },
      {
        "title": "Membuat Konten Media Sosial",
        "duration": "1 jam"
      },
      {
        "title": "Kuis & Sertifikasi",
        "duration": "15 menit"
      }
    ]
  },
  "generative-ai-specialist": {
    "category": "Artificial Intelligence",
    "title": "Generative AI Specialist",
    "image": "/img/certificate_1.jpg",
    "duration": "12 jam",
    "description": "Pelajari dasar hingga penerapan Generative AI untuk membuat solusi kerja yang lebih cepat dan kreatif.",
    "fullDescription": "Kelas ini membahas cara kerja model generatif, teknik menulis prompt, evaluasi output, dan penerapan AI yang bertanggung jawab untuk kebutuhan profesional.",
    "curriculum": [
      {
        "title": "Dasar Generative AI",
        "duration": "1 jam"
      },
      {
        "title": "Prompt Engineering",
        "duration": "2 jam"
      },
      {
        "title": "Membangun Workflow AI",
        "duration": "3 jam"
      },
      {
        "title": "Proyek Akhir & Sertifikasi",
        "duration": "1 jam"
      }
    ]
  },
  "ai-machine-learning-engineer": {
    "category": "Artificial Intelligence",
    "title": "AI & Machine Learning Engineer",
    "image": "/img/certificate_2.jpeg",
    "duration": "18 jam",
    "description": "Bangun fondasi machine learning, mulai dari pengolahan data hingga evaluasi model prediktif.",
    "fullDescription": "Kelas ini mengajarkan alur kerja machine learning secara praktis: menyiapkan data, memilih algoritma, melatih model, mengukur performa, dan menyusun eksperimen yang dapat diulang.",
    "curriculum": [
      {
        "title": "Pengantar Machine Learning",
        "duration": "2 jam"
      },
      {
        "title": "Data Preparation",
        "duration": "3 jam"
      },
      {
        "title": "Training & Evaluasi Model",
        "duration": "4 jam"
      },
      {
        "title": "Proyek Prediksi",
        "duration": "3 jam"
      }
    ]
  },
  "ai-product-manager": {
    "category": "Product & Technology",
    "title": "AI Product Manager",
    "image": "/img/certificate_3.jpg",
    "duration": "10 jam",
    "description": "Pelajari cara merancang produk berbasis AI yang bermanfaat, terukur, dan sesuai kebutuhan pengguna.",
    "fullDescription": "Kelas ini membahas discovery, validasi masalah, pemilihan use case AI, penyusunan roadmap, serta metrik untuk mengukur keberhasilan produk secara bertanggung jawab.",
    "curriculum": [
      {
        "title": "Memahami Produk AI",
        "duration": "1 jam"
      },
      {
        "title": "Menemukan Use Case Bernilai",
        "duration": "2 jam"
      },
      {
        "title": "Roadmap & Eksperimen Produk",
        "duration": "3 jam"
      },
      {
        "title": "Proyek Product Brief",
        "duration": "2 jam"
      }
    ]
  },
  "computer-vision-nlp-specialist": {
    "category": "Artificial Intelligence",
    "title": "Computer Vision & NLP Specialist",
    "image": "/img/certificate_4.jpg",
    "duration": "20 jam",
    "description": "Kenali penerapan computer vision dan natural language processing untuk memecahkan masalah dunia nyata.",
    "fullDescription": "Kelas ini memperkenalkan teknik penting untuk memahami gambar dan bahasa: preprocessing, klasifikasi, ekstraksi fitur, text classification, dan evaluasi hasil model.",
    "curriculum": [
      {
        "title": "Dasar Computer Vision",
        "duration": "3 jam"
      },
      {
        "title": "Klasifikasi dan Ekstraksi Fitur",
        "duration": "4 jam"
      },
      {
        "title": "Dasar Natural Language Processing",
        "duration": "4 jam"
      },
      {
        "title": "Proyek Vision atau NLP",
        "duration": "4 jam"
      }
    ]
  },
  "cloud-architect": {
    "category": "Cloud Computing",
    "title": "Professional Cloud Architect Certification",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Professional Cloud Architect Certification melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Professional Cloud Architect Certification memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Professional Cloud Architect Certification",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Professional Cloud Architect Certification",
        "duration": "3 jam"
      }
    ]
  },
  "google-cloud-architect": {
    "category": "Cloud Computing",
    "title": "Google Cloud Architect",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Google Cloud Architect melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Google Cloud Architect memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Google Cloud Architect",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Google Cloud Architect",
        "duration": "3 jam"
      }
    ]
  },
  "aws-solutions-architect": {
    "category": "Cloud Computing",
    "title": "AWS Certified Solutions Architect Associate",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar AWS Certified Solutions Architect Associate melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas AWS Certified Solutions Architect Associate memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar AWS Certified Solutions Architect Associate",
        "duration": "1 jam"
      },
      {
        "title": "Praktik AWS Certified Solutions Architect Associate",
        "duration": "3 jam"
      }
    ]
  },
  "ibm-data-science": {
    "category": "Pengembangan Karier",
    "title": "IBM Data Science Professional Certificate",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar IBM Data Science Professional Certificate melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas IBM Data Science Professional Certificate memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar IBM Data Science Professional Certificate",
        "duration": "1 jam"
      },
      {
        "title": "Praktik IBM Data Science Professional Certificate",
        "duration": "3 jam"
      }
    ]
  },
  "meta-social-media-marketing": {
    "category": "Pengembangan Karier",
    "title": "Meta Social Media Marketing",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Meta Social Media Marketing melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Meta Social Media Marketing memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Meta Social Media Marketing",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Meta Social Media Marketing",
        "duration": "3 jam"
      }
    ]
  },
  "html-css-foundation": {
    "category": "Pengembangan Karier",
    "title": "HTML & CSS Foundation",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar HTML & CSS Foundation melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas HTML & CSS Foundation memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar HTML & CSS Foundation",
        "duration": "1 jam"
      },
      {
        "title": "Praktik HTML & CSS Foundation",
        "duration": "3 jam"
      }
    ]
  },
  "figma-for-developers": {
    "category": "Desain Digital",
    "title": "Figma for Developers",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Figma for Developers melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Figma for Developers memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Figma for Developers",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Figma for Developers",
        "duration": "3 jam"
      }
    ]
  },
  "modern-javascript": {
    "category": "Pengembangan Karier",
    "title": "Modern JavaScript",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Modern JavaScript melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Modern JavaScript memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Modern JavaScript",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Modern JavaScript",
        "duration": "3 jam"
      }
    ]
  },
  "interactive-jquery": {
    "category": "Pengembangan Karier",
    "title": "Interactive jQuery",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Interactive jQuery melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Interactive jQuery memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Interactive jQuery",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Interactive jQuery",
        "duration": "3 jam"
      }
    ]
  },
  "basic-javascript": {
    "category": "Pengembangan Karier",
    "title": "Basic JavaScript for Beginners",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Basic JavaScript for Beginners melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Basic JavaScript for Beginners memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Basic JavaScript for Beginners",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Basic JavaScript for Beginners",
        "duration": "3 jam"
      }
    ]
  },
  "project-management-scrum": {
    "category": "Pengembangan Karier",
    "title": "Project Management: Scrum",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar Project Management: Scrum melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas Project Management: Scrum memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar Project Management: Scrum",
        "duration": "1 jam"
      },
      {
        "title": "Praktik Project Management: Scrum",
        "duration": "3 jam"
      }
    ]
  },
  "ui-ux-design": {
    "category": "Desain Digital",
    "title": "UI/UX Design",
    "image": "/img/certificate_1.jpg",
    "duration": "4 jam",
    "description": "Pelajari dasar UI/UX Design melalui materi pengantar dan praktik.",
    "fullDescription": "Kelas UI/UX Design memperkenalkan konsep utama dan memberi latihan awal yang dapat diikuti secara mandiri.",
    "curriculum": [
      {
        "title": "Pengantar UI/UX Design",
        "duration": "1 jam"
      },
      {
        "title": "Praktik UI/UX Design",
        "duration": "3 jam"
      }
    ]
  }
};
export const bootcamps: Record<string, SeedBootcamp> = {
  "bootcamp-literasi-digital": {
    "category": "Online Camp",
    "title": "Bootcamp Literasi Digital 2 Minggu",
    "image": "https://images.unsplash.com/photo-1758270705290-62b6294dd044?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "2 minggu",
    "groupSize": "30 peserta/kelompok",
    "price": 149000,
    "originalPrice": 299000,
    "description": "Pendampingan intensif untuk menguasai dasar literasi digital dalam 2 minggu, belajar berkelompok bersama mentor.",
    "fullDescription": "Bootcamp ini cocok untuk yang ingin percepatan dibanding kelas mandiri: setiap sesi didampingi mentor secara langsung, ada tugas kelompok, dan sesi tanya-jawab rutin agar kamu tidak belajar sendirian.",
    "schedule": [
      {
        "title": "Minggu 1: Perangkat, Internet & Email",
        "duration": "Sesi langsung 2x/minggu"
      },
      {
        "title": "Minggu 2: Keamanan Digital & Proyek Akhir",
        "duration": "Sesi langsung 2x/minggu"
      }
    ],
    "mentor": {
      "name": "Kak Fajar",
      "role": "Fasilitator Literasi Digital Komunitas"
    }
  },
  "bootcamp-pemasaran-umkm": {
    "category": "Online Camp",
    "title": "Bootcamp Pemasaran Digital UMKM",
    "image": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "3 minggu",
    "groupSize": "25 peserta/kelompok",
    "price": 199000,
    "originalPrice": 349000,
    "description": "Pendampingan praktik langsung menyusun strategi pemasaran digital untuk usahamu, dari konten sampai iklan berbayar.",
    "fullDescription": "Selama 3 minggu, peserta dibimbing menyusun rencana pemasaran digital untuk produk masing-masing: mulai dari riset target pasar, membuat konten promosi, sampai uji coba iklan berbayar dengan budget kecil.",
    "schedule": [
      {
        "title": "Minggu 1: Riset Target Pasar & Kanal Pemasaran",
        "duration": "Sesi langsung 2x/minggu"
      },
      {
        "title": "Minggu 2: Membuat Konten & Kalender Promosi",
        "duration": "Sesi langsung 2x/minggu"
      },
      {
        "title": "Minggu 3: Uji Coba Iklan Berbayar & Evaluasi",
        "duration": "Sesi langsung 2x/minggu"
      }
    ],
    "mentor": {
      "name": "Kak Sarah",
      "role": "Praktisi Pemasaran Digital UMKM"
    }
  },
  "bootcamp-web-developer": {
    "category": "Online Camp",
    "title": "Bootcamp Web Developer Pemula",
    "image": "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?auto=format&fit=crop&w=1200&q=80",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 249000,
    "originalPrice": 399000,
    "description": "Pendampingan membangun website dari nol sampai bisa dipakai untuk portofolio melamar kerja di bidang teknologi.",
    "fullDescription": "Bootcamp 4 minggu ini menuntunmu membangun website portofolio sendiri: mulai dari dasar HTML/CSS/JavaScript, code review bersama mentor, sampai proyek akhir yang siap ditampilkan ke calon perekrut.",
    "schedule": [
      {
        "title": "Minggu 1-2: Dasar HTML, CSS & JavaScript",
        "duration": "Sesi langsung 2x/minggu"
      },
      {
        "title": "Minggu 3: Membangun Proyek Website Portofolio",
        "duration": "Sesi langsung 2x/minggu"
      },
      {
        "title": "Minggu 4: Code Review & Presentasi Akhir",
        "duration": "Sesi langsung 2x/minggu"
      }
    ],
    "mentor": {
      "name": "Kak Dimas",
      "role": "Web Developer & Mentor Komunitas"
    }
  },
  "full-stack-engineering": {
    "category": "Online Camp",
    "title": "Full Stack Engineering",
    "image": "/img/bootcamp_fullstack.jpg",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program intensif pengantar Full Stack Engineering.",
    "fullDescription": "Bootcamp Full Stack Engineering dirancang sebagai program belajar berkelompok dengan latihan dan bimbingan mentor. Jadwal dan harga belum ditetapkan.",
    "schedule": [
      {
        "title": "Orientasi dan pengantar",
        "duration": "Minggu 1"
      },
      {
        "title": "Latihan dan proyek",
        "duration": "Minggu 2–4"
      }
    ],
    "mentor": {
      "name": "Mentor EduVerse",
      "role": "Fasilitator program"
    }
  },
  "data-science-machine-learning": {
    "category": "Online Camp",
    "title": "Data Science & Machine Learning",
    "image": "/img/bootcamp_fullstack.jpg",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program intensif pengantar Data Science & Machine Learning.",
    "fullDescription": "Bootcamp Data Science & Machine Learning dirancang sebagai program belajar berkelompok dengan latihan dan bimbingan mentor. Jadwal dan harga belum ditetapkan.",
    "schedule": [
      {
        "title": "Orientasi dan pengantar",
        "duration": "Minggu 1"
      },
      {
        "title": "Latihan dan proyek",
        "duration": "Minggu 2–4"
      }
    ],
    "mentor": {
      "name": "Mentor EduVerse",
      "role": "Fasilitator program"
    }
  },
  "mobile-development": {
    "category": "Online Camp",
    "title": "Mobile Development",
    "image": "/img/bootcamp_fullstack.jpg",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program intensif pengantar Mobile Development.",
    "fullDescription": "Bootcamp Mobile Development dirancang sebagai program belajar berkelompok dengan latihan dan bimbingan mentor. Jadwal dan harga belum ditetapkan.",
    "schedule": [
      {
        "title": "Orientasi dan pengantar",
        "duration": "Minggu 1"
      },
      {
        "title": "Latihan dan proyek",
        "duration": "Minggu 2–4"
      }
    ],
    "mentor": {
      "name": "Mentor EduVerse",
      "role": "Fasilitator program"
    }
  },
  "ui-ux-design": {
    "category": "Online Camp",
    "title": "UI/UX Design Bootcamp",
    "image": "/img/bootcamp_fullstack.jpg",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program intensif pengantar UI/UX Design Bootcamp.",
    "fullDescription": "Bootcamp UI/UX Design Bootcamp dirancang sebagai program belajar berkelompok dengan latihan dan bimbingan mentor. Jadwal dan harga belum ditetapkan.",
    "schedule": [
      {
        "title": "Orientasi dan pengantar",
        "duration": "Minggu 1"
      },
      {
        "title": "Latihan dan proyek",
        "duration": "Minggu 2–4"
      }
    ],
    "mentor": {
      "name": "Mentor EduVerse",
      "role": "Fasilitator program"
    }
  },
  "mern-fullstack": {
    "category": "Online Camp",
    "title": "Software Engineering: MERN Tech For Fullstack",
    "image": "/img/bootcamp_fullstack.jpg",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program intensif pengantar Software Engineering: MERN Tech For Fullstack.",
    "fullDescription": "Bootcamp Software Engineering: MERN Tech For Fullstack dirancang sebagai program belajar berkelompok dengan latihan dan bimbingan mentor. Jadwal dan harga belum ditetapkan.",
    "schedule": [
      {
        "title": "Orientasi dan pengantar",
        "duration": "Minggu 1"
      },
      {
        "title": "Latihan dan proyek",
        "duration": "Minggu 2–4"
      }
    ],
    "mentor": {
      "name": "Mentor EduVerse",
      "role": "Fasilitator program"
    }
  },
  "cybersecurity-ethical-hacking": {
    "category": "Online Camp",
    "title": "Cybersecurity: Ethical Hacking",
    "image": "/img/bootcamp_fullstack.jpg",
    "startDate": "Jadwal menyusul",
    "duration": "4 minggu",
    "groupSize": "20 peserta/kelompok",
    "price": 0,
    "originalPrice": 0,
    "description": "Program intensif pengantar Cybersecurity: Ethical Hacking.",
    "fullDescription": "Bootcamp Cybersecurity: Ethical Hacking dirancang sebagai program belajar berkelompok dengan latihan dan bimbingan mentor. Jadwal dan harga belum ditetapkan.",
    "schedule": [
      {
        "title": "Orientasi dan pengantar",
        "duration": "Minggu 1"
      },
      {
        "title": "Latihan dan proyek",
        "duration": "Minggu 2–4"
      }
    ],
    "mentor": {
      "name": "Mentor EduVerse",
      "role": "Fasilitator program"
    }
  }
};
