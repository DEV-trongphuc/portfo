import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase,
  Layout,
  TrendingUp,
  Database,
  Bot,
  Palette,
  Video,
  Box,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import Modal from '../UI/Modal';

export type PillarCategory =
  | 'Strategic Leadership'
  | 'Digital Engineering'
  | 'MarTech & Automation'
  | 'Creative & Immersive';

export interface StrengthPillar {
  id: string;
  order: string;
  title: string;
  subtitle: string;
  category: PillarCategory;
  categoryLabel: string;
  strategicValue: string;
  quantitativeMetric: {
    value: string;
    label: string;
  };
  technologies: string[];
  keyDeliverables: string[];
  clientEvidence: string;
  icon: React.FC<{ className?: string }>;
}

export const STRENGTH_PILLARS: StrengthPillar[] = [
  {
    id: 'agency-leadership',
    order: '01',
    title: 'Lãnh Đạo Agency & Tăng Trưởng',
    subtitle: 'Agency Leadership & Growth',
    category: 'Strategic Leadership',
    categoryLabel: 'Chiến Lược & Vận Hành',
    strategicValue: 'Định vị thương hiệu DOMATION, quản trị danh mục ngân sách đa kênh, tối ưu P&L và chuyển đổi số quy trình vận hành cho 18+ thương hiệu.',
    quantitativeMetric: {
      value: '18+ Đối Tác',
      label: 'Doanh Nghiệp Triển Khai'
    },
    technologies: ['DOMATION Agency', 'P&L Optimization', 'Multi-channel Growth', 'Contract Governance'],
    keyDeliverables: [
      'Mô hình vận hành số 12 phân hệ chuẩn hóa',
      'Điều phối ngân sách quảng cáo vượt >1.2B₫',
      'Chuyển đổi số F&B, Bất động sản & Viện đào tạo'
    ],
    clientEvidence: 'DOMATION Agency, Ampersand Group, Viện IDEAS MBA',
    icon: Briefcase
  },
  {
    id: 'high-cr-landing',
    order: '02',
    title: 'Web Chuyển Đổi Cao & Quiet Luxury',
    subtitle: 'High-CR Landing Pages',
    category: 'Digital Engineering',
    categoryLabel: 'Kỹ Nghệ Web',
    strategicValue: 'Kiến tạo giao diện thẩm mỹ Quiet Luxury chuẩn Core Web Vitals, Responsive 100% không vỡ layout, tải trang <1.2s và tối ưu tỷ lệ chuyển đổi form.',
    quantitativeMetric: {
      value: '>18.4% CR',
      label: 'Tỷ Lệ Chuyển Đổi Form'
    },
    technologies: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Core Web Vitals'],
    keyDeliverables: [
      'Cấu trúc 7 chương kể chuyện kiến trúc (Scroll-Telling)',
      'Tối ưu form đăng ký Lead giảm ma sát tâm lý',
      'Tốc độ tải trang dưới 1.2s chuẩn Lighthouse xanh'
    ],
    clientEvidence: 'EcoLife Signature, Nava Store, Viện IDEAS MBA',
    icon: Layout
  },
  {
    id: 'performance-ads-capi',
    order: '03',
    title: 'Quảng Cáo Số & Server-Side Tracking',
    subtitle: 'Performance Ads & CAPI',
    category: 'MarTech & Automation',
    categoryLabel: 'MarTech & Dữ Liệu',
    strategicValue: 'Trực tiếp điều hành ngân sách lớn Meta Ads & TikTok; hạ tầng Cloudflare Workers GTM Server-Side bypass rào cản cookie iOS 14+ tăng 30% độ chuẩn xác.',
    quantitativeMetric: {
      value: '8.2x Peak ROAS',
      label: 'Kỷ Lục Hoàn Vốn Đầu Tư'
    },
    technologies: ['Meta Graph API', 'Meta CAPI', 'Cloudflare Workers', 'GTM Server-Side', 'Looker Studio'],
    keyDeliverables: [
      'Hạ tầng Server-Side CAPI bypass suy hao tín hiệu iOS 14+',
      'Hệ thống cảnh báo biến động giá thầu realtime',
      'Phân tích khung giờ vàng chốt đơn cho từng ngành'
    ],
    clientEvidence: 'Phúc Lộc Thọ (ROAS x5+), Ampersand Group (ROAS 5.0x), EcoLife Signature',
    icon: TrendingUp
  },
  {
    id: 'agency-crm-data-app',
    order: '04',
    title: 'Ứng Dụng Phân Phối Dữ Liệu & CRM',
    subtitle: 'Agency CRM Data App',
    category: 'MarTech & Automation',
    categoryLabel: 'MarTech & Dữ Liệu',
    strategicValue: 'Kiến trúc bộ định tuyến Round-Robin 5 cổng, van khóa chống ôm Backpressure SLA 2 phút, khử trùng số 6 tháng và đồng bộ 2 chiều MISA CAPI.',
    quantitativeMetric: {
      value: '<5s Sync',
      label: 'Tốc Độ Bắn Data Về Sales'
    },
    technologies: ['DOMATION DATA', 'MISA CAPI', 'Webhooks', 'Zalo OA Bot', 'Telegram War Room'],
    keyDeliverables: [
      'Thuật toán chia Round-Robin 5 cổng minh bạch đại lý F1',
      'Van khóa Backpressure SLA 2 phút tự động thu hồi lead',
      'Khử trùng lặp số điện thoại 6 tháng bảo toàn ngân sách'
    ],
    clientEvidence: 'EcoLife Signature (03 đại lý F1), Viện IDEAS MBA (12,600+ leads)',
    icon: Database
  },
  {
    id: 'ai-assistant-automation',
    order: '05',
    title: 'Trợ Lý AI & Tự Động Hóa Quy Trình',
    subtitle: 'AI Assistant & Automation',
    category: 'MarTech & Automation',
    categoryLabel: 'MarTech & Dữ Liệu',
    strategicValue: 'Tích hợp Gemini API huấn luyện riêng trên tập dữ liệu đặc thù dự án (JSONL dataset), tự động chấm điểm lead (Lead Scoring) và kích hoạt kịch bản chăm sóc n8n.',
    quantitativeMetric: {
      value: '88% Chuẩn Xác',
      label: 'Tư Vấn Tự Động 24/7'
    },
    technologies: ['Gemini API', 'OpenAI Assistants', 'n8n Workflows', 'Zalo ZNS', 'Lead Scoring Engine'],
    keyDeliverables: [
      'Dataset JSONL chi tiết chính sách, phong thủy, ngân hàng',
      'Chấm điểm tiềm năng Lead Scoring tự động phân loại sales',
      '120+ kịch bản chăm sóc tự động tiết kiệm 40h vận hành/tuần'
    ],
    clientEvidence: 'EcoLife Signature AI Assistant, DOMATION AutoFlow Pro',
    icon: Bot
  },
  {
    id: 'multimedia-design-systems',
    order: '06',
    title: 'Hệ Thống Thiết Kế Đồ Họa & Ấn Phẩm',
    subtitle: 'Multimedia Design Systems',
    category: 'Creative & Immersive',
    categoryLabel: 'Sáng Tạo & 3D',
    strategicValue: 'Thiết kế Key Visual đồng bộ, thích ứng màn hình LED sân khấu hội nghị đa tỷ lệ (1792×832, 512×768), Brochure gấp accordion 7×7 chuẩn in offset 300 DPI.',
    quantitativeMetric: {
      value: '300 DPI Offset',
      label: 'Tiêu Chuẩn Đồ Họa In Ấn'
    },
    technologies: ['Figma', 'Adobe InDesign', 'Photoshop', 'Illustrator', 'CMYK Industrial Standard'],
    keyDeliverables: [
      'Brochure accordion 7x7 chuẩn in offset thương mại 300 DPI',
      'Hệ thống Key Visual LED đa tỷ lệ màn hình sân khấu',
      'Pano hàng rào OOH và tài liệu đào tạo bán hàng chuẩn hóa'
    ],
    clientEvidence: 'EcoLife Signature Handover, Chuỗi F&B Ampersand',
    icon: Palette
  },
  {
    id: 'high-end-video-production',
    order: '07',
    title: 'Sản Xuất Video Điện Ảnh Đỉnh Cao',
    subtitle: 'High-End Video Production',
    category: 'Creative & Immersive',
    categoryLabel: 'Sáng Tạo & 3D',
    strategicValue: 'Đạo diễn và hậu kỳ phim dự án 4K điện ảnh, cảnh quay Flycam 60fps, chuỗi video đào tạo bán hàng và motion graphics 3D mở màn sự kiện mở bán.',
    quantitativeMetric: {
      value: '4K 60fps Cinema',
      label: 'Tiêu Chuẩn Video Phát Hành'
    },
    technologies: ['DaVinci Resolve', 'Premiere Pro', 'After Effects', 'Flycam 4K 60fps', '3D Motion'],
    keyDeliverables: [
      'Phim giới thiệu dự án chất lượng 4K điện ảnh chuẩn màu sắc',
      'Chuỗi video đào tạo bán hàng Sales Training chuyên sâu',
      'Motion Graphics 3D ấn tượng mở màn lễ mở bán'
    ],
    clientEvidence: 'EcoLife Signature Cinema, Kênh TikTok @turnio.dev (11K+ followers)',
    icon: Video
  },
  {
    id: '3d-webgl-virtual-space',
    order: '08',
    title: 'Tham Quan Nội Thất 3D & Sa Bàn Số',
    subtitle: '3D WebGL Virtual Space',
    category: 'Creative & Immersive',
    categoryLabel: 'Sáng Tạo & 3D',
    strategicValue: 'Xây dựng không gian sa bàn số hóa 3D tương tác WebGL trên nền tảng Three.js, xoay 360 độ, chuyển đổi 8 mặt bằng căn hộ và phát thư viện 85+ video nội thất.',
    quantitativeMetric: {
      value: '360° WebGL Tour',
      label: 'Không Gian Ảo Tương Tác'
    },
    technologies: ['Three.js', 'WebGL', 'GLTF/GLB Models', 'Interactive Canvas', 'Smooth 60fps Stream'],
    keyDeliverables: [
      'Sa bàn số 3D xoay 360 độ trực quan trên trình duyệt',
      'Bộ chọn tương tác 8 mặt bằng căn hộ mẫu (2PN, 3PN, Duplex)',
      'Thư viện 85+ video full-bleed chất lượng cao'
    ],
    clientEvidence: 'EcoLife Signature 3D Virtual Tour, Mystery Tarot 3D WebGL',
    icon: Box
  }
];

