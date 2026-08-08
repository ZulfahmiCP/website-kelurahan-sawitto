import { useState, useEffect } from 'react';

interface StatItem {
  id: string;
  label: string;
  nilai: string;
}

export const Statistics = () => {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // const response = await fetch('https://sheetdb.io/api/v1/syisid9ro01bq?sheet=Statistik');
        const response = await fetch('https://script.google.com/macros/s/AKfycbzOqRAVR-FQJhSUKPrSHER7jO6rrXDinTlhLEFwJwzM0UJkP-HrLEAeNBgHsga8A_G0/exec?sheet=Statistik');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <section id="statistik" className="py-24 lg:py-32 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-accent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20 text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-primary-300 font-bold mb-4">Demografi & Wilayah</h2>
          <h3 className="text-4xl lg:text-5xl font-black tracking-tighter text-white">Statistik Kelurahan</h3>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20 border-y border-primary-800">
            <div className="w-12 h-12 border-4 border-primary-700 border-t-primary-300 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 border-y border-primary-800 py-16">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary-200 mb-6 font-bold">{stat.label}</p>
                  <h4 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white">
                    {stat.nilai}
                  </h4>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};