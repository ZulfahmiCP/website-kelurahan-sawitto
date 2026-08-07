import { useState, useEffect } from 'react';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { appInfo } from '../data/content';

export const Footer = () => {
  // Memberikan nilai default dari content.ts sementara data ditarik dari SheetDB
  const [contactData, setContactData] = useState({
    email: appInfo.kontak.email,
    wa: appInfo.kontak.wa
  });

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/syisid9ro01bq?sheet=Kontak');
        const data = await response.json();
        
        // Memastikan data berhasil ditarik dan tidak kosong
        if (data && data.length > 0) {
          setContactData({
            email: data[0].email,
            wa: data[0].wa
          });
        }
      } catch (error) {
        console.error("Gagal mengambil data kontak:", error);
      }
    };

    fetchContact();
  }, []);

  return (
    <footer id="kontak" className="bg-primary-900 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16 w-full max-w-4xl mx-auto">
          
          <a 
            href={`mailto:${contactData.email}`} 
            className="group flex items-center gap-4 bg-white p-4 rounded-2xl w-full md:w-auto md:flex-1 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
          >
            <div className="bg-primary-50 group-hover:bg-primary-100 p-3 rounded-xl transition-colors">
              <Mail className="w-5 h-5 text-primary-600" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Email Resmi</span>
              <span className="text-sm font-bold text-slate-800">{contactData.email}</span>
            </div>
          </a>

          <a 
            href={`https://wa.me/${contactData.wa}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 bg-white p-4 rounded-2xl w-full md:w-auto md:flex-1 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
          >
            <div className="bg-green-50 group-hover:bg-green-100 p-3 rounded-xl transition-colors">
              <MessageCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">WhatsApp</span>
              <span className="text-sm font-bold text-slate-800">+{contactData.wa}</span>
            </div>
          </a>

          <a 
            href={appInfo.kontak.maps} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 bg-white p-4 rounded-2xl w-full md:w-auto md:flex-1 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl"
          >
            <div className="bg-red-50 group-hover:bg-red-100 p-3 rounded-xl transition-colors">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Lokasi Kantor</span>
              <span className="text-sm font-bold text-slate-800">Google Maps</span>
            </div>
          </a>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-200 font-light border-t border-primary-800 pt-8">
          <p>&copy; {new Date().getFullYear()} Kelurahan {appInfo.namaKelurahan}. Hak Cipta Dilindungi.</p>
          <p>KKN Universitas Hasanuddin</p>
        </div>
        
      </div>
    </footer>
  );
};