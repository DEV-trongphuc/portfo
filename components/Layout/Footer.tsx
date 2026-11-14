import React from 'react';
import {
  Box,
  Briefcase,
  Cpu,
  Database,
  ExternalLink,
  Handshake,
  Home,
  Mail,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { SOCIALS } from '../../constants';
import meAvatar from '../../me.webp';
import domLogo from '../../imgs/dom_logo.webp';

interface FooterProps {
  onOpenDomation?: () => void;
  onOpenEcoLife?: () => void;
  onNavigateProfile?: (sectionId: string) => void;
}

const InkicaSvgLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48" fill="none" className={className}>
    <defs>
      <linearGradient id="inkica_footer_grad" x1="6" y1="14" x2="30" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#5AB4F0" />
        <stop offset="100%" stopColor="#1E40FF" />
      </linearGradient>
    </defs>
    <path
      d="M20 15C26 25 31 30 31 36A11 11 0 1 1 9 36C9 30 14 25 20 15Z"
      fill="url(#inkica_footer_grad)"
    />
    <path d="M20 0 22 4 26 6 22 8 20 12 18 8 14 6 18 4Z" fill="#FF7A00" />
  </svg>
);

const SocialBrandIcon: React.FC<{ name: string }> = ({ name }) => {
  const key = name.toLowerCase();
  if (key.includes('facebook')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1877F2] shrink-0" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  }
  if (key.includes('youtube')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#FF0000] shrink-0" aria-hidden="true">
        <path d="M21.8 8.02a2.75 2.75 0 0 0-1.94-1.95C18.14 5.6 12 5.6 12 5.6s-6.14 0-7.86.47A2.75 2.75 0 0 0 2.2 8.02 28.8 28.8 0 0 0 1.73 12a28.8 28.8 0 0 0 .47 3.98 2.75 2.75 0 0 0 1.94 1.95c1.72.47 7.86.47 7.86.47s6.14 0 7.86-.47a2.75 2.75 0 0 0 1.94-1.95A28.8 28.8 0 0 0 22.27 12a28.8 28.8 0 0 0-.47-3.98ZM9.95 14.74V9.26L15.18 12l-5.23 2.74Z" />
      </svg>
    );
  }
  if (key.includes('tiktok')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-slate-900 shrink-0" aria-hidden="true">
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6a2.6 2.6 0 0 1 3.4-2.48V9.66a5.65 5.65 0 0 0-.8-.06 5.7 5.7 0 0 0-5.7 5.7 5.7 5.7 0 0 0 5.7 5.7 5.7 5.7 0 0 0 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48Z" />
      </svg>
    );
  }
  if (key.includes('linkedin')) {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0A66C2] shrink-0" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    );
  }
  return <ExternalLink size={14} className="text-[#1E40FF] shrink-0" />;
};

const QUICK_NAV = [
  { id: 'hero', label: 'Trang Chủ', icon: Home },
  { id: 'inkica-pod', label: 'INKICA AI POD', icon: Cpu },
  { id: 'real-estate', label: 'Dự Án 3D & AI', icon: Box },
  { id: 'experience', label: 'Kinh Nghiệm', icon: Briefcase },
  { id: 'erp-showcase', label: 'DOMATION ERP', icon: Database },
  { id: 'outsource', label: 'Digital Thực Chiến', icon: TrendingUp },
  { id: 'domarketing', label: 'DOM MARKETING', icon: Zap },
  { id: 'partners', label: 'Đối Tác & F1', icon: Handshake },
];

