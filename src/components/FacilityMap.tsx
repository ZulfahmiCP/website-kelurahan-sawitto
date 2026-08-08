import petaFasus from '../assets/peta-fasus-sawitto.png';

export const FacilityMap = () => {
  return (
    <section id="peta" className="py-24 lg:py-32 bg-white border-t border-primary-50">
      <div className="container mx-auto">
        
        {/* Hanya Judul sesuai permintaan (padding standar) */}
        <div className="mb-10 text-center px-6 lg:px-12">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">
            Peta Pemetaan Fasilitas Umum
          </h3>
        </div>

        {/* Kontainer Gambar Peta (Gap di HP dibuat sangat kecil px-2 agar peta terlihat maksimal) */}
        <div className="w-full px-2 md:px-6 lg:px-12 flex justify-center">
          <img 
            src={petaFasus} 
            alt="Peta Fasilitas Umum Kelurahan Sawitto" 
            className="w-full max-w-5xl h-auto object-contain md:rounded-2xl shadow-sm border border-slate-100"
          />
        </div>

      </div>
    </section>
  );
};