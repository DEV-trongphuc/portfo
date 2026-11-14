import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  TrendingUp,
  Building2,
  BookOpen,
  GitBranch,
  Zap,
  Award,
  Boxes,
  Cpu,
  Building,
  ShieldCheck,
  Sparkles,
  Rocket,
  Bot,
  Target,
  Workflow,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Briefcase
} from 'lucide-react';

// @ts-ignore
import logoIdeas from '../../imgs/logo_ideas.webp';
// @ts-ignore
import logoPhucloctho from '../../imgs/logo_phucloctho.webp';
// @ts-ignore
import logoAmpersand from '../../imgs/ampersand logo.jpg';

// ==========================================
// ROADMAP & CASE STUDY TYPE DEFINITIONS
// ==========================================

export interface GoldenMetric {
  id: string;
  value: string;
  unit?: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

export interface EraMilestone {
  icon: React.FC<{ className?: string }>;
  title: string;
  metricBadge?: string;
  description: string;
  tags: string[];
}

export interface CareerEra {
  id: string;
  eraNumber: string;
  period: string;
  title: string;
  englishTitle: string;
  role: string;
  evolutionVector: {
    from: string;
    to: string;
  };
  summary: string;
  milestones: EraMilestone[];
  verifiedProofs: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  status: 'completed' | 'active' | 'future';
}

export interface MajorCaseStudy {
  id: string;
  client: string;
  shortName: string;
  category: string;
  headline: string;
  primaryMetric: {
    value: string;
    label: string;
  };
  secondaryMetrics: {
    value: string;
    label: string;
  }[];
  deliverables: string[];
  description: string;
  verifiedBadge: string;
  tags: string[];
  logo?: string;
}

export interface SlideDotProps {
  total: number;
  current: number;
  onSelect: (index: number) => void;
  className?: string;
}

export const SlideDot: React.FC<SlideDotProps> = ({ total, current, onSelect, className = '' }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          aria-label={`Go to slide ${idx + 1}`}
          className={`h-1.5 transition-all duration-300 rounded-full ${
            idx === current
              ? 'w-6 bg-gold-400 shadow-[0_0_8px_rgba(234,179,8,0.6)]'
              : 'w-1.5 bg-white/20 hover:bg-white/40'
          }`}
        />
      ))}
    </div>
  );
};

// ==========================================
// DATA PAYLOAD
// ==========================================

export const GOLDEN_METRICS: GoldenMetric[] = [
  {
    id: 'budget',
    value: '>1.2B',
    unit: '₫',
    label: 'Ngân Sách Vận Hành',
    sublabel: 'Tháng cao điểm >500M₫',
    highlight: true
  },
  {
    id: 'roas',
    value: '8.2x',
    label: 'ROAS Đỉnh Cao',
    sublabel: 'Bình quân hệ thống 4.8x'
  },
  {
    id: 'leads',
    value: '>35,000+',
    label: 'Leads Thực Bàn Giao',
    sublabel: 'Tích lũy 150,000+ leads'
  },
  {
    id: 'cr',
    value: '>18.4%',
    label: 'Tỷ Lệ Chuyển Đổi',
    sublabel: 'Trang đích Quiet Luxury'
  },
  {
    id: 'sync',
    value: '< 5s',
    label: 'Đồng Bộ Data-to-CRM',
    sublabel: 'MISA CAPI & Webhook Realtime'
  }
];

