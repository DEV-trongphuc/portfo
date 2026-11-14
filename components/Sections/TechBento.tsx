import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Code2,
  Cpu,
  Database,
  GitBranch,
  LayoutTemplate,
  Repeat,
  Smartphone,
  Zap,
} from 'lucide-react';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

const TechBento: React.FC = () => {
  const logos = [
    { name: 'React', url: 'https://cdn.simpleicons.org/react/0284C7' },
    { name: 'Next.js', url: 'https://cdn.simpleicons.org/nextdotjs/0F172A' },
    { name: 'Tailwind', url: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Framer', url: 'https://cdn.simpleicons.org/framer/0F172A' },
    { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/1E40FF' },
  ];

  return (
    <section id="tech-stack" className="py-24 lg:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full mb-5"
          >
            <Cpu size={14} className="text-[#1E40FF]" />
            <span className="text-[#1E40FF] font-bold tracking-[0.2em] uppercase text-[11px]">
              Fullstack Capabilities
            </span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-slate-900 leading-[1.35]">
            Hệ Sinh Thái <span className="font-editorial text-gradient-inkica">Công Nghệ.</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Một hệ sinh thái khép kín nơi{' '}
            <span className="text-[#1E40FF] font-bold">Engineering Logic</span> vận hành{' '}
            <span className="text-[#0284C7] font-bold">Marketing Growth</span>.
          </p>
        </div>

        {/* MOBILE / TABLET SLIDER DECK (1/mobile, 2/tablet) */}
        <ResponsiveSlideDeck
          items={[
            {
              id: 'bento-ui',
              render: () => (
                <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 relative overflow-hidden shadow-sm h-full">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-black text-slate-900">Interface Engineering</h3>
                    <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-100">
                      <LayoutTemplate size={18} className="text-[#1E40FF]" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-5">
                    Pixel-perfect UI/UX với tốc độ phản hồi dưới 100ms.
                  </p>
                  <div className="flex flex-wrap gap-2.5 items-center">
                    {logos.map((logo) => (
                      <div
                        key={logo.name}
                        className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        title={logo.name}
                      >
                        <img
                          src={logo.url}
                          alt={logo.name}
                          loading="lazy"
                          decoding="async"
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ),
            },
            {
              id: 'bento-zalo',
              render: () => (
                <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 shadow-sm h-full flex items-center gap-4">
                  <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-[#0284C7] shrink-0">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Zalo Mini App</h4>
                    <p className="text-xs text-slate-500">Tiếp cận 74tr người dùng</p>
                  </div>
                </div>
              ),
            },
            {
              id: 'bento-core',
              render: () => (
                <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E3A8A] border border-blue-900/40 rounded-3xl p-6 text-center shadow-[0_20px_50px_-20px_rgba(30,64,255,0.35)] h-full flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center mb-3">
                    <GitBranch size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">THE HYBRID CORE</h3>
                  <p className="text-slate-300 text-xs max-w-xs mx-auto leading-relaxed">
                    Điểm giao thoa nơi <span className="text-sky-300 font-bold">Dữ liệu thô</span>{' '}
                    được xử lý thành <span className="text-cyan-300 font-bold">Doanh thu thực</span>{' '}
                    qua Middleware tự động hóa.
                  </p>
                </div>
              ),
            },
            {
              id: 'bento-flow',
              render: () => (
                <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 flex items-center justify-between shadow-sm h-full">
                  <div>
                    <h4 className="font-black text-slate-900 text-lg">Automation Flow</h4>
                    <div className="flex gap-2 mt-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                    </div>
                  </div>
                  <Repeat size={26} className="text-[#1E40FF]" />
                </div>
              ),
            },
            {
              id: 'bento-server',
              render: () => (
                <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 shadow-sm h-full flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Server-side Data</h4>
                    <p className="text-xs text-slate-500 mt-1">GTM Server • Meta CAPI • Supabase</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 shrink-0">
                    <Database size={20} className="text-[#1E40FF]" />
                  </div>
                </div>
              ),
            },
            {
              id: 'bento-growth',
              render: () => (
                <div className="bg-white/95 border border-slate-200/90 rounded-3xl p-6 shadow-sm h-full">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-black text-slate-900">Growth Hacking</h3>
                    <div className="p-2.5 bg-sky-50 rounded-xl border border-sky-100">
                      <Zap size={18} className="text-[#0284C7]" />
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Tối ưu hóa chỉ số ROAS dựa trên dữ liệu realtime.
                  </p>
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                      <span>Meta Ads API</span>
                      <span className="text-[#1E40FF] font-bold">Connected</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[82%] bg-gradient-to-r from-[#1E40FF] to-[#0EA5E9] rounded-full"></div>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
          keyExtractor={(card) => card.id}
          className="lg:hidden"
          desktopMode="slider"
          mobilePerPage={1}
          tabletPerPage={2}
          gapClass="gap-4"
          ariaLabel="Hệ sinh thái công nghệ"
          renderItem={(card) => card.render()}
        />

        {/* DESKTOP BENTO GRID LAYOUT */}
        <div className="hidden lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto h-[580px]">
          {/* COLUMN 1: ENGINEERING */}
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 1, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-white/95 border border-slate-200/90 rounded-3xl p-7 relative overflow-hidden group hover:border-[#1E40FF]/35 shadow-sm transition-all"
            >
              <div className="absolute top-0 right-0 p-3 bg-blue-50 rounded-bl-2xl border-l border-b border-blue-100">
                <LayoutTemplate size={20} className="text-[#1E40FF]" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Interface <br /> Engineering
              </h3>
              <p className="text-sm text-slate-600 mb-7">
                Pixel-perfect UI/UX với tốc độ phản hồi dưới 100ms.
              </p>

              <div className="flex flex-wrap gap-3 items-center">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-blue-50 hover:border-[#1E40FF]/35 transition-all group/logo"
                    title={logo.name}
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="w-6 h-6 object-contain group-hover/logo:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.18 }}
              className="h-1/3 bg-white/95 border border-slate-200/90 rounded-3xl p-6 relative overflow-hidden group hover:border-[#0284C7]/40 shadow-sm transition-all flex flex-col justify-center"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl text-[#0284C7]">
                  <Smartphone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Zalo Mini App</h4>
                  <p className="text-xs text-slate-500">Tiếp cận 74tr người dùng</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COLUMN 2: THE HYBRID CORE */}
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 1, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.25 }}
              className="flex-[2] bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1E3A8A] border border-blue-900/40 rounded-3xl p-8 relative overflow-hidden group shadow-[0_24px_60px_-20px_rgba(30,64,255,0.35)]"
            >
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <div className="relative mb-7">
                  <div className="absolute inset-0 border border-sky-400/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute -inset-4 border border-cyan-300/25 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/25 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(56,189,248,0.28)]">
                    <GitBranch size={32} className="text-white" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">
                  THE HYBRID CORE
                </h3>
                <p className="text-slate-300 text-sm max-w-xs mx-auto leading-relaxed">
                  Điểm giao thoa nơi <span className="text-sky-300 font-bold">Dữ liệu thô</span>{' '}
                  được xử lý thành <span className="text-cyan-300 font-bold">Doanh thu thực</span>{' '}
                  qua Middleware tự động hóa.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.3 }}
              className="flex-1 bg-white/95 border border-slate-200/90 rounded-3xl p-6 flex items-center justify-between group hover:border-[#1E40FF]/35 shadow-sm transition-all"
            >
              <div>
                <h4 className="font-black text-slate-900 text-xl">Automation Flow</h4>
                <div className="flex gap-2 mt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>
              <Repeat
                size={30}
                className="text-slate-400 group-hover:text-[#1E40FF] group-hover:rotate-180 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* COLUMN 3: DATA & GROWTH */}
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 1, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.35 }}
              className="h-1/3 bg-white/95 border border-slate-200/90 rounded-3xl p-6 relative overflow-hidden group hover:border-[#1E40FF]/35 shadow-sm transition-all flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-3 bg-blue-50 rounded-bl-2xl border-l border-b border-blue-100">
                <Database size={20} className="text-[#1E40FF]" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Server-side Data</h4>
                <p className="text-xs text-slate-500 mt-1">GTM Server • Meta CAPI • Supabase</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.42 }}
              className="flex-1 bg-white/95 border border-slate-200/90 rounded-3xl p-7 relative overflow-hidden group hover:border-[#1E40FF]/35 shadow-sm transition-all"
            >
              <div className="absolute top-0 right-0 p-3 bg-sky-50 rounded-bl-2xl border-l border-b border-sky-100">
                <Zap size={20} className="text-[#0284C7]" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Growth <br /> Hacking
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Tối ưu hóa chỉ số ROAS dựa trên dữ liệu realtime.
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-slate-600">
                  <span>Meta Ads API</span>
                  <span className="text-[#1E40FF] font-bold">Connected</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[82%] bg-gradient-to-r from-[#1E40FF] to-[#0EA5E9] rounded-full"></div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-600 mt-2">
                  <span>Google Ads Script</span>
                  <span className="text-[#0284C7] font-bold">Active</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-[#0284C7] to-[#06B6D4] rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM DECORATION */}
        <div className="mt-10 flex justify-center opacity-50">
          <div className="flex gap-10 items-center">
            <Code2 size={16} className="text-[#1E40FF]" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <BarChart3 size={16} className="text-[#0284C7]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechBento;
