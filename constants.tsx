import { Experience, Project, Certification, OutsourceHighlight } from './types';
export { PARTNERS } from './constants/partners';
import { 
  Megaphone, 
  Code, 
  Terminal, 
  BarChart3, 
  Zap, 
  Cpu, 
  Database,
  Facebook,
  Youtube,
  Linkedin,
  MonitorSmartphone,
  Layers,
  SearchCode,
} from 'lucide-react';
import React from 'react';

// Brand & DOM project images
import domLogo from './imgs/dom_logo.webp';
import domProject1 from './imgs/dom_project_1.webp';
import domProject2 from './imgs/dom_project_2.webp';

// Projects images
import project1 from './imgs/project_1.webp';
import project2 from './imgs/project_2.webp';
import project3 from './imgs/project_3.webp';
import project4 from './imgs/project_4.webp';
import project5 from './imgs/project_5.webp';
import project6 from './imgs/project_6.webp';
import project7 from './imgs/project_7.webp';
import project8 from './imgs/project_8.webp';

// Certifications images
import cert1 from './imgs/cert_1.webp';
import cert2 from './imgs/cert_2.webp';
import cert3 from './imgs/cert_3.webp';
import cert4 from './imgs/cert_4.webp';
import cert5 from './imgs/cert_5.webp';
import cert6 from './imgs/cert_6.webp';
import cert7 from './imgs/cert_7.webp';
import cert8 from './imgs/cert_8.webp';

import partnerPhucloctho from './imgs/partner_phucloctho.webp';
import partnerDuyenmai from './imgs/partner_duyenmai.webp';
import partnerCowboysteak from './imgs/partner_cowboysteak.webp';
import partnerEngroup from './imgs/partner_engroup.webp';
import partnerAbiruen from './imgs/partner_abiruen.webp';
import partnerKaen from './imgs/partner_kaen.webp';
import partnerHaagendazs from './imgs/partner_haagendazs.webp';
import partnerBean from './imgs/partner_bean.webp';
import partnerTherunningbean from './imgs/partner_therunningbean.webp';
import partnerEstasaigon from './imgs/partner_estasaigon.webp';
import partnerLepetit from './imgs/partner_lepetit.webp';
import partnerSnowee from './imgs/partner_snowee.webp';
import partnerAnninhtienhoang from './imgs/partner_anninhtienhoang.webp';
import partnerAscencia from './imgs/partner_ascencia.webp';
import partnerVtciedu from './imgs/partner_vtciedu.webp';
import partnerCollegedeparis from './imgs/partner_collegedeparis.webp';
import partnerSwissumef from './imgs/partner_swissumef.webp';
import partnerIdeasinstitute from './imgs/partner_ideasinstitute.webp';
import partnerNavastore from './imgs/partner_navastore.webp';
import partnerFlora from './imgs/partner_flora.webp';
import partnerBrandson from './imgs/partner_brandson.webp';
import partnerAmpersand from './imgs/ampersand logo.jpg';
import partnerImplantswiss from './imgs/partner_implantswiss.png';
import partnerRichland from './imgs/partner_richland.webp';

// LOGO URL CONSTANT
export const BRAND_LOGO = domLogo;