export const CAREER_ERAS: CareerEra[] = [
  {
    id: 'era-1',
    eraNumber: '01',
    period: '2020 — 2022',
    title: 'Khởi Nguồn Kỹ Nghệ & Thực Chiến Performance',
    englishTitle: 'Technical Foundation & Performance Execution',
    role: 'Growth Specialist & Full-Stack Practitioner',
    evolutionVector: {
      from: 'Lý Thuyết Học Viện (BUH) & Media Buyer Độc Lập',
      to: 'Vận Hành Hệ Thống Ngân Sách Lớn & Kỹ Sư Web Full-Stack'
    },
    summary: 'Xây dựng nền tảng tư duy quản trị tài chính từ BUH kết hợp thực chiến lập trình web chuẩn quốc tế và trực tiếp điều hành ngân sách quảng cáo lớn.',
    milestones: [
      {
        icon: GraduationCap,
        title: 'Cử Nhân BUH & 8 Chứng Chỉ Quốc Tế',
        metricBadge: '8 Chứng Chỉ',
        description: 'Tốt nghiệp BUH. Đạt 8 chứng chỉ: FreeCodeCamp (Front End, Responsive Web), F8 (ReactJS, JS Advanced), TopCV (Top 20% JavaScript & SEO Specialist).',
        tags: ['BUH Degree', 'FreeCodeCamp', 'ReactJS', 'JavaScript']
      },
      {
        icon: TrendingUp,
        title: 'Quản Trị Ngân Sách Performance Ads Lớn',
        metricBadge: '>1.2 Tỷ ₫',
        description: 'Vận hành và tối ưu chiến dịch đa kênh cho chuỗi F&B và doanh nghiệp bán lẻ (Phúc Lộc Thọ, Ampersand, The Running Bean).',
        tags: ['Meta Ads', 'TikTok Ads', 'P&L Optimization']
      },
      {
        icon: Building2,
        title: 'Hợp Đồng VITRAC 136.4M₫ (Fast ERP / Getfly CRM)',
        metricBadge: '136.4M₫ Contract',
        description: 'Bàn giao 30 trang giao diện, đồng bộ tồn kho Fast ERP, đẩy lead Getfly CRM, cổng thanh toán đa kênh và Mautic automation qua AWS SES.',
        tags: ['Fast ERP', 'Getfly CRM', 'E-Commerce', 'Mautic AWS']
      },
      {
        icon: BookOpen,
        title: 'Xuất Bản Sách "Facebook Ads: AI Chạy Không Được"',
        metricBadge: '154 Trang • 5.0★',
        description: 'Đúc kết 5 năm thực chiến đấu giá thầu; 500+ doanh nghiệp & chuyên gia tiếp thị tải; bảo vệ tài khoản trước các đợt quét thuật toán.',
        tags: ['Author', 'Ad Bidding', 'Playbook', 'Published']
      }
    ],
    verifiedProofs: [
      { label: 'Ngân Sách Điều Hành', value: '> 1.2 Tỷ ₫' },
      { label: 'Hợp Đồng Doanh Nghiệp', value: '136.4 Triệu ₫' },
      { label: 'Chứng Nhận Lập Trình', value: '8 Bằng Cấp' },
      { label: 'Quy Cách Sách Xuất Bản', value: '154 Trang' }
    ],
    techStack: ['ReactJS', 'JavaScript ES6+', 'Meta Graph API', 'Fast ERP', 'Getfly CRM', 'Mautic', 'Figma'],
    status: 'completed'
  },
  {
    id: 'era-2',
    eraNumber: '02',
    period: '2023 — 2024',
    title: 'Bứt Phá Kiến Trúc Dữ Liệu & Hệ Thống MarTech',
    englishTitle: 'MarTech Architecture & Router Development',
    role: 'MarTech Full-Stack Architect',
    evolutionVector: {
      from: 'Chuyên Viên Chạy Quảng Cáo Độc Lập',
      to: 'Kỹ Sư Kiến Trúc Hạ Tầng Dữ Liệu & Tự Động Hóa'
    },
    summary: 'Giải quyết triệt để rào cản kỹ thuật của ngành quảng cáo: xây dựng bộ định tuyến dữ liệu Round-Robin 5 cổng và hạ tầng Server-Side bypass suy hao tín hiệu iOS 14.',
    milestones: [
      {
        icon: GitBranch,
        title: 'Kiến Trúc Router Dữ Liệu DOMATION DATA',
        metricBadge: '< 5s Sync • SLA 2 Phút',
        description: 'Định tuyến Round-Robin 5 cổng thông minh cho đại lý bán lẻ; tích hợp van chống ôm dữ liệu SLA 2 phút và chặn trùng số điện thoại 6 tháng.',
        tags: ['Data Router', 'Round-Robin', 'Backpressure SLA', 'Anti-Hoarding']
      },
      {
        icon: Zap,
        title: 'GTM Server-Side trên Cloudflare Workers',
        metricBadge: '+30% Data Accuracy',
        description: 'Triển khai Meta CAPI & Google Tag Manager Server-Side trên Cloudflare Workers, phục hồi 30% tín hiệu chuyển đổi sau cập nhật Apple iOS 14.',
        tags: ['Cloudflare Workers', 'Meta CAPI', 'GTM Server', 'Edge Compute']
      },
      {
        icon: Award,
        title: 'Viện IDEAS MBA: Bứt Phá Tuyển Sinh +300%',
        metricBadge: '+300% Tuyển Sinh',
        description: 'Thu về 12,600+ Leads chất lượng cao, quy mô lớp mở rộng từ 20 lên 60 học viên/khóa, giảm chi phí tuyển sinh (CAC) -30% nhờ tự động hóa n8n.',
        tags: ['IDEAS MBA', '12.6k Leads', '-30% CAC', 'Lead Form Ads']
      },
      {
        icon: Boxes,
        title: 'Mở Rộng Chuỗi Cơm Tấm Phúc Lộc Thọ',
        metricBadge: '20+ Cửa Hàng • x5+ ROAS',
        description: '1,600+ Leads đối tác nhượng quyền, mở rộng thành công 20+ cửa hàng mới trên toàn quốc với tệp đối tác được thẩm định tài chính vững mạnh.',
        tags: ['Franchise', '20+ Stores', 'ROAS x5+', 'Lead Qualification']
      }
    ],
    verifiedProofs: [
      { label: 'Tăng Trưởng Tuyển Sinh', value: '+300%' },
      { label: 'Leads Khách Hàng Thực', value: '12,600+' },
      { label: 'Độ Trễ Phân Bổ Lead', value: '< 5 Giây' },
      { label: 'Chuỗi Cửa Hàng Mới', value: '20+ Điểm' }
    ],
    techStack: ['Cloudflare Workers', 'Meta CAPI', 'n8n Engine', 'Node.js', 'MISA CAPI', 'Zalo OA ZNS', 'Telegram Bot'],
    status: 'completed'
  },
  {
    id: 'era-3',
    eraNumber: '03',
    period: '2025 — 2026',
    title: 'Nhà Sáng Lập Điều Hành & Tổng Thầu Hệ Sinh Thái',
    englishTitle: 'Executive Founder & Ecosystem Master Contractor',
    role: 'CEO & Founder @ DOMATION / Master Technology Contractor',
    evolutionVector: {
      from: 'Kỹ Sư Kiến Trúc Hệ Thống (Architect)',
      to: 'Nhà Sáng Lập Doanh Nghiệp & Tổng Thầu Số Hóa Toàn Diện'
    },
    summary: 'Sáng lập DOMATION, hoàn thiện buồng lái 11 ứng dụng phần mềm tự chủ và đảm nhiệm vai trò tổng thầu số hóa trọn gói dự án bất động sản chuẩn quốc tế.',
    milestones: [
      {
        icon: Cpu,
        title: 'Sáng Lập DOMATION & Buồng Lái 11 Ứng Dụng',
        metricBadge: '11 Apps • 12 Modules',
        description: 'Phát triển Enterprise ERP 5.0 (12 phân hệ: GPS AI Selfie, Payroll Engine, RLS), CRM Lead War Room, AutoFlow Pro (120+ kịch bản), Gemini AI Assistant, Zalo Mini App.',
        tags: ['DOMATION ERP 5.0', '11 Apps Hub', 'AutoFlow Pro', 'Gemini AI']
      },
      {
        icon: Building,
        title: 'Tổng Thầu Số Hóa EcoLife Signature (EDGE)',
        metricBadge: '07 Trụ Cột Bàn Giao',
        description: 'Trực tiếp bàn giao 7 vertical: Web Quiet Luxury, Meta CAPI ROAS 8.2x, CRM 5 cổng F1, Chatbot Gemini AI dataset, Ấn phẩm đồ họa 300 DPI, Phim 4K Flycam, Sa bàn ảo 3D Three.js.',
        tags: ['EcoLife Signature', '376 Apartments', 'EDGE Certified', '7 Deliverables']
      },
      {
        icon: ShieldCheck,
        title: 'ROAS Kỷ Lục 8.2x & Quy Trình Khép Kín',
        metricBadge: '8.2x Peak ROAS',
        description: 'Đạt đỉnh hiệu suất hoàn vốn 8.2x trên chiến dịch EcoLife; vận hành dòng dữ liệu đồng bộ hai chiều từ form đăng ký đến MISA CAPI trong <5 giây.',
        tags: ['ROAS 8.2x', 'Closed-Loop', '< 5s Sync', 'Realtime BI']
      },
      {
        icon: Sparkles,
        title: 'Mạng Lưới 24 Đối Tác Doanh Nghiệp Uy Tín',
        metricBadge: '24 Thương Hiệu',
        description: 'Hợp tác chiến lược cùng Ampersand Group (6 thương hiệu cao cấp), Collège de Paris, Swiss UMEF, Ascencia, Richland PropTech, Nha Khoa Flora.',
        tags: ['24 Partners', 'Ampersand', 'Michelin Selected', 'Global Colleges']
      }
    ],
    verifiedProofs: [
      { label: 'Phân Hệ Enterprise ERP', value: '12 Phân Hệ' },
      { label: 'Hạng Mục Bàn Giao EcoLife', value: '07 Trụ Cột' },
      { label: 'Kỷ Lục Hiệu Suất ROAS', value: '8.2x' },
      { label: 'Đối Tác Doanh Nghiệp', value: '24 Thương Hiệu' }
    ],
    techStack: ['Next.js', 'React 19', 'TypeScript', 'Three.js / WebGL', 'Gemini 2.0 API', 'Supabase RLS', 'TailwindCSS'],
    status: 'active'
  },
  {
    id: 'era-4',
    eraNumber: '04',
    period: '2026+ Chiến Lược',
    title: 'Định Hướng Tương Lai: B2B SaaS & Agentic AI Tự Trị',
    englishTitle: 'Scalable B2B SaaS Platform & Autonomous Agentic AI',
    role: 'Strategic Platform Builder & Enterprise AI Innovator',
    evolutionVector: {
      from: 'Đơn Vị Tổng Thầu Số Hóa Theo Yêu Cầu (Custom Agency)',
      to: 'Nền Tảng B2B SaaS Đa Ngành & Hệ Thống AI Agent Tự Trị'
    },
    summary: 'Chuyển hóa hạ tầng phần mềm thành sản phẩm SaaS thương mại hóa diện rộng và phát triển mạng lưới Agentic AI tự vận hành quy trình kinh doanh.',
    milestones: [
      {
        icon: Rocket,
        title: 'Thương Mại Hóa Nền Tảng B2B SaaS Đa Ngành',
        metricBadge: 'Plug & Play SaaS',
        description: 'Đóng gói Enterprise ERP 5.0 và DOMATION DATA thành nền tảng SaaS triển khai tức thì cho các tập đoàn Bất động sản, chuỗi F&B và các viện đào tạo.',
        tags: ['B2B SaaS', 'Multi-Tenant', 'Plug-and-Play', 'PropTech & F&B']
      },
      {
        icon: Bot,
        title: 'Kiến Trúc Autonomous Agentic AI Workflows',
        metricBadge: 'Agentic Automation',
        description: 'Phát triển các Agent AI tự trị có khả năng tự động thực thi chuỗi tác vụ: chấm điểm khách hàng, tự cân đối kho căn hộ và cảnh báo biến động chi phí đến CEO.',
        tags: ['Agentic AI', 'Autonomous Agents', 'Gemini Reasoning', 'Auto-Routing']
      },
      {
        icon: Target,
        title: 'Định Chuẩn Quiet Luxury Digital Experience',
        metricBadge: 'Quiet Luxury Standard',
        description: 'Tiên phong thiết lập chuẩn mực thiết kế trải nghiệm số thượng lưu tại Việt Nam: Tối giản, thẩm mỹ trường tồn, Core Web Vitals xanh và tối ưu P&L thực chất.',
        tags: ['Quiet Luxury', 'Core Web Vitals', 'Bespoke UI', 'High-Conversion']
      },
      {
        icon: Workflow,
        title: 'Mở Rộng Hệ Sinh Thái Tích Hợp Đa Nền Tảng',
        metricBadge: 'Global Scalability',
        description: 'Mở rộng cổng API mở (Open API Gateway) kết nối ngân hàng, cổng thanh toán quốc tế và các giải pháp CRM hàng đầu thế giới.',
        tags: ['Open API', 'Fintech Sync', 'Global Infrastructure', 'Edge Cloud']
      }
    ],
    verifiedProofs: [
      { label: 'Mô Hình Triển Khai', value: '100% Plug & Play' },
      { label: 'Kiến Trúc Trí Tuệ Nhân Tạo', value: 'Autonomous Agents' },
      { label: 'Tốc Độ Tải Chuẩn Toàn Cầu', value: '< 1.0 Giây' },
      { label: 'Chuẩn Mực Thiết Kế', value: 'Quiet Luxury' }
    ],
    techStack: ['Agentic AI Frameworks', 'Gemini Flash/Pro', 'Distributed Edge Computing', 'Rust/Wasm', 'Micro-SaaS'],
    status: 'future'
  }
];

