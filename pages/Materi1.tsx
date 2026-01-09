import React, { useState, useEffect } from 'react';
import { 
  Database, 
  BookOpen, 
  CheckCircle, 
  Save, 
  Trash2, 
  Key, 
  Award,
  ArrowRight,
  BrainCircuit,
  LayoutGrid,
  X,
  FolderOpen,
  AlertTriangle,
  FileText,
  MessageSquare,
  BarChart3,
  ScanLine,
  ArrowDownCircle,
  Search,
  Printer,
  Send
} from 'lucide-react';

// --- DATA & CONTENT ---

const QUIZ_DATA = [
  {
    question: "Dalam analogi 'Lemari', Laci khusus yang hanya berisi baju (sejenis) menggambarkan konsep...",
    options: ["Database", "Tabel (Entitas)", "Field", "Record"],
    answer: 1
  },
  {
    question: "Jika Pak Guru memanggil 'Budi' dan ada 5 siswa menoleh, ini disebut masalah Ambiguitas. Solusinya adalah...",
    options: ["Memanggil nama bapaknya", "Menggunakan Primary Key (NISN)", "Menghapus 4 Budi lainnya", "Menggunakan AI"],
    answer: 1
  },
  {
    question: "Apa yang terjadi jika kita memberi makan AI dengan data sampah (berantakan)?",
    options: ["AI menjadi lebih kreatif", "Prinsip GIGO (Garbage In, Garbage Out)", "AI akan memperbaikinya otomatis", "Komputer menjadi panas"],
    answer: 1
  },
  {
    question: "Satu baris data lengkap dalam tabel (misal: Data lengkap Ahmad Dhani) disebut...",
    options: ["Field", "Record (Tuple)", "Data Value", "Primary Key"],
    answer: 1
  },
  {
    question: "Manakah syarat utama sebuah Primary Key?",
    options: ["Boleh kosong (Null)", "Boleh kembar", "Harus Unik dan Tidak Boleh Kosong", "Harus berupa angka saja"],
    answer: 2
  }
];

// --- COMPONENTS ---