export const SOCIALS = [
  { name: 'Facebook', icon: <Facebook size={18} />, url: 'https://facebook.com' },
  { name: 'YouTube', icon: <Youtube size={18} />, url: 'https://youtube.com' },
  { name: 'TikTok', icon: <span className="font-bold text-[10px]">TIKTOK</span>, url: 'https://tiktok.com' },
  { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://linkedin.com' },
];

export const STATS = [
  { label: 'Projects Website', value: '20+', suffix: '' },
  { label: 'Highest Monthly', value: '500', suffix: 'M' },
  { label: 'Web & Ads Clients', value: '25+', suffix: '' },
  { label: 'Followers - Tiktok', value: '10.5', suffix: 'K' },
];

export const TECH_GRID = [
  // DEV & AUTOMATION
  { title: 'ReactJS / NextJS', category: 'dev', desc: 'Frontend UI/UX', icon: <Code className="text-slate-500" />, color: 'from-slate-500/20' },
  { title: 'NodeJS Backend', category: 'dev', desc: 'API Middleware', icon: <Cpu className="text-slate-500" />, color: 'from-slate-500/20' },
  { title: 'Google Apps Script', category: 'dev', desc: 'Sheet Automation', icon: <Terminal className="text-slate-500" />, color: 'from-slate-500/20' },
  { title: 'Zalo Mini App', category: 'dev', desc: 'Zalo Ecosystem', icon: <MonitorSmartphone className="text-slate-500" />, color: 'from-slate-500/20' },
  
  // MARKETING & DATA
  { title: 'Meta Ads API', category: 'martech', desc: 'Automated Ads', icon: <Database className="text-slate-500" />, color: 'from-slate-500/20' },
  { title: 'Data Tracking', category: 'martech', desc: 'GTM / GA4 Server', icon: <BarChart3 className="text-slate-500" />, color: 'from-slate-500/20' },
  { title: 'Automation Flow', category: 'martech', desc: 'Zapier / n8n', icon: <Zap className="text-slate-500" />, color: 'from-slate-500/20' },
  { title: 'SEO Architecture', category: 'martech', desc: 'Technical SEO', icon: <SearchCode className="text-slate-500" />, color: 'from-slate-500/20' },
];

export const BRIDGE_CARDS = [
  { 
    step: '01', 
    title: 'Ads Acquisition', 
    desc: 'Tối ưu Meta & Google Ads với tư duy Marketing bền vững, tập trung vào Lead chất lượng cao.',
    icon: <Megaphone className="text-blue-600" />
  },
  { 
    step: '02', 
    title: 'Data Automation', 
    desc: 'Dùng API & ZaloBot tự động chia vòng Lead và đẩy về CRM (MISA, ERP 5.0) trong < 5s.',
    icon: <Zap className="text-blue-600" />
  },
  { 
    step: '03', 
    title: 'Real-time Report & CAPI', 
    desc: 'Dashboard theo dõi ROAS/CAC tức thì & bắn ngược Meta CAPI HTTP 200 tối ưu tệp khách mua thật.',
    icon: <Layers className="text-blue-600" />
  }
];

export const DOM_PROJECTS = [
  { 
    title: 'Realtime Meta Insights', 
    desc: 'Hệ thống tự động quét dữ liệu từ Facebook Ads Manager và hiển thị báo cáo chi tiết cho khách hàng.', 
    image: domProject1
  },
  { 
    title: 'Report - CRM Connector', 
    desc: 'Kết nối đa kênh (Zalo, FB, Web) về hệ thống MISA, giúp quản lý 100% phễu khách hàng.', 
    image: domProject2
  },
];

import logoIdeas from './imgs/logo_ideas.webp';
import logoPhucloctho from './imgs/logo_phucloctho.webp';

export const OUTSOURCE_HIGHLIGHTS: OutsourceHighlight[] = [
  {
    company: 'IDEAS Institute',
    logo: logoIdeas,
    result: '12600+ Leads',
    cost: '+300% doanh số',
    impact: '-30% Chi phí',
    tags: ['Education', 'FB Lead Ads'],
    description: 'Viết bài content, thiết kế hình ảnh, video, lập trình website, zalo app, mini game và các nhận diện khác để đẩy mạnh các quảng cáo Social thu về Leads đưa cho tư vấn viên gọi. Thay đổi hoàn toàn cách thức chạy Messenger thu lead hoạt động hơn 10 năm sang dạng Lead form để scale up ngân sách. <br/> Kết quả trung bình Lead học thạc sĩ 5 leads/ngày -> 20 leads/ngày <br/> Học viên/khóa 20 -> 60/khóa <br/> Chi phí trên mỗi học viên giảm từ 18 -> 12 - 14tr.',
    status: 'success'
  },
  {
    company: 'Phúc Lộc Thọ',
    logo: logoPhucloctho,
    result: '1600+ Leads',
    cost: '200M Budget',
    impact: '20+ New Stores',
    tags: ['Franchise', 'FB Lead Ads'],
    description: 'Tối ưu hóa chiến dịch quảng cáo Facebook Lead Ads, mang lại lượng lớn khách hàng tiềm năng nhượng quyền chất lượng cao, đóng góp vào việc mở rộng nhiều cửa hàng mới. <br/> Tạm dừng ở hơn 15 cửa hàng (cửa hàng đã khai trương chưa tính đặt cọc) và hơn 100 khách hàng tiềm năng',
    status: 'success'
  },
  {
    company: 'Ampersand Group',
    logo: partnerAmpersand,
    result: '6 Brands',
    cost: 'Social Mng.',
    impact: 'Brand Awareness',
    tags: ['FnB', 'Content'],
    description: 'Quản lý ngân sách và chạy quảng cáo cho 6 thương hiệu F&B, tăng cường nhận diện thương hiệu và tương tác khách hàng.',
    status: 'success',
    logos: [
        { src: partnerHaagendazs, link: 'https://www.facebook.com/Haagendazs.com.vn' },
        { src: partnerBean },
        { src: partnerTherunningbean, link: 'https://www.facebook.com/therunningbeansg' },
        { src: partnerEstasaigon, link: 'https://www.facebook.com/esta.saigon' },
        { src: partnerLepetit },
        { src: partnerSnowee, link: 'https://www.facebook.com/snoweesg' }
    ]
  },
  {
    company: 'Web Order',
    logo: logoPhucloctho,
    result: 'ROAS 5+',
    cost: '5-7M Ads - 100M R/Month',
    impact: 'Phúc Lộc Thọ',
    tags: ['FnB', 'Website Order'],
    description: 'Chiến dịch Web Order vận hành có lợi nhuận ổn định nhưng gặp rào cản khi scale-up ngân sách. Nguyên nhân cốt lõi là sự thua thiệt về tính tiện lợi trong thanh toán mở rộng so với các siêu ứng dụng (GrabFood, ShopeeFood) và thiếu hụt các chương trình Promo mang tính mồi câu mạnh mẽ. Case study đúc kết ra bài học quan trọng về việc xây dựng lợi thế độc quyền (Exclusive Offers) để có thể thay đổi thói quen đặt hàng của user trên kênh Social.',
    status: 'success'
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '0a',
    role: 'Digital Marketing & AI Automation',
    company: 'Tập đoàn Capital House • Dự án EcoLife Signature',
    period: '09/2026 - NOW',
    description: 'Phụ trách chiến lược Digital Marketing & AI Automation toàn trình cho dự án EcoLife Signature Đà Nẵng: Website 3D bóc mái WebGL, Trợ lý AI Sales Portal (ai.ecolifesignature.vn), Phim 4K, 25 ấn phẩm Offline/OOH và hệ thống Auto Chia Số 3 Đại lý F1 (< 5s) đồng bộ Meta CAPI.',
    highlights: [
      'Chiến lược Digital Marketing & AI Automation toàn trình cho EcoLife Signature Đà Nẵng.',
      'Website 3D bóc mái WebGL & Trợ lý AI Sales Portal (ai.ecolifesignature.vn).',
      'Sản xuất Phim 4K cùng 25 ấn phẩm Offline / OOH đồng bộ thương hiệu.',
      'Hệ thống Auto Chia Số 3 Đại lý F1 (< 5 giây) đồng bộ Meta CAPI HTTP 200.',
    ],
    type: 'work'
  },
  {
    id: '0b',
    role: 'Fullstack Developer — AI POD Studio',
    company: 'INKICA AI Tools (ai.inkica.com)',
    period: '2025 - NOW',
    description: 'Kiến trúc & phát triển nền tảng AI Prepress ngành Print-on-Demand: 300 DPI Graphic Extract (SAM 3 + DIS5K + ViTMatte), AOP 3D Pattern Studio 208 SKU / 88 Canonical Models (0 px overlap), bóc rập .PSD CAD Cubic Bezier, Embroidery (.DST), Halftone LPI & Live Multi-Color Garment Mockup (Next.js, Three.js WebGL, NestJS, PostgreSQL, BullMQ).',
    highlights: [
      '300 DPI Graphic Extract (SAM 3 + DIS5K + ViTMatte) chuẩn in ấn Print-on-Demand.',
      'AOP 3D Pattern Studio 208 SKU / 88 Canonical Models (0 px overlap) & bóc rập .PSD CAD.',
      'Xử lý Embroidery (.DST), Halftone LPI & Live Multi-Color Garment Mockup.',
      'Stack: Next.js, Three.js WebGL, NestJS, PostgreSQL & BullMQ.',
    ],
    type: 'work'
  },
  { 
    id: '0', 
    role: 'CEO Founder', 
    company: 'DOMARKETING (DOMATION)', 
    period: '2024 - NOW', 
    description: 'Hệ thống Automation đa thông điệp đã sẵn sàng. Trải nghiệm sức mạnh tự động hóa vượt trội từ Email, Zalo, Meta & AI — Chạm đúng người, đúng thời điểm.', 
    highlights: [
      'Kiến trúc hệ thống AI Automation đa kênh Email, Zalo, Meta & CRM Webhook.',
      'Điều phối & phân luồng Lead real-time (< 5s) — chạm đúng người, đúng thời điểm.',
      'Phát triển hệ sinh thái App, Web & Growth Ads cho 30+ doanh nghiệp.',
    ],
    type: 'work' 
  },
  { 
    id: '1', 
    role: 'Digital Marketing & Fullstack Developer', 
    company: 'IDEAS Institute', 
    period: '2023 - NOW', 
    description: 'Lập trình Web, Zalo App, minigame theo chiến dịch, tối ưu Website & SEO. Vận hành Google/FB Ads kèm hệ thống Báo cáo tự động Real-time. Tăng trưởng số lượng tuyển sinh Thạc sĩ MBA x3 so với năm 2022, giảm chi phí trên mỗi học viên từ 18tr -> 12-14 triệu.', 
    highlights: [
      'Lập trình Web, Zalo Mini App, minigame chiến dịch & tối ưu Technical SEO.',
      'Vận hành Google / Meta Ads kèm hệ thống Báo cáo tự động Real-time.',
      'Tăng trưởng tuyển sinh MBA x3 so với 2022; giảm CPA từ 18tr còn 12–14 triệu.',
    ],
    type: 'work' 
  },
  { 
    id: '2', 
    role: 'Digital Marketing', 
    company: 'Le Gia ICT', 
    period: '2022 - 2023', 
    description: 'Chạy Ads Performance. Xây dựng hệ thống PBN, backlink kỹ thuật SEO năm 2022.', 
    highlights: [
      'Triển khai & tối ưu chiến dịch Performance Ads đa kênh.',
      'Xây dựng hệ thống PBN, backlink & hạ tầng Technical SEO.',
    ],
    type: 'work' 
  },
  { 
    id: '3', 
    role: 'Quản trị kinh doanh - Marketing', 
    company: 'Banking University HCMC', 
    period: '2019 - 2023', 
    description: 'Digital Marketing, học thêm các khóa học lập trình Fullstack tại Fullstack.edu.vn - F8.', 
    highlights: [
      'Chuyên ngành Quản trị kinh doanh – Digital Marketing (HUB).',
      'Hoàn thành lộ trình lập trình Fullstack Web tại Fullstack.edu.vn (F8).',
    ],
    type: 'education' 
  }
];

export const CERTIFICATIONS: Certification[] = [
    {
        id: 'c1',
        name: 'Front End Developer',
        issuer: 'Free Code Camp',
        year: '2021',
        image: cert1, 
        link: 'https://www.freecodecamp.org/certification/trongphuc3105/front-end-development-libraries'
    },
    {
        id: 'c2',
        name: 'Responsive Web Design',
        issuer: 'Free Code Camp',
        year: '2021',
        image: cert2,
        link: 'https://www.freecodecamp.org/certification/trongphuc3105/responsive-web-design'
    },
    
    {
        id: 'c4',
        name: 'JavaScript Advanced',
        issuer: 'Fullstack',
        year: '2022',
        image: cert4,
        link: 'https://f8.edu.vn/certificates/t7s3s'
    },
    {
        id: 'c5',
        name: 'JavaScript Basic',
        issuer: 'Fullstack',
        year: '2021',
        image: cert5,
        link: 'https://f8.edu.vn/certificates/fzmz5'
    },
    {
        id: 'c6',
        name: 'ReactJS',
        issuer: 'Fullstack',
        year: '2022',
        image: cert6,
        link: 'https://f8.edu.vn/certificates/7jzkn'
    },
    {
        id: 'c7',
        name: 'HTML/CSS',
        issuer: 'Fullstack',
        year: '2021',
        image: cert7,
        link: 'https://f8.edu.vn/certificates/t7s3s'
    },
    {
        id: 'c8',
        name: 'SEO - TOP CV',
        issuer: 'TOP CV',
        year: '2023',
        image: cert8,
        link: 'https://certificate.testcenter.vn/dUR8UT0fMlcZNV9GVjE2bFN7SXU'
    },
    {
        id: 'c3',
        name: 'Javascript top 20%',
        issuer: 'TOP CV',
        year: '2023',
        image: cert3,
        link: 'https://certificate.testcenter.vn/dUR8Uz0fMlcZNV9GVjE2bFN7SXU'
    },
];

export const PROJECTS: Project[] = [
  {
    id: 'erp',
    title: 'Hệ Thống ERP Doanh Nghiệp',
    category: 'Dev',
    client: 'IDEAS Institute & Đối Tác Doanh Nghiệp',
    purpose: 'Số hóa & Tự động hóa 100% vận hành: Data lead, HRM, Chấm công GPS AI Selfie, Payroll tính lương tự động & Đối soát tài chính.',
    description: 'Hệ thống ERP toàn diện chuẩn Enterprise tích hợp 11 phân hệ: Chia lead 5 cổng, Chấm công GPS AI Selfie, Tính lương tự động, Pipeline CRM và bảo mật RLS.',
    longDescription: 'Hệ thống hoạch định và tự động hóa vận hành toàn diện cho doanh nghiệp. Bao gồm 11 phân hệ: Tiếp nhận Lead một cửa & chống trùng lặp; Thuật toán chia lead 5 cổng kết hợp van chống ôm (Backpressure); Chăm sóc và tính nhiệt độ Lead (Hot/Warm/Cold, TTL1); Chấm công định vị GPS chuẩn xác kèm chụp ảnh AI Selfie chống gian lận; Bảng tính lương tự động (Payroll Engine) khấu trừ thuế TNCN & BHXH; Xuất phiếu lương điện tử ký số PDF; Quản lý dòng tiền, cọc và chiết khấu hoa hồng; Đồng bộ ngược Meta CAPI tối ưu chi phí quảng cáo.',
    image: '/ERP-Product/1788856550308_2141578413905312186_2310722037673454867_9dee6011fca6751ff38ce855f9b34ee2.jpg',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'NodeJS', 'Supabase', 'Meta CAPI', 'GPS AI Selfie', 'Payroll PDF'],
    link: 'https://domation.net/erp',
  },
  {
    id: 'p1',
    title: 'IDEAS Instittue',
    // Fix: Changed 'Education' to 'Marketing' to match the allowed types in Project interface.
    category: 'Marketing',
    client: 'IDEAS Instittue',
    purpose: 'Website giáo dục',
    description: 'SEO 5/10 từ khóa chính đạt vị trí cao nhất top 1 - duy trì 4-5 từ khóa ở trang nhất theo tháng',
    longDescription: '/',
    image: project1,
    tech: ['Meta Ads', 'ManyChat', 'Zapier', 'Google Sheets API'],
  },
  {
    id: 'p2',
    title: 'F&B POS & Marketing Hub',
    category: 'Dev',
    client: 'Chuỗi Café 30 cửa hàng',
    purpose: 'Đồng bộ dữ liệu khách hàng offline lên online để Remarketing.',
    description: 'Kết nối POS với nền tảng marketing online, tự động gửi Voucher qua Zalo ZNS.',
    longDescription: 'Xây dựng Middleware bằng NodeJS để lắng nghe Webhook từ máy POS tại cửa hàng. Khi khách thanh toán, dữ liệu được đẩy về Database. Hệ thống tự động phân loại khách hàng (Mới, Thân thiết, VIP) và gửi tin nhắn Zalo ZNS tặng Voucher quay lại.',
    image: project2,
    tech: ['NodeJS', 'React', 'Zalo ZNS', 'MongoDB'],
  },
  {
    id: 'p3',
    title: 'Loyalty Mini App',
    category: 'Dev',
    client: 'Hệ thống Spa & Clinic',
    purpose: 'Giữ chân khách hàng và tăng tỷ lệ quay lại (Retention Rate).',
    description: 'Mini App trên Zalo giúp khách hàng tích điểm, đổi quà và đặt lịch dịch vụ.',
    longDescription: 'Phát triển Zalo Mini App native. Khách hàng không cần tải app mới. Tính năng bao gồm: Tích điểm QR Code, Đổi quà voucher, Đặt lịch hẹn tự động đồng bộ Google Calendar của bác sĩ.',
    image: project3,
    tech: ['Zalo Mini App', 'Tailwind', 'Redux', 'Golang'],
  },
  {
    id: 'p4',
    title: 'Auto-Report Dashboard',
    category: 'Dev',
    client: 'Agency Quảng Cáo',
    purpose: 'Tiết kiệm 20 giờ làm báo cáo mỗi tuần cho Account Manager.',
    description: 'Dashboard tổng hợp dữ liệu từ 5 nguồn quảng cáo, hỗ trợ ra quyết định realtime.',
    longDescription: 'Sử dụng Python Scripts để kéo dữ liệu từ Facebook Ads API, Google Ads API, TikTok Ads API vào BigQuery. Kết nối Google Looker Studio để vẽ biểu đồ so sánh hiệu quả đa kênh theo thời gian thực.',
    image: project4,
    tech: ['Looker', 'BigQuery', 'Python', 'Ads API'],
  },
  {
    id: 'p5',
    title: 'E-commerce Conversion API',
    category: 'Dev',
    client: 'Fashion Brand Local',
    purpose: 'Khắc phục vấn đề iOS 14+ chặn tracking pixel.',
    description: 'Server-side tracking khắc phục iOS 14+, tăng độ chính xác dữ liệu lên 30%.',
    longDescription: 'Triển khai Google Tag Manager Server-side trên Cloudflare Workers. Thiết lập Meta Conversion API (CAPI) để gửi sự kiện Purchase trực tiếp từ Server, bypass các trình chặn quảng cáo và cookie policy của browser.',
    image: project5,
    tech: ['GTM Server', 'Cloudflare', 'NodeJS'],
  },
  {
    id: 'p6',
    title: 'Beauty Spa Booking',
    category: 'Dev',
    client: 'Thẩm mỹ viện Quốc tế',
    purpose: 'Giảm tỷ lệ khách bùng lịch (No-show).',
    description: 'Hệ thống đặt lịch spa thông minh, nhắc lịch tự động qua SMS Brandname.',
    longDescription: 'Ứng dụng React Native cho khách đặt lịch. Backend tự động gửi SMS nhắc hẹn trước 24h và 2h. Nếu khách hủy, slot trống tự động được đẩy lên Flash Sale.',
    image: project6,
    tech: ['React Native', 'Firebase', 'Twilio'],
  },
  {
    id: 'p7',
    title: 'Fitness Lead Funnel',
    category: 'Marketing',
    client: 'Gym Center System',
    purpose: 'Tăng số lượng khách đăng ký tập thử.',
    description: 'Phễu thu hút khách hàng phòng tập Gym với chuỗi chăm sóc tự động 30 ngày.',
    longDescription: 'Thiết kế Landing Page chuyển đổi cao tặng gói tập thử 7 ngày. Sau khi đăng ký, chuỗi Email Automation sẽ gửi tips dinh dưỡng và bài tập để nurture khách hàng trước khi Sale gọi chốt gói năm.',
    image: project7,
    tech: ['Landing Page', 'Email Marketing', 'Ads'],
  },
  {
    id: 'p8',
    title: 'English Edu Gamification',
    category: 'Dev',
    client: 'Trung tâm Anh ngữ',
    purpose: 'Giúp học viên học từ vựng không nhàm chán.',
    description: 'Web app học từ vựng tiếng Anh qua game, tăng tỷ lệ hoàn thành bài học lên 40%.',
    longDescription: 'Ứng dụng phương pháp Spaced Repetition (Lặp lại ngắt quãng). Học viên chơi game nối từ, đuổi hình bắt chữ để tích coin đổi quà tại trung tâm.',
    image: project8,
    tech: ['VueJS', 'Socket.io', 'MongoDB'],
  },
];

