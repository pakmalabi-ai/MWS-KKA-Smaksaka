import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Shield, 
  Users, 
  HelpCircle, 
  Brain, 
  Menu, 
  X, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle, 
  Scale, 
  Lock, 
  Play, 
  Pause, 
  RotateCcw,
  MessageSquare,
  Eye,
  FileText,
  Fingerprint
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-1.5 rounded-lg">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 6</h1>
          <p className="text-[10px] text-amber-400 font-medium hidden sm:block">Etika & Literasi AI</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'home', label: 'Beranda', icon: Brain },
          { id: 'materi', label: 'Materi', icon: BookOpen },
          { id: 'simulasi', label: 'Lab Etika', icon: Cpu },
          { id: 'debat', label: 'Ruang Debat', icon: MessageSquare },
          { id: 'refleksi', label: 'Refleksi', icon: FileText },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20' 
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
const HomeSection = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="animate-[fadeIn_0.5s]">
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden py-10">
       <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6 border border-amber-500/20">
        Literasi Digital & Etika KA - Fase E
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
        Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Tuan</span>, <br /> Bukan Hamba Teknologi
      </h1>
      
      <div className="bg-slate-800/50 backdrop-blur p-6 rounded-2xl border border-slate-700 max-w-3xl mx-auto mb-10 relative">
        <div className="absolute -top-4 -left-4 text-4xl">🤔</div>
        <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed">
          "Bayangkan jika sebuah mesin memutuskan kamu tidak boleh masuk sekolah hanya karena algoritma menilai wajahmu 'kurang rajin'. 
          Atau suaramu digunakan untuk menipu orang tuamu. Ini bukan fiksi ilmiah, ini realitas."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 hover:border-amber-500/50 transition duration-300">
          <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto text-red-400">
            <AlertTriangle size={20} />
          </div>
          <h3 className="font-bold text-white">Bias Algoritma</h3>
          <p className="text-slate-400 text-xs mt-1">Mengapa AI bisa rasis atau tidak adil?</p>
        </div>
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 hover:border-amber-500/50 transition duration-300">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto text-blue-400">
            <Shield size={20} />
          </div>
          <h3 className="font-bold text-white">Privasi & UU PDP</h3>
          <p className="text-slate-400 text-xs mt-1">Lindungi data pribadimu (Minyak Baru).</p>
        </div>
        <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-700 hover:border-amber-500/50 transition duration-300">
          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3 mx-auto text-purple-400">
            <Scale size={20} />
          </div>
          <h3 className="font-bold text-white">Dilema Etis</h3>
          <p className="text-slate-400 text-xs mt-1">Keputusan hidup mati mobil otonom.</p>
        </div>
      </div>

      <button onClick={() => setPage('materi')} className="group flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 transition shadow-[0_0_20px_rgba(245,158,11,0.3)]">
        Mulai Eksplorasi <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </button>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const topics = [
    {
      title: "1. Bias Data (Garbage In, Garbage Out)",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6 animate-[fadeIn_0.5s]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Mitos Objektivitas AI</h3>
            <p className="text-slate-300 leading-relaxed">
              Banyak yang berpikir komputer itu netral. Salah! AI belajar dari data manusia. Jika datanya mengandung prasangka (rasisme/seksisme), AI akan menirunya.
              Prinsipnya: <strong className="text-amber-400">Garbage In, Garbage Out</strong> (Masuk sampah, keluar sampah).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-amber-500">
              <h4 className="font-bold text-amber-400 mb-1">a. Bias Representasi</h4>
              <p className="text-sm text-slate-400">
                Data latih tidak mewakili populasi. <br/>
                <strong>Contoh:</strong> Face Unlock gagal mengenali wajah wanita berkulit gelap karena pelatihannya banyak pakai foto pria kulit putih.
              </p>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-red-500">
              <h4 className="font-bold text-red-400 mb-1">b. Bias Historis</h4>
              <p className="text-sm text-slate-400">
                Data masa lalu mencerminkan ketidakadilan.<br/>
                <strong>Contoh:</strong> AI Amazon menolak pelamar wanita karena data 10 tahun terakhir didominasi pria.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Privasi, Deepfake & UU PDP",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-6 animate-[fadeIn_0.5s]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Data is the New Oil</h3>
            <p className="text-slate-300 leading-relaxed">
              Setiap klik "Like" dan lokasi Maps adalah jejak digital. 
              <br/><em className="text-amber-400">"Jika produk digital itu GRATIS, maka kamulah PRODUKNYA."</em>
            </p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2"><Fingerprint className="text-blue-400"/> Payung Hukum: UU PDP</h4>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li><strong>Hak Kamu:</strong> Mengetahui tujuan penggunaan data & meminta penghapusan data.</li>
              <li><strong>Kewajiban Perusahaan:</strong> Menjaga kerahasiaan & lapor jika bocor (max 3x24 jam).</li>
            </ul>
          </div>

          <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/30">
            <h4 className="font-bold text-red-400 mb-1">Bahaya Deepfake</h4>
            <p className="text-sm text-slate-300">
              Manipulasi video/audio (Voice Cloning) untuk penipuan, politik, atau pornografi balas dendam. Hati-hati share data biometrik!
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Dilema Etis (Trolley Problem)",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-6 animate-[fadeIn_0.5s]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Benar vs Salah di Mata Mesin</h3>
            <p className="text-slate-300 leading-relaxed">
              Dalam situasi kritis, mesin harus mengambil keputusan moral. Siapa yang bertanggung jawab jika AI salah pilih?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-purple-400 mb-2">Mobil Otonom (Self-Driving)</h4>
                <p className="text-sm text-slate-400">
                  Jika rem blong: Tabrak 5 pejalan kaki (langgar lampu merah) ATAU banting setir tabrak tembok (bunuh penumpang taat)?
                </p>
             </div>
             <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                <h4 className="font-bold text-emerald-400 mb-2">Social Scoring (Kredit Sosial)</h4>
                <p className="text-sm text-slate-400">
                  AI memantau perilaku warga/karyawan. <br/>
                  <strong>Pro:</strong> Disiplin naik. <br/>
                  <strong>Kontra:</strong> Pelanggaran privasi berat & stres mental.
                </p>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          {/* Sidebar Menu */}
          <div className="w-full md:w-1/3 flex flex-col gap-3">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-amber-600 text-white shadow-lg translate-x-2' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {topic.icon}
                <span className="font-semibold text-sm">{topic.title}</span>
              </button>
            ))}
          </div>
          
          {/* Content Area */}
          <div className="w-full md:w-2/3 bg-slate-800/50 backdrop-blur p-8 rounded-2xl shadow-xl border border-slate-700 min-h-[400px]">
            {topics[activeTab].content}
          </div>
        </div>
    </div>
  );
};

