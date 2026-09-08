import { Experience, Project, Certification, Partner, OutsourceHighlight } from './types';
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

// Brand logo
// @ts-ignore
import domLogo from './imgs/dom_logo.webp';

// Projects images
// @ts-ignore
import project1 from './imgs/project_1.webp';
// @ts-ignore
import project2 from './imgs/project_2.webp';
// @ts-ignore
import project3 from './imgs/project_3.webp';
// @ts-ignore
import project4 from './imgs/project_4.webp';
// @ts-ignore
import project5 from './imgs/project_5.webp';
// @ts-ignore
import project6 from './imgs/project_6.webp';
// @ts-ignore
import project7 from './imgs/project_7.webp';
// @ts-ignore
import project8 from './imgs/project_8.webp';

// Certifications images
// @ts-ignore
import cert1 from './imgs/cert_1.webp';
// @ts-ignore
import cert2 from './imgs/cert_2.webp';
// @ts-ignore
import cert3 from './imgs/cert_3.webp';
// @ts-ignore
import cert4 from './imgs/cert_4.webp';
// @ts-ignore
import cert5 from './imgs/cert_5.webp';
// @ts-ignore
import cert6 from './imgs/cert_6.webp';
// @ts-ignore
import cert7 from './imgs/cert_7.webp';
// @ts-ignore
import cert8 from './imgs/cert_8.webp';

// Partners logos
// @ts-ignore
import partnerPhucloctho from './imgs/partner_phucloctho.webp';
// @ts-ignore
import partnerDuyenmai from './imgs/partner_duyenmai.webp';
// @ts-ignore
import partnerCowboysteak from './imgs/partner_cowboysteak.webp';
// @ts-ignore
import partnerEngroup from './imgs/partner_engroup.webp';
// @ts-ignore
import partnerAbiruen from './imgs/partner_abiruen.webp';
// @ts-ignore
import partnerKaen from './imgs/partner_kaen.webp';
// @ts-ignore
import partnerHaagendazs from './imgs/partner_haagendazs.webp';
// @ts-ignore
import partnerBean from './imgs/partner_bean.webp';
// @ts-ignore
import partnerTherunningbean from './imgs/partner_therunningbean.webp';
// @ts-ignore
import partnerEstasaigon from './imgs/partner_estasaigon.webp';
// @ts-ignore
import partnerLepetit from './imgs/partner_lepetit.webp';
// @ts-ignore
import partnerSnowee from './imgs/partner_snowee.webp';
// @ts-ignore
import partnerAnninhtienhoang from './imgs/partner_anninhtienhoang.webp';
// @ts-ignore
import partnerAscencia from './imgs/partner_ascencia.webp';
// @ts-ignore
import partnerVtciedu from './imgs/partner_vtciedu.webp';
// @ts-ignore
import partnerCollegedeparis from './imgs/partner_collegedeparis.webp';
// @ts-ignore
import partnerSwissumef from './imgs/partner_swissumef.webp';
// @ts-ignore
import partnerIdeasinstitute from './imgs/partner_ideasinstitute.webp';
// @ts-ignore
import partnerNavastore from './imgs/partner_navastore.webp';
// @ts-ignore
import partnerFlora from './imgs/partner_flora.webp';
// @ts-ignore
import partnerBrandson from './imgs/partner_brandson.webp';
// @ts-ignore
import partnerAmpersand from './imgs/ampersand logo.jpg';
// @ts-ignore
import partnerImplantswiss from './imgs/partner_implantswiss.png';
// @ts-ignore
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
    icon: <Megaphone className="text-slate-500" />
  },
  { 
    step: '02', 
    title: 'Data Automation', 
    desc: 'Dùng Google Apps Script & API tự động đẩy Leads về CRM (MISA, Salesforce) trong < 5s.',
    icon: <Zap className="text-slate-500" />
  },
  { 
    step: '03', 
    title: 'Real-time Report', 
    desc: 'Xây dựng Dashboard theo dõi ROAS, CAC, và tỷ lệ chốt của Sale ngay lập tức.',
    icon: <Layers className="text-slate-500" />
  }
];

