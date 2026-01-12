import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Play, 
  BookOpen, 
  CheckCircle, 
  Terminal, 
  Cpu, 
  Users, 
  Award, 
  ChevronRight, 
  RefreshCcw, 
  Save, 
  Trash2, 
  Search,
  FileSpreadsheet,
  Package,
  AlertTriangle,
  Key,
  PenTool
} from 'lucide-react';

// --- DATA & KONSTANTA ---

const INITIAL_SISWA = [
  { id: 101, nama: "Dian Sastro", kelas: "X PPLG", nilai: 85 },
  { id: 102, nama: "Budi Santoso", kelas: "X TJKT", nilai: 78 },
  { id: 103, nama: "Budi Santoso", kelas: "X DKV", nilai: 90 },
];

const INITIAL_BUKU = [
  { id: 1, judul: "Sejarah Dunia", penulis: "E.H. Gombrich", stok: 2 },
  { id: 2, judul: "Belajar Python", penulis: "Budi Raharjo", stok: 3 },
];

const PAGES = {
  HOME: 'home',
  MATERI: 'materi',
  SIMULASI: 'simulasi',
  ASESMEN: 'asesmen'
};

// --- KOMPONEN UI ---

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', type = "button", disabled = false }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30",
    secondary: "bg-slate-700 hover:bg-slate-600 text-slate-200 border border-slate-600",
    danger: "bg-rose-600 hover:bg-rose-700 text-white",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white",
    outline: "border border-indigo-500 text-indigo-400 hover:bg-indigo-950"
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ElementType;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon: Icon, className = "" }) => (
  <div className={`bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl ${className}`}>
    <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-4">
      {Icon && <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400"><Icon size={24} /></div>}
      <h3 className="text-xl font-bold text-slate-100">{title}</h3>
    </div>
    <div className="text-slate-300">
      {children}
    </div>
  </div>
);

// --- KOMPONEN HALAMAN ---

const ModuleNav = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => (
  <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700 sticky top-16 z-30 -mx-4 px-4 mb-6 transition-all">
    <div className="container mx-auto h-14 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 rounded-lg">
          <Database className="text-white" size={16} />
        </div>
        <div>
          <h1 className="text-sm font-bold text-slate-100 leading-tight">Modul 3</h1>
          <p className="text-[10px] text-indigo-400 font-medium hidden sm:block">Basis Data & SQL</p>
        </div>
      </div>
      
      <nav className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar">
        {[
          { id: PAGES.HOME, label: 'Beranda', icon: Database },
          { id: PAGES.MATERI, label: 'Materi', icon: BookOpen },
          { id: PAGES.SIMULASI, label: 'Lab SQL', icon: Terminal },
          { id: PAGES.ASESMEN, label: 'Evaluasi', icon: Award },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPage(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap ${
              activePage === item.id 
              ? 'bg-slate-800 text-indigo-400 border border-slate-700' 
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

// 1. HALAMAN BERANDA (MINDFULL)
const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <div className="space-y-12 py-8 animate-[fadeIn_0.5s]">
    {/* Hero Section */}
    <section className="text-center space-y-6 py-12 px-4 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>
      <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium border border-indigo-500/20 mb-4">
        Elemen: Analisis Data
      </span>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
        Data di Sekitar Kita <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">(Mindful Learning)</span>
      </h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Pernahkah kalian membayangkan bagaimana <strong>Instagram</strong> menyimpan jutaan foto? 
        Atau bagaimana sekolah menyimpan data ribuan siswa tanpa tertukar?
        Jawabannya adalah <strong className="text-white">Basis Data (Database)</strong>.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
        <Button onClick={() => setPage(PAGES.MATERI)} className="text-lg px-8 py-4 justify-center">
          Pelajari Konsep <ChevronRight size={20} />
        </Button>
        <Button onClick={() => setPage(PAGES.SIMULASI)} variant="outline" className="text-lg px-8 py-4 justify-center">
          Tantangan Pustaka Jaya
        </Button>
      </div>
    </section>

    {/* Learning Path */}
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
      <Card title="KB 1: Konsep" icon={Database} className="bg-slate-800/50 backdrop-blur">
        <p>Analogi Lemari Arsip vs Gudang Logistik Digital. Memahami Primary Key.</p>
      </Card>
      <Card title="KB 2: SQL & AI" icon={Cpu} className="bg-slate-800/50 backdrop-blur">
        <p>Berbicara dengan data menggunakan SQL dan memanfaatkan AI sebagai "Coding Buddy".</p>
      </Card>
      <Card title="KB 3: CRUD" icon={Terminal} className="bg-slate-800/50 backdrop-blur">
        <p>Praktik 4 Jurus Dasar: Create (Insert), Read (Select), Update, Delete.</p>
      </Card>
    </div>
  </div>
);

// 2. HALAMAN MATERI (MEANINGFUL)
const Materi = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 space-y-8 animate-[fadeIn_0.5s]">
      
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-900 p-1 rounded-xl flex">
          {["1. Konsep Dasar", "2. SQL & AI", "3. Operasi CRUD"].map((t, i) => (
            <button
              key={i}
              onClick={() => setTab(i)}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all ${
                tab === i 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT TAB 1 */}
      {tab === 0 && (
        <div className="space-y-8 animate-[fadeIn_0.3s]">
          {/* Analogy Section */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Analogi: Tempat Penyimpanan</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><FileSpreadsheet size={100} /></div>
                <div className="flex items-center gap-3 mb-4 text-slate-400">
                  <FileSpreadsheet size={28} />
                  <h4 className="text-xl font-bold">Spreadsheet (Excel)</h4>
                </div>
                <p className="text-slate-300 font-medium mb-2">"Lemari Arsip Pribadi"</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>• Kamu buka sendiri, coret-coret sendiri.</li>
                  <li>• Cocok untuk data kecil (tim kecil).</li>
                  <li>• <span className="text-rose-400">Rawan terhapus</span> tidak sengaja.</li>
                  <li>• Mulai berat di atas 10.000 baris.</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 p-6 rounded-xl border border-indigo-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-indigo-500"><Package size={100} /></div>
                <div className="flex items-center gap-3 mb-4 text-indigo-400">
                  <Database size={28} />
                  <h4 className="text-xl font-bold">Basis Data (SQL)</h4>
                </div>
                <p className="text-white font-medium mb-2">"Gudang Logistik Otomatis"</p>
                <ul className="space-y-2 text-sm text-indigo-200">
                  <li>• Kamu menyuruh robot (SQL) mengambil barang.</li>
                  <li>• Cocok untuk jutaan data & ribuan user.</li>
                  <li>• <span className="text-emerald-400">Sangat aman</span> & terstruktur.</li>
                  <li>• Kapasitas tak terbatas.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Primary Key Section */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Key className="text-amber-400"/> Masalah "Si Budi" (Primary Key)
            </h3>
            <p className="text-slate-300 mb-6">
              Bayangkan ada dua siswa bernama <strong>"Budi Santoso"</strong> di sekolah. Jika Guru memanggil "Budi Santoso!", siapa yang maju? Pasti bingung.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                <p className="text-red-400 font-bold mb-2 text-sm">TANPA Primary Key</p>
                <div className="space-y-1 font-mono text-sm text-slate-300">
                  <p>Nama: Budi Santoso (Kelas X)</p>
                  <p>Nama: Budi Santoso (Kelas XI)</p>
                  <p className="text-red-400 text-xs mt-2">*Komputer Bingung: Mana Budi yang dimaksud?</p>
                </div>
              </div>
              <div className="bg-emerald-900/20 border border-emerald-500/30 p-4 rounded-lg">
                <p className="text-emerald-400 font-bold mb-2 text-sm">DENGAN Primary Key (ID)</p>
                <div className="space-y-1 font-mono text-sm text-slate-300">
                  <p><span className="text-amber-400">ID: 101</span> | Budi Santoso</p>
                  <p><span className="text-amber-400">ID: 102</span> | Budi Santoso</p>
                  <p className="text-emerald-400 text-xs mt-2">*Komputer Paham: ID 101 beda dengan 102.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT TAB 2 */}
      {tab === 1 && (
        <div className="space-y-8 animate-[fadeIn_0.3s]">
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 border border-indigo-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Berbicara dengan Data</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Komputer tidak mengerti bahasa manusia seperti "Tolong carikan nilai Budi dong". 
              Komputer hanya mengerti bahasa khusus yang disebut <strong>SQL (Structured Query Language)</strong>.
            </p>
            <div className="inline-block bg-black/50 p-4 rounded-xl border border-slate-700 font-mono text-emerald-400 text-lg">
              SELECT * FROM siswa WHERE nama = 'Budi';
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-purple-400" size={32}/>
              <h3 className="text-2xl font-bold text-white">AI sebagai Coding Buddy</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Kalian bisa menggunakan ChatGPT atau Gemini sebagai asisten koding. Jangan minta jawaban langsung, tapi mintalah penjelasan!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Contoh Prompt Efektif:</h4>
                <p className="text-indigo-300 italic text-sm">
                  "Saya sedang belajar SQL. Buatkan saya contoh tabel data penjualan kantin sekolah beserta data dummynya sebanyak 5 baris."
                </p>
              </div>
              <div className="bg-slate-900 p-5 rounded-xl border border-slate-700">
                <h4 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Manfaat AI:</h4>
                <ul className="text-slate-400 text-sm space-y-2 list-disc list-inside">
                  <li>Generate data latihan (Dummy Data).</li>
                  <li>Mengecek error sintaks (Typo).</li>
                  <li>Menjelaskan fungsi perintah yang lupa.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT TAB 3 */}
      {tab === 2 && (
        <div className="animate-[fadeIn_0.3s]">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">4 Jurus Dasar Pengolahan Data (CRUD)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { 
                code: 'CREATE (INSERT)', 
                name: 'Menambah Data', 
                metaphor: 'Mendaftarkan siswa baru.', 
                color: 'text-emerald-400', 
                bg: 'bg-emerald-900/10',
                syntax: "INSERT INTO siswa (nama, kelas, nilai) VALUES ('Dian', 'X', 85);" 
              },
              { 
                code: 'READ (SELECT)', 
                name: 'Membaca Data', 
                metaphor: 'Mencari file di tumpukan dokumen.', 
                color: 'text-blue-400', 
                bg: 'bg-blue-900/10',
                syntax: "SELECT * FROM siswa WHERE kelas = 'X';" 
              },
              { 
                code: 'UPDATE', 
                name: 'Mengubah Data', 
                metaphor: 'Menghapus tulisan di papan tulis, ganti baru.', 
                color: 'text-amber-400', 
                bg: 'bg-amber-900/10',
                warning: 'Hati-hati! Lupa WHERE = Semua data berubah.',
                syntax: "UPDATE siswa SET nilai=90 WHERE nama='Dian';" 
              },
              { 
                code: 'DELETE', 
                name: 'Menghapus Data', 
                metaphor: 'Memasukkan kertas ke mesin penghancur (Shredder).', 
                color: 'text-rose-400', 
                bg: 'bg-rose-900/10',
                warning: 'Data hilang selamanya. Gunakan ID agar aman.',
                syntax: "DELETE FROM siswa WHERE id=101;" 
              },
            ].map((item) => (
              <div key={item.code} className={`border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition-colors ${item.bg}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className={`text-xl font-mono font-bold ${item.code === 'DELETE' ? 'text-rose-400' : item.color}`}>{item.code}</h4>
                </div>
                <h5 className="text-white font-bold mb-1">{item.name}</h5>
                <p className="text-slate-400 text-sm mb-4 italic">"Ibarat {item.metaphor}"</p>
                {item.warning && (
                  <div className="mb-3 flex items-start gap-2 text-xs text-rose-300 bg-rose-900/30 p-2 rounded">
                    <AlertTriangle size={12} className="mt-0.5"/> {item.warning}
                  </div>
                )}
                <div className="bg-black/50 p-3 rounded font-mono text-xs text-slate-300 border-l-2 border-slate-500 overflow-x-auto">
                  {item.syntax}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// 3. HALAMAN SIMULASI (JOYFULL - CORE FEATURE)
const Simulasi = () => {
  // State Mode: 'siswa' (Latihan Dasar) or 'buku' (Studi Kasus Perpustakaan)
  const [mode, setMode] = useState<'siswa' | 'buku'>('siswa');
  
  const [dataSiswa, setDataSiswa] = useState(INITIAL_SISWA);
  const [dataBuku, setDataBuku] = useState(INITIAL_BUKU);
  
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState<{type: string, msg: string}[]>([{ type: 'info', msg: 'System Ready. Database loaded.' }]);
  
  const addLog = (type: string, msg: string) => {
    setLogs(prev => [{ type, msg }, ...prev]);
  };

  const runQuery = () => {
    const q = query.trim();
    if (!q) return;
    const lowerQ = q.toLowerCase();

    // -- ENGINE UNTUK TABEL SISWA --
    if (mode === 'siswa') {
      if (lowerQ.startsWith('select')) {
        addLog('success', `Query OK. Menampilkan ${dataSiswa.length} siswa.`);
      } else if (lowerQ.startsWith('insert')) {
        // Simple regex mock for INSERT INTO siswa (nama, kelas, nilai) VALUES (...)
        if (lowerQ.includes('values')) {
           const newId = dataSiswa.length > 0 ? Math.max(...dataSiswa.map(s => s.id)) + 1 : 101;
           const newSiswa = { id: newId, nama: "Siswa Baru", kelas: "X TJKT", nilai: 80 }; // Mock data logic
           setDataSiswa([...dataSiswa, newSiswa]);
           addLog('success', `INSERT berhasil. Data ID ${newId} ditambahkan.`);
        } else {
           addLog('error', 'Syntax Error. Gunakan format: INSERT INTO siswa ... VALUES ...');
        }
      } else if (lowerQ.startsWith('delete')) {
        if (lowerQ.includes('where id=')) {
           const id = parseInt(lowerQ.split('id=')[1]);
           setDataSiswa(dataSiswa.filter(s => s.id !== id));
           addLog('warning', `DELETE berhasil. Siswa ID ${id} dihapus.`);
        } else {
           addLog('error', 'BAHAYA! Delete harus pakai WHERE id=...');
        }
      } else {
        addLog('error', 'Perintah tidak dikenal di mode Siswa.');
      }
    } 
    
    // -- ENGINE UNTUK TABEL BUKU (STUDI KASUS) --
    else {
      if (lowerQ.startsWith('select')) {
        if (lowerQ.includes('where stok < 5')) {
           addLog('success', 'Filter Berhasil: Menampilkan buku langka (stok < 5).');
        } else {
           addLog('success', `Query OK. Menampilkan ${dataBuku.length} buku.`);
        }
      } else if (lowerQ.startsWith('insert')) {
        // Mock Insert Logic for Books
        const newId = dataBuku.length > 0 ? Math.max(...dataBuku.map(b => b.id)) + 1 : 1;
        // Check specifics for "Laskar Pelangi"
        if (lowerQ.includes('laskar pelangi')) {
           setDataBuku([...dataBuku, { id: newId, judul: "Laskar Pelangi", penulis: "Andrea Hirata", stok: 5 }]);
           addLog('success', `Tantangan 1 Selesai! Laskar Pelangi masuk (ID: ${newId}).`);
        } else {
           setDataBuku([...dataBuku, { id: newId, judul: "Buku Baru", penulis: "Anonim", stok: 10 }]);
           addLog('success', `Buku berhasil ditambahkan.`);
        }
      } else if (lowerQ.startsWith('update')) {
        if (lowerQ.includes('laskar pelangi') && lowerQ.includes('set stok')) {
           setDataBuku(dataBuku.map(b => b.judul.toLowerCase().includes('laskar') ? {...b, stok: 10} : b));
           addLog('success', 'Tantangan 2 Selesai! Stok Laskar Pelangi diupdate jadi 10.');
        } else {
           addLog('info', 'Format Update: UPDATE buku SET stok=... WHERE judul=...');
        }
      } else if (lowerQ.startsWith('delete')) {
         if (lowerQ.includes('id=5')) { // Specific challenge
            addLog('warning', 'Tantangan 4 Selesai! Buku ID 5 dihapus.');
         } else {
            const id = parseInt(lowerQ.split('id=')[1]) || 0;
            if(id > 0) {
              setDataBuku(dataBuku.filter(b => b.id !== id));
              addLog('warning', `Buku ID ${id} dihapus.`);
            } else {
              addLog('error', 'Gunakan WHERE id=... untuk menghapus.');
            }
         }
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 grid lg:grid-cols-3 gap-6 animate-[fadeIn_0.5s] h-[calc(100vh-140px)]">
      {/* Kiri: Console & Controls */}
      <div className="lg:col-span-1 flex flex-col gap-4">
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-4 flex-1 flex flex-col shadow-lg">
          <div className="flex justify-between items-center mb-4">
             <h3 className="text-indigo-400 font-bold flex items-center gap-2">
               <Terminal size={18}/> SQL Editor
             </h3>
             <div className="flex gap-2">
               <button 
                 onClick={() => {setMode('siswa'); setQuery('');}}
                 className={`text-[10px] px-2 py-1 rounded border ${mode === 'siswa' ? 'bg-indigo-600 text-white border-indigo-600' : 'text-slate-400 border-slate-600'}`}
               >Siswa</button>
               <button 
                 onClick={() => {setMode('buku'); setQuery('');}}
                 className={`text-[10px] px-2 py-1 rounded border ${mode === 'buku' ? 'bg-emerald-600 text-white border-emerald-600' : 'text-slate-400 border-slate-600'}`}
               >Pustaka</button>
             </div>
          </div>
          
          <textarea 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-black/40 border border-slate-700 rounded-lg p-3 font-mono text-sm text-emerald-400 focus:outline-none focus:border-indigo-500 resize-none mb-3"
            placeholder={mode === 'siswa' ? "Contoh: SELECT * FROM siswa;" : "Tantangan: INSERT INTO buku ..."}
          />
          
          <Button onClick={runQuery} className="w-full justify-center">
            <Play size={16} /> Jalankan Query
          </Button>
        </div>

        {/* Challenge Box / AI Assistant */}
        <div className={`rounded-xl p-4 border ${mode === 'buku' ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500/30'}`}>
          <div className={`flex items-center gap-2 mb-2 font-bold ${mode === 'buku' ? 'text-emerald-400' : 'text-indigo-300'}`}>
            {mode === 'buku' ? <><Award size={18}/> Tantangan Mandiri</> : <><Cpu size={18} /> AI Assistant</>}
          </div>
          
          {mode === 'buku' ? (
            <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
              <li><strong>T1 Insert:</strong> Masukkan "Laskar Pelangi", Andrea Hirata, Stok 5.</li>
              <li><strong>T2 Update:</strong> Ubah stok "Laskar Pelangi" jadi 10.</li>
              <li><strong>T3 Delete:</strong> Hapus buku dengan ID tertentu.</li>
            </ul>
          ) : (
            <p className="text-sm text-slate-300 italic">
              "Ingat, perintah <b>DELETE</b> tanpa <b>WHERE</b> akan menghapus seluruh isi tabelmu (Shredder). Selalu hati-hati!"
            </p>
          )}
        </div>
      </div>

      {/* Kanan: Result Table & Logs */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {/* Table View */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-lg flex-1 flex flex-col">
          <div className="bg-slate-900/50 p-3 border-b border-slate-700 flex justify-between items-center">
             <span className="font-mono text-sm text-slate-400">Table: <span className="text-white font-bold">{mode}</span></span>
             <span className="text-xs text-slate-500">{(mode === 'siswa' ? dataSiswa : dataBuku).length} records</span>
          </div>
          <div className="overflow-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/30 text-slate-400 text-sm">
                  <th className="p-3 border-b border-slate-700 w-16">ID (PK)</th>
                  <th className="p-3 border-b border-slate-700">{mode === 'siswa' ? 'Nama Lengkap' : 'Judul Buku'}</th>
                  <th className="p-3 border-b border-slate-700">{mode === 'siswa' ? 'Kelas' : 'Penulis'}</th>
                  <th className="p-3 border-b border-slate-700 text-right">{mode === 'siswa' ? 'Nilai' : 'Stok'}</th>
                </tr>
              </thead>
              <tbody>
                {(mode === 'siswa' ? dataSiswa : dataBuku).map((row: any) => (
                  <tr key={row.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors text-slate-200">
                    <td className="p-3 font-mono text-amber-500">{row.id}</td>
                    <td className="p-3">{row.nama || row.judul}</td>
                    <td className="p-3">
                      {mode === 'siswa' 
                        ? <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded text-xs">{row.kelas}</span>
                        : <span className="text-slate-400 italic">{row.penulis}</span>
                      }
                    </td>
                    <td className="p-3 text-right font-mono">{row.nilai || row.stok}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Console Logs */}
        <div className="h-32 bg-black/80 border border-slate-700 rounded-xl p-3 font-mono text-xs overflow-y-auto">
           {logs.map((log, i) => (
             <div key={i} className={`mb-1 ${log.type === 'error' ? 'text-rose-400' : log.type === 'warning' ? 'text-amber-400' : log.type === 'success' ? 'text-emerald-400' : 'text-slate-400'}`}>
               <span className="opacity-50">[{new Date().toLocaleTimeString()}]</span> {log.msg}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

// 4. HALAMAN ASESMEN
const Asesmen = () => {
  const [score, setScore] = useState<number | null>(null);
  
  const questions = [
    {
      q: "Analogi 'Gudang Logistik Otomatis' digunakan untuk menggambarkan...",
      options: ["Spreadsheet (Excel)", "Buku Tulis", "Basis Data (SQL)", "PowerPoint"],
      ans: 2
    },
    {
      q: "Mengapa kita membutuhkan Primary Key (ID) dalam tabel?",
      options: [
        "Agar tabel terlihat keren.",
        "Untuk membedakan data yang mungkin punya nama sama (Unik).",
        "Supaya bisa diwarnai.",
        "Agar data bisa dihapus semua."
      ],
      ans: 1
    },
    {
      q: "Apa resiko menjalankan perintah 'DELETE FROM siswa' tanpa WHERE?",
      options: [
        "Hanya 1 data terhapus.",
        "Akan muncul error.",
        "Semua data siswa akan hilang (Shredder).",
        "Komputer akan restart."
      ],
      ans: 2
    },
    {
      q: "Perintah SQL untuk menambahkan data baru adalah...",
      options: ["ADD NEW", "INSERT INTO", "UPDATE", "CREATE NEW"],
      ans: 1
    }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let correct = 0;
    const formData = new FormData(e.currentTarget);
    questions.forEach((q, i) => {
      const answer = formData.get(`q${i}`);
      if (answer && parseInt(answer.toString()) === q.ans) correct++;
    });
    setScore((correct / questions.length) * 100);
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 animate-[fadeIn_0.5s]">
      <Card title="Evaluasi Pemahaman" icon={Award}>
        {score === null ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {questions.map((q, i) => (
              <div key={i} className="space-y-3 pb-6 border-b border-slate-700/50 last:border-0">
                <p className="font-medium text-lg text-white">{i+1}. {q.q}</p>
                <div className="space-y-2">
                  {q.options.map((opt, j) => (
                    <label key={j} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-700 cursor-pointer border border-transparent hover:border-indigo-500 transition-all">
                      <input type="radio" name={`q${i}`} value={j} required className="accent-indigo-500 w-4 h-4"/>
                      <span className="text-slate-300">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <Button type="submit" className="w-full justify-center text-lg mt-4">Kirim Jawaban</Button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-900 border-4 border-indigo-500 mb-4">
              <span className="text-3xl font-bold text-white">{Math.round(score)}</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {score > 70 ? "Luar Biasa!" : "Tetap Semangat!"}
            </h3>
            <p className="text-slate-400">
              {score > 70 
                ? "Kamu sudah memahami konsep gudang data dan SQL dengan baik." 
                : "Coba pelajari kembali analogi dan praktikkan di simulator Pustaka Jaya."}
            </p>
            <Button onClick={() => setScore(null)} variant="outline" className="mx-auto mt-4">
              Coba Lagi
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

const Materi3: React.FC = () => {
  const [activePage, setActivePage] = useState(PAGES.HOME);

  // Efek transisi sederhana saat ganti halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case PAGES.HOME: return <Home setPage={setActivePage} />;
      case PAGES.MATERI: return <Materi />;
      case PAGES.SIMULASI: return <Simulasi />;
      case PAGES.ASESMEN: return <Asesmen />;
      default: return <Home setPage={setActivePage} />;
    }
  };

  return (
    <div className="text-slate-200 font-sans selection:bg-indigo-500 selection:text-white -mt-4">
      <ModuleNav activePage={activePage} setPage={setActivePage} />
      
      <main className="min-h-[calc(100vh-200px)]">
        {renderContent()}
      </main>

       <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
       `}</style>
    </div>
  );
}

export default Materi3;