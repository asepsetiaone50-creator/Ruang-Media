/*
  DAFTAR MEDIA RUANGMEDIA — HIERARKI MATA PELAJARAN → BAB → TP → MEDIA
  Tambahkan satu objek untuk setiap file HTML. Beberapa media boleh memiliki
  subject, chapter, dan tp yang sama agar berada pada TP yang sama.
  Path selalu relatif terhadap index.html.
*/
window.RUANGMEDIA_ITEMS = [
  {
    id: "Bilangan Berpangkat-konsep",
    title: "Bilangan Berpangkat",
    subject: "Matematika",
    chapter: "Bilangan Berpangkat",
    tp: [
      "TP 1 — Menjelaskan konsep bilangan berpangkat sebagai perkalian berulang (basis dan pangkat)",
      "TP 2 — Menggunakan sifat perkalian dan pembagian pada basis yang sama",
      "TP 3 — Menggunakan sifat pangkat dari pangkat, perkalian dan pecahan"
    ],
    level: "SMP · Kelas VIII",
    type: "Simulasi interaktif",
    description: "Membangun Konsep Bilangan Berpangkat.",
    path: "media/matematika/bilangan-berpangkat/bagian1/index.html",
    thumbnail: "images/image (1).jpg",
    color: "yellow",
    icon: "sigma"
  },
  {
    id: "Bilangan Berpangkat-lanjutan",
    title: "Bilangan Berpangkat",
    subject: "Matematika",
    chapter: "Bilangan Berpangkat",
    tp: [
      "TP 4 — Menentukan nilai pangkat nol dan pangkat negatif",
      "TP 5 — Menyederhanakan operasi campuran bilangan berpangkat",
      "TP 6 — Menulis bilangan sangat besar atau kecil dalam notasi ilmiah",
      "TP 7 — Menyelesaikan masalah kontekstual (bakteri, jarak planet, ukuran virus, bunga majemuk)"
    ],
    level: "SMP · Kelas VIII",
    type: "Simulasi interaktif",
    description: "Siswa mengamati pola, menebak, menyimpulkan, lalu menerapkannya.",
    path: "media/matematika/bilangan-berpangkat/bagian1/Media2.html",
    thumbnail: "images/image (2).jpg",
    color: "yellow",
    icon: "sigma"
  },
  {
    id: "pythagoras-konsep",
    title: "Teorema Pythagoras",
    subject: "Matematika",
    chapter: "Teorema Pythagoras",
    tp: [
      "TP 1 — Menemukan hubungan a² + b² = c² pada segitiga siku-siku",
      "TP 2 — Menghitung panjang sisi miring dan sisi tegak segitiga siku-siku"
    ],
    level: "SMP · Kelas VIII",
    type: ["Simulasi", "Latihan"],
    description: "Eksplorasi hubungan sisi-sisi segitiga siku-siku melalui aktivitas visual. Siswa menemukan sendiri hubungan antar sisi, lalu menggunakannya untuk menghitung sisi segitiga siku-siku.",
    path: "media/matematika/teorema-pythagoras/bagian1/media1.html",
    thumbnail: "images/image (7).jpg",
    color: "navy",
    icon: "pythagoras"
  },
  {
    id: "pythagoras-aplikasi",
    title: "Teorema Pythagoras",
    subject: "Matematika",
    chapter: "Teorema Pythagoras",
    tp: [
      "TP 3 — Menggunakan kebalikan teorema untuk menentukan jenis segitiga dan tripel Pythagoras",
      "TP 4 — Menyelesaikan masalah kontekstual (tangga, jarak, diagonal, layar TV)"
    ],
    level: "SMP · Kelas V III",
    type: ["Simulasi", "Eksplorasi", "Studi Kasus"],
    description: "Menggunakan kebalikan teorema Pythagoras untuk menentukan jenis segitiga dan mengenali tripel Pythagoras.Memodelkan masalah sehari-hari menjadi segitiga siku-siku dan menyelesaikannya dengan teorema Pythagoras.",
    path: "media/matematika/teorema-pythagoras/bagian2/media2.html",
    thumbnail: "images/image (6).jpg",
    color: "navy",
    icon: "pythagoras"
  },  
  {
    id: "pythagoras-pengayaan",
    title: "Teorema Pythagoras",
    subject: "Matematika",
    chapter: "Teorema Pythagoras",
    tp: [
      "TP 5 — Menemukan dan menjelaskan perbandingan sisi segitiga siku-siku sama kaki (45°-45°-90°) dan menggunakannya untuk menghitung sisi"
    ],
    level: "SMP · Kelas VIII",
    type: ["Simulasi", "Eksplorasi"],
    description: "Eksplorasi hubungan sisi-sisi segitiga siku-siku melalui aktivitas visual. Siswa menemukan sendiri hubungan antar sisi, lalu menggunakannya untuk menghitung sisi segitiga siku-siku.",
    path: "media/matematika/teorema-pythagoras/bagian3/media3.html",
    thumbnail: "images/image (8).jpg",
    color: "navy",
    icon: "pythagoras"
  },  
  {
    id: "pythagoras-game",
    title: "Ular Tangga Teorema Pythagoras",
    subject: "Matematika",
    chapter: "Teorema Pythagoras",
    tp: [
      "Soal latihan berbasis game"
    ],
    level: "SMP · Kelas VIII",
    type: ["game", "soal"],
    description: "Belajar sambil bermain dengan ular tangga berisi soal latihan teorema pythagoras. Bisa digunakan sebagai kompetisi berkelompok dengan maksimal 6 pemain",
    path: "media/matematika/teorema-pythagoras/game/ulartangga.html",
    thumbnail: "images/image (3).jpg",
    color: "navy",
    icon: "pythagoras"
  },  
  {
    id: "Persamaan dan pertidaksamaan linear satu variable",
    title: "Persamaan dan pertidaksamaan linear satu variable",
    subject: "Matematika",
    chapter: "Persamaan dan pertidaksamaan linear satu variable (PLSV)",
    tp: [
      "TP 1 — Menjelaskan persamaan sebagai kesamaan dua ruas dan variabel sebagai bilangan yang belum diketahui",
      "TP 2 — Menyelesaikan persamaan dengan operasi yang sama di kedua ruas",
      "TP 3 - Menyelesaikan masalah kontekstual dengan persamaan"
    ],
    level: "SMP · Kelas VIII",
    type: ["Simulasi", "Eksplorasi"],
    description: "Siswa menemukan arti persamaan, cara menyelesaikannya, dan cara memodelkan cerita",
    path: "media/matematika/linear/bagian1/media1.html",
    thumbnail: "images/image (4).jpg",
    color: "softGreen",
    icon: "linear"
  },  
  {
    id: "Persamaan dan pertidaksamaan linear satu variable - bagian 2",
    title: "Persamaan dan pertidaksamaan linear satu variable",
    subject: "Matematika",
    chapter: "Persamaan dan pertidaksamaan linear satu variable (PLSV)",
    tp: [
      "TP 4 — Menjelaskan pertidaksamaan dan menunjukkan penyelesaiannya pada garis bilangan",
      "TP 5 — Menyelesaikan pertidaksamaan, termasuk saat dikali atau dibagi bilangan negatif",
      "TP 6 - Menyelesaikan masalah kontekstual dengan pertidaksamaan"
    ],
    level: "SMP · Kelas VIII",
    type: ["Simulasi", "Eksplorasi","Studi Kasus"],
    description: "Siswa menemukan arti persamaan, cara menyelesaikannya, dan cara memodelkan cerita",
    path: "media/matematika/linear/bagian2/media2.html",
    thumbnail: "images/image (5).jpg",
    color: "softGreen",
    icon: "linear"
  },  
  {
    id: "Pengenalan Teks Argumentasi",
    title: "Teks Argumentasi",
    subject: "Bahasa Indonesia",
    chapter: "Teks Argumentasi",
    tp: [
      "TP 1 — Menemukan hubungan a² + b² = c² pada segitiga siku-siku",
      "TP 2 — Menghitung panjang sisi miring dan sisi tegak segitiga siku-siku"
    ],
    level: "SMK · Kelas XI",
    type: ["Simulasi", "Latihan"],
    description: "Eksplorasi hubungan sisi-sisi segitiga siku-siku melalui aktivitas visual. Siswa menemukan sendiri hubungan antar sisi, lalu menggunakannya untuk menghitung sisi segitiga siku-siku.",
    path: "media/bahasa indonesia/teks-argumentasi/Teks Argumentasi1.html",
    thumbnail: "images/image (9).jpg",
    color: "greenSoft",
    icon: ""
  },
  {
    id: "tts-teks-argumentasi",
    title: "TTS Teks Argumentasi",
    subject: "Bahasa Indonesia",
    chapter: "Teks Argumentasi",
    tp: [
      "TP 1 — Mengenali struktur dan istilah penting teks argumentasi",
      "TP 2 — Menggunakan konjungsi dan kata penanda dalam menyusun argumen",
      "TP 3 — Membedakan fakta dan opini serta menilai kekuatan argumen"
    ],
    level: "SMK · Kelas XI",
    type: ["TTS", "Latihan"],
    description: "Teka-teki silang 4 halaman untuk melatih istilah, kebahasaan, fakta dan opini, serta penilaian argumen pada teks argumentasi.",
    path: "media/bahasa indonesia/teks-argumentasi/TTS Teks Argumentasi.html",
    thumbnail: "images/image (11).png",   // isi dengan gambar Anda
    color: "greenSoft",
    icon: "..."                // sesuaikan dengan ikon katalog Anda
  },
  {
    id: "teks-berita-1",
    title: "Teks Berita",
    subject: "Bahasa Indonesia",
    chapter: "Teks Berita",
    tp: [
      "TP 1 — Mengidentifikasi struktur teks berita (judul, teras, isi) dan unsur 5W+1H",
      "TP 2 — Menggunakan kaidah kebahasaan berita (kalimat langsung dan tidak langsung, kata kerja verbal, konjungsi temporal)",
      "TP 3 — Menilai keakuratan dan objektivitas berita, termasuk membedakan fakta dan opini"
    ],
    level: "SMK · Kelas XI",
    type: ["Memori Box", "Kuis", "Tarik Tambang"],
    description: "Latihan interaktif untuk mengenali struktur, unsur 5W+1H, dan kebahasaan teks berita melalui permainan kartu, kuis, dan tarik tambang kelompok.",
    path: "media/bahasa indonesia/teks-berita/Teks Berita1.html",
    thumbnail: "images/image (10).png",
    color: "blueSoft", 
    icon: "..."
  },
  {
    id: "ular-tangga-cerpen",
    title: "Ular Tangga Cerpen",
    subject: "Bahasa Indonesia",
    chapter: "Cerpen",
    tp: [
      "Latihan Soal"
    ],
    level: "SMK · Kelas XI",
    type: ["Game", "Kuis", "Kompetisi"],
    description: "Latihan interaktif untuk mengenali struktur, unsur 5W+1H, dan kebahasaan teks berita melalui permainan kartu, kuis, dan tarik tambang kelompok.",
    path: "media/bahasa indonesia/cerpen/media1.html",
    thumbnail: "images/image (12).png",
    color: "blueSoft", 
    icon: "..."
  }
  
];
