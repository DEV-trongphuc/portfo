import React, { Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import Navbar from './components/Layout/Navbar';
import Background from './components/UI/Background';
import ScrollProgress from './components/UI/ScrollProgress';
import SectionQuickDock from './components/UI/SectionQuickDock';
import { StudioDrawerModal } from './components/UI/StudioDrawerModal';
import { subscribeToast } from './utils/toast';
import { applyPageSeo } from './utils/seo';
import type { BlogPillar } from './types/blog';
import Hero from './components/Sections/Hero';

const CommandPalette = React.lazy(() => import('./components/UI/CommandPalette'));
const ContactConsultModal = React.lazy(() => import('./components/UI/ContactConsultModal'));

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
const BlogSpotlight = React.lazy(() => import('./components/Sections/BlogSpotlight'));
const BlogArchiveView = React.lazy(() => import('./components/Sections/BlogArchiveView'));
const BlogSinglePostView = React.lazy(() => import('./components/Sections/BlogSinglePostView'));

type BlogRouteState =
  | { view: 'home' }
  | { view: 'blog-list' }
  | { view: 'blog-post'; slug: string };

function parseBlogRoute(pathname: string): BlogRouteState {
  const clean = pathname.replace(/\/+$/, '').toLowerCase();
  if (clean === '/bai-viet') return { view: 'blog-list' };
  const match = pathname.match(/^\/bai-viet\/([^/?#]+)/i);
  if (match?.[1]) return { view: 'blog-post', slug: decodeURIComponent(match[1]) };
  return { view: 'home' };
}

const SectionShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.06 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    <Suspense fallback={<div className="py-16" aria-hidden="true" />}>{children}</Suspense>
  </motion.div>
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

  const [route, setRoute] = useState<BlogRouteState>(() =>
    typeof window === 'undefined' ? { view: 'home' } : parseBlogRoute(window.location.pathname)
  );
  const [blogFilter, setBlogFilter] = useState<'Tất Cả' | BlogPillar>('Tất Cả');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactService, setContactService] = useState<string | undefined>(undefined);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const openContactModal = (service?: string) => {
    setContactService(service);
    setContactOpen(true);
  };

  useEffect(() => {
    if (route.view === 'home') {
      applyPageSeo({ path: '/', type: 'profile' });
    }
  }, [route.view]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Global Cmd/Ctrl + K Command Palette shortcut
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Global toast notifications for quick copy feedback
  useEffect(() => {
    let timer = 0;
    const unsub = subscribeToast((msg) => {
      setToastMsg(msg);
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => setToastMsg(null), 2600);
    });
    return () => {
      unsub();
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  // Fine-pointer delegated spotlight highlight on .inkica-glass-card without React re-renders
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches) return;
    const onPointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('.inkica-glass-card') as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      target.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => document.removeEventListener('pointermove', onPointerMove);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const navConn = (
      navigator as unknown as {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (navConn?.saveData || navConn?.effectiveType === '2g' || navConn?.effectiveType === 'slow-2g') {
      return;
    }

    // Warm up only the top immediate sections when the browser is idle to avoid network stampedes
    const warmupTopSections = () => {
      void import('./components/Sections/Experience');
      void import('./components/Sections/InkicaPodShowcase');
      void import('./components/Sections/RealEstateShowcase');
      void import('./components/Sections/TheBridge');
    };
    const ric = (
      globalThis as unknown as {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        cancelIdleCallback?: (id: number) => void;
      }
    ).requestIdleCallback;
    if (ric) {
      const id = ric(warmupTopSections, { timeout: 3500 });
      return () => {
        const cic = (
          globalThis as unknown as { cancelIdleCallback?: (id: number) => void }
        ).cancelIdleCallback;
        cic?.(id);
      };
    }
    const timer = globalThis.setTimeout(warmupTopSections, 2200);
    return () => globalThis.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const p = window.location.pathname.toLowerCase();
      if (p.includes('/ecolife')) setDrawer('ecolife');
      else if (p.includes('/domation')) setDrawer('domation');
      else setDrawer('none');
      setRoute(parseBlogRoute(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openBlogArchive = (pillar: 'Tất Cả' | BlogPillar = 'Tất Cả') => {
    setDrawer('none');
    setBlogFilter(pillar);
    setRoute({ view: 'blog-list' });
    if (window.location.pathname !== '/bai-viet') {
      window.history.pushState({}, '', '/bai-viet');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBlogPost = (slug: string) => {
    setDrawer('none');
    setRoute({ view: 'blog-post', slug });
    const targetPath = `/bai-viet/${slug}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const jumpToSection = (sectionId: string) => {
    setDrawer('none');
    setRoute({ view: 'home' });
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
      {route.view === 'home' && <SectionQuickDock onNavigate={jumpToSection} />}

      <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar
            onNavigate={jumpToSection}
            onOpenDomation={() => setDrawer('domation')}
            onOpenEcoLife={() => setDrawer('ecolife')}
            onOpenBlog={() => openBlogArchive()}
            isBlogView={route.view !== 'home'}
            onOpenSearch={() => setCommandOpen(true)}
            onOpenContact={() => openContactModal()}
          />

        <main className="flex-grow">
          {route.view === 'blog-list' ? (
            <Suspense fallback={<div className="py-32 text-center text-sm font-bold text-[#1E40FF]">Đang tải Bộ Sưu Tập Bài Viết...</div>}>
              <BlogArchiveView
                initialPillar={blogFilter}
                onBackHome={() => jumpToSection('hero')}
                onOpenPost={openBlogPost}
              />
            </Suspense>
          ) : route.view === 'blog-post' ? (
            <Suspense fallback={<div className="py-32 text-center text-sm font-bold text-[#1E40FF]">Đang tải Bài Viết &amp; Growth Dashboard...</div>}>
              <BlogSinglePostView
                slug={route.slug}
                onBackArchive={() => openBlogArchive()}
                onBackHome={() => jumpToSection('hero')}
                onOpenPost={openBlogPost}
                onJumpSection={jumpToSection}
                onOpenContact={(svc) => openContactModal(svc)}
              />
            </Suspense>
          ) : (
            <>
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
            <BlogSpotlight
              onOpenArchive={(pillar) => openBlogArchive(pillar)}
              onOpenPost={openBlogPost}
            />
          </SectionShell>

          <SectionShell>
            <Partners />
          </SectionShell>
            </>
          )}
        </main>

        <Suspense fallback={null}>
          <Footer
            onOpenDomation={() => setDrawer('domation')}
            onOpenEcoLife={() => setDrawer('ecolife')}
            onOpenBlog={() => openBlogArchive()}
            onNavigateProfile={jumpToSection}
            onOpenContact={() => openContactModal()}
          />
        </Suspense>
      </div>

      {/* Floating Scroll to Top Button (Centered when scrollY > 100px) */}
      {showScrollTop && drawer === 'none' && !contactOpen && (
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

      {commandOpen && (
        <Suspense fallback={null}>
          <CommandPalette
            isOpen={commandOpen}
            onClose={() => setCommandOpen(false)}
            onNavigate={jumpToSection}
            onOpenEcoLife={() => setDrawer('ecolife')}
            onOpenDomation={() => setDrawer('domation')}
            onOpenBlog={() => openBlogArchive()}
            onOpenPost={openBlogPost}
          />
        </Suspense>
      )}

      {contactOpen && (
        <Suspense fallback={null}>
          <ContactConsultModal
            isOpen={contactOpen}
            onClose={() => setContactOpen(false)}
            defaultService={contactService}
          />
        </Suspense>
      )}

      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-[120] px-4 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-xl inline-flex items-center gap-2 whitespace-nowrap pointer-events-none"
          >
            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