export const SKILL_CATEGORIES = [
  { 
    title: 'Performance Marketing', 
    desc: 'Quản trị ngân sách lớn với tư duy tối ưu chuyển đổi và lợi nhuận thực tế.', 
    icon: <Megaphone />, 
    color: 'bg-gold-500/10 text-gold-500' 
  },
  { 
    title: 'Fullstack Development', 
    desc: 'Xây dựng nền tảng Web & App tùy chỉnh phục vụ nhu cầu kinh doanh đặc thù.', 
    icon: <Code />, 
    color: 'bg-blue-500/10 text-blue-500' 
  },
  { 
    title: 'Process Automation', 
    desc: 'Loại bỏ các công việc lặp lại bằng các script tự động hóa và tích hợp API.', 
    icon: <Zap />, 
    color: 'bg-purple-500/10 text-purple-500' 
  }
];

export const SHORT_CAMPAIGNS: OutsourceHighlight[] = [
  {
    company: 'Nha khoa Flora',
    logo: partnerFlora,
    result: '350k / Lead',
    cost: 'Budget: 20 triệu',
    impact: 'Trồng Implant',
    tags: ['Nha Khoa', 'Facebook Ads'],
    description: 'Vận hành chiến dịch quảng cáo tối ưu và thiết kế Landing Page chuyển đổi cho sự kiện Ngày Hội Implant tại Nha khoa Flora. Thu hút lượt đăng ký quan tâm trồng răng Implant chất lượng cao.',
    link: 'https://nhakhoaflora.com/ngay-hoi-implant/'
  },
  {
    company: 'Brandson',
    logo: partnerBrandson,
    result: '400k / Lead',
    cost: 'Budget: 30 triệu',
    impact: 'Bác sĩ học CME',
    tags: ['Nha Khoa', 'Lead Ads'],
    description: 'Triển khai phễu quảng cáo và thiết kế Landing Page giáo dục chuyên sâu về dịch vụ đào tạo Cấy Ghép Nha Khoa của Brandson. Thu hút lượng lớn bác sĩ đăng ký học CME.',
    link: 'https://brandson.vn/cay-ghep-nha-khoa-co-ban/'
  },
  {
    company: 'Duyên Mai',
    logo: partnerDuyenmai,
    result: 'Brand Awareness',
    cost: 'Social Mng.',
    impact: 'Fashion Awareness',
    tags: ['Fashion', 'Retail'],
    description: 'Quản trị Fanpage, sản xuất hình ảnh lookbook sáng tạo hàng tháng và chạy quảng cáo nhận diện thương hiệu cho nhãn hàng thời trang Duyên Mai, nâng cao tỷ lệ khách hàng trung thành.',
    link: 'https://duyenmai.vn'
  },
  {
    company: 'Cowboy Steak',
    logo: partnerCowboysteak,
    result: 'Brand Awareness',
    cost: 'Social Mng.',
    impact: 'Steakhouse Awareness',
    tags: ['F&B', 'Restaurant'],
    description: 'Xây dựng kế hoạch nội dung truyền thông xã hội và thực thi chiến dịch quảng cáo phủ sóng khu vực lân cận cho nhà hàng Cowboy Steakhouse, lôi kéo lượng thực khách đều đặn hàng tuần.',
    link: 'https://www.facebook.com/CowboySteakhouseVietnam/'
  }
];

export interface ErpGalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'Vận hành & Lead' | 'CRM & Khách hàng' | 'Nhân sự & Chấm công' | 'Lương & Tài chính' | 'Hệ thống & Cài đặt';
  tag: string;
  description: string;
  highlight: string;
}

