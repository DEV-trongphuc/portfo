import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  ExternalLink,
  Image as ImageIcon,
  LayoutDashboard,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
// @ts-ignore
import tr1 from '../../imgs/tr1.webp';
// @ts-ignore
import tr2 from '../../imgs/tr2.webp';
// @ts-ignore
import cmt1 from '../../imgs/CMT1.webp';
// @ts-ignore
import cmt2 from '../../imgs/CMT2.webp';
// @ts-ignore
import cmt3 from '../../imgs/CMT3.webp';
// @ts-ignore
import cmt4 from '../../imgs/CMT4.webp';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

const TarotShowcase: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const highlights = [
    {
      title: 'SEO AI Automation',
      desc: 'Hơn 600 bài viết SEO content đa chủ đề được generate 100% bằng AI.',
      icon: <Cpu size={20} />,
    },
    {
      title: 'App-like Experience',
      desc: 'Phá vỡ giới hạn thiết kế website thông thường, trải nghiệm mượt như Native App.',
      icon: <LayoutDashboard size={20} />,
    },
    {
      title: 'Custom Artworks',
      desc: 'Bộ bài Tarot được tự thiết kế độc quyền, mang đậm phong cách thẩm mỹ riêng.',
      icon: <ImageIcon size={20} />,
    },
    {
      title: '1000+ Users in Week 1',
      desc: 'Đạt mốc 1000 người dùng ngay trong tuần đầu ra mắt với phản hồi tích cực.',
      icon: <Users size={20} />,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden z-10 border-t border-slate-200/80">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 1, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-[#1E40FF] mb-6"
          >
            <Sparkles size={15} />
            <span className="text-[11px] font-bold tracking-widest uppercase">
              Personal Project Highlights
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 1, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold mb-3 text-slate-900 leading-[1.35]"
          >
            Mystery{' '}
            <span className="block sm:inline font-editorial text-gradient-inkica">
              Tarot App.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Mobile Screen Slider */}
          <div className="md:hidden order-2">
            <ResponsiveSlideDeck
              items={[
                { src: tr1, alt: 'Tarot App Screen 1' },
                { src: tr2, alt: 'Tarot App Screen 2' },
              ]}
              keyExtractor={(s) => s.alt}
              desktopMode="slider"
              mobilePerPage={1}
              gapClass="gap-3"
              ariaLabel="Giao diện Mystery Tarot"
              renderItem={(s) => (
                <div
                  onClick={() => setPreviewImage(s.src)}
                  className="rounded-3xl overflow-hidden border border-slate-200 bg-white p-1.5 shadow-sm cursor-zoom-in"
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover rounded-2xl"
                  
                  />
                </div>
              )}
            />
          </div>

          {/* Tablet/Desktop Overlapping Screens */}
          <div className="hidden md:flex lg:col-span-7 order-2 lg:order-1 relative h-[480px] md:h-[580px] justify-center items-center">
            <motion.div
              initial={{ opacity: 1, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 right-0 md:right-8 w-[84%] md:w-[78%] rounded-3xl overflow-hidden border border-slate-200 bg-white p-1.5 shadow-[0_24px_60px_-20px_rgba(30,64,255,0.22)] z-10 cursor-zoom-in hover:z-30 hover:scale-[1.03] transition-transform"
              onClick={() => setPreviewImage(tr1)}
            >
              <img
                src={tr1}
                alt="Tarot App Screen 1"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl"
              
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute bottom-0 left-0 md:left-8 w-[84%] md:w-[78%] rounded-3xl overflow-hidden border border-slate-200 bg-white p-1.5 shadow-[0_24px_60px_-20px_rgba(99,102,241,0.24)] z-20 cursor-zoom-in hover:z-30 hover:scale-[1.03] transition-transform"
              onClick={() => setPreviewImage(tr2)}
            >
              <img
                src={tr2}
                alt="Tarot App Screen 2"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl"
              
              />
            </motion.div>
          </div>

          {/* Right side on desktop: Content */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
                Trải nghiệm tâm linh kỷ nguyên số
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Không chỉ là một website xem bài thông thường, Mystery Tarot được thiết kế như một
                ứng dụng Native App mượt mà trên từng điểm chạm.
              </p>
            </div>

            <ResponsiveSlideDeck
              items={highlights}
              keyExtractor={(item) => item.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-1"
              gapClass="gap-3.5"
              ariaLabel="Điểm nhấn Mystery Tarot"
              renderItem={(item) => (
                <div className="flex gap-4 group p-3.5 rounded-2xl inkica-glass-card h-full">
                  <div className="shrink-0 w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-[#1E40FF] border border-blue-200/70 group-hover:bg-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-[#1E40FF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )}
            />

            <div className="pt-2">
              <a
                href="https://www.mystery-tarot.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inkica-primary inline-flex items-center gap-2.5 px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider"
              >
                Trải nghiệm Tarot ngay
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Community Rating Feedback */}
        <motion.div
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-wider">
              Đánh giá từ Cộng đồng
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            <div className="bg-white/95 border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm">
              <h4 className="text-slate-500 font-bold uppercase tracking-[0.2em] mb-3 text-[11px]">
                ĐIỂM TRUNG BÌNH
              </h4>
              <div className="text-6xl font-black text-[#1E40FF] mb-3 tabular-nums">5.0</div>
              <div className="flex gap-1.5 text-amber-400 mb-2">
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
                <Star fill="currentColor" size={22} />
              </div>
              <div className="text-slate-500 text-xs font-medium mt-1">274 đánh giá thực tế</div>
            </div>

            <div className="bg-white/95 border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h4 className="text-slate-500 font-bold uppercase tracking-[0.2em] mb-5 text-[11px]">
                PHÂN BỔ ĐÁNH GIÁ
              </h4>
              <div className="space-y-3.5">
                {[
                  { stars: 5, count: 269, percent: 98 },
                  { stars: 4, count: 3, percent: 1 },
                  { stars: 3, count: 0, percent: 0 },
                  { stars: 2, count: 0, percent: 0 },
                  { stars: 1, count: 2, percent: 1 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-slate-800 font-bold text-xs w-10 tabular-nums">
                      {row.stars} <Star fill="currentColor" className="text-amber-400" size={13} />
                    </div>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#1E40FF] to-[#0EA5E9] rounded-full"
                        style={{ width: `${row.percent}%` }}
                      ></div>
                    </div>
                    <div className="w-8 text-right text-slate-500 text-xs font-mono tabular-nums">
                      {row.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ResponsiveSlideDeck
            items={[cmt1, cmt2, cmt3, cmt4]}
            keyExtractor={(_, idx) => `cmt-${idx}`}
            desktopMode="grid"
            desktopGridClass="lg:grid-cols-4"
            gapClass="gap-4"
            className="max-w-5xl mx-auto"
            ariaLabel="Đánh giá cộng đồng Mystery Tarot"
            renderItem={(cmt, idx) => (
              <div
                className="rounded-2xl overflow-hidden border border-slate-200 bg-white p-1 cursor-zoom-in hover:border-[#1E40FF]/45 transition-all shadow-sm h-full"
                onClick={() => setPreviewImage(cmt)}
              >
                <img
                  src={cmt}
                  alt={`Community Feedback ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover rounded-xl"
                
                />
              </div>
            )}
          />
        </motion.div>
      </div>

      <Modal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        title="Mystery Tarot Reference"
        className="max-w-5xl"
      >
        {previewImage && (
          <div className="flex justify-center items-center w-full bg-slate-50 rounded-2xl p-2 border border-slate-200">
            <img
              src={previewImage}
              alt="Preview Fullscreen"
              className="max-w-full max-h-[75vh] object-contain rounded-xl" loading="lazy" decoding="async"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TarotShowcase;
