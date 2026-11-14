import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  Zap,
  BarChart3,
  Box,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Activity,
  Compass,
  ArrowRight,
  Sparkles,
  Terminal,
  Grid
} from 'lucide-react';
import Modal from '../UI/Modal';

// @ts-ignore
import lms1 from '../../imgs/lms (1).webp';
// @ts-ignore
import lms2 from '../../imgs/lms (2).webp';
// @ts-ignore
import lms3 from '../../imgs/lms (3).webp';
// @ts-ignore
import lms4 from '../../imgs/lms (4).webp';

// @ts-ignore
import gameBlindbag from '../../imgs/game_blindbag.webp';
// @ts-ignore
import gameSpaWheel from '../../imgs/game_spa_wheel.webp';
// @ts-ignore
import gameKnowledge from '../../imgs/game_wheel_knowledge.webp';

// @ts-ignore
import tr1 from '../../imgs/tr1.webp';
// @ts-ignore
import tr2 from '../../imgs/tr2.webp';
// @ts-ignore
import cmt1 from '../../imgs/CMT1.webp';
// @ts-ignore
import cmt2 from '../../imgs/CMT2.webp';

// @ts-ignore
import crm5 from '../../imgs/CRM (5).webp';
// @ts-ignore
import crm6 from '../../imgs/CRM (6).webp';
// @ts-ignore
import crm7 from '../../imgs/CRM (7).webp';

// @ts-ignore
import auto1 from '../../imgs/automation (1).webp';
// @ts-ignore
import auto2 from '../../imgs/automation (2).webp';
// @ts-ignore
import auto3 from '../../imgs/automation (3).webp';

// @ts-ignore
import aiTrain1 from '../../imgs/ai_tu_train (1).webp';
// @ts-ignore
import aiTrain2 from '../../imgs/ai_tu_train (2).webp';
// @ts-ignore
import aiAgent2 from '../../imgs/ai_agent2.webp';

// @ts-ignore
import crms1 from '../../imgs/CRMS (1).webp';
// @ts-ignore
import crms2 from '../../imgs/CRMS (2).webp';
// @ts-ignore
import crms3 from '../../imgs/CRMS (3).webp';

// @ts-ignore
import domRp1 from '../../imgs/dom_rp_1.webp';
// @ts-ignore
import domRp2 from '../../imgs/dom_rp_2.webp';
// @ts-ignore
import domRp3 from '../../imgs/dom_rp_3.webp';

// @ts-ignore
import project1 from '../../imgs/project_1.webp';
// @ts-ignore
import project2 from '../../imgs/project_2.webp';
// @ts-ignore
import project3 from '../../imgs/project_3.webp';

// @ts-ignore
import project6 from '../../imgs/project_6.webp';
// @ts-ignore
import keEb from '../../imgs/ke-eb.jpg';

export type CockpitPillarGroup =
  | 'digital-apps'
  | 'automation'
  | 'marketing-bi'
  | 'virtual-spaces';

export interface CockpitImageItem {
  src: string;
  caption: string;
  tag?: string;
}

export interface ErpModuleItem {
  num: string;
  title: string;
  desc: string;
  tag: string;
}

