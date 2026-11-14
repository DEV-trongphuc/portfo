// Deeply audited knowledge corpus across Huỳnh Trọng Phúc (TURNIO / Turnio DEV)'s
// portfolio, D:\GITHUB_SPACE repositories, D:\INKIACA, and D:\RICH_LAND_DATA_UI.
// Used to compute real vector embeddings (gemini-embedding-001) for genuine semantic RAG.

export const KNOWLEDGE_CORPUS = [
  {
    id: 'profile-identity-contact',
    category: 'Hồ Sơ Cá Nhân & Liên Hệ',
    title: 'Huỳnh Trọng Phúc (TURNIO / Turnio DEV) — Hồ sơ & Liên hệ',
    sectionId: 'hero',
    image: '/me.webp',
    url: 'https://www.linkedin.com/in/turnio-dev/',
    urlLabel: 'LinkedIn Turnio DEV',
    content: `Huỳnh Trọng Phúc (nghệ danh chuyên môn: TURNIO / Turnio DEV) là Fullstack Developer, Systems Architect & AI Automation Specialist, đồng thời là CEO & Founder của DOMARKETING (DOMATION). Anh sở hữu hơn 4 năm kinh nghiệm thực chiến (trừ thời gian đi học) giao thoa giữa Software Engineering, Hạ tầng Dữ liệu & AI Automation, và Performance Growth Marketing. Thống kê năng lực thực chiến: đã kiến trúc và bàn giao 35+ App, Web & AI Systems vận hành thực tế, đồng hành cùng 30+ doanh nghiệp đối tác (F&B, Bất động sản, Giáo dục, Nha khoa, Print-on-Demand, Bán lẻ, An ninh, Công nghệ), xử lý hơn 150,000+ leads thực tế, trực tiếp điều hành ngân sách quảng cáo đỉnh điểm 500 triệu VNĐ/tháng với mức ROAS bình quân toàn hệ thống 4.8x. Thông tin liên hệ hợp tác & tư vấn kiến trúc hệ thống: Email turniodev@gmail.com, LinkedIn https://www.linkedin.com/in/turnio-dev/, Portfolio chính thức https://portfo-turnio.vercel.app/.`,
  },
  {
    id: 'profile-philosophy-data-leak',
    category: 'Triết Lý Kiến Trúc & Kỹ Thuật',
    title: 'Triết lý Kỹ thuật: Chống Thất Thoát Dữ Liệu & Empirical Ground Truth',
    sectionId: 'data-philosophy',
    image: '/assets/domation/data_v2_overview.webp',
    content: `Triết lý thiết kế hệ thống của Turnio (Huỳnh Trọng Phúc) tập trung giải quyết bài toán cốt lõi của doanh nghiệp tăng trưởng: Marketing đổ tiền mang về Lead nhưng thất thoát ở khâu vận hành và đứt gãy tín hiệu đo lường. Anh kết nối khép kín 3 trụ cột: (1) Ads Acquisition bền vững trên Meta & Google Ads, (2) Data Automation tự động phân bổ Lead < 5 giây về Sale qua ZaloBot/Telegram/CRM kèm Backpressure SLA 2 phút chống ôm data, (3) Server-Side Tracking & Meta Conversion API (CAPI) HTTP 200 bắn ngược dữ liệu khách mua thật từ CRM về thuật toán quảng cáo để vượt qua rào cản mất pixel sau iOS 14+. Về kỷ luật lập trình AI & SaaS (Hiến chương AGENTS.md v2.0), anh áp dụng nguyên tắc Zero-Deceptive-Fallback (tuyệt đối không mock dữ liệu giả hay che giấu lỗi), Empirical Ground Truth (mọi kết luận phải kiểm chứng runtime & database thật), Fail-Closed Security và không hardcode nghiệp vụ.`,
  },
  {
    id: 'career-roadmap-timeline',
    category: 'Lộ Trình Sự Nghiệp',
    title: 'Lộ trình Phát triển 4 Giai đoạn (2019 — 2026+)',
    sectionId: 'experience',
    image: '/me.webp',
    content: `Sự nghiệp của Huỳnh Trọng Phúc phát triển qua 4 kỷ nguyên rõ nét:
- Giai đoạn 01 (2019–2022) Technical Foundation & Performance Execution: Học Quản trị Kinh doanh - Marketing tại Đại học Ngân hàng TP.HCM (BUH) song song tự học Fullstack tại F8 và hoàn thành 8 chứng chỉ quốc tế/chuyên môn; trực tiếp điều hành >1.2 tỷ VNĐ ngân sách Performance Ads cho chuỗi F&B; bàn giao hợp đồng 136.4M VNĐ cho VITRAC; xuất bản sách 154 trang "Facebook Ads: AI Chạy Không Được". Tại Le Gia ICT (2022–2023), triển khai hệ thống PBN, Technical SEO và Performance Ads.
- Giai đoạn 02 (2023–2024) MarTech Architecture & Router Development: Là Digital Marketing & Fullstack Developer tại Viện IDEAS, xây dựng Router DOMATION DATA chia lead < 5s, triển khai GTM Server-Side trên Cloudflare Workers (+30% độ chính xác), giúp IDEAS tăng +300% tuyển sinh MBA và mở rộng chuỗi Phúc Lộc Thọ 20+ cửa hàng (ROAS x5+).
- Giai đoạn 03 (2025–2026) CEO & Tổng thầu Hệ sinh thái: Sáng lập DOMATION (buồng lái 11 ứng dụng, Enterprise ERP 5.0 12 phân hệ), kiến trúc sư Fullstack nền tảng AI POD Studio INKICA (ai.inkica.com), tổng thầu số hóa 7 trụ cột dự án EcoLife Signature (Capital House) đạt đỉnh ROAS 8.2x, kiến trúc hệ thống ERP/CRM 100 thực thể cho RichLand (crm.richland.city).
- Giai đoạn 04 (2026+) Chiến lược B2B SaaS & Autonomous Agentic AI: Thương mại hóa đa ngành các nền tảng SaaS & mạng lưới AI Agents tự trị.`,
  },
  {
    id: 'education-and-8-certifications',
    category: 'Học Vấn & Chứng Chỉ',
    title: 'Học vấn Đại học Ngân hàng TP.HCM & 8 Chứng chỉ Xác thực',
    sectionId: 'certifications',
    image: '/me.webp',
    url: 'https://www.freecodecamp.org/certification/trongphuc3105/front-end-development-libraries',
    urlLabel: 'FreeCodeCamp Certification',
    content: `Về nền tảng học vấn, Huỳnh Trọng Phúc tốt nghiệp chuyên ngành Quản trị Kinh doanh - Marketing tại Đại học Ngân hàng TP.HCM (Banking University HCMC, 2019–2023) và học chuyên sâu lập trình Fullstack tại Fullstack.edu.vn (F8). Anh sở hữu 8 chứng chỉ chuyên môn được xác thực công khai: (1) FreeCodeCamp Front End Development Libraries (2021), (2) FreeCodeCamp Responsive Web Design (2021), (3) F8 HTML/CSS (2021), (4) F8 JavaScript Basic (2021), (5) F8 JavaScript Advanced (2022), (6) F8 ReactJS (2022), (7) TOP CV SEO Specialist (2023), và (8) TOP CV JavaScript Top 20% Percentile (2023). Sự kết hợp bài bản giữa nền tảng tài chính-marketing đại học và kỹ nghệ phần mềm giúp anh thiết kế được các hệ thống chạm đúng bài toán doanh thu thực tế.`,
  },
  {
    id: 'tech-stack-full-capabilities',
    category: 'Năng Lực Công Nghệ (Tech Stack)',
    title: 'Hệ sinh thái Công nghệ & Kỹ năng Fullstack / AI / Cloud',
    sectionId: 'experience',
    image: '/assets/domation/erp_16.webp',
    content: `Kỹ năng kỹ thuật toàn diện được chứng minh qua hơn 25 kho mã nguồn (repos) thực tế:
- Frontend & 3D WebGL: React 19, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Three.js ('three', 'three-gpu-pathtracer', 'three-mesh-bvh', 'xatlas-web'), Chart.js, Recharts, ApexCharts, Radix UI, Zustand, TanStack Query/Virtual, DnD Kit, PDF.js / pdf-lib, PptxGenJS, ExcelJS, Zalo Mini App SDK (ZaUI).
- Backend & Database: Node.js, NestJS (Prisma, BullMQ, ioredis, Swagger), PHP 8.2 MVC PDO (ACID Transactions, Multi-tenant RLS), Python / Flask, WordPress Custom Theme, MySQL 8 (InnoDB, 100+ entities ERD), PostgreSQL, Google Apps Script.
- AI, Computer Vision & Speech: Gemini API ('@google/genai', 'gemini-3.5-flash-lite', 'gemini-embedding-001'), ONNX Runtime Node ('onnxruntime-node') tự host 20+ models (SAM3, EfficientSAM, ViTMatte, Depth Anything V2, Swin2SR, MODNet), Ollama / vLLM / DeepSeek-R1 Local LLM, WhisperX, OmniVoice / CosyVoice3 TTS, ag-psd, sharp.
- Hạ tầng, AdTech & Automation: Cloudflare Workers, Google Tag Manager Server-Side, Meta Graph API v25.0 & Conversion API (CAPI), Google Ads API, MISA CRM API, AWS S3 / CloudFront / SES, Playwright Headless Video Rendering, ffmpeg, Zalo OA ZNS / ZaloBot / Telegram Bot / SeaPay / MoMo VietQR webhook.`,
  },
  {
    id: 'book-facebook-ads-ai',
    category: 'Sách Xuất Bản & Cộng Đồng',
    title: 'Tác giả sách "Facebook Ads: AI Chạy Không Được" (154 trang)',
    sectionId: 'book-spotlight',
    image: '/assets/apps/book_shelf.webp',
    url: 'https://drive.google.com/file/d/14BSjTQ699Z4tcMoCbqHYgjcdJjS5-Noh/view?usp=sharing',
    urlLabel: 'Đọc PDF Sách (154 trang)',
    content: `Huỳnh Trọng Phúc là tác giả cuốn sách chuyên môn "Facebook Ads: AI Chạy Không Được" dày 154 trang (được cộng đồng đánh giá 5.0★ với hơn 500+ doanh nghiệp và marketer tải đọc miễn phí, cùng kênh TikTok chia sẻ kiến thức 10.5K+ followers). Cuốn sách đúc kết 5 năm thực chiến đấu giá thầu Facebook Ads, phân tích vì sao tư duy thuật toán máy học của Meta phụ thuộc hoàn toàn vào chất lượng dữ liệu đầu vào (Signal Quality & CAPI), cách xây dựng cấu trúc tài khoản sạch, bảo vệ BM/tài khoản quảng cáo trước các đợt quét thuật toán và chiến lược tối ưu Creative trong kỷ nguyên quảng cáo AI.`,
  },
  {
    id: 'inkica-overview-platform',
    category: 'INKICA AI POD Studio',
    title: 'INKICA AI Tools (ai.inkica.com) — Tổng quan Nền tảng AI Prepress POD',
    sectionId: 'inkica-pod',
    image: '/assets/inkica/inkica_quick_mockup.jpg',
    url: 'https://ai.inkica.com/',
    urlLabel: 'Trải nghiệm INKICA AI',
    content: `INKICA AI Tools (https://ai.inkica.com, Backend API: https://ai-api.inkica.com) là nền tảng AI Prepress & 3D Studio chuyên sâu cho ngành Print-on-Demand (POD) và Thời trang, do Huỳnh Trọng Phúc trực tiếp kiến trúc & phát triển Fullstack từ 2025 đến nay. Hệ thống kết hợp Next.js Frontend (Three.js WebGL, '@google/genai', '@decartai/sdk', 'ag-psd', 'mp4-muxer', 'pdf-lib') với NestJS Backend ('Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'AWS S3/CloudFront', 'onnxruntime-node', 'sharp'). Mục tiêu của INKICA là tự động hóa hoàn toàn chuỗi sản xuất file in ấn và hình ảnh thương mại cho Seller POD từ lúc lên ý tưởng, tách hình in 300 DPI, bóc rập All-Over-Print cho tới render mockup người mẫu thật & video 4K.`,
  },
  {
    id: 'inkica-neural-extract-onnx',
    category: 'INKICA AI POD Studio',
    title: 'INKICA 300 DPI Neural Extract & Hệ thống 20+ Model ONNX Tự Host',
    sectionId: 'inkica-pod',
    image: '/assets/inkica/inkica_extract_dynamic.jpg',
    url: 'https://ai.inkica.com/',
    urlLabel: 'INKICA Extract Studio',
    content: `Trong phân hệ '/extract' và backend 'ai-tools-be' của INKICA, anh triển khai hơn 20 mô hình Computer Vision ONNX chạy qua 'onnxruntime-node' giúp tách hình in đạt chuẩn xuất xưởng 300 DPI PNG trong suốt (không viền trắng hay răng cưa) trực tiếp từ ảnh áo chụp thật bị nhăn hoặc dính phông nền. Pipeline kết hợp nhiều model chuyên biệt: 'efficientsam' / SAM 3, 'vitmatte' & 'vitmatte-small', 'boundary-matting', 'modnet', 'remove-bg', phục hồi chi tiết đồ họa ('graphic-restorer', 'inpainting'), nâng độ phân giải 2x-4x ('swin2sr-x2'), căn hướng & đọc chữ ('ocr-orientation'), đánh giá chất lượng điểm ảnh in ('print-quality-iqa'), và nhận diện trang phục ('apparel-intelligence', 'fashion-detector'). Hỗ trợ chuẩn in DTF, DTG và tự động áp artwork vừa tách lên hàng loạt phôi sản phẩm ('Dynamic Mockup' & 'Detect Blank').`,
  },
  {
    id: 'inkica-aop-3d-cad',
    category: 'INKICA AI POD Studio',
    title: 'INKICA AOP 3D Pattern Studio — 208 SKU, 88 Canonical Models & Bóc Rập .PSD Bezier',
    sectionId: 'inkica-pod',
    image: '/assets/inkica/inkica_aop_3d.jpg',
    url: 'https://ai.inkica.com/',
    urlLabel: 'INKICA AOP 3D Studio',
    content: `Phân hệ '/aop' và '/aop-3d-pro' của INKICA giải quyết bài toán khó nhất ngành may mặc in tràn toàn thân (All-Over-Print): căn khớp họa tiết xuyên đường may (Seam-Edge Alignment) đạt sai số **0 px lệch rập** trên **208 SKU AOP và 88 Canonical 3D Models**. Kiến trúc kỹ thuật sử dụng 'three', 'three-gpu-pathtracer', 'three-mesh-bvh', 'xatlas-web' (UV unwrapping), thư viện 'ag-psd' đọc và ghi lớp layer PSD chuẩn CAD với đường cắt Cubic Bezier SVG subparts, kết hợp AI ước lượng độ sâu và bề mặt vải ('depth-anything-v2-small', 'metric3d', 'fabric-normal', 'seam-edge'). Ngoài ra INKICA còn hỗ trợ xem trước Live 3D 4 góc xoay, đổi màu vải theo thời gian thực trên shader WebGL, tạo lưới **Halftone LPI** chuẩn in lụa/DTF ('/halftone'), và số hóa mẫu thêu xuất định dạng máy thêu công nghiệp **'.DST'** ('/embroidery').`,
  },
  {
    id: 'inkica-chat-orchestrator-sso',
    category: 'INKICA AI POD Studio',
    title: 'INKICA Chat Studio Omni-Agent Intelligence & Iframe S2S SSO',
    sectionId: 'inkica-pod',
    image: '/assets/inkica/inkica_orchestrator.jpg',
    url: 'https://ai.inkica.com/',
    urlLabel: 'INKICA Chat Studio',
    content: `INKICA Chat Studio tích hợp **6+ AI Prepress Agents trong một khung chat duy nhất** để điều phối thông minh các workflow: 'auto', 'extract', 'redesign', 'mockup', 'embroidery', 'halftone', 'upscale', 'remove_bg'. Agent xử lý cả Reverse Prompting (dán ảnh áo bất kỳ để trích xuất prompt hoặc đọc chữ OCR + bảng mã Hex mà không trừ oan credit với chế độ 'answer_only'), tự động chaining nhiều bước sinh ảnh/tách nền/lên mockup hàng loạt và nhận diện phôi trống ('Detect Blank & Templates'). Về tích hợp doanh nghiệp, anh thiết kế kiến trúc Iframe & S2S API ('POST /api/v1/external/chat-launch-link') với mã single-use 60s SSO, đồng bộ 2 chiều qua 'postMessage', tự khởi tạo ví +100 Credits cho Seller mới, kiểm soát atomic credit ledger và cơ chế Anti-Zombie worker heartbeat.`,
  },
  {
    id: 'inkica-templates-quick-mockup',
    category: 'INKICA AI POD Studio',
    title: 'INKICA Quick Mockup Studio & Detect Blank Library',
    sectionId: 'inkica-pod',
    image: '/assets/inkica/inkica_template_mockup.jpg',
    url: 'https://ai.inkica.com/',
    urlLabel: 'INKICA Quick Mockup',
    content: `Tính năng Quick Mockup & Detect Blank của INKICA cho phép Seller upload ảnh sản phẩm mẫu hoặc phôi trống, AI tự động phát hiện vùng in, nếp nhăn vải, ánh sáng và độ nghiêng ('pose' + 'depth' + 'normal map') để áp thiết kế 2D thành mockup người mẫu thật đa màu vải với tốc độ cao. Hỗ trợ đồng bộ collection cá nhân, áp dụng cấu hình đồng loạt (Apply to All Cards), xuất ảnh độ phân giải cao/4K và video sản phẩm trực tiếp trên nền tảng web.`,
  },
  {
    id: 'ecolife-overview-7-pillars',
    category: 'Dự Án Bất Động Sản EcoLife Signature',
    title: 'EcoLife Signature (Capital House) — Tổng thầu Digital & AI 7 Trụ cột',
    sectionId: 'real-estate',
    image: '/assets/ecolife/FACADE_HUONG_CHINH_03.webp',
    url: 'https://ecolifesignature.vn/',
    urlLabel: 'Website EcoLife Signature',
    content: `Tại dự án căn hộ xanh cao cấp EcoLife Signature Đà Nẵng của Tập đoàn Capital House (quy mô 376 căn hộ, đạt chứng chỉ xanh quốc tế IFC EDGE, cách hồ sinh thái Bàu Tràm 220m), Huỳnh Trọng Phúc đảm nhiệm vai trò Tổng thầu Digital Marketing & AI Automation (09/2026–nay). Anh trực tiếp thiết kế và bàn giao đồng bộ **7 trụ cột chuyển đổi số**: (1) Website chính thức phong cách Quiet Luxury (ecolifesignature.vn), (2) Website Sa bàn 3D WebGL Three.js nhập vai 8 mẫu căn hộ (ecolifesignature.vn/3d/), (3) Trợ lý AI Sales Assistant Portal (ai.ecolifesignature.vn), (4) Hệ thống Auto Chia Số < 5 giây qua ZaloBot cho 3 đại lý F1 & đồng bộ Meta CAPI, (5) Phim dự án 4K Flycam & TVC 3D, (6) Trọn bộ 25+ ấn phẩm Offline & OOH công trường 300 DPI, (7) Đào tạo đội ngũ Sales 4 học phần. Chiến dịch quảng cáo đạt đỉnh hiệu suất kỷ lục **ROAS 8.2x**.`,
  },
  {
    id: 'ecolife-3d-webgl-units',
    category: 'Dự Án Bất Động Sản EcoLife Signature',
    title: 'EcoLife 3D WebGL (ecolifesignature.vn/3d) — Bóc mái 360° cho 8 Mẫu Căn Hộ',
    sectionId: 'real-estate',
    image: '/assets/ecolife/bocmai/bocmai_3d_a1.webp',
    url: 'https://ecolifesignature.vn/3d/',
    urlLabel: 'Trải nghiệm Web 3D EcoLife',
    content: `Trải nghiệm Sa bàn ảo & Web 3D Three.js tại https://ecolifesignature.vn/3d/ cho phép khách hàng mua nhà và môi giới di chuyển nhập vai 360° vào từng phòng (phòng khách, bếp, logia, phòng ngủ master) được dựng đúng vật liệu bàn giao thực tế. Hệ thống bóc mái 3D bao phủ 8 mẫu căn hộ điển hình: Căn A1 (2PN — 66m²), Căn A2 (2PN — 68.9m²), Căn Góc B1 (2PN — 77.8m²), Căn B2 (2PN+ — 87.3m²), Căn B6 (3PN — 87.1m²), Căn Góc B3 (3PN — 88.8m²) cùng các mẫu B4, B5 và mặt bằng tầng trệt/tầng mái CAD. Giải pháp 3D Web chạy mượt ngay trên trình duyệt mobile & PC giúp khách hàng ở xa ra quyết định nhanh hơn rõ rệt.`,
  },
  {
    id: 'ecolife-ai-portal-and-f1-crm',
    category: 'Dự Án Bất Động Sản EcoLife Signature',
    title: 'EcoLife AI Sales Portal (ai.ecolifesignature.vn) & Auto Chia Số 3 Sàn F1',
    sectionId: 'real-estate',
    image: '/assets/ecolife/ecolife_official_live.jpg',
    url: 'https://ai.ecolifesignature.vn/',
    urlLabel: 'EcoLife AI Portal',
    content: `Cổng trợ lý AI 'https://ai.ecolifesignature.vn/' trang bị cho hàng trăm chuyên viên kinh doanh khả năng hỏi đáp tức thì 24/7 về chính sách bán hàng đợt 1, gói vay 5 ngân hàng tài trợ, thông số chứng chỉ xanh IFC EDGE (SGS kiểm định) và 23 tiện ích chữa lành (4 tầng vườn chân mây, căn hộ đón gió biển). Song song đó, luồng Lead thu về từ Landing Page & Ads đi qua hệ thống Auto Chia Số '< 5 giây' phân bổ công bằng, minh bạch giữa **3 Đại lý F1 chiến lược là Tùng Long, Hợp Nhất và IHD Group**, đánh giá chất lượng lead tự động và bắn ngược Meta CAPI về BM chạy Ads của từng đại lý để cải thiện tỷ lệ chốt.`,
  },
  {
    id: 'ecolife-offline-ooh-print',
    category: 'Dự Án Bất Động Sản EcoLife Signature',
    title: 'Bộ 25+ Ấn Phẩm Offline, OOH & Hàng Rào Hoarding 36m EcoLife Signature',
    sectionId: 'real-estate',
    image: '/assets/ecolife/offline/hoarding_moi_5_module.webp',
    url: 'https://ecolifesignature.vn/',
    urlLabel: 'Hồ sơ EcoLife Signature',
    content: `Bên cạnh mảng Digital, Huỳnh Trọng Phúc còn trực tiếp chỉ đạo thiết kế trọn bộ **25+ ấn phẩm in ấn & OOH khổ lớn** chuẩn CMYK 300 DPI cho EcoLife Signature gồm: Bộ Tờ gập 7 cánh (7×7 mặt trước/sau & mockup 3D), Tờ rơi A5, Bộ Catalog nội thất Quiet Luxury cho từng mẫu căn hộ A1–B6 & Dinh thự Penthouse Duplex Tầng 16–17 kèm bảng vật liệu Material Board đá Marble & gỗ Japandi, Phướn dọc khổ 0.8×2.0m (phiên bản xanh Emerald vàng kim & ngọc trai), Standee EDGE 1A & Chính sách 5 Ngân hàng 1B đặt tại Sales Gallery, và dải **Hoarding hàng rào công trường dài 36m × 2.2m (6 module liên hoàn)** cùng phiên bản nâng cấp **30m × 2.5m (5 module)** gắn logo CĐT Capital House & 3 đại lý F1.`,
  },
  {
    id: 'richland-erp-lead-overview',
    category: 'RichLand ERP & Quản Lý Lead BĐS',
    title: 'RichLand CRM & Lead Management ERP (crm.richland.city) — Không phải giỏ hàng!',
    sectionId: 'domation-data',
    image: '/assets/domation/data_v2_overview.webp',
    content: `RichLand (https://crm.richland.city) là **hệ thống ERP và Quản lý Dữ liệu / Quản lý Lead chuyên sâu cho ngành Bất động sản** do Huỳnh Trọng Phúc (cùng vai trò Systems Architect & Fullstack DEV Lead) xây dựng cho Công ty BĐS Rich Land — cần phân biệt rõ đây là nền tảng **ERP quản trị quy trình dữ liệu, phân bổ lead và giao dịch cọc**, KHÔNG phải web giỏ hàng thương mại điện tử. Về kiến trúc dữ liệu, CSDL MySQL 'zccqvhhh_crm-rlvn' được thiết kế chuẩn mực với **100 thực thể** (98 bảng vật lý InnoDB hỗ trợ ACID Transactions & Row-level Locking + 2 Views 'accounts'/'consultants'), **146 khóa ngoại vật lý (Physical FKs) + 40 khóa ngoại logic = 186 mối quan hệ ERD**, phủ 100% Primary Keys. Kiến trúc dữ liệu 3 tầng tách bạch 'leads - persons - contacts' cho phép lưu trữ toàn bộ lịch sử hành trình khách hàng qua nhiều đợt mở bán mà không xung đột.`,
  },
  {
    id: 'richland-dashboards-splitscreen-tests',
    category: 'RichLand ERP & Quản Lý Lead BĐS',
    title: 'RichLand: 4 Performance Dashboards, Split Screen 1-vs-1 & 60 BA Test Cases',
    sectionId: 'domation-data',
    image: '/assets/domation/chia_data_14.webp',
    content: `Hệ thống RichLand CRM & Lead ERP đã trải qua bộ kiểm thử nghiêm ngặt đạt **57/60 BA Test Cases (95% hoàn thiện theo blueprint 11 module)**, toàn bộ quy tắc phân chia lead đều thiết lập qua UI Settings chứ không hardcode. Các phân hệ nổi bật đang chạy LIVE tại 'crm.richland.city': (1) **4 Performance Dashboards** real-time: Hiệu quả Sale (Lead/MQL/SQL/Booking/Doanh thu/Deal hủy), Hiệu quả Marketing (CPL, CPQL, CPMQL, CPSQL, CPGD, ROAS kèm 4 tỷ lệ sức khỏe phễu TTL1/Đốt lửa/Chốt deal), Doanh thu & Dòng tiền cọc, Phân bổ Data & Ca trực; (2) Tính năng **So Sánh Nhanh 1-vs-1 (Split Screen Delta Analysis)** đối soát song song 5 chiều: Dự án gốc, Chiến dịch, Kênh, Phân loại Lead, Đơn vị Ads kèm nút Swap 1 chạm; (3) Kho **Databank Rules 5.9–5.13** dùng **Atomic Concurrency Lock** chống 2 Sale bấm giật cùng 1 lead (race condition); (4) **Gatekeeper 5 cổng** + GPS Selfie Check-in + Webhook Meta CAPI / Telegram / Zalo OA 24/7.`,
  },
  {
    id: 'domation-ecosystem-overview',
    category: 'Hệ Sinh Thái DOMATION',
    title: 'DOMATION Ecosystem (domation.net/erp) — Buồng Lái 11 Ứng Dụng SaaS',
    sectionId: 'erp-showcase',
    image: '/assets/domation/erp_16.webp',
    url: 'https://domation.net/erp',
    urlLabel: 'Cổng DOMATION ERP',
    content: `DOMATION (thành lập bởi Huỳnh Trọng Phúc / DOMARKETING) là hệ sinh thái phần mềm quản trị tăng trưởng hợp nhất ("One-Stop Cockpit") kết nối liền mạch dữ liệu từ Quảng cáo -> Chia Lead -> Chăm sóc CRM -> Nhân sự ERP -> Báo cáo -> Meta CAPI. Các cổng vận hành thực tế gồm: DOMATION ERP 5.0 (https://domation.net/erp — 12+ phân hệ), DOMATION CRM 4.0 (https://crm-domation.vercel.app/), Auto Data Portal (https://ideas-data.vercel.app/demo), Meta Ad Report (https://meta.domation.net), và AutoFlow & AI Space (https://automation.ideas.edu.vn/). Hệ sinh thái hỗ trợ kiến trúc Multi-Tenant ('tenant_id', 'workspace_id'), soft-delete 100%, và bảo mật phân quyền RLS theo vai trò.`,
  },
  {
    id: 'domation-data-5gate-router',
    category: 'Hệ Sinh Thái DOMATION',
    title: 'DOMATION DATA — Hệ thống Auto Chia Số < 5s & Van Backpressure SLA 2 Phút',
    sectionId: 'domation-data',
    image: '/assets/domation/chia_data_1.webp',
    url: 'https://ideas-data.vercel.app/demo',
    urlLabel: 'Demo Auto Data Portal',
    content: `DOMATION DATA (kho mã nguồn 'DATA' & 'DATA-ECOLIFE') là hệ thống tự động đồng bộ và điều phối khách hàng tiềm năng (Lead) từ Google Sheets / Landing Page / Webhook tới đúng Sale trong **dưới 5 giây** qua Email (PHPMailer) và ZaloBot / Telegram. Thuật toán Gatekeeper kiểm soát **5 cổng thông minh**: (1) Giờ làm việc & ca trực thực tế, (2) Quota/hạn mức tối đa theo ngày/KPI, (3) Xác thực Check-in GPS Selfie đã vào ca, (4) Chấm điểm AI Pre-screener / lịch sử xử lý, (5) Vòng xoay Round-Robin công bằng có trọng số. Nếu sau SLA **2 phút** Sale chưa bấm nhận & tương tác, **Van chống ôm (Backpressure Valve)** tự động thu hồi đưa vào kho Databank chung hoặc xoay vòng cho người tiếp theo. Tích hợp bộ lọc chống trùng SĐT 6 tháng, màn hình War Room Flight Deck và **Fair Share Audit** minh bạch tuyệt đối từng data.`,
  },
  {
    id: 'meta-capi-server-side-cloudflare',
    category: 'MarTech, Tracking & Meta CAPI',
    title: 'Server-Side Tracking trên Cloudflare Workers & Meta Conversion API (CAPI)',
    sectionId: 'domation-data',
    image: '/assets/domation/data_v2_capi_masked.webp',
    content: `Để giải quyết bài toán mất dữ liệu do Apple iOS 14+ ITP và các trình chặn quảng cáo trình duyệt (AdBlock), Huỳnh Trọng Phúc xây dựng hạ tầng Server-Side Tracking kết hợp **Google Tag Manager Server-Side trên Cloudflare Workers** và **Meta Conversion API (CAPI)** trực tiếp từ backend CRM/Data Router ('capi_helper.php' / 'CapiHelper.php'). Khi tư vấn viên xác nhận Lead thiện chí, đặt hẹn, đặt cọc hoặc thanh toán mua hàng thật trên CRM, hệ thống tự động băm (SHA-256) dữ liệu PII (số điện thoại, email, 'fbclid'/'fbp') và gửi sự kiện chuẩn HTTP 200 OK ngược về Meta Dataset/Pixel. Kết quả thực chứng giúp khôi phục **+20% đến +35% độ chính xác đo lường chuyển đổi**, nuôi máy học Meta nhắm đúng tệp khách hàng chất lượng cao và tối ưu chi phí CAC/ROAS.`,
  },
  {
    id: 'myerp-ideas-erp-modules',
    category: 'Enterprise ERP 5.0 (MYERP / IDEAS_ERP)',
    title: 'MYERP & IDEAS_ERP — Kiến trúc ERP Doanh nghiệp 8 Phân hệ, 36 Routes & 16 Giao diện',
    sectionId: 'erp-showcase',
    image: '/ERP-Product/1788856550308_2141578413905312186_2310722037673454867_9dee6011fca6751ff38ce855f9b34ee2.jpg',
    url: 'https://domation.net/erp',
    urlLabel: 'Trải nghiệm ERP 5.0',
    content: `Hệ thống Enterprise ERP 5.0 (phát triển qua các repo 'MYERP' và 'IDEAS_ERP' bằng React 19, TypeScript, Tailwind CSS, Recharts, PptxGenJS, ExcelJS + Backend PHP 8.2 MVC PDO ACID MySQL Multi-Tenant) gồm **8 phân hệ cốt lõi với 36 routes và 16+ màn hình chuyên sâu**:
1. Tổng quan & Điều hành: Executive Dashboard (tỷ lệ chia data 100%, 0% trùng lặp), Bàn làm việc Kanban Task (tăng 40% năng suất), Lịch trình & Bảng tin nội bộ.
2. Quy trình & Phê duyệt: Xét duyệt đa cấp trực tuyến (nghỉ phép, OT, WFH, giải trình).
3. Tài chính & Mua sắm: Purchase Order, Sales Order, Dự báo dòng tiền (Cash-flow), Kế toán A-Z.
4. Khách hàng & Dữ liệu: 8-step CRM Pipeline có AI chấm điểm nhiệt độ Ấm/Nóng, Học viên, Nhật ký Data, Fair-Share Audit, AI Pre-screener Gatekeeper, Ticket data lỗi & Helpdesk.
5. Marketing & Automation: Flows, Campaigns, Templates, Surveys, QR Voucher, Social Bot, AI Training, Web Tracking & API Triggers.
6. Chương trình & Đối tác: Khóa học, Lịch học, Tài liệu đám mây, Nhà cung cấp.
7. Nhân sự & Chấm công: HRM cơ cấu phòng ban, Chấm công GPS & Selfie AI, Tự động tính lương phức hợp Payroll Engine (BHXH, thuế TNCN, KPI -> Net), Phiếu lương điện tử xuất PDF ký số.
8. Trung tâm SLA (v246): Tùy chỉnh linh hoạt 100% rule hệ thống qua UI.`,
  },
  {
    id: 'erp-gps-payroll-and-workchat',
    category: 'Enterprise ERP 5.0 (MYERP / IDEAS_ERP)',
    title: 'Chấm công GPS AI Selfie, Bảng lương Payroll Engine & SI IDEAS WorkChat (11 AI Agents)',
    sectionId: 'erp-showcase',
    image: '/assets/erp/workchat_11_agents.webp',
    content: `Hai điểm nhấn khác biệt trong bộ Enterprise ERP của Turnio là phân hệ Nhân sự & AI Workspace:
- **Chấm công GPS AI Selfie & Payroll Engine**: Ngăn chặn tuyệt đối Fake GPS nhờ xác thực song song tọa độ vệ tinh tại văn phòng kèm ảnh Selfie camera trực tiếp vào ca; dữ liệu chuyên cần, đi trễ, OT, nghỉ phép tự động đổ thẳng vào Payroll Engine để tính lương công ngày, phụ cấp, KPI, bảo hiểm, thuế TNCN và phát hành Phiếu lương điện tử PDF từng nhân viên.
- **SI IDEAS WorkChat (11 AI Agents) & WorkChat Enterprise**: Tích hợp thẳng buồng làm việc đa tác nhân **11 AI Agents** hỗ trợ từng phòng ban (Sale, Marketing, CSKH, HR, Kế toán, IT...) và hệ thống chat/đào tạo doanh nghiệp WorkChat Enterprise ngay trong ERP, giúp nhân sự tra cứu tri thức nội bộ và soạn thảo xử lý công việc tức thì.`,
  },
  {
    id: 'autoflow-pro-and-ai-space',
    category: 'Automation & AI Space',
    title: 'AutoFlow Pro (120+ Kịch bản) & AI Space RAG Workspace (DOMATION_FULLSTACK)',
    sectionId: 'autoflow-pro',
    image: '/assets/domation/auto_flow.webp',
    url: 'https://automation.ideas.edu.vn/',
    urlLabel: 'Trải nghiệm AutoFlow Pro',
    content: `AutoFlow Pro & AI Space (https://automation.ideas.edu.vn/, repo 'DOMATION_FULLSTACK' / 'DOMATION_FULLDEMO') kết hợp nền tảng Marketing Automation kéo-thả rẽ nhánh với không gian đào tạo AI nội bộ doanh nghiệp:
- **AutoFlow Marketing Automation**: Hơn **120+ kịch bản tự động hóa đa kênh** (Email Marketing, ZaloBot nhóm/cá nhân, Zalo OA ZNS, SMS Brandname, Landing Survey khảo sát, Minigame Vòng quay & Túi mù, QR Voucher, Heatmap theo dõi hành vi cuộn/click trên website). Tích hợp AI viết email, phân loại tệp khách hàng và trigger API/Webhook thời gian thực.
- **AI Space**: Hệ thống Multi-Bot RAG Workspace phân quyền chặt chẽ ('ai_org_users' với các role 'admin', 'assistant', 'user' qua 'requireAISpaceAuth()'), cho phép tổ chức nạp tài liệu training theo từng Category chuyên môn, tạo nhiều chatbot tùy biến và kiểm soát audit log từng truy vấn.`,
  },
  {
    id: 'crm-4-and-pos-hub',
    category: 'CRM & POS Đa Chi Nhánh',
    title: 'DOMATION CRM 4.0 & F&B POS Marketing Hub (crm-domation.vercel.app)',
    sectionId: 'crm-showcase',
    image: '/assets/domation/crm_1.webp',
    url: 'https://crm-domation.vercel.app/',
    urlLabel: 'Xem CRM 4.0 Demo',
    content: `DOMATION CRM 4.0 (https://crm-domation.vercel.app/, repo 'CRM') là nền tảng quản trị quan hệ khách hàng kết hợp POS đa chi nhánh (Frontend: React, TypeScript, Zustand, DnD-Kit Kanban, Recharts, Lenis, QRCode; Backend: PHP REST API + JWT + MySQL). Bao gồm đầy đủ Controllers thực tế: DashboardController, DealController, ContactController, CompanyController, ActivityController, CallLogger & QR Code gọi nhanh trên di động, LeadScoreRing chấm điểm lead, QuoteEditorModal tạo báo giá chuyên nghiệp, PurchaseOrderController, InventoryController, POSController, CloudFileController, TicketController và Import/Export Excel. Đối với chuỗi F&B 30 cửa hàng, Middleware Node.js lắng nghe Webhook từ máy POS offline khi khách thanh toán, tự phân nhóm Mới/Thân thiết/VIP và gửi Voucher quay lại qua Zalo ZNS.`,
  },
  {
    id: 'dom-meta-report-and-misa-crm',
    category: 'AdTech Report & MISA CRM',
    title: 'DOM META Ad Report (meta.domation.net) & MISA CRM Data Connector',
    sectionId: 'meta-ad-report',
    image: '/assets/domation/meta_rp_1.webp',
    url: 'https://meta.domation.net',
    urlLabel: 'Mở DOM META Report',
    content: `DOM META Reports (https://meta.domation.net, repo 'DOMATION_META', 'DOM-MARKETING', 'AMPER' và 'DOM_MISA_IDEAS_CRM') là công cụ phân tích hiệu quả quảng cáo Meta Ads (Graph API v25.0) & Google Ads theo thời gian thực dành cho Media Buyer và Chủ doanh nghiệp:
- Đọc tự động Spend, Reach, CPM, CTR, CPA, ROAS theo ngày/tháng, vùng miền, độ tuổi/giới tính và Heatmap giờ vàng.
- Chỉ số video chuyên sâu **Hook Rate & Hold Rate**, phát hiện **độ bão hòa Creative**, ma trận Scale ngân sách Adset và tích hợp AI phân tích đề xuất hành động tối ưu.
- **MISA CRM Connector ('DOM_MISA_IDEAS_CRM')**: Proxy PHP ('proxy_misa.php', 'login_otp.php') kết nối dữ liệu chi phí Ads trực tiếp với dữ liệu Lead & Doanh thu thực tế trả về từ MISA CRM để tính ROAS ròng minh bạch (triển khai cho IDEAS, Ampersand).`,
  },
  {
    id: 'case-study-ideas-mba-300',
    category: 'Case Study Khách Hàng Thực Chiến',
    title: 'Case Study Viện IDEAS (2023–2024): +300% Tuyển sinh MBA & Giảm 30% Chi phí/Học viên',
    sectionId: 'outsource',
    image: '/assets/domation/clients/ideasedu.webp',
    url: 'https://ideas.edu.vn/mscai',
    urlLabel: 'Landing Page IDEAS MScAI',
    content: `Giai đoạn 2023–2024 tại Viện Đào Tạo Quốc Tế IDEAS (liên kết các trường quốc tế như Collège de Paris, Swiss UMEF, Ascencia Business School, VTCI Edu), Huỳnh Trọng Phúc phụ trách trọn gói Digital Marketing & Fullstack Development. Chiến công lớn nhất là tái cấu trúc phương thức chạy Ads vốn tồn tại 10 năm: chuyển từ Messenger Ads kém khả năng scale sang phễu **Facebook Lead Form + Landing Page (MScAI / MBA / BBA) + AutoFlow n8n/Email/ZaloBot + MISA CRM sync**. Kết quả thực tế: mang về **12,600+ Leads chất lượng**, đẩy lượng Lead Thạc sĩ từ **5 leads/ngày lên 20 leads/ngày**, quy mô lớp học từ **20 lên 60 học viên/khóa (+300% doanh số/tuyển sinh)**, đồng thời giảm mạnh chi phí tuyển mỗi học viên (CAC) từ **18 triệu xuống còn 12–14 triệu VNĐ (-30% chi phí)**.`,
  },
  {
    id: 'zalo-mini-app-and-lms',
    category: 'EdTech, Zalo Mini App & LMS',
    title: 'Zalo Mini App (IDEAS App) & Hệ thống LMS E-Learning Chống Tua Video',
    sectionId: 'zalo-mini-app',
    image: '/assets/domation/auto_qr.webp',
    url: 'https://turniodev.github.io/zala_ideas',
    urlLabel: 'Zalo Mini App Simulator',
    content: `Trong hệ sinh thái chuyển đổi số giáo dục & dịch vụ:
- **Zalo Mini App** (demo live: https://turniodev.github.io/zala_ideas): Phát triển trên ReactJS & Zalo Mini App SDK (ZaUI) chuẩn Native. Khách hàng/học viên không cần tải app ngoài, đăng nhập 1 chạm bằng Zalo Phone Number, tích điểm QR Loyalty, đổi voucher, đặt lịch hẹn đồng bộ Google Calendar và nhận thông báo qua Zalo OA ZNS đồng bộ thẳng về CRM.
- **LMS E-Learning Platform**: Hệ thống đào tạo trực tuyến trang bị công nghệ **Streaming Video chống tua** kết hợp xác thực phiên học nhằm bảo vệ bản quyền học liệu; ngân hàng đề thi trắc nghiệm/tự luận chấm điểm tự động; thống kê tiến độ real-time cảnh báo học viên chậm; và tự động xuất **Chứng chỉ số kèm mã xác thực** khi hoàn thành KPI.`,
  },
  {
    id: 'case-study-phuc-loc-tho',
    category: 'Case Study Khách Hàng Thực Chiến',
    title: 'Case Study Cơm Tấm Phúc Lộc Thọ: 1,600+ Leads Nhượng Quyền & Web Order ROAS 5+',
    sectionId: 'outsource',
    image: '/assets/domation/clients/portfolio.webp',
    url: 'https://phucloctho.vn',
    urlLabel: 'Đối tác Phúc Lộc Thọ',
    content: `Với chuỗi F&B Cơm Tấm Phúc Lộc Thọ, Huỳnh Trọng Phúc đã triển khai thành công hai chiến dịch lớn:
1. **Chiến dịch Nhượng quyền Thương hiệu (Franchise FB Lead Ads)**: Với ngân sách **200 triệu VNĐ**, hệ thống mang về **1,600+ Leads nhượng quyền chất lượng cao**, thẩm định năng lực tài chính kỹ lưỡng giúp thương hiệu mở mới **hơn 20 cửa hàng nhượng quyền** (tạm dừng scale khi đã vượt 15 cửa hàng khai trương chưa tính đặt cọc và >100 khách tiềm năng chờ duyệt).
2. **Chiến dịch Web Order**: Vận hành với ngân sách gọn 5–7 triệu Ads/tháng nhưng tạo **~100 triệu doanh thu/tháng (ROAS 5+)**. Từ đây anh đúc kết bài học thực chiến giá trị về tâm lý người dùng: để scale kênh Web Order tự chủ cạnh tranh với GrabFood/ShopeeFood, doanh nghiệp bắt buộc phải thiết kế hệ sinh thái thanh toán mượt mà kèm **Exclusive Offers (Ưu đãi độc quyền)** không có trên app giao đồ ăn.`,
  },
  {
    id: 'case-study-ampersand-en-fnb-vitrac',
    category: 'Case Study Khách Hàng Thực Chiến',
    title: 'Case Study Ampersand (6 Brands), En Group (KA-EN) & Hợp Đồng VITRAC 136.4M₫',
    sectionId: 'partners',
    image: '/assets/domation/clients/brandson.webp',
    url: 'https://ka-en.com.vn/event.html',
    urlLabel: 'KA-EN Event Web',
    content: `Ngoài Phúc Lộc Thọ, Huỳnh Trọng Phúc trực tiếp quản trị ngân sách Performance Marketing (>1.2 tỷ VNĐ giai đoạn nền tảng, đỉnh 500M/tháng) và hạ tầng Web cho nhiều tập đoàn F&B & B2B lớn:
- **Ampersand Group (6 thương hiệu F&B cao cấp)**: Haagen-Dazs Vietnam, The Running Bean, BEAN, Esta Saigon (nhà hàng đạt Michelin Selected), Le Petit Bistro, Snowee Gelato.
- **En Group**: Hệ thống nhà hàng Nhật Abiru-EN, KA-EN ('https://ka-en.com.vn/event.html' — phát triển web đặt tiệc sự kiện & chiến dịch marketing), Cowboy Steakhouse.
- **Hợp đồng Doanh nghiệp VITRAC (136.4 triệu VNĐ)**: Tự tay thiết kế Figma & bàn giao **30 trang giao diện**, tích hợp đồng bộ tồn kho từ **Fast ERP**, đẩy lead tự động vào **Getfly CRM**, kết nối cổng thanh toán đa kênh và tự động hóa Email/Mautic qua **AWS SES**.`,
  },
  {
    id: 'navatek-local-llm-and-navastore',
    category: 'Hạ Tầng AI On-Premise & E-Commerce',
    title: 'NavaTek (navatek.vn) — Trạm AI Server Cục Bộ Local LLM & NavaStore',
    sectionId: 'domarketing',
    image: '/assets/apps/navatek_ai.webp',
    url: 'https://navatek.vn',
    urlLabel: 'Website NavaTek AI',
    content: `Cho hệ sinh thái công nghệ **NavaTek** ('https://navatek.vn', ASUS Gold Partner Việt Nam) và hệ thống bán lẻ phần cứng **NavaStore** ('https://navastore.vn', repo 'nava' & 'NAVATEK'), Huỳnh Trọng Phúc xây dựng kiến trúc website doanh nghiệp, bộ WordPress Custom Theme tối ưu SEO & LLM ('llms.txt', 'llms-full.txt'), tích hợp 'gemini_proxy.php' và hệ thống giới thiệu sản phẩm kỹ thuật cao:
- **Private On-Premise AI Server & Local LLM**: Cô lập 100% khỏi internet công cộng để bảo mật dữ liệu doanh nghiệp, cài sẵn Docker, Ollama, Open-WebUI, vLLM chạy các model **DeepSeek-R1 (8B–70B), Llama 3.3, Qwen 2.5 Coder, Mistral** phục vụ RAG nội bộ và tự động hóa Lark Suite / Sapo ERP, tiết kiệm **60–80% chi phí TCO** so với thuê Cloud API dài hạn.
- **Combo Mini PC + eGPU OCuLink 64Gbps (RTX 4070/4080/4090 24GB VRAM)** & Workstation AI đa GPU, kèm dịch vụ IT Managed SLA phản ứng 15–30 phút.`,
  },
  {
    id: 'flora-dental-affiliate-kol-seapay',
    category: 'Y Khoa, Landing Page & Affiliate KOL',
    title: 'Nha Khoa Flora, Brandson CME & Hệ thống Affiliate KOL VietQR SeaPay',
    sectionId: 'outsource',
    image: '/assets/domation/clients/flora.webp',
    url: 'https://nhakhoaflora.com/ngay-hoi-implant/',
    urlLabel: 'Flora Ngày Hội Implant',
    content: `Trong lĩnh vực Nha khoa & Y khoa thẩm mỹ (Nha khoa Flora, Brandson, Implantswiss), Huỳnh Trọng Phúc triển khai cả tăng trưởng Ads lẫn hệ thống phần mềm:
- **Nha Khoa Flora — Ngày Hội Implant** ('https://nhakhoaflora.com/ngay-hoi-implant/'): Thiết kế Landing Page chuyển đổi cao & chạy Performance Ads đạt **100k/Lead** với ngân sách 20 triệu.
- **Flora Affiliate & KOL Management Engine** ('https://nhakhoaflora.com/goi-dich-vu', repo 'FLORA'): Kiến trúc hệ thống quản lý Đối tác/Bác sĩ/KOL không cần đăng nhập WP-Admin (cấp link Public Dashboard qua Secret Hash Token, che SĐT bảo mật y tế); tự động sinh **VietQR MoMo & ACB** nhúng sẵn mã định danh 'FLORA <MÃ_KOL> <SĐT> <MÃ_ĐƠN>'; nguyên tắc **chỉ cộng hoa hồng khi thanh toán thành công ('paid')** qua MoMo/SeaPay Webhook kèm email thông báo tự động.
- **Brandson CME** ('https://brandson.vn/cay-ghep-nha-khoa-co-ban/'): Phễu đào tạo bác sĩ học Cấy ghép Implant CME đạt **400k/Lead** trên ngân sách 30 triệu.`,
  },
  {
    id: 'minth-hamien-and-dom-tools',
    category: 'Ứng Dụng Doanh Nghiệp & Công Cụ Web',
    title: 'Minth Hamien Management (Spa/Mỹ phẩm Fullstack) & DOM Tools Utility Suite',
    sectionId: 'crm-showcase',
    image: '/assets/domation/crm_6.webp',
    content: `Hai sản phẩm ứng dụng thực tiễn nổi bật trong 'GITHUB_SPACE':
- **Minth Hamien ('MINTH_HAMIEN')**: Hệ thống phần mềm quản trị bán hàng & kho cho doanh nghiệp mỹ phẩm/spa, xây dựng bằng **React + Chart.js + React Router** kết hợp **PHP & MySQL REST API** ('auth.php', 'batches.php', 'categories.php', 'customers.php', 'expenses.php', 'inventory_logs.php', 'orders.php', 'products.php', 'reports.php', 'settings.php'). Hỗ trợ Dashboard thống kê, POS bán tại quầy, quản lý theo lô hàng ('batches'), lịch sử xuất nhập kho, đơn hàng và quản lý chi phí.
- **DOM Tools ('dom_tools')**: Bộ công cụ xử lý tài liệu client-side tốc độ cao bằng React + 'jszip' + 'pdf-lib' + 'qrcode': chuyển đổi & nén/chỉnh sửa hàng loạt hình ảnh không cần gửi lên server ngoài, gộp/tách/xử lý file PDF, sinh mã QR tùy biến, hỗ trợ Dark/Light theme mượt mà.`,
  },
  {
    id: 'digi-video-and-voicestudio',
    category: 'AI Media, Video Automation & Voice',
    title: 'DIGI_VIDEO / video_ui (Render Video Ngắn Bằng Code) & VoiceStudio (Voice Cloning)',
    sectionId: 'inkica-pod',
    image: '/assets/apps/digi_video_ai.webp',
    content: `Ở mảng AI tạo nội dung đa phương tiện (Media & Speech Automation):
- **DIGI_VIDEO & video_ui**: Động cơ sản xuất **100+ video ngắn định dạng dọc 9:16** (TikTok, Reels, Shorts) hoàn toàn tự động bằng lập trình ('Python Flask', 'Playwright' headless HTML5/CSS canvas recorder, 'ffmpeg', 'edge-tts' / 'VoxCPM2' tổng hợp giọng nói). Các kịch bản trực quan hóa sinh động kiến thức kỹ thuật như tối ưu hóa Backend/Caching, HTTPS/SSL/TLS, Encryption (E2EE) với animation mobile-first sắc nét.
- **VoiceStudio ('VoiceStudio' monorepo)**: Môi trường studio cục bộ (Local-first Electron + Python FastAPI + WhisperX + OmniVoice/CosyVoice3/IndexTTS2.5 + MCP Server) phục vụ nhân bản giọng nói (Voice Cloning), thiết kế giọng AI (Voice Design), lồng tiếng Video (Video Dubbing) và bóc băng phiên âm đa ngôn ngữ (646 ngôn ngữ) bảo mật dữ liệu máy cá nhân.`,
  },
  {
    id: 'mystery-tarot-personal-app',
    category: 'Sản Phẩm Cá Nhân & AI SEO',
    title: 'Mystery Tarot (mystery-tarot.net) — App 78 Lá Bài & 600+ Bài SEO Tạo Bằng AI',
    sectionId: 'tarot-showcase',
    image: '/assets/domation/crm_14.webp',
    url: 'https://www.mystery-tarot.net/',
    urlLabel: 'Trải nghiệm Mystery Tarot',
    content: `Mystery Tarot (https://www.mystery-tarot.net/, repo 'TAROT') là sản phẩm cá nhân thể hiện khả năng kết hợp thiết kế thẩm mỹ UX Native-App và tự động hóa nội dung quy mô lớn bằng AI:
- Bộ **78 lá bài Tarot được tự thiết kế độc quyền** mang phong cách huyền bí tối giản, trải nghiệm mượt như ứng dụng di động thực thụ (bấm trải bài tình yêu, sự nghiệp, tài chính, Daily Draw, tổ hợp combo 2-3 lá).
- Thuật toán tự động hóa (Node.js scripts + Gemini API) sinh và kiểm chuẩn **hơn 600 bài viết SEO content chuyên sâu** cho từng lá bài & từng cặp tổ hợp ('add_hyper_combos.js', 'generate_hub.js'), kết hợp tối ưu Technical SEO giúp website cán mốc **1,000+ người dùng thực tế ngay trong tuần đầu ra mắt**.`,
  },
  {
    id: 'partners-and-industries',
    category: 'Mạng Lưới Đối Tác Doanh Nghiệp',
    title: 'Hơn 24–30+ Thương Hiệu & Đối Tác Chiến Lược Đa Ngành',
    sectionId: 'partners',
    image: '/assets/domation/clients/nava.webp',
    content: `Danh sách đối tác doanh nghiệp tiêu biểu đã tin tưởng hợp tác cùng Turnio DEV & DOMATION across đa lĩnh vực:
- **Bất động sản & PropTech**: Tập đoàn Capital House (EcoLife Signature), Công ty BĐS RichLand, 3 Sàn F1 Tùng Long, Hợp Nhất, IHD Group.
- **F&B & Chuỗi Nhượng Quyền**: Cơm Tấm Phúc Lộc Thọ, Tập đoàn Ampersand (Haagen-Dazs, The Running Bean, BEAN, Esta Saigon, Le Petit, Snowee), Tập đoàn En Group (Abiru-EN, KA-EN, Cowboy Steakhouse).
- **Giáo dục & Viện Nghiên cứu**: Viện IDEAS (IDEAS Institute), Collège de Paris, Swiss UMEF, Ascencia Business School, VTCI Edu.
- **Nha khoa & Y tế**: Hệ thống Nha khoa Flora, Brandson, Implantswiss.
- **Thời trang, Bán lẻ, Công nghệ & An ninh**: Thời trang Duyên Mai ('duyenmai.vn'), NavaTek ('navatek.vn'), NavaStore ('navastore.vn'), Công ty Bảo vệ An Ninh Tiên Hoàng ('anninhtienhoang.com'), INKICA AI ('ai.inkica.com'), VITRAC.`,
  },
  {
    id: 'chatbot-rag-architecture-meta',
    category: 'Kiến Trúc Trợ Lý AI RAG Này',
    title: 'Cách Trợ Lý AI Portfolio Này Hoạt Động (Real Vector RAG + Gemini 3.5 Flash Lite)',
    sectionId: 'hero',
    image: '/me.webp',
    content: `Trợ lý AI đang trò chuyện với bạn được xây dựng bằng kiến trúc **Vector Embedding RAG thực thụ (không hardcode, không bắt từ khóa tĩnh)**:
1. Toàn bộ hồ sơ năng lực, mã nguồn các dự án trong GITHUB_SPACE, INKICA, RichLand ERP, EcoLife Signature, DOMATION, case studies & hình ảnh đã kiểm chứng được biên soạn thành các đoạn tri thức chuyên sâu.
2. Mỗi đoạn tri thức được nhúng thành vector ngữ nghĩa 768 chiều (chuẩn hóa L2) bằng model **'gemini-embedding-001'** (chế độ 'RETRIEVAL_DOCUMENT').
3. Khi bạn đặt câu hỏi, backend '/api/chat' biến câu hỏi theo ngữ cảnh hội thoại thành vector truy vấn sống ('RETRIEVAL_QUERY'), tính **Cosine Similarity** để truy xuất Top-K đoạn tri thức liên quan nhất theo thời gian thực.
4. Model **'gemini-3.5-flash-lite'** (Interactions Streaming API) tổng hợp câu trả lời tự nhiên, chính xác, trung thực dựa 100% trên dữ liệu vừa truy xuất kèm các thẻ dự án/hình ảnh đối chứng.`,
  },
];
