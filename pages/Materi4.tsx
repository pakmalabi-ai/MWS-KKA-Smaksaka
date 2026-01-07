import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Wind, 
  Bot, 
  Eye, 
  Cpu, 
  Trash2, 
  CheckCircle, 
  ChevronRight, 
  ArrowRight,
  Activity,
  Grid,
  Layers,
  AlertTriangle,
  ScanFace,
  Database, 
  RefreshCw, 
  Hammer, 
  Car, 
  Utensils, 
  Calculator, 
  Palette, 
  ScanLine, 
  Factory, 
  Camera 
} from 'lucide-react';

// --- DATA & CONSTANTS ---

const QUIZ_DATA = [
    {
        q: "Apa perbedaan utama Pemrograman Tradisional dengan Machine Learning?",
        options: [
            "Pemrograman Tradisional berbasis data, ML berbasis aturan.",
            "Pemrograman Tradisional manusianya menulis aturan (Resep), ML mesinnya mencari pola dari data.",
            "Tidak ada bedanya, keduanya sama-sama koding.",
            "ML tidak membutuhkan komputer."
        ],
        correct: 1
    },
    {
        q: "Bagi komputer, sebuah gambar sebenarnya adalah...",
        options: [
            "Sebuah kanvas lukisan.",
            "Susunan angka-angka dalam tabel raksasa (Grid/Matrix Pixel).",
            "Kumpulan emosi dan perasaan.",
            "Hanya warna hitam dan putih."
        ],
        correct: 1
    },
    {
        q: "Dalam dunia industri (misal: Pabrik Otomotif), Computer Vision digunakan untuk...",
        options: [
            "Membuat mobil terbang.",
            "Mendeteksi cacat/goresan pada cat mobil secara otomatis (Quality Control).",
            "Mengganti oli mesin.",
            "Menghitung gaji karyawan."
        ],
        correct: 1
    },
    {
        q: "Istilah 'Garbage In, Garbage Out' dalam melatih AI berarti...",
        options: [
            "AI bisa membersihkan sampah digital.",
            "Jika data latih jelek/sedikit, maka hasil deteksi AI juga akan jelek/salah.",
            "Komputer harus dibuang jika sudah tua.",
            "Input data tidak penting dalam ML."
        ],
        correct: 1
    }
];

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 4</h1>
          <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Computer Vision</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'home', label: 'Beranda', icon: Activity },
          { id: 'materi', label: 'Materi', icon: BookOpen },
          { id: 'simulasi', label: 'Lab Pixel', icon: Grid },
          { id: 'vocational', label: 'AI Inspektor', icon: Factory },
          { id: 'kuis', label: 'Kuis', icon: CheckCircle },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <item.icon size={14} className="hidden sm:block" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  </header>
);

