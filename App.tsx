
import React, { useEffect, lazy, Suspense } from 'react';
// Lazy load layout components to prevent code execution/downloads in AI mode
const Navbar = lazy(() => import('./components/Layout/Navbar'));
const Hero = lazy(() => import('./components/Sections/Hero'));
const Background = lazy(() => import('./components/UI/Background'));
const Footer = lazy(() => import('./components/Layout/Footer'));
const ScrollProgress = lazy(() => import('./components/UI/ScrollProgress'));

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
      <Suspense fallback={
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#030014] text-white font-sans relative overflow-hidden">
          {/* Ambient background glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            {/* Spinning/pulsing glowing loading circle */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-purple-500/10 border-t-purple-500 animate-spin" />
              <div className="w-10 h-10 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
              </div>
            </div>
            
            {/* Pulsing loading text */}
            <div className="flex flex-col items-center gap-1.5 text-center">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-300 animate-pulse">
                Loading AI Control Center
              </span>
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                Initializing System Modules...
              </span>
            </div>
          </div>
        </div>
      }>
        <CutePortfolio onToggleClassic={() => setPortfolioMode('classic')} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#030014] text-white font-sans relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="flex flex-col items-center gap-6 relative z-10">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-purple-500/10 border-t-purple-500 animate-spin" />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.25em] text-purple-400 animate-pulse">
            Loading Classic View...
          </span>
        </div>
      </div>
    }>
      <div className="min-h-screen text-white bg-dark-bg selection:bg-gold-500 selection:text-black overflow-hidden font-sans">
        <ScrollProgress />
        <Background />
        <Navbar activeMode={portfolioMode} onToggleMode={(mode) => setPortfolioMode(mode)} />
        
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
          <DomationCrmShowcase />
          <DomationDataShowcase />
          <AutoFlowPro />
          <MetaAdReportShowcase />
          {/* <Projects /> */}
          <Certifications />
          <DomMarketing /> {/* DOM Marketing section */}
          {/* <DataPhilosophy /> */}
          <TechBento />
          <Partners />
        </main>

        <Footer />
      </div>
    </Suspense>
  );
};

export default App;