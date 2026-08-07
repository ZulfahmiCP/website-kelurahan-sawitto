import { profil } from '../data/content';

export const Profile = () => {
  return (
    <section id="profil" className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="mb-24 md:mb-32 max-w-4xl mx-auto text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary-600 font-bold mb-6">Visi Kami</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-slate-900">
            "{profil.visi}"
          </h3>
          <div className="w-16 h-px bg-accent mx-auto mt-10"></div>
        </div>

        <div className="mb-24 md:mb-32">
          <div className="mb-16 md:text-center">
            <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Peta Jalan</h2>
            <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">Misi Kelurahan</h3>
          </div>
          <div className="flex flex-col gap-12 lg:gap-20 max-w-5xl mx-auto">
            {profil.misi.map((m, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <span className="text-6xl md:text-7xl lg:text-8xl font-black text-primary-100 leading-none select-none">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <p className="text-lg md:text-xl lg:text-2xl font-light text-slate-700 leading-relaxed md:mt-4">
                  {m}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 rounded-3xl p-10 md:p-16 lg:p-20 text-center max-w-4xl mx-auto border border-primary-100">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary-600 font-bold mb-4">Motto</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mb-12">
            "{profil.motto.tagline}"
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {profil.motto.penjabaran.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="text-2xl font-black text-accent">{item.huruf}</span>
                <span className="text-sm md:text-base text-slate-700 mt-1">{item.arti}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};