import { statistik } from '../data/content';

export const Statistics = () => {
  const stats = [
    { label: "Luas Wilayah (Km²)", value: statistik.luasWilayah },
    { label: "Total Penduduk", value: statistik.totalPenduduk },
    { label: "Laki-laki", value: statistik.lakiLaki },
    { label: "Perempuan", value: statistik.perempuan }
  ];

  return (
    <section id="statistik" className="py-24 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      {/* Garis aksen merah di atas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-accent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* INI ADALAH BAGIAN JUDUL YANG BARU DITAMBAHKAN */}
        <div className="mb-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary-300 font-bold mb-4">Demografi & Wilayah</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-white">Statistik Kelurahan</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 border-y border-primary-800 py-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-primary-200 mb-6 font-bold">{stat.label}</p>
                <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white">
                  {stat.value}
                </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};