export const ERP_GALLERY: ErpGalleryItem[] = [
  {
    id: 'nav_menu_1',
    src: '/ERP-Product/1788856691047_2141578413905312186_2310722037673454867_2dacee1206b6e8f836cdea82018d556e.jpg',
    title: 'Hệ thống Menu Điều hướng Nhanh (Phần 1)',
    category: 'Hệ thống & Cài đặt',
    tag: 'Navigation System',
    description: 'Điều hướng đa phân hệ: Lead một cửa, Databank, Giỏ hàng dự án, Đối tác liên kết, HRM, Phê duyệt và Cấu hình hệ thống.',
    highlight: 'Giao diện tối ưu công thái học UX/UI'
  },
  {
    id: 'splash',
    src: '/ERP-Product/1788856522396_2141578413905312186_2310722037673454867_637ed02e6f5c0e0560d1bcac82cf9a19.jpg',
    title: 'Màn hình Khởi động IDEAS ERP (AI Mascot)',
    category: 'Hệ thống & Cài đặt',
    tag: 'Splash Screen',
    description: 'Bộ nhận diện hiện đại với Mascot Robot AI, định hướng tự động hóa thông minh (AI Automation & Intelligent Workflow).',
    highlight: 'Nhận diện thương hiệu công nghệ cao'
  },
  {
    id: 'inbox',
    src: '/ERP-Product/1788856540980_2141578413905312186_2310722037673454867_a9d3d972886e0c266f4c5866dec8111d.jpg',
    title: 'Hộp thư Phê duyệt & Tồn đọng (AI Gatekeeper)',
    category: 'Vận hành & Lead',
    tag: 'Approval Inbox',
    description: 'Trung tâm kiểm duyệt dữ liệu: Ticket báo lỗi data, lead bị tạm giữ qua bộ lọc AI Pre-screener và yêu cầu hỗ trợ IT/CS.',
    highlight: 'Xử lý nút thắt cổ chai tức thì'
  },
  {
    id: 'dashboard',
    src: '/ERP-Product/1788856550308_2141578413905312186_2310722037673454867_9dee6011fca6751ff38ce855f9b34ee2.jpg',
    title: 'Tổng quan Vận hành & Phân bổ Data',
    category: 'Vận hành & Lead',
    tag: 'Executive Dashboard',
    description: 'Thống kê thời gian thực: Tổng data tiếp nhận, tỷ lệ chia thành công 100%, tỷ lệ trùng lặp 0%, biểu đồ hiệu suất theo ngày và top tư vấn viên.',
    highlight: 'Báo cáo trực quan & Real-time'
  },
  {
    id: 'kanban',
    src: '/ERP-Product/1788856559658_2141578413905312186_2310722037673454867_192068dc865f82425fa3645d12da931a.jpg',
    title: 'Bàn làm việc & Task Kanban Thông minh',
    category: 'Vận hành & Lead',
    tag: 'Workspace & Kanban',
    description: 'Quản trị công việc cá nhân và đội ngũ: Cảnh báo công việc quá hạn, đếm giờ phiên làm việc, lọc theo trạng thái và nhóm phụ trách.',
    highlight: 'Tăng 40% năng suất xử lý công việc'
  },
  {
    id: 'expenses',
    src: '/ERP-Product/1788856566822_2141578413905312186_2310722037673454867_c63e338a900a1ede4d6aa48393ce24da.jpg',
    title: 'Quản lý Chi phí Vận hành (Purchase Order)',
    category: 'Lương & Tài chính',
    tag: 'Purchase Order',
    description: 'Kiểm soát dòng tiền ra: Tổng chi phí kỳ này, hóa đơn đã duyệt, chờ duyệt, phân loại chi phí vận hành và hạn mức giải ngân.',
    highlight: 'Minh bạch từng đồng chi phí'
  },
  {
    id: 'crm_lead',
    src: '/ERP-Product/1788856586610_2141578413905312186_2310722037673454867_3a3e0cd6e45b99e3e82c953988b294c7.jpg',
    title: 'Hồ sơ Khách hàng & Pipeline Chăm sóc',
    category: 'CRM & Khách hàng',
    tag: 'Lead Detail & Pipeline',
    description: 'Theo dõi chi tiết khách hàng: Phân cấp nhiệt độ (Ấm/Nóng), AI chấm điểm tiềm năng, quy trình 8 bước, doanh thu dự kiến và ghi chú tương tác.',
    highlight: 'Quản lý 360 độ vòng đời khách hàng'
  },
  {
    id: 'hr_overview',
    src: '/ERP-Product/1788856615239_2141578413905312186_2310722037673454867_68e999d52c39291dacc6740f9084167c.jpg',
    title: 'Quản lý Nhân sự & Cơ cấu Phòng ban',
    category: 'Nhân sự & Chấm công',
    tag: 'HRM Overview',
    description: 'Toàn cảnh nhân sự doanh nghiệp: Tỷ lệ đi làm trong tuần, nhân viên đi trễ, nhân sự tăng ca OT, cơ cấu phòng ban và đơn chờ duyệt.',
    highlight: 'Tự động hóa báo cáo chấm công'
  },
  {
    id: 'leave_approval',
    src: '/ERP-Product/1788856627087_2141578413905312186_2310722037673454867_33798ebb805d3335cfcfedec3f73c1c0.jpg',
    title: 'Phê duyệt Đơn từ & Tăng ca Trực tuyến',
    category: 'Nhân sự & Chấm công',
    tag: 'Online Approval',
    description: 'Quy trình xét duyệt đa cấp: Phép năm, tăng ca, làm việc từ xa (WFH), giải trình đi trễ với đầy đủ thời gian và lý do xác thực.',
    highlight: 'Không còn giấy tờ thủ công'
  },
  {
    id: 'payroll_calc',
    src: '/ERP-Product/1788856643268_2141578413905312186_2310722037673454867_90891228871ff88a333f15fc1497741d.jpg',
    title: 'Bảng tính Lương Tháng Tự Động (Payroll Engine)',
    category: 'Lương & Tài chính',
    tag: 'Payroll System',
    description: 'Thuật toán tính lương phức hợp: Lương ngày công, thưởng chuyên cần, KPI, khấu trừ BHXH, thuế thu nhập cá nhân TNCN và thực lĩnh NET.',
    highlight: 'Tính lương tự động chuẩn xác 100%'
  },
  {
    id: 'payslip_pdf',
    src: '/ERP-Product/1788856653987_2141578413905312186_2310722037673454867_b778c3abf946efda6e8623075e8ea445.jpg',
    title: 'Phiếu Lương Điện Tử & Xuất File PDF',
    category: 'Lương & Tài chính',
    tag: 'Digital Payslip & PDF',
    description: 'Phiếu lương điện tử cá nhân hóa: Bảng kê chi tiết từng khoản cộng/trừ, hỗ trợ in hoặc xuất file PDF ký số xác nhận lương Net trực tuyến.',
    highlight: 'Bảo mật thông tin lương tuyệt đối'
  },
  {
    id: 'attendance_cal',
    src: '/ERP-Product/1788856662127_2141578413905312186_2310722037673454867_5cecf569bb851d994237076459b3995a.jpg',
    title: 'Quản lý Chấm công Theo Tháng & Ca trực',
    category: 'Nhân sự & Chấm công',
    tag: 'Monthly Attendance',
    description: 'Lịch chấm công tổng hợp: Giám sát ngày công thực tế, số lần đi trễ, phút trễ, ca trực đêm, tăng ca và cập nhật bổ sung công hợp lệ.',
    highlight: 'Minh bạch dữ liệu chuyên cần'
  },
  {
    id: 'gps_selfie',
    src: '/ERP-Product/1788856668006_2141578413905312186_2310722037673454867_72b9a0047bb54f03c54fb657c81e41dc.jpg',
    title: 'Chấm công Định vị GPS & Chụp Ảnh Selfie AI',
    category: 'Nhân sự & Chấm công',
    tag: 'GPS & Face Check-in',
    description: 'Chống gian lận chấm công tuyệt đối: Xác thực tọa độ vệ tinh GPS văn phòng, thời gian chuẩn xác đến từng giây kèm ảnh chụp selfie vào ca.',
    highlight: 'Chống Fake GPS & Gian lận ca'
  },
  {
    id: 'system_settings',
    src: '/ERP-Product/1788856679081_2141578413905312186_2310722037673454867_8628e61bf60b5866f7474a75753c6fda.jpg',
    title: 'Trung tâm Cấu hình Hệ thống & SLA (v246)',
    category: 'Hệ thống & Cài đặt',
    tag: 'System Rules & SLA',
    description: 'Cấu hình linh hoạt không hardcode: Thời gian chờ nhận lead (2 phút), van chống ôm (Backpressure), quy tắc cọc & bể cọc, hạn mức Databank.',
    highlight: 'Linh hoạt tùy biến 100% nghiệp vụ'
  },
  {
    id: 'nav_menu_2',
    src: '/ERP-Product/1788856705546_2141578413905312186_2310722037673454867_91d3fd439a4e7f45eee7ae77dc8c20a1.jpg',
    title: 'Hệ sinh thái Phân hệ Mở rộng (Phần 2)',
    category: 'Hệ thống & Cài đặt',
    tag: 'System Ecosystem',
    description: 'Mở rộng phân hệ chuyên sâu: Chấm công GPS, Bảng tính lương tự động, Quản lý tài chính, Báo cáo CAPI và Phân quyền bảo mật RLS.',
    highlight: 'Kiến trúc module độc lập & mở rộng'
  }
];

