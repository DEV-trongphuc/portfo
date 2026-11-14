import React, { Suspense, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Layout/Navbar';
import Background from './components/UI/Background';
import ScrollProgress from './components/UI/ScrollProgress';
import { StudioDrawerModal } from './components/UI/StudioDrawerModal';
import Hero from './components/Sections/Hero';

// Below-the-fold lazy code splitting for fast initial mobile, tablet & desktop TTI
const Experience = React.lazy(() => import('./components/Sections/Experience'));
const SkillsMatrix = React.lazy(() => import('./components/Sections/SkillsMatrix'));
const InkicaPodShowcase = React.lazy(() => import('./components/Sections/InkicaPodShowcase'));
const RealEstateShowcase = React.lazy(() => import('./components/Sections/RealEstateShowcase'));
const TheBridge = React.lazy(() => import('./components/Sections/TheBridge'));
const DomationDataShowcase = React.lazy(() => import('./components/Sections/DomationDataShowcase'));
const ErpShowcase = React.lazy(() => import('./components/Sections/ErpShowcase'));
const DomationCrmShowcase = React.lazy(() => import('./components/Sections/DomationCrmShowcase'));
const CrmShowcase = React.lazy(() => import('./components/Sections/CrmShowcase'));
const AutoFlowPro = React.lazy(() => import('./components/Sections/AutoFlowPro'));
const MetaAdReportShowcase = React.lazy(() => import('./components/Sections/MetaAdReportShowcase'));
const ZaloMiniAppShowcase = React.lazy(() => import('./components/Sections/ZaloMiniAppShowcase'));
const LmsShowcase = React.lazy(() => import('./components/Sections/LmsShowcase'));
const TarotShowcase = React.lazy(() => import('./components/Sections/TarotShowcase'));
const OutsourceHighlights = React.lazy(() => import('./components/Sections/OutsourceHighlights'));
const BookSpotlight = React.lazy(() => import('./components/Sections/BookSpotlight'));
const Certifications = React.lazy(() => import('./components/Sections/Certifications'));
const DomMarketing = React.lazy(() => import('./components/Sections/DomMarketing'));
const TechBento = React.lazy(() => import('./components/Sections/TechBento'));
const Partners = React.lazy(() => import('./components/Sections/Partners'));
const Footer = React.lazy(() => import('./components/Layout/Footer'));
const AiPortfolioChatbot = React.lazy(() =>
  import('./components/UI/AiPortfolioChatbot').then((m) => ({ default: m.AiPortfolioChatbot }))
);

const EcoLifeDetailView = React.lazy(() => import('./components/Sections/EcoLifeDetailView'));
const DomationDetailView = React.lazy(() => import('./components/Sections/DomationDetailView'));

const SectionShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ contentVisibility: 'auto', containIntrinsicSize: '1px 650px' }}>
    <Suspense fallback={<div className="py-16" aria-hidden="true" />}>{children}</Suspense>
  </div>
);

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
    if (typeof window === 'undefined') return;
    const warmupChunks = () => {
      void import('./components/Sections/Experience');
      void import('./components/Sections/SkillsMatrix');
      void import('./components/Sections/InkicaPodShowcase');
      void import('./components/Sections/RealEstateShowcase');
      void import('./components/Sections/TheBridge');
      void import('./components/Sections/DomationDataShowcase');
      void import('./components/Sections/ErpShowcase');
      void import('./components/Sections/DomationCrmShowcase');
      void import('./components/Sections/AutoFlowPro');
      void import('./components/Sections/CrmShowcase');
      void import('./components/Sections/MetaAdReportShowcase');
      void import('./components/Sections/ZaloMiniAppShowcase');
      void import('./components/Sections/LmsShowcase');
      void import('./components/Sections/TarotShowcase');
      void import('./components/Sections/OutsourceHighlights');
      void import('./components/Sections/BookSpotlight');
      void import('./components/Sections/Certifications');
      void import('./components/Sections/DomMarketing');
      void import('./components/Sections/TechBento');
      void import('./components/Sections/Partners');
      void import('./components/Layout/Footer');
      void import('./components/UI/AiPortfolioChatbot');
    };
    const ric = (
      globalThis as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;
    if (ric) {
      const id = ric(warmupChunks, { timeout: 2200 });
      return () => {
        const cic = (
          globalThis as unknown as { cancelIdleCallback?: (id: number) => void }
        ).cancelIdleCallback;
        cic?.(id);
      };
    }
    const timer = globalThis.setTimeout(warmupChunks, 1200);
    return () => globalThis.clearTimeout(timer);
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
    const tryScroll = (attempt: number) => {
      if (sectionId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
      if (attempt < 10) {
        window.setTimeout(() => tryScroll(attempt + 1), 90);
      }
    };
    window.setTimeout(() => tryScroll(0), 50);
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

          <SectionShell>
            <Experience />
          </SectionShell>

          <SectionShell>
            <InkicaPodShowcase />
          </SectionShell>

          <SectionShell>
            <RealEstateShowcase onOpenEcoLifeModal={() => setDrawer('ecolife')} />
          </SectionShell>

          <SectionShell>
            <TheBridge />
          </SectionShell>

          <SectionShell>
            <DomationDataShowcase />
          </SectionShell>

          <SectionShell>
            <ErpShowcase />
          </SectionShell>

          <SectionShell>
            <DomationCrmShowcase />
          </SectionShell>

          <SectionShell>
            <AutoFlowPro />
          </SectionShell>

          <SectionShell>
            <CrmShowcase />
          </SectionShell>

          <SectionShell>
            <MetaAdReportShowcase />
          </SectionShell>

          <SectionShell>
            <ZaloMiniAppShowcase />
          </SectionShell>

          <SectionShell>
            <LmsShowcase />
          </SectionShell>

          <SectionShell>
            <TarotShowcase />
          </SectionShell>

          <SectionShell>
            <OutsourceHighlights />
          </SectionShell>

          <SectionShell>
            <BookSpotlight />
          </SectionShell>

          <SectionShell>
            <SkillsMatrix />
          </SectionShell>

          <SectionShell>
            <Certifications />
          </SectionShell>

          <SectionShell>
            <DomMarketing />
          </SectionShell>

          <SectionShell>
            <TechBento />
          </SectionShell>

          <SectionShell>
            <Partners />
          </SectionShell>
        </main>

        <Suspense fallback={null}>
          <Footer
            onOpenDomation={() => setDrawer('domation')}
            onOpenEcoLife={() => setDrawer('ecolife')}
            onNavigateProfile={jumpToSection}
          />
        </Suspense>
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

      <Suspense fallback={null}>
        <AiPortfolioChatbot onNavigateSection={jumpToSection} />
      </Suspense>
    </div>
  );
}
