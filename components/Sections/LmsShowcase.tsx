import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BarChartHorizontal, CheckCircle2, GraduationCap, Maximize2, Video } from 'lucide-react';
import Modal from '../UI/Modal';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

import lms1 from '../../imgs/lms (1).webp';
import lms2 from '../../imgs/lms (2).webp';
import lms3 from '../../imgs/lms (3).webp';
import lms4 from '../../imgs/lms (4).webp';

const LMS_SCREENS = [
  { src: lms1, title: 'Cổng Học Trực Tuyến & Lộ Trình' },
  { src: lms2, title: 'Ngân Hàng Đề Thi & Sát Hạch' },
  { src: lms3, title: 'Báo Cáo Tiến Độ & Chuyên Cần' },
  { src: lms4, title: 'Quản Trị Khóa Học & Chứng Chỉ' },
];

const LMS_FEATURES = [
  {
    icon: <Video size={18} />,
    title: 'Streaming Video Chống Tua',
    desc: 'Bảo vệ bản quyền nội dung với xác thực phiên học & theo dõi tỷ lệ hoàn thành.',
  },
  {
    icon: <CheckCircle2 size={18} />,
    title: 'Hệ Thống Đánh Giá & Thi Cử',
    desc: 'Ngân hàng câu hỏi đa dạng, chấm điểm tự động và ghi nhận bài luận trực tuyến.',
  },
  {
    icon: <BarChartHorizontal size={18} />,
    title: 'Theo Dõi Tiến Độ Real-time',
    desc: 'Thống kê thời gian học, tỷ lệ đậu từng module và cảnh báo học viên chậm.',
  },
  {
    icon: <Award size={18} />,
    title: 'Cấp Chứng Chỉ Số Tự Động',
    desc: 'Tự động sinh chứng nhận hoàn thành kèm mã xác thực ngay khi đạt KPI.',
  },
];

const LmsShowcase: React.FC = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section
      id="lms-showcase"
      className="py-16 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Visual Showcase Slider */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <ResponsiveSlideDeck
              items={LMS_SCREENS}
              keyExtractor={(screen) => screen.title}
              desktopMode="grid"
              desktopGridClass="lg:grid-cols-2"
              gapClass="gap-3.5"
              ariaLabel="Giao diện LMS E-Learning"
              renderItem={(screen, idx) => (
                <button
                  type="button"
                  onClick={() => setPreviewImage(screen.src)}
                  className="group relative w-full text-left rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#1E40FF]/45 shadow-sm hover:shadow-xl transition-all cursor-pointer p-2 h-full"
                >
                  <div className="relative rounded-xl overflow-hidden bg-slate-50 aspect-[16/10]">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 w-7 h-7 rounded-lg bg-white/95 border border-slate-200 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 size={13} />
                    </span>
                  </div>
                  <div className="px-2 pt-2.5 pb-1 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-[#1E40FF] transition-colors truncate">
                      {screen.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">0{idx + 1}</span>
                  </div>
                </button>
              )}
            />
          </div>

          {/* Right Column: Clean Title + 2x2 Compact Bento */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-4">
                <GraduationCap size={13} />
                <span>Education Platform</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold text-slate-900 leading-[1.35] mb-3.5">
                Đào tạo đội ngũ &amp; học viên{' '}
                <span className="font-editorial text-gradient-inkica">bài bản, tinh gọn.</span>
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Hệ thống LMS chuyên biệt cho học viện &amp; đào tạo nội bộ: học video bảo mật,
                thi sát hạch và cấp chứng chỉ trực tuyến.
              </p>

              <ResponsiveSlideDeck
                items={LMS_FEATURES}
                keyExtractor={(item) => item.title}
                desktopMode="grid"
                desktopGridClass="lg:grid-cols-2"
                gapClass="gap-3"
                ariaLabel="Tính năng LMS E-Learning"
                renderItem={(item) => (
                  <div className="group p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#1E40FF]/35 hover:shadow-md transition-all h-full">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200/70 text-[#1E40FF] flex items-center justify-center mb-2.5 transition-colors group-hover:bg-[#1E40FF] group-hover:border-[#1E40FF] group-hover:text-white [&_svg]:group-hover:text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                )}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        title="LMS E-Learning Interface"
        className="max-w-5xl"
      >
        {previewImage && (
          <div className="flex justify-center items-center w-full bg-slate-50 rounded-2xl p-2 border border-slate-200">
            <img
              src={previewImage}
              alt="Fullscreen Preview"
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
          </div>
        )}
      </Modal>
    </section>
  );
};

export default LmsShowcase;