export const ERP_MODULES = [
  {
    num: "01",
    title: "Tiếp nhận Lead Một Cửa & Chống Trùng",
    desc: "Bóc tách thực thể Person (Con người) và Lead (Nhu cầu). Cùng một số điện thoại chỉ tồn tại 1 hồ sơ duy nhất, không trùng lặp data giữa các kênh tiếp thị.",
    tag: "Data Ingestion"
  },
  {
    num: "02",
    title: "Chia Lead 5 Cổng & Van Chống Ôm",
    desc: "Thuật toán xoay vòng Round-Robin 5 cổng thông minh. Cơ chế Backpressure giới hạn số lead đang xử lý, tự động thu hồi và chia lại nếu vượt quá SLA 2 phút.",
    tag: "Smart Routing"
  },
  {
    num: "03",
    title: "Ma Trận Nhiệt Độ & Rào Cản Form TTL1",
    desc: "Phân loại khách hàng theo độ nóng: Hot / Warm / Cold với cơ chế Decay 5 ngày. Bắt buộc cập nhật nhật ký tương tác trước khi mở khóa trạng thái mới.",
    tag: "Pipeline CRM"
  },
  {
    num: "04",
    title: "Hợp Tác Số & Phân Chia Hoa Hồng 100%",
    desc: "Quy trình kết nối đối tác liên kết, ký kết hợp tác số và phê duyệt tự động. Phân bổ hoa hồng nhiều tầng minh bạch và tức thì theo từng giao dịch.",
    tag: "Affiliate & Partner"
  },
  {
    num: "05",
    title: "Kho Databank & Đồng Hồ Tái Khai Thác",
    desc: "Lead không phát sinh giao dịch sau thời gian quy định sẽ tự động chuyển về Kho chung Databank để các tư vấn viên khác nhận và tái khai thác.",
    tag: "Databank Pool"
  },
  {
    num: "06",
    title: "Quản Lý Dự Án & Giỏ Hàng Thời Gian Thực",
    desc: "Theo dõi tình trạng sản phẩm/căn hộ/dịch vụ theo thời gian thực (Trống, Giữ chỗ, Đã cọc). Tích hợp kho tài liệu số, brochure và pháp lý phân quyền.",
    tag: "Inventory Matrix"
  },
  {
    num: "07",
    title: "Quản Trị Nhân Sự & Chấm Công GPS AI Selfie",
    desc: "Quản lý hồ sơ nhân sự, phòng ban, ca trực và xét duyệt nghỉ phép trực tuyến. Chấm công xác thực tọa độ GPS bán kính văn phòng kèm chụp ảnh selfie AI.",
    tag: "Smart HRM & GPS"
  },
  {
    num: "08",
    title: "Bảng Tính Lương Tự Động & Xuất PDF Ký Số",
    desc: "Engine tính lương tự động từ dữ liệu chấm công: Lương cơ bản, OT, KPI, hoa hồng, khấu trừ BHXH và thuế TNCN. Tự động xuất phiếu lương PDF cá nhân.",
    tag: "Payroll Engine"
  },
  {
    num: "09",
    title: "Dòng Tiền, Cọc & Phí Môi Giới",
    desc: "Theo dõi toàn bộ phiếu thu chi, đặt cọc, chuyển cọc và hoàn cọc. Đính kèm ủy nhiệm chi ngân hàng (UNC) và tự động ghi nhận vào sổ quỹ kế toán.",
    tag: "Cashflow & Deposits"
  },
  {
    num: "10",
    title: "Dữ Liệu Ngược Meta CAPI (Forward-Only)",
    desc: "Bắn ngược các sự kiện chuyển đổi giá trị cao (Cọc, Hợp đồng thành công) về Meta Ads API để máy học tối ưu quảng cáo, giảm chi phí CAC và tăng ROAS.",
    tag: "Meta CAPI Loop"
  },
  {
    num: "11",
    title: "Bảo Mật Row-Level Security (RLS) & Audit Log",
    desc: "Kiểm soát truy cập dữ liệu đa tầng theo chi nhánh/phòng ban/vai trò. Mọi thao tác xem, sửa, xuất dữ liệu đều được ghi lại trong Audit Log bất biến.",
    tag: "Security & RLS"
  }
];

/* ============================================================================
   QUIET LUXURY PARTNERS: FLAGSHIP CHỦ ĐẦU TƯ, DỰ ÁN & 3 ĐẠI LÝ F1
   ============================================================================ */

export interface FlagshipPartnerItem {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  logo: string;
  url?: string;
  metrics: string[];
  badge: string;
}

export const FEATURED_FLAGSHIP_PARTNERS: FlagshipPartnerItem[] = [
  {
    id: "capital-house",
    name: "Capital House Group",
    role: "CHỦ ĐẦU TƯ CHIẾN LƯỢC",
    subtitle:
      "Tập đoàn tiên phong kiến tạo Bất động sản Xanh chuẩn quốc tế IFC EDGE tại Việt Nam. Hợp tác nghiệm thu toàn diện hệ sinh thái Media 3D, Web Portal & CRM chia số.",
    logo: "/assets/partners/logo_capital_house.webp",
    url: "https://chgroup.vn",
    badge: "BBNT 0511/2026 • CĐT",
    metrics: ["2 Hợp đồng Nghiệm thu 2026", "Hệ thống CRM & CAPI Độc quyền", "Chiến dịch Media & OOH Tổng thể"]
  },
  {
    id: "ecolife-signature",
    name: "EcoLife Signature Đà Nẵng",
    role: "DỰ ÁN TRỌNG ĐIỂM • TOÀN DIỆN MARTECH",
    subtitle:
      "Tổ hợp căn hộ Xanh chuẩn EDGE đẳng cấp bên Vịnh biển Đà Nẵng. Trực tiếp kiến trúc Website WordPress Quiet Luxury, WebGL 3D, Trợ lý AI Sales & Auto Routing 3 Đại lý F1.",
    logo: "/assets/partners/logo_ecolife_ngang.webp",
    url: "https://ai.ecolifesignature.vn/",
    badge: "AI.ECOLIFESIGNATURE.VN",
    metrics: ["Website WordPress + 3D Bóc Mái", "Trợ lý AI Sales & Knowledge Vault", "Auto Chia Data 3 Đại lý F1 < 5s"]
  },
  {
    id: "inkica",
    name: "INKICA AI POD Studio",
    role: "ĐỐI TÁC CÔNG NGHỆ • AI PREPRESS & 3D",
    subtitle:
      "Nền tảng AI Prepress & 3D Studio ngành Print-on-Demand toàn cầu. Kiến trúc 300 DPI Neural Extract (20+ ONNX Models), AOP 3D 208 SKU / 88 Models (0 px lệch), bóc rập .PSD & Chat Omni-Agent.",
    logo: "/assets/partners/logo_inkica_icon.svg",
    url: "https://ai.inkica.com/",
    badge: "AI.INKICA.COM",
    metrics: ["300 DPI Neural Extract + ViTMatte", "208 SKU AOP 3D • 0px Lệch Rập", "6+ AI Prepress Agents Orchestrator"]
  }
];

export interface F1AgencyItem {
  id: string;
  name: string;
  shortName: string;
  role: string;
  logo: string;
  routeMetric: string;
  note: string;
}

export const F1_AGENCY_PARTNERS: F1AgencyItem[] = [
  {
    id: "tung-long",
    name: "Địa Ốc Tùng Long",
    shortName: "TÙNG LONG PROPERTY",
    role: "Đại lý F1 Phân phối Chính thức",
    logo: "/assets/partners/logo_tung_long.webp",
    routeMetric: "Ratio: 1 • ZaloBot < 5s",
    note: "Nhận data tự động Round-Robin công bằng từ Meta Form & Website, đối soát ticket real-time."
  },
  {
    id: "hop-nhat",
    name: "Bất Động Sản Hợp Nhất",
    shortName: "HỢP NHẤT LAND",
    role: "Đại lý F1 Phân phối Chính thức",
    logo: "/assets/partners/logo_hop_nhat.webp",
    routeMetric: "Ratio: 1 • Auto Bù Ticket",
    note: "Tích hợp webhook giao data trực tiếp về đội ngũ kinh doanh cá nhân và quản lý giỏ hàng F1."
  },
  {
    id: "ihd-group",
    name: "Tập Đoàn IHD",
    shortName: "IHD GROUP",
    role: "Đại lý F1 Phân phối Chính thức",
    logo: "/assets/partners/logo_ihd_group.webp",
    routeMetric: "Ratio: 1 • CAPI Sync",
    note: "Đồng bộ trạng thái chăm sóc khách hàng (Thiện chí, Hẹn gặp, Booking) phản hồi về Dataset Meta."
  }
];

/* ============================================================================
   DOMATION 2026: AUTO DATA ROUTING (ZALOBOT) & AUTO META CAPI
   ============================================================================ */

export interface DomationV2Screen {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  highlights: string[];
}

export const DOMATION_V2_CAPI_SHOWCASE: DomationV2Screen[] = [
  {
    id: "overview",
    badge: "01 • AUTO CHIA DATA ĐẠI LÝ & ZALOBOT",
    title: "Phân Bổ Data Real-Time Qua ZaloBot & SalePortal",
    subtitle:
      "Tự động thu lead từ Meta Instant Form & Website, lọc trùng 6 tháng, loại trừ blacklist/spam rồi chia vòng công bằng cho 3 Đại lý F1 (Tùng Long, Hợp Nhất, IHD) và từng Sale cá nhân qua ZaloBot dưới 5 giây.",
    image: "/assets/domation/data_v2_overview.webp",
    highlights: [
      "Tự động chia vòng 91%+ tỷ lệ sạch, bù ticket minh bạch",
      "Gửi thông báo trực tiếp tới Sale cá nhân & Leader qua ZaloBot",
      "Theo dõi lưu lượng data theo ngày / theo giờ / heatmap"
    ]
  },
  {
    id: "capi-log",
    badge: "02 • AUTO BẮN CONVERSION API META (HTTP 200)",
    title: "Tự Động Bắn CAPI Về Meta Khi Đánh Giá Thiện Chí & Notlead",
    subtitle:
      "Khi Sale hoặc AI Pre-screener chấm trạng thái Lead trên portal (Thiện chí -> Lead/Qualified, Hẹn gặp -> Schedule/Booked, Sai số/Không nhu cầu -> DisqualifiedLead/Notlead), hệ thống tự động hash ph/em/fn/ln/fbc bắn CAPI trực tiếp về Facebook Dataset.",
    image: "/assets/domation/data_v2_capi_masked.webp",
    highlights: [
      "Bắn cả tín hiệu Chất lượng (Lead / Schedule) và Tín hiệu Loại (DisqualifiedLead / Notlead)",
      "Dạy thuật toán Meta ngừng phân phối vào tệp rác, tập trung người mua ở thật",
      "Thông tin SĐT khách hàng đã được ẩn bảo mật trên bản trình diễn"
    ]
  },
  {
    id: "ads-pipeline",
    badge: "03 • ĐO LƯỜNG HIỆU SUẤT AD TỚI TỪNG LEAD",
    title: "Pipeline Tracking Từng Mẫu Quảng Cáo Đến Booking & Đặt Cọc",
    subtitle:
      "Kết nối chi phí Meta Ads API với phễu đánh giá thực tế của Sale theo 8 nấc: Thiện chí, Hẹn gặp, Booking, Đặt cọc, Đã chốt, Hẹn gọi lại, KNM/Thuê bao, Notlead để ra quyết định Scale hay Tắt Ad chính xác bằng dữ liệu thật.",
    image: "/assets/domation/data_v2_ads_pipeline.webp",
    highlights: [
      "Nhìn thấu tỷ lệ Notlead / Thiện chí trên từng mẫu Carousel, Video, Lead Form",
      "Tính chính xác CPL thực & Chi phí trên mỗi Lead Thiện chí",
      "Cảnh báo Ad đang đốt tiền hoặc tiềm năng Scale"
    ]
  },
  {
    id: "fair-audit",
    badge: "04 • ĐỐI SOÁT CÔNG BẰNG ĐẠI LÝ",
    title: "Bảng Thống Kê Độ Lệch & Bù Data Minh Bạch Giữa 3 Đại Lý F1",
    subtitle:
      "Loại bỏ hoàn toàn tranh cãi chia số không đều giữa các sàn F1: Công thức Thành công = Đã chia + Bù (không tính trùng/ticket hợp lệ), tự động cân bằng độ lệch gần 0% giữa Tùng Long, Hợp Nhất và IHD.",
    image: "/assets/domation/data_v2_fair_audit.webp",
    highlights: [
      "Biểu đồ đối soát theo nguồn Meta Form vs Website",
      "Quy trình duyệt Ticket lỗi & hoàn bù tự động",
      "Công thức minh bạch cho Chủ đầu tư & Giám đốc Sàn"
    ]
  }
];

