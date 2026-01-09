import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Shield, 
  Users, 
  Brain, 
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
  Fingerprint,
  Gavel,
  History,
  FileText
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
          { id: 'simulasi', label: 'Dilema Etis', icon: Scale },
          { id: 'debat', label: 'Studi Kasus', icon: MessageSquare },
          { id: 'kuis', label: 'Refleksi', icon: CheckCircle },
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
        Elemen: Literasi dan Etika KA
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
        Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Tuan</span>, <br/> Bukan Hamba Teknologi
      </h1>
      
      <div className="max-w-2xl mx-auto mb-10 bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm">
        <p className="text-lg md:text-xl text-slate-300 italic leading-relaxed">
          "Bayangkan jika sebuah mesin memutuskan kamu tidak boleh masuk sekolah hanya karena algoritma menilai wajahmu 'kurang rajin'. Ini bukan fiksi ilmiah, ini realitas."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition duration-300 group">
          <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-500/40 transition">
            <AlertTriangle className="text-rose-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Bias Algoritma</h3>
          <p className="text-slate-400 text-sm">Mesin bisa rasis dan pilih kasih? Pelajari konsep "Garbage In, Garbage Out".</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition duration-300 group">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/40 transition">
            <Lock className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Data is New Oil</h3>
          <p className="text-slate-400 text-sm">Deepfake, Voice Cloning, dan perlindungan hukum UU PDP.</p>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-amber-400/50 transition duration-300 group">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/40 transition">
            <Scale className="text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">Dilema Etis</h3>
          <p className="text-slate-400 text-sm">Masalah Kereta (Trolley Problem) dan Social Scoring di tempat kerja.</p>
        </div>
      </div>

      <button onClick={() => setPage('materi')} className="group flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-500 transition shadow-[0_0_20px_rgba(245,158,11,0.3)]">
        Mulai Belajar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </button>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const topics = [
    {
      title: "1. Bias Data (Algorithmic Bias)",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-6 animate-[fadeIn_0.5s]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Mitos Objektivitas Mesin</h3>
            <p className="text-slate-300 leading-relaxed">
              Banyak yang berpikir komputer itu netral. Salah! AI belajar dari data manusia. Jika data sejarahnya mengandung prasangka, AI akan mewarisinya.
              Prinsipnya: <strong className="text-amber-400">GARBAGE IN, GARBAGE OUT</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-rose-500">
                <div className="flex items-center gap-2 mb-2 text-rose-400 font-bold">
                   <Fingerprint size={18}/> Bias Representasi
                </div>
                <p className="text-sm text-slate-300">
                   **Kasus Face Unlock:** AI gagal mengenali wajah berkulit gelap karena data latihnya didominasi wajah pria kulit putih. Akibatnya bisa fatal dalam identifikasi kriminal.
                </p>
             </div>
             <div className="bg-slate-900 p-4 rounded-xl border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-2 text-orange-400 font-bold">
                   <History size={18}/> Bias Historis
                </div>
                <p className="text-sm text-slate-300">
                   **Kasus Amazon (2018):** AI Perekrutan menolak pelamar wanita secara otomatis. Kenapa? Karena data lamaran 10 tahun terakhir didominasi pria. AI belajar bahwa "Pria = Cocok Kerja".
                </p>
             </div>
          </div>
        </div>
      )
    },
    {
      title: "2. Privasi & Hukum (UU PDP)",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6 animate-[fadeIn_0.5s]">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Data adalah "Minyak Baru"</h3>
            <p className="text-slate-300 leading-relaxed">
              Setiap klik "Like" dan lokasi GPS adalah jejak digital. Profil digitalmu sangat berharga bagi pengiklan.
            </p>
            <ul className="list-disc list-inside text-slate-400 mt-2 text-sm">
               <li><strong>Data Eksplisit:</strong> Nama, Email, Tgl Lahir.</li>
               <li><strong>Data Implisit (Metadata):</strong> Berapa lama kamu menatap foto di IG, kecepatan mengetik, model HP.</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
             <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Eye className="text-blue-400"/> Ancaman Deepfake</h4>
             <p className="text-sm text-slate-300 mb-2">Menggunakan AI untuk memanipulasi video/suara agar terlihat seperti orang lain.</p>
             <div className="grid grid-cols-3 gap-2 text-xs text-slate-400">
                <div className="bg-slate-800 p-2 rounded">Politik (Hoaks Pejabat)</div>
                <div className="bg-slate-800 p-2 rounded">Kriminal (Voice Cloning Penipuan)</div>
                <div className="bg-slate-800 p-2 rounded">Balas Dendam (Pornografi)</div>
             </div>
          </div>

          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl">
             <h4 className="font-bold text-blue-300 mb-1 flex items-center gap-2"><Gavel size={16}/> Perisai Hukum: UU PDP</h4>
             <p className="text-sm text-slate-300">
               Indonesia memiliki <strong>Undang-Undang Perlindungan Data Pribadi</strong>. Kamu berhak menolak, menghapus, dan menuntut jika datamu bocor.
             </p>
          </div>
        </div>
      )
    },
    {
      title: "3. Dilema Etis & Social Scoring",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-6 animate-[fadeIn_0.5s]">
          <h3 className="text-2xl font-bold text-white">Hitam Putih Dunia AI</h3>
          
          <div className="space-y-4">
             <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-xl">
                <h4 className="font-bold text-purple-300 mb-2">1. Masalah Kereta (Trolley Problem)</h4>
                <p className="text-sm text-slate-300">
                   Mobil otonom rem blong. Lurus tabrak 5 orang, banting setir tabrak tembok (penumpang mati). Siapa yang harus diselamatkan?
                   <br/><span className="text-xs text-purple-400 mt-1 block">*Apakah nyawa dihitung secara matematika (Utilitarianisme)?</span>
                </p>
             </div>

             <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl">
                <h4 className="font-bold text-white mb-2">2. Social Scoring & Pengawasan</h4>
                <p className="text-sm text-slate-300 mb-2">
                   Beberapa perusahaan menggunakan AI untuk memantau karyawan secara real-time: menghitung ke toilet, mengukur ekspresi wajah saat bekerja.
                </p>
                <div className="flex gap-4 text-xs">
                   <span className="text-emerald-400">Pro: Produktivitas & Disiplin Naik.</span>
                   <span className="text-rose-400">Kontra: Pelanggaran Privasi & Stres Mental.</span>
                </div>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Eksplorasi Konsep</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {/* Sidebar Menu */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
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
                <span className="font-semibold">{topic.title}</span>
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
  const [activeSim, setActiveSim] = useState('trolley');
  
  // Trolley Logic
  const [trolleyDecision, setTrolleyDecision] = useState<string | null>(null); // null, 'straight', 'switch'
  
  // Bias Logic
  const [candidate, setCandidate] = useState({ gender: 'Laki-laki', gpa: 3.8, exp: 5 });
  const [aiScore, setAiScore] = useState<string | null>(null);
  
  const calculateBias = () => {
    // Simulasi Bias: Jika Wanita, skor dikurangi secara tidak adil untuk mendemonstrasikan bias sejarah (Amazon case)
    let baseScore = (candidate.gpa * 10) + (candidate.exp * 5);
    if (candidate.gender === 'Perempuan') {
      baseScore -= 20; // Penalty bias tersembunyi
    }
    setAiScore(baseScore.toFixed(1));
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Laboratorium Dilema Etis</h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setActiveSim('trolley')}
            className={`px-6 py-2 rounded-full font-medium transition ${activeSim === 'trolley' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
          >
            Masalah Kereta (Trolley)
          </button>
          <button 
            onClick={() => setActiveSim('bias')}
            className={`px-6 py-2 rounded-full font-medium transition ${activeSim === 'bias' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}
          >
            Bias Perekrutan (Amazon Case)
          </button>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur rounded-3xl shadow-xl overflow-hidden border border-slate-700">
          
          {/* TROLLEY PROBLEM SIMULATION */}
          {activeSim === 'trolley' && (
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white"><AlertTriangle className="text-red-500" /> Skenario: Rem Mobil Blong</h3>
              <p className="text-slate-300 mb-6">Kamu adalah pemrogram Mobil Otonom. Rem mobil blong di kecepatan tinggi. Kamu harus memprogram keputusan AI sekarang.</p>
              
              <div className="relative h-64 bg-slate-700 rounded-xl mb-6 overflow-hidden flex items-center justify-center border-4 border-slate-600">
                {/* Visual Representation Simplifikasi */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-20 h-12 bg-blue-600 rounded shadow-lg text-white text-xs flex items-center justify-center z-20 font-bold border-2 border-blue-400">
                  Mobil Anda
                </div>
                
                {/* Tracks */}
                <div className="absolute w-full h-12 bg-slate-500 top-1/2 -translate-y-1/2 border-y-2 border-dashed border-slate-400"></div>
                
                {/* Victims */}
                <div className="absolute right-20 top-1/2 -translate-y-1/2 flex gap-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="w-6 h-6 bg-red-500 rounded-full mx-1 shadow-lg animate-pulse" title="Pejalan Kaki"></div>)}
                </div>
                
                {/* Wall option visualization (implicit for switch) */}
                <div className="absolute right-10 bottom-4 text-xs text-slate-400">
                   Jalur Bawah: Tembok Beton
                </div>

                {trolleyDecision && (
                   <div className="absolute inset-0 bg-slate-900/95 z-30 flex items-center justify-center flex-col text-white p-6 text-center animate-[fadeIn_0.5s]">
                     <h4 className="text-2xl font-bold mb-2">{trolleyDecision === 'straight' ? 'Utilitarianisme (Jumlah)' : 'Deontologi (Aturan)?'}</h4>
                     <p className="text-slate-300 mb-4 max-w-lg">
                       {trolleyDecision === 'straight' 
                         ? 'Anda memilih menabrak 5 orang pejalan kaki. Anda melanggar aturan lalu lintas, tapi menyelamatkan diri sendiri (penumpang).' 
                         : 'Anda membanting setir ke tembok beton. Penumpang (Anda) meninggal, tapi 5 nyawa pejalan kaki selamat.'}
                     </p>
                     <button onClick={() => setTrolleyDecision(null)} className="px-4 py-2 bg-amber-500 text-slate-900 rounded font-bold hover:bg-amber-400">Reset Simulasi</button>
                   </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setTrolleyDecision('straight')}
                  className="p-4 bg-slate-800 hover:bg-red-900/30 border-2 border-slate-600 hover:border-red-500 rounded-xl transition text-center group"
                >
                  <span className="block font-bold text-lg mb-1 text-white group-hover:text-red-400">Opsi A: Lurus Terus</span>
                  <span className="text-sm text-slate-400">Menabrak 5 pejalan kaki yang melanggar lampu merah.</span>
                </button>
                <button 
                  onClick={() => setTrolleyDecision('switch')}
                  className="p-4 bg-slate-800 hover:bg-slate-700 border-2 border-slate-600 hover:border-slate-400 rounded-xl transition text-center group"
                >
                  <span className="block font-bold text-lg mb-1 text-white group-hover:text-slate-300">Opsi B: Banting Setir</span>
                  <span className="text-sm text-slate-400">Menabrak tembok beton. Membunuh 1 penumpang (Taat Aturan).</span>
                </button>
              </div>
            </div>
          )}

          {/* BIAS SIMULATION */}
          {activeSim === 'bias' && (
            <div className="p-8">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white"><Scale className="text-blue-500" /> Simulasi CV Screening (Kasus Amazon)</h3>
               <p className="text-slate-300 mb-6">Sistem ini dilatih dengan data lamaran kerja 10 tahun lalu yang didominasi Pria. Coba lihat bagaimana AI menilai kandidat.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-slate-300">Jenis Kelamin</label>
                      <select 
                        className="w-full p-2 border border-slate-600 bg-slate-900 text-white rounded focus:border-amber-500 outline-none"
                        value={candidate.gender}
                        onChange={(e) => setCandidate({...candidate, gender: e.target.value})}
                      >
                        <option>Laki-laki</option>
                        <option>Perempuan</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-slate-300">IPK (0-4.0)</label>
                      <input 
                        type="number" step="0.1" max="4"
                        className="w-full p-2 border border-slate-600 bg-slate-900 text-white rounded focus:border-amber-500 outline-none"
                        value={candidate.gpa}
                        onChange={(e) => setCandidate({...candidate, gpa: parseFloat(e.target.value)})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1 text-slate-300">Pengalaman Kerja (Tahun)</label>
                      <input 
                        type="number"
                        className="w-full p-2 border border-slate-600 bg-slate-900 text-white rounded focus:border-amber-500 outline-none"
                        value={candidate.exp}
                        onChange={(e) => setCandidate({...candidate, exp: parseInt(e.target.value)})}
                      />
                    </div>
                    <button 
                      onClick={calculateBias}
                      className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                    >
                      Proses CV dengan AI
                    </button>
                 </div>

                 <div className="flex flex-col items-center justify-center bg-slate-900 rounded-xl p-6 border border-slate-700">
                    {aiScore ? (
                      <div className="text-center animate-[fadeIn_0.5s]">
                        <span className="text-sm text-slate-500 uppercase tracking-widest">Skor Kandidat</span>
                        <div className={`text-6xl font-black my-4 ${Number(aiScore) > 60 ? 'text-green-500' : 'text-rose-500'}`}>
                          {aiScore}
                        </div>
                        <div className="bg-slate-800 p-4 rounded text-left text-sm shadow-sm border border-red-500/30">
                          <p className="font-bold text-red-400 mb-1 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Deteksi Bias Historis:</p>
                          <p className="text-slate-300">
                            Algoritma ini memberikan penalti skor (-20) jika pelamar adalah <strong>Wanita</strong>, meskipun IPK dan Pengalaman sama tinggi. 
                            <br/><br/>
                            <em className="text-slate-400 block mt-2 border-t border-slate-700 pt-2">"Ini terjadi karena AI belajar dari pola masa lalu bahwa karyawan sukses mayoritas adalah Pria."</em>
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="text-slate-500 text-center">
                        <Cpu className="w-16 h-16 mx-auto mb-2 opacity-30" />
                        <p>Masukkan data CV pelamar di sebelah kiri.</p>
                      </div>
                    )}
                 </div>
               </div>
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
            <h2 className="text-3xl font-bold">Arena Diskusi & LKPD</h2>
            <p className="text-amber-400 mt-2 font-medium">Studi Kasus: Social Scoring di Tempat Kerja</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Timer Section */}
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-slate-300 mb-4">Pengatur Waktu Diskusi</h3>
                <div className="text-7xl font-mono font-black text-white mb-6">
                  {formatTime(timer)}
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsRunning(!isRunning)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition ${isRunning ? 'bg-amber-900/50 text-amber-500 border border-amber-500' : 'bg-green-600 text-white hover:bg-green-500'}`}
                  >
                    {isRunning ? <Pause /> : <Play />}
                  </button>
                  <button 
                    onClick={() => { setIsRunning(false); setTimer(180); }}
                    className="w-14 h-14 rounded-full bg-slate-700 text-slate-300 flex items-center justify-center hover:bg-slate-600 transition"
                  >
                    <RotateCcw />
                  </button>
                </div>
              </div>

              {/* Case Prompt */}
              <div className="space-y-4">
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                   <h4 className="font-bold text-white mb-2 flex items-center gap-2"><Eye className="text-blue-400"/> Kasus Nyata</h4>
                   <p className="text-sm text-slate-300 leading-relaxed">
                     "Sebuah pabrik memasang CCTV AI yang bisa mengukur ekspresi wajah karyawan (senyum/cemberut) dan menghitung durasi ke toilet hingga detik. Data ini dipakai untuk menentukan bonus bulanan."
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-emerald-900/20 p-3 rounded border border-emerald-500/30">
                      <h5 className="font-bold text-emerald-400 text-sm mb-1">Tim Pro (Bos)</h5>
                      <p className="text-xs text-slate-400">"Ini demi produktivitas! Karyawan jadi disiplin dan tidak malas-malasan."</p>
                   </div>
                   <div className="bg-rose-900/20 p-3 rounded border border-rose-500/30">
                      <h5 className="font-bold text-rose-400 text-sm mb-1">Tim Kontra (Karyawan)</h5>
                      <p className="text-xs text-slate-400">"Ini pelanggaran privasi berat! Kami manusia, bukan robot yang harus senyum terus."</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Reflection Prompt */}
            <div className="border-t border-slate-700 pt-8 bg-slate-900/30 -mx-8 -mb-8 p-8">
              <h3 className="text-xl font-bold text-white mb-2">Lembar Kerja: Cari Dasar Hukum</h3>
              <p className="text-slate-400 text-sm mb-4">Gunakan smartphone kalian untuk mencari pasal di <strong>UU Ketenagakerjaan</strong> atau <strong>UU PDP</strong> yang relevan dengan kasus di atas.</p>
              <textarea placeholder="Tulis hasil temuan kelompokmu di sini..." className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-amber-500 h-24 text-sm"></textarea>
            </div>
          </div>
        </div>
    </div>
  );
};

// 5. KUIS & REFLEKSI SECTION
const KuisSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Konsep 'Garbage In, Garbage Out' dalam AI berarti...",
      opts: [
        "AI bisa mendaur ulang sampah elektronik.",
        "Jika data latih mengandung prasangka (sampah), maka keputusan AI juga akan bias.",
        "Komputer akan rusak jika memorinya penuh sampah.",
        "AI tidak membutuhkan data manusia."
      ],
      a: 1
    },
    {
      q: "Apa bahaya utama dari teknologi Deepfake Voice Cloning?",
      opts: [
        "Membuat penyanyi kehilangan pekerjaan.",
        "Penipuan telepon yang meniru suara anak/keluarga meminta tebusan.",
        "Kualitas suara telepon menjadi jernih.",
        "Baterai HP cepat habis."
      ],
      a: 1
    },
    {
      q: "Undang-Undang di Indonesia yang melindungi privasi data warga negara adalah...",
      opts: [
        "UU Lalu Lintas",
        "KUHP",
        "UU PDP (Perlindungan Data Pribadi)",
        "UU Cipta Kerja"
      ],
      a: 2
    },
    {
      q: "Apa itu 'Consent' dalam etika data?",
      opts: [
        "Persetujuan yang diberikan pemilik data secara sadar sebelum datanya diambil.",
        "Kabel untuk transfer data.",
        "Nama sensor kamera AI.",
        "Proses menghapus data otomatis."
      ],
      a: 0
    }
  ];

  const handleAnswer = (idx: number) => {
    if (idx === questions[currentQ].a) {
      setScore(score + 25);
    }
    
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
      
      {/* Journaling Section (Mindfulness) */}
      <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700 mb-12">
         <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><FileText className="text-amber-400"/> Lembar Refleksi (Journaling)</h3>
         <p className="text-slate-300 italic mb-6 text-sm">"Ambil napas sejenak. Jawablah untuk dirimu sendiri."</p>
         
         <div className="space-y-4">
            <div>
               <label className="block text-slate-400 text-sm mb-2">1. Apakah kamu merasa caramu menggunakan media sosial sudah aman?</label>
               <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 outline-none"/>
            </div>
            <div>
               <label className="block text-slate-400 text-sm mb-2">2. Jika kamu jadi programmer AI, prinsip etika apa yang akan kamu pegang teguh?</label>
               <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded p-3 text-white focus:border-amber-500 outline-none"/>
            </div>
         </div>
      </div>

      {/* Quiz Section */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-6 rounded-t-2xl text-white text-center">
           <h2 className="text-2xl font-bold">Evaluasi Pemahaman</h2>
        </div>
        
        <div className="bg-slate-800 p-8 rounded-b-2xl border-x border-b border-slate-700 shadow-xl">
            {!showResult ? (
              <div>
                <div className="flex justify-between text-sm text-slate-400 mb-4 font-bold uppercase tracking-wider">
                  <span>Soal {currentQ + 1} dari {questions.length}</span>
                  <span>Skor Sementara: {score}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-6 leading-relaxed">{questions[currentQ].q}</h3>
                
                <div className="space-y-3">
                  {questions[currentQ].opts.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className="w-full text-left p-4 rounded-xl border border-slate-600 hover:border-amber-500 hover:bg-amber-500/10 transition font-medium text-slate-300 hover:text-white"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center animate-[fadeIn_0.5s]">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Selesai!</h3>
                <p className="text-slate-400 mb-6">Skor Akhir Anda:</p>
                <div className="text-6xl font-black text-white mb-8">{score}</div>
                
                <p className="text-sm text-slate-400 mb-8 italic">
                  {score === 100 ? "\"Kamu telah menjadi Tuan dari Teknologi!\"" : "\"Teruslah belajar menjadi pengguna bijak.\""}
                </p>
                
                <button onClick={resetQuiz} className="px-8 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-500 transition">
                  Ulangi Kuis
                </button>
              </div>
            )}
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
      {/* Navigation */}
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'materi' && <MateriSection />}
        {activePage === 'simulasi' && <SimulasiSection />}
        {activePage === 'debat' && <DebatSection />}
        {activePage === 'kuis' && <KuisSection />}
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