export const MAJOR_CASE_STUDIES: MajorCaseStudy[] = [
  {
    id: 'vitrac',
    client: 'Tổng Công Ty Cổ Phần Vĩnh Phú (VITRAC)',
    shortName: 'VITRAC',
    category: 'Thương Mại Điện Tử Cơ Giới & Tích Hợp Fast ERP / Getfly CRM',
    headline: 'Hợp Đồng Số Hóa Doanh Nghiệp 136.4M₫ Với Fast ERP & Getfly CRM',
    primaryMetric: {
      value: '136.4M₫',
      label: 'Giá Trị Hợp Đồng Nghiệm Thu'
    },
    secondaryMetrics: [
      { value: '30 Trang', label: 'Giao Diện Chuẩn UI/UX' },
      { value: 'Realtime', label: 'Đồng Bộ Tồn Kho Fast ERP' },
      { value: '100% Tự Động', label: 'Lead Flow Getfly CRM' }
    ],
    deliverables: [
      'Kiến trúc e-commerce phụ tùng cơ giới',
      'Đồng bộ tồn kho thời gian thực với Fast ERP',
      'Đẩy dữ liệu khách hàng tự động vào Getfly CRM',
      'Cổng thanh toán trực tuyến Momo, VNPay, ZaloPay',
      'Hệ thống đào tạo E-Learning nội bộ & đối tác',
      'Marketing Automation Mautic qua hạ tầng AWS SES'
    ],
    description: 'Dự án số hóa toàn diện quy mô lớn cho nhà phân phối máy xây dựng hạng nặng hàng đầu Việt Nam, chứng minh năng lực triển khai hệ thống phần mềm doanh nghiệp phức tạp và tích hợp ERP/CRM hai chiều.',
    verifiedBadge: '✦ Biên Bản Báo Giá & Nghiệm Thu 29/08/2021',
    tags: ['Heavy Machinery', 'Fast ERP', 'Getfly CRM', 'AWS SES', '136.4M₫']
  },
  {
    id: 'ideas',
    client: 'Viện Đào Tạo & Nghiên Cứu Quản Trị IDEAS (Thạc Sĩ MBA)',
    shortName: 'Viện IDEAS MBA',
    category: 'Giáo Dục Quốc Tế & Tăng Trưởng Tuyển Sinh Thạc Sĩ',
    headline: 'Bứt Phá Tuyển Sinh MBA +300% & Cắt Giảm -30% Chi Phí Học Viên (CAC)',
    primaryMetric: {
      value: '+300%',
      label: 'Tăng Trưởng Tuyển Sinh'
    },
    secondaryMetrics: [
      { value: '12,600+', label: 'Verified Qualified Leads' },
      { value: '-30%', label: 'Giảm Chi Phí Tuyển Sinh (CAC)' },
      { value: '20 ➔ 60', label: 'Học Viên Mở Rộng Mỗi Khóa' }
    ],
    deliverables: [
      'Chuyển đổi hoàn toàn từ Messenger chat sang Lead Form Ads',
      'Xây dựng pipeline dữ liệu tự động với n8n và CRM Router',
      'Báo cáo thời gian thực đo lường CPL theo từng khung giờ vàng',
      'Cổng thông tin tuyển sinh số hóa và minigame Zalo tương tác'
    ],
    description: 'Tái cấu trúc toàn bộ mô hình tuyển sinh trực tuyến cho chương trình Thạc sĩ Quốc tế, đưa quy mô lớp học tăng gấp 3 lần và tiết kiệm hàng trăm triệu đồng chi phí quảng cáo mỗi năm.',
    verifiedBadge: '✦ 12,600+ Leads Thực Tế Bàn Giao Nghiệm Thu',
    tags: ['Education', 'MBA Program', '+300% Growth', 'n8n Automation', '12.6k Leads'],
    logo: logoIdeas
  },
  {
    id: 'phucloctho',
    client: 'Chuỗi Cơm Tấm Phúc Lộc Thọ',
    shortName: 'Phúc Lộc Thọ',
    category: 'F&B Chuỗi & Nhượng Quyền Thương Hiệu Toàn Quốc',
    headline: 'Mở Rộng 20+ Cửa Hàng Khai Trương Mới & ROAS Nhượng Quyền Đạt x5+',
    primaryMetric: {
      value: 'x5+',
      label: 'Kỷ Lục ROAS Kênh Lead Ads'
    },
    secondaryMetrics: [
      { value: '1,600+', label: 'Đối Tác Nhượng Quyền Quan Tâm' },
      { value: '20+', label: 'Cửa Hàng Khai Trương Toàn Quốc' },
      { value: '>100', label: 'Nhà Đầu Tư Thẩm Định Sâu' }
    ],
    deliverables: [
      'Chiến dịch tiếp thị nhượng quyền thương hiệu quy mô toàn quốc',
      'Bộ lọc khách hàng tiềm năng 3 lớp (tài chính, mặt bằng, kinh nghiệm)',
      'Hệ thống tài liệu nhượng quyền số hóa và báo cáo realtime',
      'Tối ưu hóa chi phí thu hút đối tác đầu tư chất lượng cao'
    ],
    description: 'Vận hành chiến dịch tìm kiếm đối tác nhượng quyền cho chuỗi ẩm thực truyền thống, đóng góp trực tiếp vào tốc độ mở rộng mạng lưới 20+ chi nhánh mới với chỉ số ROAS vượt trội.',
    verifiedBadge: '✦ 20+ Cửa Hàng Thực Tế Đã Đi Vào Vận Hành',
    tags: ['Franchise', 'F&B Chain', '20+ Stores', 'ROAS x5+', '1,600+ Leads'],
    logo: logoPhucloctho
  },
  {
    id: 'ampersand',
    client: 'Ampersand Group (Tập Đoàn Quản Trị 6 Thương Hiệu F&B Cao Cấp)',
    shortName: 'Ampersand Group',
    category: 'F&B Cao Cấp & Tiếp Thị Đa Thương Hiệu Chuẩn Michelin',
    headline: 'Quản Trị Tiếp Thị 6 Thương Hiệu Thượng Lưu & Duy Trì ROAS 5.0x+',
    primaryMetric: {
      value: '5.0x+',
      label: 'ROAS Web Order Ổn Định'
    },
    secondaryMetrics: [
      { value: '6 Thương Hiệu', label: 'Quản Lý Song Song Cùng Lúc' },
      { value: '100M₫/Tháng', label: 'Doanh Số Web Với 5-7M Quảng Cáo' },
      { value: 'Michelin', label: 'Tệp Khách Esta Saigon Cao Cấp' }
    ],
    deliverables: [
      'Quản trị ngân sách tiếp thị cho 6 thương hiệu: Häagen-Dazs, The Running Bean, Esta Saigon, Snowee, Le Petit, BEAN',
      'Tối ưu hóa kênh Web Order trực tiếp tăng tỷ suất lợi nhuận',
      'Thiết lập nhận diện nội dung cao cấp chuẩn quốc tế',
      'Báo cáo phân tích hành vi khách hàng chi tiêu cao'
    ],
    description: 'Vận hành danh mục tiếp thị cho 6 thương hiệu nhà hàng và ẩm thực cao cấp, bao gồm thương hiệu Michelin Selected Esta Saigon, duy trì hiệu suất hoàn vốn 5.0x+ trên kênh đặt hàng trực tiếp.',
    verifiedBadge: '✦ Danh Mục 6 Thương Hiệu Cao Cấp Xác Thực',
    tags: ['Luxury F&B', 'Esta Saigon Michelin', 'ROAS 5.0x', '6 Brands', 'Haagen Dazs'],
    logo: logoAmpersand
  }
];

