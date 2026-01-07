import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Code, 
  Scale, 
  Users, 
  ChevronRight, 
  CheckCircle, 
  AlertTriangle, 
  Terminal, 
  Award, 
  Activity,
  Briefcase,
  TrendingUp,
  Shield,
  Map,
  Zap,
  BatteryWarning,
  XCircle,
  Wrench,
  Utensils,
  Palette,
  Calculator,
  Hammer,
  Car,
  ScanLine,
  Camera,
  Search
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'materi', label: 'AI di Industri' },
        { id: 'roadmap', label: 'Skill Masa Depan' },
        { id: 'simulasi', label: 'Studio Simulasi' },
        { id: 'kuis', label: 'Evaluasi' },
    ];

    return (
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
            <div className="container mx-auto h-14 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
                        <Brain className="text-white" size={16} />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 5</h1>
                        <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Karir & Teknologi Masa Depan</p>
                    </div>
                </div>

                <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
                                activeTab === item.id 
                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

// 1. Hero/Home Section
const HomeSection = ({ onStart }: { onStart: () => void }) => (
    <div className="min-h-[70vh] flex items-center justify-center relative overflow-hidden animate-[fadeIn_0.5s]">
        {/* Abstract Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="text-center max-w-4xl px-6 relative z-10">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-800/50 backdrop-blur-md text-indigo-300 text-sm font-medium border border-indigo-500/30">
                Wawasan Karir & Teknologi SMK
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Bukan Menggantikan, Tapi <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Memperkuat Keahlianmu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                Teknologi Kecerdasan Artifisial (AI) kini hadir di bengkel otomotif, dapur restoran, hingga studio desain. 
                Mari pelajari bagaimana AI menjadi "Asisten Super" di jurusan kalian masing-masing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={onStart} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
                    Eksplorasi Jurusan
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </div>
);

// 2. Materi Section (Ekosistem Profesi & Jurusan)
const MateriSection = () => {
    const vocationalAI = [
        {
            jurusan: "Teknik Otomotif (TKR/TSM)",
            icon: <Car size={24} className="text-red-400"/>,
            tech: "AI Diagnostic Tool",
            desc: "Tidak lagi menebak kerusakan hanya dari suara. Mekanik masa depan menggunakan scanner AI untuk mendeteksi anomali mesin dalam hitungan detik."
        },
        {
            jurusan: "Kuliner",
            icon: <Utensils size={24} className="text-orange-400"/>,
            tech: "Smart Inventory & Recipe Gen",
            desc: "AI membantu chef menciptakan resep baru dari sisa bahan (Zero Waste) dan memprediksi stok bahan yang akan habis minggu depan."
        },
        {
            jurusan: "Akuntansi",
            icon: <Calculator size={24} className="text-emerald-400"/>,
            tech: "Automated Auditing",
            desc: "AI mendeteksi kecurangan (fraud) atau kesalahan input dalam ribuan transaksi keuangan secara otomatis, jauh lebih teliti dari mata manusia."
        },
        {
            jurusan: "DKV & Grafika",
            icon: <Palette size={24} className="text-purple-400"/>,
            tech: "Generative Art Assistant",
            desc: "Desainer menggunakan AI untuk membuat moodboard, palet warna, dan aset kasar dalam hitungan menit, sehingga fokus pada konsep kreatif utama."
        },
        {
            jurusan: "Teknik Mesin & Las",
            icon: <Hammer size={24} className="text-blue-400"/>,
            tech: "Computer Vision Inspector",
            desc: "Kamera AI mendeteksi keretakan mikro pada hasil las atau potongan logam yang tidak presisi yang sulit dilihat mata telanjang."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            
            {/* INTRO: PROFESI UTAMA */}
            <div className="mb-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-white">Siapa di Balik Layar?</h2>
                    <p className="text-slate-400">Sebelum masuk ke jurusanmu, kenali dulu 3 profesi utama pembuat AI.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-900/30 rounded-lg text-blue-400"><Code/></div>
                            <h3 className="font-bold text-white">AI Engineer</h3>
                        </div>
                        <p className="text-sm text-slate-300">Sang "Mekanik". Merakit kode program agar AI bisa berjalan.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-emerald-900/30 rounded-lg text-emerald-400"><TrendingUp/></div>
                            <h3 className="font-bold text-white">Data Scientist</h3>
                        </div>
                        <p className="text-sm text-slate-300">Sang "Analis". Mengolah data mentah agar bisa dipelajari AI.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-rose-900/30 rounded-lg text-rose-400"><Scale/></div>
                            <h3 className="font-bold text-white">AI Ethicist</h3>
                        </div>
                        <p className="text-sm text-slate-300">Sang "Wasit". Memastikan AI adil dan tidak berbahaya.</p>
                    </div>
                </div>
            </div>

            {/* AI DI JURUSAN (FOCUS) */}
            <div>
                <div className="text-center mb-10">
                    <span className="text-indigo-400 font-bold uppercase tracking-wider text-sm">Relevansi Industri</span>
                    <h2 className="text-3xl font-bold mb-4 text-white">Penerapan AI di Jurusanmu</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vocationalAI.map((item, idx) => (
                        <div key={idx} className="bg-slate-900/50 border border-slate-700 p-6 rounded-2xl hover:border-indigo-500 transition-all hover:-translate-y-1 group">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-indigo-900/50 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-mono text-slate-500 uppercase">{item.jurusan}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.tech}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 3. Roadmap & Skills Section
const RoadmapSection = () => {
    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            
            {/* SKILL SET MATRIX */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-white text-center">Skill Wajib Era Digital</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Hard Skills */}
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
                            <Terminal size={20}/> Kemampuan Teknis (Hard Skills)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle size={16} className="text-emerald-500"/></div>
                                <div>
                                    <h4 className="text-white font-bold">Prompt Engineering</h4>
                                    <p className="text-sm text-slate-400">Kemampuan memberi perintah yang tepat pada AI (ChatGPT, Midjourney) agar hasilnya sesuai keinginan.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle size={16} className="text-emerald-500"/></div>
                                <div>
                                    <h4 className="text-white font-bold">Data Literacy</h4>
                                    <p className="text-sm text-slate-400">Mampu membaca grafik dan tren data. Contoh: Mekanik membaca grafik performa mesin dari scanner.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle size={16} className="text-emerald-500"/></div>
                                <div>
                                    <h4 className="text-white font-bold">Basic Logic / Coding</h4>
                                    <p className="text-sm text-slate-400">Memahami logika "Jika-Maka" (If-Else) untuk troubleshooting masalah.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Soft Skills */}
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                            <Users size={20}/> Kemampuan Manusia (Soft Skills)
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle size={16} className="text-purple-500"/></div>
                                <div>
                                    <h4 className="text-white font-bold">Critical Thinking</h4>
                                    <p className="text-sm text-slate-400">AI bisa memberi jawaban, tapi kamulah yang menentukan apakah jawaban itu benar dan aman dipakai.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle size={16} className="text-purple-500"/></div>
                                <div>
                                    <h4 className="text-white font-bold">Creativity & Innovation</h4>
                                    <p className="text-sm text-slate-400">AI hanya meniru data lama. Ide baru dan inovasi orisinal tetap datang dari manusia.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1"><CheckCircle size={16} className="text-purple-500"/></div>
                                <div>
                                    <h4 className="text-white font-bold">Empathy</h4>
                                    <p className="text-sm text-slate-400">Mesin tidak punya perasaan. Pelayanan pelanggan di bengkel/resto tetap butuh sentuhan manusia.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ROADMAP */}
            <div>
                <h2 className="text-3xl font-bold mb-10 text-white text-center">Peta Jalan Siswa SMK</h2>
                <div className="relative max-w-4xl mx-auto">
                    {/* Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700 rounded-full"></div>
                    
                    {/* Step 1 */}
                    <div className="relative flex items-center justify-between mb-12 group">
                        <div className="w-5/12 text-right pr-8">
                            <h3 className="text-xl font-bold text-white mb-1">Kelas X</h3>
                            <p className="text-indigo-400 font-bold text-sm mb-2">ADAPTASI & EKSPLORASI</p>
                            <p className="text-slate-400 text-sm">Mengenal tools AI dasar. Belajar menggunakan ChatGPT untuk membantu tugas (bukan menyontek) dan Canva/AI Design.</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-slate-900 z-10 group-hover:scale-110 transition"></div>
                        <div className="w-5/12 pl-8"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-center justify-between mb-12 group">
                        <div className="w-5/12 text-right pr-8"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-600 rounded-full border-4 border-slate-900 z-10 group-hover:scale-110 transition"></div>
                        <div className="w-5/12 pl-8">
                            <h3 className="text-xl font-bold text-white mb-1">Kelas XI</h3>
                            <p className="text-purple-400 font-bold text-sm mb-2">INTEGRASI JURUSAN</p>
                            <p className="text-slate-400 text-sm">Mulai menggunakan AI spesifik jurusan. Contoh: Simulator sirkuit (Electro), AI Resep (Kuliner), Diagnosa digital (Otomotif).</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-center justify-between group">
                        <div className="w-5/12 text-right pr-8">
                            <h3 className="text-xl font-bold text-white mb-1">Kelas XII</h3>
                            <p className="text-emerald-400 font-bold text-sm mb-2">PROFESIONALISME</p>
                            <p className="text-slate-400 text-sm">Siap kerja. Mampu mengoperasikan sistem industri modern yang berbasis data dan otomasi.</p>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-emerald-600 rounded-full border-4 border-slate-900 z-10 group-hover:scale-110 transition"></div>
                        <div className="w-5/12 pl-8"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 4. Simulasi (Interactive Vocational Case Study)
const SimulasiSection = () => {
    const [selectedJurusan, setSelectedJurusan] = useState<string | null>(null);
    const [step, setStep] = useState(0); // 0: Select, 1: Case, 2: Solusi, 3: Result

    const cases: any = {
        otomotif: {
            title: "Teknik Otomotif (TKR/TSM)",
            icon: <Car size={32}/>,
            problem: "Pelanggan datang dengan keluhan mesin bunyi 'tek tek' aneh. Anda kesulitan mencari sumber bunyinya secara manual.",
            solutionA: { text: "Bongkar mesin total satu per satu.", result: "Waktu terbuang 5 jam. Pelanggan marah karena lama.", correct: false },
            solutionB: { text: "Gunakan 'Sound Diagnostic AI' untuk analisis frekuensi suara.", result: "AI mendeteksi masalah pada 'Valve Lifter' dalam 2 menit. Perbaikan tepat sasaran.", correct: true }
        },
        kuliner: {
            title: "Kuliner",
            icon: <Utensils size={32}/>,
            problem: "Ada banyak sisa bahan: Bayam, Keju, dan Roti Tawar yang akan kadaluarsa besok. Harus dimasak apa agar tidak rugi?",
            solutionA: { text: "Buang saja bahan sisa tersebut.", result: "Rugi biaya bahan (Food Waste). Profit harian turun.", correct: false },
            solutionB: { text: "Tanya AI Generator Resep: 'Buat menu dari Bayam+Keju+Roti'.", result: "AI menyarankan 'Spinach Grilled Cheese Sandwich'. Jadi menu spesial hari ini & Laris!", correct: true }
        },
        dkv: {
            title: "DKV & Grafika",
            icon: <Palette size={32}/>,
            problem: "Klien minta 5 alternatif logo 'Kopi Kekinian' dalam waktu 1 jam. Anda baru punya 1 ide.",
            solutionA: { text: "Bilang ke klien tidak sanggup.", result: "Klien kecewa dan pindah ke desainer lain.", correct: false },
            solutionB: { text: "Gunakan AI Image Gen untuk brainstorming sketsa awal.", result: "Dapat 20 variasi konsep dalam 10 menit. Anda tinggal memoles (finishing) yang terbaik.", correct: true }
        },
        akuntansi: {
            title: "Akuntansi",
            icon: <Calculator size={32}/>,
            problem: "Bos minta laporan rekap dari 500 lembar kuitansi fisik hari ini juga.",
            solutionA: { text: "Ketik manual satu per satu ke Excel.", result: "Lembur sampai malam, mata lelah, dan banyak typo angka.", correct: false },
            solutionB: { text: "Foto kuitansi pakai fitur OCR (Scan to Excel).", result: "Data masuk ke Excel otomatis dalam 15 menit. Anda tinggal cek validasi akhir.", correct: true }
        },
        mesin: {
            title: "Teknik Mesin & Las",
            icon: <Hammer size={32}/>,
            problem: "Anda harus memeriksa kualitas hasil las pada pipa gas bertekanan tinggi. Mata manusia mungkin melewatkan retak mikro.",
            solutionA: { text: "Cek visual pakai mata telanjang saja.", result: "Risiko kebocoran pipa di kemudian hari. Sangat berbahaya.", correct: false },
            solutionB: { text: "Gunakan Scanner Ultrasonic/Vision AI.", result: "AI mendeteksi porositas mikro di bagian dalam. Anda melakukan las ulang di titik itu. Aman.", correct: true }
        }
    };

    const handleSelect = (key: string) => {
        setSelectedJurusan(key);
        setStep(1);
    };

    const handleSolution = (isCorrect: boolean) => {
        setStep(isCorrect ? 3 : 4); // 3 Success, 4 Fail
    };

    const reset = () => {
        setSelectedJurusan(null);
        setStep(0);
    };

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold mb-2 text-white">Laboratorium Solusi Cerdas</h2>
                <p className="text-slate-400">Pilih jurusanmu dan selesaikan masalah industri dengan teknologi.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700 overflow-hidden shadow-2xl min-h-[400px] flex flex-col">
                
                {/* STEP 0: SELECT JURUSAN */}
                {step === 0 && (
                    <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-4 flex-grow place-content-center">
                        {Object.entries(cases).map(([key, val]: [string, any]) => (
                            <button 
                                key={key}
                                onClick={() => handleSelect(key)}
                                className="bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:bg-slate-800 p-6 rounded-xl flex flex-col items-center gap-3 transition-all group"
                            >
                                <div className="p-3 bg-slate-800 rounded-full text-slate-300 group-hover:text-indigo-400 group-hover:bg-indigo-900/30 transition-colors">
                                    {val.icon}
                                </div>
                                <span className="font-bold text-slate-200 text-sm">{val.title}</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* STEP 1: THE PROBLEM */}
                {step === 1 && selectedJurusan && (
                    <div className="p-10 flex flex-col items-center text-center animate-[fadeIn_0.5s]">
                        <div className="mb-6 p-4 bg-red-900/20 text-red-400 rounded-full animate-pulse border border-red-500/30">
                            <AlertTriangle size={48}/>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Masalah Terdeteksi!</h3>
                        <p className="text-lg text-slate-300 mb-8 max-w-xl bg-slate-900 p-6 rounded-xl border border-slate-700">
                            "{cases[selectedJurusan].problem}"
                        </p>
                        <button onClick={() => setStep(2)} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition flex items-center gap-2">
                            Cari Solusi <ChevronRight/>
                        </button>
                    </div>
                )}

                {/* STEP 2: CHOOSE SOLUTION */}
                {step === 2 && selectedJurusan && (
                    <div className="p-8 flex flex-col items-center animate-[fadeIn_0.5s]">
                        <h3 className="text-xl font-bold text-white mb-8">Bagaimana kamu akan menyelesaikannya?</h3>
                        <div className="grid md:grid-cols-2 gap-6 w-full">
                            <button 
                                onClick={() => handleSolution(cases[selectedJurusan].solutionA.correct)}
                                className="p-6 bg-slate-900 border border-slate-600 hover:border-red-400 rounded-xl text-left transition hover:bg-slate-800 group"
                            >
                                <span className="text-xs font-bold text-slate-500 uppercase mb-2 block">Cara A (Konvensional)</span>
                                <p className="text-slate-200 group-hover:text-white font-medium">{cases[selectedJurusan].solutionA.text}</p>
                            </button>
                            <button 
                                onClick={() => handleSolution(cases[selectedJurusan].solutionB.correct)}
                                className="p-6 bg-slate-900 border border-indigo-500 hover:bg-indigo-900/20 rounded-xl text-left transition group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] px-2 py-1 rounded-bl">AI Powered</div>
                                <span className="text-xs font-bold text-indigo-400 uppercase mb-2 block">Cara B (Modern)</span>
                                <p className="text-slate-200 group-hover:text-white font-bold">{cases[selectedJurusan].solutionB.text}</p>
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3/4: RESULT */}
                {(step === 3 || step === 4) && selectedJurusan && (
                    <div className="p-10 flex flex-col items-center text-center animate-[fadeIn_0.5s]">
                        <div className={`mb-6 p-4 rounded-full border-4 ${step === 3 ? 'bg-emerald-900/30 border-emerald-500/30 text-emerald-400' : 'bg-red-900/30 border-red-500/30 text-red-400'}`}>
                            {step === 3 ? <Award size={64}/> : <XCircle size={64}/>}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {step === 3 ? "Solusi Cerdas!" : "Kurang Efektif"}
                        </h3>
                        <p className="text-slate-300 mb-8 max-w-lg">
                            {step === 3 ? cases[selectedJurusan].solutionB.result : cases[selectedJurusan].solutionA.result}
                        </p>
                        
                        {step === 3 && (
                            <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-lg mb-6 text-sm text-indigo-200">
                                💡 <strong>Insight:</strong> Menggunakan teknologi bukan berarti malas, tapi bekerja lebih cerdas (Work Smarter) agar hasil lebih presisi dan efisien.
                            </div>
                        )}

                        <button onClick={reset} className="px-6 py-2 border border-slate-600 text-slate-400 rounded-lg hover:text-white hover:bg-slate-800 transition">
                            Coba Jurusan Lain
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

// 5. Quiz Section
const QuizSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 1,
            q: "Apa peran 'AI Engineer' dalam pengembangan teknologi?",
            opts: [
                "Menganalisis data pasar.",
                "Merakit kode program agar AI berjalan.",
                "Menjaga etika penggunaan AI.",
                "Memperbaiki hardware komputer."
            ],
            correct: 1 
        },
        {
            id: 2,
            q: "Di jurusan Otomotif, teknologi AI manakah yang paling membantu diagnosa mesin?",
            opts: [
                "Generative Art",
                "Chatbot Customer Service",
                "Sound/Vibration Analysis AI",
                "Automated Email"
            ],
            correct: 2
        },
        {
            id: 3,
            q: "Mengapa kemampuan 'Data Literacy' (Literasi Data) penting bagi siswa SMK?",
            opts: [
                "Agar bisa membaca grafik dan tren dari alat kerja digital.",
                "Agar bisa membuat robot.",
                "Supaya nilai matematikanya bagus.",
                "Agar bisa meretas akun medsos."
            ],
            correct: 0
        },
        {
            id: 4,
            q: "Apa manfaat AI Generatif bagi jurusan DKV/Desain?",
            opts: [
                "Menggantikan desainer sepenuhnya.",
                "Mempercepat proses brainstorming ide dan sketsa awal.",
                "Mencetak banner otomatis.",
                "Memperbaiki printer rusak."
            ],
            correct: 1
        }
    ];

    const handleSelect = (qId: number, optIdx: number) => {
        setAnswers({...answers, [qId]: optIdx});
    };

    const handleSubmit = () => {
        let currentScore = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) currentScore += 1;
        });
        setScore(currentScore);
        setSubmitted(true);
    };

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2 text-white">Evaluasi Pemahaman</h2>
                    <p className="text-slate-400">Seberapa siap kamu menghadapi teknologi masa depan?</p>
                </div>

                <div className="space-y-6">
                    {questions.map((q, idx) => (
                        <div key={q.id} className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
                            <h4 className="text-lg font-semibold mb-4 text-white"><span className="text-indigo-400 mr-2">{idx + 1}.</span> {q.q}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {q.opts.map((opt, oIdx) => (
                                    <button
                                        key={oIdx}
                                        disabled={submitted}
                                        onClick={() => handleSelect(q.id, oIdx)}
                                        className={`p-3 text-left rounded-lg text-sm border transition-all ${
                                            answers[q.id] === oIdx 
                                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20' 
                                            : 'bg-slate-800/30 border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white'
                                        } ${submitted && oIdx === q.correct ? '!bg-emerald-600 !border-emerald-500 !text-white' : ''}
                                          ${submitted && answers[q.id] === oIdx && oIdx !== q.correct ? '!bg-rose-600 !border-rose-500 !text-white' : ''}
                                        `}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {!submitted ? (
                    <div className="mt-8 text-center">
                        <button 
                            onClick={handleSubmit}
                            disabled={Object.keys(answers).length < questions.length}
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Kirim Jawaban
                        </button>
                    </div>
                ) : (
                    <div className="mt-8 p-6 bg-slate-800/50 border border-indigo-500/50 rounded-xl text-center animate-bounce-in">
                        <h3 className="text-2xl font-bold mb-2 text-white">Hasil Evaluasi</h3>
                        <p className="text-lg text-slate-300">Kamu menjawab benar <span className="text-emerald-400 font-bold">{score}</span> dari {questions.length} soal.</p>
                        
                        <div className="mt-6 border-t border-slate-700 pt-6">
                            <h4 className="text-white font-bold mb-2 flex items-center justify-center gap-2"><Brain size={18} className="text-purple-400"/> Refleksi (Mindfulness)</h4>
                            <p className="text-slate-400 italic text-sm max-w-lg mx-auto">
                                "Teknologi akan terus berkembang. Kunci utamanya bukan menghafal tools, tapi memiliki pola pikir terbuka untuk terus belajar (Lifelong Learning)."
                            </p>
                        </div>
                        <button onClick={() => { setSubmitted(false); setAnswers({}); setScore(0); }} className="mt-4 text-sm text-indigo-400 hover:text-indigo-300 underline">
                            Ulangi Kuis
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---

const Materi5: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activeTab === 'home' && <HomeSection onStart={() => setActiveTab('materi')} />}
        {activeTab === 'materi' && <MateriSection />}
        {activeTab === 'roadmap' && <RoadmapSection />}
        {activeTab === 'simulasi' && <SimulasiSection />}
        {activeTab === 'kuis' && <QuizSection />}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
            animation: blob 7s infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
       `}</style>
    </div>
  );
};

export default Materi5;