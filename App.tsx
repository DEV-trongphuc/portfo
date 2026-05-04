
import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import TechBento from './components/Sections/TechBento';
import TheBridge from './components/Sections/TheBridge';
import SkillsShowcase from './components/Sections/SkillsShowcase';
import Background from './components/UI/Background';
import Experience from './components/Sections/Experience';
import Partners from './components/Sections/Partners';
import DomMarketing from './components/Sections/DomMarketing';
import BookSpotlight from './components/Sections/BookSpotlight';
import OutsourceHighlights from './components/Sections/OutsourceHighlights';
import Footer from './components/Layout/Footer';
import Projects from './components/Sections/Projects';
import Certifications from './components/Sections/Certifications';
import DataPhilosophy from './components/Sections/DataPhilosophy';
import ZaloMiniAppShowcase from './components/Sections/ZaloMiniAppShowcase';
import TarotShowcase from './components/Sections/TarotShowcase';
import LmsShowcase from './components/Sections/LmsShowcase';
import CrmShowcase from './components/Sections/CrmShowcase';
import AutoFlowPro from './components/Sections/AutoFlowPro';
import MetaAdReportShowcase from './components/Sections/MetaAdReportShowcase';
import ScrollProgress from './components/UI/ScrollProgress';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen text-white bg-dark-bg selection:bg-gold-500 selection:text-black overflow-hidden font-sans">
      <ScrollProgress />
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <TheBridge />
        <SkillsShowcase />
        <OutsourceHighlights />
        <BookSpotlight />
        <ZaloMiniAppShowcase />
        <TarotShowcase />
        <LmsShowcase />
        <CrmShowcase />
        <AutoFlowPro />
        <MetaAdReportShowcase />
        <Projects />
        <Certifications />
        <DomMarketing /> {/* DOM Marketing section */}
        {/* <DataPhilosophy /> */} {/* Temporarily hidden: Moved DataPhilosophy here, below DomMarketing */}
        <TechBento /> {/* Moved TechBento here, below DataPhilosophy */}
        <Partners />
      </main>

      <Footer />
    </div>
  );
};

export default App;