/* ============================================================================
   DOMATION LANDING PAGE DATASET (IMPORTED FROM D:\GITHUB_SPACE\DOMATION_LANDINGPAGE)
   ============================================================================ */

export const ERP_16_EXTRA: ErpGalleryItem = {
  id: "16",
  src: "/assets/domation/erp_16.webp",
  category: "Vận hành & Lead",
  tag: "Vận hành Độc quyền",
  title: "Báo Cáo Vận Hành & Tồn Quỹ Phòng Học Real-Time",
  description:
    "Theo dõi công suất phòng học, lịch giảng dạy giảng viên và tình trạng vận hành đa cơ sở theo thời gian thực.",
  highlight: "Realtime Operations Matrix"
};

export const DOMATION_CRM_IMAGES = [
  { id: 1, src: "/assets/domation/crm_1.webp", title: "Dashboard Tổng Quan Doanh Thu & Pipeline" },
  { id: 2, src: "/assets/domation/crm_2.webp", title: "Phân Bổ Lead Đa Kênh Round-Robin" },
  { id: 3, src: "/assets/domation/crm_3.webp", title: "Quản Lý Hồ Sơ Khách Hàng 360 Độ" },
  { id: 4, src: "/assets/domation/crm_4.webp", title: "Tự Động Chăm Sóc ZaloBot & ZNS" },
  { id: 5, src: "/assets/domation/crm_5.webp", title: "Báo Cáo Hiệu Suất Sale & KPI Chốt Đơn" },
  { id: 6, src: "/assets/domation/crm_6.webp", title: "Theo Dõi Lịch Hẹn, Booking & Đặt Cọc" },
  { id: 7, src: "/assets/domation/crm_7.webp", title: "Lọc Trùng Số Điện Thoại Đa Chiến Dịch" },
  { id: 8, src: "/assets/domation/crm_8.webp", title: "Đồng Bộ Webhook Hai Chiều CRM <-> Meta" },
  { id: 9, src: "/assets/domation/crm_9.webp", title: "Quản Trị Giỏ Hàng & Chính Sách Bán Hàng" },
  { id: 10, src: "/assets/domation/crm_10.webp", title: "Lịch Sử Tương Tác & Ghi Chú Tư Vấn" },
];

export const DOMATION_AUTO_FEATURES = [
  { id: "home", tab: "Tổng quan Automation", title: "Bảng Điều Khiển Chiến Dịch & Tỷ Lệ Chuyển Đổi", desc: "Theo dõi lưu lượng email, Zalo ZNS, kịch bản tự động và tỷ lệ mở / click theo thời gian thực.", src: "/assets/domation/auto_home.webp" },
  { id: "flow", tab: "Visual Flow Builder", title: "Trình Tạo Kịch Bản Kéo Thả Đa Nhánh (IF/ELSE)", desc: "Thiết kế phễu nuôi dưỡng tự động dựa trên hành vi mở mail, click link, xem trang giá hoặc trạng thái CRM.", src: "/assets/domation/auto_flow.webp" },
  { id: "email", tab: "Email Design", title: "Thiết Kế Email Chuyên Nghiệp Kéo Thả", desc: "Thư viện template chuẩn Quiet Luxury & doanh nghiệp B2B/BĐS, tối ưu hiển thị trên mọi thiết bị.", src: "/assets/domation/auto_email.webp" },
  { id: "tracking", tab: "Web Tracking", title: "Gắn Pixel Tracking Hành Vi Khách Hàng Ẩn Danh", desc: "Ghi nhận chính xác từng lượt xem trang, thời gian ở lại và gắn nhãn tự động về hồ sơ khách hàng.", src: "/assets/domation/auto_tracking.webp" },
  { id: "ai-group", tab: "AI Phòng Ban", title: "Hệ Thống AI Agent Phân Quyền Từng Bộ Phận", desc: "Xây dựng các Trợ lý AI chuyên biệt cho Marketing, Sale, CSKH với bộ tài liệu tri thức nội bộ riêng.", src: "/assets/domation/auto_ai_group.webp" },
  { id: "chatbot", tab: "AI Chatbot 24/7", title: "Trợ Lý AI Tư Vấn Đa Kênh Zalo & Messenger", desc: "Tự động chào hỏi, trả lời thông số sản phẩm, bảng giá và đặt lịch hẹn khách hàng ngay trong khung chat.", src: "/assets/domation/auto_ai_chatbot.webp" },
  { id: "voucher", tab: "Voucher Hub", title: "Phát Hành & Kiểm Soát Mã Ưu Đãi Tự Động", desc: "Tạo hàng loạt mã giảm giá/booking duy nhất gắn với từng khách hàng và theo dõi tỷ lệ sử dụng.", src: "/assets/domation/auto_voucher.webp" },
  { id: "qr", tab: "QR Tracking", title: "Đo Lường Hiệu Quả Marketing Offline Qua QR Động", desc: "Theo dõi lượt quét từ Standee, Tờ gập, Hoarding công trình để gán nguồn khách hàng chính xác.", src: "/assets/domation/auto_qr.webp" },
  { id: "survey", tab: "Survey Builder", title: "Khảo Sát Nhu Cầu & Chấm Điểm Lead Tự Động", desc: "Thu thập insight khách hàng, tự động phân nhóm (Segment) và kích hoạt chuỗi chăm sóc tương ứng.", src: "/assets/domation/auto_survey.webp" },
];

export const DOMATION_META_REPORT_IMAGES = [
  { src: "/assets/domation/meta_rp_1.webp", title: "Tổng quan Chỉ số Meta Ads Real-Time (Spend, ROAS, CPA)" },
  { src: "/assets/domation/meta_rp_2.webp", title: "Phân tích Phễu Video Hook Rate & Hold Rate" },
  { src: "/assets/domation/meta_rp_3.webp", title: "Đối chiếu Chi phí Ads với Doanh thu CRM Thực tế" },
  { src: "/assets/domation/meta_rp_4.webp", title: "Báo cáo Hiệu suất Creative & Độ bão hòa Tệp" },
  { src: "/assets/domation/meta_rp_5.webp", title: "Ma trận Tối ưu Ngân sách Campaign / Adset" },
  { src: "/assets/domation/meta_rp_6.webp", title: "Nhật ký Đồng bộ Token & Dataset CAPI" },
];

export interface DomationModuleItem {
  id: string;
  name: string;
  tag: string;
  desc: string;
}

export const DOMATION_ALL_MODULES: DomationModuleItem[] = [
  { id: "chia-data", name: "Hệ Thống Phân Bổ Data V2", tag: "Data Routing", desc: "Chia số Round-Robin qua ZaloBot dưới 5 giây cho Đại lý F1 & Sale cá nhân." },
  { id: "meta-capi", name: "Auto Bắn Meta CAPI", tag: "Ads Signal", desc: "Tự động bắn Qualified / Notlead / Booked về Facebook Dataset theo đánh giá Sale." },
  { id: "campaigns", name: "Campaigns Đa Kênh", tag: "Email & ZNS", desc: "Điều phối chiến dịch Email & Zalo ZNS hàng loạt với tốc độ gửi tối ưu." },
  { id: "automation", name: "Visual Automation Flow", tag: "Kịch bản", desc: "Xây dựng luồng chăm sóc rẽ nhánh theo hành vi mở link, gắn tag CRM." },
  { id: "email-design", name: "Email Builder Kéo Thả", tag: "Template", desc: "Tạo email thẩm mỹ cao mà không cần viết HTML thủ công." },
  { id: "ai-training", name: "AI Knowledge Training", tag: "RAG Vector", desc: "Huấn luyện AI từ PDF bảng giá, chính sách bán hàng và kịch bản tư vấn." },
  { id: "ai-space", name: "AI Space Đa Phòng Ban", tag: "Trợ lý AI", desc: "Không gian AI riêng biệt cho Marketing, Sale, Học vụ và Ban Giám Đốc." },
  { id: "voucher-hub", name: "Voucher Hub Real-Time", tag: "Khuyến mãi", desc: "Phát hành mã ưu đãi duy nhất gắn với từng Lead để kích thích chốt cọc." },
  { id: "survey-builder", name: "Survey Builder & Lead Score", tag: "Khảo sát", desc: "Thu thập nhu cầu tài chính và tự động cộng/trừ điểm tiềm năng." },
  { id: "qr-tracking", name: "QR Code Offline Tracking", tag: "O2O Bridge", desc: "Gắn QR thông minh lên Standee, Tờ gập, Phướn để đo lượng quét về Web." },
  { id: "zalo-connect", name: "Zalo OA & ZaloBot Connect", tag: "Nhắn tin", desc: "Tích hợp ZNS, cảnh báo đơn mới và phân công chăm sóc tự động trên Zalo." },
  { id: "meta-api", name: "Meta Ads API Reporting", tag: "Dashboard", desc: "Kéo dữ liệu quảng cáo trực tiếp từ Graph API phục vụ báo cáo minh bạch." },
  { id: "web-tracking", name: "Website Behavior Tracking", tag: "Pixel", desc: "Ghi nhận hành trình người dùng xem căn hộ, bảng giá, sơ đồ 3D." },
  { id: "audiences", name: "Smart Audience Segments", tag: "Tệp khách", desc: "Phân loại tệp khách tự động theo hành vi, nguồn Ads và lịch sử mua." },
  { id: "analytics", name: "Executive BI Analytics", tag: "Phân tích", desc: "Báo cáo tổng thể từ Spend -> Lead -> Thiện chí -> Booking -> Doanh thu." },
  { id: "api-triggers", name: "Webhook & API Triggers", tag: "Kết nối", desc: "Mở cổng Webhook kết nối mượt mà Google Sheets, WordPress, Pancake, Kiốt." },
  { id: "web-design", name: "Thiết Kế Web & 3D Landing", tag: "Production", desc: "Xây dựng website thương hiệu Quiet Luxury, tối ưu Core Web Vitals & SEO." },
  { id: "erp-suite", name: "DOMATION ERP 5.0 Suite", tag: "Vận hành", desc: "12 phân hệ quản trị hợp đồng, chấm công GPS AI Selfie & tính lương tự động." }
];