// 1. HOME SECTION
const HomeSection = ({ setPage, openMindfulness }: { setPage: (p: string) => void, openMindfulness: () => void }) => (
  <section className="animate-[fadeIn_0.5s]">
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 min-h-[60vh]">
        <div className="md:w-1/2">
            <span className="bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">Informatika SMK Kelas X</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-4 leading-tight">Mata Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Dunia Industri</span></h2>
            <div className="text-slate-400 mb-8 text-lg leading-relaxed space-y-4">
                <p>
                  Bagaimana mesin sortir di pabrik tahu mana buah yang busuk? Bagaimana kamera tilang elektronik membaca plat nomor yang ngebut?
                </p>
                <p className="text-sm border-l-4 border-indigo-500 pl-4 italic">
                  Itu adalah <strong>Computer Vision</strong>. Mari belajar melatih komputer untuk "melihat" layaknya seorang ahli di jurusanmu.
                </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <button onClick={() => setPage('materi')} className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-500 transition flex items-center font-semibold">
                    <BookOpen size={18} className="mr-2"/> Pelajari Konsep
                </button>
                <button onClick={openMindfulness} className="bg-slate-800 border border-slate-700 text-indigo-400 px-6 py-3 rounded-xl hover:bg-slate-700 transition flex items-center font-semibold">
                    <Wind size={18} className="mr-2"/> Mindfulness
                </button>
            </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl relative z-10 border border-slate-700/50 text-center">
                    <ScanFace size={80} className="mx-auto text-indigo-400 mb-6 animate-pulse"/>
                    <h3 className="font-bold text-xl mb-2 text-white">Computer Vision</h3>
                    <p className="text-slate-400 text-sm">Teknologi yang memungkinkan mesin melihat, mengenali, dan menganalisis gambar atau video.</p>
                </div>
            </div>
        </div>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = ({ setPage }: { setPage: (p: string) => void }) => {
  const [activeTab, setActiveTab] = useState('konsep');

  return (
    <section className="animate-[fadeIn_0.5s] max-w-5xl mx-auto py-8">
      
      {/* Tabs Materi */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button onClick={() => setActiveTab('konsep')} className={`px-4 py-2 rounded-full text-sm font-bold transition ${activeTab === 'konsep' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>1. Konsep Dasar</button>
        <button onClick={() => setActiveTab('pixel')} className={`px-4 py-2 rounded-full text-sm font-bold transition ${activeTab === 'pixel' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>2. Matrix Pixel</button>
        <button onClick={() => setActiveTab('jurusan')} className={`px-4 py-2 rounded-full text-sm font-bold transition ${activeTab === 'jurusan' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}>3. Penerapan di Jurusan</button>
      </div>

      {activeTab === 'konsep' && (
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400"><Bot size={24}/></div>
                <h3 className="text-2xl font-bold text-white">Koding Biasa vs Machine Learning</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-400 mb-2">Pemrograman Tradisional</h4>
                    <p className="text-slate-300 text-sm mb-4">Manusia menulis aturan (Rules) secara detail.</p>
                    <div className="bg-black/30 p-3 rounded text-xs font-mono text-slate-400">
                        "Jika pixel tengah berwarna merah DAN bentuk bulat -&gt; MAKA Apel."
                    </div>
                    <p className="mt-3 text-xs text-slate-500">Kelemahan: Susah mendeteksi Apel yang warnanya agak hijau atau tertutup daun.</p>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-emerald-500">
                    <h4 className="font-bold text-emerald-400 mb-2">Machine Learning (ML)</h4>
                    <p className="text-slate-300 text-sm mb-4">Manusia memberikan CONTOH GAMBAR. Mesin mencari pola sendiri.</p>
                    <div className="bg-black/30 p-3 rounded text-xs font-mono text-slate-400">
                        Input: 1000 Foto Apel & 1000 Foto Jeruk.<br/>
                        Mesin: "Oke, saya sudah paham beda tekstur kulitnya."
                    </div>
                    <p className="mt-3 text-xs text-slate-500">Kelebihan: Bisa mengenali Apel dalam berbagai kondisi cahaya dan posisi.</p>
                </div>
            </div>
        </div>
      )}

      {activeTab === 'pixel' && (
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400"><Eye size={24}/></div>
                <h3 className="text-2xl font-bold text-white">Bagaimana Mesin "Melihat"?</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        Komputer tidak punya mata. Ia "melihat" gambar sebagai sekumpulan angka dalam tabel raksasa (Matrix).
                    </p>
                    <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                        <li><strong className="text-white">Pixel:</strong> Kotak-kotak kecil penyusun gambar.</li>
                        <li><strong className="text-white">Nilai Warna:</strong> 0 (Hitam) sampai 255 (Putih).</li>
                        <li><strong className="text-white">RGB:</strong> Red, Green, Blue channel untuk gambar berwarna.</li>
                    </ul>
                    <div className="mt-6">
                        <button onClick={() => setPage('simulasi')} className="text-sm bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition flex items-center gap-2">
                            Coba Simulasi Pixel Vision <ArrowRight size={14}/>
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-slate-900 rounded-xl flex items-center justify-center p-4 border border-slate-600 relative overflow-hidden group">
                    <div className="grid grid-cols-5 gap-1 w-full max-w-[200px]">
                        {[0,0,1,0,0, 0,1,1,0,0, 0,0,1,0,0, 0,0,1,0,0, 0,1,1,1,0].map((v, i) => (
                            <div key={i} className={`aspect-square rounded-sm flex items-center justify-center text-[10px] font-mono text-slate-900 transition-all ${v ? 'bg-white' : 'bg-slate-800 text-slate-700'}`}>
                                {v}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      )}

      {activeTab === 'jurusan' && (
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Computer Vision di Jurusanmu</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                 <div className="flex items-center gap-2 mb-3 text-blue-400 font-bold"><Hammer size={20}/> Teknik Mesin & Las</div>
                 <p className="text-xs text-slate-300 mb-2"><strong>Smart Welding Inspection:</strong></p>
                 <p className="text-xs text-slate-400">Kamera AI mendeteksi keretakan mikro atau gelembung udara pada hasil las yang tidak terlihat mata telanjang.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-red-500 transition-colors">
                 <div className="flex items-center gap-2 mb-3 text-red-400 font-bold"><Car size={20}/> Otomotif (TKR/TSM)</div>
                 <p className="text-xs text-slate-300 mb-2"><strong>Quality Control Cat & Body:</strong></p>
                 <p className="text-xs text-slate-400">Robot kamera mendeteksi goresan halus pada cat mobil baru sebelum keluar dari pabrik.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors">
                 <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold"><Calculator size={20}/> Akuntansi</div>
                 <p className="text-xs text-slate-300 mb-2"><strong>OCR Otomatis:</strong></p>
                 <p className="text-xs text-slate-400">Scan ribuan struk belanja/faktur, AI otomatis membaca nominal uang dan memasukkannya ke Excel/MYOB.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
                 <div className="flex items-center gap-2 mb-3 text-purple-400 font-bold"><Palette size={20}/> DKV & Grafika</div>
                 <p className="text-xs text-slate-300 mb-2"><strong>Auto-Tagging & Restoration:</strong></p>
                 <p className="text-xs text-slate-400">AI memperbaiki foto lama yang rusak, atau otomatis memberi label (tag) pada ribuan stok foto.</p>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors">
                 <div className="flex items-center gap-2 mb-3 text-orange-400 font-bold"><Utensils size={20}/> Kuliner</div>
                 <p className="text-xs text-slate-300 mb-2"><strong>Smart Sorting:</strong></p>
                 <p className="text-xs text-slate-400">Mesin sortir otomatis memisahkan buah/sayur yang busuk berdasarkan perubahan warna kulitnya.</p>
              </div>

            </div>
        </div>
      )}

    </section>
  );
};

// 3. SIMULASI PIXEL LAB (Basics)
const PixelLabSection = () => {
  const defaultGrid = [
      0, 0, 1, 0, 0,
      0, 1, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 0, 1, 0, 0,
      0, 1, 1, 1, 0
  ];
  
  const [grid, setGrid] = useState(defaultGrid);

  const togglePixel = (index: number) => {
      const newGrid = [...grid];
      newGrid[index] = newGrid[index] === 0 ? 1 : 0;
      setGrid(newGrid);
  };

  const reset = () => setGrid(Array(25).fill(0));

  return (
    <section className="animate-[fadeIn_0.5s] max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Lab 1: Bagaimana Mesin Melihat?</h2>
            <p className="text-slate-400">Klik kotak di bawah untuk menggambar. Lihat bagaimana komputer menerjemahkannya menjadi angka.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
            {/* Visual Grid */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-700">
                <div className="text-center mb-4 text-indigo-400 font-bold text-sm">INPUT VISUAL (MATA MANUSIA)</div>
                <div className="grid grid-cols-5 gap-2">
                    {grid.map((val, i) => (
                        <div 
                            key={i}
                            onClick={() => togglePixel(i)}
                            className={`w-12 h-12 rounded cursor-pointer transition-all duration-200 border border-slate-600 hover:border-white ${val ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-slate-900'}`}
                        ></div>
                    ))}
                </div>
                <button onClick={reset} className="mt-6 w-full py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm flex items-center justify-center gap-2 transition">
                    <Trash2 size={16}/> Hapus Gambar
                </button>
            </div>

            <ArrowRight className="hidden md:block text-slate-600" size={32} />

            {/* Matrix Grid */}
            <div className="bg-slate-900 p-6 rounded-2xl shadow-xl border border-indigo-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                <div className="text-center mb-4 text-emerald-400 font-bold text-sm">INPUT KOMPUTER (MATRIX)</div>
                <div className="grid grid-cols-5 gap-2 font-mono">
                    {grid.map((val, i) => (
                        <div key={i} className={`w-12 h-12 rounded flex items-center justify-center text-lg font-bold border transition-all duration-200 ${val ? 'bg-indigo-900/50 border-indigo-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-700'}`}>
                            {val}
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-xs text-slate-500">Komputer memproses pola angka ini, bukan tintanya.</p>
                </div>
            </div>
        </div>
    </section>
  );
};

// 4. SIMULASI VOCATIONAL VISION (Teachable Machine Context)
const VocationalVisionLab = () => {
    const [selectedMajor, setSelectedMajor] = useState<string | null>(null);
    const [goodSamples, setGoodSamples] = useState(0);
    const [badSamples, setBadSamples] = useState(0);
    const [modelStatus, setModelStatus] = useState<'idle' | 'training' | 'ready'>('idle');
    const [testResult, setTestResult] = useState<string | null>(null);

    const vocationalCases: any = {
        mesin: { 
            name: "Teknik Mesin & Las", 
            icon: Hammer, 
            task: "Deteksi Kualitas Las",
            good: "Las Matang & Rata", 
            bad: "Las Keropos / Berlubang",
            goodIcon: "✨", badIcon: "💥"
        },
        otomotif: { 
            name: "Otomotif (TKR/TSM)", 
            icon: Car, 
            task: "Cek Kondisi Busi",
            good: "Busi Bersih/Kering", 
            bad: "Busi Hitam/Basah Oli",
            goodIcon: "✅", badIcon: "⚫"
        },
        kuliner: { 
            name: "Kuliner", 
            icon: Utensils, 
            task: "Sortir Buah Apel",
            good: "Apel Merah Segar", 
            bad: "Apel Memar/Busuk",
            goodIcon: "🍎", badIcon: "🐛"
        },
        akuntansi: { 
            name: "Akuntansi", 
            icon: Calculator, 
            task: "Validasi Struk Belanja",
            good: "Struk Jelas & Lengkap", 
            bad: "Struk Buram / Sobek",
            goodIcon: "📄", badIcon: "🗑️"
        },
        dkv: { 
            name: "DKV & Grafika", 
            icon: Palette, 
            task: "Cek Resolusi Gambar",
            good: "High Res (300 DPI)", 
            bad: "Pecah / Low Res",
            goodIcon: "🖼️", badIcon: "👾"
        },
    };

    const addSample = (type: 'good' | 'bad') => {
        if (modelStatus === 'ready') resetModel();
        if (type === 'good') setGoodSamples(s => s + 1);
        else setBadSamples(s => s + 1);
    };

    const trainModel = () => {
        if (goodSamples < 3 || badSamples < 3) {
            alert("Data kurang! Masukkan minimal 3 sampel untuk Bagus dan 3 sampel untuk Buruk agar AI pintar.");
            return;
        }
        setModelStatus('training');
        setTimeout(() => {
            setModelStatus('ready');
        }, 2000);
    };

    const runTest = () => {
        // Simple logic simulation
        const isBias = Math.abs(goodSamples - badSamples) > 5;
        const total = goodSamples + badSamples;
        
        let resultMsg = "";
        if (total < 10) resultMsg = "Akurasi Rendah (Data Latih Sedikit).";
        else if (isBias) resultMsg = `Peringatan: Model Bias! Terlalu banyak data ${goodSamples > badSamples ? 'Bagus' : 'Buruk'}.`;
        else resultMsg = "Model Optimal! Akurasi Tinggi.";
        
        // Random outcome for demo
        const outcome = Math.random() > 0.5 ? "LOLOS QC (Good)" : "REJECT (Bad)";
        setTestResult(`${outcome} - ${resultMsg}`);
    };

    const resetModel = () => {
        setGoodSamples(0);
        setBadSamples(0);
        setModelStatus('idle');
        setTestResult(null);
    };

    const resetMajor = () => {
        setSelectedMajor(null);
        resetModel();
    };

    return (
        <section className="animate-[fadeIn_0.5s] max-w-4xl mx-auto py-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Lab 2: Smart Quality Inspector</h2>
                <p className="text-slate-400">Simulasi melatih AI untuk melakukan inspeksi kualitas otomatis sesuai jurusanmu.</p>
            </div>

            {!selectedMajor ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(vocationalCases).map(([key, val]: [string, any]) => (
                        <button 
                            key={key}
                            onClick={() => setSelectedMajor(key)}
                            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 p-6 rounded-xl flex flex-col items-center gap-3 transition-all group"
                        >
                            <div className="p-3 bg-slate-900 rounded-full group-hover:bg-indigo-600 group-hover:text-white text-indigo-400 transition-colors">
                                <val.icon size={24}/>
                            </div>
                            <span className="font-bold text-slate-300 group-hover:text-white text-sm text-center">{val.name}</span>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 md:p-8">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                             Pelatihan AI: {vocationalCases[selectedMajor].task}
                        </h3>
                        <button onClick={resetMajor} className="text-xs text-slate-400 hover:text-white underline">Ganti Jurusan</button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Class Good */}
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-emerald-500/30 text-center">
                            <div className="text-4xl mb-2">{vocationalCases[selectedMajor].goodIcon}</div>
                            <h4 className="font-bold text-emerald-400 mb-1">Kelas: BAGUS</h4>
                            <p className="text-xs text-slate-400 mb-4">{vocationalCases[selectedMajor].good}</p>
                            <div className="text-3xl font-mono text-white mb-4">{goodSamples} <span className="text-xs text-slate-500">sampel</span></div>
                            <button 
                                onClick={() => addSample('good')}
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm w-full font-bold flex items-center justify-center gap-2"
                            >
                                <Camera size={16}/> Ambil Sampel
                            </button>
                        </div>

                        {/* Class Bad */}
                        <div className="bg-slate-900/50 p-6 rounded-xl border border-rose-500/30 text-center">
                            <div className="text-4xl mb-2">{vocationalCases[selectedMajor].badIcon}</div>
                            <h4 className="font-bold text-rose-400 mb-1">Kelas: BURUK</h4>
                            <p className="text-xs text-slate-400 mb-4">{vocationalCases[selectedMajor].bad}</p>
                            <div className="text-3xl font-mono text-white mb-4">{badSamples} <span className="text-xs text-slate-500">sampel</span></div>
                            <button 
                                onClick={() => addSample('bad')}
                                className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm w-full font-bold flex items-center justify-center gap-2"
                            >
                                <Camera size={16}/> Ambil Sampel
                            </button>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col items-center gap-4">
                        {modelStatus === 'idle' && (
                            <button 
                                onClick={trainModel}
                                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold shadow-lg transition-transform hover:scale-105"
                            >
                                Latih Model AI (Training)
                            </button>
                        )}
                        
                        {modelStatus === 'training' && (
                            <div className="w-full max-w-md">
                                <div className="text-center text-xs text-indigo-300 mb-2">Sedang mempelajari pola pixel...</div>
                                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-500 animate-[progress_2s_ease-in-out_infinite]"></div>
                                </div>
                            </div>
                        )}

                        {modelStatus === 'ready' && (
                            <div className="w-full bg-slate-900 p-6 rounded-xl border border-indigo-500 animate-[fadeIn_0.5s] text-center">
                                <h4 className="text-indigo-400 font-bold mb-4 flex items-center justify-center gap-2"><CheckCircle size={18}/> Model AI Siap!</h4>
                                <div className="flex justify-center gap-4 mb-4">
                                    <button onClick={runTest} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm border border-slate-500">
                                        Test: Cek Barang Baru
                                    </button>
                                </div>
                                {testResult && (
                                    <div className="p-3 bg-black/40 rounded border border-slate-700 text-sm font-mono text-white animate-pulse">
                                        Hasil Scan: {testResult}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

// 5. KUIS SECTION
const KuisSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedIdx: number) => {
    if (selectedIdx === QUIZ_DATA[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    if (currentQuestion < QUIZ_DATA.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    const finalScore = (score / QUIZ_DATA.length) * 100;
    return (
      <div className="max-w-xl mx-auto py-12 text-center animate-[fadeIn_0.5s]">
         <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="text-6xl mb-6">{finalScore === 100 ? '🏆' : finalScore >= 75 ? '🎉' : '📚'}</div>
            <h3 className="text-3xl font-bold text-white mb-2">Skor Kamu: <span className="text-indigo-400">{finalScore}</span>/100</h3>
            <p className="text-slate-400 mb-8">
              {finalScore === 100 ? "Sempurna! Anda siap menerapkan AI di jurusan." : finalScore >= 75 ? "Hebat! Pemahaman yang baik." : "Jangan menyerah, coba pelajari materi lagi."}
            </p>
            <button onClick={resetQuiz} className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 font-bold transition">Ulangi Kuis</button>
         </div>
      </div>
    );
  }

  const data = QUIZ_DATA[currentQuestion];
  return (
    <section className="animate-[fadeIn_0.5s] max-w-2xl mx-auto py-8">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border-t-8 border-indigo-600 border-x border-b border-slate-700">
          <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Kuis Pemahaman</h2>
              <p className="text-slate-400 text-sm mt-1">Uji pengetahuanmu tentang Computer Vision di Industri</p>
          </div>

          <div className="mb-4 text-sm text-indigo-400 font-bold">Pertanyaan {currentQuestion + 1}/{QUIZ_DATA.length}</div>
          <h3 className="text-xl font-semibold mb-6 text-white leading-relaxed">{data.q}</h3>
          
          <div className="space-y-3">
              {data.options.map((opt, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleAnswer(idx)} 
                    className="w-full text-left p-4 rounded-xl border border-slate-600 bg-slate-700/50 hover:bg-indigo-900/30 hover:border-indigo-500 text-slate-200 hover:text-white transition duration-200 flex justify-between items-center group"
                  >
                      <span>{opt}</span>
                      <ChevronRight size={18} className="text-slate-500 group-hover:text-indigo-400" />
                  </button>
              ))}
          </div>
      </div>
    </section>
  );
}

// --- MAIN PAGE COMPONENT ---

const Materi4: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mindfulnessOpen, setMindfulnessOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activeTab} setPage={setActiveTab} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-12">
        {activeTab === 'home' && <HomeSection setPage={setActiveTab} openMindfulness={() => setMindfulnessOpen(true)} />}
        {activeTab === 'materi' && <MateriSection setPage={setActiveTab} />}
        {activeTab === 'simulasi' && <PixelLabSection />}
        {activeTab === 'vocational' && <VocationalVisionLab />}
        {activeTab === 'kuis' && <KuisSection />}

        {/* Mindfulness Modal */}
        {mindfulnessOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm animate-[fadeIn_0.3s]">
                <div className="text-center text-white relative p-8">
                    <div className="w-64 h-64 bg-indigo-500/20 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse ring-4 ring-indigo-500/10">
                        <Wind className="text-indigo-400 opacity-80" size={64} />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Tarik Napas...</h2>
                    <p className="text-indigo-200 mb-8">Ambil napas sejenak, dan bayangkan:<br/><br/>
                    "Jika matamu bisa melihat setajam mesin AI, apa yang ingin kamu perbaiki di dunia ini?"</p>
                    <button onClick={() => setMindfulnessOpen(false)} className="border border-white/20 bg-white/10 px-8 py-3 rounded-full hover:bg-white hover:text-slate-900 transition font-medium backdrop-blur-md">
                        Saya Siap Belajar
                    </button>
                </div>
            </div>
        )}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
       `}</style>
    </div>
  );
};

export default Materi4;