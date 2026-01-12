import React from 'react';
import { ArrowRight, Sparkles, Code, Cpu, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden p-6">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-indigo-400 text-sm font-medium mx-auto lg:mx-0">
            <Sparkles size={16} />
            <span>Semester Genap Tahun Pelajaran 2025/2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Halo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Inovator Muda</span><br/>
            Kelas X Smaksaka!
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            Selamat datang di pusat media pembelajaran digital mata pelajaran 
            <strong className="text-white"> Koding dan Kecerdasan Artifisial (KKA)</strong> SMK Negeri 1 Kaligondang.
            Memasuki Semester Genap, tantangan dunia teknologi semakin nyata. 
            Website ini hadir sebagai ruang bagi kalian untuk mengeksplorasi logika pemrograman dan keajaiban kecerdasan artifisial. 
            Di sini, kita tidak hanya belajar menggunakan teknologi, tetapi belajar bagaimana menciptakannya.
          </p>
          
          <div className="p-6 glass rounded-2xl border border-slate-700/50 mt-8 text-center lg:text-left">
              <p className="text-slate-300 font-medium italic">
              "Mari asah logika, bangun kreativitas, dan bersiaplah menjadi bagian dari masa depan digital!"
              </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
            <Link to="/materi-1" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 group">
              <Code size={20} />
              Mulai Belajar
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/materi-5" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <Cpu size={20} />
              Eksplorasi AI
            </Link>
          </div>
        </div>

        {/* Right Side: Profile Image Placeholder */}
        <div className="flex-shrink-0 relative group">
           {/* Glow Effect */}
           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-[2.2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
           
           {/* 9:16 Portrait Container */}
           <div className="relative w-72 md:w-80 aspect-[9/16] bg-slate-800 rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl flex flex-col justify-end">
              
              {/* Image */}
              <div className="absolute inset-0 bg-slate-900">
                 <img 
                   src="https://lh3.googleusercontent.com/pw/AP1GczMASwXHN2zrUbwHlVuMnbzEeuSABUCgLOXggAKAfAXI1G1tdyowQe30MWKiSGMItnqAujGEbQsf9IaJNRtrH2q1x5lyCle-bQ3405nhKIJVRTZAoNkHiSG4JV9KcO0HHuB6AR0w5Tb7ZK32k7x-QqkR=w362-h633-s-no-gm?authuser=0" 
                   alt="Malabi Wibowo Susanto, S.Kom" 
                   className="w-full h-full object-cover" 
                 />
              </div>

              {/* Name Overlay */}
              <div className="relative z-10 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent text-center">
                 <h3 className="text-white font-bold text-lg leading-snug">Malabi Wibowo Susanto, S.Kom</h3>
                 <div className="h-1 w-12 bg-indigo-500 mx-auto my-2 rounded-full"></div>
                 <p className="text-indigo-300 text-xs font-medium uppercase tracking-wide">Guru Koding & Kecerdasan Artifisial</p>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Home;