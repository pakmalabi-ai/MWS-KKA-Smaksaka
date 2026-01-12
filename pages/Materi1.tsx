import React, { useState, useEffect } from 'react';
import { 
  Database, 
  BookOpen, 
  CheckCircle, 
  Save, 
  Trash2, 
  Key, 
  Award, 
  ArrowRight, 
  BrainCircuit, 
  LayoutGrid, 
  X, 
  FolderOpen, 
  AlertTriangle, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  ScanLine, 
  Printer,
  Send,
  Layers,
  FileDigit,
  Table as TableIcon,
  RefreshCcw
} from 'lucide-react';

// --- DATA & CONTENT ---

const EVALUASI_DATA = [
  {
    id: 1,
    question: "Dalam piramida pengetahuan (DIKW), fakta mentah seperti angka '5000' atau kata 'Merah' yang belum memiliki konteks disebut sebagai...",
    options: ["Information (Informasi)", "Data", "Knowledge (Pengetahuan)", "Wisdom (Kebijaksanaan)", "Database"],
    answer: 1 // B. Data
  },
  {
    id: 2,
    question: "Manakah pernyataan berikut yang paling tepat menggambarkan hubungan antara Data dan Informasi?",
    options: [
      "Data adalah informasi yang sudah diolah.",
      "Informasi adalah data yang tidak memiliki arti.",
      "Data adalah fakta mentah, sedangkan informasi adalah data yang sudah diberi konteks/arti.",
      "Data dan informasi adalah hal yang sama persis.",
      "Informasi berada di level paling bawah piramida DIKW."
    ],
    answer: 2 // C
  },
  {
    id: 3,
    question: "Kecerdasan Artifisial (AI) membutuhkan data untuk belajar. Jika data yang dimasukkan ke dalam sistem AI berantakan atau salah, maka hasil output AI juga akan salah. Konsep ini dikenal dengan istilah...",
    options: ["Artificial General Intelligence", "Data Mining", "Machine Learning", "Garbage In, Garbage Out", "Big Data Analysis"],
    answer: 3 // D
  },
  {
    id: 4,
    question: "Dalam analogi lemari pakaian, 'Laci' yang dikhususkan untuk menyimpan benda sejenis (misalnya khusus kaos kaki) merepresentasikan komponen basis data yaitu...",
    options: ["Field", "Record", "Tabel", "Database", "Query"],
    answer: 2 // C
  },
  {
    id: 5,
    question: "Perhatikan data berikut: [Budi Santoso, X TJKT 1, Jl. Merdeka No. 45]. Satu kesatuan data lengkap yang memuat informasi tentang satu siswa tersebut disebut...",
    options: ["Field", "Record", "File", "Bit", "Byte"],
    answer: 1 // B
  },
  {
    id: 6,
    question: "Komponen basis data yang berfungsi sebagai kategori atau judul kolom (misalnya: Nama_Siswa, Harga_Barang) disebut...",
    options: ["Record", "Tuple", "Field", "Row", "Table"],
    answer: 2 // C
  },
  {
    id: 7,
    question: "Manakah di bawah ini yang merupakan urutan hirarki data dari yang terkecil hingga terbesar?",
    options: [
      "Database -> Tabel -> Record -> Field -> Bit",
      "Bit -> Field -> Record -> Tabel -> Database",
      "Record -> Field -> Bit -> Tabel -> Database",
      "Tabel -> Database -> Field -> Record -> Bit",
      "Bit -> Tabel -> Field -> Record -> Database"
    ],
    answer: 1 // B
  },
  {
    id: 8,
    question: "Syarat utama sebuah kolom dapat dijadikan sebagai Primary Key (Kunci Utama) adalah...",
    options: [
      "Datanya boleh kosong (NULL).",
      "Datanya harus berupa angka saja.",
      "Datanya harus unik (tidak boleh ada yang sama).",
      "Datanya harus panjang.",
      "Datanya harus berupa huruf."
    ],
    answer: 2 // C
  },
  {
    id: 9,
    question: "Dalam sebuah tabel 'Data Penduduk', manakah kolom yang paling tepat dipilih sebagai Primary Key?",
    options: ["Nama Lengkap", "Tanggal Lahir", "Alamat Rumah", "Nomor Induk Kependudukan (NIK)", "Golongan Darah"],
    answer: 3 // D
  },
  {
    id: 10,
    question: "Mengapa 'Nama Siswa' tidak disarankan menjadi Primary Key?",
    options: [
      "Karena nama siswa terlalu pendek.",
      "Karena nama siswa mengandung huruf.",
      "Karena nama siswa sulit diingat komputer.",
      "Karena ada kemungkinan dua siswa memiliki nama yang sama persis.",
      "Karena nama siswa bisa berubah setiap hari."
    ],
    answer: 3 // D
  },
  {
    id: 11,
    question: "Tipe data yang paling tepat untuk menyimpan 'Harga Barang' (contoh: 5000, 15000) agar bisa dilakukan perhitungan matematika adalah...",
    options: ["VARCHAR", "TEXT", "INTEGER", "DATE", "BOOLEAN"],
    answer: 2 // C
  },
  {
    id: 12,
    question: "Tipe data yang paling tepat untuk menyimpan 'Nomor Telepon' (contoh: 08123456789) adalah...",
    options: [
      "INTEGER, karena isinya angka semua.",
      "FLOAT, karena isinya angka desimal.",
      "BOOLEAN, karena hanya ada dua kemungkinan.",
      "DATE, karena berhubungan dengan waktu.",
      "VARCHAR/TEXT, karena angka '0' di depan tidak boleh hilang dan tidak digunakan untuk operasi matematika."
    ],
    answer: 4 // E
  },
  {
    id: 13,
    question: "Tipe data BOOLEAN digunakan untuk menyimpan data yang...",
    options: [
      "Berupa teks panjang.",
      "Berupa angka desimal.",
      "Hanya memiliki dua nilai (Benar/Salah, Ya/Tidak).",
      "Berupa tanggal dan waktu.",
      "Berupa gambar atau video."
    ],
    answer: 2 // C
  },
  {
    id: 14,
    question: "Apa yang dimaksud dengan Redundansi Data?",
    options: [
      "Data yang hilang dari penyimpanan.",
      "Data yang tersimpan secara terenkripsi.",
      "Penumpukan data yang sama (duplikasi) yang memboroskan memori.",
      "Data yang sangat penting dan rahasia.",
      "Proses penghapusan data secara permanen."
    ],
    answer: 2 // C
  },
  {
    id: 15,
    question: "Sebuah tabel basis data yang baik harus memegang prinsip 'Satu Tabel, Satu Entitas'. Maksud dari prinsip tersebut adalah...",
    options: [
      "Satu tabel boleh menyimpan segala jenis data (siswa, guru, barang dicampur).",
      "Satu tabel hanya boleh memiliki satu baris data.",
      "Satu tabel hanya boleh menyimpan data yang sejenis (misal tabel siswa hanya untuk data siswa).",
      "Satu tabel harus disimpan dalam satu komputer saja.",
      "Satu tabel tidak boleh memiliki Primary Key."
    ],
    answer: 2 // C
  },
  {
    id: 16,
    question: "Bagaimana algoritma rekomendasi YouTube atau TikTok bisa mengetahui video apa yang kamu sukai?",
    options: [
      "Dengan menggunakan sihir digital.",
      "Dengan merekam suara kita secara diam-diam.",
      "Dengan menganalisis pola data interaksi (history tontonan, like, durasi) yang tersimpan di basis data.",
      "Dengan menebak secara acak (random).",
      "Dengan menyewa orang untuk memantau setiap pengguna."
    ],
    answer: 2 // C
  },
  {
    id: 17,
    question: "Jika kamu diminta membuat tabel 'Menu Makanan', manakah tipe data yang tepat untuk kolom Apakah_Pedas?",
    options: ["INTEGER", "VARCHAR", "DATE", "BOOLEAN", "CURRENCY"],
    answer: 3 // D
  },
  {
    id: 18,
    question: "Dalam piramida DIKW, sebuah keputusan cerdas yang diambil berdasarkan pengetahuan (misalnya: 'Membeli barang saat diskon karena tahu pola harga') disebut...",
    options: ["Data", "Information", "Knowledge", "Wisdom", "Database"],
    answer: 3 // D
  },
  {
    id: 19,
    question: "Perintah atau instruksi yang dituliskan untuk meminta/mengambil data tertentu dari basis data disebut...",
    options: ["Field", "Record", "Query", "Bug", "Hardware"],
    answer: 2 // C
  },
  {
    id: 20,
    question: "Apa akibatnya jika sebuah tabel tidak memiliki Primary Key?",
    options: [
      "Tabel akan menjadi lebih cepat diakses.",
      "Komputer akan kesulitan membedakan record yang datanya mirip atau identik.",
      "Kapasitas penyimpanan akan bertambah.",
      "Data akan otomatis terhapus.",
      "Tabel akan berubah menjadi grafik."
    ],
    answer: 1 // B
  }
];

