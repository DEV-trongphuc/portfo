
import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Background from './components/UI/Background';
import Footer from './components/Layout/Footer';
import ScrollProgress from './components/UI/ScrollProgress';

// Lazy load below-the-fold components
const TechBento = lazy(() => import('./components/Sections/TechBento'));
const TheBridge = lazy(() => import('./components/Sections/TheBridge'));
const SkillsShowcase = lazy(() => import('./components/Sections/SkillsShowcase'));
const Experience = lazy(() => import('./components/Sections/Experience'));
const Partners = lazy(() => import('./components/Sections/Partners'));
const DomMarketing = lazy(() => import('./components/Sections/DomMarketing'));
const BookSpotlight = lazy(() => import('./components/Sections/BookSpotlight'));
const OutsourceHighlights = lazy(() => import('./components/Sections/OutsourceHighlights'));
const Projects = lazy(() => import('./components/Sections/Projects'));
const Certifications = lazy(() => import('./components/Sections/Certifications'));
const DataPhilosophy = lazy(() => import('./components/Sections/DataPhilosophy'));
const ZaloMiniAppShowcase = lazy(() => import('./components/Sections/ZaloMiniAppShowcase'));
const TarotShowcase = lazy(() => import('./components/Sections/TarotShowcase'));
const LmsShowcase = lazy(() => import('./components/Sections/LmsShowcase'));
const CrmShowcase = lazy(() => import('./components/Sections/CrmShowcase'));
const DomationCrmShowcase = lazy(() => import('./components/Sections/DomationCrmShowcase'));
const DomationDataShowcase = lazy(() => import('./components/Sections/DomationDataShowcase'));
const AutoFlowPro = lazy(() => import('./components/Sections/AutoFlowPro'));
const MetaAdReportShowcase = lazy(() => import('./components/Sections/MetaAdReportShowcase'));
const CutePortfolio = lazy(() => import('./components/CutePortfolio/CutePortfolio'));

const App: React.FC = () => {
  const [portfolioMode, setPortfolioMode] = React.useState<'classic' | 'ai'>('ai');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    if (portfolioMode === 'classic') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [portfolioMode]);

  if (portfolioMode === 'ai') {
    return (
      <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center text-blue-600 bg-slate-50 font-black">Loading AI Control Center...</div>}>
        <CutePortfolio onToggleClassic={() => setPortfolioMode('classic')} />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen text-white bg-dark-bg selection:bg-gold-500 selection:text-black overflow-hidden font-sans">
      <ScrollProgress />
      <Background />
      <Navbar activeMode={portfolioMode} onToggleMode={(mode) => setPortfolioMode(mode)} />
      
      <main className="relative z-10">
        <Hero />
        
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-gold-500">Loading...</div>}>
          <Experience />
          <TheBridge />
          <SkillsShowcase />
          <OutsourceHighlights />
          <BookSpotlight />
          <ZaloMiniAppShowcase />
          <TarotShowcase />
          <LmsShowcase />
          <CrmShowcase />
          <DomationCrmShowcase />
          <DomationDataShowcase />
          <AutoFlowPro />
          <MetaAdReportShowcase />
          {/* <Projects /> */}
          <Certifications />
          <DomMarketing /> {/* DOM Marketing section */}
          {/* <DataPhilosophy /> */} {/* Temporarily hidden: Moved DataPhilosophy here, below DomMarketing */}
          <TechBento /> {/* Moved TechBento here, below DataPhilosophy */}
          <Partners />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default App;