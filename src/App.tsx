import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Structure } from './components/Structure';
import { Statistics } from './components/Statistics';
import { Services } from './components/Services';
import { FacilityMap } from './components/FacilityMap';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-surface font-sans">
      <Navbar />
      <Hero />
      <Profile />
      <Structure />
      <Statistics />
      <Services />
      <FacilityMap />
      <Gallery />
      <Footer />
    </main>
  );
}