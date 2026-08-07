import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  judul: string;
  url_foto: string;
}

// Fungsi ini akan mengambil ID dari link GDrive biasa dan mengubahnya menjadi link gambar langsung yang tidak diblokir browser
const getDirectDriveLink = (url: string) => {
  if (!url) return '';
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    // Menggunakan endpoint thumbnail Google yang lebih stabil (w1000 = lebar resolusi 1000px agar tidak pecah)
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }
  return url;
};

export const Gallery = () => {
  const [images, setImages] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_COUNT = 6;

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('https://sheetdb.io/api/v1/syisid9ro01bq?sheet=Galeri');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGallery();
  }, []);
  
  const visibleImages = isExpanded ? images : images.slice(0, INITIAL_COUNT);

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-slate-50 border-t border-primary-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Dokumentasi</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900">Galeri Kelurahan</h3>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
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
                      src={getDirectDriveLink(img.url_foto)} 
                      alt={img.judul} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        // Fallback abu-abu jika foto masih gagal dimuat atau link salah
                        e.currentTarget.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
                      }}
                    />
                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-500"></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {images.length > INITIAL_COUNT && !isExpanded && (
              <div className="mt-16 flex justify-center">
                <button
                  onClick={() => setIsExpanded(true)}
                  className="px-8 py-4 bg-white border border-primary-200 text-primary-600 font-bold text-sm uppercase tracking-widest rounded-2xl hover:bg-primary-50 hover:border-primary-400 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  Lihat Lebih Banyak
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};