const Footer: React.FC<FooterProps> = ({
  onOpenDomation,
  onOpenEcoLife,
  onNavigateProfile,
}) => {
  const handleJump = (id: string) => {
    if (onNavigateProfile) {
      onNavigateProfile(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-200/90 pt-12 pb-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* TOP CTA BANNER: FLAT INKICA NAVY-SAPPHIRE (ZERO BLURRY SHADOW) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E3A8A] border border-slate-800 p-7 sm:p-10 mb-12 text-white">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-7">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-sky-300 text-[10.5px] font-bold uppercase tracking-[0.16em]">
                  <Sparkles size={12} /> Collaboration &amp; Advisory
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10.5px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available 2026
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.35] mb-2">
                Đồng hành kiến trúc
                <br />
                <span className="font-editorial text-sky-300">
                  hệ sinh thái AI &amp; Tăng trưởng.
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Từ AI Tools (INKICA), Web 3D &amp; Portal, ERP 5.0 đến CRM Auto Chia Data ZaloBot
                &amp; Meta Conversion API tối ưu tăng trưởng cho Doanh nghiệp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
              <a
                href="mailto:turniodev@gmail.com"
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1E40FF] to-[#0EA5E9] hover:from-[#254EDB] hover:to-[#0284C7] text-white text-xs font-extrabold tracking-wider inline-flex items-center justify-center gap-2 transition-all"
              >
                <Mail size={15} />
                <span>turniodev@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/turnio-dev/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare size={15} className="text-sky-300" />
                <span>Kết Nối LinkedIn Trực Tiếp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-COLUMN DIRECTORY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-slate-100">
          {/* Identity */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={meAvatar}
                alt="Huỳnh Trọng Phúc"
                className="w-11 h-11 rounded-full object-cover object-top border border-blue-200 shrink-0"
              />
              <div>
                <div className="text-sm font-extrabold text-slate-950">Huỳnh Trọng Phúc</div>
                <div className="text-[11px] font-bold text-[#1E40FF] tracking-wide">
                  Fullstack Developer - AI Automation
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Kiến trúc hệ sinh thái phần mềm AI Tools, WebGL 3D, Enterprise ERP &amp; CRM Auto
              Meta CAPI cho Doanh nghiệp.
            </p>
          </div>

          {/* Quick Nav with crisp Icons */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E40FF] mb-3">
              Điều Hướng Nhanh
            </div>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-xs font-semibold text-slate-600">
              {QUICK_NAV.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleJump(item.id)}
                      className="inline-flex items-center gap-1.5 hover:text-[#1E40FF] transition-colors cursor-pointer"
                    >
                      <Icon size={13} className="text-[#1E40FF]/80 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Live Portals with REAL Brand Logos */}
          <div className="lg:col-span-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E40FF] mb-3">
              Cổng Sản Phẩm Live
            </div>
            <div className="space-y-2">
              <a
                href="https://ai.inkica.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1E40FF]/50 text-xs font-bold text-slate-800 hover:text-[#1E40FF] transition-all"
              >
                <span className="inline-flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <InkicaSvgLogo className="w-4 h-4" />
                  </span>
                  <span>INKICA AI Studio POD</span>
                </span>
                <ExternalLink size={12} className="text-slate-400" />
              </a>

              <button
                type="button"
                onClick={onOpenDomation}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1E40FF]/50 text-xs font-bold text-slate-800 hover:text-[#1E40FF] transition-all cursor-pointer"
              >
                <span className="inline-flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0">
                    <img src={domLogo} alt="DOMATION" className="w-full h-full object-contain" />
                  </span>
                  <span>DOMATION Ecosystem</span>
                </span>
                <ExternalLink size={12} className="text-slate-400" />
              </button>

              <button
                type="button"
                onClick={onOpenEcoLife}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1E40FF]/50 text-xs font-bold text-slate-800 hover:text-[#1E40FF] transition-all cursor-pointer"
              >
                <span className="inline-flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0">
                    <img
                      src="/assets/ecolife/ecolife-leaf-emblem.webp"
                      alt="EcoLife Signature"
                      className="w-full h-full object-contain"
                    />
                  </span>
                  <span>Hồ Sơ EcoLife 3D</span>
                </span>
                <ExternalLink size={12} className="text-slate-400" />
              </button>
            </div>
          </div>

          {/* Socials with Brand Icons */}
          <div className="lg:col-span-2">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E40FF] mb-3">
              Kênh Kết Nối
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#1E40FF]/40 hover:bg-white text-xs font-bold text-slate-700 hover:text-[#1E40FF] inline-flex items-center justify-center gap-1.5 transition-all"
                >
                  <SocialBrandIcon name={s.name} />
                  <span className="truncate">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="pt-6 text-center text-xs font-semibold text-slate-500">
          @2026 Fullstack Developer - AI Automation | Turnio DEV
        </div>
      </div>
    </footer>
  );
};

export default Footer;