// ==========================================
// 1. GOLDEN METRICS RIBBON COMPONENT
// ==========================================
export const GoldenMetricsRibbon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full relative ${className}`}>
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent blur-xl pointer-events-none" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 relative z-10">
        {GOLDEN_METRICS.map((metric, idx) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className={`relative p-4 sm:p-5 rounded-2xl bg-[#080808]/90 border ${
              metric.highlight
                ? 'border-gold-500/40 shadow-[0_0_25px_rgba(234,179,8,0.12)]'
                : 'border-white/[0.08] hover:border-white/20'
            } backdrop-blur-md transition-all duration-300 group hover:-translate-y-1`}
          >
            {/* Top Hairline Indicator */}
            <div
              className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent ${
                metric.highlight ? 'via-gold-500/70' : 'via-white/20'
              } to-transparent`}
            />

            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-gold-400 font-mono tracking-tight group-hover:scale-105 transition-transform origin-left duration-300">
                {metric.value}
              </span>
              {metric.unit && (
                <span className="text-gold-500 font-bold text-sm sm:text-base font-mono">
                  {metric.unit}
                </span>
              )}
            </div>

            <p className="text-xs font-bold text-gray-200 tracking-wide uppercase line-clamp-1 mb-1">
              {metric.label}
            </p>
            <p className="text-[11px] text-gray-400 font-light font-mono leading-tight">
              {metric.sublabel}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 2. CAREER ROADMAP (4-ERA INTERACTIVE STEPPER)