// 3. SIMULASI SECTION
const SimulasiSection = () => {
  const [activeSim, setActiveSim] = useState('bias');
  
  // -- BIAS SIMULATION STATES --
  const [candidate, setCandidate] = useState({ gender: 'Pria', exp: 5, score: 0 });
  const [showExplanation, setShowExplanation] = useState(false);

  const checkCandidate = () => {
    // Simulasi Historical Bias: Pria diberi bonus skor karena data masa lalu
    let base = candidate.exp * 10;
    if (candidate.gender === 'Pria') base += 20; // Bias point
    if (candidate.gender === 'Wanita') base -= 10; // Penalty
    
    setCandidate({...candidate, score: base});
    setShowExplanation(true);
  };

  // -- TROLLEY SIMULATION STATES --
  const [decision, setDecision] = useState<null | 'A' | 'B'>(null);

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <div className="text-center mb-8">
           <h2 className="text-3xl font-bold text-white mb-2">Laboratorium Etika AI</h2>
           <p className="text-slate-400">Pilih simulasi untuk memahami cara kerja keputusan mesin.</p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setActiveSim('bias')}
            className={`px-6 py-2 rounded-full font-medium transition ${activeSim === 'bias' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
          >
            Bias Rekrutmen
          </button>
          <button 
            onClick={() => setActiveSim('trolley')}
            className={`px-6 py-2 rounded-full font-medium transition ${activeSim === 'trolley' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
          >
            Trolley Problem
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur rounded-3xl shadow-xl overflow-hidden border border-slate-700 p-6 md:p-10">
          
          {/* === SIMULASI 1: BIAS REKRUTMEN === */}
          {activeSim === 'bias' && (
            <div className="animate-[fadeIn_0.3s]">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white border-b border-slate-700 pb-4">
                 <Users className="text-blue-500" /> Simulasi AI HRD (Historical Bias)
               </h3>
               <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <p className="text-sm text-slate-300">
                      Sistem ini dilatih dengan data karyawan 10 tahun terakhir (yang didominasi Pria). Coba ubah gender dengan pengalaman yang SAMA.
                    </p>
                    <div className="bg-slate-900 p-4 rounded-xl border border-slate-600">
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Gender Pelamar</label>
                      <select 
                        className="w-full p-2 bg-slate-800 border border-slate-600 rounded text-white mb-4"
                        value={candidate.gender}
                        onChange={(e) => { setCandidate({...candidate, gender: e.target.value}); setShowExplanation(false); }}
                      >
                        <option>Pria</option>
                        <option>Wanita</option>
                      </select>

                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Pengalaman (Tahun)</label>
                      <input 
                        type="range" min="1" max="10" 
                        className="w-full mb-2 accent-amber-500"
                        value={candidate.exp}
                        onChange={(e) => { setCandidate({...candidate, exp: parseInt(e.target.value)}); setShowExplanation(false); }}
                      />
                      <div className="text-right text-white font-mono">{candidate.exp} Tahun</div>
                    </div>
                    <button onClick={checkCandidate} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition">
                      Cek Skor AI
                    </button>
                 </div>

                 <div className="flex flex-col items-center justify-center bg-slate-900 rounded-xl p-6 border border-slate-700">
                    {showExplanation ? (
                      <div className="text-center w-full">
                        <span className="text-xs text-slate-500 uppercase tracking-widest">Skor Kecocokan</span>
                        <div className={`text-6xl font-black my-4 ${candidate.score > 50 ? 'text-green-500' : 'text-red-500'}`}>
                          {candidate.score}%
                        </div>
                        <div className="bg-amber-900/20 border border-amber-500/30 p-3 rounded text-left text-sm">
                          <p className="font-bold text-amber-400 mb-1 flex items-center gap-2"><AlertTriangle size={14}/> Analisis Bias:</p>
                          <p className="text-slate-300 text-xs">
                            {candidate.gender === 'Wanita' 
                              ? "Meskipun pengalaman tinggi, skor dikurangi. AI mempelajari pola sejarah bahwa 'Pria lebih sering diterima'."
                              : "Skor tinggi. AI mengenali pola 'Pria' sebagai faktor sukses berdasarkan data lama."}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-slate-500 text-center opacity-50">
                        <Cpu size={48} className="mx-auto mb-2"/>
                        <p className="text-sm">Menunggu input...</p>
                      </div>
                    )}
                 </div>
               </div>
            </div>
          )}

          {/* === SIMULASI 2: TROLLEY PROBLEM === */}
          {activeSim === 'trolley' && (
            <div className="animate-[fadeIn_0.3s]">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white border-b border-slate-700 pb-4">
                <AlertTriangle className="text-red-500" /> Masalah Kereta (Mobil Otonom)
              </h3>
              <p className="text-slate-300 mb-6 text-sm">
                Mobil AI mengalami <strong className="text-red-400">REM BLONG</strong>. Kamu adalah pemrogramnya. Pilih skenario keselamatan.
              </p>
              
              <div className="relative h-48 bg-slate-700 rounded-xl mb-6 overflow-hidden flex items-center border-4 border-slate-600 group">
                {/* Jalan */}
                <div className="absolute w-full h-16 bg-slate-800 top-1/2 -translate-y-1/2 border-y-2 border-dashed border-slate-500 flex items-center px-4 justify-between">
                   {/* Mobil */}
                   <div className={`w-20 h-10 bg-blue-600 rounded shadow-lg flex items-center justify-center text-white text-xs font-bold z-10 transition-all duration-1000 ${decision === 'A' ? 'translate-x-[300px]' : decision === 'B' ? 'translate-x-[200px] translate-y-[80px] rotate-45' : ''}`}>
                     Mobil AI
                   </div>
                   
                   {/* Korban A */}
                   <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-8 bg-red-500 rounded-full" title="Pejalan Kaki"></div>)}
                   </div>
                </div>

                {/* Tembok B */}
                <div className="absolute bottom-0 right-20 w-32 h-20 bg-stone-600 border-2 border-stone-400 flex items-center justify-center text-xs text-stone-300 font-bold">
                   TEMBOK BETON
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setDecision('A')}
                  className={`p-4 rounded-xl border-2 transition text-left ${decision === 'A' ? 'bg-red-900/30 border-red-500' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
                >
                  <div className="font-bold text-white mb-1">Opsi A: Lurus Terus</div>
                  <div className="text-xs text-slate-400">Menabrak 5 pejalan kaki yang melanggar lampu merah.</div>
                  <div className="mt-2 text-xs font-bold text-red-400">Korban: 5 Orang</div>
                </button>
                <button 
                  onClick={() => setDecision('B')}
                  className={`p-4 rounded-xl border-2 transition text-left ${decision === 'B' ? 'bg-orange-900/30 border-orange-500' : 'bg-slate-800 border-slate-600 hover:bg-slate-700'}`}
                >
                  <div className="font-bold text-white mb-1">Opsi B: Banting Setir</div>
                  <div className="text-xs text-slate-400">Menabrak tembok. Membunuh 1 penumpang (pemilik mobil) yang taat.</div>
                  <div className="mt-2 text-xs font-bold text-orange-400">Korban: 1 Orang</div>
                </button>
              </div>

              {decision && (
                <div className="mt-6 p-4 bg-slate-900 rounded-xl border border-slate-600 animate-[fadeInUp_0.5s]">
                   <h4 className="font-bold text-white mb-2">Refleksi Etis:</h4>
                   <p className="text-sm text-slate-300 italic">
                     "{decision === 'A' ? 'Anda memilih Utilitarianisme (korban sedikit lebih baik), tapi Anda membunuh 5 orang secara pasif.' : 'Anda memilih menyelamatkan banyak orang, tapi secara aktif membunuh penumpang yang tidak bersalah dan telah membayar produk Anda.'}"
                   </p>
                </div>
              )}
            </div>
          )}

        </div>
    </div>
  );
};

// 4. DEBAT SECTION
const DebatSection = () => {
  const [timer, setTimer] = useState(180); // 3 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <div className="bg-slate-800/50 backdrop-blur rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-slate-700">
          <div className="bg-slate-900 text-white p-6 text-center border-b border-slate-700">
            <h2 className="text-3xl font-bold">Arena Debat Etika</h2>
            <p className="text-amber-400 mt-2 font-mono">Topik: Social Scoring & Pengawasan Karyawan</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Mosi */}
              <div className="bg-amber-900/10 p-6 rounded-2xl border border-amber-500/30">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="bg-amber-500 p-2 rounded text-slate-900 font-bold"><MessageSquare size={20}/></div>
                    <h3 className="text-xl font-bold text-white">Mosi Debat</h3>
                 </div>
                 <p className="text-slate-300 italic text-lg leading-relaxed">
                   "Dewan ini percaya bahwa perusahaan diperbolehkan menggunakan AI canggih (CCTV biometrik, keystroke logger) untuk memantau produktivitas karyawan secara total demi efisiensi."
                 </p>
                 <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-slate-900 rounded border border-green-500/30">
                      <strong className="text-green-400 block mb-1">Tim Pro (Afirmatif)</strong>
                      Fokus: Efisiensi, Anti-korupsi waktu, Disiplin.
                    </div>
                    <div className="p-3 bg-slate-900 rounded border border-red-500/30">
                      <strong className="text-red-400 block mb-1">Tim Kontra (Oposisi)</strong>
                      Fokus: Privasi, Kesehatan Mental, Hak Asasi.
                    </div>
                 </div>
              </div>

              {/* Timer */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Waktu Bicara</h3>
                <div className={`text-8xl font-mono font-black mb-6 ${timer < 30 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                  {formatTime(timer)}
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsRunning(!isRunning)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition text-xl ${isRunning ? 'bg-amber-500/20 text-amber-500 border-2 border-amber-500' : 'bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg'}`}
                  >
                    {isRunning ? <Pause /> : <Play />}
                  </button>
                  <button 
                    onClick={() => { setIsRunning(false); setTimer(180); }}
                    className="w-16 h-16 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center hover:bg-slate-600 transition"
                  >
                    <RotateCcw />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

// 5. REFLEKSI SECTION (NEW)
const RefleksiSection = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '' });

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s] max-w-4xl">
       <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FileText className="text-amber-400"/> Lembar Jurnal (Refleksi)
          </h2>
          <p className="text-slate-400 mb-8">
            Ambil napas sejenak. Jawablah pertanyaan ini dengan jujur untuk dirimu sendiri. Tidak ada jawaban salah.
          </p>

          <div className="space-y-8">
             <div>
                <label className="block text-lg font-medium text-slate-200 mb-3">1. Apakah kamu merasa caramu menggunakan media sosial sudah aman?</label>
                <textarea 
                  className="w-full h-32 bg-slate-900 border border-slate-600 rounded-xl p-4 text-slate-300 focus:border-amber-500 focus:outline-none transition"
                  placeholder="Tuliskan refleksimu di sini..."
                  value={answers.q1}
                  onChange={(e) => setAnswers({...answers, q1: e.target.value})}
                />
             </div>
             <div>
                <label className="block text-lg font-medium text-slate-200 mb-3">2. Jika kamu menjadi programmer AI, prinsip etika apa yang akan kamu pegang teguh?</label>
                <textarea 
                  className="w-full h-32 bg-slate-900 border border-slate-600 rounded-xl p-4 text-slate-300 focus:border-amber-500 focus:outline-none transition"
                  placeholder="Contoh: Saya tidak akan membuat AI yang mendiskriminasi..."
                  value={answers.q2}
                  onChange={(e) => setAnswers({...answers, q2: e.target.value})}
                />
             </div>
          </div>

          <div className="mt-8 text-right">
             <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-bold transition flex items-center gap-2 ml-auto">
               Simpan ke Jurnal Pribadi <CheckCircle size={18}/>
             </button>
             <p className="text-xs text-slate-500 mt-2">*Data hanya disimpan di browser ini.</p>
          </div>
       </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi6: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 -mt-4">
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'materi' && <MateriSection />}
        {activePage === 'simulasi' && <SimulasiSection />}
        {activePage === 'debat' && <DebatSection />}
        {activePage === 'refleksi' && <RefleksiSection />}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
       `}</style>
    </div>
  );
};

export default Materi6;