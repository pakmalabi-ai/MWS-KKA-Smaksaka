import React, { useState } from 'react';
import { 
  Brain, 
  BookOpen, 
  Code, 
  CheckCircle, 
  Send, 
  AlertCircle, 
  Edit,
  Terminal,
  Activity,
  FileText,
  HelpCircle,
  Play,
  ChefHat,
  Thermometer,
  Layers,
  Wrench,
  Palette,
  Calculator,
  Utensils,
  Hammer,
  Repeat,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

// --- DATA ---

const quizQuestions = [
    { q: "Apa analogi terbaik untuk menjelaskan cara kerja AI (LLM) menurut modul ini?", options: ["Mesin Pencari Fakta (Google)", "Koki Buta di Perpustakaan Raksasa", "Otak Manusia Sungguhan", "Ensiklopedia Digital"], ans: 1 },
    { q: "Dalam rumus RCTF, apa fungsi dari 'Context'?", options: ["Memberikan identitas pada AI", "Menentukan format tabel/teks", "Memberikan latar belakang dan batasan masalah", "Menyuruh AI berhenti"], ans: 2 },
    { q: "Jika kita ingin AI menjawab soal matematika yang rumit agar tidak salah hitung, teknik apa yang dipakai?", options: ["Few-Shot Prompting", "Chain of Thought (Jelaskan langkah demi langkah)", "Reverse Prompting", "Zero-Shot Prompting"], ans: 1 },
    { q: "Apa yang terjadi jika kita mengatur 'Temperature' AI menjadi tinggi (misal 0.9)?", options: ["AI menjadi sangat kaku dan logis", "AI menjadi lebih kreatif dan imajinatif (kadang halusinasi)", "AI berhenti bekerja", "AI menjadi lebih cepat"], ans: 1 },
    { q: "Mengapa kita perlu melakukan 'Reverse Prompting' (Menyuruh AI bertanya balik)?", options: ["Saat kita bingung harus mulai dari mana", "Agar AI pusing", "Untuk menghemat kuota", "Agar terlihat keren"], ans: 0 },
];

// --- COMPONENTS ---

const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <Brain className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 7</h1>
          <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Prompt Engineering</p>
        </div>
      </div>
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
            { id: 'home', label: 'Beranda', icon: Brain },
            { id: 'konsep', label: 'Konsep AI', icon: ChefHat },
            { id: 'rctf', label: 'Teknik RCTF', icon: Layers },
            { id: 'lanjutan', label: 'Teknik Ninja', icon: Lightbulb },
            { id: 'lab', label: 'Studio Jurusan', icon: Terminal },
            { id: 'kuis', label: 'Kuis', icon: HelpCircle },
        ].map((item) => (
            <button 
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${activePage === item.id ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
            >
                <item.icon size={14} className="hidden sm:block" />
                {item.label}
            </button>
        ))}
      </nav>
    </div>
  </header>
);

const HomeSection = ({ setPage }: { setPage: (p: string) => void }) => (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 pt-10 animate-[fadeIn_0.5s] relative rounded-2xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 text-sm mb-4">
                Mastering Prompt Engineering
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Dari Pengguna Menjadi <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pengendali AI</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                Buku ini disusun bukan untuk menjadikan kalian robot yang bergantung pada AI, melainkan manusia yang mampu memimpin AI. 
                Di SMK Negeri 1 Kaligondang, kita percaya teknologi di tangan yang tepat adalah keajaiban.
            </p>
            <div className="flex gap-4 justify-center">
                <button onClick={() => setPage('konsep')} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2">
                    Mulai Belajar <ArrowRight size={18}/>
                </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="bg-slate-800/50 backdrop-blur p-4 rounded-xl border border-slate-700">
                    <h3 className="text-emerald-400 font-bold mb-1 flex items-center gap-2"><Brain size={16}/> Mindful</h3>
                    <p className="text-xs text-slate-300">Paham cara kerja mesin statistik agar tidak tertipu halusinasi.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur p-4 rounded-xl border border-slate-700">
                    <h3 className="text-amber-400 font-bold mb-1 flex items-center gap-2"><Layers size={16}/> Meaningful</h3>
                    <p className="text-xs text-slate-300">Teknik RCTF untuk membuat prompt yang berbobot dan presisi.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur p-4 rounded-xl border border-slate-700">
                    <h3 className="text-purple-400 font-bold mb-1 flex items-center gap-2"><Wrench size={16}/> Vocational</h3>
                    <p className="text-xs text-slate-300">Implementasi spesifik untuk jurusan Teknik, DKV, Akuntansi, dll.</p>
                </div>
            </div>
        </div>
    </div>
);

