import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Brain, 
  Code, 
  Lightbulb, 
  Users, 
  CheckCircle, 
  Award, 
  ChevronRight, 
  Cpu, 
  Search, 
  MessageSquare,
  ArrowRight,
  Wrench,
  Utensils,
  Palette,
  Calculator,
  Hammer,
  Car,
  FileText,
  Smile,
  Hand,
  Factory
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  
  const navItems = [
    { id: 'home', label: 'Beranda', icon: BookOpen },
    { id: 'materi', label: 'Materi', icon: Brain },
    { id: 'simulasi', label: 'Studio Inovasi', icon: Code },
    { id: 'refleksi', label: 'Refleksi', icon: FileText },
    { id: 'evaluasi', label: 'Evaluasi', icon: CheckCircle },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
      <div className="container mx-auto h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-amber-500 p-1.5 rounded-lg text-slate-900">
            <Cpu size={16} />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 9</h1>
            <p className="text-[10px] text-amber-400 font-medium hidden sm:block">Design Thinking AI</p>
          </div>
        </div>

        <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === item.id 
                  ? 'bg-amber-500 text-slate-900 shadow-md shadow-amber-500/20' 
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
};

// --- VIEWS ---

const HomeView = ({ onStart }: { onStart: () => void }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 mb-8">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-600 text-amber-400 text-xs font-bold mb-6 tracking-widest uppercase">
          Untuk SMK Kelas X - Semua Jurusan
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          Inovasi Cerdas dengan <br/> <span className="text-amber-400">Design Thinking</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Halo para calon Teknisi, Desainer, Akuntan, dan Chef masa depan! <br/>
          Mari belajar bagaimana menciptakan solusi teknologi yang <strong className="text-white">berguna</strong> dan <strong className="text-white">memahami manusia</strong>.
        </p>
        <button 
          onClick={onStart}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 flex items-center mx-auto space-x-2"
        >
          <span>Mulai Belajar</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>

    {/* Values Section */}
    <section className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Mindful (Berkesadaran)", desc: "Melatih empati. Memahami masalah teman atau pelanggan di bengkel/dapur/kantor.", icon: <Brain className="text-indigo-500" size={32} /> },
          { title: "Meaningful (Bermakna)", desc: "Menciptakan alat atau sistem yang benar-benar memecahkan masalah nyata di jurusanmu.", icon: <Lightbulb className="text-amber-500" size={32} /> },
          { title: "Joyful (Menyenangkan)", desc: "Bermain dengan ide liar tanpa takut salah. Gambar sketsamu!", icon: <Award className="text-pink-500" size={32} /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl shadow-sm border border-slate-700 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors border border-slate-700">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-200 mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const MateriView = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Empathize (Empati)",
      desc: "Memahami Hati Pengguna.",
      detail: "Lakukan Observasi (Lihat teman yang kesulitan di bengkel/lab), Wawancara Mendalam (Tanya perasaan, bukan cuma Ya/Tidak), dan Immerse (Ikut merasakan lelahnya). Kuncinya: 'Deep Listening'.",
      icon: <Users className="text-blue-500" size={40} />,
      color: "border-blue-500/50 bg-blue-900/10"
    },
    {
      title: "2. Define (Definisi)",
      desc: "Menentukan Akar Masalah.",
      detail: "Gunakan Rumus POV Statement: '[PENGGUNA] membutuhkan [KEBUTUHAN] karena [INSIGHT]'. Contoh: 'Montir butuh cara cepat cari kunci pas karena pelanggan sering komplain lama'.",
      icon: <Search className="text-purple-500" size={40} />,
      color: "border-purple-500/50 bg-purple-900/10"
    },
    {
      title: "3. Ideate (Ideasi)",
      desc: "Melahirkan Ide Liar.",
      detail: "Prinsip: No Judgment & Quantity over Quality. Lakukan aktivitas 'Crazy 8s': Lipat kertas jadi 8, gambar 8 ide gila dalam 8 menit.",
      icon: <Lightbulb className="text-amber-500" size={40} />,
      color: "border-amber-500/50 bg-amber-900/10"
    },
    {
      title: "4. Prototype (Purwarupa)",
      desc: "Mewujudkan Konsep.",
      detail: "Buat Low-Fidelity (Sketsa kertas, kardus, styrofoam) atau High-Fidelity (Desain digital di Canva/Figma). Contoh: Mockup aplikasi bengkel.",
      icon: <Code className="text-emerald-500" size={40} />,
      color: "border-emerald-500/50 bg-emerald-900/10"
    },
    {
      title: "5. Testing (Uji Coba)",
      desc: "Validasi dengan Feedback Grid.",
      detail: "Uji ke teman dan catat di 4 kuadran: I Like (Apa yang disukai), Ideas (Ide baru), Questions (Apa yang membingungkan), I Wish (Kritik/Harapan).",
      icon: <MessageSquare className="text-rose-500" size={40} />,
      color: "border-rose-500/50 bg-rose-900/10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Design Thinking & AI</h2>
        <p className="text-slate-400">Metode berpikir kreatif untuk menciptakan solusi Artificial Intelligence yang berdampak.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8 mb-16">
        {/* Navigation Sidebar */}
        <div className="md:col-span-4 space-y-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                activeStep === idx 
                  ? 'bg-slate-800 text-white border-amber-500/50 shadow-lg' 
                  : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-amber-400/50 hover:bg-slate-800'
              }`}
            >
              <span className="font-semibold">{step.title}</span>
              {activeStep === idx && <ChevronRight className="text-amber-400" size={20} />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="md:col-span-8">
          <div className={`h-full p-8 rounded-2xl border-2 ${steps[activeStep].color} shadow-sm transition-all duration-500 backdrop-blur-sm`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-slate-900 p-3 rounded-full shadow-sm border border-slate-700">
                {steps[activeStep].icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-200">{steps[activeStep].title}</h3>
            </div>
            
            <p className="text-lg font-medium text-slate-300 mb-4">{steps[activeStep].desc}</p>
            <hr className="border-slate-700 my-6" />
            
            <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-700">
              <h4 className="font-bold text-slate-400 mb-2 uppercase text-sm tracking-wider">Aktivitas & Tips:</h4>
              <p className="text-slate-300 leading-relaxed">{steps[activeStep].detail}</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Capabilities Table */}
      <div className="space-y-8">
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Cpu className="text-amber-500"/> Kemampuan Dasar AI
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h4 className="font-bold text-indigo-400 mb-2">Computer Vision</h4>
              <p className="text-xs text-slate-400 mb-3">AI yang bisa "melihat".</p>
              <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
                <li>Absensi Wajah</li>
                <li>Pemilah Sampah Otomatis</li>
                <li>Deteksi Objek</li>
              </ul>
            </div>
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h4 className="font-bold text-pink-400 mb-2">NLP (Bahasa)</h4>
              <p className="text-xs text-slate-400 mb-3">AI yang bisa "membaca & mendengar".</p>
              <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
                <li>Chatbot CS</li>
                <li>Peringkas Dokumen</li>
                <li>Penerjemah Otomatis</li>
              </ul>
            </div>
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
              <h4 className="font-bold text-emerald-400 mb-2">Predictive Analytics</h4>
              <p className="text-xs text-slate-400 mb-3">AI yang bisa "memprediksi".</p>
              <ul className="text-sm text-slate-300 list-disc list-inside space-y-1">
                <li>Prediksi Stok Barang</li>
                <li>Rekomendasi Konten</li>
                <li>Prediksi Kerusakan Mesin</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vocational Examples */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-8 border border-indigo-500/30">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Factory className="text-indigo-400"/> Contoh Penerapan di Jurusanmu
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                   <div className="p-2 bg-blue-900/30 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Hammer size={18}/></div>
                   <h4 className="font-bold text-white text-sm">Teknik Mesin & Las</h4>
                </div>
                <p className="text-xs text-slate-300">Menggunakan <strong>Computer Vision</strong> untuk mendeteksi keretakan mikro pada hasil pengelasan atau potongan logam yang tidak presisi.</p>
             </div>
             
             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-red-500 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                   <div className="p-2 bg-red-900/30 rounded-lg text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors"><Car size={18}/></div>
                   <h4 className="font-bold text-white text-sm">Otomotif (TKR & TSM)</h4>
                </div>
                <p className="text-xs text-slate-300"><strong>Predictive Maintenance:</strong> AI mendengar suara mesin mobil dan memprediksi kapan busi atau oli harus diganti sebelum mogok.</p>
             </div>
             
             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                   <div className="p-2 bg-emerald-900/30 rounded-lg text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors"><Calculator size={18}/></div>
                   <h4 className="font-bold text-white text-sm">Akuntansi</h4>
                </div>
                <p className="text-xs text-slate-300"><strong>OCR & Automation:</strong> Foto kuitansi belanja, AI otomatis membaca angkanya dan memasukkan ke buku besar Excel tanpa mengetik.</p>
             </div>
             
             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                   <div className="p-2 bg-purple-900/30 rounded-lg text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Palette size={18}/></div>
                   <h4 className="font-bold text-white text-sm">DKV & Grafika</h4>
                </div>
                <p className="text-xs text-slate-300"><strong>Generative AI:</strong> Membantu brainstorming ide logo, membuat palet warna otomatis, atau mengecek plagiasi desain.</p>
             </div>

             <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-orange-500 transition-colors group md:col-span-2">
                <div className="flex items-center gap-2 mb-2">
                   <div className="p-2 bg-orange-900/30 rounded-lg text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors"><Utensils size={18}/></div>
                   <h4 className="font-bold text-white text-sm">Kuliner</h4>
                </div>
                <p className="text-xs text-slate-300"><strong>Smart Inventory:</strong> AI mendeteksi bahan makanan di kulkas yang hampir busuk dan menyarankan resep masakan untuk memanfaatkannya.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SimulasiView = () => {
  const [jurusan, setJurusan] = useState<string | null>(null);
  const [phase, setPhase] = useState(0); // 0: Select, 1: Problem, 2: Solution, 3: Result

  const scenarios: Record<string, any> = {
    mesin: {
      label: "Teknik Mesin & Pengelasan",
      icon: <Hammer size={24}/>,
      problem: "Siswa sering lupa memakai kacamata pelindung saat mengelas, bahaya bagi mata.",
      solutionOptions: [
        { id: 'a', tech: 'Computer Vision', name: 'Smart Safety Cam', correct: true, desc: "Kamera AI mendeteksi apakah siswa memakai APD lengkap. Jika tidak, mesin las tidak menyala." },
        { id: 'b', tech: 'Chatbot', name: 'Safety Bot', correct: false, desc: "Bot hanya bisa mengingatkan lewat chat, tidak bisa mencegah kecelakaan di tempat." }
      ]
    },
    otomotif: {
      label: "Teknik Otomotif (TKR & TSM)",
      icon: <Car size={24}/>,
      problem: "Kunci-kunci bengkel sering hilang atau tidak kembali ke tempatnya.",
      solutionOptions: [
        { id: 'a', tech: 'Predictive', name: 'Ramalan Kunci', correct: false, desc: "Prediksi tidak bisa melacak lokasi fisik alat secara realtime." },
        { id: 'b', tech: 'Computer Vision', name: 'Tool Tracking AI', correct: true, desc: "Kamera mendeteksi slot kunci yang kosong dan mencatat wajah siswa yang terakhir mengambilnya." }
      ]
    },
    kuliner: {
      label: "Kuliner",
      icon: <Utensils size={24}/>,
      problem: "Banyak bahan makanan sisa praktik yang terbuang karena bingung mau dimasak apa.",
      solutionOptions: [
        { id: 'a', tech: 'NLP / Generative AI', name: 'ChefBot Resep Sisa', correct: true, desc: "Input daftar bahan sisa, AI akan men-generate resep kreatif baru agar tidak mubazir." },
        { id: 'b', tech: 'Computer Vision', name: 'Kamera Kulkas', correct: false, desc: "Hanya melihat isi kulkas, tapi tidak memberikan solusi ide masakan." }
      ]
    },
    akuntansi: {
      label: "Akuntansi",
      icon: <Calculator size={24}/>,
      problem: "Sering salah ketik (human error) saat memindahkan data dari kuitansi kertas ke Excel.",
      solutionOptions: [
        { id: 'a', tech: 'Computer Vision (OCR)', name: 'Auto-Input Scanner', correct: true, desc: "Foto kuitansi, AI otomatis membaca teks dan memasukkannya ke kolom Excel yang tepat." },
        { id: 'b', tech: 'Chatbot', name: 'Curhat Keuangan', correct: false, desc: "Tidak membantu proses input data." }
      ]
    },
    dkv: {
      label: "DKV & Grafika",
      icon: <Palette size={24}/>,
      problem: "Sulit mengecek apakah desain siswa orisinil atau menjiplak karya orang lain di internet.",
      solutionOptions: [
        { id: 'a', tech: 'Computer Vision', name: 'Plagiarism Checker AI', correct: true, desc: "Scan desain siswa dan bandingkan dengan jutaan gambar di internet untuk cek kemiripan." },
        { id: 'b', tech: 'Predictive', name: 'Trend Prediksi', correct: false, desc: "Hanya memprediksi tren warna, bukan cek plagiasi." }
      ]
    }
  };

  const handleSelectJurusan = (key: string) => {
    setJurusan(key);
    setPhase(1);
  };

  const handleSolution = (isCorrect: boolean) => {
    if (isCorrect) {
      setPhase(3);
    } else {
      alert("Kurang tepat. Coba pikirkan teknologi AI mana yang paling pas untuk masalah ini.");
    }
  };

  const reset = () => {
    setJurusan(null);
    setPhase(0);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-4xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-2">Studio Inovasi Jurusan</h2>
        <p className="text-slate-400">Pilih jurusanmu dan rancang solusi AI untuk masalah yang ada.</p>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden min-h-[500px] flex flex-col">
        {/* PHASE 0: SELECT JURUSAN */}
        {phase === 0 && (
          <div className="p-8 flex-1 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-white mb-6">Pilih Program Keahlian:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
              {Object.entries(scenarios).map(([key, val]) => (
                <button 
                  key={key}
                  onClick={() => handleSelectJurusan(key)}
                  className="p-4 bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-amber-500 transition-all flex flex-col items-center gap-3 group"
                >
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors text-slate-300">
                    {val.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white text-center">{val.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PHASE 1: EMPATHIZE & DEFINE */}
        {phase === 1 && jurusan && (
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
              <div className="p-2 bg-amber-500 rounded text-slate-900">{scenarios[jurusan].icon}</div>
              <h3 className="text-xl font-bold text-white">Tahap 1 & 2: Empathize - Define</h3>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6 flex-1">
              <h4 className="text-amber-400 font-bold mb-2 uppercase text-xs tracking-wider">Masalah Teridentifikasi (POV):</h4>
              <p className="text-lg text-slate-200 leading-relaxed italic">
                "{scenarios[jurusan].problem}"
              </p>
            </div>

            <div className="text-right">
              <button onClick={() => setPhase(2)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 ml-auto">
                Cari Solusi (Ideate) <ChevronRight size={18}/>
              </button>
            </div>
          </div>
        )}

        {/* PHASE 2: IDEATE */}
        {phase === 2 && jurusan && (
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
              <Lightbulb className="text-amber-400" size={24}/>
              <h3 className="text-xl font-bold text-white">Tahap 3: Ideate (Pilih Solusi AI)</h3>
            </div>
            
            <p className="text-slate-400 mb-6">Manakah teknologi AI yang paling tepat untuk memecahkan masalah di atas?</p>

            <div className="grid md:grid-cols-2 gap-4">
              {scenarios[jurusan].solutionOptions.map((opt: any) => (
                <button 
                  key={opt.id}
                  onClick={() => handleSolution(opt.correct)}
                  className="bg-slate-900 border border-slate-700 p-6 rounded-xl text-left hover:border-amber-500 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-indigo-400 uppercase border border-indigo-500/30 px-2 py-1 rounded bg-indigo-900/20">{opt.tech}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400">{opt.name}</h4>
                  <p className="text-sm text-slate-400">{opt.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* PHASE 3: PROTOTYPE & TEST */}
        {phase === 3 && jurusan && (
          <div className="p-0 flex-1 flex flex-col md:flex-row">
            {/* Prototype Card */}
            <div className="md:w-1/2 bg-slate-900 p-8 flex items-center justify-center border-r border-slate-700">
               <div className="bg-white text-slate-900 p-6 rounded-xl shadow-2xl w-full max-w-sm rotate-1 transform hover:rotate-0 transition duration-500">
                  <div className="flex items-center justify-between mb-4 border-b pb-2 border-slate-200">
                    <span className="font-bold text-lg uppercase tracking-wider">Prototype</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-bold">Concept</span>
                  </div>
                  <div className="text-center py-6">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                      {scenarios[jurusan].icon}
                    </div>
                    <h3 className="text-2xl font-black mb-2 text-indigo-600">
                      {scenarios[jurusan].solutionOptions.find((o:any) => o.correct).name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Solusi berbasis AI untuk mengatasi masalah {scenarios[jurusan].label.split('(')[0]} secara cerdas dan efisien.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between text-xs font-mono text-slate-500">
                    <span>Ver: 1.0 Low-Fi</span>
                    <span>By: Siswa KKA</span>
                  </div>
               </div>
            </div>

            {/* Testing Feedback */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
               <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                 <MessageSquare className="text-rose-400"/> Tahap 5: Testing
               </h3>
               <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-4 mb-6">
                 <h4 className="font-bold text-slate-300 mb-2 text-sm uppercase">Feedback Grid Simulation:</h4>
                 <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-800 p-2 rounded text-emerald-300">💚 <strong>I Like:</strong> "Idenya sangat membantu efisiensi!"</div>
                    <div className="bg-slate-800 p-2 rounded text-amber-300">💡 <strong>Idea:</strong> "Bisa ditambah notifikasi WA?"</div>
                    <div className="bg-slate-800 p-2 rounded text-blue-300">❓ <strong>Question:</strong> "Butuh internet kencang tidak?"</div>
                    <div className="bg-slate-800 p-2 rounded text-rose-300">🔧 <strong>Wish:</strong> "Semoga alatnya tidak mahal."</div>
                 </div>
               </div>
               <button onClick={reset} className="w-full py-3 border border-slate-600 text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition">
                 Coba Jurusan Lain
               </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const RefleksiView = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-3xl">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <FileText className="text-amber-500"/> Lembar Refleksi (Mindful Learning)
        </h2>
        <p className="text-slate-400 mb-8">Luangkan waktu sejenak untuk merenung menggunakan metode 3H (Head, Heart, Hand).</p>

        <div className="space-y-6">
          <div>
            <label className="block text-indigo-400 font-bold mb-2 flex items-center gap-2">
              <Brain size={18}/> HEAD (Kepala)
            </label>
            <p className="text-xs text-slate-500 mb-2">Apa pengetahuan baru tentang AI & Design Thinking yang paling mencerahkan bagimu?</p>
            <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-slate-300 focus:border-amber-500 focus:outline-none h-24" placeholder="Saya baru sadar bahwa..."></textarea>
          </div>

          <div>
            <label className="block text-rose-400 font-bold mb-2 flex items-center gap-2">
              <Smile size={18}/> HEART (Hati)
            </label>
            <p className="text-xs text-slate-500 mb-2">Bagaimana perasaanmu saat berusaha memahami masalah orang lain (Empati)?</p>
            <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-slate-300 focus:border-amber-500 focus:outline-none h-24" placeholder="Saya merasa..."></textarea>
          </div>

          <div>
            <label className="block text-emerald-400 font-bold mb-2 flex items-center gap-2">
              <Hand size={18}/> HAND (Tangan)
            </label>
            <p className="text-xs text-slate-500 mb-2">Keterampilan apa (menggambar, analisis, diskusi) yang ingin kamu asah lebih lanjut?</p>
            <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-slate-300 focus:border-amber-500 focus:outline-none h-24" placeholder="Saya ingin berlatih..."></textarea>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button className="bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-lg flex items-center gap-2 ml-auto transition">
            <CheckCircle size={18}/> Simpan Jurnal
          </button>
          <p className="text-[10px] text-slate-500 mt-2">*Jurnal hanya tersimpan di sesi browser ini.</p>
        </div>
      </div>
    </div>
  );
};

const EvaluasiView = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const questions = [
    {
      q: "Tahapan pertama dalam Design Thinking yang bertujuan memahami perasaan pengguna adalah...",
      options: ["Define", "Prototype", "Empathize", "Ideate"],
      correct: 2
    },
    {
      q: "Aktivitas 'Crazy 8s' dilakukan pada tahapan...",
      options: ["Ideate", "Testing", "Prototype", "Empathize"],
      correct: 0
    },
    {
      q: "Rumus POV Statement yang benar adalah...",
      options: [
        "[SOLUSI] membutuhkan [BIAYA]",
        "[PENGGUNA] membutuhkan [KEBUTUHAN] karena [INSIGHT]",
        "[GURU] membutuhkan [SISWA]",
        "[AI] membutuhkan [DATA]"
      ],
      correct: 1
    },
    {
      q: "Manakah contoh penerapan AI Computer Vision di bengkel otomotif?",
      options: ["Chatbot suku cadang", "Prediksi harga mobil", "Kamera pendeteksi kelengkapan alat (Tool Tracking)", "Excel stok barang"],
      correct: 2
    }
  ];

  const handleAnswer = (idx: number) => {
    setSelectedAnswer(idx);
    if (idx === questions[currentQ].correct) {
      setScore(score + 25);
    }
    
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-2xl min-h-[60vh]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Evaluasi Pemahaman</h2>
        <p className="text-slate-400">Seberapa jauh kamu memahami materi hari ini?</p>
      </div>

      <div className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-xl overflow-hidden border border-slate-700">
        {!showResult ? (
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-bold text-slate-400">Soal {currentQ + 1} dari {questions.length}</span>
              <span className="px-3 py-1 bg-amber-900/30 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold">Skor: {score}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-8 leading-relaxed">{questions[currentQ].q}</h3>
            
            <div className="space-y-3">
              {questions[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl border-2 font-medium transition-all ${
                    selectedAnswer === idx 
                      ? idx === questions[currentQ].correct 
                        ? 'bg-emerald-900/30 border-emerald-500 text-emerald-400' 
                        : 'bg-rose-900/30 border-rose-500 text-rose-400'
                      : 'border-slate-700 bg-slate-900/50 hover:border-amber-500/50 hover:text-white text-slate-300'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="mb-6 inline-flex p-4 bg-amber-900/20 text-amber-500 rounded-full border border-amber-500/30">
              <Award size={48} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Selesai!</h3>
            <p className="text-slate-400 mb-6">Kamu telah menyelesaikan kuis evaluasi.</p>
            
            <div className="text-5xl font-extrabold text-white mb-8">{score}<span className="text-2xl text-slate-500 font-normal">/100</span></div>
            
            <button 
              onClick={resetQuiz}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-500 transition shadow-lg"
            >
              Coba Lagi
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi9: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 -mt-4">
      {/* Navigation */}
      <ModuleNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activeTab === 'home' && <HomeView onStart={() => setActiveTab('materi')} />}
        {activeTab === 'materi' && <MateriView />}
        {activeTab === 'simulasi' && <SimulasiView />}
        {activeTab === 'refleksi' && <RefleksiView />}
        {activeTab === 'evaluasi' && <EvaluasiView />}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
       `}</style>
    </div>
  );
};

export default Materi9;