const FILTER_TABS = [
  { id: 'all', label: 'Tất Cả', count: '08' },
  { id: 'Strategic Leadership', label: 'Chiến Lược & Vận Hành', count: '01' },
  { id: 'Digital Engineering', label: 'Kỹ Nghệ Web', count: '01' },
  { id: 'MarTech & Automation', label: 'MarTech & Dữ Liệu', count: '03' },
  { id: 'Creative & Immersive', label: 'Sáng Tạo & 3D', count: '03' }
] as const;

export const StrengthsMatrix: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedPillar, setSelectedPillar] = useState<StrengthPillar | null>(null);

  const filteredPillars = selectedFilter === 'all'
    ? STRENGTH_PILLARS
    : STRENGTH_PILLARS.filter(p => p.category === selectedFilter);

  return (
    <section id="strengths" className="py-24 md:py-32 relative bg-[#030303] text-white overflow-hidden">
      {/* Anchor alias for navbar compatibility */}
      <div id="skills" className="absolute -top-20 pointer-events-none" />
      {/* Background Lighting & Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-gold-500/10 via-amber-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
              The Executive Matrix • 08 Strategic Pillars
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight mb-4">
            8 Trục Năng Lực Điều Hành &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
              Kỹ Nghệ Thực Chiến
            </span>
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Mô hình năng lực chữ T hoàn chỉnh: Giao thoa giữa tư duy quản trị tăng trưởng doanh nghiệp và năng lực kiến trúc phần mềm thực chiến.
          </p>

          {/* Filter Segment Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {FILTER_TABS.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-300 border-gold-500/40 shadow-[0_0_15px_rgba(234,179,8,0.15)]'
                      : 'bg-white/[0.03] text-gray-400 border-white/[0.07] hover:border-white/20 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterIndicator"
                      className="absolute inset-0 rounded-xl bg-gold-500/10 border border-gold-500/40 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-gold-500/20 text-gold-300' : 'bg-white/5 text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 8-Pillar Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredPillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  onClick={() => setSelectedPillar(pillar)}
                  className="group relative p-5 sm:p-6 rounded-2xl bg-[#0A0A0A]/90 border border-white/[0.08] hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(234,179,8,0.12)] cursor-pointer backdrop-blur-md"
                >
                  {/* Subtle Top Gold Accent Line on Hover */}
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/50 transition-all duration-500" />

                  <div>
                    {/* Card Header: Monospace Order + Icon Container */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-gold-500/80 tracking-widest px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                        PILLAR {pillar.order}
                      </span>
                      
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gold-400 group-hover:text-gold-300 group-hover:scale-110 group-hover:bg-gold-500/10 transition-all duration-300">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block mb-1">
                      {pillar.categoryLabel}
                    </span>

                    {/* Title & Subtitle */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono text-gray-400 line-clamp-1 mb-3">
                      {pillar.subtitle}
                    </p>

                    {/* 1-Sentence Strategic Value */}
                    <p className="text-xs text-gray-400 leading-relaxed font-light line-clamp-3 mb-4">
                      {pillar.strategicValue}
                    </p>
                  </div>

                  <div>
                    {/* Golden Metric Badge */}
                    <div className="p-3 rounded-xl bg-gold-500/[0.04] border border-gold-500/20 mb-4 group-hover:border-gold-500/40 transition-colors">
                      <div className="text-lg sm:text-xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
                        {pillar.quantitativeMetric.value}
                      </div>
                      <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mt-0.5">
                        {pillar.quantitativeMetric.label}
                      </div>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pillar.technologies.slice(0, 3).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.07] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {pillar.technologies.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.02] text-gray-400">
                          +{pillar.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Card Footer Action */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-gold-400 transition-colors">
                      <span className="text-[11px] uppercase tracking-wider font-mono">Chi tiết năng lực</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Forensic Detail Modal */}
      {selectedPillar && (
        <Modal
          isOpen={!!selectedPillar}
          onClose={() => setSelectedPillar(null)}
          title={`TRỤC NĂNG LỰC ${selectedPillar.order} // ${selectedPillar.subtitle}`}
          className="max-w-2xl bg-[#0A0A0A] border-gold-500/30"
        >
          <div className="p-6 md:p-8 space-y-6 text-white">
            {/* Modal Header Stat Callout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-gold-500/10 via-amber-500/5 to-transparent border border-gold-500/30">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  {selectedPillar.categoryLabel}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  {selectedPillar.title}
                </h4>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-2xl font-black font-mono text-gold-400">
                  {selectedPillar.quantitativeMetric.value}
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase">
                  {selectedPillar.quantitativeMetric.label}
                </div>
              </div>
            </div>

            {/* Strategic Value */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                Định Vị & Giá Trị Chiến Lược
              </p>
              <p className="text-sm text-gray-300 leading-relaxed font-light p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                {selectedPillar.strategicValue}
              </p>
            </div>

            {/* Key Deliverables */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5 font-bold">
                Các Hạng Mục Bàn Giao Thực Tế (Key Deliverables)
              </p>
              <div className="space-y-2">
                {selectedPillar.keyDeliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-gray-300 p-2.5 rounded-lg bg-white/[0.02]">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2.5 font-bold">
                Công Nghệ & Kỹ Nghệ Nòng Cốt
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedPillar.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Evidence */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono text-gray-400">Minh chứng triển khai:</span>
              <span className="text-xs font-bold font-mono text-gold-300">
                {selectedPillar.clientEvidence}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default StrengthsMatrix;
