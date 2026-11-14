import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Maximize2,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { DOM_PROJECTS } from '../../constants';
import Modal from '../UI/Modal';

import domLogo from '../../imgs/dom_logo.webp';
import keEbImg from '../../imgs/ke-eb.jpg';
import tr1Img from '../../imgs/tr1.webp';
import micrositePdf from '../../pdf/microsite game_compressed.pdf';

interface LandingPageItem {
  name: string;
  tag: string;
  url: string;
  thumbnail: string;
  highlight?: boolean;
}

const LANDING_PAGES: LandingPageItem[] = [
  // Flagships & Client Case Studies (8 Cards — 4x2 Balanced Grid)
  {
    name: 'EcoLife Signature Official',
    tag: 'Official Web',
    url: 'https://ecolifesignature.vn/',
    thumbnail: '/assets/ecolife/ecolife_official_live.jpg',
    highlight: true,
  },
  {
    name: 'INKICA AI POD Studio',
    tag: 'AI Prepress & 3D',
    url: 'https://ai.inkica.com/',
    thumbnail: '/assets/inkica/inkica_quick_mockup.jpg',
    highlight: true,
  },
  {
    name: 'IDEAS MScAI',
    tag: 'Master of AI',
    url: 'https://ideas.edu.vn/mscai',
    thumbnail: '/assets/domation/clients/ideasedu.webp',
  },
  {
    name: 'Nha khoa Flora Implant',
    tag: 'Event Landing Page',
    url: 'https://nhakhoaflora.com/ngay-hoi-implant/',
    thumbnail: '/assets/domation/clients/flora.webp',
  },
  {
    name: 'Brandson CME',
    tag: 'Course Funnel',
    url: 'https://brandson.vn/cay-ghep-nha-khoa-co-ban/',
    thumbnail: '/assets/domation/clients/brandson.webp',
  },
  {
    name: 'KA-EN Event',
    tag: 'Event Booking Web',
    url: 'https://ka-en.com.vn/event.html',
    thumbnail: keEbImg,
  },
  {
    name: 'Navastore',
    tag: 'E-Commerce',
    url: 'https://navastore.vn/',
    thumbnail: '/assets/domation/clients/nava.webp',
  },
  {
    name: 'Tarot Huyền Bí',
    tag: 'Interactive App',
    url: 'https://mystery-tarot.net/',
    thumbnail: tr1Img,
  },
];