// ==========================================
export const CareerRoadmap: React.FC = () => {
  const [activeEraIndex, setActiveEraIndex] = useState<number>(2); // Default to Era 3 (2025-2026 Executive Founder)
  const currentEra = CAREER_ERAS[activeEraIndex];

  return (
    <div className="w-full mt-20 md:mt-28 relative">
      {/* Eyebrow & Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-3 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400 font-mono">
            EVOLUTIONARY TRAJECTORY // 4 ERAS
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight mb-3">
          Lộ Trình Phát Triển Sự Nghiệp &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
            Tầm Nhìn Tương Lai
          </span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Hành trình tiến hóa 6+ năm: Từ thực chiến hiệu suất (Specialist) đến kiến trúc sư hệ thống (Architect) và nhà sáng lập điều hành hệ sinh thái công nghệ (Executive Founder).
        </p>
      </div>

      {/* 4-Era Interactive Stepper Navigation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {CAREER_ERAS.map((era, idx) => {
          const isActive = idx === activeEraIndex;
          return (
            <button
              key={era.id}
              onClick={() => setActiveEraIndex(idx)}
              className={`relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border backdrop-blur-md ${
                isActive
                  ? 'bg-[#0E0E0E] border-gold-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)] ring-1 ring-gold-500/30'
                  : 'bg-[#080808]/70 border-white/[0.07] hover:border-white/20 hover:bg-[#0C0C0C]'
              }`}
            >
              {/* Active Golden Bar */}
              {isActive && (
                <motion.div
                  layoutId="activeEraBar"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400 via-amber-300 to-gold-600 rounded-t-2xl"
                />
              )}

              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest font-mono ${isActive ? 'text-gold-400' : 'text-gray-400'}`}>
                  ERA {era.eraNumber}
                </span>
                <span
                  className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                    era.status === 'completed'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : era.status === 'active'
                      ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30 animate-pulse'
                      : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                  }`}
                >
                  {era.status === 'completed' ? '✦ Đã Hoàn Thành' : era.status === 'active' ? '✦ Đang Vận Hành' : '✦ Chiến Lược 2026+'}
                </span>
              </div>

              <div className={`text-sm sm:text-base font-bold transition-colors line-clamp-1 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                {era.period}
              </div>
              <div className="text-xs text-gray-400 font-light line-clamp-1 mt-0.5">
                {era.englishTitle}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Era Content Presentation (Framer Motion AnimatePresence) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEra.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Left Column: Era Overview, Evolution Vector, Verified Proofs (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0A0A0A]/95 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest">
                Giai Đoạn {currentEra.eraNumber} / 04
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-xs font-mono text-gray-400">{currentEra.period}</span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug mb-3">
              {currentEra.title}
            </h3>

            {/* Role Badge */}
            <div className="inline-block px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/20 text-xs font-semibold text-gold-400 mb-6 font-mono">
              {currentEra.role}
            </div>

            {/* Evolution Vector Box */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.07] mb-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">
                Hành Trình Chuyển Dịch (Evolution Vector)
              </p>
              <div className="flex flex-col gap-1.5 text-xs">
                <div className="flex items-start gap-2 text-gray-400">
                  <span className="text-gray-500 font-mono">Từ:</span>
                  <span className="font-medium text-gray-300">{currentEra.evolutionVector.from}</span>
                </div>
                <div className="flex items-start gap-2 text-gold-400 font-semibold">
                  <span className="text-gold-500 font-mono">Đến:</span>
                  <span>{currentEra.evolutionVector.to}</span>
                </div>
              </div>
            </div>

            {/* Concise Summary */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              {currentEra.summary}
            </p>

            {/* Verified Proof Badges Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {currentEra.verifiedProofs.map((proof, pIdx) => (
                <div key={pIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="text-sm sm:text-base font-black text-gold-400 font-mono">{proof.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono mt-0.5">{proof.label}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">
                Công Nghệ & Kỹ Nghệ Nòng Cốt
              </p>
              <div className="flex flex-wrap gap-1.5">
                {currentEra.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Bespoke Glass Milestone Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentEra.milestones.map((milestone, mIdx) => {
              const IconComp = milestone.icon;
              return (
                <motion.div
                  key={mIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: mIdx * 0.07 }}
                  className="p-5 rounded-2xl bg-[#080808]/90 border border-white/[0.08] hover:border-gold-500/35 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5 backdrop-blur-md"
                >
                  <div>
                    {/* Header: Icon + Metric Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                        <IconComp className="w-5 h-5" />
                      </div>
                      {milestone.metricBadge && (
                        <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gold-300">
                          {milestone.metricBadge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                      {milestone.title}
                    </h4>

                    <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-white/5">
                    {milestone.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[9px] sm:text-[10px] font-mono text-gray-400 bg-white/[0.02] px-2 py-0.5 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ==========================================
// 3. MAJOR CASE STUDIES SPOTLIGHT COMPONENT
// ==========================================
export const MajorCaseStudies: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const currentCase = MAJOR_CASE_STUDIES[activeCaseIndex];

  return (
    <div className="w-full mt-24 md:mt-32 relative">
      {/* Eyebrow & Section Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-400 font-mono">
              VERIFIED BUSINESS PROOF
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
            Hồ Sơ Dự Án Tiêu Biểu & Minh Chứng Định Lượng
          </h2>
        </div>
        <div className="text-left md:text-right">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
            XÁC THỰC HIỆU QUẢ KINH DOANH
          </p>
          <p className="text-xs sm:text-sm font-bold text-gray-300">
            Hợp Đồng Thật • Tăng Trưởng Thật • ROAS Kỷ Lục
          </p>
        </div>
      </div>

      {/* Case Study Tab Selectors */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
        {MAJOR_CASE_STUDIES.map((item, idx) => {
          const isActive = idx === activeCaseIndex;
          return (
            <button
              key={item.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 border ${
                isActive
                  ? 'bg-gold-500 text-black border-gold-400 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                  : 'bg-[#080808] text-gray-400 border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              <span className={`font-mono text-xs ${isActive ? 'text-black/70 font-black' : 'text-gold-500'}`}>
                0{idx + 1}
              </span>
              <span>{item.shortName}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-black/20 text-black' : 'bg-white/5 text-gray-400'}`}>
                {item.primaryMetric.value}
              </span>
            </button>
          );
        })}
      </div>

      {/* Case Study Spotlight Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#0A0A0A]/95 border border-white/[0.08] relative overflow-hidden backdrop-blur-md"
        >
          {/* Subtle Top Gold Hairline */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Primary Stat Callout (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] pb-6 lg:pb-0 lg:pr-8">
              <div>
                <span className="text-[11px] font-mono font-bold text-gold-400 uppercase tracking-widest block mb-2">
                  {currentCase.category}
                </span>
                
                {/* Client Name + Logo (if available) */}
                <div className="flex items-center gap-3 mb-4">
                  {currentCase.logo && (
                    <img
                      src={currentCase.logo}
                      alt={currentCase.client}
                      className="w-10 h-10 rounded-xl object-contain bg-white/5 p-1 border border-white/10" loading="lazy" decoding="async"
                    />
                  )}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">
                    {currentCase.client}
                  </h3>
                </div>
              </div>

              {/* Big Metric Box */}
              <div className="my-4 p-5 rounded-2xl bg-black/60 border border-gold-500/25">
                <span className="text-xs font-mono text-gray-400 block mb-1">
                  {currentCase.primaryMetric.label}
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 font-mono tracking-tight">
                  {currentCase.primaryMetric.value}
                </span>
              </div>

              {/* Verified Proof Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{currentCase.verifiedBadge}</span>
              </div>
            </div>

            {/* Secondary Stats & Deliverables (8 Cols) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                  {currentCase.headline}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {currentCase.description}
                </p>

                {/* Secondary 3-Stat Band */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                  {currentCase.secondaryMetrics.map((sec, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-sm sm:text-base font-bold text-white font-mono">{sec.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono mt-0.5">{sec.label}</div>
                    </div>
                  ))}
                </div>

                {/* Deliverables Matrix */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">
                    Các Hạng Mục Bàn Giao Cốt Lõi (Key Deliverables)
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {currentCase.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {currentCase.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* SlideDot Navigation Pill Indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <SlideDot
          total={MAJOR_CASE_STUDIES.length}
          current={activeCaseIndex}
          onSelect={setActiveCaseIndex}
        />
      </div>
    </div>
  );
};

// ==========================================
// 4. MASTER EXPORTED SECTION
// ==========================================
export const RoadmapShowcase: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative z-10 bg-[#030303] text-white overflow-hidden">
      {/* Anchor alias for navbar compatibility */}
      <div id="experience" className="absolute -top-20 pointer-events-none" />
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Layer 1: Golden Metrics Ribbon */}
        <GoldenMetricsRibbon />

        {/* Layer 2: 4-Era Career Roadmap */}
        <CareerRoadmap />

        {/* Layer 3: Major Case Studies */}
        <MajorCaseStudies />
      </div>
    </section>
  );
};

export default RoadmapShowcase;
