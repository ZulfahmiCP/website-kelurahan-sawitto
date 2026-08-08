import { useState, useEffect } from 'react';

interface StrukturItem {
  id: string;
  nama: string;
  jabatan: string;
  kategori: string;
}

interface ProcessedStruktur {
  lurah: StrukturItem | null;
  seklur: StrukturItem | null;
  kasi: StrukturItem[];
  staf: StrukturItem[];
  mitra: StrukturItem[];
}

export const Structure = () => {
  const [data, setData] = useState<ProcessedStruktur>({
    lurah: null,
    seklur: null,
    kasi: [],
    staf: [],
    mitra: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStruktur = async () => {
      try {
        // const response = await fetch('https://sheetdb.io/api/v1/syisid9ro01bq?sheet=Struktur');
        const response = await fetch('https://script.google.com/macros/s/AKfycbzOqRAVR-FQJhSUKPrSHER7jO6rrXDinTlhLEFwJwzM0UJkP-HrLEAeNBgHsga8A_G0/exec?sheet=Struktur');
        const rawData: StrukturItem[] = await response.json();
        
        const processed: ProcessedStruktur = {
          lurah: rawData.find(item => item.kategori === 'lurah') || null,
          seklur: rawData.find(item => item.kategori === 'seklur') || null,
          kasi: rawData.filter(item => item.kategori === 'kasi'),
          staf: rawData.filter(item => item.kategori === 'staf'),
          mitra: rawData.filter(item => item.kategori === 'mitra')
        };
        
        setData(processed);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStruktur();
  }, []);

  return (
    <section id="struktur" className="py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Perangkat Daerah</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">Struktur Organisasi</h3>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center max-w-5xl mx-auto">
              
              {data.lurah && (
                <div className="flex flex-col items-center">
                  <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 md:p-8 text-center w-72 md:w-80 shadow-sm relative z-10">
                    <h4 className="text-xl md:text-2xl font-black text-slate-900">{data.lurah.nama}</h4>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-600 mt-2">{data.lurah.jabatan}</p>
                  </div>
                  <div className="w-px h-10 bg-primary-300"></div>
                </div>
              )}

              {data.seklur && (
                <div className="flex flex-col items-center">
                  <div className="bg-white border border-primary-100 rounded-2xl p-6 md:p-8 text-center w-72 md:w-80 shadow-sm relative z-10">
                    <h4 className="text-lg md:text-xl font-bold text-slate-800">{data.seklur.nama}</h4>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mt-2">{data.seklur.jabatan}</p>
                  </div>
                  <div className="w-px h-10 bg-primary-300"></div>
                </div>
              )}

              {data.kasi.length > 0 && (
                <div className="w-full relative">
                  <div className="hidden md:block absolute top-0 left-[16.666%] right-[16.666%] h-px bg-primary-300"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6 relative pt-0 md:pt-10">
                    {data.kasi.map((kasi, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center relative">
                        <div className="hidden md:block absolute -top-10 left-1/2 w-px h-10 bg-primary-300"></div>
                        <div className="md:hidden w-px h-8 bg-primary-300"></div>
                        
                        <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6 text-center w-72 md:w-full shadow-sm relative z-10">
                          <h4 className="text-base md:text-lg font-bold text-slate-800">{kasi.nama}</h4>
                          <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-slate-500 mt-2">{kasi.jabatan}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-32 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {data.staf.length > 0 && (
                <div className="bg-white border border-primary-50 rounded-3xl p-8 lg:p-12 shadow-sm">
                  <h4 className="text-xs uppercase tracking-[0.3em] text-primary-400 font-bold mb-8 flex items-center gap-4">
                    <span className="w-8 h-px bg-primary-200"></span>
                    Staf Kelurahan
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                    {data.staf.map((staf, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-base font-bold text-slate-800">{staf.nama}</span>
                        <span className="text-[10px] uppercase tracking-widest text-primary-500 mt-1">{staf.jabatan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {data.mitra.length > 0 && (
                <div className="bg-white border border-red-50 rounded-3xl p-8 lg:p-12 shadow-sm">
                  <h4 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-8 flex items-center gap-4">
                    <span className="w-8 h-px bg-red-200"></span>
                    Mitra & Lintas Sektor
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                    {data.mitra.map((mitra, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-base font-bold text-slate-800">{mitra.nama}</span>
                        <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">{mitra.jabatan}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </>
        )}
      </div>
    </section>
  );
};