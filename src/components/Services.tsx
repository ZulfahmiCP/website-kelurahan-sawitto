import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronDown, FileText } from 'lucide-react';
import { layanan } from '../data/content';

export const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="layanan" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-16 md:mb-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary-600 font-bold mb-4">Pelayanan Publik</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">Standar Operasional</h3>
          <div className="w-12 h-1 bg-accent mx-auto mt-8"></div>
        </div>

        <div className="border-t border-primary-100">
          {layanan.map((item, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <div key={idx} className="border-b border-primary-100">
                <button
                  onClick={() => toggleService(idx)}
                  className="w-full py-8 flex items-center justify-between text-left group hover:bg-primary-50/50 transition-colors px-4 -mx-4 rounded-lg"
                >
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {item.nama}
                    </h4>
                    <div className="flex items-center text-xs font-bold text-accent uppercase tracking-widest mt-3">
                      <Clock className="w-4 h-4 mr-2" />
                      Estimasi: {item.waktu}
                    </div>
                  </div>
                  <ChevronDown 
                    className={`w-6 h-6 text-primary-400 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 px-4 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16">
                        <div className="lg:w-1/2">
                          <p className="text-xs uppercase tracking-[0.2em] text-primary-400 font-bold mb-6">Persyaratan</p>
                          <ul className="space-y-4">
                            {item.kelengkapan.map((syarat, i) => (
                              <li key={i} className="flex items-start text-slate-700">
                                <span className="text-primary-500 mr-4 mt-2 text-[8px]">■</span>
                                <span className="text-base md:text-lg font-light leading-relaxed">{syarat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="lg:w-1/2">
                          <p className="text-xs uppercase tracking-[0.2em] text-primary-400 font-bold mb-6">Output Layanan</p>
                          <div className="flex items-center gap-4 bg-primary-50 p-6 rounded-xl border border-primary-100">
                            <FileText className="w-8 h-8 text-primary-500" />
                            <span className="text-lg font-medium text-slate-900">{item.output}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};