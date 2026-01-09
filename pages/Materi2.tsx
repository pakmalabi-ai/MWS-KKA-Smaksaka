import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Activity, 
  Share2, 
  Layers, 
  Cpu, 
  Brain, 
  Database, 
  Plus, 
  Link as LinkIcon, 
  CheckCircle, 
  Play, 
  Pause, 
  ChevronRight,
  ArrowRight,
  Layout,
  Users,
  ShoppingCart,
  GitMerge,
  MessageSquare,
  Search,
  Server,
  Key,
  Table
} from 'lucide-react';

// --- SUB-COMPONENTS ---

function HomeSection({ changeTab }: { changeTab: (t: string) => void }) {
  const [breathing, setBreathing] = useState(false);
  const [message, setMessage] = useState("Siap untuk belajar?");

  useEffect(() => {
    let interval: any;
    if (breathing) {
      setMessage("Tarik napas... (Inhale)");
      setTimeout(() => setMessage("Tahan sejenak... (Hold)"), 3000);
      setTimeout(() => setMessage("Hembuskan perlahan... (Exhale)"), 6000);
      interval = setInterval(() => {
        setMessage("Tarik napas... (Inhale)");
        setTimeout(() => setMessage("Tahan sejenak... (Hold)"), 3000);
        setTimeout(() => setMessage("Hembuskan perlahan... (Exhale)"), 6000);
      }, 9000);
    } else {
      setMessage("Tekan tombol untuk memulai mindfulness.");
    }
    return () => clearInterval(interval);
  }, [breathing]);

  return (
    <div className="max-w-5xl mx-auto pt-4 animate-[fadeIn_0.5s]">
      {/* Hero Section */}
      <div className="text-center mb-12 pt-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium border border-indigo-500/30">
           Topik: Merancang Struktur Data dengan ERD & Integrasi AI
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Arsitek Data</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Pernahkah kalian berpikir, bagaimana <strong>TikTok</strong> tahu video apa yang kalian sukai? 
          Atau bagaimana <strong>Shopee</strong> menyimpan jutaan barang tanpa tertukar? 
          Atau bagaimana <strong>Mobile Legends</strong> menyimpan data Skin, Rank, dan Hero milik jutaan pemain?
        </p>
        <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700 max-w-2xl mx-auto">
           <p className="text-indigo-300 font-medium">"Jawabannya bukan sihir, melainkan Basis Data (Database) yang terstruktur rapi."</p>
        </div>
      </div>

      {/* Data vs Info Card */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Database size={80}/></div>
            <h3 className="text-xl font-bold text-slate-400 mb-2 flex items-center gap-2"><Server size={20}/> 1.1 Data (Mentah)</h3>
            <p className="text-slate-500 italic mb-4">"Fakta mentah yang belum punya makna."</p>
            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-slate-400 space-y-1">
               <p>"Malabi"</p>
               <p>"X TJKT 1"</p>
               <p>"SMK N 1 Kaligondang"</p>
            </div>
         </div>
         <div className="bg-gradient-to-br from-indigo-900/40 to-slate-800 p-6 rounded-xl border border-indigo-500 shadow-lg shadow-indigo-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Activity size={80}/></div>
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><CheckCircle size={20} className="text-emerald-400"/> 1.2 Informasi (Matang)</h3>
            <p className="text-indigo-300 italic mb-4">"Data yang sudah diolah dan berguna."</p>
            <div className="bg-slate-900 p-3 rounded font-mono text-sm text-white">
               "Malabi adalah siswa kelas X TJKT 1 di SMK N 1 Kaligondang."
            </div>
         </div>
      </div>

      {/* Mindfulness Card */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 mb-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="text-emerald-400" />
              Zona Mindfull
            </h3>
            <p className="text-slate-400 mb-6">
              Sebelum merancang database yang rumit, mari tenangkan pikiran agar logika berjalan lancar.
              Teknik STOP (Stop, Take a breath, Observe, Proceed).
            </p>
            <button 
              onClick={() => setBreathing(!breathing)}
              className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                breathing 
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500 hover:bg-rose-500/30' 
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {breathing ? <><Pause size={18}/> Stop</> : <><Play size={18}/> Mulai Fokus</>}
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center">
             <div className="text-center">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all duration-[3000ms] mx-auto mb-4 ${breathing ? 'bg-emerald-500/20 scale-110' : 'bg-slate-700/50 scale-100'}`}>
                   <Brain size={48} className={`transition-colors duration-[3000ms] ${breathing ? 'text-emerald-400' : 'text-slate-500'}`} />
                </div>
                <p className="text-lg font-medium text-white animate-pulse">{message}</p>
             </div>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div onClick={() => changeTab('materi')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
            <BookOpen className="text-indigo-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Bab 2: Konsep ERD</h3>
          <p className="text-slate-400 text-sm">Entitas, Atribut, Relasi, dan Kardinalitas.</p>
        </div>

        <div onClick={() => changeTab('simulasi')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
            <Share2 className="text-purple-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Bab 4: Studi Kasus</h3>
          <p className="text-slate-400 text-sm">Simulasi Perpus, Toko, & Ekskul (M:N).</p>
        </div>

        <div onClick={() => changeTab('kuis')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
            <CheckCircle className="text-emerald-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Tantangan</h3>
          <p className="text-slate-400 text-sm">Uji pemahaman tentang struktur data.</p>
        </div>
      </div>
    </div>
  );
}

function MateriSection() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Apa itu Basis Data?",
      icon: <Database className="text-indigo-400" size={32} />,
      content: (
        <div className="space-y-6">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
             <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Layout size={20}/> Analogi: Lemari Arsip Raksasa</h4>
             <p className="text-slate-300 leading-relaxed mb-4">
               Bayangkan sebuah gudang. Jika kalian menumpuk kertas sembarangan, itu <strong>bukan database</strong>, itu sampah.
               <br/><br/>
               Database adalah saat kertas dimasukkan ke map, diberi label, dan disusun di rak sesuai abjad agar mudah dicari.
               Definisi teknis: Kumpulan data yang terorganisir, disimpan secara digital, dan dapat diakses dengan mudah.
             </p>
          </div>
        </div>
      )
    },
    {
      title: "Membedah ERD (Entity Relationship Diagram)",
      icon: <Share2 className="text-pink-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300"><strong>ERD</strong> adalah "Denah Rumah" sebelum database dibangun. Ada 3 komponen wajib:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-slate-900 p-4 rounded border border-slate-600 text-center hover:border-indigo-500 transition-colors">
              <div className="w-16 h-10 border-2 border-indigo-400 mx-auto mb-2 bg-indigo-900/20 flex items-center justify-center text-xs font-mono text-indigo-300">Persegi</div>
              <h4 className="font-bold text-white">2.1 Entitas</h4>
              <p className="text-xs text-indigo-300 font-bold mb-1">"KATA BENDA"</p>
              <p className="text-xs text-slate-400 mt-1">Objek yang disimpan datanya.<br/>Contoh: <strong>Siswa, Guru, Barang</strong>.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-600 text-center hover:border-emerald-500 transition-colors">
              <div className="w-16 h-10 border-2 border-emerald-400 rounded-[50%] mx-auto mb-2 bg-emerald-900/20 flex items-center justify-center text-xs font-mono text-emerald-300">Oval</div>
              <h4 className="font-bold text-white">2.2 Atribut</h4>
              <p className="text-xs text-emerald-300 font-bold mb-1">"KATA SIFAT"</p>
              <p className="text-xs text-slate-400 mt-1">Ciri-ciri detail.<br/>Contoh: <strong>Nama, Alamat, NIS</strong>.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-600 text-center hover:border-orange-500 transition-colors">
              <div className="w-10 h-10 border-2 border-orange-400 rotate-45 mx-auto mb-2 bg-orange-900/20 mt-1"></div>
              <h4 className="font-bold text-white mt-2">2.3 Relasi</h4>
              <p className="text-xs text-orange-300 font-bold mb-1">"KATA KERJA"</p>
              <p className="text-xs text-slate-400 mt-1">Hubungan antar entitas.<br/>Contoh: <strong>Meminjam, Membeli</strong>.</p>
            </div>
          </div>
          <div className="bg-indigo-900/20 p-3 rounded border border-indigo-500/30 text-sm text-indigo-200">
             <strong>Konsep Primary Key:</strong> Atribut unik pembeda. Bayangkan jika ada 5 siswa bernama "Budi", komputer membedakannya lewat <strong>NIS/NISN</strong>.
          </div>
        </div>
      )
    },
    {
      title: "Bab 3: Logika Hubungan (Kardinalitas)",
      icon: <GitMerge className="text-cyan-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Bagaimana aturan main hubungan antar data?</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
              <div className="text-2xl font-bold text-cyan-400 w-16 text-center">1 : 1</div>
              <div>
                <p className="font-bold text-white">One to One</p>
                <p className="text-sm text-slate-400">1 Sekolah hanya punya 1 Kepala Sekolah. 1 Kepala Sekolah hanya memimpin 1 Sekolah.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
              <div className="text-2xl font-bold text-cyan-400 w-16 text-center">1 : N</div>
              <div>
                <p className="font-bold text-white">One to Many</p>
                <p className="text-sm text-slate-400">1 Kelas berisi BANYAK Siswa. Tapi 1 Siswa hanya terdaftar di 1 Kelas.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border-2 border-cyan-500/50">
              <div className="text-2xl font-bold text-cyan-400 w-16 text-center">M : N</div>
              <div>
                <p className="font-bold text-white">Many to Many</p>
                <p className="text-sm text-slate-400">1 Siswa bisa ikut Banyak Ekskul. 1 Ekskul punya Banyak Anggota. <br/><span className="text-amber-400 text-xs font-bold">--> Butuh Tabel Penghubung!</span></p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Bab 5: Integrasi AI (Thought Partner)",
      icon: <Brain className="text-purple-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            Gunakan AI sebagai "Asisten Berpikir". Jangan minta AI mengerjakan 100%, tapi mintalah ide.
          </p>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2"><MessageSquare size={16} className="text-purple-400"/> Contoh Prompt Efektif:</h4>
            <div className="space-y-3">
               <div className="bg-slate-800 p-3 rounded text-sm text-indigo-300 font-mono border-l-4 border-indigo-500">
                  "Saya ingin membuat database Bengkel Motor. Selain Nama Pelanggan dan Plat Nomor, atribut apa lagi yang penting?"
               </div>
               <div className="bg-slate-800 p-3 rounded text-sm text-indigo-300 font-mono border-l-4 border-indigo-500">
                  "Buatkan saya data dummy (palsu) dalam format CSV untuk 5 siswa dengan kolom: NIS, Nama, dan Nilai Koding."
               </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pt-4 animate-[fadeIn_0.5s]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Materi Pembelajaran</h2>
        <div className="text-slate-400 text-sm">Halaman {slide + 1} dari {slides.length}</div>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-8 min-h-[450px] shadow-2xl flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
            <div className="p-3 bg-slate-900 rounded-lg">{slides[slide].icon}</div>
            <h3 className="text-2xl font-bold text-white">{slides[slide].title}</h3>
          </div>
          
          <div className="animate-[fadeIn_0.3s]">
            {slides[slide].content}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 pt-6 border-t border-slate-700/50 mt-auto">
          <button 
            disabled={slide === 0}
            onClick={() => setSlide(s => s - 1)}
            className="px-4 py-2 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white"
          >
            Kembali
          </button>
          <button 
            disabled={slide === slides.length - 1}
            onClick={() => setSlide(s => s + 1)}
            className="px-6 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            Lanjut <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function SimulationSection() {
  const [activeCase, setActiveCase] = useState<'library' | 'store' | 'ekskul' | 'ai'>('library');

  // LIBRARY STATE
  const [libStep, setLibStep] = useState(0);
  
  // EKSKUL STATE
  // Data from PDF Page 6 (Tabel 1 & Tabel 2)
  const [students] = useState([
    { id: '10501', name: 'Doni Tata', major: 'TKR' },
    { id: '10502', name: 'Eka Sandi', major: 'TKJ' }
  ]);
  const [ekskuls] = useState([
    { id: 'E-01', name: 'Basket', pembina: 'P. Budi' },
    { id: 'E-02', name: 'Rohis', pembina: 'P. Ahmad' },
    { id: 'E-03', name: 'Koding', pembina: 'P. Malabi' }
  ]);
  // Data for Table 3: PENDAFTARAN
  const [junctionData, setJunctionData] = useState<{reg: string, nis: string, kode: string}[]>([]);

  const handleJoinEkskul = (studentId: string, ekskulId: string) => {
    // Check if already joined
    if (junctionData.some(d => d.nis === studentId && d.kode === ekskulId)) return;

    const newReg = `REG-0${junctionData.length + 1}`;
    setJunctionData([...junctionData, { reg: newReg, nis: studentId, kode: ekskulId }]);
  };

  // AI SIM STATE
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleAskAI = () => {
    if (!prompt) return;
    setIsTyping(true);
    setAiResponse(null);
    
    setTimeout(() => {
      setIsTyping(false);
      // Responses based on "Contoh Prompt Efektif" in PDF Page 7
      if (prompt.toLowerCase().includes("atribut") || prompt.toLowerCase().includes("bengkel")) {
        setAiResponse("Untuk database Bengkel Motor, selain Nama dan Plat Nomor, sebaiknya tambahkan:\n1. Tgl_Servis\n2. Jenis_Kerusakan\n3. Biaya\n4. Mekanik_ID");
      } else if (prompt.toLowerCase().includes("dummy") || prompt.toLowerCase().includes("csv")) {
        setAiResponse("Berikut data dummy CSV:\nNIS,Nama,Nilai\n101,Andi,85\n102,Budi,90\n103,Citra,88\n104,Dewi,92\n105,Eko,80");
      } else if (prompt.toLowerCase().includes("relasi")) {
          setAiResponse("Relasi Dokter dan Pasien biasanya M:N (Many to Many). Satu dokter menangani banyak pasien, dan satu pasien bisa diperiksa oleh banyak dokter (spesialis berbeda).");
      } else {
        setAiResponse("Pertanyaan menarik! Ingat, mintalah AI untuk mengkritisi ide atau memberikan contoh data dummy.");
      }
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto pt-4 animate-[fadeIn_0.5s]">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Studio Perancangan Database (Bab 4)</h2>
        <p className="text-slate-400">Pilih studi kasus untuk mempraktikkan teori ERD.</p>
      </div>

      {/* Case Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          onClick={() => setActiveCase('library')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeCase === 'library' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
        >
          <BookOpen size={18}/> Kasus 1: Perpus (1:N)
        </button>
        <button 
          onClick={() => setActiveCase('store')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeCase === 'store' ? 'bg-orange-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
        >
          <ShoppingCart size={18}/> Kasus 2: Toko (1:N)
        </button>
        <button 
          onClick={() => setActiveCase('ekskul')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeCase === 'ekskul' ? 'bg-purple-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
        >
          <Users size={18}/> Kasus 3: Ekskul (M:N)
        </button>
        <button 
          onClick={() => setActiveCase('ai')}
          className={`px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2 ${activeCase === 'ai' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
        >
          <Brain size={18}/> Bab 5: AI Integrasi
        </button>
      </div>

      {/* CASE 1: LIBRARY */}
      {activeCase === 'library' && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 animate-[fadeIn_0.3s]">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><BookOpen className="text-indigo-400"/> Kasus 1: Peminjaman Buku</h3>
           <p className="text-slate-300 mb-6">
             Relasi: <strong>Anggota</strong> meminjam <strong>Buku</strong>. <br/>
             Kardinalitas: <strong>One to Many</strong> (Satu transaksi memuat satu anggota, tapi satu anggota bisa ada di banyak transaksi).
           </p>

           <div className="grid md:grid-cols-3 gap-6">
              {/* TABLE ANGGOTA */}
              <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-indigo-900/50 p-3 border-b border-indigo-500/30 font-bold text-indigo-300 text-center">
                  Tabel 1: ANGGOTA (Master)
                </div>
                <div className="p-4 space-y-2 text-sm text-slate-300">
                   <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-amber-400 font-mono">ID_Anggota (PK)</span>
                      <span>Nama</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="font-mono">LIB-001</span>
                      <span>Ahmad Dani</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="font-mono">LIB-002</span>
                      <span>Bunga Citra</span>
                   </div>
                </div>
              </div>

              {/* TABLE TRANSAKSI (RELASI) */}
              <div className="bg-slate-900 rounded-xl border-2 border-dashed border-slate-600 overflow-hidden flex flex-col justify-center items-center p-4">
                 <div className="text-slate-500 mb-2 font-bold text-center">Tabel 3: TRANSAKSI (Relasi)</div>
                 <ArrowRight className="text-slate-600 mb-2 rotate-90 md:rotate-0"/>
                 <div className="text-xs text-center text-slate-400 mb-2">
                   Mencatat "Siapa" meminjam "Apa".
                 </div>
                 {libStep === 0 && (
                   <button onClick={() => setLibStep(1)} className="px-4 py-2 bg-indigo-600 rounded text-white text-sm hover:bg-indigo-500">
                     Lihat Tabel Transaksi
                   </button>
                 )}
                 {libStep === 1 && (
                   <div className="w-full mt-2 bg-slate-800 rounded p-2 text-xs">
                      <table className="w-full text-left">
                        <thead className="text-slate-500"><tr><th>No_Trans</th><th>ID_Anggota(FK)</th><th>Kode_Buku(FK)</th></tr></thead>
                        <tbody className="text-slate-300">
                          <tr className="border-b border-slate-700"><td>TR-001</td><td className="text-indigo-400">LIB-001</td><td className="text-emerald-400">BK-A01</td></tr>
                          <tr><td>TR-002</td><td className="text-indigo-400">LIB-002</td><td className="text-emerald-400">BK-A01</td></tr>
                        </tbody>
                      </table>
                   </div>
                 )}
              </div>

              {/* TABLE BUKU */}
              <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
                <div className="bg-emerald-900/50 p-3 border-b border-emerald-500/30 font-bold text-emerald-300 text-center">
                  Tabel 2: BUKU (Master)
                </div>
                <div className="p-4 space-y-2 text-sm text-slate-300">
                   <div className="flex justify-between border-b border-slate-800 pb-1">
                      <span className="text-amber-400 font-mono">Kode_Buku (PK)</span>
                      <span>Judul</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="font-mono">BK-A01</span>
                      <span>Laskar Pelangi</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="font-mono">BK-B02</span>
                      <span>Belajar Python</span>
                   </div>
                </div>
              </div>
           </div>
           <div className="mt-4 text-xs text-center text-slate-400 italic">
             *Perhatikan: Kita tidak menulis nama "Ahmad Dani" di tabel transaksi, cukup kodenya "LIB-001". Inilah efisiensi database.
           </div>
        </div>
      )}

      {/* CASE 2: STORE */}
      {activeCase === 'store' && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 animate-[fadeIn_0.3s]">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><ShoppingCart className="text-orange-400"/> Kasus 2: Inventaris Toko (SMK Mart)</h3>
           <p className="text-slate-300 mb-6">
             Relasi: <strong>Supplier</strong> menyuplai <strong>Barang</strong>. (1:N)
           </p>

           <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-xl border border-slate-700 p-4">
                  <h4 className="font-bold text-orange-400 mb-2">Tabel 1: SUPPLIER</h4>
                  <table className="w-full text-xs text-left text-slate-300">
                      <thead className="text-slate-500 border-b border-slate-700"><tr><th className="py-2">Kode_Supp (PK)</th><th>Nama_PT</th></tr></thead>
                      <tbody>
                          <tr className="border-b border-slate-800"><td className="py-2 font-mono text-amber-400">SUP-01</td><td>PT. Indofood</td></tr>
                          <tr><td className="py-2 font-mono text-amber-400">SUP-02</td><td>CV. Alat Tulis</td></tr>
                      </tbody>
                  </table>
              </div>

              <div className="bg-slate-900 rounded-xl border border-slate-700 p-4 relative">
                  <div className="absolute -left-4 top-1/2 bg-slate-700 rounded-full p-1"><ArrowRight size={16} className="text-white"/></div>
                  <h4 className="font-bold text-emerald-400 mb-2">Tabel 2: BARANG (Inventaris)</h4>
                  <table className="w-full text-xs text-left text-slate-300">
                      <thead className="text-slate-500 border-b border-slate-700"><tr><th className="py-2">Kode_Brg (PK)</th><th>Nama</th><th>Kode_Supp (FK)</th></tr></thead>
                      <tbody>
                          <tr className="border-b border-slate-800"><td className="py-2 font-mono text-emerald-300">BRG-001</td><td>Indomie</td><td className="font-mono text-orange-400">SUP-01</td></tr>
                          <tr className="border-b border-slate-800"><td className="py-2 font-mono text-emerald-300">BRG-002</td><td>Buku Sidu</td><td className="font-mono text-orange-400">SUP-02</td></tr>
                          <tr><td className="py-2 font-mono text-emerald-300">BRG-003</td><td>Pop Mie</td><td className="font-mono text-orange-400">SUP-01</td></tr>
                      </tbody>
                  </table>
              </div>
           </div>
        </div>
      )}

      {/* CASE 3: EKSKUL (M:N) */}
      {activeCase === 'ekskul' && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 animate-[fadeIn_0.3s]">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Users className="text-purple-400"/> Kasus 3: Ekstrakurikuler (Many to Many)</h3>
           <p className="text-slate-300 mb-6">
             Masalah: Satu siswa ikut banyak ekskul. Satu ekskul punya banyak siswa. <br/>
             Solusi: Kita butuh <strong>Tabel Penghubung (Junction Table)</strong> bernama "PENDAFTARAN".
           </p>

           <div className="grid md:grid-cols-3 gap-6">
             {/* SISWA LIST */}
             <div className="space-y-4">
                <h4 className="font-bold text-indigo-400 text-center border-b border-indigo-500/30 pb-2">Tabel 1: SISWA</h4>
                {students.map(s => (
                  <div key={s.id} className="bg-slate-900 p-3 rounded-lg border border-slate-700">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="font-mono text-amber-400 text-xs">{s.id} (PK)</div>
                            <div className="font-bold text-white text-sm">{s.name}</div>
                        </div>
                        <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400">{s.major}</span>
                    </div>
                    <div className="mt-2 flex gap-1 flex-wrap">
                       {ekskuls.map(e => (
                         <button 
                           key={e.id}
                           onClick={() => handleJoinEkskul(s.id, e.id)}
                           className="text-[10px] px-2 py-1 bg-slate-800 hover:bg-purple-600 rounded border border-slate-600 transition-colors"
                         >
                           + {e.name}
                         </button>
                       ))}
                    </div>
                  </div>
                ))}
             </div>

             {/* JUNCTION TABLE VISUALIZER */}
             <div className="flex flex-col items-center justify-center">
                <div className="bg-purple-900/20 border-2 border-purple-500/50 p-4 rounded-xl w-full min-h-[200px]">
                   <h4 className="font-bold text-purple-300 text-center mb-2 text-sm">Tabel 3: PENDAFTARAN (Penghubung)</h4>
                   {junctionData.length === 0 ? (
                     <p className="text-slate-500 text-xs text-center italic mt-10">Klik tombol di kartu siswa untuk mendaftarkan ekskul...</p>
                   ) : (
                     <table className="w-full text-xs text-left">
                        <thead className="text-slate-400 border-b border-purple-500/30">
                          <tr><th>No_Daftar</th><th>NIS (FK)</th><th>ID_Ekskul (FK)</th></tr>
                        </thead>
                        <tbody className="text-slate-200">
                          {junctionData.map((d, i) => (
                            <tr key={i} className="border-b border-purple-500/10">
                              <td className="py-1 font-mono text-amber-400">{d.reg}</td>
                              <td className="py-1">{d.nis}</td>
                              <td className="py-1">{d.kode}</td>
                            </tr>
                          ))}
                        </tbody>
                     </table>
                   )}
                </div>
                <div className="text-[10px] text-slate-500 mt-2 text-center">
                    Analisis: Baris tabel di atas membuktikan Doni Tata (10501) bisa mengikuti Basket (E-01) dan Koding (E-03).
                </div>
             </div>

             {/* EKSKUL LIST */}
             <div className="space-y-4">
                <h4 className="font-bold text-emerald-400 text-center border-b border-emerald-500/30 pb-2">Tabel 2: EKSTRAKURIKULER</h4>
                {ekskuls.map(e => (
                  <div key={e.id} className="bg-slate-900 p-3 rounded-lg border border-slate-700 text-right">
                    <div className="font-mono text-amber-400 text-xs">{e.id} (PK)</div>
                    <div className="font-bold text-white text-sm">{e.name}</div>
                    <div className="text-[10px] text-slate-500">{e.pembina}</div>
                  </div>
                ))}
             </div>
           </div>
        </div>
      )}

      {/* CASE 4: AI ASSISTANT */}
      {activeCase === 'ai' && (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 animate-[fadeIn_0.3s]">
           <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Brain className="text-emerald-400"/> Integrasi AI (Bab 5)</h3>
           <p className="text-slate-300 mb-6">
             Simulasi menggunakan AI sebagai "Thought Partner". Coba prompt di bawah ini untuk melihat bagaimana AI membantu merancang database.
           </p>

           <div className="flex flex-col gap-4 max-w-2xl mx-auto">
             <div className="bg-slate-950 rounded-xl p-4 min-h-[150px] border border-slate-700 relative">
                {aiResponse ? (
                  <div className="text-emerald-300 text-sm whitespace-pre-line animate-[fadeIn_0.5s]">
                    <strong className="block mb-2 text-emerald-500">AI Assistant:</strong>
                    {aiResponse}
                  </div>
                ) : (
                  <div className="text-slate-600 text-sm italic text-center mt-10">
                    {isTyping ? "Sedang mengetik..." : "Menunggu prompt Anda..."}
                  </div>
                )}
             </div>

             <div className="flex gap-2">
               <input 
                 type="text" 
                 value={prompt}
                 onChange={(e) => setPrompt(e.target.value)}
                 onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                 placeholder="Tulis prompt di sini..."
                 className="flex-grow bg-slate-900 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
               />
               <button 
                 onClick={handleAskAI}
                 disabled={!prompt}
                 className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 Kirim
               </button>
             </div>
             
             <div className="flex flex-wrap gap-2 justify-center">
               <button onClick={() => setPrompt("Apa atribut untuk tabel Bengkel Motor?")} className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-slate-300">Ide Atribut</button>
               <button onClick={() => setPrompt("Buatkan data dummy CSV siswa")} className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-slate-300">Data Dummy</button>
               <button onClick={() => setPrompt("Jelaskan relasi Dokter dan Pasien")} className="text-xs bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-slate-300">Cari Relasi</button>
             </div>
           </div>
        </div>
      )}

    </div>
  );
}

