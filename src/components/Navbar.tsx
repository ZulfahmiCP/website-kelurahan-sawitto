import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { appInfo } from '../data/content';
import logoPinrang from '../assets/logo-pinrang.png';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface/95 backdrop-blur-sm text-slate-900 border-b border-primary-100 py-4 shadow-sm' : 'bg-transparent text-white py-6'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <img 
            src={logoPinrang} 
            alt="Logo Kabupaten Pinrang" 
            className="w-8 h-8 md:w-10 md:h-10 object-contain" 
          />
          <div className="text-xl md:text-2xl font-black tracking-tighter uppercase">
            {appInfo.namaKelurahan}
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#beranda" className="hover:text-primary-500 transition-colors">Beranda</a>
          <a href="#profil" className="hover:text-primary-500 transition-colors">Profil</a>
          <a href="#struktur" className="hover:text-primary-500 transition-colors">Struktur</a>
          <a href="#statistik" className="hover:text-primary-500 transition-colors">Statistik</a>
          <a href="#layanan" className="hover:text-primary-500 transition-colors">Layanan</a>
          <a href="#galeri" className="hover:text-primary-500 transition-colors">Galeri</a>
          <a href="#kontak" className="hover:text-primary-500 transition-colors">Kontak</a>
        </nav>

        <button className="md:hidden text-inherit" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface text-slate-900 border-b border-primary-100 py-6 px-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            <a href="#beranda" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Beranda</a>
            <a href="#profil" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Profil</a>
            <a href="#struktur" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Struktur</a>
            <a href="#statistik" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Statistik</a>
            <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Layanan</a>
            <a href="#galeri" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Galeri</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-500 transition-colors">Kontak</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};