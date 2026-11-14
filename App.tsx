import React, { Suspense, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Background from './components/UI/Background';
import ScrollProgress from './components/UI/ScrollProgress';
import { StudioDrawerModal } from './components/UI/StudioDrawerModal';

import Hero from './components/Sections/Hero';
import InkicaPodShowcase from './components/Sections/InkicaPodShowcase';
import RealEstateShowcase from './components/Sections/RealEstateShowcase';
import OutsourceHighlights from './components/Sections/OutsourceHighlights';
import Experience from './components/Sections/Experience';
import TheBridge from './components/Sections/TheBridge';
import DomationDataShowcase from './components/Sections/DomationDataShowcase';
import ErpShowcase from './components/Sections/ErpShowcase';
import DomationCrmShowcase from './components/Sections/DomationCrmShowcase';
import CrmShowcase from './components/Sections/CrmShowcase';
import AutoFlowPro from './components/Sections/AutoFlowPro';
import MetaAdReportShowcase from './components/Sections/MetaAdReportShowcase';
import ZaloMiniAppShowcase from './components/Sections/ZaloMiniAppShowcase';
import LmsShowcase from './components/Sections/LmsShowcase';
import TarotShowcase from './components/Sections/TarotShowcase';
import BookSpotlight from './components/Sections/BookSpotlight';
import Certifications from './components/Sections/Certifications';
import DomMarketing from './components/Sections/DomMarketing';
import TechBento from './components/Sections/TechBento';
import Partners from './components/Sections/Partners';

const EcoLifeDetailView = React.lazy(() => import('./components/Sections/EcoLifeDetailView'));
const DomationDetailView = React.lazy(() => import('./components/Sections/DomationDetailView'));

type DrawerMode = 'none' | 'ecolife' | 'domation';

export default function App() {
  const [drawer, setDrawer] = useState<DrawerMode>(() => {
    if (typeof window === 'undefined') return 'none';
    const p = window.location.pathname.toLowerCase();
    if (p.includes('/ecolife')) return 'ecolife';
    if (p.includes('/domation')) return 'domation';
    return 'none';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const p = window.location.pathname.toLowerCase();
      if (p.includes('/ecolife')) setDrawer('ecolife');
      else if (p.includes('/domation')) setDrawer('domation');
      else setDrawer('none');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const jumpToSection = (sectionId: string) => {
    setDrawer('none');
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setTimeout(() => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 40);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] font-sans relative selection:bg-blue-100 selection:text-[#1E40FF]">
      <Background />
      <ScrollProgress />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onNavigate={jumpToSection}
          onOpenDomation={() => setDrawer('domation')}
          onOpenEcoLife={() => setDrawer('ecolife')}
        />

        <main className="flex-grow">
          <Hero
            onOpenDomationModal={() => setDrawer('domation')}
            onOpenEcoLifeModal={() => setDrawer('ecolife')}
            onJumpSection={jumpToSection}
          />

          <Experience />

          <InkicaPodShowcase />

          <RealEstateShowcase onOpenEcoLifeModal={() => setDrawer('ecolife')} />

          <TheBridge />

          <DomationDataShowcase />

          <ErpShowcase />

          <DomationCrmShowcase />

          <AutoFlowPro />

          <CrmShowcase />

          <MetaAdReportShowcase />

          <ZaloMiniAppShowcase />

          <LmsShowcase />

          <TarotShowcase />

          <OutsourceHighlights />

          <BookSpotlight />

          <Certifications />

          <DomMarketing />

          <TechBento />

          <Partners />
        </main>

        <Footer
          onOpenDomation={() => setDrawer('domation')}
          onOpenEcoLife={() => setDrawer('ecolife')}
          onNavigateProfile={jumpToSection}
        />
      </div>

      {/* Floating Scroll to Top Button (Centered when scrollY > 100px) */}
      {showScrollTop && drawer === 'none' && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Lên đầu trang"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-blue-200 hover:border-[#1E40FF] text-[#1E40FF] hover:bg-blue-50 text-xs font-extrabold inline-flex items-center gap-1.5 transition-all cursor-pointer"
        >
          <span>Lên đầu trang</span>
          <ArrowUp size={14} />
        </button>
      )}

      {/* Portal Studio Drawers */}
      <StudioDrawerModal
        isOpen={drawer === 'ecolife'}
        onClose={() => setDrawer('none')}
        badge="REAL ESTATE • CAPITAL HOUSE FLAGSHIP"
        title="EcoLife Signature Đà Nẵng — Media 3D, Web Portal & AI Sales"
        liveUrl="https://ai.ecolifesignature.vn/"
        liveLabel="Mở Portal ai.ecolifesignature.vn"
      >
        <Suspense
          fallback={
            <div className="py-24 text-center text-sm font-bold text-[#1E40FF]">
              Đang tải hồ sơ EcoLife Signature 3D...
            </div>
          }
        >
          <EcoLifeDetailView
            onBack={() => setDrawer('none')}
            onOpenDomation={() => setDrawer('domation')}
          />
        </Suspense>
      </StudioDrawerModal>

      <StudioDrawerModal
        isOpen={drawer === 'domation'}
        onClose={() => setDrawer('none')}
        badge="DOMATION ECOSYSTEM • MARTECH & ERP 5.0"
        title="DOMATION Studio — ERP 5.0, CRM Chia Data ZaloBot & Meta CAPI"
        liveUrl="https://domation.net/"
        liveLabel="Mở Domation.net"
      >
        <Suspense
          fallback={
            <div className="py-24 text-center text-sm font-bold text-[#1E40FF]">
              Đang tải DOMATION Ecosystem...
            </div>
          }
        >
          <DomationDetailView
            onBack={() => setDrawer('none')}
            onOpenEcoLife={() => setDrawer('ecolife')}
          />
        </Suspense>
      </StudioDrawerModal>
    </div>
  );
}
