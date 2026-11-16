import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  ExternalLink,
  GraduationCap,
  Layers,
  Mic,
  MonitorSmartphone,
  Play,
  Sparkles,
  Star,
  Store,
  Terminal,
  Zap,
} from 'lucide-react';
import {
  ERP_GALLERY,
  ERP_16_EXTRA,
  DOMATION_V2_CAPI_SHOWCASE,
  DOMATION_AUTO_FEATURES,
  DOMATION_META_REPORT_IMAGES,
} from '../../constants';
import { Tilt3DCard, DepthLayer } from '../UI/Interactive3D';
import StudioDrawerModal from '../UI/StudioDrawerModal';

// Local bundled images from MY_PORTFOLIO/imgs
// @ts-ignore
import crms1 from '../../imgs/CRMS (1).webp';
// @ts-ignore
import crms2 from '../../imgs/CRMS (2).webp';
// @ts-ignore
import crms3 from '../../imgs/CRMS (3).webp';
// @ts-ignore
import crms4 from '../../imgs/CRMS (4).webp';
// @ts-ignore
import crm1 from '../../imgs/CRM (1).webp';
// @ts-ignore
import crm2 from '../../imgs/CRM (2).webp';
// @ts-ignore
import crm3 from '../../imgs/CRM (3).webp';
// @ts-ignore
import crm4 from '../../imgs/CRM (4).webp';
// @ts-ignore
import crm5 from '../../imgs/CRM (5).webp';
// @ts-ignore
import crm6 from '../../imgs/CRM (6).webp';
// @ts-ignore
import crm7 from '../../imgs/CRM (7).webp';
// @ts-ignore
import crm8 from '../../imgs/CRM (8).webp';
// @ts-ignore
import crm9 from '../../imgs/CRM (9).webp';
// @ts-ignore
import crm10 from '../../imgs/CRM (10).webp';
// @ts-ignore
import lms1 from '../../imgs/lms (1).webp';
// @ts-ignore
import lms2 from '../../imgs/lms (2).webp';
// @ts-ignore
import lms3 from '../../imgs/lms (3).webp';
// @ts-ignore
import lms4 from '../../imgs/lms (4).webp';
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
// @ts-ignore
import aiAgent2 from '../../imgs/ai_agent2.webp';
// @ts-ignore
import aiChatbot from '../../imgs/ai_chatbot.webp';
// @ts-ignore
import aiKienthuc from '../../imgs/ai_kienthuc.webp';
// @ts-ignore
import aiTuTrain1 from '../../imgs/ai_tu_train (1).webp';
// @ts-ignore
import aiTuTrain2 from '../../imgs/ai_tu_train (2).webp';
// @ts-ignore
import aiTuTrain3 from '../../imgs/ai_tu_train (3).webp';
// @ts-ignore
import gameBlindbag from '../../imgs/game_blindbag.webp';
// @ts-ignore
import gameWheelKnowledge from '../../imgs/game_wheel_knowledge.webp';
// @ts-ignore
import gameSpaWheel from '../../imgs/game_spa_wheel.webp';
// @ts-ignore
import project4 from '../../imgs/project_4.webp';
// @ts-ignore
import project5 from '../../imgs/project_5.webp';

type AppCategoryFilter = 'all' | 'enterprise' | 'automation' | 'consumer' | 'media';

interface AppScreenSlide {
  src: string;
  title: string;
}

