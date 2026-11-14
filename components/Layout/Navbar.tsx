import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../../utils/scrollSpy';
// @ts-ignore
import meAvatar from '../../me.webp';

const NAV_LINKS = [
  { name: 'INKICA AI POD', href: '#inkica-pod', id: 'inkica-pod' },
  { name: 'Dự Án 3D & AI', href: '#real-estate', id: 'real-estate' },
  { name: 'Hệ Sinh Thái', href: '#domation-data', id: 'domation-data' },
  { name: 'Kinh Nghiệm', href: '#experience', id: 'experience' },
  { name: 'Digital Thực Chiến', href: '#outsource', id: 'outsource' },
  { name: 'Đối Tác', href: '#partners', id: 'partners' },
];

const NAV_SPY_IDS = ['hero', ...NAV_LINKS.map((n) => n.id)];

export interface NavbarProps {
  activeMode?: 'classic' | 'ai';
  onToggleMode?: (mode: 'classic' | 'ai') => void;
  onNavigate?: (sectionId: string) => void;
  activeSection?: string;
  activeView?: 'profile' | 'ecolife' | 'domation';
  onOpenDomation?: () => void;
  onOpenEcoLife?: () => void;
  onOpenSearch?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
  onOpenSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedNav, setSelectedNav] = useActiveSection(NAV_SPY_IDS, activeSection || 'hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const cleanId = id.replace(/^#/, '') || 'hero';
    setSelectedNav(cleanId);
    if (onNavigate) onNavigate(cleanId);

    const element = document.getElementById(cleanId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = NAV_LINKS;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-white border-b border-slate-200 py-3'
          : scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] py-2.5'
            : 'bg-white/75 backdrop-blur-md border-b border-slate-200/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-3 shrink-0 group"
        >
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-blue-600/30 shadow-sm bg-white p-0.5 shrink-0">
            <img src={meAvatar} alt="Huỳnh Trọng Phúc" className="w-full h-full object-cover rounded-full" />
          </div>
          <div className="leading-tight">
            <span className="font-display font-extrabold text-sm text-slate-950 block whitespace-nowrap group-hover:text-blue-700 transition-colors">
              Huỳnh Trọng Phúc
            </span>
            <span className="text-[10px] font-bold tracking-[0.04em] text-blue-600 block whitespace-nowrap">
              Fullstack Developer - AI Automation
            </span>
          </div>
        </a>

        {/* Desktop Nav Links with Smooth Sliding Active Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 rounded-full px-2 py-1">
          {navLinks.map((link) => {
            const active = selectedNav === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  active ? 'text-blue-700' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Quick Search (Ctrl+K) + Direct Zalo Contact */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {onOpenSearch && (
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Tìm nhanh trên Portfolio"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-slate-200 hover:border-[#1E40FF]/50 text-slate-600 hover:text-[#1E40FF] text-[11px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Search size={13} />
              <span className="hidden xl:inline">Tìm nhanh</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 text-[9.5px] font-mono bg-slate-100 border border-slate-200 rounded text-slate-500">
                ⌘K
              </kbd>
            </button>
          )}
          <a
            href="https://zalo.me/0378859736"
            target="_blank"
            rel="noreferrer"
            className="btn-inkica-primary px-5 py-2 text-xs whitespace-nowrap"
          >
            <MessageCircle size={14} className="shrink-0" />
            <span>Contact</span>
            <ArrowUpRight size={14} className="shrink-0" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Mở menu điều hướng"
          className="lg:hidden w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-2xl px-5 py-6 space-y-4 z-50"
          >
            <div className="grid grid-cols-2 gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-900 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <a
                href="https://zalo.me/0378859736"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-inkica-primary w-full h-11 text-xs inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={14} />
                <span>Contact • Zalo 0378.859.736</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
