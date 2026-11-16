import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { Experience as ExperienceItem } from '../../types';
import { Briefcase, Building2, Calendar } from 'lucide-react';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

/** Shared card body rendering experience header and crisp bullet-point highlights. */
const ExperienceCard: React.FC<{ item: ExperienceItem; isCurrent: boolean }> = ({
  item,
  isCurrent,
}) => {
  const bullets =
    item.highlights && item.highlights.length > 0 ? item.highlights : [item.description];

  return (
    <div
      className={`relative inkica-glass-card rounded-2xl p-5 sm:p-6 group h-full ${
        isCurrent ? 'ring-1 ring-blue-200/70' : 'ring-1 ring-slate-200/60'
      }`}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-mono font-bold backdrop-blur-md ${
            isCurrent
              ? 'bg-blue-50/75 text-[#1E40FF] border border-blue-200/80'
              : 'bg-white/65 text-slate-600 border border-slate-200/80'
          }`}
        >
          <Calendar size={11} />
          <span>{item.period}</span>
        </div>

        {isCurrent && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-700 text-[10px] font-bold uppercase tracking-wider shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Current</span>
          </span>
        )}
      </div>

      <div className="mb-3">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors leading-snug">
          {item.role}
        </h3>
        <div className="flex items-center gap-1.5 text-[#1E40FF] text-[11px] font-bold uppercase tracking-wider mt-1">
          <Building2 size={12} className="shrink-0" />
          <span>{item.company}</span>
        </div>
      </div>

      <ul className="space-y-2 border-t border-slate-200/60 pt-3">
        {bullets.map((line, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-slate-600 text-xs sm:text-[13px] leading-relaxed"
          >
            <span
              aria-hidden="true"
              className={`mt-[7px] w-1.5 h-1.5 rounded-full shrink-0 ${
                isCurrent ? 'bg-[#1E40FF]' : 'bg-slate-400'
              }`}
            />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 border-b border-slate-200/70 relative z-10"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative">
        {/* Clean Header (No CURRENT STATUS badge) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-3"
            >
              <Briefcase size={13} />
              <span>Professional Journey</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.35]">
              Hành Trình{' '}
              <span className="block sm:inline font-editorial text-gradient-inkica">
                Kinh Nghiệm Thực Chiến.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md md:text-right">
            Các cột mốc từ Digital Performance đến Fullstack Engineering &amp; Kiến trúc hệ sinh
            thái AI Automation cho Doanh nghiệp.
          </p>
        </div>

        {/* Mobile/Tablet Responsive SlideDeck (1/slide Mobile, 2/slide Tablet) */}
        <ResponsiveSlideDeck
          items={EXPERIENCES}
          keyExtractor={(item, idx) => item.id || String(idx)}
          className="lg:hidden"
          desktopMode="slider"
          mobilePerPage={1}
          tabletPerPage={2}
          gapClass="gap-4"
          ariaLabel="Hành trình kinh nghiệm"
          renderItem={(item) => (
            <ExperienceCard item={item} isCurrent={/\bNOW\b/i.test(item.period)} />
          )}
        />

        {/* Desktop Classic Alternating Vertical Spine Timeline */}
        <div className="hidden lg:block relative">
          {/* Central Spine Line */}
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-[#1E40FF]/40 to-blue-200 md:-translate-x-1/2" />

          {EXPERIENCES.map((item, index) => {
            const isEven = index % 2 === 0;
            const isCurrent = /\bNOW\b/i.test(item.period);

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative flex items-center justify-between md:justify-normal mb-10 last:mb-0 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Node */}
                <div
                  className={`absolute left-[22px] md:left-1/2 w-7 h-7 rounded-full flex items-center justify-center z-10 -translate-x-1/2 border-2 transition-colors ${
                    isCurrent
                      ? 'bg-[#1E40FF] border-white ring-2 ring-[#1E40FF]/25'
                      : 'bg-white border-[#1E40FF]/50'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? 'bg-white' : 'bg-[#1E40FF]'
                    }`}
                  />
                </div>

                {/* Desktop Opposite Spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Card Container */}
                <div
                  className={`w-[calc(100%-56px)] md:w-[46%] ml-auto md:ml-0 ${
                    isEven ? 'md:pr-10' : 'md:pl-10'
                  }`}
                >
                  <ExperienceCard item={item} isCurrent={isCurrent} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
