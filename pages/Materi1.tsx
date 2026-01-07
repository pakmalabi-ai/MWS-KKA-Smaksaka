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
  ArrowDownCircle,
  Wrench,
  Calculator,
  Palette,
  Utensils,
  Car,
  Hammer,
  Settings
} from 'lucide-react';

// --- DATA & CONTENT ---

const QUIZ_DATA = [
  {
    question: "Dalam bengkel mesin, jika kita menumpuk semua alat (Kunci Pas, Obeng, Baut) dalam satu kotak besar tanpa sekat, ini melanggar konsep...",
    options: ["Database Terstruktur", "Estetika Bengkel", "Keselamatan Kerja", "Biaya Operasional"],
    answer: 0
  },
  {
    question: "Mengapa Nomor Rangka (VIN) pada mobil atau NISN pada siswa disebut Primary Key?",
    options: ["Karena nomernya panjang", "Karena bersifat Unik dan membedakan satu objek dengan objek lain secara pasti", "Karena mudah dihafal", "Karena diberikan oleh pemerintah"],
    answer: 1
  },
  {
    question: "Prinsip GIGO (Garbage In, Garbage Out) dalam AI berarti...",
    options: ["AI bisa mendaur ulang sampah", "Jika data input (catatan) berantakan/salah, hasil analisa AI juga akan salah", "AI membersihkan data otomatis", "Komputer menjadi lambat"],
    answer: 1
  },
  {
    question: "Manakah contoh data 'Record' (Baris) dalam tabel Inventaris Bengkel?",
    options: ["Judul Kolom 'Nama Alat'", "Satu baris data lengkap: [OB-01, Obeng Min, 5 Pcs, Rak A]", "Angka 5 saja", "Tulisan Inventaris"],
    answer: 1
  },
  {
    question: "Seorang akuntan salah memasukkan nominal Rp 10.000 menjadi Rp 100.000. Kesalahan ini disebut...",
    options: ["Human Error pada Data Entry", "Kerusakan Komputer", "Kesalahan AI", "Bug Sistem"],
    answer: 0
  }
];

// --- COMPONENTS ---