// --- TAB 1: KONSEP DASAR (Mindful) ---
const KonsepSection = () => {
    const [temperature, setTemperature] = useState(0.2);

    return (
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s] space-y-12">
            {/* Analogi Koki */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-indigo-900/50 p-4 rounded-full text-indigo-400"><ChefHat size={32}/></div>
                    <h2 className="text-2xl font-bold text-white">Analogi: Koki Buta di Perpustakaan</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            Bayangkan ChatGPT/Gemini bukan sebagai "Google Pencari Fakta", melainkan:
                        </p>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="flex gap-3">
                                <span className="font-bold text-white bg-slate-700 w-6 h-6 flex items-center justify-center rounded-full text-xs">1</span>
                                <span><b>Pelatihan (Training):</b> Koki ini telah mencicipi miliaran resep (teks internet). Dia tahu setelah kata "Nasi", biasanya muncul kata "Goreng" (90%).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-white bg-slate-700 w-6 h-6 flex items-center justify-center rounded-full text-xs">2</span>
                                <span><b>Prediksi (Prediction):</b> Saat kamu memesan masakan, dia tidak melihat bahan aslinya. Dia hanya <i>menebak rasa</i> berdasarkan ingatan resepnya.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-white bg-slate-700 w-6 h-6 flex items-center justify-center rounded-full text-xs">3</span>
                                <span><b>Halusinasi:</b> Karena dia menebak, kadang dia mengarang menu aneh (fakta palsu) dengan sangat percaya diri.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-indigo-950/30 rounded-xl p-6 border border-indigo-500/20 flex flex-col justify-center items-center text-center">
                        <p className="text-lg font-mono text-indigo-300 mb-2">"Next Token Prediction"</p>
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-slate-800 rounded text-slate-400">Ibu</span>
                            <span className="px-3 py-1 bg-slate-800 rounded text-slate-400">Kota</span>
                            <span className="px-3 py-1 bg-slate-800 rounded text-slate-400">Indonesia</span>
                            <span className="px-3 py-1 bg-emerald-600 text-white rounded animate-pulse">...?</span>
                        </div>
                        <p className="text-xs text-slate-500">AI menghitung probabilitas kata selanjutnya. Jakarta (90%), Nusantara (5%), Bandung (1%).</p>
                    </div>
                </div>
            </div>

            {/* Temperature Simulator */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-rose-900/50 p-4 rounded-full text-rose-400"><Thermometer size={32}/></div>
                    <h2 className="text-2xl font-bold text-white">Suhu Kreativitas (Temperature)</h2>
                </div>
                <p className="text-slate-400 mb-8">Geser slider untuk melihat bagaimana "suhu" mempengaruhi output AI.</p>
                
                <div className="max-w-2xl mx-auto">
                    <input 
                        type="range" min="0" max="1" step="0.1" 
                        value={temperature} onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-indigo-500 mb-4"
                    />
                    <div className="flex justify-between text-xs text-slate-500 font-mono mb-8">
                        <span>0.0 (Kaku/Logis)</span>
                        <span>0.5 (Seimbang)</span>
                        <span>1.0 (Kreatif/Liar)</span>
                    </div>

                    <div className="bg-black/30 p-6 rounded-xl border border-slate-600 transition-all">
                        <div className="flex justify-between mb-4 border-b border-slate-700 pb-2">
                            <span className="text-slate-400 text-xs uppercase font-bold">Setting: Temperature {temperature}</span>
                            <span className={`text-xs font-bold ${temperature < 0.4 ? 'text-blue-400' : temperature > 0.7 ? 'text-rose-400' : 'text-emerald-400'}`}>
                                {temperature < 0.4 ? "Cocok untuk: Koding, Matematika, Fakta" : temperature > 0.7 ? "Cocok untuk: Puisi, Cerpen, Ideasi" : "Cocok untuk: Artikel, Chatting"}
                            </span>
                        </div>
                        <p className="text-sm text-slate-300 font-mono">
                            <span className="text-indigo-400">User:</span> Buat satu kalimat tentang Kucing.<br/><br/>
                            <span className="text-emerald-400">AI:</span> 
                            {temperature < 0.4 ? " Kucing adalah mamalia karnivora dari keluarga Felidae." : 
                             temperature > 0.7 ? " Kucing itu menari balet di atas pelangi sambil memakan donat stardust." : 
                             " Kucing adalah hewan peliharaan yang lucu dan suka bermain benang."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- TAB 2: TEKNIK RCTF (Meaningful) ---
const RCTFSection = () => {
    return (
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s]">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-2">Anatomi Prompt Sempurna (RCTF)</h2>
                <p className="text-slate-400">Jangan biarkan AI menebak. Berikan instruksi lengkap dengan rumus ini.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {[
                    { l: 'R', t: 'Role (Peran)', d: 'Topi siapa yang dipakai AI?', ex: 'Guru Fisika, Mekanik Senior, HRD', c: 'text-blue-400', bg: 'bg-blue-900/20' },
                    { l: 'C', t: 'Context (Konteks)', d: 'Latar belakang & audiens.', ex: 'Untuk anak TK, Klien marah, Audiens awam', c: 'text-emerald-400', bg: 'bg-emerald-900/20' },
                    { l: 'T', t: 'Task (Tugas)', d: 'Perintah kerja spesifik.', ex: 'Buat, Ringkas, Analisis, Debug', c: 'text-amber-400', bg: 'bg-amber-900/20' },
                    { l: 'F', t: 'Format (Bentuk)', d: 'Tampilan luaran.', ex: 'Tabel, Kode Python, Surat Resmi', c: 'text-purple-400', bg: 'bg-purple-900/20' },
                ].map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border border-slate-700 ${item.bg} hover:scale-105 transition-transform duration-300`}>
                        <div className={`text-4xl font-black ${item.c} mb-2`}>{item.l}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{item.t}</h3>
                        <p className="text-xs text-slate-300 mb-3">{item.d}</p>
                        <div className="bg-black/20 p-2 rounded text-[10px] text-slate-400 font-mono">
                            Contoh: {item.ex}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2"><Edit className="text-rose-400"/> Bedah Prompt: Sampah vs Emas</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-900/10 border border-red-500/30 p-6 rounded-xl relative">
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold">SAMPAH</div>
                        <p className="font-mono text-slate-300 mb-4">"Buatin surat lamaran kerja."</p>
                        <ul className="text-xs text-red-300 space-y-1">
                            <li>❌ Tidak ada Peran (Siapa yang melamar?)</li>
                            <li>❌ Tidak ada Konteks (Lamar jadi apa? Ke mana?)</li>
                            <li>❌ Format tidak jelas (Formal? Santai?)</li>
                        </ul>
                    </div>
                    <div className="bg-emerald-900/10 border border-emerald-500/30 p-6 rounded-xl relative">
                        <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold">EMAS (RCTF)</div>
                        <p className="font-mono text-slate-300 mb-4 text-sm">
                            "<span className="text-blue-400">Bertindak sebagai lulusan SMK Otomotif (R)</span>. 
                            Buat surat lamaran untuk <span className="text-emerald-400">posisi Mekanik Junior di Bengkel Honda AHASS (C)</span>. 
                            <span className="text-amber-400">Tulis dengan nada sopan, sebutkan skill servis injeksi (T)</span>. 
                            <span className="text-purple-400">Format surat resmi standar Indonesia (F)</span>."
                        </p>
                        <div className="flex gap-2 mt-4 text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                            <span className="text-blue-400">● Role</span>
                            <span className="text-emerald-400">● Context</span>
                            <span className="text-amber-400">● Task</span>
                            <span className="text-purple-400">● Format</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- TAB 3: TEKNIK LANJUTAN (Joyful) ---
const AdvancedSection = () => {
    const [technique, setTechnique] = useState<'fewshot' | 'cot' | 'reverse'>('fewshot');

    const content = {
        fewshot: {
            title: "Few-Shot Prompting (Memberi Contoh)",
            desc: "AI belajar dari pola. Berikan contoh input-output agar AI paham format yang aneh sekalipun.",
            code: `Prompt:
"Ubah kalimat keluhan menjadi respon CS yang empati.
User: 'Internet mati mulu!' -> CS: 'Mohon maaf atas ketidaknyamanannya, Kak. Mari kami cek jaringannya ya.'
User: 'Barang pecah!' -> CS: 'Aduh, kami sangat menyesal. Boleh kirimkan fotonya untuk klaim garansi?'
User: 'Aplikasi lemot banget!' -> CS: ..." (AI akan melengkapi pola ini)`
        },
        cot: {
            title: "Chain of Thought (Berpikir Lambat)",
            desc: "AI sering salah di logika/matematika. Paksa dia berpikir langkah demi langkah.",
            code: `Prompt Biasa: 
"Ibu punya 3 apel, beli 2 lagi, dimakan ayah 1. Berapa sisa?" (AI kadang buru-buru menjawab salah).

Prompt CoT:
"Ibu punya 3 apel, beli 2 lagi, dimakan ayah 1. Berapa sisa? Jelaskan langkah berpikirmu step-by-step sebelum menjawab."`
        },
        reverse: {
            title: "Reverse Prompting (Metode Socrates)",
            desc: "Bingung mau nulis prompt? Suruh AI yang bertanya padamu!",
            code: `Prompt:
"Saya ingin membuat Rencana Bisnis Wirausaha Kopi, tapi bingung mulainya. 
Bertindaklah sebagai Konsultan Bisnis. 
Jangan berikan rencana dulu. Sebaliknya, ajukan saya serangkaian pertanyaan tentang modal, target pasar, dan lokasi. 
Setelah saya jawab, baru buatkan rencananya."`
        }
    };

    return (
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s]">
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden flex flex-col md:flex-row min-h-[500px]">
                {/* Sidebar */}
                <div className="md:w-1/3 bg-slate-900 border-r border-slate-700 p-6 space-y-4">
                    <h3 className="text-white font-bold mb-6 flex items-center gap-2"><Lightbulb className="text-amber-400"/> Teknik Ninja</h3>
                    <button onClick={() => setTechnique('fewshot')} className={`w-full text-left p-4 rounded-xl border transition-all ${technique === 'fewshot' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}>
                        <div className="font-bold">1. Few-Shot</div>
                        <div className="text-xs opacity-70">Don't tell, show.</div>
                    </button>
                    <button onClick={() => setTechnique('cot')} className={`w-full text-left p-4 rounded-xl border transition-all ${technique === 'cot' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}>
                        <div className="font-bold">2. Chain of Thought</div>
                        <div className="text-xs opacity-70">Let's think step by step.</div>
                    </button>
                    <button onClick={() => setTechnique('reverse')} className={`w-full text-left p-4 rounded-xl border transition-all ${technique === 'reverse' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}>
                        <div className="font-bold">3. Reverse Prompting</div>
                        <div className="text-xs opacity-70">AI yang bertanya.</div>
                    </button>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">{content[technique].title}</h2>
                    <p className="text-slate-300 mb-6">{content[technique].desc}</p>
                    <div className="bg-black/40 p-6 rounded-xl border border-slate-600 font-mono text-sm text-emerald-300 whitespace-pre-wrap shadow-inner">
                        {content[technique].code}
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- TAB 4: LABORATORIUM JURUSAN (Vocational) ---
const VocationalLab = () => {
    const [jurusan, setJurusan] = useState('otomotif');
    const [rctf, setRctf] = useState({ r: '', c: '', t: '', f: '' });
    const [generatedOutput, setGeneratedOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const presets: Record<string, any> = {
        otomotif: {
            label: "Teknik Otomotif (TKR/TSM)",
            icon: <Wrench size={18}/>,
            hintR: "Kepala Mekanik, Service Advisor",
            hintC: "Pelanggan awam komplain bunyi 'tek tek' di mesin",
            hintT: "Jelaskan kemungkinan penyebab dan estimasi biaya",
            hintF: "Poin-poin sederhana bahasa manusia",
            mockOutput: "Baik, Pak. Berdasarkan bunyi 'tek tek', ada 3 kemungkinan:\n1. Klep Kendor: Perlu stel klep (Biaya ~Rp 50rb).\n2. Rantai Keteng Mulur: Perlu ganti (Biaya ~Rp 150rb).\n3. Stang Seher Kena: Ini berat, harus turun mesin.\nSaran saya: Kita cek nomor 1 & 2 dulu yang murah."
        },
        dkv: {
            label: "DKV & Grafika",
            icon: <Palette size={18}/>,
            hintR: "Creative Director, UX Designer",
            hintC: "Klien UMKM Keripik Tempe ingin rebranding modern",
            hintT: "Berikan 3 ide nama brand & filosofi logo",
            hintF: "Daftar dengan penjelasan psikologi warna",
            mockOutput: "1. Nama: 'TempeZen'. Logo: Daun pisang minimalis membentuk huruf T. Warna: Hijau (Alami) & Emas (Premium).\n2. Nama: 'KriukHub'. Logo: Ikon sinyal wifi dari remah tempe. Warna: Oranye (Semangat/Lapar).\n3. Nama: 'JavaChip'. Logo: Wayang style pixel art. Warna: Coklat & Hitam (Tradisional Modern)."
        },
        akuntansi: {
            label: "Akuntansi (AKL)",
            icon: <Calculator size={18}/>,
            hintR: "Auditor Senior, Ahli Excel",
            hintC: "Data penjualan berantakan, nama barang campur kode",
            hintT: "Buatkan rumus Excel untuk memisahkan Kode & Nama",
            hintF: "Rumus Excel siap copas",
            mockOutput: "Untuk memisahkan 'A001-Buku' (Kode di kiri, pemisah strip):\n\n1. Ambil Kode:\n=LEFT(A1, FIND(\"-\",A1)-1)\n\n2. Ambil Nama Barang:\n=RIGHT(A1, LEN(A1)-FIND(\"-\",A1))\n\nPastikan sel A1 berisi teks yang mau dipisah ya."
        },
        kuliner: {
            label: "Kuliner",
            icon: <Utensils size={18}/>,
            hintR: "Chef Bintang 5, Ahli Gizi",
            hintC: "Sisa bahan di kulkas: Telur, Roti tawar, Susu kental manis",
            hintT: "Buatkan resep dessert mewah tapi mudah",
            hintF: "Langkah memasak bullet points",
            mockOutput: "Resep: 'Bread Pudding Ala Anak Kos Mewah'\n1. Potong roti dadu, tata di mangkuk tahan panas.\n2. Kocok telur + susu kental manis + air sedikit, tuang ke roti.\n3. Kukus 15 menit.\n4. Sajikan hangat. Teksturnya lembut seperti pudding hotel!"
        },
        mesin: {
            label: "Teknik Mesin & Las",
            icon: <Hammer size={18}/>,
            hintR: "Safety Officer, Welder Profesional",
            hintC: "Adik kelas baru belajar Las Listrik (SMAW)",
            hintT: "Buatkan SOP keselamatan kerja (K3) yang tegas",
            hintF: "Checklist K3",
            mockOutput: "SOP PENGELASAN SMAW:\n[ ] APD Wajib: Topeng las, Apron kulit, Sarung tangan kulit, Sepatu safety.\n[ ] Cek Kabel: Pastikan tidak ada kabel terkelupas (Bahaya setrum!).\n[ ] Ventilasi: Pastikan asap las bisa keluar (Bahaya paru-paru).\n[ ] APAR: Siapkan pemadam api ringan di dekat lokasi."
        }
    };

    const handleGenerate = () => {
        if (!rctf.r || !rctf.t) {
            alert("Isi minimal Role dan Task!");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setGeneratedOutput(presets[jurusan].mockOutput); // In real app, call API
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s] pb-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Studio Prompt Vokasional</h2>
                <p className="text-slate-400">Pilih jurusanmu, rakit promptnya, dan lihat hasilnya.</p>
            </div>

            <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 max-w-5xl mx-auto shadow-2xl">
                {/* 1. Pilih Jurusan */}
                <div className="mb-8">
                    <label className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3 block">1. Pilih Jurusan / Keahlian</label>
                    <div className="flex flex-wrap gap-3">
                        {Object.entries(presets).map(([key, val]) => (
                            <button 
                                key={key}
                                onClick={() => { setJurusan(key); setRctf({r:'',c:'',t:'',f:''}); setGeneratedOutput(''); }}
                                className={`px-4 py-2 rounded-full border flex items-center gap-2 text-sm transition-all ${jurusan === key ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg' : 'bg-slate-900 border-slate-600 text-slate-400 hover:bg-slate-700'}`}
                            >
                                {val.icon} {val.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* 2. Builder RCTF */}
                    <div className="space-y-4">
                        <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
                            <h4 className="text-indigo-400 font-bold mb-4 flex items-center gap-2"><Layers size={18}/> Prompt Builder</h4>
                            
                            <div className="space-y-3">
                                <div>
                                    <label className="text-xs text-blue-400 font-bold">ROLE (Peran)</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-blue-500 outline-none"
                                        placeholder={`Contoh: ${presets[jurusan].hintR}`}
                                        value={rctf.r} onChange={e => setRctf({...rctf, r: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-emerald-400 font-bold">CONTEXT (Konteks)</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-emerald-500 outline-none"
                                        placeholder={`Contoh: ${presets[jurusan].hintC}`}
                                        value={rctf.c} onChange={e => setRctf({...rctf, c: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-amber-400 font-bold">TASK (Tugas)</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-amber-500 outline-none"
                                        placeholder={`Contoh: ${presets[jurusan].hintT}`}
                                        value={rctf.t} onChange={e => setRctf({...rctf, t: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-purple-400 font-bold">FORMAT (Bentuk)</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-sm text-white focus:border-purple-500 outline-none"
                                        placeholder={`Contoh: ${presets[jurusan].hintF}`}
                                        value={rctf.f} onChange={e => setRctf({...rctf, f: e.target.value})}
                                    />
                                </div>
                            </div>

                            <button 
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                            >
                                {loading ? <Activity className="animate-spin"/> : <Send size={18}/>} Generate Output AI
                            </button>
                        </div>
                    </div>

                    {/* 3. Output Simulator */}
                    <div className="bg-black/40 rounded-xl border border-slate-600 p-6 flex flex-col relative min-h-[300px]">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-xs text-slate-500 ml-2">AI Output Simulator</span>
                        </div>
                        
                        {generatedOutput ? (
                            <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap animate-[fadeIn_0.5s]">
                                <span className="text-emerald-400 font-bold">AI:</span> {generatedOutput}
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-slate-600">
                                <Terminal size={48} className="mb-4 opacity-50"/>
                                <p className="text-sm">Prompt kamu akan muncul di sini...</p>
                            </div>
                        )}

                        <div className="mt-auto pt-4 text-[10px] text-slate-500 text-center">
                            *Ini adalah simulasi. Di dunia nyata, hasilnya mungkin lebih panjang.
                            <br/><span className="text-amber-500 font-bold">Ingat Integritas:</span> Gunakan output AI sebagai referensi, bukan untuk mencontek total.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- TAB 5: KUIS (Evaluasi) ---
const QuizSection = () => {
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (idx: number) => {
        if (idx === quizQuestions[currentQ].ans) {
            setScore(score + 20);
        }
        
        if (currentQ < quizQuestions.length - 1) {
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
        <div className="container mx-auto px-4 animate-[fadeIn_0.5s] flex items-center justify-center min-h-[60vh]">
            <div className="max-w-xl w-full bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
                {!showResult ? (
                    <>
                        <div className="flex justify-between text-xs text-indigo-400 uppercase tracking-widest mb-6">
                            <span>Soal {currentQ + 1} dari {quizQuestions.length}</span>
                            <span>Asesmen Formatif</span>
                        </div>
                        <h3 className="text-xl font-bold mb-8 text-white">{quizQuestions[currentQ].q}</h3>
                        <div className="space-y-3">
                            {quizQuestions[currentQ].options.map((opt, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => handleAnswer(idx)}
                                    className="w-full text-left p-4 rounded-xl bg-slate-800 text-slate-300 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-700 hover:border-indigo-500"
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 h-1 w-full bg-slate-800 rounded-full">
                            <div className="h-1 bg-indigo-500 rounded-full transition-all duration-300" style={{width: `${((currentQ)/quizQuestions.length)*100}%`}}></div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="mb-6 inline-block p-6 rounded-full bg-slate-800 border-4 border-indigo-500">
                            <span className="text-5xl font-bold text-indigo-400">{score}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                            {score === 100 ? "Master Prompt! 🎉" : score >= 80 ? "Hebat! 👍" : "Belajar Lagi Yuk! 💪"}
                        </h3>
                        <p className="text-slate-400 mb-8">Nilai Penguasaan Materi Anda.</p>
                        <button onClick={resetQuiz} className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-bold text-white transition-colors">
                            Coba Lagi
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- MAIN COMPONENT ---

const Materi7: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      {/* Navigation */}
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      {/* Content */}
      <main className="min-h-[calc(100vh-200px)] relative pb-10">
        {activePage === 'home' && <HomeSection setPage={setActivePage} />}
        {activePage === 'konsep' && <KonsepSection />}
        {activePage === 'rctf' && <RCTFSection />}
        {activePage === 'lanjutan' && <AdvancedSection />}
        {activePage === 'lab' && <VocationalLab />}
        {activePage === 'kuis' && <QuizSection />}
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

export default Materi7;