export const DOM_PROJECTS = [
  { 
    title: 'Realtime Meta Insights', 
    desc: 'Hệ thống tự động quét dữ liệu từ Facebook Ads Manager và hiển thị báo cáo chi tiết cho khách hàng.', 
    image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(21).jpg'
  },
  { 
    title: 'Report - CRM Connector', 
    desc: 'Kết nối đa kênh (Zalo, FB, Web) về hệ thống MISA, giúp quản lý 100% phễu khách hàng.', 
    image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(20).jpg'
  },
];

// @ts-ignore
import logoIdeas from './imgs/logo_ideas.webp';
// @ts-ignore
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
    result: '6 Brands',
    cost: 'Social Mng.',
    impact: 'Brand Awareness',
    tags: ['FnB', 'Content'],
    description: 'Quản lý ngân sách và chạy quảng cáo cho 6 thương hiệu F&B, tăng cường nhận diện thương hiệu và tương tác khách hàng.',
    status: 'success',
    logos: [
        { src: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(3).jpg', link: 'https://www.facebook.com/Haagendazs.com.vn' },
        { src: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(4).jpg' },
        { src: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(6).jpg', link: 'https://www.facebook.com/therunningbeansg' },
        { src: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(14).jpg', link: 'https://www.facebook.com/esta.saigon' },
        { src: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(7).jpg' },
        { src: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(8).jpg', link: 'https://www.facebook.com/snoweesg' }
    ]
  },
  {
    company: 'Web Order',
    result: 'ROAS 5+',
    cost: '5-7M Ads - 100M R/Month',
    impact: 'Phúc Lộc Thọ',
    tags: ['FnB', 'Website Order'],
    description: 'Chiến dịch Web Order vận hành có lợi nhuận ổn định nhưng gặp rào cản khi scale-up ngân sách. Nguyên nhân cốt lõi là sự thua thiệt về tính tiện lợi trong thanh toán mở rộng so với các siêu ứng dụng (GrabFood, ShopeeFood) và thiếu hụt các chương trình Promo mang tính mồi câu mạnh mẽ. Case study đúc kết ra bài học quan trọng về việc xây dựng lợi thế độc quyền (Exclusive Offers) để có thể thay đổi thói quen đặt hàng của user trên kênh Social.',
    status: 'success'
  },


];

export const PARTNERS: Partner[] = [
  { name: 'Phúc Lộc Thọ', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(5).jpg', website: 'https://phucloctho.vn', industry: 'FNB / Franchise' },
  { name: 'Duyên Mai', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed.jpg', website: 'https://duyenmai.vn', industry: 'Fashion / Retail' },
  { name: 'Cowboy Steak', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed.png', website: 'https://www.facebook.com/CowboySteakhouseVietnam/', industry: 'FNB / Restaurant' },
  { name: 'En Group', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(1).jpg', website: 'https://engroup.vn', industry: 'FNB / Holdings' },
  { name: 'Abiru-EN', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(13).jpg', website: 'https://ka-en.com.vn/', industry: 'FNB / Restaurant' },
  { name: 'KA-EN', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(2).jpg', website: 'https://ka-en.com.vn/', industry: 'FNB / Restaurant' },
  { name: 'Haagen Dazs', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(3).jpg', website: 'https://haagendazs.com.vn/', industry: 'FNB / Dessert' },
  { name: 'BEAN', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(4).jpg', website: 'https://therunningbean.com.vn/', industry: 'FNB / Cafe' },
  { name: 'The Running Bean', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(6).jpg', website: 'https://therunningbean.com.vn/', industry: 'FNB / Cafe' },
  { name: 'Esta Saigon', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(14).jpg', website: 'https://esta-saigon.com/', industry: 'FNB / Restaurant' },
  { name: 'Le Petit', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(7).jpg', website: 'https://lepetit.vn/', industry: 'FNB / Bistro' },
  { name: 'Snowee', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(8).jpg', website: 'https://snoweegelato.com/', industry: 'FNB / Dessert' },
  { name: 'An Ninh Tiên Hoàng', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(9).jpg', website: 'http://anninhtienhoang.com/', industry: 'Security Service' },
  { name: 'Ascencia', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(1).png', website: 'https://www.ascencia-business-school.com/', industry: 'Education / Finance' },
  { name: 'VTCI Edu', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(11).jpg', website: 'https://vtc.edu.vn/', industry: 'Education / Training' },
  { name: 'College de Paris', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(12).jpg', website: 'https://collegedeparis.vn/', industry: 'Education / University' },
  { name: 'Swiss UMEF', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(15).jpg', website: 'https://www.umef.ch/', industry: 'Education / University' },
  { name: 'IDEAS Institute', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(10).jpg', website: 'https://ideas.edu.vn/', industry: 'Education / Research' },
  { name: 'Navastore', image: 'https://bizweb.dktcdn.net/100/543/817/themes/1000289/assets/logo.png?1775454528082', website: 'https://navastore.vn/', industry: 'Retail / Ecommerce' },
  { name: 'Nha khoa Flora', image: 'https://nhakhoaflora.com/wp-content/uploads/2022/05/cropped-LOGO-FLORA1-3-192x192.png', website: 'https://nhakhoaflora.com', industry: 'Dental / Clinic' },
  { name: 'Brandson', image: 'https://brandson.vn/wp-content/uploads/2025/11/logo2.png', website: 'https://brandson.vn', industry: 'Branding / Agency' },
  { name: 'Ampersand', image: partnerAmpersand, website: 'https://www.ampersand.vn/', industry: 'FNB / Management' },
  { name: 'Implantswiss', image: partnerImplantswiss, website: 'https://implantswiss.vn/', industry: 'Dental / Implant' },
  { name: 'Richland', image: partnerRichland, website: 'https://rich-land.vercel.app/', industry: 'Real Estate / PropTech' }
];

export const EXPERIENCES: Experience[] = [
  { 
    id: '0', 
    role: 'CEO Founder', 
    company: 'DOMARKETING (DOMATION)', 
    period: '2024 - NOW', 
    description: 'Hệ thống Automation đa thông điệp đã sẵn sàng. Trải nghiệm sức mạnh tự động hóa vượt trội từ Email, Zalo, Meta & AI — Chạm đúng người, đúng thời điểm.', 
    type: 'work' 
  },
  { 
    id: '1', 
    role: 'Digital Marketing & Fullstack Deverloper', 
    company: 'IDEAS Institute', 
    period: '2023 - 2024', 
    description: 'Lập trình Web, Zalo App, minigame theo chiến dịch, tối ưu Website & SEO. Vận hành Google/FB Ads kèm hệ thống Báo cáo tự động Real-time. Tăng trưởng số lượng tuyển sinh Thạc sĩ MBA x3 so với năm 2022, giảm chi phí trên mỗi học viên từ 18tr -> 12-14 triệu', 
    type: 'work' 
  },
  { 
    id: '2', 
    role: 'Digital Marketing', 
    company: 'Le Gia ICT', 
    period: '2022 - 2023', 
    description: 'Chạy Ads Performance. Xây dựng hệ thống PBN, backlink kỹ thuật SEO năm 2022.', 
    type: 'work' 
  },
  { 
    id: '3', 
    role: 'Quản trị kinh doanh - Marketing', 
    company: 'Banking University HCMC', 
    period: '2019 - 2023', 
    description: 'Digital Marketing, học thêm các khóa học lập trình Fullstack tại Fullstack.edu.vn - F8', 
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
    result: '100k / Lead',
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
    logo: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed.jpg',
    result: 'Duy trì Reach',
    cost: 'Social Mng.',
    impact: 'Fashion Awareness',
    tags: ['Fashion', 'Retail'],
    description: 'Quản trị Fanpage, sản xuất hình ảnh lookbook sáng tạo hàng tháng và chạy quảng cáo nhận diện thương hiệu cho nhãn hàng thời trang Duyên Mai, nâng cao tỷ lệ khách hàng trung thành.',
    link: 'https://duyenmai.vn'
  },
  {
    company: 'Cowboy Steak',
    logo: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed.png',
    result: 'Duy trì Reach',
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
    id: 'nav_menu_1',
    src: '/ERP-Product/1788856691047_2141578413905312186_2310722037673454867_2dacee1206b6e8f836cdea82018d556e.jpg',
    title: 'Hệ thống Menu Điều hướng Nhanh (Phần 1)',
    category: 'Hệ thống & Cài đặt',
    tag: 'Navigation System',
    description: 'Điều hướng đa phân hệ: Lead một cửa, Databank, Giỏ hàng dự án, Đối tác liên kết, HRM, Phê duyệt và Cấu hình hệ thống.',
    highlight: 'Giao diện tối ưu công thái học UX/UI'
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