// Internal Navigation for this module
const ModuleNav = ({ page, setPage }: { page: string, setPage: (p: string) => void }) => (
  <div className="sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg mb-6 -mx-4 px-4 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <span className="text-slate-200 font-bold text-sm tracking-tight hidden md:block">Modul 1: <span className="text-blue-400">Konsep Data</span></span>
        <span className="text-slate-200 font-bold text-sm tracking-tight md:hidden">Modul 1</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {['Home', 'Materi', 'Simulasi', 'Kuis'].map((item) => (
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
        INFORMATIKA SMK KELAS X
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_forwards] opacity-0">
        Fondasi Data Digital <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Di Dunia Industri
        </span>
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
        "Baik di Bengkel, Dapur, maupun Kantor Akuntan, data yang rapi adalah kunci teknologi cerdas. Mari belajar menyusun data agar pekerjaanmu lebih mudah."
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
          <BrainCircuit className="w-5 h-5" /> Lab Data Vokasi
        </button>
      </div>
    </div>
  </section>
);

const Materials = () => {
  return (
    <div className="pt-4 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* KEGIATAN BELAJAR 1 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Konsep Basis Data di Tempat Kerja</h2>
          </div>
          
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 md:p-8 space-y-8">
            {/* Analogi Lemari/Bengkel */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2"><FolderOpen/> Analogi Bengkel / Gudang</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Bayangkan sebuah bengkel besar di mana ribuan baut, mur, kunci pas, dan oli dilempar begitu saja ke lantai. 
                  Saat pelanggan datang servis, mekanik akan menghabiskan waktu berjam-jam hanya untuk mencari kunci 12mm.
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600">
                  <p className="text-sm font-semibold text-white mb-2">Solusi: RAK PENYIMPANAN (Database)</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Rak A: Khusus Kunci-kunci (Tabel Tools)</li>
                    <li>• Rak B: Khusus Suku Cadang Mesin (Tabel Sparepart)</li>
                    <li>• Lemari C: Arsip Pelanggan (Tabel Customer)</li>
                  </ul>
                </div>
              </div>
              <div className="relative h-48 md:h-64 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden border border-slate-700 group">
                <div className="text-center">
                  <Database size={64} className="text-blue-500 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform"/>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">Sistem Manajemen Terpusat</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-700"/>

            {/* Relevansi Jurusan */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><LayoutGrid/> Penerapan di Jurusanmu</h3>
              <p className="text-slate-300 mb-6">Database bukan hanya untuk anak IT (RPL/TKJ). Semua jurusan menggunakannya:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold"><Car size={18}/> Teknik Otomotif</div>
                    <p className="text-xs text-slate-400">Database Inventaris Sparepart, Riwayat Servis Kendaraan (Berdasarkan Plat No).</p>
                 </div>
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-amber-500 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold"><Hammer size={18}/> Teknik Mesin/Las</div>
                    <p className="text-xs text-slate-400">Log Peminjaman Alat (Tool Crib), Stok Bahan Baku (Plat besi, Kawat las).</p>
                 </div>
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold"><Calculator size={18}/> Akuntansi</div>
                    <p className="text-xs text-slate-400">Jurnal Umum, Buku Besar, Data Aset Kantor, Penggajian Karyawan.</p>
                 </div>
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold"><Palette size={18}/> DKV & Grafika</div>
                    <p className="text-xs text-slate-400">Manajemen Aset Digital (Foto/Video), Stok Kertas/Tinta, Project Tracking.</p>
                 </div>
                 <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold"><Utensils size={18}/> Kuliner</div>
                    <p className="text-xs text-slate-400">Inventaris Bahan Basah/Kering (Expiry Date), Resep Standar (Recipe Database).</p>
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
            <div className="bg-rose-900/20 border border-rose-500/30 p-4 rounded-xl mb-6">
               <h3 className="text-rose-400 font-bold flex items-center gap-2 mb-2"><AlertTriangle size={20}/> Masalah "Barang Kembar"</h3>
               <p className="text-slate-300">
                 Di gudang, mungkin ada banyak "Kunci Pas 10mm". Bagaimana komputer membedakan Kunci Pas A (yang baru beli) dengan Kunci Pas B (yang sudah rusak)?
                 <br/><br/>
                 Tanpa identitas unik, sistem stok akan kacau.
               </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-amber-400">Solusi: Kode Unik (Primary Key)</h3>
                <p className="text-slate-300">
                  Setiap item harus punya "Kode Barang" atau ID yang tidak boleh sama.
                </p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> <strong>Otomotif:</strong> Nomor Rangka / Plat Nomor.</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> <strong>Akuntansi:</strong> Nomor Invoice / No. Bukti Transaksi.</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-emerald-500"/> <strong>Mesin:</strong> Kode Aset (misal: MS-001 untuk Mesin Bubut 1).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* KEGIATAN BELAJAR 3 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hubungan Data dengan AI</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-emerald-900/20 rounded-2xl border border-slate-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-4">GIGO: Garbage In, Garbage Out</h3>
            <p className="text-slate-300 mb-6 text-lg">
              AI di industri (seperti prediksi kerusakan mesin atau prediksi stok bahan baku) hanya bisa bekerja jika data yang kamu masukkan itu <strong className="text-emerald-400">RAPI</strong> dan <strong className="text-emerald-400">BENAR</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-5 rounded-xl border border-red-500/30">
                <div className="flex items-center gap-2 mb-2">
                   <Trash2 className="text-red-400"/>
                   <strong className="text-red-400">Catatan Lapangan Berantakan</strong>
                </div>
                <p className="text-sm text-slate-400 italic mb-2">"Oli tinggal dikit bos", "Beli terigu yang karungan", "Mesin bunyi tek tek".</p>
                <div className="mt-4 p-3 bg-red-900/20 rounded text-red-200 text-sm">
                   🤖 <strong>AI Bingung:</strong> "Berapa liter 'dikit'? Merk apa? Kapan harus beli lagi?"
                </div>
              </div>
              
              <div className="bg-slate-900/50 p-5 rounded-xl border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2">
                   <Database className="text-emerald-400"/>
                   <strong className="text-emerald-400">Data Terstruktur (Tabel)</strong>
                </div>
                <p className="text-sm text-slate-400 italic mb-2">
                  Item: Oli MPX2 | Stok: 2 Botol | Min Stok: 5 Botol
                </p>
                <div className="mt-4 p-3 bg-emerald-900/20 rounded text-emerald-200 text-sm">
                   🤖 <strong>AI Cerdas:</strong> "Stok Kritis! Segera pesan 10 botol Oli MPX2 sekarang."
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- SIMULATION COMPONENT (VOCATIONAL LAB) ---
const Simulation = () => {
  // State Types
  type JurusanType = 'mesin' | 'otomotif' | 'akuntansi' | 'dkv' | 'kuliner';
  
  const [selectedJurusan, setSelectedJurusan] = useState<JurusanType | null>(null);
  
  // Data for each Jurusan Scenario
  const scenarios: Record<JurusanType, {
    title: string,
    icon: React.ElementType,
    desc: string,
    unstructuredData: string[], // Raw notes
    placeholderExample: { id: string, item: string, cat: string, val: string, status: string },
    aiInsight: string
  }> = {
    mesin: {
      title: "Teknik Mesin & Pengelasan",
      icon: Hammer,
      desc: "Input data peminjaman alat (Tool Crib) agar tidak hilang.",
      unstructuredData: [
        "Siswa Budi meminjam Gerinda Tangan (GT-01) jam 8 pagi.",
        "Bor Duduk (BD-05) rusak, butuh perbaikan segera.",
        "Kawat Las 2kg diambil oleh Kelompok A untuk projek pagar."
      ],
      placeholderExample: { id: "GT-01", item: "Gerinda Tangan", cat: "Power Tools", val: "1", status: "Dipinjam" },
      aiInsight: "Frekuensi kerusakan Power Tools meningkat. Jadwalkan maintenance minggu depan."
    },
    otomotif: {
      title: "Teknik Kendaraan Ringan/Sepeda Motor",
      icon: Car,
      desc: "Catat riwayat servis agar tahu kapan ganti oli berikutnya.",
      unstructuredData: [
        "Vario B 1234 CD ganti Oli MPX2 dan Kampas Rem Depan.",
        "Avanza R 5678 AB tune up mesin dan ganti Filter Udara.",
        "Beat Street servis CVT, roller sudah peyang ganti baru."
      ],
      placeholderExample: { id: "B 1234 CD", item: "Ganti Oli MPX2", cat: "Servis Rutin", val: "65000", status: "Selesai" },
      aiInsight: "Stok Oli MPX2 menipis karena banyak servis Vario minggu ini. Order segera."
    },
    akuntansi: {
      title: "Akuntansi & Keuangan",
      icon: Calculator,
      desc: "Rapikan catatan pengeluaran kas kecil (Petty Cash).",
      unstructuredData: [
        "Beli Kertas A4 5 rim @45rb nota no INV-001 dari Toko Merah.",
        "Bayar listrik bengkel bulan ini 500rb bukti TF-099.",
        "Uang makan lembur teknisi 3 orang total 150rb."
      ],
      placeholderExample: { id: "INV-001", item: "Kertas A4 5 Rim", cat: "ATK", val: "225000", status: "Lunas" },
      aiInsight: "Pengeluaran ATK bulan ini melebihi budget 10%. Sarankan penghematan kertas."
    },
    dkv: {
      title: "DKV & Teknik Grafika",
      icon: Palette,
      desc: "Manajemen aset kamera dan tracking job cetakan.",
      unstructuredData: [
        "Kamera Canon 60D (CAM-02) dipinjam tim dokumentasi osis.",
        "Job cetak Banner 3x1 meter (J-105) bahan Flexi 280gr belum bayar.",
        "Lensa 50mm (LNS-01) jamur, perlu cleaning."
      ],
      placeholderExample: { id: "CAM-02", item: "Canon 60D Body", cat: "Kamera", val: "1", status: "Dipinjam" },
      aiInsight: "Kamera CAM-02 terlalu sering dipinjam. Pertimbangkan beli unit tambahan."
    },
    kuliner: {
      title: "Kuliner",
      icon: Utensils,
      desc: "Inventaris bahan baku dapur dan expired date.",
      unstructuredData: [
        "Tepung Terigu Segitiga 5kg (RM-01) masuk gudang exp 2026.",
        "Telur 2kg pecah 5 butir saat pengiriman.",
        "Susu UHT 10 liter (RM-05) stok menipis sisa 1 liter."
      ],
      placeholderExample: { id: "RM-01", item: "Tepung Segitiga", cat: "Dry Goods", val: "5 Kg", status: "Good" },
      aiInsight: "Peringatan: Susu UHT stok kritis. Menu milkshake mungkin tidak bisa dijual besok."
    }
  };

  // State for Form Input
  const [dbData, setDbData] = useState<any[]>([]);
  const [inputForm, setInputForm] = useState({ id: '', item: '', category: '', value: '', status: '' });
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [showInsight, setShowInsight] = useState(false);

  const handleSelectNote = (note: string) => {
    setSelectedNote(note);
    setError('');
    // Reset form to blank when picking new note to encourage manual extraction
    setInputForm({ id: '', item: '', category: '', value: '', status: '' }); 
  };

  const handleAddToDB = () => {
    // Basic Validation
    if (!inputForm.id || !inputForm.item) {
      setError("❌ Data tidak lengkap! ID/Kode dan Nama Item wajib diisi.");
      return;
    }
    if (dbData.some(d => d.id === inputForm.id)) {
      setError(`❌ Duplikasi ID: '${inputForm.id}' sudah ada di tabel.`);
      return;
    }

    const newItem = { ...inputForm };
    setDbData([...dbData, newItem]);
    
    // Clear selection
    setInputForm({ id: '', item: '', category: '', value: '', status: '' });
    setSelectedNote(null);
    setError('');
    
    if (dbData.length >= 2) setShowInsight(true); // Show AI insight after 3 items
  };

  const resetSimulation = () => {
    setSelectedJurusan(null);
    setDbData([]);
    setShowInsight(false);
    setError('');
  };

  return (
    <div className="pt-8 pb-12 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* HEADER */}
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
             <BrainCircuit className="text-blue-400" /> Lab Data Vokasi
           </h2>
           <p className="text-slate-400">Pilih program keahlianmu dan belajar merapikan data lapangan.</p>
        </div>

        {/* PHASE 1: JURUSAN SELECTION */}
        {!selectedJurusan && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 animate-[fadeIn_0.5s]">
            {(Object.keys(scenarios) as JurusanType[]).map((key) => {
              const item = scenarios[key];
              return (
                <button 
                  key={key}
                  onClick={() => setSelectedJurusan(key)}
                  className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-xl p-6 flex flex-col items-center gap-4 transition-all group"
                >
                  <div className="p-4 bg-slate-900 rounded-full group-hover:bg-blue-600 transition-colors text-blue-400 group-hover:text-white">
                    <item.icon size={32}/>
                  </div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white text-center">{item.title}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* PHASE 2: WORKSPACE */}
        {selectedJurusan && (
          <div className="animate-[fadeIn_0.5s]">
            <button onClick={resetSimulation} className="mb-4 text-xs text-slate-400 hover:text-white flex items-center gap-1">
              <ArrowRight className="rotate-180" size={12}/> Kembali pilih jurusan
            </button>

            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* COLUMN 1: UNSTRUCTURED DATA (CATATAN LAPANGAN) */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col h-[550px]">
                 <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                    <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
                      <FileText size={16} className="text-pink-400"/> Catatan Lapangan (Mentah)
                    </h3>
                 </div>
                 <div className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                    {scenarios[selectedJurusan].unstructuredData.map((note, idx) => (
                      <div 
                        key={idx}
                        onClick={() => handleSelectNote(note)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                          selectedNote === note 
                            ? 'bg-blue-600 border-blue-400 text-white shadow-lg' 
                            : 'bg-slate-700 border-slate-600 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        "{note}"
                      </div>
                    ))}
                 </div>
                 <div className="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                   <p className="text-xs text-slate-500 italic">
                     *Klik catatan di atas untuk mulai memproses data ke dalam sistem.
                   </p>
                 </div>
              </div>

              {/* COLUMN 2: PROCESSING (FORM) */}
              <div className="bg-slate-900 border border-blue-500/30 rounded-2xl p-6 flex flex-col h-[550px] shadow-2xl relative">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <ScanLine size={12}/> DATA ENTRY SYSTEM
                 </div>

                 <div className="mb-4 mt-2">
                   <p className="text-[10px] text-slate-400 mb-1 uppercase font-bold">Data Mentah Terpilih:</p>
                   <div className="bg-slate-950 p-3 rounded-lg border border-slate-700 min-h-[50px] flex items-center text-center justify-center">
                      {selectedNote 
                        ? <span className="text-blue-300 text-xs italic">"{selectedNote}"</span> 
                        : <span className="text-slate-600 text-xs italic">Pilih catatan di kolom kiri...</span>}
                   </div>
                 </div>

                 <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                    <div>
                        <label className="text-[10px] uppercase font-bold text-slate-400">ID / Kode (Primary Key)</label>
                        <div className="relative">
                          <Key size={12} className="absolute left-2 top-2.5 text-amber-500"/>
                          <input 
                            type="text" 
                            placeholder={`Contoh: ${scenarios[selectedJurusan].placeholderExample.id}`}
                            value={inputForm.id}
                            onChange={e => setInputForm({...inputForm, id: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded p-2 pl-6 text-sm text-white focus:border-blue-500 outline-none"
                          />
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] uppercase font-bold text-slate-400">Nama Item / Uraian</label>
                        <input 
                          type="text" 
                          placeholder={`Contoh: ${scenarios[selectedJurusan].placeholderExample.item}`}
                          value={inputForm.item}
                          onChange={e => setInputForm({...inputForm, item: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                       <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400">Kategori</label>
                          <input 
                            type="text" 
                            placeholder={`Ex: ${scenarios[selectedJurusan].placeholderExample.cat}`}
                            value={inputForm.category}
                            onChange={e => setInputForm({...inputForm, category: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                          />
                       </div>
                       <div>
                          <label className="text-[10px] uppercase font-bold text-slate-400">Qty / Nilai</label>
                          <input 
                            type="text" 
                            placeholder={`Ex: ${scenarios[selectedJurusan].placeholderExample.val}`}
                            value={inputForm.value}
                            onChange={e => setInputForm({...inputForm, value: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                          />
                       </div>
                    </div>

                    <div>
                        <label className="text-[10px] uppercase font-bold text-slate-400">Status / Keterangan</label>
                        <input 
                          type="text" 
                          placeholder={`Ex: ${scenarios[selectedJurusan].placeholderExample.status}`}
                          value={inputForm.status}
                          onChange={e => setInputForm({...inputForm, status: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
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
                    disabled={!selectedNote}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl mt-4 flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-emerald-900/20"
                 >
                   <Save size={16}/> Simpan ke Database
                 </button>
              </div>

              {/* COLUMN 3: STRUCTURED DATA & AI (OUTPUT) */}
              <div className="flex flex-col gap-4 h-[550px]">
                {/* Table */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex-1 overflow-hidden flex flex-col">
                   <div className="flex items-center justify-between mb-2">
                     <h3 className="font-bold text-slate-300 flex items-center gap-2 text-sm">
                        <Database size={16} className="text-emerald-400"/> Database Terstruktur
                     </h3>
                     <span className="text-[10px] bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">Ready for AI</span>
                   </div>
                   
                   <div className="overflow-auto flex-1 custom-scrollbar rounded-lg border border-slate-700 bg-slate-900/50">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-800 text-slate-400 sticky top-0">
                          <tr>
                            <th className="p-2 text-amber-500">ID (PK)</th>
                            <th className="p-2">Item</th>
                            <th className="p-2">Detail</th>
                            <th className="p-2 text-center">Act</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-300">
                          {dbData.length === 0 && (
                            <tr>
                              <td colSpan={4} className="p-4 text-center text-slate-600 italic">Belum ada data masuk...</td>
                            </tr>
                          )}
                          {dbData.map((row, idx) => (
                            <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                               <td className="p-2 font-mono text-amber-200 font-bold">{row.id}</td>
                               <td className="p-2">
                                 <div className="font-bold text-white">{row.item}</div>
                                 <div className="text-[10px] text-slate-500">{row.category}</div>
                               </td>
                               <td className="p-2">
                                 <div>{row.value}</div>
                                 <div className="text-[10px] text-blue-300">{row.status}</div>
                               </td>
                               <td className="p-2 text-center">
                                 <button onClick={() => setDbData(dbData.filter((_, i) => i !== idx))} className="text-slate-600 hover:text-red-400"><Trash2 size={12}/></button>
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
                   
                   <h3 className="font-bold text-white mb-2 flex items-center gap-2 text-sm">
                     <BrainCircuit size={16} className="text-pink-400 animate-pulse"/> AI Analysis Dashboard
                   </h3>

                   {showInsight ? (
                     <div className="relative z-10 space-y-2 animate-[fadeIn_0.5s]">
                        <div className="bg-black/20 p-2 rounded-lg backdrop-blur-sm flex justify-between items-center">
                           <span className="text-[10px] text-indigo-200 uppercase">Total Records</span>
                           <span className="text-lg font-bold text-white">{dbData.length}</span>
                        </div>
                        <div className="bg-black/20 p-3 rounded-lg backdrop-blur-sm flex items-start gap-2 h-20 overflow-y-auto custom-scrollbar">
                           <div className="w-1 h-full bg-emerald-500 rounded-full shrink-0"></div>
                           <div>
                             <p className="text-[10px] text-indigo-200 uppercase font-bold mb-1">AI Insight:</p>
                             <p className="text-xs text-white italic">"{scenarios[selectedJurusan].aiInsight}"</p>
                           </div>
                        </div>
                     </div>
                   ) : (
                     <div className="h-full flex flex-col items-center justify-center text-indigo-300 text-xs text-center opacity-70 pb-6">
                        <Database size={24} className="mb-2"/>
                        Masukkan minimal 2 data untuk melihat analisis AI...
                     </div>
                   )}
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    if (idx === QUIZ_DATA[currentQ].answer) {
      setScore(score + 20); // 5 questions, 20 points each
    }
    
    setTimeout(() => {
      if (currentQ < QUIZ_DATA.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="pt-8 pb-12 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        {!showResult ? (
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Pertanyaan {currentQ + 1}/{QUIZ_DATA.length}
              </span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                Kuis Analisis Data
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 leading-snug">
              {QUIZ_DATA[currentQ].question}
            </h3>

            <div className="space-y-3">
              {QUIZ_DATA[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left p-5 rounded-xl border font-medium transition-all ${
                    selected === idx 
                      ? idx === QUIZ_DATA[currentQ].answer 
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-red-500/20 border-red-500 text-red-300'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {opt}
                    {selected === idx && (
                      idx === QUIZ_DATA[currentQ].answer 
                        ? <CheckCircle className="w-5 h-5 text-emerald-500" />
                        : <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl text-center">
            <Award className="w-20 h-20 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-2">Kuis Selesai!</h3>
            <p className="text-slate-400 mb-8">Kamu telah menyelesaikan tantangan ini.</p>
            
            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
              {score}
              <span className="text-2xl text-slate-500 font-normal">/100</span>
            </div>

            <button 
              onClick={resetQuiz}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
            >
              Ulangi Kuis
            </button>
          </div>
        )}
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
    <div className="text-slate-200 font-sans selection:bg-blue-500 selection:text-white -mt-4">
      {/* Internal Navigation for this module */}
      <ModuleNav page={page} setPage={setPage} />
      
      <main className="animate-[fadeIn_0.5s]">
        {page === 'home' && <Hero setPage={setPage} />}
        {page === 'materi' && <Materials />}
        {page === 'simulasi' && <Simulation />}
        {page === 'kuis' && <Quiz />}
      </main>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .typing-effect {
          border-right: 2px solid #6366f1;
          animation: blink 0.75s step-end infinite;
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #6366f1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Materi1;