// Internal Navigation for this module
const ModuleNav = ({ page, setPage }: { page: string, setPage: (p: string) => void }) => (
  <div className="sticky top-16 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-700 shadow-lg mb-6 -mx-4 px-4 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
        <span className="text-slate-200 font-bold text-sm tracking-tight hidden md:block">Modul 1: <span className="text-blue-400">Analisis Data</span></span>
        <span className="text-slate-200 font-bold text-sm tracking-tight md:hidden">Modul 1</span>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {['Home', 'Materi', 'Simulasi', 'LKPD', 'Kuis'].map((item) => (
          <button 
            key={item}
            onClick={() => setPage(item.toLowerCase())}
            className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-all ${
              page === item.toLowerCase() 
              ? 'bg-blue-600 text-white' 
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

const Hero = ({ setPage }: { setPage: (p: string) => void }) => (
  <section className="min-h-[calc(100vh-10rem)] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center relative rounded-2xl overflow-hidden mx-0 md:mx-4">
    <div className="absolute inset-0 bg-slate-950/90 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
    <div className="container mx-auto px-4 relative z-10 text-center">
      <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-bold tracking-wider mb-4 animate-[fadeInUp_0.8s_ease-out_forwards]">
        ELEMEN: ANALISIS DATA
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.1s_forwards] opacity-0">
        Fondasi Basis Data & <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Struktur Data AI
        </span>
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] opacity-0">
        "Data adalah minyak baru (Data is the New Oil). Namun, minyak mentah tidak berguna jika tidak diolah. Mari belajar merapikan data agar komputer bisa 'berpikir'."
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center animate-[fadeInUp_0.8s_ease-out_0.3s_forwards] opacity-0">
        <button 
          onClick={() => setPage('materi')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <BookOpen className="w-5 h-5" /> Pelajari Materi
        </button>
        <button 
          onClick={() => setPage('simulasi')}
          className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <BrainCircuit className="w-5 h-5" /> Lab Data
        </button>
      </div>
    </div>
  </section>
);

const Materials = () => {
  return (
    <div className="pt-4 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* KEGIATAN BELAJAR 1 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">1</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mengenal Basis Data (Konsep Mindful)</h2>
          </div>
          
          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 md:p-8 space-y-8">
            {/* Analogi Lemari */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2"><FolderOpen/> Analogi: Kamar Tidur vs Lemari</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Coba bayangkan kamar tidurmu. Jika kamu melempar semua bajumu, buku pelajaran, kabel charger, dan kaus kaki ke satu tumpukan besar di tengah ruangan, apa yang terjadi saat kamu butuh "Buku Matematika" dalam waktu 1 menit?
                  <br/><span className="text-red-400 font-bold">Kamu pasti panik!</span>
                </p>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-600">
                  <p className="text-sm font-semibold text-white mb-2">Solusi: Basis Data (Lemari)</p>
                  <ul className="text-sm text-slate-400 space-y-1">
                    <li>• Ada laci khusus baju (Tabel Baju).</li>
                    <li>• Ada rak khusus buku (Tabel Buku).</li>
                    <li>• Ada kotak khusus kabel (Tabel Kabel).</li>
                  </ul>
                  <p className="text-xs text-emerald-400 mt-2 italic">"Saat kamu butuh buku, kamu langsung tahu harus mencari di mana."</p>
                </div>
              </div>
              <div className="relative h-48 md:h-64 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden border border-slate-700 group">
                <div className="text-center">
                  <Database size={64} className="text-blue-500 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform"/>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">Digital Filing System</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-700"/>

            {/* Anatomi Basis Data */}
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2"><LayoutGrid/> Anatomi Basis Data (Struktur Meaningful)</h3>
              <p className="text-slate-300 mb-6">Agar komputer (dan AI) bisa membaca data, kita harus menyusunnya dalam struktur baku. Struktur ini mirip dengan tabel Excel. Mari kita bedah anatominya:</p>
              
              {/* Visual Table from PDF */}
              <div className="overflow-x-auto bg-slate-900 rounded-lg border border-slate-700 p-1 mb-6">
                 <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-slate-300 font-bold">
                        <th className="p-3 border-b border-slate-600 w-1/4">NISN<br/><span className="text-[10px] text-amber-500 font-normal">(Field / Kunci Primer)</span></th>
                        <th className="p-3 border-b border-slate-600 w-1/4">Nama_Siswa<br/><span className="text-[10px] text-blue-400 font-normal">(Field)</span></th>
                        <th className="p-3 border-b border-slate-600 w-1/4">Kelas<br/><span className="text-[10px] text-blue-400 font-normal">(Field)</span></th>
                        <th className="p-3 border-b border-slate-600 w-1/4">Jurusan<br/><span className="text-[10px] text-blue-400 font-normal">(Field)</span></th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-400">
                      <tr className="hover:bg-slate-800/50 border-b border-slate-800">
                        <td className="p-3 text-emerald-400 font-mono">0051234567</td>
                        <td className="p-3">Ahmad Dhani</td>
                        <td className="p-3">X</td>
                        <td className="p-3">TJKT</td>
                      </tr>
                      <tr className="hover:bg-slate-800/50 border-b border-slate-800 bg-blue-900/10">
                        <td className="p-3 text-emerald-400 font-mono">0051234568</td>
                        <td className="p-3">Budi Santoso</td>
                        <td className="p-3">X</td>
                        <td className="p-3">DKV</td>
                      </tr>
                      <tr className="hover:bg-slate-800/50">
                        <td className="p-3 text-emerald-400 font-mono">0051234569</td>
                        <td className="p-3">Citra Kirana</td>
                        <td className="p-3">X</td>
                        <td className="p-3">Akuntansi</td>
                      </tr>
                    </tbody>
                 </table>
                 <div className="bg-blue-900/10 text-center text-xs text-blue-300 p-1">
                    ⬆️ Baris berwarna biru di atas disebut <strong>1 Record</strong> ⬆️
                 </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <strong className="text-emerald-400 block mb-2 text-lg">1. Tabel (Entitas)</strong>
                  <p className="mb-2">Wadah spesifik untuk data sejenis.</p>
                  <p className="text-xs text-slate-500">Analogi: Laci Lemari.<br/>Contoh: Tabel Siswa.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <strong className="text-blue-400 block mb-2 text-lg">2. Field (Kolom)</strong>
                  <p className="mb-2">Judul kolom / jenis atribut.</p>
                  <p className="text-xs text-slate-500">Analogi: Label pada map folder.<br/>Contoh: Nama, Kelas, Jurusan.</p>
                </div>
                <div className="bg-slate-900 p-4 rounded border border-slate-700">
                  <strong className="text-amber-400 block mb-2 text-lg">3. Record (Baris)</strong>
                  <p className="mb-2">Satu kesatuan data lengkap (horizontal).</p>
                  <p className="text-xs text-slate-500">Analogi: Satu lembar formulir isian.<br/>Contoh: Data lengkap Budi Santoso.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KEGIATAN BELAJAR 2 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold">2</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Kunci Primer (Primary Key)</h2>
          </div>

          <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 md:p-8">
            <div className="bg-rose-900/20 border border-rose-500/30 p-4 rounded-xl mb-6">
               <h3 className="text-rose-400 font-bold flex items-center gap-2 mb-2"><AlertTriangle size={20}/> Masalah "Si Budi"</h3>
               <p className="text-slate-300">
                 Di Indonesia, nama "Budi" atau "Siti" sangat pasaran. Bayangkan jika di SMK Negeri 1 Kaligondang ada 5 siswa bernama "Budi Santoso".
                 <br/><br/>
                 Jika Pak Guru berkata: <em>"Tolong panggilkan Budi Santoso!"</em>, maka 5 orang akan datang. Ini disebut <strong>Ambiguitas</strong>. 
                 Komputer dan AI <strong className="text-white">SANGAT MEMBENCI ambiguitas</strong>. Komputer butuh kepastian 100%.
               </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-amber-400">Solusi: Kolom Sakti (Primary Key)</h3>
                <p className="text-slate-300">
                  Setiap tabel WAJIB memiliki satu kolom sakti yang isinya <strong>UNIK (Tidak Boleh Kembar)</strong>.
                </p>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-600">
                    <h4 className="font-bold text-white mb-2">3 Syarat Primary Key:</h4>
                    <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-300"><CheckCircle size={16} className="text-emerald-500"/> <strong>Unik:</strong> Tidak ada dua baris yang isinya sama.</li>
                    <li className="flex items-center gap-2 text-slate-300"><CheckCircle size={16} className="text-emerald-500"/> <strong>Not Null:</strong> Tidak boleh kosong.</li>
                    <li className="flex items-center gap-2 text-slate-300"><CheckCircle size={16} className="text-emerald-500"/> <strong>Immutable:</strong> Sebaiknya tidak berubah-ubah.</li>
                    </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">Contoh Primary Key Dunia Nyata:</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="bg-amber-500/20 p-2 rounded text-amber-400"><Key size={20}/></div>
                    <div>
                      <div className="text-white font-bold text-sm">NISN</div>
                      <div className="text-xs text-slate-500">Nomor Induk Siswa Nasional (Budi A dan Budi B pasti beda)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="bg-amber-500/20 p-2 rounded text-amber-400"><ScanLine size={20}/></div>
                    <div>
                      <div className="text-white font-bold text-sm">NIK</div>
                      <div className="text-xs text-slate-500">Nomor Induk Kependudukan (Ada di KTP)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-900 rounded border border-slate-700">
                    <div className="bg-amber-500/20 p-2 rounded text-amber-400"><FileText size={20}/></div>
                    <div>
                      <div className="text-white font-bold text-sm">No. Struk Belanja</div>
                      <div className="text-xs text-slate-500">Agar kasir Alfamart/Indomaret tidak bingung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KEGIATAN BELAJAR 3 */}
        <div className="mb-16 animate-[fadeIn_0.5s]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">3</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Hubungan Data dengan AI (Joyful Learning)</h2>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-emerald-900/20 rounded-2xl border border-slate-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-4">"Mengapa Saya Harus Belajar Ini?"</h3>
            <p className="text-slate-300 mb-6 text-lg">
              Mungkin kalian berpikir ingin membuat Robot AI, kenapa harus belajar tabel?
              <br/>Jawabannya sederhana: <strong>AI Memakan Data.</strong>
            </p>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-600 mb-6">
                <h4 className="text-lg font-bold text-emerald-400 mb-2">Studi Kasus: AI Kantin Sekolah</h4>
                <p className="text-slate-300 mb-4">Kalian ingin membuat AI yang bisa memprediksi harga jajanan di kantin.</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-900/10 p-4 rounded-lg border border-red-500/30">
                        <div className="flex items-center gap-2 mb-2">
                            <Trash2 className="text-red-400" size={18}/>
                            <strong className="text-red-400">Data Berantakan</strong>
                        </div>
                        <ul className="text-sm text-slate-400 italic list-disc list-inside space-y-1">
                            <li>"Bakso enak 5 ribu"</li>
                            <li>"Es teh manis banget 3000"</li>
                            <li>"Gorengan anget seribuan"</li>
                        </ul>
                        <div className="mt-4 p-2 bg-red-900/20 rounded text-red-200 text-xs">
                        🤖 <strong>AI Bingung:</strong> "Mana nama barang? Mana harga? Saya pusing."
                        </div>
                    </div>
                    
                    <div className="bg-emerald-900/10 p-4 rounded-lg border border-emerald-500/30">
                        <div className="flex items-center gap-2 mb-2">
                            <Database className="text-emerald-400" size={18}/>
                            <strong className="text-emerald-400">Data Terstruktur</strong>
                        </div>
                        <table className="w-full text-xs text-left text-slate-300 mb-2">
                            <thead className="text-slate-500"><tr><th>Barang</th><th>Harga</th></tr></thead>
                            <tbody>
                                <tr><td>Bakso</td><td>5000</td></tr>
                                <tr><td>Es Teh</td><td>3000</td></tr>
                            </tbody>
                        </table>
                        <div className="mt-4 p-2 bg-emerald-900/20 rounded text-emerald-200 text-xs">
                        🤖 <strong>AI Cerdas:</strong> "Oke! Rata-rata harga makanan adalah Rp 4.000."
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
               <h4 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-1">GIGO</h4>
               <p className="text-white font-bold text-lg">Garbage In, Garbage Out</p>
               <p className="text-slate-400 text-sm mt-2">Masuk Sampah, Keluar Sampah. Jadi, langkah pertama menjadi ahli AI bukan belajar coding rumit, tapi belajar <strong>Merapikan Data</strong>.</p>
            </div>
          </div>
        </div>

        {/* REFLEKSI */}
        <div className="bg-slate-800/50 border border-indigo-500/30 p-8 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center justify-center gap-2"><FileText/> Lembar Refleksi (Untuk Dibaca di Rumah)</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Sebelum menutup modul ini, coba ambil <strong>Kartu Pelajar</strong> atau <strong>KTP</strong>-mu. Tataplah kartu tersebut selama 1 menit.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
             <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
               <span className="text-indigo-500 font-bold text-xl block mb-2">1</span>
               <p className="text-slate-300 text-sm">Dapatkah kamu menemukan mana yang merupakan "Data Value"?</p>
             </div>
             <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
               <span className="text-indigo-500 font-bold text-xl block mb-2">2</span>
               <p className="text-slate-300 text-sm">Dapatkah kamu menunjuk mana yang berfungsi sebagai "Primary Key"?</p>
             </div>
             <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-indigo-500 transition-colors">
               <span className="text-indigo-500 font-bold text-xl block mb-2">3</span>
               <p className="text-slate-300 text-sm">Bayangkan jika satu angka saja pada Primary Key itu salah ketik, masalah apa yang akan terjadi pada hidupmu?</p>
             </div>
          </div>
          <p className="mt-8 text-lg font-serif italic text-slate-400">"Data yang rapi adalah awal dari teknologi yang cerdas."</p>
        </div>

      </div>
    </div>
  );
};

const Simulation = () => {
  // Initial Messy Data (Chat Simulation based on PDF Case)
  const incomingChats = [
    { id: 1, text: "Bakso enak 5 ribu", status: 'pending' },
    { id: 2, text: "Es teh manis banget 3000", status: 'pending' },
    { id: 3, text: "Gorengan anget seribuan", status: 'pending' }
  ];

  const [chats, setChats] = useState(incomingChats);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  
  // Existing data simulates existing database
  const [dbData, setDbData] = useState([
    { id: 'K-001', item: 'Nasi Rames', price: 6000 },
  ]);
  
  const [inputForm, setInputForm] = useState({ id: '', item: '', price: '' });
  const [error, setError] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState<null | {avg: number, count: number, insight: string}>(null);

  // Select a chat to process
  const handleSelectChat = (chatId: number) => {
    setSelectedChat(chatId);
    setError('');
    
    // Auto-fill logic for demo purposes (User extracts data)
    const chatText = chats.find(c => c.id === chatId)?.text || "";
    let suggestedItem = "";
    let suggestedPrice = "";
    
    if (chatText.includes("Bakso")) { suggestedItem = "Bakso"; suggestedPrice = "5000"; }
    else if (chatText.includes("Es teh")) { suggestedItem = "Es Teh Manis"; suggestedPrice = "3000"; }
    else if (chatText.includes("Gorengan")) { suggestedItem = "Gorengan"; suggestedPrice = "1000"; }

    setInputForm({ id: '', item: suggestedItem, price: suggestedPrice }); 
  };

  const handleAddToDB = () => {
    // 1. Validation (GIGO Check)
    if (!inputForm.id || !inputForm.item || !inputForm.price) {
      setError("❌ GIGO ALERT: Data tidak lengkap! AI butuh data spesifik.");
      return;
    }
    // Check Primary Key Uniqueness
    if (dbData.some(d => d.id === inputForm.id)) {
      setError(`❌ PK CONFLICT: ID '${inputForm.id}' sudah ada. Primary Key harus unik.`);
      return;
    }

    // 2. Add to DB
    const newItem = {
      id: inputForm.id,
      item: inputForm.item,
      price: parseInt(inputForm.price),
    };

    setDbData([...dbData, newItem]);
    
    // 3. Update Chat Status
    if (selectedChat) {
      setChats(chats.map(c => c.id === selectedChat ? { ...c, status: 'processed' } : c));
      setSelectedChat(null);
    }

    // 4. Reset Form
    setInputForm({ id: '', item: '', price: '' });
    setError('');
    
    // 5. Trigger AI Update
    updateAI([...dbData, newItem]);
  };

  const updateAI = (data: any[]) => {
    const total = data.reduce((acc, curr) => acc + curr.price, 0);
    const count = data.length;
    const avg = total / count;
    
    let insight = "Data masih sedikit.";
    if (count >= 3) insight = `Rata-rata harga kantin adalah Rp ${Math.round(avg)}.`;
    
    setAiAnalysis({ avg, count, insight });
  };

  const handleDelete = (id: string) => {
     const newData = dbData.filter(d => d.id !== id);
     setDbData(newData);
     updateAI(newData);
  };

  return (
    <div className="pt-8 pb-12 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
             <BrainCircuit className="text-blue-400" /> Lab Data Kantin
           </h2>
           <p className="text-slate-400">Tugasmu: Ubah "Celotehan Siswa" (Unstructured) menjadi "Database Kantin" (Structured) agar AI bisa menghitung rata-rata harga.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* COLUMN 1: UNSTRUCTURED DATA (SOURCE) */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col h-[500px]">
             <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                <h3 className="font-bold text-slate-300 flex items-center gap-2">
                  <MessageSquare size={18} className="text-pink-400"/> Data Mentah
                </h3>
                <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-400">Unstructured</span>
             </div>
             <div className="space-y-3 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {chats.map(chat => (
                  <div 
                    key={chat.id}
                    onClick={() => chat.status === 'pending' && handleSelectChat(chat.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all relative ${
                      chat.status === 'processed' 
                      ? 'bg-slate-900/30 border-slate-800 opacity-50 grayscale' 
                      : selectedChat === chat.id 
                        ? 'bg-blue-600 border-blue-400 shadow-lg scale-105 z-10' 
                        : 'bg-slate-700 border-slate-600 hover:bg-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold opacity-70">Siswa #{chat.id}</span>
                      {chat.status === 'processed' && <CheckCircle size={14} className="text-emerald-500"/>}
                    </div>
                    <p className="text-sm text-white">"{chat.text}"</p>
                    {selectedChat === chat.id && (
                       <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white text-blue-600 rounded-full p-1 animate-pulse hidden lg:block">
                          <ArrowRight size={16}/>
                       </div>
                    )}
                  </div>
                ))}
             </div>
             <div className="mt-4 text-xs text-center text-slate-500 italic">
               *Klik chat untuk memproses data
             </div>
          </div>

          {/* COLUMN 2: PROCESSING (FORM) */}
          <div className="bg-slate-800 border border-indigo-500/30 rounded-2xl p-6 flex flex-col h-[500px] shadow-2xl relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                <ScanLine size={12}/> PROSES ETL
             </div>

             <div className="mb-6 mt-2">
               <p className="text-xs text-slate-400 mb-2 uppercase font-bold">Data Mentah Terpilih:</p>
               <div className="bg-slate-950 p-3 rounded-lg border border-slate-700 min-h-[60px] flex items-center justify-center text-center">
                  {selectedChat 
                    ? <span className="text-indigo-300 italic">"{chats.find(c => c.id === selectedChat)?.text}"</span> 
                    : <span className="text-slate-600 italic">Pilih data di sebelah kiri...</span>}
               </div>
             </div>

             <div className="space-y-4 flex-1 overflow-y-auto pr-1">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400">Kode Barang (Primary Key)</label>
                  <div className="relative">
                    <Key size={12} className="absolute left-2 top-2.5 text-amber-500"/>
                    <input 
                      type="text" 
                      placeholder="Ex: K-002" 
                      value={inputForm.id}
                      onChange={e => setInputForm({...inputForm, id: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-600 rounded p-2 pl-6 text-sm text-white focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <p className="text-[9px] text-amber-500/80 mt-1">*Harus Unik (Tidak boleh kembar)</p>
                </div>

                <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400">Nama Barang (Field)</label>
                    <input 
                      type="text" 
                      placeholder="Ex: Bakso" 
                      value={inputForm.item}
                      onChange={e => setInputForm({...inputForm, item: e.target.value})}
                      className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-indigo-500 outline-none"
                    />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400">Harga (Field)</label>
                  <input 
                    type="number" 
                    placeholder="Rp" 
                    value={inputForm.price}
                    onChange={e => setInputForm({...inputForm, price: e.target.value})}
                    className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-indigo-500 outline-none"
                  />
                </div>
             </div>

             {error && (
               <div className="mt-2 p-2 bg-red-900/50 border border-red-500 rounded text-xs text-red-200 flex items-center gap-1 animate-pulse">
                 <AlertTriangle size={12}/> {error}
               </div>
             )}

             <button 
                onClick={handleAddToDB}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl mt-4 flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-emerald-900/20"
             >
               <Save size={16}/> Simpan ke Database
             </button>
          </div>

          {/* COLUMN 3: STRUCTURED DATA & AI (OUTPUT) */}
          <div className="flex flex-col gap-4 h-[500px]">
            {/* Table */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex-1 overflow-hidden flex flex-col">
               <div className="flex items-center justify-between mb-2">
                 <h3 className="font-bold text-slate-300 flex items-center gap-2">
                    <Database size={18} className="text-emerald-400"/> Tabel: Menu_Kantin
                 </h3>
                 <span className="text-xs bg-emerald-900/30 text-emerald-400 px-2 py-1 rounded border border-emerald-500/30">Structured</span>
               </div>
               
               <div className="overflow-auto flex-1 custom-scrollbar rounded-lg border border-slate-700 bg-slate-900/50">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-800 text-slate-400 sticky top-0">
                      <tr>
                        <th className="p-2 text-amber-500">Kode (PK)</th>
                        <th className="p-2">Barang</th>
                        <th className="p-2 text-right">Harga</th>
                        <th className="p-2 text-center">Del</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      {dbData.map(row => (
                        <tr key={row.id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                           <td className="p-2 font-mono text-amber-200">{row.id}</td>
                           <td className="p-2 font-bold">{row.item}</td>
                           <td className="p-2 text-right">{row.price.toLocaleString('id-ID')}</td>
                           <td className="p-2 text-center">
                             <button onClick={() => handleDelete(row.id)} className="text-slate-600 hover:text-red-400"><Trash2 size={12}/></button>
                           </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>

            {/* AI Dashboard */}
            <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-4 border border-indigo-500/50 shadow-lg relative overflow-hidden h-[180px]">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <BarChart3 size={100} className="text-white"/>
               </div>
               
               <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                 <BrainCircuit size={18} className="text-pink-400 animate-pulse"/> Analisis AI Kantin
               </h3>

               {aiAnalysis ? (
                 <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                       <div className="text-[10px] text-indigo-200 uppercase">Jumlah Menu</div>
                       <div className="text-xl font-bold text-white">{aiAnalysis.count}</div>
                    </div>
                    <div className="bg-black/20 p-2 rounded-lg backdrop-blur-sm">
                       <div className="text-[10px] text-indigo-200 uppercase">Rata-rata Harga</div>
                       <div className="text-xl font-bold text-white">Rp {Math.round(aiAnalysis.avg || 0).toLocaleString('id-ID')}</div>
                    </div>
                    <div className="col-span-2 bg-black/20 p-2 rounded-lg backdrop-blur-sm flex items-start gap-2">
                       <div className="w-1.5 h-full bg-emerald-500 rounded-full"></div>
                       <p className="text-xs text-indigo-100 italic">"{aiAnalysis.insight}"</p>
                    </div>
                 </div>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-indigo-300 text-xs text-center opacity-70">
                    <Database size={24} className="mb-2"/>
                    Menunggu data terstruktur...
                 </div>
               )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const LKPDSection = () => {
  const [identity, setIdentity] = useState({
    kelas: '',
    kelompok: '',
    anggota: Array(7).fill('')
  });

  const [task1, setTask1] = useState({
    objectName: '',
    tableName: '',
    fields: '',
    pk: ''
  });

  const [task2, setTask2] = useState({
    header1: '', header2: '', header3: '', header4: '',
    rows: [
      { c1: '', c2: '', c3: '', c4: '' },
      { c1: '', c2: '', c3: '', c4: '' },
      { c1: '', c2: '', c3: '', c4: '' }
    ]
  });

  const [task3, setTask3] = useState({
    ref1: '',
    ref2: ''
  });

  const updateMember = (index: number, val: string) => {
    const newMembers = [...identity.anggota];
    newMembers[index] = val;
    setIdentity({...identity, anggota: newMembers});
  };

  const updateTask2Row = (rowIdx: number, col: string, val: string) => {
    const newRows = [...task2.rows];
    newRows[rowIdx] = { ...newRows[rowIdx], [col]: val };
    setTask2({ ...task2, rows: newRows });
  };

  const handlePrint = () => {
    const win = window.open('', '', 'height=800,width=800');
    if (!win) return;

    const htmlContent = `
      <html>
        <head>
          <title>LKPD Digital - Detektif Data</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #000; }
            h1, h2, h3 { text-align: center; }
            .section { margin-bottom: 20px; border: 1px solid #000; padding: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #000; padding: 5px; text-align: left; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>LEMBAR KERJA PESERTA DIDIK (LKPD)</h1>
          <h2>Judul Kegiatan: Detektif Data</h2>
          
          <div class="section">
            <p><span class="label">Kelas:</span> ${identity.kelas}</p>
            <p><span class="label">Kelompok:</span> ${identity.kelompok}</p>
            <p><span class="label">Nama Anggota:</span></p>
            <ol>
              ${identity.anggota.filter(m => m).map(m => `<li>${m}</li>`).join('')}
            </ol>
          </div>

          <div class="section">
            <h3>TUGAS 1: Identifikasi Komponen</h3>
            <p><span class="label">Objek yang diamati:</span> ${task1.objectName}</p>
            <table>
              <tr><th>Konsep Database</th><th>Temuan</th></tr>
              <tr><td>Nama Tabel</td><td>${task1.tableName}</td></tr>
              <tr><td>Calon Field</td><td>${task1.fields}</td></tr>
              <tr><td>Calon Primary Key</td><td>${task1.pk}</td></tr>
            </table>
          </div>

          <div class="section">
            <h3>TUGAS 2: Simulasi Tabel</h3>
            <table>
              <tr>
                <th>${task2.header1 || 'Field 1 (PK)'}</th>
                <th>${task2.header2 || 'Field 2'}</th>
                <th>${task2.header3 || 'Field 3'}</th>
                <th>${task2.header4 || 'Field 4'}</th>
              </tr>
              ${task2.rows.map(r => `
                <tr>
                  <td>${r.c1}</td><td>${r.c2}</td><td>${r.c3}</td><td>${r.c4}</td>
                </tr>
              `).join('')}
            </table>
          </div>

          <div class="section">
            <h3>TUGAS 3: Refleksi</h3>
            <p><span class="label">1. Kesulitan menentukan Primary Key?</span><br/>${task3.ref1}</p>
            <p><span class="label">2. Manfaat digitalisasi data?</span><br/>${task3.ref2}</p>
          </div>
        </body>
      </html>
    `;

    win.document.write(htmlContent);
    win.document.close();
    win.print();
  };

  const openGoogleForm = () => {
    window.open('https://forms.gle/StQrCLNnhSUujg3H7', '_blank');
  };

  return (
    <div className="pt-8 pb-12 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8 border-b border-slate-700 pb-6">
            <h2 className="text-3xl font-bold text-white mb-2">LKPD Digital: Detektif Data</h2>
            <p className="text-slate-400">Transformasi Objek Nyata ke Basis Data</p>
          </div>

          {/* Identity Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-indigo-400 mb-4 uppercase tracking-wider">Identitas Kelompok</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kelas</label>
                <input type="text" value={identity.kelas} onChange={e => setIdentity({...identity, kelas: e.target.value})} className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-white focus:border-indigo-500 outline-none" placeholder="Contoh: X TJKT 1" />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Kelompok</label>
                <input type="text" value={identity.kelompok} onChange={e => setIdentity({...identity, kelompok: e.target.value})} className="w-full bg-slate-900 border border-slate-600 rounded p-2 text-white focus:border-indigo-500 outline-none" placeholder="Nama Kelompok" />
              </div>
            </div>
            <label className="block text-xs text-slate-400 mb-1">Nama Anggota (Isi sesuai jumlah anggota)</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {identity.anggota.map((member, idx) => (
                <input key={idx} type="text" value={member} onChange={e => updateMember(idx, e.target.value)} className="bg-slate-900 border border-slate-600 rounded p-2 text-sm text-white focus:border-indigo-500 outline-none" placeholder={`Anggota ${idx + 1}`} />
              ))}
            </div>
          </div>

          {/* Task 1 */}
          <div className="mb-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-bold text-emerald-400 mb-4">TUGAS 1: Identifikasi Komponen</h3>
            <p className="text-sm text-slate-400 mb-4">Ambil satu objek nyata (Kartu Pelajar / Struk Belanja), lalu analisis.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Objek yang diamati</label>
                <input type="text" value={task1.objectName} onChange={e => setTask1({...task1, objectName: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Misal: Struk Belanja Alfamart" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Nama Tabel (Database)</label>
                  <input type="text" value={task1.tableName} onChange={e => setTask1({...task1, tableName: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Misal: Tabel Penjualan" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Calon Primary Key</label>
                  <input type="text" value={task1.pk} onChange={e => setTask1({...task1, pk: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Cari kode unik..." />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Calon Field (Kolom)</label>
                <input type="text" value={task1.fields} onChange={e => setTask1({...task1, fields: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white" placeholder="Sebutkan minimal 4, misal: Tanggal, Nama Barang..." />
              </div>
            </div>
          </div>

          {/* Task 2 */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-amber-400 mb-4">TUGAS 2: Simulasi Tabel</h3>
            <p className="text-sm text-slate-400 mb-4">Salin data dari objek nyata ke format tabel di bawah ini.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-slate-300">
                <thead>
                  <tr className="bg-slate-700 text-white">
                    <th className="p-2"><input type="text" value={task2.header1} onChange={e => setTask2({...task2, header1: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none text-amber-300 placeholder-amber-300/50" placeholder="Field 1 (PK)" /></th>
                    <th className="p-2"><input type="text" value={task2.header2} onChange={e => setTask2({...task2, header2: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none placeholder-slate-400" placeholder="Field 2" /></th>
                    <th className="p-2"><input type="text" value={task2.header3} onChange={e => setTask2({...task2, header3: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none placeholder-slate-400" placeholder="Field 3" /></th>
                    <th className="p-2"><input type="text" value={task2.header4} onChange={e => setTask2({...task2, header4: e.target.value})} className="bg-transparent border-b border-slate-500 w-full focus:outline-none placeholder-slate-400" placeholder="Field 4" /></th>
                  </tr>
                </thead>
                <tbody>
                  {task2.rows.map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-700">
                      <td className="p-2"><input type="text" value={row.c1} onChange={e => updateTask2Row(idx, 'c1', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder={`Data ${idx+1} PK`} /></td>
                      <td className="p-2"><input type="text" value={row.c2} onChange={e => updateTask2Row(idx, 'c2', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder="..." /></td>
                      <td className="p-2"><input type="text" value={row.c3} onChange={e => updateTask2Row(idx, 'c3', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder="..." /></td>
                      <td className="p-2"><input type="text" value={row.c4} onChange={e => updateTask2Row(idx, 'c4', e.target.value)} className="bg-transparent w-full focus:outline-none text-white" placeholder="..." /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Task 3 */}
          <div className="mb-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
            <h3 className="text-lg font-bold text-purple-400 mb-4">TUGAS 3: Refleksi Deep Learning</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-2">1. Apakah kalian menemukan kesulitan menentukan Primary Key? Mengapa?</label>
                <textarea value={task3.ref1} onChange={e => setTask3({...task3, ref1: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-3 text-white h-20" placeholder="Jawab di sini..."></textarea>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-2">2. Jika data ini dimasukkan ke komputer, manfaat apa yang didapat dibandingkan menyimpannya di kertas?</label>
                <textarea value={task3.ref2} onChange={e => setTask3({...task3, ref2: e.target.value})} className="w-full bg-slate-800 border border-slate-600 rounded p-3 text-white h-20" placeholder="Jawab di sini..."></textarea>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4 border-t border-slate-700">
            <button 
              onClick={handlePrint}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
            >
              <Printer size={20} /> Simpan ke PDF
            </button>
            <button 
              onClick={openGoogleForm}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/30"
            >
              <Send size={20} /> Kirim LKPD ke Guru
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    if (idx === QUIZ_DATA[currentQ].answer) {
      setScore(score + 20); // 5 questions, 20 points each
    }
    
    setTimeout(() => {
      if (currentQ < QUIZ_DATA.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  return (
    <div className="pt-8 pb-12 min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        {!showResult ? (
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                Pertanyaan {currentQ + 1}/{QUIZ_DATA.length}
              </span>
              <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-bold">
                Kuis Analisis Data
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 leading-snug">
              {QUIZ_DATA[currentQ].question}
            </h3>

            <div className="space-y-3">
              {QUIZ_DATA[currentQ].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={selected !== null}
                  className={`w-full text-left p-5 rounded-xl border font-medium transition-all ${
                    selected === idx 
                      ? idx === QUIZ_DATA[currentQ].answer 
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-red-500/20 border-red-500 text-red-300'
                      : 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {opt}
                    {selected === idx && (
                      idx === QUIZ_DATA[currentQ].answer 
                        ? <CheckCircle className="w-5 h-5 text-emerald-500" />
                        : <X className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 shadow-2xl text-center">
            <Award className="w-20 h-20 text-amber-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-2">Kuis Selesai!</h3>
            <p className="text-slate-400 mb-8">Kamu telah menyelesaikan tantangan ini.</p>
            
            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
              {score}
              <span className="text-2xl text-slate-500 font-normal">/100</span>
            </div>

            <button 
              onClick={resetQuiz}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/40"
            >
              Ulangi Kuis
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Materi1: React.FC = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="text-slate-200 font-sans selection:bg-blue-500 selection:text-white -mt-4">
      {/* Internal Navigation for this module */}
      <ModuleNav page={page} setPage={setPage} />
      
      <main className="animate-[fadeIn_0.5s]">
        {page === 'home' && <Hero setPage={setPage} />}
        {page === 'materi' && <Materials />}
        {page === 'simulasi' && <Simulation />}
        {page === 'lkpd' && <LKPDSection />}
        {page === 'kuis' && <Quiz />}
      </main>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .typing-effect {
          border-right: 2px solid #6366f1;
          animation: blink 0.75s step-end infinite;
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #6366f1; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.8);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Materi1;