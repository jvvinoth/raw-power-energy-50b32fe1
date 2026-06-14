import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProofSection from './components/ProofSection';
import OfferingsSection from './components/OfferingsSection';
import PhilosophySection from './components/PhilosophySection';
import ScheduleSection from './components/ScheduleSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen bg-background text-text">
        <Header />
        <main>
          <HeroSection />
          <ProofSection />
          <OfferingsSection />
          <PhilosophySection />
          <ScheduleSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
