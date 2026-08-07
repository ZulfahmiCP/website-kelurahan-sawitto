import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { appInfo } from '../data/content';

export const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-50">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1674309438579-587b58d8486e?q=80&w=1920&auto=format&fit=crop" 
          alt={`Kelurahan ${appInfo.namaKelurahan}`} 
          className="w-full h-full object-cover scale-105 transform origin-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/60 to-surface"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary-200 font-bold mb-6">
            Kelurahan
          </h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white mb-10 leading-none uppercase">
            {appInfo.namaKelurahan}
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="w-12 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-primary-50">
            {appInfo.sapaan}
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{y: [0, 10, 0]}} transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}>
          <ArrowDown className="text-primary-300 w-6 h-6 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
};