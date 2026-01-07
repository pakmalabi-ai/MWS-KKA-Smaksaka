import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  BookOpen, 
  Search, 
  CheckCircle, 
  AlertTriangle, 
  Ghost, 
  Scale, 
  Leaf, 
  Lightbulb, 
  Gamepad2, 
  Database, 
  ArrowRight, 
  X, 
  Minus,
  ShieldAlert,
  HelpCircle,
  Bird,
  BarChart2,
  ScanEye,
  UserCheck
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div className="bg-gradient-to-br from-sky-500 to-indigo-600 p-1.5 rounded-lg shadow-lg shadow-sky-500/20">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 8</h1>
          <p className="text-[10px] text-sky-400 font-medium hidden sm:block">Evaluasi AI</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: 'home', label: 'Beranda', icon: Brain },
          { id: 'materi', label: 'Materi', icon: BookOpen },
          { id: 'simulasi', label: 'Lab Evaluasi', icon: Search },
          { id: 'kuis', label: 'Kuis', icon: CheckCircle },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20' 
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
       <div className="inline-block px-4 py-1 rounded-full bg-sky-900/30 text-sky-400 text-sm font-medium mb-6 border border-sky-800">
        Topik: Menjadi Pengguna AI yang Kritis dan Beretika
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
        Apakah Asisten Digital Kita <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">Selalu Jujur?</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Banyak yang mengira AI itu "Ensiklopedia Pintar". Padahal, AI Generatif lebih mirip 
        <strong className="text-sky-400"> "Burung Beo yang Sangat Cerdas"</strong>. 
        Ia pandai meniru bicara, tapi tidak selalu paham kebenaran.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-12">
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-800/80 transition duration-300 group">
          <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
            <Bird className="text-sky-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Cara Kerja</h3>
            <p className="text-slate-400 text-sm">Memahami konsep "Next Token Prediction" (Probabilitas vs Kebenaran).</p>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-800/80 transition duration-300 group">
          <div className="w-12 h-12 bg-rose-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
            <Ghost className="text-rose-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Halusinasi</h3>
            <p className="text-slate-400 text-sm">Mewaspadai Fabrikasi (ngarang) dan Konflasi (fakta tercampur).</p>
          </div>
        </div>
        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:bg-slate-800/80 transition duration-300 group">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
            <UserCheck className="text-emerald-400" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold mb-2 text-white">Human-in-the-Loop</h3>
            <p className="text-slate-400 text-sm">Menjadi "Supervisor" bagi AI, bukan sekadar pengguna pasif.</p>
          </div>
        </div>
      </div>

      <button onClick={() => setPage('materi')} className="group flex items-center gap-2 bg-sky-600 text-white px-8 py-4 rounded-full font-bold hover:bg-sky-500 transition shadow-lg shadow-sky-600/20 transform hover:-translate-y-1">
        Mulai Belajar <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
      </button>
    </div>
  </section>
);

