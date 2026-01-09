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
  Car,
  Map,
  Search,
  BatteryCharging,
  ShieldAlert,
  GraduationCap
} from 'lucide-react';

// --- COMPONENTS ---

// Internal Navigation
const ModuleNav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
    const navItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'materi', label: 'Ekosistem Karir' },
        { id: 'roadmap', label: 'Peta Jalan SMK' },
        { id: 'simulasi', label: 'Studi Kasus' },
        { id: 'kuis', label: 'Refleksi' },
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
                        <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Profesi & Etika AI</p>
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
                Elemen: Literasi dan Etika KA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Dapur <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Kecerdasan Artifisial</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Pernahkah kalian berpikir, bagaimana <strong>Netflix</strong> tahu film apa yang kalian sukai? 
                Atau bagaimana filter <strong>TikTok</strong> menempel sempurna di wajah kalian?
            </p>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 max-w-2xl mx-auto mb-10">
                <p className="text-slate-400 text-sm italic">
                    "Di balik keajaiban itu, tidak ada sihir. Yang ada adalah sekumpulan kode, data, dan manusia hebat. Modul ini akan membawamu menjelajahi karir masa depan di dunia AI."
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={onStart} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 group">
                    Jelajahi Profesi
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </div>
);

// 2. Materi Section (Ekosistem Profesi & Analogi)
const MateriSection = () => {
    const professions = [
        {
            title: "AI Engineer",
            subtitle: "Sang Arsitek & Tukang Bangun",
            analogy: "Mekanik Mobil Balap",
            desc: "Merakit mesin, memasang roda, dan memastikan mobil melaju kencang tanpa mogok.",
            icon: <Code size={32} className="text-blue-400" />,
            task: "Coding Algoritma, Deployment ke Server.",
            color: "border-blue-500/30 bg-blue-900/10"
        },
        {
            title: "Data Scientist",
            subtitle: "Sang Detektif Data",
            analogy: "Analis Trek Balapan",
            desc: "Mempelajari kondisi cuaca dan performa lawan untuk menentukan strategi menang.",
            icon: <Search size={32} className="text-emerald-400" />,
            task: "Data Cleaning, Visualisasi, Mencari Pola.",
            color: "border-emerald-500/30 bg-emerald-900/10"
        },
        {
            title: "AI Ethicist",
            subtitle: "Sang Penjaga Moral & Wasit",
            analogy: "Wasit Keselamatan",
            desc: "Memastikan mobil tidak menabrak penonton, tidak curang, dan aman dikendarai.",
            icon: <Scale size={32} className="text-rose-400" />,
            task: "Audit Bias, Menjaga Privasi, Aturan Etika.",
            color: "border-rose-500/30 bg-rose-900/10"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">Bab 1: Ekosistem Profesi AI</h2>
                <div className="inline-flex items-center gap-2 bg-indigo-900/30 px-4 py-2 rounded-lg border border-indigo-500/30">
                    <Car size={20} className="text-indigo-400"/>
                    <span className="text-indigo-200 text-sm">Analogi: Tim Balap Mobil F1</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {professions.map((prof, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${prof.color}`}>
                        <div className="mb-4 flex justify-between items-start">
                            <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-700/50">
                                {prof.icon}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider opacity-60 text-white">{prof.analogy}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">{prof.title}</h3>
                        <p className="text-sm font-medium text-indigo-300 mb-4">{prof.subtitle}</p>
                        <p className="text-slate-300 mb-6 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
                            "{prof.desc}"
                        </p>
                        <div className="bg-slate-900/50 p-3 rounded-lg">
                            <p className="text-xs text-slate-400"><strong className="text-slate-200">Tugas:</strong> {prof.task}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Briefcase className="text-amber-400"/> Bab 2: Kompetensi & Skill Set (Bekal Perang)
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-bold text-indigo-400 mb-3 border-b border-slate-700 pb-2">Bahasa Pemrograman</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Python (Wajib! Kunci Inggris-nya AI)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> SQL (Untuk Data)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> C++ / Java (Performa)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-pink-400 mb-3 border-b border-slate-700 pb-2">Matematika & Tools</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Statistika & Probabilitas</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> TensorFlow / PyTorch</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Excel (Advanced) / Tableau</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-amber-400 mb-3 border-b border-slate-700 pb-2">Soft Skill (Hati)</h4>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Problem Solving</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Storytelling (Bercerita dengan data)</li>
                            <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Empati & Kepekaan Sosial</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 3. Roadmap Section
const RoadmapSection = () => (
    <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-2">
                <Map className="text-emerald-400"/> Bab 4: Peta Jalan Karir dari SMK
            </h2>
            <p className="text-slate-400">Perjalanan masih panjang, cicil langkahmu dari sekarang.</p>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-indigo-600 ml-6 md:ml-10 space-y-12">
                {/* Kelas X */}
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-slate-900"></div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
                        <span className="text-xs font-bold bg-indigo-900/50 text-indigo-300 px-2 py-1 rounded mb-2 inline-block">KELAS X</span>
                        <h3 className="text-xl font-bold text-white mb-2">Fase Eksplorasi</h3>
                        <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                            <li>Pelajari logika dasar pemrograman (Algoritma).</li>
                            <li>Cobalah tools AI generatif (ChatGPT, Gemini, Canva AI) dan pelajari cara kerjanya.</li>
                            <li>Tentukan minat: Lebih suka ngoding (Engineer), ngitung (Scientist), atau analisis sosial (Ethicist)?</li>
                        </ul>
                    </div>
                </div>

                {/* Kelas XI */}
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-slate-900"></div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-colors">
                        <span className="text-xs font-bold bg-purple-900/50 text-purple-300 px-2 py-1 rounded mb-2 inline-block">KELAS XI</span>
                        <h3 className="text-xl font-bold text-white mb-2">Fase Pendalaman</h3>
                        <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                            <li>Ambil proyek sederhana (Misal: Chatbot sekolah).</li>
                            <li>Ikuti kursus online gratis (Dicoding, Coursera, Google AI).</li>
                            <li>Mulai pelajari Python lebih dalam.</li>
                        </ul>
                    </div>
                </div>

                {/* Kelas XII */}
                <div className="relative pl-8 md:pl-12">
                    <div className="absolute -left-[14px] top-0 w-6 h-6 bg-emerald-600 rounded-full border-4 border-slate-900"></div>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-colors">
                        <span className="text-xs font-bold bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded mb-2 inline-block">KELAS XII</span>
                        <h3 className="text-xl font-bold text-white mb-2">Fase Spesialisasi</h3>
                        <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                            <li>Magang di perusahaan teknologi.</li>
                            <li>Siapkan portofolio (kumpulan karya).</li>
                            <li>Siap kerja atau lanjut kuliah.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// 4. Simulasi (Studi Kasus Pinjol)
const SimulasiSection = () => {
    const [step, setStep] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

    const handleAction = (action: string) => {
        if (action === 'analyze') {
            addLog("🕵️ Data Scientist: Mengumpulkan data 10.000 pengguna...");
            addLog("📊 Analisis: Ditemukan korelasi aneh!");
            addLog("💡 Pola: Pengguna dengan Baterai HP < 20% sering telat bayar.");
            setStep(1);
        } else if (action === 'deploy') {
            addLog("🛠️ AI Engineer: Menulis kode Python...");
            addLog("⚙️ Sistem: Mengintegrasikan pembacaan level baterai otomatis.");
            addLog("🚀 Deploy: Aplikasi 'Pinjol Cerdas' siap diluncurkan!");
            setStep(2);
        } else if (action === 'audit') {
            addLog("⚖️ AI Ethicist: Tunggu! Mari kita audit sistem ini.");
            addLog("⚠️ Temuan: Orang dengan baterai rendah seringkali adalah pekerja lapangan/kasar yang susah cari colokan.");
            addLog("🚫 Keputusan: Menolak pinjaman berdasarkan baterai adalah DISKRIMINASI kelas sosial.");
            addLog("✅ Solusi: Fitur Baterai DIHAPUS demi keadilan.");
            setStep(3);
        }
    };

    const reset = () => {
        setStep(0);
        setLogs([]);
    }

    return (
        <div className="container mx-auto px-4 py-8 animate-[fadeIn_0.5s]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-2 text-white">Bab 3: Studi Kasus Dunia Nyata</h2>
                    <p className="text-slate-400">Kasus: "Aplikasi Pinjaman Online Cerdas"</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Visual Area */}
                    <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 flex flex-col justify-between min-h-[400px]">
                        <div>
                            <h3 className="font-bold text-white mb-4 border-b border-slate-700 pb-2">Status Proyek</h3>
                            
                            {step === 0 && (
                                <div className="text-center py-10">
                                    <Search size={64} className="mx-auto text-emerald-400 mb-4 animate-bounce"/>
                                    <p className="text-slate-300">Startup Pinjol ingin AI menyetujui pinjaman dalam 5 detik. <br/>Peran: <strong>Data Scientist</strong></p>
                                    <button onClick={() => handleAction('analyze')} className="mt-4 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500 font-bold">
                                        Cari Pola Data
                                    </button>
                                </div>
                            )}

                            {step === 1 && (
                                <div className="text-center py-10">
                                    <Code size={64} className="mx-auto text-blue-400 mb-4 animate-pulse"/>
                                    <p className="text-slate-300">Pola ditemukan: "Baterai Lowbat = Risiko Tinggi". <br/>Peran: <strong>AI Engineer</strong></p>
                                    <button onClick={() => handleAction('deploy')} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 font-bold">
                                        Bangun Sistem AI
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="text-center py-10">
                                    <ShieldAlert size={64} className="mx-auto text-rose-400 mb-4 animate-pulse"/>
                                    <p className="text-slate-300">Sistem berjalan. Tapi apakah adil? <br/>Peran: <strong>AI Ethicist</strong></p>
                                    <button onClick={() => handleAction('audit')} className="mt-4 bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-500 font-bold">
                                        Audit Etika
                                    </button>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="text-center py-10">
                                    <CheckCircle size={64} className="mx-auto text-green-400 mb-4"/>
                                    <p className="text-slate-300">Sistem diperbaiki agar adil dan manusiawi.</p>
                                    <p className="text-xs text-slate-500 mt-2">Pelajaran: Data akurat belum tentu adil secara etika.</p>
                                    <button onClick={reset} className="mt-4 border border-slate-500 text-slate-400 px-6 py-2 rounded-full hover:bg-slate-700 font-bold">
                                        Ulangi Kasus
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Log Console */}
                    <div className="bg-black/80 rounded-2xl border border-slate-700 p-6 font-mono text-sm overflow-hidden flex flex-col">
                        <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-800 pb-2">
                            <Terminal size={14}/> 
                            <span>System Log & Team Chat</span>
                        </div>
                        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
                            {logs.length === 0 && <span className="text-slate-600 italic">Menunggu inisialisasi tim...</span>}
                            {logs.map((log, i) => (
                                <div key={i} className="animate-[fadeIn_0.3s]">
                                    <span className="text-indigo-400 mr-2">{'>'}</span>
                                    <span className="text-slate-300">{log}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
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
            q: "Dalam analogi mobil balap, siapa yang berperan sebagai 'Mekanik' yang merakit mesin?",
            opts: ["AI Ethicist", "AI Engineer", "Data Scientist", "Pembalap"],
            correct: 1
        },
        {
            id: 2,
            q: "Pada kasus Pinjol, mengapa AI Ethicist menolak fitur deteksi baterai?",
            opts: [
                "Karena baterai tidak akurat.",
                "Karena diskriminatif terhadap pekerja lapangan (Bias).",
                "Karena server penuh.",
                "Karena coding-nya salah."
            ],
            correct: 1
        },
        {
            id: 3,
            q: "Apa 'Kunci Inggris' (Skill Wajib) untuk masuk ke dunia AI bagi siswa SMK?",
            opts: ["Adobe Photoshop", "Python", "Microsoft Word", "HTML"],
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
                <div className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
                        <GraduationCap className="text-indigo-400"/> Lembar Refleksi (Mindfulness)
                    </h2>
                    <p className="text-slate-300 italic mb-4">
                        "Ambil napas sejenak. Tanyakan pada dirimu: Dari ketiga profesi di atas (Engineer, Scientist, Ethicist), mana yang 'Gue Banget'? Kenapa?"
                    </p>
                    <textarea className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-slate-300 focus:outline-none focus:border-indigo-500" rows={3} placeholder="Tulis refleksi singkatmu di sini..."></textarea>
                </div>

                <div className="space-y-6">
                    {questions.map((q, idx) => (
                        <div key={q.id} className="bg-slate-900 p-6 rounded-xl border border-slate-700">
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
                        <div className="mt-4">
                            {score === questions.length 
                                ? <span className="inline-block px-4 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Sempurna! Kamu siap jadi ahli AI.</span> 
                                : <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Coba pelajari materi lagi ya.</span>}
                        </div>
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