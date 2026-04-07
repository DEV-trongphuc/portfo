

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

// LOGO URL CONSTANT
export const BRAND_LOGO = "https://ampersand-reports-dom.netlify.app/DOM-img/DOM_LOGO.png";

export const SOCIALS = [
  { name: 'Facebook', icon: <Facebook size={18} />, url: 'https://facebook.com' },
  { name: 'YouTube', icon: <Youtube size={18} />, url: 'https://youtube.com' },
  { name: 'TikTok', icon: <span className="font-bold text-[10px]">TIKTOK</span>, url: 'https://tiktok.com' },
  { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://linkedin.com' },
];

export const STATS = [
  { label: 'TikTok Coding Subs', value: '11', suffix: 'K' },
  { label: 'Monthly Budget', value: '500', suffix: 'M' },
  { label: 'ROAS Average', value: '4.8', suffix: 'x' },
  { label: 'Leads Generated', value: '150', suffix: 'K+' },
];

export const TECH_GRID = [
  // DEV & AUTOMATION
  { title: 'ReactJS / NextJS', category: 'dev', desc: 'Frontend UI/UX', icon: <Code className="text-blue-400" />, color: 'from-blue-500/20' },
  { title: 'NodeJS Backend', category: 'dev', desc: 'API Middleware', icon: <Cpu className="text-green-400" />, color: 'from-green-500/20' },
  { title: 'Google Apps Script', category: 'dev', desc: 'Sheet Automation', icon: <Terminal className="text-yellow-400" />, color: 'from-yellow-500/20' },
  { title: 'Zalo Mini App', category: 'dev', desc: 'Zalo Ecosystem', icon: <MonitorSmartphone className="text-sky-400" />, color: 'from-sky-500/20' },
  
  // MARKETING & DATA
  { title: 'Meta Ads API', category: 'martech', desc: 'Automated Ads', icon: <Database className="text-purple-400" />, color: 'from-purple-500/20' },
  { title: 'Data Tracking', category: 'martech', desc: 'GTM / GA4 Server', icon: <BarChart3 className="text-orange-400" />, color: 'from-orange-500/20' },
  { title: 'Automation Flow', category: 'martech', desc: 'Zapier / n8n', icon: <Zap className="text-red-400" />, color: 'from-red-500/20' },
  { title: 'SEO Architecture', category: 'martech', desc: 'Technical SEO', icon: <SearchCode className="text-emerald-400" />, color: 'from-emerald-500/20' },
];

export const BRIDGE_CARDS = [
  { 
    step: '01', 
    title: 'Ads Acquisition', 
    desc: 'Tối ưu Meta & Google Ads với tư duy Marketing bền vững, tập trung vào Lead chất lượng cao.',
    icon: <Megaphone className="text-gold-500" />
  },
  { 
    step: '02', 
    title: 'Data Automation', 
    desc: 'Dùng Google Apps Script & API tự động đẩy Leads về CRM (MISA, Salesforce) trong < 5s.',
    icon: <Zap className="text-blue-400" />
  },
  { 
    step: '03', 
    title: 'Real-time Report', 
    desc: 'Xây dựng Dashboard theo dõi ROAS, CAC, và tỷ lệ chốt của Sale ngay lập tức.',
    icon: <Layers className="text-green-400" />
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

export const OUTSOURCE_HIGHLIGHTS: OutsourceHighlight[] = [
  {
    company: 'IDEAS Institute',
    result: '12600+ Leads',
    cost: '+300% doanh số',
    impact: '-30% Chi phí',
    tags: ['Education', 'FB Lead Ads'],
    description: 'Viết bài content, thiết kế hình ảnh, video, lập trình website, zalo app, mini game và các nhận diện khác để đẩy mạnh các quảng cáo Social thu về Leads đưa cho tư vấn viên gọi. Thay đổi hoàn toàn cách thức chạy Messenger thu lead hoạt động hơn 10 năm sang dạng Lead form để scale up ngân sách. <br/> Kết quả trung bình Lead học thạc sĩ 5 leads/ngày -> 20 leads/ngày <br/> Học viên/khóa 20 -> 60/khóa <br/> Chi phí trên mỗi học viên giảm từ 18 -> 12 - 14tr.',
    status: 'success'
  },
  {
    company: 'Phúc Lộc Thọ',
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
  { name: 'Duyên Mai', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed.jpg', website: '#', industry: 'Fashion / Retail' },
  { name: 'Cowboy Steak', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed.png', website: '#', industry: 'FNB / Restaurant' },
  { name: 'En Group', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(1).jpg', website: '#', industry: 'FNB / Holdings' },
  { name: 'Abiru-EN', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(13).jpg', website: '#', industry: 'FNB / Restaurant' },
  { name: 'KA-EN', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(2).jpg', website: '#', industry: 'FNB / Restaurant' },
  { name: 'Haagen Dazs', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(3).jpg', website: '#', industry: 'FNB / Dessert' },
  { name: 'BEAN', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(4).jpg', website: '#', industry: 'FNB / Cafe' },
  { name: 'The Running Bean', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(6).jpg', website: '#', industry: 'FNB / Cafe' },
  { name: 'Esta Saigon', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(14).jpg', website: '#', industry: 'FNB / Restaurant' },
  { name: 'Le Petit', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(7).jpg', website: '#', industry: 'FNB / Bistro' },
  { name: 'Snowee', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(8).jpg', website: '#', industry: 'FNB / Dessert' },
  { name: 'An Ninh Tiên Hoàng', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(9).jpg', website: '#', industry: 'Security Service' },
  { name: 'Ascencia', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(1).png', website: '#', industry: 'Education / Finance' },
  { name: 'VTCI Edu', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(11).jpg', website: '#', industry: 'Education / Training' },
  { name: 'College de Paris', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(12).jpg', website: '#', industry: 'Education / University' },
  { name: 'Swiss UMEF', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(15).jpg', website: '#', industry: 'Education / University' },
  { name: 'IDEAS Institute', image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/brand/unnamed%20(10).jpg', website: '#', industry: 'Education / Research' }
];

export const EXPERIENCES: Experience[] = [
  { 
    id: '1', 
    role: 'Digital Marketing & Fullstack Deverloper', 
    company: 'IDEAS Institute', 
    period: '2023 - NOW', 
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
    description: 'Digital Marketing, học thêm các khóa học lập trình Fullstack', 
    type: 'education' 
  }
];

export const CERTIFICATIONS: Certification[] = [
    {
        id: 'c1',
        name: 'Front End Developer',
        issuer: 'Free Code Camp',
        year: '2021',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(2).jpg', 
        link: 'https://www.freecodecamp.org/certification/trongphuc3105/front-end-development-libraries'
    },
    {
        id: 'c2',
        name: 'Responsive Web Design',
        issuer: 'Free Code Camp',
        year: '2021',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(1).jpg',
        link: 'https://www.freecodecamp.org/certification/trongphuc3105/responsive-web-design'
    },
    
    {
        id: 'c4',
        name: 'JavaScript Advanced',
        issuer: 'Fullstack',
        year: '2022',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(4).png',
        link: 'https://f8.edu.vn/certificates/t7s3s'
    },
    {
        id: 'c5',
        name: 'JavaScript Basic',
        issuer: 'Fullstack',
        year: '2021',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(5).png',
        link: 'https://f8.edu.vn/certificates/fzmz5'
    },
    {
        id: 'c6',
        name: 'ReactJS',
        issuer: 'Fullstack',
        year: '2022',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(2).png',
        link: 'https://f8.edu.vn/certificates/7jzkn'
    },
    {
        id: 'c7',
        name: 'HTML/CSS',
        issuer: 'Fullstack',
        year: '2021',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(3).png',
        link: 'https://f8.edu.vn/certificates/t7s3s'
    },
    {
        id: 'c8',
        name: 'SEO - TOP CV',
        issuer: 'TOP CV',
        year: '2023',
        image: 'https://raw.githubusercontent.com/turniodev/TurnioSave/refs/heads/main/DEV_ASSET/cert/cert%20(7).png',
        link: 'https://certificate.testcenter.vn/dUR8UT0fMlcZNV9GVjE2bFN7SXU'
    },
    {
        id: 'c3',
        name: 'Javascript top 20%',
        issuer: 'TOP CV',
        year: '2023',
        image: 'https://i.ibb.co/MRs3sf3/JS.png',
        link: 'https://certificate.testcenter.vn/dUR8Uz0fMlcZNV9GVjE2bFN7SXU'
    },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'IDEAS Instittue',
    // Fix: Changed 'Education' to 'Marketing' to match the allowed types in Project interface.
    category: 'Marketing',
    client: 'IDEAS Instittue',
    purpose: 'Website giáo dục',
    description: 'SEO 5/10 từ khóa chính đạt vị trí cao nhất top 1 - duy trì 4-5 từ khóa ở trang nhất theo tháng',
    longDescription: '/',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ce7d02?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1280&q=80',
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
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
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
