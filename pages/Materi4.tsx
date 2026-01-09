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
  RefreshCw
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
        q: "Apa yang terjadi jika data latih AI tidak seimbang (misal: 1000 foto pria, 10 foto wanita)?",
        options: [
            "AI menjadi sangat pintar.",
            "AI akan mengalami Bias Data (Tidak adil).",
            "AI akan bekerja lebih cepat.",
            "Tidak berpengaruh apa-apa."
        ],
        correct: 1
    },
    {
        q: "Istilah 'Garbage In, Garbage Out' dalam AI berarti...",
        options: [
            "AI bisa membersihkan sampah digital.",
            "Jika data input jelek/bias, maka hasil output AI juga akan jelek/bias.",
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
          { id: 'training', label: 'Lab Training', icon: Database },
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
            <span className="bg-indigo-900/50 text-indigo-300 border border-indigo-500/30 text-xs font-semibold px-3 py-1 rounded uppercase tracking-wide">Machine Learning</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-4 leading-tight">Menyingkap Cara Mesin <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">"Melihat"</span></h2>
            <div className="text-slate-400 mb-8 text-lg leading-relaxed space-y-4">
                <p>
                  Pernahkah kalian berpikir, bagaimana <strong>Face Unlock</strong> tahu itu wajah kalian meski pakai kacamata? 
                  Atau bagaimana <strong>Filter TikTok</strong> bisa pas menempelkan telinga kucing di kepala kalian?
                </p>
                <p className="text-sm border-l-4 border-indigo-500 pl-4 italic">
                  "Apakah ada orang kecil di dalam HP? Tentu tidak. Itu adalah keajaiban Computer Vision."
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
                    <p className="text-slate-400 text-sm">Membongkar "kotak hitam" cara kerja AI memproses input visual.</p>
                </div>
            </div>
        </div>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="animate-[fadeIn_0.5s] max-w-5xl mx-auto py-8 space-y-12">
    
    {/* Topic 1: Tradisional vs ML */}
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-500/20 rounded-lg text-indigo-400"><Bot size={24}/></div>
            <h3 className="text-2xl font-bold text-white">1. Koding Biasa vs Machine Learning</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-400 mb-2">Pemrograman Tradisional</h4>
                <p className="text-slate-300 text-sm mb-4">Manusia menulis aturan (Rules) secara detail.</p>
                <div className="bg-black/30 p-3 rounded text-xs font-mono text-slate-400">
                    "Jika ada segitiga di atas & kumis di tengah -&gt; MAKA Kucing."
                </div>
                <p className="mt-3 text-xs text-slate-500">Analogi: Seperti mengikuti <strong>Resep Kue</strong> yang kaku. Salah takaran sedikit, gagal.</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-xl border-l-4 border-emerald-500">
                <h4 className="font-bold text-emerald-400 mb-2">Machine Learning (ML)</h4>
                <p className="text-slate-300 text-sm mb-4">Manusia memberikan DATA dan JAWABAN. Mesin mencari pola sendiri.</p>
                <div className="bg-black/30 p-3 rounded text-xs font-mono text-slate-400">
                    Input: 1000 Foto Kucing & 1000 Foto Anjing.<br/>
                    Mesin: "Oke, saya temukan pola bedanya sendiri."
                </div>
                <p className="mt-3 text-xs text-slate-500">Analogi: Seperti <strong>Koki Mencicipi</strong> masakan. Kurang asin? Tambah garam. Belajar dari pengalaman.</p>
            </div>
        </div>
    </div>

    {/* Topic 2: How Machines See */}
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400"><Eye size={24}/></div>
            <h3 className="text-2xl font-bold text-white">2. Bagaimana Mesin "Melihat"?</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
                <p className="text-slate-300 mb-4 leading-relaxed">
                    Manusia melihat dengan mata dan otak. Komputer hanya mengerti angka 0 dan 1.
                    Bagi komputer, gambar adalah <strong>Grid / Matrix Angka</strong>.
                </p>
                <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
                    <li><strong className="text-white">Pixel:</strong> Titik terkecil dalam gambar.</li>
                    <li><strong className="text-white">Kode Warna:</strong> Setiap pixel punya nilai angka.</li>
                    <li>Hitam = 0, Putih = 255 (pada gambar Grayscale).</li>
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
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold">Pola Angka "1"</p>
                </div>
            </div>
        </div>
    </div>

    {/* Topic 3: Ethics */}
    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-rose-500/20 rounded-lg text-rose-400"><AlertTriangle size={24}/></div>
            <h3 className="text-2xl font-bold text-white">3. Etika & Bias Data</h3>
        </div>
        <div className="bg-rose-900/10 border border-rose-500/30 p-6 rounded-xl mb-6">
            <h4 className="text-xl font-bold text-rose-400 mb-2">Garbage In, Garbage Out</h4>
            <p className="text-slate-300 text-sm">
                "Sampah Masuk, Sampah Keluar". Jika data yang kita gunakan untuk melatih AI itu "kotor" atau bias, 
                maka AI akan menjadi tidak adil.
            </p>
        </div>
        <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Studi Kasus Nyata:</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <p className="text-sm text-slate-400">
                        Sebuah perusahaan besar membuat AI perekrutan. Ternyata, AI menolak lamaran wanita karena data 10 tahun terakhir didominasi pria.
                    </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                    <p className="text-sm text-slate-400">
                        Filter wajah yang tidak mengenali kulit berwarna gelap karena data latihnya kebanyakan orang berkulit terang.
                    </p>
                </div>
            </div>
        </div>
    </div>

  </section>
);

// 3. SIMULASI PIXEL LAB (Meaningful Vision)
const PixelLabSection = () => {
  // Pattern for number "1"
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

// 4. SIMULASI TRAINING LAB (Teachable Machine Logic)
const TrainingLabSection = () => {
    const [dataA, setDataA] = useState(0);
    const [dataB, setDataB] = useState(0);
    const [isTraining, setIsTraining] = useState(false);
    const [modelStatus, setModelStatus] = useState<'idle' | 'trained'>('idle');
    const [logs, setLogs] = useState<string[]>([]);

    const addData = (type: 'A' | 'B') => {
        if (modelStatus === 'trained') {
            setModelStatus('idle'); // Reset if adding new data
            setLogs([]);
        }
        if (type === 'A') setDataA(prev => prev + 1);
        else setDataB(prev => prev + 1);
    };

    const trainModel = () => {
        if (dataA === 0 && dataB === 0) {
            alert("Belum ada data! Kumpulkan data dulu.");
            return;
        }
        
        setIsTraining(true);
        setLogs([]);
        
        setTimeout(() => {
            setIsTraining(false);
            setModelStatus('trained');
            
            // Logic for feedback based on data quantity/quality
            const total = dataA + dataB;
            if (total < 10) {
                setLogs(prev => [...prev, "❌ Data terlalu sedikit (Underfitting). AI kurang pintar."]);
            } else if (Math.abs(dataA - dataB) > total * 0.4) { // Bias check
                const biasTo = dataA > dataB ? "Kelas A" : "Kelas B";
                setLogs(prev => [...prev, `⚠️ Peringatan: Data Bias ke ${biasTo}.`, `AI akan cenderung menebak ${biasTo} terus.`]);
            } else {
                setLogs(prev => [...prev, "✅ Data cukup dan seimbang.", "Model AI siap digunakan dengan akurasi tinggi!"]);
            }
        }, 2000); // Fake training delay
    };

    const reset = () => {
        setDataA(0);
        setDataB(0);
        setModelStatus('idle');
        setLogs([]);
    };

    return (
        <section className="animate-[fadeIn_0.5s] max-w-4xl mx-auto py-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Lab 2: Training Simulator (Teachable Machine)</h2>
                <p className="text-slate-400">Jadilah pelatih AI. Kumpulkan data, latih, dan lihat hasilnya. Hati-hati dengan Bias!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {/* INPUT SECTION */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Layers size={18}/> 1. Gathering Data (Input)</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-indigo-500/30 hover:border-indigo-500 transition cursor-pointer" onClick={() => addData('A')}>
                                <div className="text-4xl mb-2">🍎</div>
                                <div className="text-sm text-slate-300 font-bold">Kelas Apel</div>
                                <div className="text-2xl font-mono text-white mt-2">{dataA} <span className="text-xs text-slate-500">samples</span></div>
                                <button className="mt-2 text-xs bg-indigo-600 text-white px-3 py-1 rounded">+ Tambah Data</button>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl text-center border border-orange-500/30 hover:border-orange-500 transition cursor-pointer" onClick={() => addData('B')}>
                                <div className="text-4xl mb-2">🍌</div>
                                <div className="text-sm text-slate-300 font-bold">Kelas Pisang</div>
                                <div className="text-2xl font-mono text-white mt-2">{dataB} <span className="text-xs text-slate-500">samples</span></div>
                                <button className="mt-2 text-xs bg-orange-600 text-white px-3 py-1 rounded">+ Tambah Data</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Cpu size={18}/> 2. Training Process</h3>
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={trainModel}
                                disabled={isTraining}
                                className={`flex-1 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition ${isTraining ? 'bg-slate-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white'}`}
                            >
                                {isTraining ? 'Sedang Melatih...' : 'Latih Model (Train)'}
                            </button>
                            <button onClick={reset} className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300"><RefreshCw size={20}/></button>
                        </div>
                        {isTraining && (
                            <div className="mt-4">
                                <div className="text-xs text-slate-400 mb-1">Epochs (Pengulangan Belajar)...</div>
                                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-500 animate-[progress_2s_ease-in-out_infinite]"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* OUTPUT SECTION */}
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-inner flex flex-col">
                    <h3 className="text-indigo-400 font-bold mb-4 border-b border-slate-800 pb-2 flex items-center gap-2"><Activity size={18}/> 3. Analisis AI</h3>
                    
                    <div className="flex-1 overflow-y-auto space-y-3">
                        {modelStatus === 'idle' && !isTraining && (
                            <p className="text-sm text-slate-500 italic text-center mt-10">Menunggu model dilatih...</p>
                        )}
                        {logs.map((log, i) => (
                            <div key={i} className={`p-3 rounded-lg text-sm border ${log.includes('❌') ? 'bg-red-900/20 border-red-500/50 text-red-200' : log.includes('⚠️') ? 'bg-amber-900/20 border-amber-500/50 text-amber-200' : 'bg-emerald-900/20 border-emerald-500/50 text-emerald-200'}`}>
                                {log}
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 p-3 bg-slate-800 rounded border border-slate-700 text-xs text-slate-400">
                        <strong>Tips:</strong>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Coba masukkan sedikit data (misal 2 & 2).</li>
                            <li>Coba buat data bias (misal 15 Apel & 1 Pisang).</li>
                            <li>Coba buat data seimbang (15 & 15).</li>
                        </ul>
                    </div>
                </div>
            </div>
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
              {finalScore === 100 ? "Sempurna! Anda memahami konsep Computer Vision dengan sangat baik." : finalScore >= 75 ? "Hebat! Pemahaman yang baik." : "Jangan menyerah, coba pelajari materi lagi."}
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
              <p className="text-slate-400 text-sm mt-1">Uji pengetahuanmu tentang Machine Learning & Computer Vision</p>
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
        {activeTab === 'training' && <TrainingLabSection />}
        {activeTab === 'kuis' && <KuisSection />}

        {/* Mindfulness Modal */}
        {mindfulnessOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-sm animate-[fadeIn_0.3s]">
                <div className="text-center text-white relative p-8">
                    <div className="w-64 h-64 bg-indigo-500/20 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse ring-4 ring-indigo-500/10">
                        <Wind className="text-indigo-400 opacity-80" size={64} />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Tarik Napas...</h2>
                    <p className="text-indigo-200 mb-8">Ambil napas sejenak, dan jawablah pertanyaan ini dalam hati:<br/><br/>
                    "Hari ini saya belajar bahwa mesin tidak benar-benar pintar,<br/>mereka hanya ahli matematika. Bagaimana perasaanmu?"</p>
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