export interface CockpitApp {
  id: string;
  code: string;
  name: string;
  pillarGroup: CockpitPillarGroup;
  pillarLabel: string;
  headline: string;
  shortDesc: string;
  highlightMetric: {
    value: string;
    label: string;
  };
  keyFeatures: string[];
  techStack: string[];
  demoUrl?: string;
  statusBadge: 'Production' | 'Live Enterprise' | 'Proprietary';
  images: CockpitImageItem[];
  erpModules?: ErpModuleItem[];
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

const ERP_MODULES_LIST: ErpModuleItem[] = [
  { num: '01', title: 'Tiếp nhận Lead Một Cửa & Chống Trùng', desc: 'Bóc tách thực thể Person và Lead. Cùng một SĐT chỉ tồn tại 1 hồ sơ duy nhất.', tag: 'Data Ingestion' },
  { num: '02', title: 'Chia Lead 5 Cổng & Van Chống Ôm SLA 2m', desc: 'Thuật toán xoay vòng Round-Robin 5 cổng thông minh. Tự động thu hồi nếu vượt quá SLA 2 phút.', tag: 'Smart Routing' },
  { num: '03', title: 'Ma Trận Nhiệt Độ Hot/Warm/Cold & Decay 5 Ngày', desc: 'Phân loại khách hàng theo độ nóng với cơ chế Decay 5 ngày. Bắt buộc cập nhật nhật ký trước khi chuyển trạng thái.', tag: 'Pipeline CRM' },
  { num: '04', title: 'Hợp Tác Số & Phân Chia Hoa Hồng 100%', desc: 'Quy trình kết nối đối tác liên kết, ký kết hợp tác số và phê duyệt tự động nhiều tầng.', tag: 'Affiliate' },
  { num: '05', title: 'Kho Databank & Tự Động Thu Hồi Tái Khai Thác', desc: 'Lead không phát sinh giao dịch sau thời gian quy định sẽ tự động chuyển về Kho chung Databank.', tag: 'Data Governance' },
  { num: '06', title: 'Quản Lý Giỏ Hàng & Tình Trạng Quỹ Căn Realtime', desc: 'Theo dõi tình trạng sản phẩm/căn hộ thời gian thực (Trống, Giữ chỗ, Đã cọc). Tích hợp kho tài liệu số.', tag: 'Inventory' },
  { num: '07', title: 'Chấm Công Định Vị GPS & AI Selfie Chống Gian Lận', desc: 'Quản lý hồ sơ nhân sự, phòng ban, ca trực. Chấm công xác thực GPS bán kính kèm chụp ảnh selfie AI.', tag: 'Smart HR' },
  { num: '08', title: 'Payroll Engine Tính Lương Tự Động & Xuất PDF Ký Số', desc: 'Tính lương tự động từ dữ liệu chấm công: cơ bản, OT, KPI, hoa hồng, BHXH, TNCN. Xuất phiếu lương PDF ký số.', tag: 'Payroll' },
  { num: '09', title: 'Quản Lý Dòng Tiền, Phiếu Thu & Đặt Cọc', desc: 'Theo dõi phiếu thu chi, đặt cọc, chuyển cọc và hoàn cọc. Đính kèm UNC và ghi nhận tự động vào sổ quỹ.', tag: 'Treasury' },
  { num: '10', title: 'Bắn Ngược Sự Kiện Meta CAPI Chốt Cọc Về Pixel', desc: 'Bắn ngược các sự kiện chuyển đổi giá trị cao về Meta Ads API để tối ưu chiến dịch, giảm CAC và tăng ROAS.', tag: 'MarTech CAPI' },
  { num: '11', title: 'Bảo Mật Row-Level Security (RLS) & Audit Log Bất Biến', desc: 'Kiểm soát truy cập dữ liệu đa tầng theo chi nhánh/vai trò. Mọi thao tác đều được ghi vào Audit Log bất biến.', tag: 'Security' },
  { num: '12', title: 'Hệ Thống Alert Bot Đa Kênh Tức Thì (Zalo/Telegram)', desc: 'Cảnh báo biến động đơn hàng, phê duyệt chi và thất thoát lead tức thì qua Zalo OA và Telegram Bot.', tag: 'Alert Bot' }
];

export const COCKPIT_APPS: CockpitApp[] = [
  // ----------------------------------------------------
  // PILLAR 1: DIGITAL & ENTERPRISE APPS (4 APPS)
  // ----------------------------------------------------
  {
    id: 'enterprise-erp-5',
    code: 'DOM-ERP-5.0',
    name: 'Enterprise ERP 5.0',
    pillarGroup: 'digital-apps',
    pillarLabel: 'Digital Enterprise',
    headline: 'Nền Tảng Hoạch Định Nguồn Lực & Vận Hành 12 Phân Hệ',
    shortDesc: 'Hệ thống ERP chuyên sâu dành cho SME & Enterprise: Tiếp nhận lead 1 cửa, chia 5 cổng Round-Robin van chống ôm SLA 2m, chấm công GPS AI Selfie, Payroll tự động và đồng bộ ngược Meta CAPI.',
    highlightMetric: {
      value: '12 Phân Hệ',
      label: 'Tự Động Hóa 95% Nghiệp Vụ'
    },
    keyFeatures: [
      'Tiếp nhận Lead 1 cửa & khử trùng số điện thoại 6 tháng',
      'Phân bổ dữ liệu 5 cổng Round-Robin với van chống ôm SLA 2m',
      'Chấm công định vị GPS kèm AI Selfie chống gian lận',
      'Payroll Engine tính lương, BHXH, TNCN lũy tiến, xuất PDF ký số'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Meta CAPI', 'GPS Geo-Fence', 'RLS Security'],
    statusBadge: 'Production',
    demoUrl: 'https://domation.net/erp',
    erpModules: ERP_MODULES_LIST,
    images: [
      { src: '/ERP-Product/1788856522396_2141578413905312186_2310722037673454867_637ed02e6f5c0e0560d1bcac82cf9a19.jpg', caption: 'Khởi Động IDEAS ERP (AI Mascot)', tag: 'Splash Screen' },
      { src: '/ERP-Product/1788856540980_2141578413905312186_2310722037673454867_a9d3d972886e0c266f4c5866dec8111d.jpg', caption: 'Hộp Thư Phê Duyệt & Tồn Đọng (AI Gatekeeper)', tag: 'Inbox' },
      { src: '/ERP-Product/1788856550308_2141578413905312186_2310722037673454867_9dee6011fca6751ff38ce855f9b34ee2.jpg', caption: 'Executive Dashboard & KPI Vận Hành', tag: 'Dashboard' },
      { src: '/ERP-Product/1788856559658_2141578413905312186_2310722037673454867_192068dc865f82425fa3645d12da931a.jpg', caption: 'Pipeline CRM Bán Hàng & Chăm Sóc Lead', tag: 'CRM' },
      { src: '/ERP-Product/1788856566822_2141578413905312186_2310722037673454867_c63e338a900a1ede4d6aa48393ce24da.jpg', caption: 'Databank Dữ Liệu Khách Hàng Tập Trung', tag: 'Databank' },
      { src: '/ERP-Product/1788856586610_2141578413905312186_2310722037673454867_3a3e0cd6e45b99e3e82c953988b294c7.jpg', caption: 'Chấm Công Định Vị GPS & AI Selfie Chống Gian Lận', tag: 'Attendance' },
      { src: '/ERP-Product/1788856615239_2141578413905312186_2310722037673454867_68e999d52c39291dacc6740f9084167c.jpg', caption: 'Bảng Lương Payroll Engine & Xuất Phiếu PDF Ký Số', tag: 'Payroll' },
      { src: '/ERP-Product/1788856627087_2141578413905312186_2310722037673454867_33798ebb805d3335cfcfedec3f73c1c0.jpg', caption: 'Cổng Chia Dữ Liệu Round-Robin 5 Cổng', tag: 'Data Router' },
      { src: '/ERP-Product/1788856643268_2141578413905312186_2310722037673454867_90891228871ff88a333f15fc1497741d.jpg', caption: 'Quản Lý Giỏ Hàng & Tình Trạng Quỹ Căn Realtime', tag: 'Inventory' },
      { src: '/ERP-Product/1788856653987_2141578413905312186_2310722037673454867_b778c3abf946efda6e8623075e8ea445.jpg', caption: 'Dòng Tiền, Thu Chi & Hợp Đồng Đặt Cọc', tag: 'Finance' },
      { src: '/ERP-Product/1788856662127_2141578413905312186_2310722037673454867_5cecf569bb851d994237076459b3995a.jpg', caption: 'Quản Trị Người Dùng & Phân Quyền RLS', tag: 'Security' },
      { src: '/ERP-Product/1788856668006_2141578413905312186_2310722037673454867_72b9a0047bb54f03c54fb657c81e41dc.jpg', caption: 'Audit Log & Lịch Sử Tương Tác Bất Biến', tag: 'Audit Log' },
      { src: '/ERP-Product/1788856679081_2141578413905312186_2310722037673454867_8628e61bf60b5866f7474a75753c6fda.jpg', caption: 'Cấu Hình Hệ Thống & Tham Số Vận Hành', tag: 'Settings' },
      { src: '/ERP-Product/1788856691047_2141578413905312186_2310722037673454867_2dacee1206b6e8f836cdea82018d556e.jpg', caption: 'Alert Bot Đa Kênh Zalo & Telegram', tag: 'Alert Bot' },
      { src: '/ERP-Product/1788856705546_2141578413905312186_2310722037673454867_91d3fd439a4e7f45eee7ae77dc8c20a1.jpg', caption: 'Trung Tâm Tích Hợp Meta CAPI & Webhook', tag: 'Integration' }
    ]
  },
  {
    id: 'saas-lms',
    code: 'DOM-LMS-EDU',
    name: 'SaaS LMS Edutech',
    pillarGroup: 'digital-apps',
    pillarLabel: 'Digital Enterprise',
    headline: 'Cổng Phân Phối Tri Thức & Khảo Thí Trắc Nghiệm AI',
    shortDesc: 'Nền tảng đào tạo trực tuyến với video streaming bảo mật chống tải lậu, trắc nghiệm AI chấm điểm tức thời và phát hành chứng chỉ số hóa định danh.',
    highlightMetric: {
      value: '10,000+ Học Viên',
      label: 'Độ Sẵn Sàng Vận Hành 99.8%'
    },
    keyFeatures: [
      'Video streaming bảo mật mã hóa chống tải lậu',
      'Khảo thí trắc nghiệm AI chấm điểm và xếp loại tức thời',
      'Tự động cấp chứng chỉ PDF số hóa có mã định danh',
      'Bảng điều khiển theo dõi tiến độ học tập chi tiết của học viên'
    ],
    techStack: ['React', 'Video Stream Engine', 'AI Quiz Grader', 'PDF Cert Generator'],
    statusBadge: 'Production',
    demoUrl: 'https://domation.net/lms',
    images: [
      { src: lms1, caption: 'Giao Diện Khóa Học & Danh Mục Bài Giảng' },
      { src: lms2, caption: 'Trình Phát Video Streaming Bảo Mật' },
      { src: lms3, caption: 'Khảo Thí Trắc Nghiệm & Chấm Điểm AI' },
      { src: lms4, caption: 'Hệ Thống Cấp Chứng Chỉ Số Định Danh' }
    ]
  },
  {
    id: 'zalo-mini-app',
    code: 'DOM-ZALO-MINI',
    name: 'Zalo Mini App Suite',
    pillarGroup: 'digital-apps',
    pillarLabel: 'Digital Enterprise',
    headline: 'Bộ Ứng Dụng Gamification & Loyalty Trực Tiếp Trên Zalo',
    shortDesc: 'Ứng dụng không cần cài đặt vận hành trong môi trường Zalo: Vòng quay may mắn (Lucky Wheel), Túi mù Blind Bag, tích lũy điểm thưởng thành viên và đồng bộ tức thời Zalo OA.',
    highlightMetric: {
      value: '15,000+ Lượt Chơi',
      label: 'Tăng 45% Tương Tác Khách Hàng'
    },
    keyFeatures: [
      'Mini game vòng quay may mắn (Spa Wheel & Knowledge Wheel)',
      'Gamification mở túi mù Blind Bag kích thích chuyển đổi',
      'Đồng bộ dữ liệu thành viên tức thời vào Zalo Official Account',
      'Kích hoạt thông báo tự động Zalo Notification Service (ZNS)'
    ],
    techStack: ['Zalo Mini App SDK', 'React', 'Tailwind', 'ZNS Integration'],
    statusBadge: 'Live Enterprise',
    images: [
      { src: gameBlindbag, caption: 'Gamification Mở Túi Mù Blind Bag' },
      { src: gameSpaWheel, caption: 'Vòng Quay May Mắn Lucky Wheel' },
      { src: gameKnowledge, caption: 'Mini Game Khảo Thí Trí Tuệ' }
    ]
  },
  {
    id: 'mystery-tarot',
    code: 'DOM-TAROT-AI',
    name: 'Mystery Tarot App',
    pillarGroup: 'digital-apps',
    pillarLabel: 'Digital Enterprise',
    headline: 'Trải Bài Tarot Lượng Tử & Luận Giải Tâm Lý AI',
    shortDesc: 'Ứng dụng giải trí và phân tích tâm lý trực tuyến tại mystery-tarot.net với 78 lá bài Rider-Waite thiết kế độc quyền, thuật toán rút bài lượng tử và AI luận giải đa tầng.',
    highlightMetric: {
      value: '78 Lá Độc Quyền',
      label: '1,000+ User Trong Tuần Đầu Ra Mắt'
    },
    keyFeatures: [
      'Trọn bộ 78 lá bài Tarot tự thiết kế đồ họa độc quyền',
      'Thuật toán rút bài lượng tử ngẫu nhiên hóa công bằng',
      'Mô hình AI luận giải tâm lý đa chiều theo bối cảnh câu hỏi',
      'Hệ thống tự động xuất bản 600+ bài viết SEO chuẩn'
    ],
    techStack: ['React', 'Gemini AI', 'Tailwind CSS', 'SEO Auto-Engine'],
    statusBadge: 'Live Enterprise',
    demoUrl: 'https://mystery-tarot.net',
    images: [
      { src: tr1, caption: 'Giao Diện Trải Bài 78 Lá Đồ Họa Huyền Bí' },
      { src: tr2, caption: 'Màn Hình Luận Giải Tâm Lý Đa Tầng AI' },
      { src: cmt1, caption: 'Đánh Giá & Phản Hồi Tích Cực Của Người Dùng' },
      { src: cmt2, caption: 'Tương Tác Thực Tế Trên Nền Tảng Trực Tuyến' }
    ]
  },

  // ----------------------------------------------------
  // PILLAR 2: DATA ROUTING & AUTOMATION (4 APPS)
  // ----------------------------------------------------
  {
    id: 'domation-data-router',
    code: 'DOM-ROUTER-5P',
    name: 'DOMATION DATA Router',
    pillarGroup: 'automation',
    pillarLabel: 'Automation & Data',
    headline: 'Đường Ống Dữ Liệu Tốc Độ Cao & Phân Bổ 5 Cổng',
    shortDesc: 'Pipeline tiếp nhận webhook đa nguồn (Meta Ads, TikTok, Landing Page), chuẩn hóa số điện thoại, lọc trùng lặp và đẩy đồng bộ hai chiều vào MISA CAPI & hệ thống kế toán trong < 3 giây.',
    highlightMetric: {
      value: '<3s Đồng Bộ',
      label: '0% Thất Thoát Dữ Liệu Khách Hàng'
    },
    keyFeatures: [
      'Thuật toán chia Round-Robin 5 cổng minh bạch cho các đại lý F1',
      'Van khóa Backpressure SLA 2 phút tự động thu hồi lead bỏ sót',
      'Tự động chuẩn hóa định dạng số điện thoại và lọc trùng lặp',
      'Zalo Bot & Email cảnh báo tức thì khi phát hiện biến động'
    ],
    techStack: ['Webhooks', 'Node.js', 'Google Apps Script', 'MISA CAPI', 'Zalo Bot'],
    statusBadge: 'Production',
    demoUrl: 'https://domation.net',
    images: [
      { src: crm5, caption: 'Mô Hình Điều Phối Round-Robin 5 Cổng' },
      { src: crm6, caption: 'Bảng Cấu Hình Tham Số Van Khóa Backpressure' },
      { src: crm7, caption: 'Lịch Sử Tiếp Nhận & Phân Bổ Data Realtime' }
    ]
  },
  {
    id: 'autoflow-pro',
    code: 'DOM-AUTO-FLOW',
    name: 'AutoFlow Pro Engine',
    pillarGroup: 'automation',
    pillarLabel: 'Automation & Data',
    headline: 'Động Cơ Tự Động Hóa Quy Trình & Kịch Bản Chăm Sóc Đa Kênh',
    shortDesc: 'Bộ máy điều phối 120+ kịch bản vận hành không mã qua n8n và webhook; tự động kích hoạt bot thông báo Zalo OA / Telegram War Room và nuôi dưỡng khách hàng tiềm năng.',
    highlightMetric: {
      value: '120+ Kịch Bản',
      label: 'Tiết Kiệm 40h Vận Hành Mỗi Tuần'
    },
    keyFeatures: [
      'Trình thiết kế kịch bản chăm sóc kéo thả trực quan',
      'Tự động đồng bộ tương tác trên Web, Messenger, Zalo',
      'Kích hoạt bot cảnh báo tức thì về Telegram War Room',
      'CI/CD tự động kiểm thử tính sẵn sàng của các kịch bản'
    ],
    techStack: ['n8n', 'Webhooks', 'Telegram API', 'Zalo ZNS', 'Email Automation'],
    statusBadge: 'Production',
    images: [
      { src: auto1, caption: 'Trình Kéo Thả Quy Trình Tự Động Hóa' },
      { src: auto2, caption: 'Cấu Hình Kịch Bản Nuôi Dưỡng Đa Kênh' },
      { src: auto3, caption: 'Giám Sát Luồng Chạy & Báo Lỗi Tự Động' }
    ]
  },
  {
    id: 'gemini-ai-assistant',
    code: 'DOM-AI-AGENT',
    name: 'Gemini AI Assistant',
    pillarGroup: 'automation',
    pillarLabel: 'Automation & Data',
    headline: 'Trợ Lý AI Chuyên Ngành Bất Động Sản & Chấm Điểm Lead',
    shortDesc: 'Xây dựng trên Gemini API, huấn luyện riêng trên tập dữ liệu đặc thù dự án (JSONL dataset: chính sách, giá, ngân hàng, phong thủy). Tự động chấm điểm Lead Scoring phân loại khách.',
    highlightMetric: {
      value: '88% Chuẩn Xác',
      label: 'Tư Vấn Tự Động Khách Hàng 24/7'
    },
    keyFeatures: [
      'Huấn luyện trên tập dữ liệu JSONL chi tiết của dự án',
      'Tự động chấm điểm phân loại khách hàng (Lead Scoring)',
      'Đàm thoại mượt mà trên website, chatbot và Zalo',
      'Tự động chuyển tiếp chuyên viên tư vấn khi lead đạt điểm nóng'
    ],
    techStack: ['Gemini API', 'OpenAI API', 'JSONL Dataset', 'Prompt Engineering', 'Vector Embeddings'],
    statusBadge: 'Production',
    images: [
      { src: aiTrain1, caption: 'Giao Diện Huấn Luyện AI Với Dataset Dự Án' },
      { src: aiTrain2, caption: 'Kiểm Thử Đàm Thoại & Chấm Điểm Khách Hàng' },
      { src: aiAgent2, caption: 'Mô Hình Trợ Lý AI Điều Hành Thông Minh' }
    ]
  },
  {
    id: 'crm-lead-war-room',
    code: 'DOM-CRM-WAR',
    name: 'CRM Lead War Room',
    pillarGroup: 'automation',
    pillarLabel: 'Automation & Data',
    headline: 'Trung Tâm Điều Phối Lead Đại Lý Thời Gian Thực',
    shortDesc: 'Hệ thống điều phối lead Bất động sản theo thuật toán Round-Robin cho 03 đại lý F1, tích hợp van khóa chống ôm SLA 2 phút và thẻ 360° theo dõi toàn diện hành trình khách hàng.',
    highlightMetric: {
      value: '5 Cổng Chia',
      label: 'SLA 2 Phút Chống Ôm Dữ Liệu'
    },
    keyFeatures: [
      'Bảng điều khiển Kanban trực quan theo từng trạng thái phễu',
      'Cơ chế Backpressure tự động thu hồi lead nếu không liên hệ trong 2 phút',
      'Chặn trùng lặp số điện thoại 6 tháng bảo vệ dữ liệu môi giới',
      'Thẻ khách hàng 360 độ lưu trữ toàn bộ nhật ký cuộc gọi và ghi chú'
    ],
    techStack: ['React', 'Kanban Board', 'MISA CAPI', 'Realtime WebSockets', 'PostgreSQL'],
    statusBadge: 'Production',
    images: [
      { src: crms1, caption: 'Bảng Điều Phối Kanban CRM Thời Gian Thực' },
      { src: crms2, caption: 'Hồ Sơ 360 Độ Chi Tiết Khách Hàng' },
      { src: crms3, caption: 'Quản Lý Danh Sách Đại Lý F1 & Tỷ Lệ Nhận Data' }
    ]
  },

  // ----------------------------------------------------
  // PILLAR 3: MARKETING & BUSINESS INTELLIGENCE (2 APPS)
  // ----------------------------------------------------
  {
    id: 'meta-ad-report',
    code: 'DOM-META-REPORT',
    name: 'Meta Ad Realtime Report',
    pillarGroup: 'marketing-bi',
    pillarLabel: 'Marketing & BI',
    headline: 'Báo Cáo Hiệu Suất Quảng Cáo & Khung Giờ Vàng Realtime',
    shortDesc: 'Bảng điều khiển kết nối trực tiếp Meta Marketing API qua GTM Server-Side và Cloudflare Workers. Đo lường CPA, CPL, ROAS theo giây, phân tích Khung Giờ Vàng và cảnh báo giá thầu.',
    highlightMetric: {
      value: 'ROAS Đỉnh 8.2x',
      label: 'Dữ Liệu Đo Lường Từng Giây'
    },
    keyFeatures: [
      'Kết nối trực tiếp Meta Marketing API qua Cloudflare Workers GTM',
      'Theo dõi chi phí trên mỗi lead (CPL), CPA và ROAS theo thời gian thực',
      'Phân tích biểu đồ nhiệt Khung Giờ Vàng chốt đơn cao nhất',
      'Tự động ngắt quảng cáo khi chi phí vượt ngưỡng an toàn'
    ],
    techStack: ['Meta Marketing API', 'GTM Server-Side', 'Cloudflare Workers', 'Looker Studio', 'Chart.js'],
    statusBadge: 'Production',
    images: [
      { src: domRp1, caption: 'Executive Dashboard Báo Cáo Chi Phí Realtime' },
      { src: domRp2, caption: 'Biểu Đồ Khung Giờ Vàng Tối Ưu Chốt Đơn' },
      { src: domRp3, caption: 'Phân Tích Chi Phí CPL, CPA Và ROAS Đa Kênh' }
    ]
  },
  {
    id: 'web-pricing-high-cr',
    code: 'DOM-WEB-PRICING',
    name: 'Web Design Pricing Engine',
    pillarGroup: 'marketing-bi',
    pillarLabel: 'Marketing & BI',
    headline: 'Bộ Máy Dự Toán Chi Phí Web Động & Chuẩn Quiet Luxury',
    shortDesc: 'Công cụ tính toán dự toán chi phí website động theo nhu cầu module, kết hợp hệ thống layout landing page tỷ lệ chuyển đổi cao (CR > 18.4%), tối ưu Core Web Vitals.',
    highlightMetric: {
      value: '>18.4% CR',
      label: 'Tải Trang Dưới 1.2 Giây Chuẩn Xanh'
    },
    keyFeatures: [
      'Cấu hình dự toán chi phí thiết kế website theo tính năng động',
      'Thư viện thành phần Quiet Luxury tối ưu trải nghiệm scroll',
      'Tích hợp form đăng ký webhook tức thì về CRM điều phối',
      'Core Web Vitals đạt điểm xanh tuyệt đối trên thiết bị di động'
    ],
    techStack: ['React', 'Tailwind CSS', 'Dynamic Pricing Matrix', 'Core Web Vitals', 'Framer Motion'],
    statusBadge: 'Proprietary',
    images: [
      { src: project1, caption: 'Giao Diện Dự Toán Chi Phí Website Động' },
      { src: project2, caption: 'Trang Đích Chuyển Đổi Cao Chuẩn Quiet Luxury' },
      { src: project3, caption: 'Bố Cục Responsive Tối Ưu Mọi Thiết Bị' }
    ]
  },

  // ----------------------------------------------------
  // PILLAR 4: 3D VIRTUAL SPACES (1 APP)
  // ----------------------------------------------------
  {
    id: 'threejs-3d-space',
    code: 'DOM-3D-SPACE',
    name: '3D Space & Sa Bàn Số Three.js',
    pillarGroup: 'virtual-spaces',
    pillarLabel: '3D Virtual Spaces',
    headline: 'Không Gian Ảo Tương Tác 360° & 8 Mặt Bằng Căn Hộ',
    shortDesc: 'Sa bàn ảo 3D tương tác 360 độ trên nền WebGL Three.js, hiển thị 8 sơ đồ căn hộ mẫu (2PN, 3PN, Duplex, Penthouse) kết hợp kho thư viện 85+ video nội thất full-bleed.',
    highlightMetric: {
      value: '360° WebGL Tour',
      label: '8 Mặt Bằng 3D • 85+ Video Full-Bleed'
    },
    keyFeatures: [
      'Sa bàn số tương tác xoay 360 độ trực tiếp trên trình duyệt WebGL',
      'Bộ chọn tương tác 8 mặt bằng căn hộ mẫu (A1, A2, B1, B2, B6, B3)',
      'Tích hợp trình phát video streaming 85+ clip nội thất sống động',
      'Tối ưu hóa tài nguyên 3D bảo đảm tốc độ 60fps trên mobile'
    ],
    techStack: ['Three.js', 'WebGL', 'GLTF/GLB Loader', 'Canvas Shaders', 'Video Streaming'],
    statusBadge: 'Production',
    demoUrl: 'https://domation.net',
    images: [
      { src: project6, caption: 'Sa Bàn Ảo 3D Tương Tác Xoay 360 Độ Three.js' },
      { src: keEb, caption: 'Giao Diện Chọn Sơ Đồ Căn Hộ Mẫu Trực Quan' }
    ]
  }
];

const PILLAR_CATEGORIES = [
  { id: 'digital-apps', label: 'Digital Enterprise', count: '04 Apps', icon: Layers },
  { id: 'automation', label: 'Automation & Data', count: '04 Apps', icon: Cpu },
  { id: 'marketing-bi', label: 'Marketing & BI', count: '02 Apps', icon: BarChart3 },
  { id: 'virtual-spaces', label: '3D Virtual Spaces', count: '01 App', icon: Box }
] as const;

export const CockpitEcosystem: React.FC = () => {
  const [activePillar, setActivePillar] = useState<CockpitPillarGroup>('digital-apps');
  const [selectedAppId, setSelectedAppId] = useState<string>('enterprise-erp-5');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(2); // Default to Executive Dashboard for ERP
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [showErpModulesModal, setShowErpModulesModal] = useState<boolean>(false);

  // Filter apps by active pillar group
  const filteredApps = COCKPIT_APPS.filter(app => app.pillarGroup === activePillar);
  const activeApp = COCKPIT_APPS.find(app => app.id === selectedAppId) || filteredApps[0] || COCKPIT_APPS[0];

  const handleSelectPillar = (pillarId: CockpitPillarGroup) => {
    setActivePillar(pillarId);
    const firstAppInPillar = COCKPIT_APPS.find(app => app.pillarGroup === pillarId);
    if (firstAppInPillar) {
      setSelectedAppId(firstAppInPillar.id);
      setActiveImageIndex(0);
    }
  };

  const handleSelectApp = (appId: string) => {
    setSelectedAppId(appId);
    setActiveImageIndex(0);
  };

  const currentImage = activeApp.images[activeImageIndex] || activeApp.images[0];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % activeApp.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + activeApp.images.length) % activeApp.images.length);
  };

  return (
    <section id="cockpit" className="py-24 md:py-32 relative bg-[#030303] text-white overflow-hidden">
      {/* Anchor alias for navbar compatibility */}
      <div id="outsource" className="absolute -top-20 pointer-events-none" />
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-50" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Cockpit Command Center Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-gold-400 uppercase">
              DOMATION SOFTWARE COCKPIT // 11 PROPRIETARY APPS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight mb-4">
            Buồng Lái Hệ Sinh Thái Công Nghệ &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
              Nền Tảng Tự Phát Triển
            </span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            11 ứng dụng phần mềm độc quyền do Huỳnh Trọng Phúc tự tay kiến trúc và lập trình: Từ ERP 12 phân hệ, đường ống phân phối dữ liệu 5 cổng, trợ lý AI đặc thù đến sa bàn ảo 3D WebGL.
          </p>

          {/* 4 Pillar Category Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-8 max-w-4xl mx-auto">
            {PILLAR_CATEGORIES.map((cat) => {
              const isActive = activePillar === cat.id;
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectPillar(cat.id as CockpitPillarGroup)}
                  className={`relative p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0E0E0E] border-gold-500/50 shadow-[0_0_25px_rgba(234,179,8,0.15)] ring-1 ring-gold-500/30'
                      : 'bg-[#080808]/80 border-white/[0.07] hover:border-white/20 hover:bg-[#0C0C0C]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCockpitPillar"
                      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 rounded-t-2xl"
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-gray-400'}`} />
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-gold-500/20 text-gold-300' : 'bg-white/5 text-gray-400'
                    }`}>
                      {cat.count}
                    </span>
                  </div>

                  <span className={`text-xs sm:text-sm font-bold tracking-tight ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Horizontal App Sub-Selector Rail within Active Pillar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 custom-scrollbar">
          {filteredApps.map((app) => {
            const isSelected = app.id === activeApp.id;
            return (
              <button
                key={app.id}
                onClick={() => handleSelectApp(app.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-gold-500 text-black border-gold-400 shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                    : 'bg-[#0A0A0A] text-gray-400 border-white/[0.08] hover:border-white/20 hover:text-white'
                }`}
              >
                <span className={`font-mono text-[10px] ${isSelected ? 'text-black/80 font-black' : 'text-gold-400'}`}>
                  {app.code}
                </span>
                <span>{app.name}</span>
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-white/5 text-gray-400'
                }`}>
                  {app.statusBadge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Master-Detail Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Pane: Technical HUD & Telemetry (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A0A0A]/95 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-between">
            {/* Top Amber Hairline */}
            <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

            <div>
              {/* System Code & Status */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-gold-400 tracking-wider">
                  SYSTEM CODE: {activeApp.code}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {activeApp.statusBadge}
                </span>
              </div>

              {/* App Title & Headline */}
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
                {activeApp.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gold-400/90 mb-4 font-mono">
                {activeApp.headline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light mb-6">
                {activeApp.shortDesc}
              </p>

              {/* Primary Gold Metric Gauge */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-gold-500/25 mb-6">
                <span className="text-2xl sm:text-3xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 tracking-tight block">
                  {activeApp.highlightMetric.value}
                </span>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block mt-1">
                  {activeApp.highlightMetric.label}
                </span>
              </div>

              {/* Core Features Checklist */}
              <div className="mb-6 space-y-2.5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">
                  Năng Lực Trọng Yếu Của Nền Tảng
                </p>
                {activeApp.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Special ERP 12-Module Explorer Button */}
              {activeApp.erpModules && (
                <div className="mb-6 p-4 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gold-300 flex items-center gap-1.5 font-mono">
                      <Grid className="w-4 h-4 text-gold-400" />
                      12 PHÂN HỆ ENTERPRISE ERP 5.0
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">Standardized</span>
                  </div>
                  <p className="text-xs text-gray-400 font-light mb-3">
                    Bao gồm tiếp nhận lead 1 cửa, chia 5 cổng SLA 2m, GPS AI selfie, payroll lũy tiến và RLS.
                  </p>
                  <button
                    onClick={() => setShowErpModulesModal(true)}
                    className="w-full py-2 px-3 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/40 text-xs font-bold text-gold-300 flex items-center justify-center gap-2 transition-colors font-mono"
                  >
                    <span>Khám Phá Chi Tiết 12 Phân Hệ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Tech Stack Chips */}
              <div className="mb-6">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono mb-2">
                  Kiến Trúc & Công Nghệ
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {activeApp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            {activeApp.demoUrl && (
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={activeApp.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono text-gold-400 hover:text-gold-300 transition-colors"
                >
                  <span>Truy Cập Nền Tảng Trực Tuyến</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono text-gray-400">Ver. 5.2 Live</span>
              </div>
            )}
          </div>

          {/* Right Pane: High-Fidelity Visual Monitor (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Browser Chrome Simulation Mockup */}
            <div className="rounded-3xl bg-[#080808] border border-white/[0.08] overflow-hidden shadow-2xl relative">
              {/* Window Controls Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D0D0D] border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-3 text-[11px] font-mono text-gray-400 hidden sm:inline-block">
                    https://domation.net/cockpit/{activeApp.id}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-gray-400">
                    {activeImageIndex + 1} / {activeApp.images.length}
                  </span>
                  <button
                    onClick={() => setZoomImage(currentImage.src)}
                    aria-label="Phóng to ảnh"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Screenshot Stage */}
              <div className="relative aspect-[16/10] bg-black/90 flex items-center justify-center overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage.src}
                    src={currentImage.src}
                    alt={currentImage.caption}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={() => setZoomImage(currentImage.src)}
                  />
                </AnimatePresence>

                {/* Left/Right Quick Controls */}
                <button
                  onClick={handlePrevImage}
                  aria-label="Ảnh trước"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-500 hover:text-black"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  aria-label="Ảnh kế tiếp"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gold-500 hover:text-black"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs">
                  <span className="font-semibold text-white truncate pr-2">
                    {currentImage.caption}
                  </span>
                  {currentImage.tag && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 shrink-0">
                      {currentImage.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Thumbnail Strip + SlideDot Carousel Controller */}
              <div className="p-3 sm:p-4 bg-[#0A0A0A] border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* Thumbnails */}
                <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto custom-scrollbar">
                  {activeApp.images.map((img, iIdx) => {
                    const isImgActive = iIdx === activeImageIndex;
                    return (
                      <button
                        key={iIdx}
                        onClick={() => setActiveImageIndex(iIdx)}
                        className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-lg overflow-hidden border shrink-0 transition-all ${
                          isImgActive
                            ? 'border-gold-400 ring-2 ring-gold-500/40 scale-105'
                            : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </button>
                    );
                  })}
                </div>

                {/* SlideDot Indicator */}
                <SlideDot
                  total={activeApp.images.length}
                  current={activeImageIndex}
                  onSelect={setActiveImageIndex}
                  className="shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 12-Module Enterprise ERP Modal */}
      {showErpModulesModal && (
        <Modal
          isOpen={showErpModulesModal}
          onClose={() => setShowErpModulesModal(false)}
          title="KIẾN TRÚC 12 PHÂN HỆ TIÊU CHUẨN // ENTERPRISE ERP 5.0"
          className="max-w-4xl bg-[#080808] border-gold-500/30"
        >
          <div className="p-6 md:p-8 space-y-6 text-white max-h-[75vh] overflow-y-auto custom-scrollbar">
            <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-500/25">
              <h4 className="text-base font-bold text-gold-300 font-mono mb-1">
                Chuẩn Hóa Quy Trình Quản Trị & Vận Hành Doanh Nghiệp
              </h4>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                Hệ thống 12 phân hệ tích hợp chặt chẽ từ dòng dữ liệu tiếp thị (Meta CAPI, Round-Robin 5 cổng) tới quản trị nhân sự (GPS AI Selfie) và tài chính (Payroll Engine lũy tiến).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {ERP_MODULES_LIST.map((mod) => (
                <div
                  key={mod.num}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-gold-500/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                      PHÂN HỆ {mod.num}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {mod.tag}
                    </span>
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1.5">
                    {mod.title}
                  </h5>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}

      {/* Image Zoom Modal */}
      {zoomImage && (
        <Modal
          isOpen={!!zoomImage}
          onClose={() => setZoomImage(null)}
          title="XEM ẢNH HỆ THỐNG ĐỘ NÉT CAO"
          className="max-w-5xl bg-[#050505] border-white/20"
        >
          <div className="p-2 sm:p-4 bg-black flex items-center justify-center">
            <img src={zoomImage} alt="System Zoom" className="w-full max-h-[80vh] object-contain rounded-xl" loading="lazy" decoding="async" />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default CockpitEcosystem;
