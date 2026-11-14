import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ExternalLink,
  Handshake,
  Layers,
  Sparkles,
} from 'lucide-react';
import {
  F1_AGENCY_PARTNERS,
  FEATURED_FLAGSHIP_PARTNERS,
  PARTNERS,
} from '../../constants';

const Partners: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('ALL');

  const industries = ['ALL', 'FNB', 'Education', 'Dental', 'Real Estate', 'Tech & Retail'];

  const filteredBrands = PARTNERS.filter((p) => {
    if (selectedIndustry === 'ALL') return true;
    const ind = p.industry.toLowerCase();
    if (selectedIndustry === 'FNB') return ind.includes('fnb');
    if (selectedIndustry === 'Education') return ind.includes('education');
    if (selectedIndustry === 'Dental') return ind.includes('dental');
    if (selectedIndustry === 'Real Estate') return ind.includes('real estate');
    return !ind.includes('fnb') && !ind.includes('education') && !ind.includes('dental') && !ind.includes('real estate');
  });

  const marqueeBrands = [...PARTNERS, ...PARTNERS];

  return (
    <section
      id="partners"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-3">
            <Handshake size={13} />
            <span>Ecosystem &amp; Trusted Clients</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.35] mb-2.5">
            Đối Tác &amp; Hệ Sinh Thái{' '}
            <span className="font-editorial text-gradient-inkica">Đồng Hành.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Từ Capital House • EcoLife Signature, các đại lý phân phối đến 30+ thương hiệu và
            Doanh nghiệp đồng hành triển khai tăng trưởng.
          </p>
        </motion.div>

        {/* TOP TIER: CAPITAL HOUSE & ECOLIFE SIGNATURE */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1E40FF] mb-3.5">
            <Building2 size={14} />
            <span>Đối Tác Trọng Điểm (Chủ Đầu Tư &amp; Dự Án Flagship)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {FEATURED_FLAGSHIP_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="inkica-glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-3.5 mb-3.5 border-b border-slate-100">
                    <div className="h-11 px-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-7 w-auto object-contain"
                      />
                    </div>
                    {partner.url && (
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-extrabold text-[#1E40FF] hover:underline shrink-0"
                      >
                        <span>Truy cập</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                  <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#1E40FF] mb-1">
                    {partner.role}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 mb-1.5">
                    {partner.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {partner.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM TIER 1: 3 F1 AGENCY PARTNERS */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-600 mb-3">
            <Sparkles size={13} className="text-[#1E40FF]" />
            <span>3 Đại Lý F1 Triển Khai Auto Routing &amp; Meta CAPI</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {F1_AGENCY_PARTNERS.map((agency) => (
              <div
                key={agency.id}
                className="inkica-glass-card rounded-2xl p-4 flex items-center gap-3.5"
              >
                <div className="w-14 h-12 rounded-xl bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src={agency.logo}
                    alt={agency.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-extrabold text-slate-900 truncate">{agency.name}</div>
                  <div className="text-[10.5px] font-bold text-[#1E40FF] truncate">
                    {agency.routeMetric}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">{agency.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM TIER 2: HORIZONTAL MARQUEE + FULL 24-BRAND SPREAD GRID */}
        <div className="inkica-glass-card rounded-3xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Layers size={15} className="text-[#1E40FF]" />
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900">
                30+ Thương Hiệu &amp; Doanh Nghiệp Đồng Hành
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {industries.map((ind) => (
                <button
                  type="button"
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                    selectedIndustry === ind
                      ? 'bg-[#1E40FF] text-white'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Marquee Row */}
          <div className="overflow-hidden border-y border-slate-200/60 py-3.5 mb-6">
            <div className="animate-marquee items-center gap-4">
              {marqueeBrands.map((brand, idx) => (
                <a
                  key={`${brand.name}-marq-${idx}`}
                  href={brand.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 ring-1 ring-slate-200/70 hover:border-[#1E40FF]/45 shrink-0 transition-all"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[13px] font-bold text-slate-800 whitespace-nowrap">
                    {brand.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Spacious 4-Column Frosted Glass Brand Directory */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBrands.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/90 ring-1 ring-slate-200/75 hover:bg-white/95 hover:border-[#1E40FF]/45 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-[15px] font-extrabold text-slate-900 group-hover:text-[#1E40FF] truncate transition-colors">
                    {partner.name}
                  </div>
                  <div className="text-xs font-medium text-slate-500 truncate mt-0.5">
                    {partner.industry}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
