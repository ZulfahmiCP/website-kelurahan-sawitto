import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { appInfo } from '../data/content';

export const Footer = () => {
  return (
    <footer className="bg-primary-50 pt-16 pb-8 border-t-4 border-accent relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Kontainer kontak di tengah untuk tampilan laptop */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16 w-full max-w-4xl mx-auto">
          
          {/* Tombol Email */}
          <a 
            href={`mailto:${appInfo.kontak.email}`} 
            className="group flex items-center gap-4 bg-white border border-primary-200 hover:border-primary-400 p-4 rounded-2xl w-full md:w-auto md:flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-200/50"
          >
            <div className="bg-primary-50 group-hover:bg-primary-100 p-3 rounded-xl transition-colors">
              <Mail className="w-5 h-5 text-primary-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-primary-400 font-bold mb-1">Email Resmi</span>
              <span className="text-sm font-bold text-slate-700">{appInfo.kontak.email}</span>
            </div>
          </a>

          {/* Tombol WhatsApp */}
          <a 
            href={`https://wa.me/${appInfo.kontak.wa}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 bg-white border border-primary-200 hover:border-green-400 p-4 rounded-2xl w-full md:w-auto md:flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-200/50"
          >
            <div className="bg-green-50 group-hover:bg-green-100 p-3 rounded-xl transition-colors">
              <MessageCircle className="w-5 h-5 text-green-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-primary-400 font-bold mb-1">WhatsApp</span>
              <span className="text-sm font-bold text-slate-700">{appInfo.kontak.telepon}</span>
            </div>
          </a>

          {/* Tombol Maps */}
          <a 
            href={appInfo.kontak.maps} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 bg-white border border-primary-200 hover:border-accent p-4 rounded-2xl w-full md:w-auto md:flex-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-200/50"
          >
            <div className="bg-red-50 group-hover:bg-red-100 p-3 rounded-xl transition-colors">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-primary-400 font-bold mb-1">Lokasi Kantor</span>
              <span className="text-sm font-bold text-slate-700">Google Maps</span>
            </div>
          </a>

        </div>

        {/* Hak Cipta */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light border-t border-primary-200 pt-8">
          <p>&copy; {new Date().getFullYear()} Kelurahan {appInfo.namaKelurahan}. Hak Cipta Dilindungi.</p>
          <p>KKN Universitas Hasanuddin</p>
        </div>
        
      </div>
    </footer>
  );
};