import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import LogoCloud from '../components/landing/LogoCloud';
import BentoGrid from '../components/landing/BentoGrid';
import Integrations from '../components/landing/Integrations';
import Personas from '../components/landing/Personas';
import BeforeAfter from '../components/landing/BeforeAfter';
import PricingTeaser from '../components/landing/PricingTeaser';
import FAQ from '../components/landing/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/landing/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-page">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />

      <main>
        <Hero />
        <LogoCloud />
        <BentoGrid />
        <Integrations />
        <Personas />
        <BeforeAfter />
        <PricingTeaser />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;