// --- CUSTOM SVG ILLUSTRATIONS ---

const IllustrationMessyRoom = () => (
  <svg viewBox="0 0 400 250" className="w-full h-auto drop-shadow-lg rounded-xl overflow-hidden bg-slate-900">
    <defs>
      <linearGradient id="messyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#messyGradient)" />
    
    {/* Scattered Items */}
    <g className="animate-pulse">
        <rect x="50" y="180" width="40" height="30" rx="4" fill="#ef4444" opacity="0.7" transform="rotate(-15 70 195)" />
        <circle cx="150" cy="200" r="15" fill="#3b82f6" opacity="0.7" />
        <path d="M250 180 L270 220 L230 220 Z" fill="#eab308" opacity="0.7" transform="rotate(20 250 200)" />
        <rect x="320" y="150" width="30" height="50" rx="2" fill="#10b981" opacity="0.7" transform="rotate(45 335 175)" />
        <circle cx="100" cy="120" r="10" fill="#d946ef" opacity="0.6" />
        <rect x="200" y="100" width="60" height="10" rx="2" fill="#64748b" transform="rotate(-10 230 105)" />
    </g>
    
    <text x="200" y="50" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="monospace">Data Tidak Terstruktur (Chaos)</text>
    <text x="200" y="70" textAnchor="middle" fill="#64748b" fontSize="10">Sulit dicari, AI Bingung</text>
  </svg>
);

const IllustrationTidyCloset = () => (
  <svg viewBox="0 0 400 250" className="w-full h-auto drop-shadow-lg rounded-xl overflow-hidden bg-slate-900">
    <defs>
      <linearGradient id="tidyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#tidyGradient)" />
    
    {/* Shelves */}
    <rect x="50" y="80" width="300" height="10" rx="2" fill="#475569" />
    <rect x="50" y="150" width="300" height="10" rx="2" fill="#475569" />
    
    {/* Organized Items */}
    <g>
        {/* Row 1: Shirts (Red) */}
        <rect x="70" y="40" width="40" height="40" rx="4" fill="#ef4444" />
        <rect x="120" y="40" width="40" height="40" rx="4" fill="#ef4444" />
        <rect x="170" y="40" width="40" height="40" rx="4" fill="#ef4444" />
        <text x="300" y="65" fill="#ef4444" fontSize="12" fontWeight="bold">Tabel Baju</text>
        
        {/* Row 2: Pants (Blue) */}
        <rect x="70" y="110" width="40" height="40" rx="4" fill="#3b82f6" />
        <rect x="120" y="110" width="40" height="40" rx="4" fill="#3b82f6" />
        <text x="300" y="135" fill="#3b82f6" fontSize="12" fontWeight="bold">Tabel Celana</text>

        {/* Row 3: Books (Green) */}
        <rect x="70" y="180" width="10" height="40" rx="1" fill="#10b981" />
        <rect x="85" y="180" width="10" height="40" rx="1" fill="#10b981" />
        <rect x="100" y="180" width="10" height="40" rx="1" fill="#10b981" />
        <text x="300" y="205" fill="#10b981" fontSize="12" fontWeight="bold">Tabel Buku</text>
    </g>
    
    <text x="200" y="25" textAnchor="middle" fill="#94a3b8" fontSize="14" fontFamily="monospace">Basis Data (Terstruktur)</text>
  </svg>
);

const IllustrationHierarchy = () => (
    <svg viewBox="0 0 500 300" className="w-full h-auto drop-shadow-lg">
        {/* Pyramid Steps */}
        <g transform="translate(250, 40)">
            {/* Database */}
            <path d="M-40 0 L40 0 L60 40 L-60 40 Z" fill="#6366f1" />
            <text x="0" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">DATABASE</text>
            
            {/* Table */}
            <path d="M-60 45 L60 45 L80 85 L-80 85 Z" fill="#818cf8" />
            <text x="0" y="70" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">FILE / TABEL</text>
            
            {/* Record */}
            <path d="M-80 90 L80 90 L100 130 L-100 130 Z" fill="#a5b4fc" />
            <text x="0" y="115" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">RECORD</text>
            
            {/* Field */}
            <path d="M-100 135 L100 135 L120 175 L-120 175 Z" fill="#c7d2fe" />
            <text x="0" y="160" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">FIELD</text>
            
            {/* Char/Byte */}
            <path d="M-120 180 L120 180 L140 220 L-140 220 Z" fill="#e2e8f0" />
            <text x="0" y="205" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">BYTE / CHAR</text>
        </g>
        
        {/* Annotation Lines */}
        <line x1="390" y1="60" x2="450" y2="60" stroke="#64748b" strokeDasharray="4" />
        <text x="455" y="65" fill="#94a3b8" fontSize="10">Kumpulan Tabel</text>
        
        <line x1="370" y1="110" x2="450" y2="110" stroke="#64748b" strokeDasharray="4" />
        <text x="455" y="115" fill="#94a3b8" fontSize="10">Satu Baris Data</text>

        <line x1="390" y1="155" x2="450" y2="155" stroke="#64748b" strokeDasharray="4" />
        <text x="455" y="160" fill="#94a3b8" fontSize="10">Satu Kolom</text>
    </svg>
);

