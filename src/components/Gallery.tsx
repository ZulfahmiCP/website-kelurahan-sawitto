import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galeri } from '../data/content';

export const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 6;
  
  const visibleImages = isExpanded ? galeri : galeri.slice(0, INITIAL_COUNT);

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-slate-50 border-t border-primary-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Dokumentasi</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">Galeri Kelurahan</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {visibleImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-2xl group bg-primary-100"
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {galeri.length > INITIAL_COUNT && !isExpanded && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="px-8 py-4 bg-white border border-primary-200 text-primary-600 font-bold text-sm uppercase tracking-widest rounded-2xl hover:bg-primary-50 hover:border-primary-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        )}
      </div>
    </section>
  );
};