// 2. MATERI SECTION
const MateriSection = ({ setPage }: { setPage: (p: string) => void }) => {
  const [tab, setTab] = useState(0);

  const tabs = [
    { title: "1. Cara AI Berpikir", icon: <Brain size={18}/> },
    { title: "2. Halusinasi", icon: <Ghost size={18}/> },
    { title: "3. Bias & Etika", icon: <Scale size={18}/> },
    { title: "4. Metode S.A.R.I.N.G", icon: <ShieldAlert size={18}/> }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((t, i) => (
                <button 
                    key={i} 
                    onClick={() => setTab(i)}
                    className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold transition-all ${tab === i ? 'bg-sky-600 text-white shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                >
                    {t.icon} {t.title}
                </button>
            ))}
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 min-h-[400px]">
            {/* TAB 1: CARA KERJA */}
            {tab === 0 && (
                <div className="animate-[fadeIn_0.3s]">
                    <h2 className="text-3xl font-bold text-white mb-4">Bukan Memahami, Tapi Memprediksi</h2>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        Prinsip kerja LLM (Large Language Model) adalah <strong className="text-sky-400">Next Token Prediction</strong>. 
                        Bayangkan fitur <em>Autocorrect</em> di HP Anda, tapi jutaan kali lebih canggih.
                    </p>
                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6">
                        <p className="text-sm text-slate-400 mb-2 uppercase font-bold">Analogi Sederhana:</p>
                        <p className="text-xl text-white mb-4">"Ibu kota Indonesia adalah..."</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-right text-emerald-400 font-mono">Jakarta</div>
                                <div className="flex-1 bg-slate-800 rounded-full h-4 overflow-hidden">
                                    <div className="bg-emerald-500 h-full w-[90%]"></div>
                                </div>
                                <div className="w-12 text-xs text-slate-400">90%</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-right text-amber-400 font-mono">Nusantara</div>
                                <div className="flex-1 bg-slate-800 rounded-full h-4 overflow-hidden">
                                    <div className="bg-amber-500 h-full w-[4%]"></div>
                                </div>
                                <div className="w-12 text-xs text-slate-400">4%</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-4 italic">
                            *AI memilih "Jakarta" bukan karena dia tahu fakta geografi terbaru, tapi karena dalam miliaran data latihnya, kata "Jakarta" paling sering muncul setelah frasa tersebut.
                        </p>
                    </div>
                </div>
            )}

            {/* TAB 2: HALUSINASI */}
            {tab === 1 && (
                <div className="animate-[fadeIn_0.3s]">
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                        <Ghost className="text-rose-400"/> Fenomena Halusinasi AI
                    </h2>
                    <p className="text-slate-300 mb-6">
                        Halusinasi adalah ketika AI menghasilkan respons yang terdengar <strong className="text-white">percaya diri dan logis</strong>, tetapi informasinya <strong className="text-rose-400">fiktif atau salah</strong>.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-900 p-5 rounded-xl border-l-4 border-rose-500">
                            <h3 className="text-lg font-bold text-white mb-2">1. Fabrikasi Fakta (Ngarang)</h3>
                            <p className="text-sm text-slate-400 mb-2">Mengarang data yang sama sekali tidak ada.</p>
                            <div className="bg-rose-900/20 p-3 rounded text-xs text-rose-200 italic">
                                "Contoh: Meminta AI menulis biografi siswa SMK biasa, AI malah menuliskan prestasi internasional fiktif agar terlihat bagus."
                            </div>
                        </div>
                        <div className="bg-slate-900 p-5 rounded-xl border-l-4 border-orange-500">
                            <h3 className="text-lg font-bold text-white mb-2">2. Konflasi (Campur Aduk)</h3>
                            <p className="text-sm text-slate-400 mb-2">Menggabungkan dua fakta benar menjadi satu kesimpulan salah.</p>
                            <div className="bg-orange-900/20 p-3 rounded text-xs text-orange-200 italic">
                                "Contoh: Ir. Soekarno adalah penemu lampu pijar. (Salah menggabungkan Tokoh Proklamator dengan Thomas Edison)."
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 bg-slate-900 p-4 rounded-lg border border-slate-700">
                        <h4 className="font-bold text-white text-sm mb-1">Studi Kasus Nyata: Pengacara & ChatGPT (2023)</h4>
                        <p className="text-xs text-slate-400">Seorang pengacara menggunakan ChatGPT untuk mencari kasus hukum. ChatGPT memberikan nama kasus yang terdengar sangat meyakinkan ("Varghese v. China Southern Airlines"), padahal kasus itu <strong className="text-white">TIDAK PERNAH ADA</strong>. Pengacara tersebut akhirnya didenda.</p>
                    </div>
                </div>
            )}

            {/* TAB 3: BIAS & ETIKA */}
            {tab === 2 && (
                <div className="animate-[fadeIn_0.3s]">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Bias Algoritma</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                AI tidak punya hati, tapi bisa rasis atau seksis karena <strong className="text-white">Data Latihnya berasal dari Manusia</strong>.
                            </p>
                            <ul className="space-y-3">
                                <li className="bg-slate-900 p-3 rounded border border-slate-700 text-sm text-slate-300">
                                    <strong className="text-sky-400 block">Bias Gender:</strong>
                                    Dokter = "Dia (Laki-laki)", Perawat = "Dia (Perempuan)".
                                </li>
                                <li className="bg-slate-900 p-3 rounded border border-slate-700 text-sm text-slate-300">
                                    <strong className="text-sky-400 block">Bias Representasi:</strong>
                                    CEO atau Orang Sukses sering digambarkan sebagai pria kulit putih.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Etika: Human-in-the-Loop</h3>
                            <p className="text-slate-300 text-sm mb-4">
                                Teknologi terbaik bukanlah "AI menggantikan Manusia", melainkan "Manusia + AI".
                            </p>
                            <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-xl">
                                <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2"><UserCheck size={16}/> Tanggung Jawab Siswa:</h4>
                                <ul className="list-disc list-inside text-xs text-emerald-100 space-y-1">
                                    <li><strong>Jangan Plagiat:</strong> Mengaku tulisan AI sebagai karya sendiri itu tidak etis.</li>
                                    <li><strong>Transparansi:</strong> Sampaikan jika tugasmu dibantu AI.</li>
                                    <li><strong>Verifikasi:</strong> Jangan sebar konten AI tanpa cek fakta (Stop Hoaks).</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* TAB 4: SARING */}
            {tab === 3 && (
                <div className="animate-[fadeIn_0.3s]">
                    <h2 className="text-3xl font-bold text-center mb-6 text-white">Metode S.A.R.I.N.G</h2>
                    <p className="text-center text-slate-400 mb-8">Jadilah Detektif Digital. Terapkan prinsip <em>"Trust, but Verify"</em>.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {[
                            { l: 'S', t: 'Sumber', d: 'Apakah ada tautan/link sumber yang valid? Cek manual di Google.' },
                            { l: 'A', t: 'Akurasi', d: 'Cek silang data angka, tanggal, dan nama lokasi.' },
                            { l: 'R', t: 'Relevansi', d: 'Apakah jawaban sesuai konteks? Hati-hati jawaban berputar-putar.' },
                            { l: 'I', t: 'Independensi', d: 'Cek Bias. Apakah bahasanya netral atau memojokkan kelompok tertentu?' },
                            { l: 'N', t: 'Nalar', d: 'Gunakan Logika (Common Sense). Gajah tidak bisa terbang dengan telinga.' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-sky-500 transition duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-sky-900/50 text-sky-400 font-bold text-xl flex items-center justify-center mb-3 group-hover:bg-sky-600 group-hover:text-white transition">
                                    {item.l}
                                </div>
                                <h4 className="font-bold text-white mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

// 3. SIMULASI SECTION
const SimulasiSection = () => {
  const [mode, setMode] = useState<'visualizer' | 'detective'>('visualizer');

  // --- SUB-COMPONENT: Visualizer ---
  const ProbabilityVisualizer = () => {
      const [inputStep, setInputStep] = useState(0);
      const steps = [
          { text: "Saya", probs: [{w: "suka", p: 40}, {w: "makan", p: 30}, {w: "pergi", p: 20}] },
          { text: "Saya suka", probs: [{w: "nasi", p: 60}, {w: "belajar", p: 25}, {w: "tidur", p: 10}] },
          { text: "Saya suka nasi", probs: [{w: "goreng", p: 85}, {w: "padang", p: 10}, {w: "kuning", p: 5}] },
          { text: "Saya suka nasi goreng", probs: [{w: ".", p: 90}, {w: "pedas", p: 8}, {w: "enak", p: 2}] }
      ];

      return (
          <div className="max-w-2xl mx-auto">
              <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 mb-6 text-center">
                  <h3 className="text-white font-bold mb-4">Mesin Prediksi Kata (Next Token Prediction)</h3>
                  <div className="text-2xl font-mono text-sky-400 bg-black/30 p-4 rounded-lg mb-6 min-h-[4rem] flex items-center justify-center">
                      "{steps[inputStep]?.text || "..."}"
                      <span className="animate-pulse ml-1">|</span>
                  </div>
                  
                  {inputStep < steps.length && (
                      <div className="space-y-3">
                          <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Probabilitas Kata Selanjutnya:</p>
                          {steps[inputStep].probs.map((prob, idx) => (
                              <button 
                                key={idx}
                                onClick={() => setInputStep(prev => Math.min(prev + 1, steps.length))}
                                className="w-full relative group"
                              >
                                  <div className="flex items-center gap-3 relative z-10 p-2 hover:bg-slate-800 rounded transition">
                                      <div className="w-24 text-right font-bold text-slate-300 group-hover:text-white">
                                          "{prob.w}"
                                      </div>
                                      <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                          <div className="h-full bg-sky-500 transition-all duration-500" style={{ width: `${prob.p}%` }}></div>
                                      </div>
                                      <div className="w-12 text-xs text-slate-400">{prob.p}%</div>
                                  </div>
                              </button>
                          ))}
                      </div>
                  )}
                  {inputStep === steps.length && (
                      <div className="text-emerald-400 font-bold py-4">
                          Kalimat Selesai! <br/>
                          <span className="text-xs text-slate-400 font-normal">AI menyusun ini kata demi kata berdasarkan statistik.</span>
                          <button onClick={() => setInputStep(0)} className="block mx-auto mt-4 text-xs underline text-slate-500 hover:text-white">Ulangi</button>
                      </div>
                  )}
              </div>
              <p className="text-xs text-slate-400 text-center italic">
                  "Inilah mengapa AI bisa berhalusinasi. Jika data latihnya salah, prediksi probabilitasnya juga akan mengarah ke kata yang salah (namun terlihat meyakinkan)."
              </p>
          </div>
      );
  }

  // --- SUB-COMPONENT: Detective ---
  const HallucinationDetector = () => {
      const caseData = [
          {
              id: 1,
              title: "Biografi Siswa",
              aiText: "Budi adalah siswa SMK N 1 Kaligondang. Pada tahun 2024, ia memenangkan Medali Emas Olimpiade Matematika Internasional di London dan bertemu Raja Charles.",
              errorType: "Fabrikasi",
              correction: "Budi adalah siswa biasa. Prestasi internasional itu dikarang total oleh AI agar cerita tampak menarik.",
              options: ["Fakta Valid", "Fabrikasi (Ngarang)", "Bias Gender"]
          },
          {
              id: 2,
              title: "Sejarah Lampu",
              aiText: "Thomas Edison adalah pahlawan nasional Indonesia yang memproklamasikan kemerdekaan dan menemukan lampu pijar.",
              errorType: "Konflasi",
              correction: "AI mencampuradukkan fakta Ir. Soekarno (Proklamator) dengan Thomas Edison (Penemu Lampu).",
              options: ["Konflasi (Campur Aduk)", "Bias Representasi", "Fakta Valid"]
          },
          {
              id: 3,
              title: "Deskripsi Profesi",
              aiText: "Seorang CEO memimpin rapat. Dia (Laki-laki) marah kepada sekretarisnya. Dia (Perempuan) menangis di pojok ruangan.",
              errorType: "Bias",
              correction: "AI mengasumsikan CEO = Pria dan Sekretaris = Wanita. Ini adalah Bias Gender/Stereotip.",
              options: ["Fabrikasi", "Bias Stereotip", "Konflasi"]
          }
      ];

      const [currentCase, setCurrentCase] = useState(0);
      const [feedback, setFeedback] = useState<null | {correct: boolean, msg: string}>(null);

      const checkAnswer = (answer: string) => {
          const isCorrect = answer.includes(caseData[currentCase].errorType) || 
                            (caseData[currentCase].errorType === "Bias" && answer.includes("Bias"));
          
          if (isCorrect) {
              setFeedback({ correct: true, msg: "Tepat! " + caseData[currentCase].correction });
          } else {
              setFeedback({ correct: false, msg: "Kurang tepat. Coba analisis lagi jenis kesalahannya." });
          }
      };

      const nextCase = () => {
          setFeedback(null);
          setCurrentCase(prev => (prev + 1) % caseData.length);
      };

      return (
          <div className="max-w-3xl mx-auto">
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
                  <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          <Search className="text-amber-400"/> Detektif Fakta (Supervisor)
                      </h3>
                      <span className="text-xs bg-slate-700 px-3 py-1 rounded text-slate-300">
                          Kasus {currentCase + 1}/{caseData.length}
                      </span>
                  </div>

                  <div className="bg-black/30 p-6 rounded-xl border-l-4 border-indigo-500 mb-6">
                      <h4 className="text-indigo-300 text-xs font-bold uppercase mb-2">Output AI: {caseData[currentCase].title}</h4>
                      <p className="text-lg text-slate-200 font-serif leading-relaxed">"{caseData[currentCase].aiText}"</p>
                  </div>

                  {!feedback ? (
                      <div>
                          <p className="text-sm text-slate-400 mb-3 text-center">Apa jenis kesalahan AI di atas?</p>
                          <div className="grid grid-cols-3 gap-3">
                              {caseData[currentCase].options.map((opt, i) => (
                                  <button 
                                    key={i} 
                                    onClick={() => checkAnswer(opt)}
                                    className="py-3 px-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-bold text-white transition"
                                  >
                                      {opt}
                                  </button>
                              ))}
                          </div>
                      </div>
                  ) : (
                      <div className={`p-4 rounded-xl border ${feedback.correct ? 'bg-emerald-900/20 border-emerald-500' : 'bg-rose-900/20 border-rose-500'} animate-[fadeIn_0.3s]`}>
                          <div className="flex items-start gap-3">
                              {feedback.correct ? <CheckCircle className="text-emerald-400 shrink-0"/> : <X className="text-rose-400 shrink-0"/>}
                              <div>
                                  <h4 className={`font-bold ${feedback.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                                      {feedback.correct ? "Analisis Benar!" : "Salah Identifikasi"}
                                  </h4>
                                  <p className="text-sm text-slate-300 mt-1">{feedback.msg}</p>
                                  {feedback.correct && (
                                      <button onClick={nextCase} className="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-xs text-white">
                                          Kasus Berikutnya
                                      </button>
                                  )}
                                  {!feedback.correct && (
                                      <button onClick={() => setFeedback(null)} className="mt-4 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-xs text-white">
                                          Coba Lagi
                                      </button>
                                  )}
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <div className="text-center mb-8">
           <h2 className="text-3xl font-bold text-white mb-4">Laboratorium Simulasi</h2>
           <div className="flex justify-center gap-4">
               <button 
                 onClick={() => setMode('visualizer')}
                 className={`px-6 py-2 rounded-full font-bold transition ${mode === 'visualizer' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}
               >
                   1. Mesin Prediksi (Konsep)
               </button>
               <button 
                 onClick={() => setMode('detective')}
                 className={`px-6 py-2 rounded-full font-bold transition ${mode === 'detective' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}
               >
                   2. Detektif Halusinasi (Praktek)
               </button>
           </div>
        </div>

        {mode === 'visualizer' && <ProbabilityVisualizer />}
        {mode === 'detective' && <HallucinationDetector />}
    </div>
  );
};

// 4. KUIS SECTION
const KuisSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    {
      id: 1,
      q: "Apa prinsip utama cara kerja AI Generatif (LLM) dalam menghasilkan teks?",
      options: [
        { id: 'a', text: "Mencari fakta kebenaran mutlak di database." },
        { id: 'b', text: "Next Token Prediction (Memprediksi kata selanjutnya berdasarkan probabilitas)." },
        { id: 'c', text: "Bertanya kepada manusia secara langsung." }
      ],
      correct: 'b'
    },
    {
      id: 2,
      q: "Ketika AI menggabungkan dua fakta yang benar menjadi satu kesimpulan yang salah (Misal: Soekarno penemu lampu), ini disebut...",
      options: [
        { id: 'a', text: "Fabrikasi" },
        { id: 'b', text: "Konflasi" },
        { id: 'c', text: "Akurasi" }
      ],
      correct: 'b'
    },
    {
      id: 3,
      q: "Apa yang dimaksud dengan konsep 'Human-in-the-Loop'?",
      options: [
        { id: 'a', text: "Manusia harus selalu mengawasi, memverifikasi, dan mengedit hasil AI." },
        { id: 'b', text: "Manusia dilarang menggunakan AI sama sekali." },
        { id: 'c', text: "Manusia menyerahkan seluruh keputusan kepada AI." }
      ],
      correct: 'a'
    },
    {
      id: 4,
      q: "Mengapa AI bisa memiliki bias (seperti menganggap Dokter selalu Pria)?",
      options: [
        { id: 'a', text: "Karena AI membenci wanita." },
        { id: 'b', text: "Karena data latih dari internet mencerminkan stereotip manusia (Garbage In, Garbage Out)." },
        { id: 'c', text: "Karena AI rusak." }
      ],
      correct: 'b'
    }
  ];

  const handleSelect = (qid: number, optId: string) => {
      setAnswers(prev => ({...prev, [qid]: optId}));
  }

  const checkQuiz = () => {
      let currentScore = 0;
      questions.forEach(q => {
          if(answers[q.id] === q.correct) currentScore += 25;
      });
      setScore(currentScore);
      setShowResult(true);
  }

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center animate-[fadeIn_0.5s] min-h-[60vh]">
        <div className="max-w-2xl w-full bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">Uji Pemahaman</h2>
            
            {!showResult ? (
                <div className="space-y-8">
                    {questions.map((q, idx) => (
                        <div key={q.id}>
                            <p className="font-semibold text-lg mb-4 text-white">{idx + 1}. {q.q}</p>
                            <div className="space-y-3">
                                {q.options.map((opt) => (
                                    <button 
                                        key={opt.id}
                                        onClick={() => handleSelect(q.id, opt.id)}
                                        className={`w-full text-left p-4 rounded-xl border transition-all ${
                                            answers[q.id] === opt.id 
                                            ? 'bg-sky-600 border-sky-500 text-white' 
                                            : 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300'
                                        }`}
                                    >
                                        {opt.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button 
                        onClick={checkQuiz}
                        disabled={Object.keys(answers).length < questions.length}
                        className="w-full py-3 bg-sky-600 rounded-lg font-bold text-white hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                        Lihat Nilai
                    </button>
                </div>
            ) : (
                <div className="text-center animate-[fadeIn_0.5s]">
                    <div className="text-6xl mb-4">
                        {score === 100 ? "🎉" : score >= 75 ? "👍" : "📚"}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Nilai Anda: {score}</h3>
                    <p className="text-slate-400 mb-6">
                        {score === 100 ? "Sempurna! Anda siap menjadi pengguna AI yang kritis." : "Masih perlu belajar lagi tentang jenis halusinasi AI."}
                    </p>
                    <button onClick={() => window.location.reload()} className="px-6 py-2 border border-slate-500 rounded-full hover:bg-slate-800 text-slate-300 transition">
                        Ulangi Pelajaran
                    </button>
                </div>
            )}
        </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi8: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="text-slate-200 font-sans selection:bg-sky-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'materi' && <MateriSection setPage={setActivePage} />}
        {activePage === 'simulasi' && <SimulasiSection />}
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

export default Materi8;