const IllustrationGIGO = () => (
    <svg viewBox="0 0 500 200" className="w-full h-auto bg-slate-900 rounded-xl border border-slate-700">
        {/* Input Zone */}
        <rect x="20" y="50" width="80" height="100" rx="8" fill="#334155" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"/>
        <text x="60" y="105" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">DATA</text>
        <text x="60" y="125" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">SAMPAH</text>
        
        {/* Arrow 1 */}
        <path d="M110 100 L150 100" stroke="#94a3b8" strokeWidth="4" markerEnd="url(#arrowhead)" />
        
        {/* Processing Machine */}
        <rect x="160" y="40" width="120" height="120" rx="10" fill="#1e293b" stroke="#6366f1" strokeWidth="3" />
        <circle cx="220" cy="100" r="30" fill="none" stroke="#6366f1" strokeWidth="4" className="animate-spin origin-center"/>
        <path d="M220 70 L220 130 M190 100 L250 100" stroke="#6366f1" strokeWidth="2" />
        <text x="220" y="180" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="bold">PROSES AI</text>
        
        {/* Arrow 2 */}
        <path d="M290 100 L330 100" stroke="#94a3b8" strokeWidth="4" markerEnd="url(#arrowhead)" />
        
        {/* Output Zone */}
        <rect x="340" y="50" width="100" height="100" rx="8" fill="#334155" stroke="#ef4444" strokeWidth="2" />
        <text x="390" y="95" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">HASIL</text>
        <text x="390" y="115" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">ERROR / BIAS</text>

        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
        </defs>
    </svg>
);


// --- COMPONENTS ---

