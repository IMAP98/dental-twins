import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Location } from './components/sections/Location';
import { CallToAction } from './components/sections/CallToAction';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface selection:bg-brand-mint selection:text-primary">
      <Header />
      
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Location />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
