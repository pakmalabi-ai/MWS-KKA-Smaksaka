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
  GitMerge, 
  MessageSquare,
  Wrench, 
  Utensils, 
  Calculator, 
  Palette, 
  Car, 
  Hammer, 
  Factory 
} from 'lucide-react';

// --- SUB-COMPONENTS ---

function HomeSection({ changeTab }: { changeTab: (t: string) => void }) {
  const [breathing, setBreathing] = useState(false);
  const [message, setMessage] = useState("Siap merancang sistem?");

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
      setMessage("Tekan tombol untuk fokus sejenak.");
    }
    return () => clearInterval(interval);
  }, [breathing]);

  return (
    <div className="max-w-5xl mx-auto pt-4 animate-[fadeIn_0.5s]">
      {/* Hero Section */}
      <div className="text-center mb-12 pt-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium border border-indigo-500/30">
           Topik: Struktur Data Industri & Relasi
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Arsitek Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Dunia Kerja</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Di bengkel, di dapur hotel, atau di kantor akuntan, data yang berantakan adalah musuh. 
          Mari belajar merancang <strong>ERD (Entity Relationship Diagram)</strong> agar aplikasi buatanmu bisa membantu pekerjaan nyata.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Car className="text-indigo-400"/> Teknik</h3>
            <p className="text-slate-400 text-sm">Bagaimana Gojek mencocokkan jutaan Driver dengan Penumpang tanpa tertukar?</p>
         </div>
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Calculator className="text-emerald-400"/> Bisnis</h3>
            <p className="text-slate-400 text-sm">Bagaimana Kasir Toko tahu stok barang berkurang otomatis saat discan?</p>
         </div>
         <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2"><Palette className="text-purple-400"/> Kreatif</h3>
            <p className="text-slate-400 text-sm">Bagaimana Netflix menyusun ribuan film agar mudah dicari sesuai genre?</p>
         </div>
      </div>

      {/* Mindfulness Card */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 mb-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Activity className="text-emerald-400" />
              Zona Fokus (Mindful)
            </h3>
            <p className="text-slate-400 mb-6">
              Merancang database butuh logika yang jernih. Tenangkan pikiran sebelum masuk ke logika relasi data.
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
          <h3 className="text-xl font-bold mb-2 text-white">Konsep ERD</h3>
          <p className="text-slate-400 text-sm">Entitas, Atribut, dan Relasi dalam industri.</p>
        </div>

        <div onClick={() => changeTab('simulasi')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
            <Share2 className="text-purple-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Studio Perancangan</h3>
          <p className="text-slate-400 text-sm">Simulasi merancang DB sesuai Jurusanmu.</p>
        </div>

        <div onClick={() => changeTab('kuis')} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 cursor-pointer transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-emerald-900/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
            <CheckCircle className="text-emerald-400 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Tantangan</h3>
          <p className="text-slate-400 text-sm">Uji pemahaman logika data.</p>
        </div>
      </div>
    </div>
  );
}

function MateriSection() {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: "Dari Catatan Kertas ke Database",
      icon: <Database className="text-indigo-400" size={32} />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-300 leading-relaxed mb-4">
             Di tempat PKL (Praktik Kerja Lapangan), kalian mungkin melihat tumpukan kertas formulir atau buku besar.
             Database bertugas mengubah tumpukan itu menjadi sistem digital yang rapi.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-900 p-4 rounded-xl border border-slate-600">
               <h4 className="text-amber-400 font-bold mb-2 flex items-center gap-2"><Hammer size={16}/> Contoh Bengkel</h4>
               <p className="text-xs text-slate-400 mb-2">Buku Servis Manual:</p>
               <div className="bg-white text-slate-900 p-2 rounded text-[10px] font-mono mb-2 opacity-80 rotate-1">
                 Tgl: 12/01, Nopol: R1234, Rusak: Rem, Mekanik: Budi
               </div>
               <ArrowRight className="mx-auto text-slate-500 my-1 rotate-90 md:rotate-0"/>
               <div className="bg-indigo-900/50 text-indigo-200 p-2 rounded text-[10px] font-mono border border-indigo-500/50">
                 Tabel: [ID_Servis, Plat_No, Keluhan, ID_Mekanik]
               </div>
             </div>
             
             <div className="bg-slate-900 p-4 rounded-xl border border-slate-600">
               <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2"><Utensils size={16}/> Contoh Restoran</h4>
               <p className="text-xs text-slate-400 mb-2">Bon Pesanan:</p>
               <div className="bg-white text-slate-900 p-2 rounded text-[10px] font-mono mb-2 opacity-80 -rotate-1">
                 Meja 5: 2 Nasi Goreng, 1 Es Teh
               </div>
               <ArrowRight className="mx-auto text-slate-500 my-1 rotate-90 md:rotate-0"/>
               <div className="bg-emerald-900/50 text-emerald-200 p-2 rounded text-[10px] font-mono border border-emerald-500/50">
                 Tabel: [No_Order, No_Meja, Menu_Item, Qty]
               </div>
             </div>
          </div>
        </div>
      )
    },
    {
      title: "Anatomi ERD (Peta Data)",
      icon: <Share2 className="text-pink-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300"><strong>ERD (Entity Relationship Diagram)</strong> adalah denah arsitek sebelum membangun aplikasi.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-slate-900 p-4 rounded border border-slate-600 text-center hover:border-indigo-500 transition-colors">
              <div className="w-16 h-10 border-2 border-indigo-400 mx-auto mb-2 bg-indigo-900/20 flex items-center justify-center text-xs font-mono text-indigo-300">Entitas</div>
              <h4 className="font-bold text-white">Objek Utama</h4>
              <p className="text-xs text-slate-400 mt-1">Benda/Orang yang punya data.<br/>Cth: <strong>Mobil, Pelanggan, Barang</strong>.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-600 text-center hover:border-emerald-500 transition-colors">
              <div className="w-16 h-10 border-2 border-emerald-400 rounded-[50%] mx-auto mb-2 bg-emerald-900/20 flex items-center justify-center text-xs font-mono text-emerald-300">Atribut</div>
              <h4 className="font-bold text-white">Detail Data</h4>
              <p className="text-xs text-slate-400 mt-1">Ciri-ciri objek.<br/>Cth: <strong>Plat Nomor, Warna, Harga</strong>.</p>
            </div>
            <div className="bg-slate-900 p-4 rounded border border-slate-600 text-center hover:border-orange-500 transition-colors">
              <div className="w-10 h-10 border-2 border-orange-400 rotate-45 mx-auto mb-2 bg-orange-900/20 mt-1"></div>
              <h4 className="font-bold text-white mt-2">Relasi</h4>
              <p className="text-xs text-slate-400 mt-1">Hubungan antar objek.<br/>Cth: <strong>Memperbaiki, Membeli</strong>.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Logika Hubungan (Kardinalitas)",
      icon: <GitMerge className="text-cyan-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">Bagaimana data saling terhubung di dunia nyata?</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
              <div className="text-2xl font-bold text-cyan-400 w-12 text-center">1:1</div>
              <div>
                <p className="font-bold text-white">One to One (Satu lawan Satu)</p>
                <p className="text-sm text-slate-400">1 Kepala Bengkel memimpin 1 Bengkel.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
              <div className="text-2xl font-bold text-cyan-400 w-12 text-center">1:N</div>
              <div>
                <p className="font-bold text-white">One to Many (Satu lawan Banyak)</p>
                <p className="text-sm text-slate-400">1 Pelanggan bisa punya BANYAK Faktur belanja (Hari ini beli, besok beli lagi).</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg border-2 border-cyan-500/50">
              <div className="text-2xl font-bold text-cyan-400 w-12 text-center">M:N</div>
              <div>
                <p className="font-bold text-white">Many to Many (Banyak lawan Banyak)</p>
                <p className="text-sm text-slate-400">
                  1 Resep butuh BANYAK Bahan (Tepung, Telur).<br/>
                  1 Bahan (Telur) dipakai di BANYAK Resep (Kue, Dadar).
                  <br/><span className="text-amber-400 text-xs">(Butuh tabel penghubung!)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Integrasi AI dalam Data",
      icon: <Brain className="text-purple-400" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-300">
            Mengapa struktur data itu penting untuk AI?
          </p>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
            <div className="flex gap-4 items-start">
               <div className="bg-indigo-600 p-2 rounded text-white"><Cpu size={20}/></div>
               <div>
                 <h4 className="font-bold text-white text-sm">AI Prediksi (Predictive AI)</h4>
                 <p className="text-xs text-slate-400 mt-1">
                   Jika data "Riwayat Servis" (1:N) tersusun rapi, AI bisa memprediksi: 
                   <br/><span className="text-emerald-400 italic">"Pelanggan Budi kemungkinan besar akan ganti oli bulan depan."</span>
                 </p>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
            <div className="flex gap-4 items-start">
               <div className="bg-purple-600 p-2 rounded text-white"><MessageSquare size={20}/></div>
               <div>
                 <h4 className="font-bold text-white text-sm">AI Chatbot (Generative AI)</h4>
                 <p className="text-xs text-slate-400 mt-1">
                   Jika data "Resep & Bahan" (M:N) rapi, Chatbot bisa menjawab:
                   <br/><span className="text-emerald-400 italic">"Saya punya sisa Telur dan Tepung, bisa masak apa?" -&gt; AI mencari relasi resep yang cocok.</span>
                 </p>
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
  const [jurusan, setJurusan] = useState<string | null>(null);
  const [step, setStep] = useState(0); // 0: Select, 1: Define Relation, 2: Result
  const [selectedRelation, setSelectedRelation] = useState<string | null>(null);

  // Vocational Scenarios
  const scenarios: Record<string, any> = {
    teknik: {
      label: "Teknik (Mesin/Otomotif/Las)",
      icon: <Wrench size={24}/>,
      entityA: { name: "Kendaraan", attr: ["Plat No", "Merk", "Tahun"] },
      entityB: { name: "Riwayat Servis", attr: ["Tgl Servis", "Jenis Kerusakan", "Biaya"] },
      correctRel: "1:N",
      explanation: "Satu Kendaraan bisa melakukan servis berulang kali (Banyak Riwayat). Tapi satu lembar riwayat servis hanya milik satu kendaraan.",
      aiBenefit: "AI Maintenance: Memprediksi kerusakan berikutnya berdasarkan riwayat servis sebelumnya."
    },
    bisnis: {
      label: "Bisnis (Akuntansi/MPLB)",
      icon: <Calculator size={24}/>,
      entityA: { name: "Pelanggan", attr: ["ID Pelanggan", "Nama", "Alamat"] },
      entityB: { name: "Faktur Penjualan", attr: ["No Faktur", "Tanggal", "Total"] },
      correctRel: "1:N",
      explanation: "Satu Pelanggan bisa memiliki banyak Faktur (sering belanja). Tapi satu Faktur fisik hanya ditujukan untuk satu Pelanggan.",
      aiBenefit: "AI Customer Segmentation: Mengelompokkan pelanggan setia berdasarkan frekuensi belanja."
    },
    kuliner: {
      label: "Kuliner & Perhotelan",
      icon: <Utensils size={24}/>,
      entityA: { name: "Resep Masakan", attr: ["Nama Menu", "Cara Masak", "Harga Jual"] },
      entityB: { name: "Bahan Baku", attr: ["Nama Bahan", "Stok", "Satuan"] },
      correctRel: "M:N",
      explanation: "Satu Resep butuh Banyak Bahan. Satu jenis Bahan (misal: Telur) dipakai di Banyak Resep. Butuh tabel penghubung 'Detail Resep'.",
      aiBenefit: "AI Inventory: Otomatis menghitung sisa stok bahan berdasarkan menu yang terjual hari ini."
    },
    kreatif: {
      label: "Kreatif (DKV/Grafika)",
      icon: <Palette size={24}/>,
      entityA: { name: "Desainer", attr: ["ID Desainer", "Nama", "Spesialisasi"] },
      entityB: { name: "Proyek Klien", attr: ["Nama Proyek", "Deadline", "Budget"] },
      correctRel: "M:N",
      explanation: "Satu Desainer bisa mengerjakan Banyak Proyek. Satu Proyek besar bisa dikerjakan Banyak Desainer (Tim). Butuh tabel 'Tim Proyek'.",
      aiBenefit: "AI Project Matching: Menyarankan desainer yang paling cocok untuk proyek baru berdasarkan riwayat proyek sebelumnya."
    }
  };

  const handleSelect = (key: string) => {
    setJurusan(key);
    setStep(1);
    setSelectedRelation(null);
  };

  const checkAnswer = () => {
    if (selectedRelation === scenarios[jurusan!].correctRel) {
      setStep(2);
    } else {
      alert("Kurang tepat. Coba bayangkan hubungan datanya di dunia nyata lagi.");
    }
  };

  const reset = () => {
    setJurusan(null);
    setStep(0);
    setSelectedRelation(null);
  };

  return (
    <div className="max-w-5xl mx-auto pt-4 animate-[fadeIn_0.5s]">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Studio Perancangan Data</h2>
        <p className="text-slate-400">Pilih rumpun jurusanmu dan rancang struktur datanya.</p>
      </div>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden min-h-[500px] flex flex-col shadow-2xl">
        
        {/* STEP 0: SELECT JURUSAN */}
        {step === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <h3 className="text-xl font-bold text-white mb-8">Pilih Bidang Keahlian:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {Object.entries(scenarios).map(([key, val]) => (
                <button 
                  key={key}
                  onClick={() => handleSelect(key)}
                  className="p-6 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-indigo-500 transition-all flex flex-col items-center gap-3 group"
                >
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-indigo-600 transition-colors text-white">
                    {val.icon}
                  </div>
                  <span className="font-bold text-slate-300 group-hover:text-white">{val.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: INTERACTION */}
        {step === 1 && jurusan && (
          <div className="flex-1 p-8 flex flex-col">
            <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {scenarios[jurusan].icon} {scenarios[jurusan].label}
              </h3>
              <button onClick={reset} className="text-sm text-slate-400 hover:text-white">Ganti Jurusan</button>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              {/* Entity A */}
              <div className="w-64 bg-slate-900 border-2 border-indigo-500/50 rounded-xl p-4">
                <div className="bg-indigo-900/50 text-indigo-300 font-bold text-center py-2 rounded mb-3 border border-indigo-500/30">
                  {scenarios[jurusan].entityA.name}
                </div>
                <ul className="text-sm text-slate-400 space-y-1">
                  {scenarios[jurusan].entityA.attr.map((a: string, i: number) => (
                    <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>{a}</li>
                  ))}
                </ul>
              </div>

              {/* Connection Lines (Visual) */}
              <div className="flex flex-col items-center gap-2">
                <div className="h-1 w-20 bg-slate-600 relative">
                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500">Berhubungan dengan</div>
                </div>
              </div>

              {/* Entity B */}
              <div className="w-64 bg-slate-900 border-2 border-emerald-500/50 rounded-xl p-4">
                <div className="bg-emerald-900/50 text-emerald-300 font-bold text-center py-2 rounded mb-3 border border-emerald-500/30">
                  {scenarios[jurusan].entityB.name}
                </div>
                <ul className="text-sm text-slate-400 space-y-1">
                  {scenarios[jurusan].entityB.attr.map((a: string, i: number) => (
                    <li key={i} className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 text-center">
              <p className="text-white mb-4 font-medium">Apa jenis relasi yang tepat antara kedua tabel di atas?</p>
              <div className="flex justify-center gap-4 mb-6">
                {['1:1', '1:N', 'M:N'].map((rel) => (
                  <button
                    key={rel}
                    onClick={() => setSelectedRelation(rel)}
                    className={`px-6 py-3 rounded-lg font-bold border-2 transition-all ${
                      selectedRelation === rel 
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' 
                      : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-400'
                    }`}
                  >
                    {rel}
                  </button>
                ))}
              </div>
              <button 
                onClick={checkAnswer}
                disabled={!selectedRelation}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Cek Jawaban
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: RESULT */}
        {step === 2 && jurusan && (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center animate-[fadeIn_0.5s]">
            <div className="w-20 h-20 bg-emerald-900/50 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-500/30">
              <CheckCircle size={40} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Desain Database Benar!</h3>
            <p className="text-xl text-indigo-400 font-bold mb-6">Relasi: {scenarios[jurusan].correctRel}</p>
            
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl text-left">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
                <h4 className="text-slate-300 font-bold mb-2 text-sm uppercase">Penjelasan Logika</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{scenarios[jurusan].explanation}</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 p-6 rounded-xl border border-indigo-500/30">
                <h4 className="text-white font-bold mb-2 text-sm uppercase flex items-center gap-2"><Brain size={16}/> Manfaat untuk AI</h4>
                <p className="text-indigo-200 text-sm leading-relaxed">{scenarios[jurusan].aiBenefit}</p>
              </div>
            </div>

            <button onClick={reset} className="mt-8 px-6 py-2 border border-slate-600 text-slate-400 rounded-full hover:bg-slate-800 hover:text-white transition-colors">
              Coba Jurusan Lain
            </button>
          </div>
        )}

      </div>
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
      q: "Dalam sistem bengkel, satu Pelanggan bisa melakukan banyak kali Servis. Apa jenis relasinya?",
      options: ["One to One (1:1)", "One to Many (1:N)", "Many to Many (M:N)", "No Relation"],
      ans: 1
    },
    {
      q: "Jika relasi adalah Many to Many (seperti Resep dan Bahan), apa yang wajib kita buat?",
      options: ["Tabel Penghubung (Junction Table)", "Tabel Cadangan", "Menghapus salah satu tabel", "Membuat folder baru"],
      ans: 0
    },
    {
      q: "Simbol 'Persegi Panjang' pada ERD menggambarkan...",
      options: ["Atribut (Sifat)", "Entitas (Objek)", "Relasi (Hubungan)", "Proses"],
      ans: 1
    },
    {
      q: "Apa manfaat struktur data yang rapi bagi Artificial Intelligence (AI)?",
      options: ["Agar AI tidak perlu bekerja", "Agar AI bisa memprediksi pola dengan akurat", "Agar database terlihat indah", "Tidak ada manfaatnya"],
      ans: 1
    },
    {
      q: "Data mentah di kertas (formulir) harus diubah menjadi tabel digital agar...",
      options: ["Bisa dibuang", "Bisa diolah menjadi informasi berguna", "Memenuhi lemari arsip", "Susah dicari"],
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
          <p className="text-slate-400 mb-8">Uji pemahamanmu tentang struktur data industri. Ada 5 pertanyaan.</p>
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
              <span className="text-emerald-400 font-bold text-lg">Sempurna! Calon Arsitek Data! 🎉</span>
            ) : score >= 80 ? (
              <span className="text-indigo-400 font-bold text-lg">Hebat! Sudah Paham Konsep. 👍</span>
            ) : (
              <span className="text-slate-400 text-lg">Coba pelajari lagi bagian Relasi ya. 💪</span>
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