export interface DomationClientSite {
  name: string;
  url: string;
  desc: string;
  img: string;
  tag: string;
}

export const DOMATION_CLIENT_SITES: DomationClientSite[] = [
  { name: "EcoLife Signature AI & Web", url: "https://ai.ecolifesignature.vn/", desc: "Trợ lý AI Sales Portal + Landing Page chuẩn Quiet Luxury & 3D Bóc mái căn hộ.", img: "/assets/ecolife/TO_GAP_2_MAT_ONLINE_WEBSITE_BO_TRI_HOP_LY.webp", tag: "BĐS • Quiet Luxury & AI" },
  { name: "Nava Store E-Commerce", url: "https://navastore.vn/", desc: "Nền tảng thương mại điện tử tối ưu tỷ lệ chuyển đổi, tích hợp Tracking hành vi & giỏ hàng nhanh.", img: "/assets/domation/clients/nava.webp", tag: "E-Commerce • Retail" },
  { name: "IDEAS MBA Executive", url: "https://ideas.edu.vn/mba", desc: "Landing Page tuyển sinh chương trình Thạc sĩ Quản trị Kinh doanh Quốc tế chuẩn châu Âu.", img: "/assets/domation/clients/ideasmba.webp", tag: "Giáo dục • MBA Quốc tế" },
  { name: "Brandson Agency", url: "https://domation.net", desc: "Website giới thiệu năng lực sáng tạo thương hiệu & chuyển đổi số tối giản hiện đại.", img: "/assets/domation/clients/brandson.webp", tag: "Branding & Creative" },
  { name: "Flora Botanical", url: "https://domation.net", desc: "Trải nghiệm mua sắm lifestyle tinh tế với bảng màu organic và cấu trúc kể chuyện sản phẩm.", img: "/assets/domation/clients/flora.webp", tag: "Lifestyle & Beauty" },
  { name: "Portfolio & Case Archive", url: "https://portfo-turnio.vercel.app/", desc: "Hệ thống lưu trữ hồ sơ năng lực, trực quan hóa số liệu tăng trưởng và dự án thực chiến.", img: "/assets/domation/clients/portfolio.webp", tag: "Executive Profile" },
];

export const DOMATION_SAAS_PLANS = [
  {
    name: "Starter",
    badge: "KHỞI ĐỘNG TỰ ĐỘNG HÓA",
    monthly: "2.990.000₫",
    yearly: "30.498.000₫",
    desc: "Phù hợp doanh nghiệp SME, đội nhóm Marketing cần hệ thống Email, Tracking & AI trực Zalo cơ bản.",
    popular: false,
    features: [
      "100.000 Email / tháng + Template Pro",
      "AI Phân tích chỉ số chiến dịch",
      "Flow Automation (5 Kịch bản chủ lực)",
      "Website Behavior Tracking Tiêu Chuẩn",
      "AI trực Zalo ZNS & Messenger 24/7"
    ]
  },
  {
    name: "Growth",
    badge: "PHỔ BIẾN NHẤT • DOANH NGHIỆP",
    monthly: "4.990.000₫",
    yearly: "50.898.000₫",
    desc: "Giải pháp hoàn chỉnh cho Chủ đầu tư BĐS, Sàn F1, Chuỗi Giáo dục với Auto Chia Data & AI Lead Score.",
    popular: true,
    features: [
      "500.000 Email / tháng + SMTP Riêng",
      "AI Chatbot Tư Động 24/7 Huấn Luyện PDF",
      "AI Lead Score & Auto Chia Data ZaloBot",
      "Trình Tạo Flow Trực Quan Không Giới Hạn",
      "Bản Đồ Tracking Heatmap Website",
      "100+ Template Kéo Thả Cao Cấp"
    ]
  },
  {
    name: "Enterprise",
    badge: "MAY ĐO THEO TẬP ĐOÀN",
    monthly: "Liên hệ",
    yearly: "Triển khai Độc quyền",
    desc: "Dành cho Tập đoàn đa chi nhánh cần toàn bộ ERP 5.0, CRM Chia số CAPI & Server riêng.",
    popular: false,
    features: [
      "Email & Lưu lượng Chia Data Không Giới Hạn",
      "AI Phòng Ban Không Giới Hạn (RAG + Voice)",
      "Auto Meta CAPI + API Sâu & Webhook 2 Chiều",
      "Private Server, Row-Level Security & SLA 99.9%"
    ]
  }
];

export const DOMATION_WEB_MODULES = [
  { id: "uiux", name: "Thiết kế UI/UX Độc quyền (Desktop & Mobile)", price: 2500000 },
  { id: "home", name: "Trang Chủ Chuẩn Storytelling & Brand Motion", price: 1500000 },
  { id: "about", name: "Trang Giới Thiệu Tập Đoàn / Hồ Sơ Năng Lực", price: 1000000 },
  { id: "products", name: "Trang Sản Phẩm / Bảng Hàng / Bộ Sưu Tập", price: 2500000 },
  { id: "branches", name: "Trang Điểm Bán / Sàn Phân Phối / Bản Đồ", price: 1500000 },
  { id: "news", name: "Trang Cẩm Nang, Tin Tức & Tuyển Dụng", price: 1000000 },
  { id: "cta", name: "Module Tương Tác, Form Booking & Chuyển Đổi", price: 500000 },
  { id: "seo", name: "Quản Trị WordPress/NextJS + SEO Kỹ Thuật + Hosting", price: 1500000 },
];

export const DOMATION_WEB_ADDONS = [
  { id: "sales", name: "Bán hàng, Giỏ hàng & Đặt cọc Online", price: 3500000, desc: "Quản lý sản phẩm, giỏ hàng, tracking đơn hàng chi tiết." },
  { id: "payment", name: "Cổng Thanh Toán Tự Động (VNPay / Momo / VietQR)", price: 2000000, desc: "Đối soát giao dịch và gạch nợ tự động tức thì." },
  { id: "users", name: "Hệ thống Thành viên / Đại lý / Cộng tác viên", price: 2500000, desc: "Phân quyền đăng nhập, cấp bậc tài khoản và lịch sử." },
  { id: "crmErp", name: "Tích hợp DOMATION CRM & Auto Chia Data ZaloBot", price: 10000000, desc: "Đồng bộ Form về CRM, chia đại lý F1 & bắn Meta CAPI." },
  { id: "multilingual", name: "Hệ thống Đa ngôn ngữ Quốc tế (VI / EN / KR / JP)", price: 18623610, desc: "Chuyển đổi ngôn ngữ mượt mà với cấu trúc URL chuẩn SEO." },
  { id: "automation", name: "Chuỗi Email / Zalo ZNS Nuôi Dưỡng Tự Động", price: 8911600, desc: "Gửi tài liệu, voucher và kịch bản bám đuổi khách xem web." },
  { id: "elearning", name: "Hệ thống Đào Tạo Sale & E-Learning Nội Bộ", price: 4344610, desc: "Quản lý học phần, bài thi sát hạch sản phẩm cho Sale." },
];

/* ============================================================================
   ECOLIFE SIGNATURE: 3D BÓC MÁI (8 CĂN) & BỘ ẤN PHẨM OFFLINE / OOH ĐÃ NÉN
   ============================================================================ */

export interface EcoLife3DUnitItem {
  code: string;
  area: string;
  spec: string;
  highlight: string;
  image: string;
  url: string;
}