const DomMarketing: React.FC = () => {
  const [previewProject, setPreviewProject] = useState<{
    title: string;
    desc: string;
    image: string;
  } | null>(null);

  return (
    <section
      id="domarketing"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Row: Founder Identity + 2 Core DOMATION Tool Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Left: Founder Branding — DOM MARKETING on ONE SINGLE LINE with Gold Gradient */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 p-2 shadow-sm shrink-0 flex items-center justify-center">
                <img
                  src={domLogo}
                  alt="DOM MARKETING"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/90 text-amber-700 text-[10.5px] font-bold uppercase tracking-[0.14em]">
                <Sparkles size={12} /> Founder &amp; Architect
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.55rem] font-black tracking-tight text-slate-950 leading-[1.25] whitespace-nowrap mb-3">
              DOM <span className="text-gradient-amber">MARKETING.</span>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              Agency &amp; Studio sản phẩm số hợp nhất tư duy Growth Performance Ads với kỹ thuật
              lập trình WebGL 3D, AI Prepress và tự động hóa CRM CAPI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700">
              {[
                'Performance Meta & Google Ads',
                'High-Converting Landing Page',
                'WebGL 3D & Interactive Game',
                'CRM Auto Routing & Meta CAPI',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <CheckCircle2 size={13} className="text-amber-500 shrink-0" />
                  <span className="truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 2 Core Reporting & CRM Connector Products + Action Strips */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {DOM_PROJECTS.map((proj, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-50/75 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-[#1E40FF]/40 hover:shadow-lg transition-all p-3 flex flex-col justify-between"
                >
                  <div>
                    <div
                      onClick={() => setPreviewProject(proj)}
                      className="relative aspect-[16/10] rounded-xl overflow-hidden bg-white border border-slate-200 mb-3 cursor-pointer"
                    >
                      <img
                        src={proj.image}
                        alt={proj.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      <span className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/95 border border-slate-200 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        <Maximize2 size={12} />
                      </span>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{proj.desc}</p>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60">
                    <button
                      type="button"
                      onClick={() => setPreviewProject(proj)}
                      className="text-[11px] font-bold text-[#1E40FF] hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 size={12} /> Xem giao diện
                    </button>
                    <span className="text-slate-300">•</span>
                    <a
                      href="https://domation.net"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] font-bold text-slate-700 hover:text-[#1E40FF] inline-flex items-center gap-1"
                    >
                      <ExternalLink size={12} /> domation.net
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Compact Dual Quick Cards: Waterbomb PDF & DOMATION CLI / Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={micrositePdf}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/85 hover:border-[#1E40FF]/40 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 transition-colors group-hover:bg-amber-500 group-hover:border-amber-500 group-hover:text-white [&_svg]:group-hover:text-white">
                    <Zap size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-slate-900 truncate">
                      Waterbomb 2025 Microsite
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      Gamification &amp; Activation PDF
                    </div>
                  </div>
                </div>
                <FileText size={15} className="text-slate-400 group-hover:text-[#1E40FF] shrink-0" />
              </a>

              <a
                href="https://portfo-turnio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/85 hover:border-[#1E40FF]/40 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-[#1E40FF] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#1E40FF] group-hover:border-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white">
                    <Terminal size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-slate-900 truncate">
                      Classic Purple Portfolio
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">
                      portfo-turnio.vercel.app
                    </div>
                  </div>
                </div>
                <ExternalLink
                  size={14}
                  className="text-slate-400 group-hover:text-[#1E40FF] shrink-0"
                />
              </a>
            </div>
          </div>
        </div>

        {/* ALL LANDING PAGES & CASE STUDY DEPLOYMENTS DIRECTORY */}
        <div className="rounded-3xl inkica-glass-card p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Globe size={15} className="text-[#1E40FF]" />
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                Danh Sách Landing Page &amp; Cổng Triển Khai Thực Tế ({LANDING_PAGES.length} Live URLs)
              </h3>
            </div>
            <span className="text-[11px] font-semibold text-slate-500">
              EcoLife Signature • INKICA AI • IDEAS MScAI • Nha khoa Flora • Brandson • KA-EN • Navastore • Tarot
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {LANDING_PAGES.map((lp) => (
              <a
                key={lp.url}
                href={lp.url}
                target="_blank"
                rel="noreferrer"
                className={`group rounded-2xl border p-2.5 transition-all flex flex-col justify-between ${
                  lp.highlight
                    ? 'bg-white/75 backdrop-blur-md border-blue-200 hover:border-[#1E40FF]'
                    : 'bg-white/65 backdrop-blur-md border-white/90 ring-1 ring-slate-200/70 hover:border-[#1E40FF]/50 hover:bg-white/90'
                }`}
              >
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/70 mb-2">
                  <img
                    src={lp.thumbnail}
                    alt={lp.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 px-1 pb-0.5">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#1E40FF] truncate transition-colors">
                      {lp.name}
                    </div>
                    <div className="text-[10px] font-medium text-slate-500 truncate">{lp.tag}</div>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-slate-400 group-hover:text-[#1E40FF] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!previewProject}
        onClose={() => setPreviewProject(null)}
        title={previewProject?.title || 'DOM MARKETING Product'}
        className="max-w-5xl"
      >
        {previewProject && (
          <div className="space-y-3">
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-2">
              <img
                src={previewProject.image}
                alt={previewProject.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-600 text-center">{previewProject.desc}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default DomMarketing;