// Internal Navigation for this module
const ModuleNav = ({ page, setPage }: { page: string, setPage: (p: string) => void }) => (
  <div className="sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg mb-6 -mx-4 px-4 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <span className="text-slate-200 font-bold text-sm tracking-tight hidden md:block">Modul 1: <span className="text-blue-400">Analisis Data</span></span>
        <span className="text-slate-200 font-bold text-sm tracking-tight md:hidden">Modul 1</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {['Home', 'Materi', 'Simulasi', 'LKPD', 'Evaluasi'].map((item) => (
          <button 
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-all ${
              page === item.toLowerCase() 
              ? 'bg-blue-600 text-white' 
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const Hero = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative rounded-2xl overflow-hidden mx-0 md:mx-4">
    <div className="absolute inset-0 bg-slate-950/90 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-bold tracking-wider mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
        ELEMEN: ANALISIS DATA
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_forwards] opacity-0">
        Fondasi Basis Data & <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Struktur Data AI
        </span>
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
        "Data adalah minyak baru (Data is the New Oil). Namun, minyak mentah tidak berguna jika tidak diolah. Mari belajar merapikan data agar komputer bisa 'berpikir'."
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
        <button 
          onClick={() => setPage('materi')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <BookOpen className="w-5 h-5" /> Pelajari Materi
        </button>
        <button 
          onClick={() => setPage('simulasi')}
          className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <BrainCircuit className="w-5 h-5" /> Lab Data
        </button>
      </div>
    </div>
  </section>
);

const Materials = () => {
  return (
    <div className="pt-4 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* PENGANTAR: DATA VS INFORMASI */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
           <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                 <FileDigit className="text-blue-400" /> Data vs Informasi
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                 <div>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                       Sebelum masuk ke database, kita harus bisa membedakan <strong>Data</strong> dan <strong>Informasi</strong>.
                       Seringkali kita menganggapnya sama, padahal beda level.
                    </p>
                    <div className="space-y-4">
                       <div className="bg-slate-950 p-4 rounded-lg border-l-4 border-blue-500">
                          <h4 className="text-blue-400 font-bold text-sm uppercase">Data (Mentah)</h4>
                          <p className="text-slate-400 text-sm mt-1">Fakta kasar yang belum punya arti. <br/><em>Contoh: "5000", "Merah", "Budi".</em></p>
                       </div>
                       <div className="bg-slate-950 p-4 rounded-lg border-l-4 border-emerald-500">
                          <h4 className="text-emerald-400 font-bold text-sm uppercase">Informasi (Matang)</h4>
                          <p className="text-slate-400 text-sm mt-1">Data yang sudah diolah dan berguna. <br/><em>Contoh: "Budi membeli tas Merah seharga 5000".</em></p>
                       </div>
                    </div>
                 </div>
                 <div className="relative h-48 bg-slate-900 rounded-xl border border-slate-700 p-4 flex items-center justify-center">
                    <div className="text-center">
                       <div className="flex gap-4 items-center justify-center mb-2">
                          <span className="text-2xl">🥩</span>
                          <ArrowRight className="text-slate-500" />
                          <span className="text-2xl">🍢</span>
                       </div>
                       <p className="text-xs text-slate-500 italic">
                          "Analogi: Data itu Daging Mentah, Informasi itu Sate Kambing."
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* KEGIATAN BELAJAR 1 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Konsep Basis Data (Mindful)</h2>
          </div>
          
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 md:p-8 space-y-8">
            {/* Analogi Lemari */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2"><FolderOpen/> Analogi: Kamar Tidur vs Lemari</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Bayangkan jika kamu melempar semua bajumu, buku, dan kabel ke satu tumpukan besar. Saat butuh "Buku Matematika", kamu pasti panik!
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600">
                  <p className="text-sm font-semibold text-white mb-2">Solusi: Basis Data (Lemari)</p>
                  <ul className="text-sm text-slate-400 space-y-1 list-disc pl-4">
                    <li>Laci khusus baju (Tabel Baju).</li>
                    <li>Rak khusus buku (Tabel Buku).</li>
                    <li>Kotak khusus kabel (Tabel Kabel).</li>
                  </ul>
                  <p className="text-xs text-emerald-400 mt-2 italic">"Database membuat pencarian data menjadi instan."</p>
                </div>
              </div>
              
              {/* SVG Comparison */}
              <div className="grid grid-cols-2 gap-2">
                 <div className="text-center">
                    <IllustrationMessyRoom />
                    <p className="text-xs text-red-400 mt-2 font-bold">Tanpa Database</p>
                 </div>
                 <div className="text-center">
                    <IllustrationTidyCloset />
                    <p className="text-xs text-emerald-400 mt-2 font-bold">Dengan Database</p>
                 </div>
              </div>
            </div>

            <hr className="border-slate-700"/>

            {/* Hierarki Data */}
            <div>
               <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2"><Layers/> Hierarki Data</h3>
               <p className="text-slate-300 mb-6">Data disusun bertingkat seperti piramida. Mulai dari yang terkecil (huruf) hingga terbesar (kumpulan tabel).</p>
               <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                     <IllustrationHierarchy />
                  </div>
                  <div className="w-full md:w-1/2 space-y-3">
                     <div className="bg-slate-900 p-3 rounded border-l-2 border-purple-500">
                        <strong className="text-purple-300 text-sm">1. Field (Kolom/Atribut)</strong>
                        <p className="text-xs text-slate-400">Unit terkecil informasi yang punya makna. Contoh: Kolom 'Nama', Kolom 'Harga'.</p>
                     </div>
                     <div className="bg-slate-900 p-3 rounded border-l-2 border-purple-500">
                        <strong className="text-purple-300 text-sm">2. Record (Baris)</strong>
                        <p className="text-xs text-slate-400">Kumpulan field yang membentuk satu kesatuan data objek. Contoh: Data lengkap "Budi, X TJKT, Hadir".</p>
                     </div>
                     <div className="bg-slate-900 p-3 rounded border-l-2 border-purple-500">
                        <strong className="text-purple-300 text-sm">3. Tabel (File)</strong>
                        <p className="text-xs text-slate-400">Kumpulan record sejenis. Contoh: Tabel Siswa, Tabel Guru.</p>
                     </div>
                  </div>
               </div>
            </div>

            <hr className="border-slate-700"/>

            {/* Anatomi Tabel */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><LayoutGrid/> Anatomi Tabel (Meaningful)</h3>
              <p className="text-slate-300 mb-6">Agar komputer bisa membaca data, kita menyusunnya dalam tabel. Setiap kolom punya <strong>Tipe Data</strong> khusus.</p>
              
              <div className="overflow-x-auto bg-slate-900 rounded-lg border border-slate-700 p-1 mb-6 shadow-xl">
                 <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-slate-300 font-bold">
                        <th className="p-3 border-b border-slate-600 w-1/4">
                           NISN (PK)<br/>
                           <span className="text-[10px] text-amber-500 font-mono bg-slate-900 px-1 rounded">Integer</span>
                        </th>
                        <th className="p-3 border-b border-slate-600 w-1/4">
                           Nama_Siswa<br/>
                           <span className="text-[10px] text-blue-400 font-mono bg-slate-900 px-1 rounded">Varchar (Teks)</span>
                        </th>
                        <th className="p-3 border-b border-slate-600 w-1/4">
                           Tgl_Lahir<br/>
                           <span className="text-[10px] text-emerald-400 font-mono bg-slate-900 px-1 rounded">Date</span>
                        </th>
                        <th className="p-3 border-b border-slate-600 w-1/4">
                           Aktif<br/>
                           <span className="text-[10px] text-purple-400 font-mono bg-slate-900 px-1 rounded">Boolean</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-400">
                      <tr className="hover:bg-slate-800/50 border-b border-slate-800">
                        <td className="p-3 text-emerald-400 font-mono">0051234567</td>
                        <td className="p-3">Ahmad Dhani</td>
                        <td className="p-3">2008-05-12</td>
                        <td className="p-3"><CheckCircle size={14} className="text-emerald-500"/></td>
                      </tr>
                      <tr className="hover:bg-slate-800/50 border-b border-slate-800 bg-blue-900/10">
                        <td className="p-3 text-emerald-400 font-mono">0051234568</td>
                        <td className="p-3">Budi Santoso</td>
                        <td className="p-3">2007-11-20</td>
                        <td className="p-3"><CheckCircle size={14} className="text-emerald-500"/></td>
                      </tr>
                    </tbody>
                 </table>
                 <div className="bg-blue-900/10 text-center text-xs text-blue-300 p-2">
                    ⬆️ Baris berwarna biru disebut <strong>1 Record</strong>. Kolom NISN, Nama, dll disebut <strong>Field</strong>. ⬆️
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* KEGIATAN BELAJAR 2 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Kunci Primer (Primary Key)</h2>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                 <div className="bg-rose-900/20 border border-rose-500/30 p-4 rounded-xl mb-4">
                   <h3 className="text-rose-400 font-bold flex items-center gap-2"><AlertTriangle size={20}/> Masalah "Si Budi"</h3>
                   <p className="text-slate-300 text-sm">
                     Jika ada 5 siswa bernama "Budi Santoso" di sekolah, dan Pak Guru memanggil "Budi!", siapa yang maju? Komputer sangat benci kebingungan (Ambiguitas) seperti ini.
                   </p>
                 </div>
                
                <h3 className="text-xl font-bold text-amber-400">Solusi: ID Card (Primary Key)</h3>
                <p className="text-slate-300">
                  Setiap tabel WAJIB memiliki satu kolom sakti yang isinya <strong>UNIK (Tidak Boleh Kembar)</strong>.
                </p>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-bold text-white mb-2">3 Syarat Primary Key:</h4>
                    <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-slate-300"><CheckCircle size={16} className="text-emerald-500"/> <strong>Unik:</strong> Tidak ada dua data yang sama.</li>
                    <li className="flex items-center gap-2 text-slate-300"><CheckCircle size={16} className="text-emerald-500"/> <strong>Not Null:</strong> Tidak boleh kosong.</li>
                    <li className="flex items-center gap-2 text-slate-300"><CheckCircle size={16} className="text-emerald-500"/> <strong>Immutable:</strong> Jarang berubah.</li>
                    </ul>
                </div>
              </div>

              {/* Visual ID Card */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-40 bg-gradient-to-br from-blue-600 to-indigo-800 rounded-xl shadow-2xl relative p-4 border border-blue-400/30 transform hover:scale-105 transition-transform">
                   <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"><ScanLine size={16} className="text-white"/></div>
                         <span className="text-white font-bold text-sm tracking-wide">KARTU PELAJAR</span>
                      </div>
                      <div className="w-10 h-10 bg-white rounded-md"></div>
                   </div>
                   <div className="space-y-1">
                      <div className="text-[10px] text-blue-200 uppercase">Nomor Induk (PK)</div>
                      <div className="text-xl font-mono text-white font-bold tracking-widest text-shadow">10502202</div>
                      <div className="text-xs text-white font-semibold mt-2">Budi Santoso</div>
                   </div>
                   <div className="absolute bottom-4 right-4 opacity-50"><Key className="text-white" size={40}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KEGIATAN BELAJAR 3 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hubungan Data dengan AI (GIGO)</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-emerald-900/20 rounded-2xl border border-slate-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-4">"Mengapa Saya Harus Belajar Ini?"</h3>
            <p className="text-slate-300 mb-6 text-lg">
              AI seperti ChatGPT atau TikTok Algorithm <strong>memakan data</strong>. Kualitas AI tergantung kualitas data yang kamu berikan.
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                   <IllustrationGIGO />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                   <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">GIGO</h4>
                   <p className="text-white font-bold text-xl">Garbage In, Garbage Out</p>
                   <p className="text-slate-400 text-sm">
                      "Masuk Sampah, Keluar Sampah". <br/>
                      Jika data penjualan kantin kamu tulis "Bakso enak 5rb" (Teks), komputer tidak bisa menghitung rata-ratanya. Data harus rapi (Angka: 5000).
                   </p>
                   <div className="bg-emerald-900/30 p-3 rounded border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
                      Tips: Langkah pertama menjadi ahli AI bukan belajar coding rumit, tapi belajar <strong>Merapikan Data</strong>.
                   </div>
                </div>
            </div>
          </div>
        </div>

        {/* REFLEKSI */}
        <div className="bg-slate-800/50 border border-indigo-500/30 p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center justify-center gap-2"><FileText/> Lembar Refleksi (Untuk Dibaca di Rumah)</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Sebelum menutup modul ini, coba ambil <strong>Kartu Pelajar</strong> atau <strong>KTP</strong>-mu. Tataplah kartu tersebut selama 1 menit.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
             <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
               <span className="text-indigo-500 font-bold text-xl block mb-2">1</span>
               <p className="text-slate-300 text-sm">Dapatkah kamu menemukan mana yang merupakan "Data Value"?</p>
             </div>
             <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
               <span className="text-indigo-500 font-bold text-xl block mb-2">2</span>
               <p className="text-slate-300 text-sm">Dapatkah kamu menunjuk mana yang berfungsi sebagai "Primary Key"?</p>
             </div>
             <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
               <span className="text-indigo-500 font-bold text-xl block mb-2">3</span>
               <p className="text-slate-300 text-sm">Bayangkan jika satu angka saja pada Primary Key itu salah ketik, masalah apa yang akan terjadi pada hidupmu?</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Simulation = () => {
  // Initial Messy Data (Chat Simulation based on PDF Case)
  const incomingChats = [
    { id: 1, text: "Bakso enak 5 ribu", status: 'pending' },
    { id: 2, text: "Es teh manis banget 3000", status: 'pending' },
    { id: 3, text: "Gorengan anget seribuan", status: 'pending' }
  ];

  const [chats, setChats] = useState(incomingChats);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  
  // Existing data simulates existing database
  const [dbData, setDbData] = useState([
    { id: 'K-001', item: 'Nasi Rames', price: 6000 },
  ]);
  
  const [inputForm, setInputForm] = useState({ id: '', item: '', price: '' });
  const [error, setError] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState<null | {avg: number, count: number, insight: string}>(null);

  // Select a chat to process
  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
    setError('');
    
    // Auto-fill logic for demo purposes (User extracts data)
    const chatText = chats.find(c => c.id === chatId)?.text || "";
    let suggestedItem = "";
    let suggestedPrice = "";
    
    if (chatText.includes("Bakso")) { suggestedItem = "Bakso"; suggestedPrice = "5000"; }
    else if (chatText.includes("Es teh")) { suggestedItem = "Es Teh Manis"; suggestedPrice = "3000"; }
    else if (chatText.includes("Gorengan")) { suggestedItem = "Gorengan"; suggestedPrice = "1000"; }

    setInputForm({ id: '', item: suggestedItem, price: suggestedPrice }); 
  };

  const handleAddToDB = () => {
    // 1. Validation (GIGO Check)
    if (!inputForm.id || !inputForm.item || !inputForm.price) {
      setError("❌ GIGO ALERT: Data tidak lengkap! AI butuh data spesifik.");
      return;
    }
    // Check Primary Key Uniqueness
    if (dbData.some(d => d.id === inputForm.id)) {
      setError(`❌ PK CONFLICT: ID '${inputForm.id}' sudah ada. Primary Key harus unik.`);
      return;
    }

    // 2. Add to DB
    const newItem = {
      id: inputForm.id,
      item: inputForm.item,
      price: parseInt(inputForm.price),
    };

    setDbData([...dbData, newItem]);
    
    // 3. Update Chat Status
    if (selectedChat) {
      setChats(chats.map(c => c.id === selectedChat ? { ...c, status: 'processed' } : c));
      setSelectedChat(null);
    }

    // 4. Reset Form
    setInputForm({ id: '', item: '', price: '' });
    setError('');
    
    // 5. Trigger AI Update
    updateAI([...dbData, newItem]);
  };

  const updateAI = (data: any[]) => {
    const total = data.reduce((acc, curr) => acc + curr.price, 0);
    const count = data.length;
    const avg = total / count;
    
    let insight = "Data masih sedikit.";
    if (count >= 3) insight = `Rata-rata harga kantin adalah Rp ${Math.round(avg)}.`;
    
    setAiAnalysis({ avg, count, insight });
  };

  const handleDelete = (id: string) => {
     const newData = dbData.filter(d => d.id !== id);
     setDbData(newData);
     updateAI(newData);
  };

  return (
    <div className="pt-8 pb-12 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
             <BrainCircuit className="text-blue-400" /> Lab Data Kantin
           </h2>
           <p className="text-slate-400">Tugasmu: Ubah "Celotehan Siswa" (Unstructured) menjadi "Database Kantin" (Structured) agar AI bisa menghitung rata-rata harga.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* COLUMN 1: UNSTRUCTURED DATA (SOURCE) */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col h-[500px]">
             <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                <h3 className="font-bold text-slate-300 flex items-center gap-2">
                  <MessageSquare size={18} className="text-pink-400"/> Data Mentah
                </h3>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-400">Unstructured</span>
             </div>
             <div className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {chats.map(chat => (
                  <div 
                    key={chat.id}
                    onClick={() => chat.status === 'pending' && handleSelectChat(chat.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all relative ${
                      chat.status === 'processed' 
                      ? 'bg-slate-900/30 border-slate-800 opacity-50 grayscale' 
                      : selectedChat === chat.id 
                        ? 'bg-blue-600 border-blue-400 shadow-lg scale-105 z-10' 
                        : 'bg-slate-700 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold opacity-70">Siswa #{chat.id}</span>
                      {chat.status === 'processed' && <CheckCircle size={14} className="text-emerald-500"/>}
                    </div>
                    <p className="text-sm text-white">"{chat.text}"</p>
                    {selectedChat === chat.id && (
                       <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full p-1 animate-pulse hidden lg:block">
                          <ArrowRight size={16}/>
                       </div>
                    )}
                  </div>
                ))}
             </div>
             <div className="mt-4 text-xs text-center text-slate-500 italic">
               *Klik chat untuk memproses data
             </div>
          </div>

          {/* COLUMN 2: PROCESSING (FORM) */}
          <div className="bg-slate-800 border border-indigo-500/30 rounded-2xl p-6 flex flex-col h-[500px] shadow-2xl relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <ScanLine size={12}/> PROSES ETL
             </div>

             <div className="mb-6 mt-2">
               <p className="text-xs text-slate-400 mb-2 uppercase font-bold">Data Mentah Terpilih:</p>
               <div className="bg-slate-950 p-3 rounded-lg border border-slate-700 min-h-[60px] flex items-center justify-center text-center">
                  {selectedChat 
                    ? <span className="text-indigo-300 italic">"{chats.find(c => c.id === selectedChat)?.text}"</span> 
                    : <span className="text-slate-600 italic">Pilih data di sebelah kiri...</span>}
               </div>
             </div>

             <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400">Kode Barang (Primary Key)</label>
                  <div className="relative">
                    <Key size={12} className="absolute left-2 top-2.5 text-amber-500"/>
                    <input 
                      type="text" 
                      placeholder="Ex: K-002" 
                      value={inputForm.id}
                      onChange={e => setInputForm({...inputForm, id: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-600 rounded p-2 pl-6 text-sm text-white focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <p className="text-[9px] text-amber-500/80 mt-1">*Harus Unik (Tidak boleh kembar)</p>
                </div>

                <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400">Nama Barang (Field)</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Bakso" 
                      value={inputForm.item}
                      onChange={e => setInputForm({...inputForm, item: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-indigo-500 outline-none"
                    />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400">Harga (Field)</label>
                  <input 
                    type="number" 
                    placeholder="Rp" 
                    value={inputForm.price}
                    onChange={e => setInputForm({...inputForm, price: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-indigo-500 outline-none"
                  />
                </div>
             </div>

             {error && (
               <div className="mt-2 p-2 bg-red-900/50 border border-red-500 rounded text-xs text-red-200 flex items-center gap-1 animate-pulse">
                 <AlertTriangle size={12}/> {error}
               </div>
             )}

             <button 
                onClick={handleAddToDB}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl mt-4 flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-emerald-900/20"
             >
               <Save size={16}/> Simpan ke Database
             </button>
          </div>

          {/* COLUMN 3: STRUCTURED DATA & AI (OUTPUT) */}
          <div className="flex flex-col gap-4 h-[500px]">
            {/* Table */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex-1 overflow-hidden flex flex-col">
               <div className="flex items-center justify-between mb-2">
                 <h3 className="font-bold text-slate-300 flex items-center gap-2">
                    <Database size={18} className="text-emerald-400"/> Tabel: Menu_Kantin
                 </h3>
                 <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">Structured</span>
               </div>
               
               <div className="overflow-auto flex-1 custom-scrollbar rounded-lg border border-slate-700 bg-slate-900/50">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-800 text-slate-400 sticky top-0">
                      <tr>
                        <th className="p-2 text-amber-500">Kode (PK)</th>
                        <th className="p-2">Barang</th>
                        <th className="p-2 text-right">Harga</th>
                        <th className="p-2 text-center">Del</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {dbData.map(row => (
                        <tr key={row.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                           <td className="p-2 font-mono text-amber-200">{row.id}</td>
                           <td className="p-2 font-bold">{row.item}</td>
                           <td className="p-2 text-right">{row.price.toLocaleString('id-ID')}</td>
                           <td className="p-2 text-center">
                             <button onClick={() => handleDelete(row.id)} className="text-slate-600 hover:text-red-400"><Trash2 size={12}/></button>
                           </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>

            {/* AI Dashboard */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-4 border border-indigo-500/50 shadow-lg relative overflow-hidden h-[180px]">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <BarChart3 size={100} className="text-white"/>
               </div>
               
               <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                 <BrainCircuit size={18} className="text-pink-400 animate-pulse"/> Analisis AI Kantin
               </h3>

               {aiAnalysis ? (
                 <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                       <div className="text-[10px] text-indigo-200 uppercase">Jumlah Menu</div>
                       <div className="text-xl font-bold text-white">{aiAnalysis.count}</div>
                    </div>
                    <div className="bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                       <div className="text-[10px] text-indigo-200 uppercase">Rata-rata Harga</div>
                       <div className="text-xl font-bold text-white">Rp {Math.round(aiAnalysis.avg || 0).toLocaleString('id-ID')}</div>
                    </div>
                    <div className="col-span-2 bg-black/20 p-2 rounded-lg backdrop-blur-sm flex items-start gap-2">
                       <div className="w-1.5 h-full bg-emerald-500 rounded-full"></div>
                       <p className="text-xs text-indigo-100 italic">"{aiAnalysis.insight}"</p>
                    </div>
                 </div>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-indigo-300 text-xs text-center opacity-70">
                    <Database size={24} className="mb-2"/>
                    Menunggu data terstruktur...
                 </div>
               )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const LKPDSection = () => {
  const [identity, setIdentity] = useState({
    kelas: '',
    kelompok: '',
    anggota: Array(6).fill('')
  });

  const [task1, setTask1] = useState({
    objectName: '',
    tableName: '',
    fields: '',
    pk: ''
  });

  const [task2, setTask2] = useState({
    header1: '', header2: '', header3: '', header4: '',
    rows: [
      { c1: '', c2: '', c3: '', c4: '' },
      { c1: '', c2: '', c3: '', c4: '' },
      { c1: '', c2: '', c3: '', c4: '' }
    ]
  });

  const [task3, setTask3] = useState({
    ref1: '',
    ref2: ''
  });

  const updateMember = (index: number, val: string) => {
    const newMembers = [...identity.anggota];
    newMembers[index] = val;
    setIdentity({...identity, anggota: newMembers});
  };

  const updateTask2Row = (rowIdx: number, col: string, val: string) => {
    const newRows = [...task2.rows];
    newRows[rowIdx] = { ...newRows[rowIdx], [col]: val };
    setTask2({ ...task2, rows: newRows });
  };

  const handlePrint = () => {
    const win = window.open('', '', 'height=800,width=800');
    if (!win) return;

    const htmlContent = `
      <html>
        <head>
          <title>LKPD Digital - Detektif Data</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #000; }
            h1, h2, h3 { text-align: center; }
            .section { margin-bottom: 20px; border: 1px solid #000; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #000; padding: 5px; text-align: left; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>LEMBAR KERJA PESERTA DIDIK (LKPD)</h1>
          <h2>Judul Kegiatan: Detektif Data</h2>
          
          <div class="section">
            <p><span class="label">Kelas:</span> ${identity.kelas}</p>
            <p><span class="label">Kelompok:</span> ${identity.kelompok}</p>
            <p><span class="label">Nama Anggota:</span></p>
            <ol>
              ${identity.anggota.filter(m => m).map(m => `<li>${m}</li>`).join('')}
            </ol>
          </div>

          <div class="section">
            <h3>TUGAS 1: Identifikasi Komponen</h3>
            <p><span class="label">Objek yang diamati:</span> ${task1.objectName}</p>
            <table>
              <tr><th>Konsep Database</th><th>Temuan</th></tr>
              <tr><td>Nama Tabel</td><td>${task1.tableName}</td></tr>
              <tr><td>Calon Field</td><td>${task1.fields}</td></tr>
              <tr><td>Calon Primary Key</td><td>${task1.pk}</td></tr>
            </table>
          </div>

          <div class="section">
            <h3>TUGAS 2: Simulasi Tabel</h3>
            <table>
              <tr>
                <th>${task2.header1 || 'Field 1 (PK)'}</th>
                <th>${task2.header2 || 'Field 2'}</th>
                <th>${task2.header3 || 'Field 3'}</th>
                <th>${task2.header4 || 'Field 4'}</th>
              </tr>
              ${task2.rows.map(r => `
                <tr>
                  <td>${r.c1}</td><td>${r.c2}</td><td>${r.c3}</td><td>${r.c4}</td>
                </tr>
              `).join('')}
            </table>
          </div>

          <div class="section">
            <h3>TUGAS 3: Refleksi</h3>
            <p><span class="label">1. Kesulitan menentukan Primary Key?</span><br/>${task3.ref1}</p>
            <p><span class="label">2. Manfaat digitalisasi data?</span><br/>${task3.ref2}</p>
          </div>
        </body>
      </html>
    `;

    win.document.write(htmlContent);
    win.document.close();
    win.print();
  };

  const openGoogleForm = () => {
    window.open('https://forms.gle/StQrCLNnhSUujg3H7', '_blank');
  };

  return (
    <div className="pt-8 pb-12 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8 border-b border-slate-700 pb-6">
            <h2 className="text-3xl font-bold text-white mb-2">LKPD Digital: Detektif Data</h2>
            <p className="text-slate-400">Transformasi Objek Nyata ke Basis Data</p>
          </div>

          {/* Identity Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-400 mb-4 uppercase tracking-wider">Identitas Kelompok</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kelas</label>
                <select 
                  value={identity.kelas} 
                  onChange={e => setIdentity({...identity, kelas: e.target.value})} 
                  className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-white focus:border-indigo-500 outline-none appearance-none"
                >
                  <option value="" disabled>Pilih Kelas...</option>
                  <option value="X DKV 3">X DKV 3</option>
                  <option value="X KUL">X KUL</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kelompok</label>
                <select 
                  value={identity.kelompok} 
                  onChange={e => setIdentity({...identity, kelompok: e.target.value})} 
                  className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-white focus:border-indigo-500 outline-none appearance-none"
                >
                  <option value="" disabled>Pilih Kelompok...</option>
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>Kelompok {num}</option>
                  ))}
                </select>
              </div>
            </div>
            <label className="block text-xs text-slate-400 mb-2">Nama Anggota (Isi sesuai jumlah anggota)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {identity.anggota.map((member, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 w-24">Anggota {idx + 1}</span>
                  <input 
                    type="text" 
                    value={member} 
                    onChange={e => updateMember(idx, e.target.value)} 
                    className="flex-1 bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-indigo-500 outline-none" 
                    placeholder={`Nama Anggota ${idx + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Task 1 */}
          <div className="mb-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-bold text-emerald-400 mb-4">TUGAS 1: Identifikasi Komponen</h3>
            <p className="text-sm text-slate-400 mb-4">Ambil satu objek nyata (Kartu Pelajar / Struk Belanja), lalu analisis.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Objek yang diamati</label>
                <input type="text" value={task1.objectName} onChange={e => setTask1({...task1, objectName: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Misal: Struk Belanja Alfamart" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Nama Tabel (Database)</label>
                  <input type="text" value={task1.tableName} onChange={e => setTask1({...task1, tableName: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Misal: Tabel Penjualan" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Calon Primary Key</label>
                  <input type="text" value={task1.pk} onChange={e => setTask1({...task1, pk: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Cari kode unik..." />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Calon Field (Kolom)</label>
                <input type="text" value={task1.fields} onChange={e => setTask1({...task1, fields: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Sebutkan minimal 4, misal: Tanggal, Nama Barang..." />
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-amber-400 mb-4">TUGAS 2: Simulasi Tabel</h3>
            <p className="text-sm text-slate-400 mb-4">Salin data dari objek nyata ke format tabel di bawah ini.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-300">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="p-2"><input type="text" value={task2.header1} onChange={e => setTask2({...task2, header1: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none text-amber-300 placeholder-amber-300/50" placeholder="Field 1 (PK)" /></th>
                    <th className="p-2"><input type="text" value={task2.header2} onChange={e => setTask2({...task2, header2: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none placeholder-slate-400" placeholder="Field 2" /></th>
                    <th className="p-2"><input type="text" value={task2.header3} onChange={e => setTask2({...task2, header3: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none placeholder-slate-400" placeholder="Field 3" /></th>
                    <th className="p-2"><input type="text" value={task2.header4} onChange={e => setTask2({...task2, header4: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none placeholder-slate-400" placeholder="Field 4" /></th>
                  </tr>
                </thead>
                <tbody>
                  {task2.rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-700">
                      <td className="p-2"><input type="text" value={row.c1} onChange={e => updateTask2Row(idx, 'c1', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder={`Data ${idx+1} PK`} /></td>
                      <td className="p-2"><input type="text" value={row.c2} onChange={e => updateTask2Row(idx, 'c2', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder="..." /></td>
                      <td className="p-2"><input type="text" value={row.c3} onChange={e => updateTask2Row(idx, 'c3', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder="..." /></td>
                      <td className="p-2"><input type="text" value={row.c4} onChange={e => updateTask2Row(idx, 'c4', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder="..." /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Task 3 */}
          <div className="mb-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-bold text-purple-400 mb-4">TUGAS 3: Refleksi Deep Learning</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">1. Apakah kalian menemukan kesulitan menentukan Primary Key? Mengapa?</label>
                <textarea value={task3.ref1} onChange={e => setTask3({...task3, ref1: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-3 text-white h-20" placeholder="Jawab di sini..."></textarea>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">2. Jika data ini dimasukkan ke komputer, manfaat apa yang didapat dibandingkan menyimpannya di kertas?</label>
                <textarea value={task3.ref2} onChange={e => setTask3({...task3, ref2: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-3 text-white h-20" placeholder="Jawab di sini..."></textarea>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4 border-t border-slate-700">
            <button 
              onClick={handlePrint}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Printer size={20} /> Simpan ke PDF
            </button>
            <button 
              onClick={openGoogleForm}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/30"
            >
              <Send size={20} /> Kirim LKPD ke Guru
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [userInfo, setUserInfo] = useState({ name: '', class: '' });
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [score, setScore] = useState(0);

  const handleStart = () => {
    if (userInfo.name && userInfo.class) {
      setStarted(true);
    }
  };

  const handleAnswer = (qId: number, answerIdx: number) => {
    setAnswers(prev => ({ ...prev, [qId]: answerIdx }));
  };

  const calculateResults = () => {
    let correctCount = 0;
    EVALUASI_DATA.forEach(q => {
      if (answers[q.id] === q.answer - 1) { // -1 because data is 1-based index but array options 0-based
        correctCount++;
      }
    });
    // Each question 5 points. Max 100.
    const finalScore = correctCount * 5;
    setScore(finalScore);
    setFinished(true);
  };

  const getPredicate = (score: number) => {
    if (score >= 91) return { label: "Sangat Baik", color: "text-emerald-400" };
    if (score >= 81) return { label: "Baik", color: "text-blue-400" };
    if (score >= 70) return { label: "Cukup Baik", color: "text-amber-400" };
    return { label: "Kurang", color: "text-rose-400" };
  };

  const handlePrint = () => {
    const predicate = getPredicate(score);
    const win = window.open('', '', 'height=800,width=800');
    if (!win) return;

    let rowsHtml = '';
    EVALUASI_DATA.forEach((q, idx) => {
      const studentAnsIdx = answers[q.id];
      const studentAnsText = studentAnsIdx !== undefined ? q.options[studentAnsIdx] : "-";
      const isCorrect = studentAnsIdx === (q.answer - 1);
      
      rowsHtml += `
        <tr>
          <td>${idx + 1}</td>
          <td>${q.question}</td>
          <td>${studentAnsText} ${isCorrect ? '✅' : '❌'}</td>
        </tr>
      `;
    });

    const htmlContent = `
      <html>
        <head>
          <title>Hasil Evaluasi - ${userInfo.name}</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #000; }
            h1, h2 { text-align: center; margin-bottom: 5px; }
            .header { border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 20px; }
            .info { margin-bottom: 20px; font-weight: bold; }
            .score-box { text-align: center; border: 2px solid #000; padding: 10px; margin: 20px 0; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>LAPORAN HASIL EVALUASI</h1>
            <h2>Koding dan Kecerdasan Artifisial - Modul 1</h2>
          </div>
          
          <div class="info">
            <p>Nama Siswa : ${userInfo.name}</p>
            <p>Kelas : ${userInfo.class}</p>
            <p>Tanggal : ${new Date().toLocaleDateString('id-ID')}</p>
          </div>

          <div class="score-box">
            <h3>NILAI AKHIR: ${score}</h3>
            <p>Predikat: ${predicate.label}</p>
          </div>

          <h3>Rincian Jawaban:</h3>
          <table>
            <thead>
              <tr>
                <th width="5%">No</th>
                <th width="60%">Pertanyaan</th>
                <th width="35%">Jawaban Siswa</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
          
          <script>window.print();</script>
        </body>
      </html>
    `;

    win.document.write(htmlContent);
    win.document.close();
  };

  const handleReset = () => {
    setUserInfo({ name: '', class: '' });
    setAnswers({});
    setScore(0);
    setStarted(false);
    setFinished(false);
  };

  if (!started) {
    return (
      <div className="pt-8 pb-12 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Identitas Peserta</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Nama Siswa</label>
                <input 
                  type="text" 
                  value={userInfo.name} 
                  onChange={e => setUserInfo({...userInfo, name: e.target.value})} 
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl p-3 text-white focus:border-indigo-500 outline-none"
                  placeholder="Masukkan nama..."
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">Kelas</label>
                <select 
                  value={userInfo.class} 
                  onChange={e => setUserInfo({...userInfo, class: e.target.value})} 
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl p-3 text-white focus:border-indigo-500 outline-none appearance-none"
                >
                  <option value="" disabled>Pilih Kelas...</option>
                  <option value="X DKV 3">X DKV 3</option>
                  <option value="X KUL">X KUL</option>
                </select>
              </div>
              <button 
                onClick={handleStart}
                disabled={!userInfo.name || !userInfo.class}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold rounded-xl mt-4 transition-all"
              >
                Mulai Evaluasi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (finished) {
    const predicate = getPredicate(score);
    return (
      <div className="pt-8 pb-12 min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl text-center">
            <Award className="w-20 h-20 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-2">Evaluasi Selesai!</h3>
            <p className="text-slate-400 mb-8">Terima kasih telah mengerjakan, {userInfo.name}.</p>
            
            <div className="mb-8">
              <div className="text-6xl font-extrabold text-white mb-2">{score}</div>
              <div className={`text-xl font-bold ${predicate.color}`}>{predicate.label}</div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={handlePrint}
                className="px-8 py-3 bg-indigo-600 hover:bg-white hover:text-indigo-900 text-white rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <Printer size={18} /> Kirim Jawaban
              </button>
              <button 
                onClick={handleReset}
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
              >
                <RefreshCcw size={18} /> Ulangi Evaluasi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
            <div>
              <h2 className="text-xl font-bold text-white">Soal Evaluasi</h2>
              <p className="text-xs text-slate-400">Analisis Data dan Konsep Dasar Basis Data</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">Peserta</p>
              <p className="text-sm font-bold text-indigo-400">{userInfo.name}</p>
            </div>
          </div>

          <div className="space-y-8">
            {EVALUASI_DATA.map((q, idx) => (
              <div key={q.id} className="p-4 rounded-xl bg-slate-900/50 border border-slate-700/50">
                <p className="text-white font-medium mb-4"><span className="text-indigo-400 font-bold mr-2">{idx + 1}.</span> {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => (
                    <label 
                      key={optIdx} 
                      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                        answers[q.id] === optIdx 
                        ? 'bg-indigo-600/20 border-indigo-500' 
                        : 'bg-slate-800 border-transparent hover:bg-slate-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        answers[q.id] === optIdx ? 'border-indigo-400' : 'border-slate-500'
                      }`}>
                        {answers[q.id] === optIdx && <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name={`question-${q.id}`} 
                        className="hidden"
                        onChange={() => handleAnswer(q.id, optIdx)}
                      />
                      <span className={`text-sm ${answers[q.id] === optIdx ? 'text-white' : 'text-slate-400'}`}>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700 flex justify-end">
            <button 
              onClick={calculateResults}
              disabled={Object.keys(answers).length < EVALUASI_DATA.length}
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold shadow-lg shadow-emerald-900/20 transition-all flex items-center gap-2"
            >
              Selesai & Lihat Nilai <ArrowRight size={18}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi1: React.FC = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Internal Navigation for this module */}
      <ModuleNav page={page} setPage={setPage} />
      
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {page === 'home' && <Hero setPage={setPage} />}
        {page === 'materi' && <Materials />}
        {page === 'simulasi' && <Simulation />}
        {page === 'lkpd' && <LKPDSection />}
        {page === 'evaluasi' && <Quiz />}
      </main>

       <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: #1e293b; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #475569; 
            border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #64748b; 
        }
        .text-shadow {
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
       `}</style>
    </div>
  );
};

export default Materi1;