export const ECOLIFE_3D_UNITS: EcoLife3DUnitItem[] = [
  { code: "Căn A1", area: "66,0 m²", spec: "2PN • 2WC", highlight: "Căn 2PN Điển Hình • Bàn Ăn Tròn Japandi", image: "/assets/ecolife/bocmai/bocmai_3d_a1.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn A2", area: "68,9 m²", spec: "2PN • 2WC", highlight: "Căn 2PN Tối Ưu • Bếp Đá Calacatta", image: "/assets/ecolife/bocmai/bocmai_3d_a2.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn B1", area: "77,8 m²", spec: "2PN+ • 2WC", highlight: "Căn Góc Đầu Hồi • Đảo Bếp Vát Góc", image: "/assets/ecolife/bocmai/bocmai_3d_b1.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn B2", area: "87,3 m²", spec: "3PN • 2WC", highlight: "Căn Góc Panorama • Lô Gia Đôi", image: "/assets/ecolife/bocmai/bocmai_3d_b2.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn B6", area: "87,1 m²", spec: "3PN • 3WC", highlight: "Căn Góc Xanh Dual Key • Tối Đa Ánh Sáng", image: "/assets/ecolife/bocmai/bocmai_3d_b6.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn B3", area: "88,8 m²", spec: "3PN • 2WC", highlight: "Căn Góc Đa Giác Độc Bản • View Vịnh", image: "/assets/ecolife/bocmai/bocmai_3d_b3.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn B5", area: "99,4 m²", spec: "3PN • 2WC", highlight: "Biên Độ Không Gian Rộng • Phòng Khách Lớn", image: "/assets/ecolife/bocmai/bocmai_3d_b5.webp", url: "https://ecolifesignature.vn/3d/" },
  { code: "Căn B4", area: "101,8 m²", spec: "3PN • 2WC", highlight: "Đại Căn Hộ 3 Mặt Thoáng Chuẩn Dinh Thự", image: "/assets/ecolife/bocmai/bocmai_3d_b4.webp", url: "https://ecolifesignature.vn/3d/" },
];

export type OfflinePrintCategory = 'all' | 'togap-toroi' | 'catalog-noithat' | 'phuon-standee' | 'hoarding';

export interface OfflineDeliverableItem {
  id: string;
  category: Exclude<OfflinePrintCategory, 'all'>;
  categoryLabel: string;
  title: string;
  spec: string;
  image: string;
}

export const ECOLIFE_OFFLINE_PRINT_OOH: OfflineDeliverableItem[] = [
  {
    id: "og-1",
    category: "togap-toroi",
    categoryLabel: "Tờ gập 7×7 & Tờ rời",
    title: "Mockup 3D Tờ Gập Accordion A5 (Bản In Thực Tế)",
    spec: "14×21cm gập Z-Fold • Cán mờ mỹ thuật",
    image: "/assets/ecolife/offline/to_gap_mockup_3d.webp"
  },
  {
    id: "og-2",
    category: "togap-toroi",
    categoryLabel: "Tờ gập 7×7 & Tờ rời",
    title: "Tờ Gập 7 Cánh Mặt Trước — Tổng Quan & Vịnh Biển",
    spec: "Layout ngang 98×21cm • In 4 màu CMYK",
    image: "/assets/ecolife/offline/to_gap_7x7_mat_truoc.webp"
  },
  {
    id: "og-3",
    category: "togap-toroi",
    categoryLabel: "Tờ gập 7×7 & Tờ rời",
    title: "Tờ Gập 7 Cánh Mặt Sau — Trọn Bộ 9 Mặt Bằng 3D",
    spec: "Đồng bộ mặt bằng tầng & căn hộ bóc mái",
    image: "/assets/ecolife/offline/to_gap_7x7_mat_sau.webp"
  },
  {
    id: "og-4",
    category: "togap-toroi",
    categoryLabel: "Tờ gập 7×7 & Tờ rời",
    title: "Tờ Rời A5 Chính Chủ Đầu Tư (Mặt Trước)",
    spec: "Khổ A5 phát sự kiện & sa bàn",
    image: "/assets/ecolife/offline/to_roi_a5_mat_truoc.webp"
  },
  {
    id: "og-5",
    category: "togap-toroi",
    categoryLabel: "Tờ gập 7×7 & Tờ rời",
    title: "Tờ Rời A5 Chính Chủ Đầu Tư (Mặt Sau Chính Sách)",
    spec: "QR Code dẫn về AI Assistant & Web 3D",
    image: "/assets/ecolife/offline/to_roi_a5_mat_sau.webp"
  },
  {
    id: "cat-1",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Bìa Bộ Sưu Tập Căn Hộ & Tiêu Chuẩn Nội Thất",
    spec: "Quiet Luxury Japandi & Emerald Edition",
    image: "/assets/ecolife/offline/catalog_noithat_bia.webp"
  },
  {
    id: "cat-2",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Brochure 16 Trang — Bìa Đầu EcoLife Signature",
    spec: "Bìa cứng ép kim vàng Champagne",
    image: "/assets/ecolife/offline/brochure_bia_dau.webp"
  },
  {
    id: "cat-3",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Catalog Căn Hộ 2PN CH-A1 (66,0 m²)",
    spec: "Phối cảnh phòng khách, phòng ngủ & thông số",
    image: "/assets/ecolife/offline/catalog_can_a1_66m2.webp"
  },
  {
    id: "cat-4",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Catalog Căn Góc CH-B1 (77,8 m²) & CH-B2 (87,3 m²)",
    spec: "Hệ bếp chữ L & lô gia đón gió Vịnh",
    image: "/assets/ecolife/offline/catalog_can_b1_77m2.webp"
  },
  {
    id: "cat-5",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Catalog Căn Góc Đa Giác CH-B3 (88,8 m²)",
    spec: "Thiết kế góc panorama không gian mở",
    image: "/assets/ecolife/offline/catalog_can_b3_88m2.webp"
  },
  {
    id: "cat-6",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Catalog Dinh Thự Penthouse Duplex (Tầng 16–17)",
    spec: "Sản phẩm giới hạn dành riêng cho giới tinh hoa",
    image: "/assets/ecolife/offline/catalog_penthouse_16_17.webp"
  },
  {
    id: "cat-7",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Catalog Nội Thất Chuyên Sâu (Trang 1 — Material Board)",
    spec: "Bảng vật liệu bàn giao đá Marble & gỗ Japandi",
    image: "/assets/ecolife/offline/brochure_noithat_p1.webp"
  },
  {
    id: "cat-8",
    category: "catalog-noithat",
    categoryLabel: "Catalog Nội thất & Brochure",
    title: "Catalog Nội Thất Chuyên Sâu (Trang 2 — Living & Kitchen)",
    spec: "Không gian sinh hoạt chuẩn Quiet Luxury",
    image: "/assets/ecolife/offline/brochure_noithat_p2.webp"
  },
  {
    id: "ooh-1",
    category: "phuon-standee",
    categoryLabel: "Phướn & Standee",
    title: "Phướn Dọc Nền Xanh Emerald — Logo Vàng Kim",
    spec: "Khổ 0.8×2.0m • Treo trục đường Đà Nẵng",
    image: "/assets/ecolife/offline/phuon_nen_xanh_gold.webp"
  },
  {
    id: "ooh-2",
    category: "phuon-standee",
    categoryLabel: "Phướn & Standee",
    title: "Phướn Dọc Nền Sáng Ngọc Trai — Quiet Luxury",
    spec: "Khổ 0.8×2.0m • Phiên bản ánh sáng ban ngày",
    image: "/assets/ecolife/offline/phuon_ngoc_trai.webp"
  },
  {
    id: "ooh-3",
    category: "phuon-standee",
    categoryLabel: "Phướn & Standee",
    title: "Standee 1A — Tổng Quan Chứng Chỉ Xanh EDGE Quốc Tế",
    spec: "Khổ 0.8×1.8m • Đặt tại Sales Gallery & Sàn F1",
    image: "/assets/ecolife/offline/standee_1a_edge.webp"
  },
  {
    id: "ooh-4",
    category: "phuon-standee",
    categoryLabel: "Phướn & Standee",
    title: "Standee 1B — Chính Sách Bán Hàng & 5 Ngân Hàng",
    spec: "Khổ 0.8×1.8m • Cập nhật chính sách đợt 1",
    image: "/assets/ecolife/offline/standee_1b_chinhsach.webp"
  },
  {
    id: "hr-0",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Toàn Cảnh Dải Panorama Hoarding Bản Cũ (36m × 2.2m — 6 Module)",
    spec: "Phiên bản liên hoàn 6 tấm 6×2.2m tại công trường",
    image: "/assets/ecolife/offline/hoarding_cu_36x22_panorama.webp"
  },
  {
    id: "hr-1",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Bản Cũ — Module 01: Bình Minh Vịnh Biển (6×2.2m)",
    spec: "Khổ bạt in thực tế 600×220cm 300DPI",
    image: "/assets/ecolife/offline/hoarding_cu_m1.webp"
  },
  {
    id: "hr-2",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Bản Cũ — Module 02: Chuẩn Xanh Quốc Tế EDGE (6×2.2m)",
    spec: "Nhấn mạnh giá trị tiết kiệm năng lượng IFC EDGE",
    image: "/assets/ecolife/offline/hoarding_cu_m2.webp"
  },
  {
    id: "hr-3",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Bản Cũ — Module 03: 220m Tới Hồ Sinh Thái (6×2.2m)",
    spec: "Kết nối vị trí kim cương & cảnh quan Bàu Tràm",
    image: "/assets/ecolife/offline/hoarding_cu_m3.webp"
  },
  {
    id: "hr-4",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Bản Cũ — Module 04: Đặc Quyền Sống Xanh (6×2.2m)",
    spec: "Công bố chính sách & đặc quyền cư dân",
    image: "/assets/ecolife/offline/hoarding_cu_m4.webp"
  },
  {
    id: "hr-5",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Bản Cũ — Module 05: 8 Mẫu Bóc Mái 3D & Công Thái Học",
    spec: "Trưng bày hệ căn hộ tối ưu công năng",
    image: "/assets/ecolife/offline/hoarding_cu_m5.webp"
  },
  {
    id: "hr-6",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Bản Cũ — Module 06: CĐT Capital House & An Cư Bền Vững",
    spec: "Tòa tháp ban ngày & hệ đối tác tài chính",
    image: "/assets/ecolife/offline/hoarding_cu_m6.webp"
  },
  {
    id: "hr-new",
    category: "hoarding",
    categoryLabel: "Hoarding Hàng Rào Công Trình",
    title: "Hoarding Nâng Cấp — Tổng Thể 5 Module (30m × 2.5m)",
    spec: "Bản chuẩn hóa 5 tấm lớn kèm Logo CĐT & 3 Đại lý F1",
    image: "/assets/ecolife/offline/hoarding_moi_5_module.webp"
  }
];