function KuisSection() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [feedback, setFeedback] = useState<null | boolean>(null);

  const questions = [
    {
      q: "Simbol 'Belah Ketupat' pada ERD menggambarkan...",
      options: ["Entitas (Kata Benda)", "Atribut (Kata Sifat)", "Relasi (Kata Kerja)", "Primary Key"],
      ans: 2
    },
    {
      q: "Dalam kasus Perpustakaan, 'Ahmad Dani' tidak ditulis di Tabel Peminjaman, melainkan kodenya 'LIB-001'. Ini adalah contoh penggunaan...",
      options: ["Primary Key", "Foreign Key", "Atribut", "Entitas"],
      ans: 1
    },
    {
      q: "Relasi antara 'Kelas' dan 'Siswa' biasanya berbentuk...",
      options: ["One to One (1:1)", "One to Many (1:N)", "Many to Many (M:N)", "No Relation"],
      ans: 1
    },
    {
      q: "Apa nama tabel penghubung dalam kasus M:N Siswa dan Ekskul?",
      options: ["Tabel Siswa", "Tabel Ekskul", "Tabel Pendaftaran", "Tabel Guru"],
      ans: 2
    },
    {
      q: "Bagaimana cara efektif menggunakan AI untuk database?",
      options: ["Menyuruh AI mengerjakan 100%", "Meminta AI sebagai 'Thought Partner' untuk ide atribut", "Tidak perlu pakai AI", "Menyalin jawaban teman"],
      ans: 1
    }
  ];

  const handleAnswer = (idx: number) => {
    const isCorrect = idx === questions[currentQ].ans;
    setFeedback(isCorrect);
    
    if (isCorrect) setScore(score + 20);

    setTimeout(() => {
      setFeedback(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setStarted(false);
    setFinished(false);
    setScore(0);
    setCurrentQ(0);
  };

  if (!started) {
    return (
      <div className="max-w-xl mx-auto text-center pt-10 animate-[fadeIn_0.5s]">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10 shadow-2xl">
          <div className="w-20 h-20 bg-indigo-900/50 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle size={40} className="text-indigo-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Tantangan ERD</h2>
          <p className="text-slate-400 mb-8">Uji pemahamanmu tentang struktur data, relasi, dan integrasi AI. Ada 5 pertanyaan!</p>
          <button 
            onClick={() => setStarted(true)}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-indigo-500/30"
          >
            Mulai Kuis
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto text-center pt-10 animate-[fadeIn_0.5s]">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10 shadow-2xl relative overflow-hidden">
          {score === 100 && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
               <div className="w-96 h-96 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full blur-3xl"></div>
            </div>
          )}
          <h2 className="text-3xl font-bold text-white mb-2">Hasil Akhir</h2>
          <p className="text-slate-400 mb-6">Skor Kamu:</p>
          <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-300 to-indigo-600 mb-8">
            {score}
          </div>
          <div className="mb-8">
            {score === 100 ? (
              <span className="text-emerald-400 font-bold text-lg">Luar Biasa! Sempurna! 🎉</span>
            ) : score >= 80 ? (
              <span className="text-indigo-400 font-bold text-lg">Kerja Bagus! 👍</span>
            ) : (
              <span className="text-slate-400 text-lg">Jangan menyerah, coba lagi ya! 💪</span>
            )}
          </div>
          <button 
            onClick={resetQuiz}
            className="px-6 py-2 border border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
          >
            Main Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pt-4 animate-[fadeIn_0.5s]">
      <div className="flex justify-between items-center mb-6">
        <span className="text-slate-400 font-mono text-sm">Pertanyaan {currentQ + 1}/{questions.length}</span>
        <div className="text-indigo-400 font-bold">Skor: {score}</div>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-indigo-500 h-full transition-all duration-500" 
          style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-8 leading-relaxed">
          {questions[currentQ].q}
        </h3>

        <div className="grid gap-4">
          {questions[currentQ].options.map((opt, idx) => (
            <button
              key={idx}
              disabled={feedback !== null}
              onClick={() => handleAnswer(idx)}
              className={`text-left p-4 rounded-xl border transition-all ${
                feedback !== null
                  ? idx === questions[currentQ].ans 
                    ? 'bg-emerald-900/50 border-emerald-500 text-emerald-200'
                    : 'bg-slate-800 border-slate-700 opacity-50'
                  : 'bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-indigo-500 hover:text-indigo-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {feedback !== null && idx === questions[currentQ].ans && <CheckCircle size={20} className="text-emerald-400"/>}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- MAIN COMPONENT ---

const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => (
  <div className="sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg mb-6 -mx-4 px-4 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
        <span className="text-slate-200 font-bold text-sm tracking-tight hidden md:block">Modul 2: <span className="text-indigo-400">ERD & Relasi</span></span>
        <span className="text-slate-200 font-bold text-sm tracking-tight md:hidden">Modul 2</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {['Home', 'Materi', 'Simulasi', 'Kuis'].map((item) => (
          <button 
            key={item}
            onClick={() => setActiveTab(item.toLowerCase())}
            className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-all ${
              activeTab === item.toLowerCase() 
              ? 'bg-indigo-600 text-white' 
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

const Materi2: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-100 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
       <ModuleNav activeTab={activeTab} setActiveTab={setActiveTab} />
       <div className="animate-[fadeIn_0.5s]">
        {activeTab === 'home' && <HomeSection changeTab={setActiveTab} />}
        {activeTab === 'materi' && <MateriSection />}
        {activeTab === 'simulasi' && <SimulationSection />}
        {activeTab === 'kuis' && <KuisSection />}
       </div>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
       `}</style>
    </div>
  );
};

export default Materi2;