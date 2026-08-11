import { motion } from 'motion/react';
import bgBeranda from '../assets/bg-beranda-sawitto.jpg';
import { appInfo } from '../data/content';

export const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={bgBeranda} 
          alt="Beranda Kelurahan" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-surface to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm md:text-base text-primary-300 font-bold uppercase tracking-[0.3em] mb-4">
            Kelurahan
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-6 uppercase">
            {appInfo.namaKelurahan}
          </h1>
          <div className="w-16 md:w-24 h-1 bg-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-slate-200 font-light max-w-2xl mx-auto">
            Selamat Datang di Portal Resmi
          </p>
        </motion.div>
      </div>
    </section>
  );
};