interface PortfolioAppItem {
  id: string;
  category: Exclude<AppCategoryFilter, 'all'>;
  badge: string;
  repoTag: string;
  name: string;
  hook: string;
  kpi: string;
  cover: string;
  liveUrl?: string;
  liveLabel?: string;
  youtubeId?: string;
  zaloIframeUrl?: string;
  tarotReviews?: string[];
  tech: string[];
  bullets: string[];
  screens: AppScreenSlide[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const FILTER_TABS: { id: AppCategoryFilter; label: string }[] = [
  { id: 'all', label: 'Tất Cả (12 Hệ Thống)' },
  { id: 'enterprise', label: 'ERP, CRM & POS' },
  { id: 'automation', label: 'Data Flow & AI Agent' },
  { id: 'consumer', label: 'Zalo App, LMS & Tarot' },
  { id: 'media', label: 'AI Voice, Video & Ads' },
];

export interface AppUniverseSectionProps {
  onOpenDomationModal: () => void;
}

const AppUniverseSection: React.FC<AppUniverseSectionProps> = ({ onOpenDomationModal }) => {
  const [filter, setFilter] = useState<AppCategoryFilter>('all');
  const [selectedApp, setSelectedApp] = useState<PortfolioAppItem | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const allApps: PortfolioAppItem[] = useMemo(
    () => [
      {
        id: 'erp-5',
        category: 'enterprise',
        badge: 'ENTERPRISE ERP 5.0',
        repoTag: 'IDEAS_ERP • MYERP',
        name: 'DOMATION ERP 5.0 Suite',
        hook: '12 phân hệ: Lead 1 cửa, GPS AI Selfie & Tính lương PDF tự động.',
        kpi: '16 Màn Hình Thực Tế',
        cover:
          '/ERP-Product/1788856550308_2141578413905312186_2310722037673454867_9dee6011fca6751ff38ce855f9b34ee2.jpg',
        liveUrl: 'https://domation.net/erp',
        liveLabel: 'Trải Nghiệm ERP',
        tech: ['React 19', 'TypeScript', 'Supabase RLS', 'GPS AI Selfie', 'Payroll PDF', 'Meta CAPI'],
        bullets: [
          'Tiếp nhận Lead một cửa chống trùng & chia 5 cổng kèm van chống ôm SLA 2 phút.',
          'Chấm công định vị vệ tinh GPS kết hợp chụp ảnh AI Selfie chống gian lận ca.',
          'Payroll Engine tự động tính công, OT, KPI, BHXH, thuế TNCN & xuất PDF ký số.',
          'Quản trị dòng tiền, đặt cọc, giỏ hàng thời gian thực & phân quyền bảo mật RLS.',
        ],
        screens: [...ERP_GALLERY, ERP_16_EXTRA].map((e) => ({ src: e.src, title: e.title })),
        icon: Building2,
      },
      {
        id: 'data-router-v2',
        category: 'automation',
        badge: 'DATA FLOW & CAPI V2',
        repoTag: 'DATA • DATA-ECOLIFE',
        name: 'Auto Chia Data ZaloBot & CAPI',
        hook: 'Chia số 3 Đại lý F1 & Sale <5s, bù ticket & bắn ngược Meta CAPI.',
        kpi: '< 5s • HTTP 200',
        cover: '/assets/domation/data_v2_overview.webp',
        liveUrl: 'https://domation.net/data',
        liveLabel: 'Mở Data Router',
        tech: ['NodeJS', 'Webhook', 'ZaloBot API', 'Meta Conversion API', 'Round-Robin'],
        bullets: [
          'Lọc trùng số điện thoại 6 tháng, chia vòng công bằng cho Đại lý F1 & Sale cá nhân.',
          'Nhận diện lịch nghỉ phép tự động & duyệt hoàn bù Ticket lỗi minh bạch 0% độ lệch.',
          'Tự động hash dữ liệu bắn Qualified / Schedule / DisqualifiedLead về Facebook Dataset.',
        ],
        screens: [
          ...DOMATION_V2_CAPI_SHOWCASE.map((s) => ({ src: s.image, title: s.title })),
          { src: '/assets/apps/chia_data_6.webp', title: 'Cấu Hình Đội Ngũ Tư Vấn Viên & ZaloBot' },
          { src: '/assets/apps/chia_data_8.webp', title: 'Luồng Phân Bổ Xoay Vòng Round-Robin' },
          { src: '/assets/apps/chia_data_15.webp', title: 'Quản Lý Duyệt Lỗi & Đền Bù Data Tự Động' },
          { src: '/assets/apps/chia_data_19.webp', title: 'Nhật Ký Webhook & Báo Cáo Hiệu Suất Ngày' },
          { src: '/assets/apps/admin_log.webp', title: 'Audit Log Theo Dõi Toàn Trình Quản Trị' },
        ],
        icon: Zap,
      },
      {
        id: 'domation-crm',
        category: 'enterprise',
        badge: 'ENTERPRISE CRM 4.0',
        repoTag: 'CRM • DOM_MISA_CRM',
        name: 'DOMATION CRM & MISA Sync',
        hook: 'Quản trị phễu khách hàng 360°, tồn kho, hóa đơn & đồng bộ MISA.',
        kpi: '14+ Màn Hình CRM',
        cover: crms1,
        liveUrl: 'https://domation.net/crm',
        liveLabel: 'Dùng Thử CRM',
        tech: ['React', 'NodeJS', 'MISA API', 'Zalo ZNS', 'Pipeline 360'],
        bullets: [
          'Lưu trữ lịch sử tương tác 360°, phân hạng VIP/Mới và theo dõi tiến độ Deals.',
          'Kiểm soát tồn kho theo lô, tự động xuất hóa đơn tài chính và tính biên lợi nhuận gộp.',
          'Middleware kết nối đa kênh (Facebook, Zalo, Website) đồng bộ thẳng về MISA CRM.',
        ],
        screens: [
          { src: crms1, title: 'Tổng Quan Doanh Thu & Phễu Chuyển Đổi CRM' },
          { src: crms2, title: 'Danh Sách Khách Hàng & Phân Loại Nhiệt Độ' },
          { src: crms3, title: 'Quản Lý Kho Hàng, Hóa Đơn & Biên Lợi Nhuận' },
          { src: crms4, title: 'Hệ Thống Ticket CSKH & Lịch Hẹn Tư Vấn' },
          { src: '/assets/apps/misa_data.webp', title: 'Cầu Nối Đồng Bộ Dữ Liệu Tự Động Sang MISA' },
          { src: crm5, title: 'Chi Tiết Hành Trình Chăm Sóc Lead' },
          { src: crm6, title: 'Báo Cáo Doanh Số Từng Đội Nhóm Kinh Doanh' },
          { src: crm7, title: 'Quản Trị Danh Mục Sản Phẩm & Bảng Giá' },
          { src: crm8, title: 'Cấu Hình Luồng Phê Duyệt Nội Bộ' },
        ],
        icon: Database,
      },
      {
        id: 'minth-pos',
        category: 'enterprise',
        badge: 'SME RETAIL POS',
        repoTag: 'MINTH_HAMIEN',
        name: 'MINTH Bento CRM & POS',
        hook: 'Bán hàng siêu nhẹ 1 màn hình: LN ròng, tồn kho & giờ vàng mua sắm.',
        kpi: '1-Screen Retail ERP',
        cover: crm1,
        tech: ['React', 'TailwindCSS', 'Bento BI', 'Inventory Alert'],
        bullets: [
          'Bento Dashboard tính sẵn doanh thu, lợi nhuận gộp, AOV và lợi nhuận ròng tức thời.',
          'Tự động cảnh báo mặt hàng sắp hết / cận date để tối ưu vòng quay vốn lưu động.',
          'Phân tích khung Giờ Vàng chốt đơn cao nhất để tung chiến dịch Flash Sale.',
        ],
        screens: [
          { src: crm1, title: 'Bento Dashboard Tổng Quan Doanh Thu & Lợi Nhuận Ròng' },
          { src: crm2, title: 'Màn Hình POS Bán Hàng & Tạo Đơn Nhanh' },
          { src: crm3, title: 'Quản Lý Khách VIP & Lịch Sử Mua Lặp Lại' },
          { src: crm4, title: 'Cảnh Báo Tồn Kho & Phân Tích Giờ Vàng' },
        ],
        icon: Store,
      },
      {
        id: 'autoflow-pro',
        category: 'automation',
        badge: 'OMNICHANNEL AUTOMATION',
        repoTag: 'DOMATION_FULLSTACK',
        name: 'AutoFlow Pro 9-in-1',
        hook: 'Kịch bản kéo thả IF/ELSE, Email Builder, Web Heatmap, QR & Voucher.',
        kpi: '9 Phân Hệ MarTech',
        cover: '/assets/domation/auto_flow.webp',
        liveUrl: 'https://automation.ideas.edu.vn/',
        liveLabel: 'Mở AutoFlow Pro',
        tech: ['Visual Flow', 'Email Drag-Drop', 'Web Heatmap', 'Dynamic QR', 'Voucher Hub'],
        bullets: [
          'Visual Flow Builder rẽ nhánh thông minh dựa trên hành vi mở mail, click link, xem giá.',
          'Gắn Pixel theo dõi hành trình khách hàng trên web kèm bản đồ nhiệt Heatmap.',
          'Phát hành Voucher cá nhân hóa & đo lường hiệu quả ấn phẩm Offline qua QR động.',
        ],
        screens: [
          ...DOMATION_AUTO_FEATURES.map((a) => ({ src: a.src, title: `${a.tab} — ${a.title}` })),
          { src: '/assets/apps/flow_renhanh.webp', title: 'Sơ Đồ Rẽ Nhánh Kịch Bản Chăm Sóc Tự Động' },
          { src: '/assets/apps/heatmap_track.webp', title: 'Bản Đồ Nhiệt Heatmap Hành Vi Người Dùng' },
        ],
        icon: Layers,
      },
      {
        id: 'ai-workspace',
        category: 'automation',
        badge: 'RAG AI & WORKSPACE',
        repoTag: 'AI SPACE • ECOLIFE AI',
        name: 'AI Custom Chatbot & AI Phòng Ban',
        hook: 'Huấn luyện AI từ PDF nội bộ, cấm bịa chuyện, phân quyền từng bộ phận.',
        kpi: '24/7 • Closed RAG',
        cover: aiTuTrain1,
        liveUrl: 'https://ai.ecolifesignature.vn/',
        liveLabel: 'Chat Thử AI Portal',
        tech: ['Gemini / OpenAI RAG', 'Vector Knowledge', 'Multi-Dept Role', 'Image & Code Mode'],
        bullets: [
          'Huấn luyện thần tốc qua PDF bảng giá, chính sách bán hàng & URL website chính thức.',
          'Kiến trúc Knowledge Base đóng — triệt tiêu hoàn toàn hiện tượng AI tự bịa thông tin.',
          'Không gian AI độc lập cho Sale, Marketing, CSKH tích hợp Expert, Image & Code Mode.',
        ],
        screens: [
          { src: aiTuTrain1, title: 'Không Gian AI Workspace Độc Lập Đa Phòng Ban' },
          { src: aiAgent2, title: 'Giao Diện Trợ Lý AI Tư Vấn Tùy Biến Thương Hiệu' },
          { src: aiTuTrain2, title: 'Huấn Luyện Tri Thức Phân Quyền Theo Bộ Phận' },
          { src: aiTuTrain3, title: 'Chế Độ Chuyên Gia (Expert Mentoring Mode)' },
          { src: aiChatbot, title: 'Tích Hợp Đa Năng Image & Creative Mode' },
          { src: aiKienthuc, title: 'Kiểm Soát Kho Tài Liệu RAG Chống Bịa Chuyện' },
        ],
        icon: Bot,
      },
      {
        id: 'meta-report',
        category: 'media',
        badge: 'ADS BI & CREATIVE',
        repoTag: 'DOMATION_META',
        name: 'Meta Ads Realtime Report',
        hook: 'Đối chiếu Spend vs Doanh thu CRM, đo Hook/Hold Rate & độ bão hòa tệp.',
        kpi: 'Realtime Graph API',
        cover: '/assets/domation/meta_rp_1.webp',
        liveUrl: 'https://meta.domation.net',
        liveLabel: 'Mở Ads Dashboard',
        youtubeId: 'fvIHSrpsAlI',
        tech: ['Meta Graph API', 'Creative Hook/Hold', 'ROAS Tracking', 'CAPI Sync'],
        bullets: [
          'Quét trực tiếp dữ liệu từ Facebook Ads Manager không độ trễ, tiết kiệm 20h báo cáo/tuần.',
          'Phân tích sâu Video Hook Rate, Hold Rate và cảnh báo mẫu quảng cáo đang bão hòa.',
          'Đối chiếu chi phí quảng cáo thực chi với doanh thu cọc/chốt trên hệ thống CRM.',
        ],
        screens: DOMATION_META_REPORT_IMAGES,
        icon: BarChart3,
      },
      {
        id: 'lms-saas',
        category: 'consumer',
        badge: 'EDU-TECH SAAS',
        repoTag: 'IDEAS_UI • LMS',
        name: 'LMS E-Learning Platform',
        hook: 'Streaming khóa học video, thi trắc nghiệm tự động & xuất chứng chỉ PDF.',
        kpi: 'Full Edu-Tech Core',
        cover: lms1,
        tech: ['React', 'Video Streaming', 'Auto Quiz Engine', 'PDF Certificate'],
        bullets: [
          'Hệ thống bài giảng Video phân cấp học phần mượt mà trên cả Desktop & Mobile.',
          'Ngân hàng đề trắc nghiệm tính giờ, chấm điểm tức thì sau khi nộp bài.',
          'Tự động render và cấp Chứng chỉ điện tử PDF ngay khi học viên hoàn thành khóa học.',
        ],
        screens: [
          { src: lms1, title: 'Trang Chủ Khóa Học & Lộ Trình Học Viên' },
          { src: lms2, title: 'Trình Phát Video Bài Giảng & Ghi Chú Học Phần' },
          { src: lms3, title: 'Hệ Thống Làm Bài Thi Trắc Nghiệm Tính Giờ' },
          { src: lms4, title: 'Dashboard Theo Dõi Tiến Độ & Cấp Chứng Chỉ PDF' },
        ],
        icon: GraduationCap,
      },
      {
        id: 'zalo-mini-app',
        category: 'consumer',
        badge: 'ZALO ECOSYSTEM SDK',
        repoTag: 'ZALO APP • AMPER',
        name: 'Zalo Mini App & Gamification',
        hook: 'Tích điểm QR 3s, hạng thành viên VIP & Minigame Xé Túi Mù / Vòng Quay.',
        kpi: 'Live Phone Demo',
        cover: gameBlindbag,
        liveUrl: 'https://turniodev.github.io/zala_ideas',
        liveLabel: 'Mở Simulator Zalo',
        zaloIframeUrl: 'https://turniodev.github.io/zala_ideas',
        tech: ['Zalo Mini App SDK', 'React & TypeScript', 'QR Loyalty 3s', 'ZNS Voucher'],
        bullets: [
          'Code tay 100% bằng React & TypeScript — tốc độ tải dưới 1 giây ngay trong siêu ứng dụng Zalo.',
          'Định danh QR Code tích điểm tại quầy trong 3 giây, tự động thăng hạng Silver / Gold / Diamond.',
          'Bộ Minigame chiến dịch viral: Khui Túi Mù Tết, Vòng Quay Tri Thức, Vòng Quay Spa & Waterbomb.',
        ],
        screens: [
          { src: gameBlindbag, title: 'Zalo Minigame: Unboxing Blind Bag — Chiến Dịch Tết' },
          { src: gameWheelKnowledge, title: 'Gamification: Vòng Quay Kiến Thức Trúng Quà' },
          { src: gameSpaWheel, title: 'Retention Mini-Web: Trangpap Spa Lucky Wheel' },
        ],
        icon: MonitorSmartphone,
      },
      {
        id: 'mystery-tarot',
        category: 'consumer',
        badge: 'CONSUMER AI APP',
        repoTag: 'TAROT • GEMINI SEO',
        name: 'Mystery Tarot AI Platform',
        hook: 'Trải nghiệm Native App, bộ bài độc quyền & 600+ bài SEO Gemini AI.',
        kpi: '5.0★ (274 Đánh Giá)',
        cover: tr1,
        liveUrl: 'https://www.mystery-tarot.net/',
        liveLabel: 'Trải Nghiệm Tarot',
        tarotReviews: [cmt1, cmt2, cmt3, cmt4],
        tech: ['NextJS / React', 'Gemini AI SEO', 'Custom Artwork', '600+ Articles'],
        bullets: [
          'Đạt cột mốc 1.000+ người dùng thật ngay trong tuần đầu ra mắt với điểm đánh giá 5.0/5.0 (274 lượt).',
          'Hệ thống tự động nghiên cứu từ khóa và xuất bản 600+ bài viết chuẩn SEO bằng Gemini AI.',
          'Thiết kế trải nghiệm lật bài 3D mượt như ứng dụng Native kèm bộ bài vẽ riêng.',
        ],
        screens: [
          { src: tr1, title: 'Giao Diện Trải Bài & Luận Giải AI Chuyên Sâu' },
          { src: tr2, title: 'Kho Tàng Tri Thức Tarot & 600+ Bài SEO Tự Động' },
        ],
        icon: Sparkles,
      },
      {
        id: 'voice-video-studio',
        category: 'media',
        badge: 'GENERATIVE MEDIA',
        repoTag: 'VoiceStudio • DIGI_VIDEO',
        name: 'AI VoiceStudio & DigiVideo',
        hook: 'Nhân bản giọng đọc AI đa ngôn ngữ & tự động sản xuất video kịch bản.',
        kpi: 'Voice Clone & Video',
        cover: '/assets/apps/voicestudio_clone.webp',
        tech: ['Python', 'Voice Cloning', 'TTS Design', 'FFmpeg Pipeline', 'video_ui'],
        bullets: [
          'VoiceStudio nhân bản giọng đọc tự nhiên và thiết kế tone giọng thuyết minh chuẩn phòng thu.',
          'DIGI_VIDEO & video_ui tự động ghép kịch bản, phụ đề và tài nguyên hình ảnh thành video Ads.',
          'Rút ngắn 80% thời gian sản xuất học liệu E-Learning và video quảng cáo đa biến thể.',
        ],
        screens: [
          { src: '/assets/apps/voicestudio_clone.webp', title: 'VoiceStudio — Nhân Bản Giọng Đọc AI (Voice Cloning)' },
          { src: '/assets/apps/voicestudio_design.webp', title: 'VoiceStudio — Thiết Kế Tone Giọng & Cảm Xúc' },
          { src: '/assets/apps/voicestudio_engine.webp', title: 'Hệ Thống Điều Phối Engine Âm Thanh Tự Động' },
          { src: '/assets/apps/digi_video_ai.webp', title: 'DIGI_VIDEO — Sản Xuất Nội Dung AI Học Thuật' },
          { src: '/assets/apps/digi_video_emba.webp', title: 'Pipeline Chuyển Hóa Kịch Bản Video Chuyên Nghiệp' },
        ],
        icon: Mic,
      },
      {
        id: 'fb-find-tools',
        category: 'media',
        badge: 'GROWTH & SERVER CAPI',
        repoTag: 'FB FIND • dom_tools',
        name: 'FB Find & Server GTM Tools',
        hook: 'Bộ công cụ quét UID/Insight, Cloudflare Server CAPI & Apps Script.',
        kpi: '+30% Độ Chính Xác Pixel',
        cover: project5,
        tech: ['GTM Server-side', 'Cloudflare Workers', 'Google Apps Script', 'BigQuery'],
        bullets: [
          'Triển khai Server-side Tracking trên Cloudflare khắc phục triệt để iOS 14+ chặn cookie.',
          'Bộ công cụ FB Find & dom_tools hỗ trợ nghiên cứu tệp đối tượng và tự động hóa tác vụ Ads.',
          'Pipeline Python + BigQuery tổng hợp báo cáo đa nền tảng Facebook, Google, TikTok.',
        ],
        screens: [
          { src: project5, title: 'Kiến Trúc Server-Side Conversion API Vượt Chặn iOS 14+' },
          { src: project4, title: 'Hệ Thống Tổng Hợp Dữ Liệu Đa Nguồn Quảng Cáo' },
        ],
        icon: Terminal,
      },
    ],
    []
  );

  const visibleApps = useMemo(() => {
    if (filter === 'all') return allApps;
    return allApps.filter((a) => a.category === filter);
  }, [filter, allApps]);

  const openApp = (app: PortfolioAppItem) => {
    setSelectedApp(app);
    setSlideIdx(0);
  };

  return (
    <section id="apps" className="py-16 sm:py-24 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER + FILTER PILLS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2.5 max-w-2xl">
            <span className="ql-eyebrow">
              <Cpu size={12} className="text-[#B45309] shrink-0" />
              <span>CHƯƠNG 03 • TOÀN BỘ HỆ SINH THÁI APP &amp; PHẦN MỀM TỰ CODE</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#0F172A]">
              12+ Nền Tảng Thực Chiến Từ{' '}
              <span className="ql-grad-gold">ERP, AI Đến Zalo Mini App</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {FILTER_TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setFilter(t.id)}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap cursor-pointer ${
                  filter === t.id ? 'ql-pill-tab-active rounded-full' : 'ql-pill-tab'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12-APP 3D BENTO GRID (CLEAN, VISUAL-FIRST, ZERO TEXT OVERFLOW) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visibleApps.map((app) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={app.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.24 }}
                >
                  <Tilt3DCard
                    maxTilt={6}
                    onClick={() => openApp(app)}
                    className="ql-card rounded-[24px] overflow-hidden flex flex-col justify-between cursor-pointer group bg-white"
                  >
                    <div>
                      {/* Visual Preview Header */}
                      <div className="relative aspect-[16/10] bg-white/65 backdrop-blur-sm border-b border-[#E2E8F0] overflow-hidden">
                        <img
                          src={app.cover}
                          alt={app.name}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500" decoding="async"
                        />

                        {/* Top Floating Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-[9.5px] font-extrabold uppercase tracking-wider text-[#B45309] shadow-sm whitespace-nowrap">
                            {app.badge}
                          </span>
                          <span className="px-2.5 py-1 rounded-full bg-[#0F172A]/85 backdrop-blur-md text-[9.5px] font-bold text-white whitespace-nowrap">
                            {app.kpi}
                          </span>
                        </div>
                      </div>

                      {/* Minimalist Card Copy */}
                      <div className="p-5 space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold text-[#B45309] uppercase tracking-wider truncate">
                            {app.repoTag}
                          </span>
                          <Icon size={15} className="text-[#B45309] shrink-0" />
                        </div>

                        <h3 className="font-display text-lg sm:text-[19px] font-bold text-[#0F172A] group-hover:text-[#B45309] transition-colors line-clamp-1">
                          {app.name}
                        </h3>

                        <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                          {app.hook}
                        </p>
                      </div>
                    </div>

                    {/* Footer Action Strip */}
                    <div className="px-5 pb-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-[#92400E] group-hover:underline whitespace-nowrap">
                        Xem {app.screens.length} giao diện &amp; chi tiết →
                      </span>

                      {app.liveUrl && (
                        <a
                          href={app.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFFBEB] hover:bg-[#F3E5C3] border border-[#E2E8F0] text-[10px] font-extrabold text-[#B45309] whitespace-nowrap transition-colors"
                        >
                          <span>Live</span>
                          <ArrowUpRight size={11} className="shrink-0" />
                        </a>
                      )}
                    </div>
                  </Tilt3DCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* COMPACT BANNER FOR FULL DOMATION PRICING & 18 MODULES */}
        <div className="mt-10 rounded-[24px] bg-gradient-to-r from-[#FFFDF9] via-[#FFFBEB] to-[#F5EFE2] border border-[#E2E8F0] p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#B45309]">
              DOMATION SAAS &amp; ENTERPRISE SUITE
            </span>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-[#0F172A]">
              Cần xem trọn bộ 18 Phân Hệ &amp; Công Cụ Tính Giá Tự Động?
            </h3>
          </div>

          <button
            type="button"
            onClick={onOpenDomationModal}
            className="ql-btn-gold px-6 py-3.5 text-xs sm:text-[13px] whitespace-nowrap cursor-pointer shrink-0"
          >
            <span>Mở Bảng Giá &amp; Suite DOMATION</span>
            <ArrowUpRight size={15} className="shrink-0" />
          </button>
        </div>
      </div>

      {/* DEEP INTERACTIVE APP STUDIO MODAL */}
      <StudioDrawerModal
        isOpen={!!selectedApp}
        onClose={() => setSelectedApp(null)}
        badge={selectedApp ? `${selectedApp.badge} • ${selectedApp.repoTag}` : undefined}
        title={selectedApp?.name || ''}
        liveUrl={selectedApp?.liveUrl}
        liveLabel={selectedApp?.liveLabel}
      >
        {selectedApp && (
          <div className="p-5 sm:p-8 space-y-8">
            {/* Special Live Interactive Phone Simulator if Zalo Mini App */}
            {selectedApp.zaloIframeUrl && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-[#E2E8F0] p-5 sm:p-7">
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-[310px] sm:w-[340px] h-[610px] rounded-[42px] bg-[#0F172A] p-2.5 shadow-2xl border-4 border-[#3A3F45] relative">
                    <div className="w-full h-full rounded-[32px] overflow-hidden bg-white">
                      <iframe
                        src={selectedApp.zaloIframeUrl}
                        title="Zalo Mini App Live Simulator"
                        className="w-full h-full border-0"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                      />
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5">
                  <span className="ql-eyebrow">TRẢI NGHIỆM TRỰC TIẾP TRÊN MÀN HÌNH</span>
                  <h4 className="font-display text-2xl font-bold text-[#0F172A]">
                    Tương Tác Thử Zalo Mini App Ngay Tại Đây
                  </h4>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    Khung điện thoại bên trái đang chạy trực tiếp bản build React &amp; TypeScript của
                    Zalo Mini App — bạn có thể bấm chuyển tab, xem tích điểm QR, đổi Voucher ngay lập tức.
                  </p>
                  <div className="space-y-2.5">
                    {selectedApp.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-[#0F172A]">
                        <CheckCircle2 size={16} className="text-[#0F5132] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Main Screenshot Carousel + Capabilities */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
              <div className="lg:col-span-8 space-y-3">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-[#E2E8F0] shadow-md">
                  <img
                    src={selectedApp.screens[slideIdx]?.src || selectedApp.cover}
                    alt={selectedApp.screens[slideIdx]?.title || selectedApp.name}
                    className="w-full h-full object-contain bg-white/40" loading="lazy" decoding="async"
                  />

                  {selectedApp.screens.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setSlideIdx(
                            (prev) =>
                              (prev - 1 + selectedApp.screens.length) % selectedApp.screens.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shadow-md cursor-pointer"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSlideIdx((prev) => (prev + 1) % selectedApp.screens.length)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shadow-md cursor-pointer"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </>
                  )}

                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0F172A]/85 text-white text-[11px] font-bold">
                    {slideIdx + 1} / {selectedApp.screens.length}
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-bold text-[#0F172A] text-center">
                  {selectedApp.screens[slideIdx]?.title}
                </p>

                {/* Thumbnails */}
                {selectedApp.screens.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedApp.screens.map((sc, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSlideIdx(i)}
                        className={`w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                          slideIdx === i
                            ? 'border-[#D97706] scale-105 shadow-sm'
                            : 'border-[#E2E8F0] opacity-65 hover:opacity-100'
                        }`}
                      >
                        <img src={sc.src} alt={sc.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Highlights & Tech */}
              <div className="lg:col-span-4 space-y-5 bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#B45309]">
                    GIÁ TRỊ VẬN HÀNH CỐT LÕI
                  </span>
                  <h4 className="font-display text-xl font-bold text-[#0F172A] mt-1">
                    {selectedApp.hook}
                  </h4>
                </div>

                <div className="space-y-3">
                  {selectedApp.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                      <CheckCircle2 size={15} className="text-[#0F5132] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#F1F5F9]">
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#B45309] mb-2.5">
                    TECH STACK &amp; KIẾN TRÚC
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedApp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-white/40 border border-[#E2E8F0] text-[11px] font-semibold text-[#0F172A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Optional YouTube Guide Embed (e.g. Meta Ads Realtime Report) */}
            {selectedApp.youtubeId && (
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Play size={15} className="text-[#B45309]" />
                  <h4 className="font-display text-lg font-bold text-[#0F172A]">
                    Video Demo Thực Tế Hệ Thống
                  </h4>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedApp.youtubeId}`}
                    title={selectedApp.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            )}

            {/* Optional Tarot Community Rating & 4 Feedback Captures */}
            {selectedApp.tarotReviews && (
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#B45309]">
                      PHẢN HỒI NGƯỜI DÙNG THẬT
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#0F172A]">
                      Đạt 5.0 / 5.0 Sao Từ 274 Đánh Giá Cộng Đồng
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 text-[#D97706]">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {selectedApp.tarotReviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden border border-[#E2E8F0] bg-white/40"
                    >
                      <img src={rev} alt={`Tarot Feedback ${idx + 1}`} className="w-full h-auto" loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </StudioDrawerModal>
    </section>
  );
};

export default AppUniverseSection;
