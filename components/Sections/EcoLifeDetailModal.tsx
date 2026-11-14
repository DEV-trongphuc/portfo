import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  Palette,
  FileCheck2,
  Compass,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  TrendingDown,
  BarChart3,
  Bot,
  Video,
  Eye,
  Building2,
  Leaf,
  Maximize2,
  Award,
  Clock,
  Check,
} from 'lucide-react';
import {
  EcoLifeDetailModalProps,
  EcoLifeModalTabId,
  ScopeMatrixRow,
  FloorplanUnit,
  LegalMinute,
} from '../../types/ecolife';

// ==========================================
// DATA FIXTURES
// ==========================================

export const SCOPE_MATRIX_ROWS: ScopeMatrixRow[] = [
  {
    stt: '01',
    pillar: 'Landing Page Kể Chuyện',
    category: 'Digital Experience',
    techStack: 'Cuộn toàn màn hình 100vh, Lenis Smooth Scroll 60 FPS, mô hình 3D GLB',
    metrics: '07 chương chuyển động, CRM Lead API sync, tải dưới 1.8s',
    impact: 'Tăng 3.8x thời lượng xem trang, tỷ lệ điền form đạt 4.2%',
  },
  {
    stt: '02',
    pillar: 'Quảng Cáo Số & Lead Gen',
    category: 'Performance Marketing',
    techStack: 'Meta Ads Graph API audit, tài khoản DOM - 8580 (act_302787476028580), geo-split',
    metrics: 'Giảm 54.8% CPL (774k xuống ~350k), CTR 2.32%, khóa tuổi 28–55',
    impact: 'Cắt 68.5% ngân sách lãng phí ở vị trí Audience Network',
  },
  {
    stt: '03',
    pillar: 'Agency CRM Data App',
    category: 'Enterprise MarTech',
    techStack: 'DOMATION DATA, War Room Flight Deck 6,237 dòng React, Round-Robin & Fair Share',
    metrics: 'Phân bổ lead dưới 5 giây, Gatekeeper lọc rác, Zalo OA Bot webhook',
    impact: 'Đảm bảo công bằng tuyệt đối giữa các tổ đội bán hàng F1, chống rò rỉ lead 100%',
  },
  {
    stt: '04',
    pillar: 'Trợ Lý AI Đa Kênh',
    category: 'Artificial Intelligence',
    techStack: 'Pipeline Gemini 2.5 Flash, 200 mẫu JSONL sàng lọc dữ liệu',
    metrics: 'Phản hồi dưới 800ms, độ chính xác 94.6%, cấu trúc JSON RFC 8259',
    impact: 'Tư vấn tự động 24/7 và hỗ trợ ban giám đốc truy vấn số liệu tức thì',
  },
  {
    stt: '05',
    pillar: 'Hệ Thống Thiết Kế In Ấn',
    category: 'Brand Collateral',
    techStack: 'Tờ gập 7x7 Accordion (14x21cm, 300 DPI), sách 16 trang, nhận diện Sáng Ngọc Trai',
    metrics: 'Chứng chỉ xanh quốc tế SGS - IFC EDGE: -24% điện, -30% nước, -30% vật liệu',
    impact: 'Bảo chứng công trình xanh chính thức từ Ngân Hàng Thế Giới (World Bank / IFC)',
  },
  {
    stt: '06',
    pillar: 'Sản Xuất Video Điện Ảnh',
    category: 'Cinematic Media',
    techStack: 'Phim 4K 90s (master cut v16), 85+ clip căn hộ, 5 clip TikTok 9:16',
    metrics: 'Khóa khớp thời gian 1.1x (0.00s audio drift), tỷ lệ 16:9 trung tâm',
    impact: 'Bao phủ mọi định dạng hiển thị từ TVC sự kiện lớn đến video ngắn lan tỏa mạng xã hội',
  },
  {
    stt: '07',
    pillar: 'Sa Bàn Ảo 3D Three.js',
    category: 'Immersive Tech',
    techStack: 'WebGL Three.js, bóc mái dollhouse, xoay tháp GLB 360°, tối ưu draw calls',
    metrics: '08 mẫu layout căn hộ điển hình (A1, A2, B1, B2, B6, B3, Penthouse)',
    impact: 'Khách hàng toàn quốc trải nghiệm không gian thực tế ảo 360° không cần cài ứng dụng',
  },
];

export const FLOORPLAN_UNITS: FloorplanUnit[] = [
  {
    id: 'can-a1',
    code: 'A1',
    name: 'Căn Hộ A1 (2PN Tiêu Chuẩn)',
    areaGross: '66.0 m²',
    areaNet: '61.2 m²',
    bedrooms: '2 Phòng Ngủ',
    bathrooms: '2 Phòng Vệ Sinh',
    orientation: 'Đông Bắc (Đón gió vịnh)',
    view: 'Vịnh Đà Nẵng & Đèo Hải Vân',
    highlight: 'Thiết kế bếp liên thông logia thông thoáng, 100% phòng ngủ đón ánh sáng tự nhiên.',
    imageSrc: '/assets/ecolife/01_Can_A1_2PN_66m2.webp',
  },
  {
    id: 'can-a2',
    code: 'A2',
    name: 'Căn Hộ A2 (2PN Tiện Nghi)',
    areaGross: '68.9 m²',
    areaNet: '63.8 m²',
    bedrooms: '2 Phòng Ngủ',
    bathrooms: '2 Phòng Vệ Sinh',
    orientation: 'Đông Nam',
    view: 'Công viên trung tâm & Quảng trường sự kiện',
    highlight: 'Phòng khách mở rộng liên thông bàn ăn, logia sân phơi riêng biệt tối đa tiện ích.',
    imageSrc: '/assets/ecolife/02_Can_A2_2PN_68.9m2.webp',
  },
  {
    id: 'can-goc-b1',
    code: 'B1',
    name: 'Căn Góc B1 (2PN Góc 2 Mặt Thoáng)',
    areaGross: '77.8 m²',
    areaNet: '72.1 m²',
    bedrooms: '2 Phòng Ngủ',
    bathrooms: '2 Phòng Vệ Sinh',
    orientation: 'Góc Đông Nam - Đông Bắc',
    view: 'Trực diện Hồ điều hòa Bàu Tràm 61ha',
    highlight: 'Căn góc 2 mặt thoáng vĩnh viễn, luồng gió đối lưu sinh thái chuẩn xanh SGS-IFC EDGE.',
    imageSrc: '/assets/ecolife/03_Can_Goc_B1_2PN_77.8m2.webp',
  },
  {
    id: 'can-b2',
    code: 'B2',
    name: 'Căn Hộ B2 (2PN+1 Đa Năng)',
    areaGross: '87.3 m²',
    areaNet: '80.5 m²',
    bedrooms: '2PN + 1 Đa Năng',
    bathrooms: '2 Phòng Vệ Sinh',
    orientation: 'Tây Bắc',
    view: 'Vịnh biển Liên Chiểu & 4 Tầng Vườn Chân Mây',
    highlight: 'Không gian cộng thêm (+1) linh hoạt chuyển đổi làm phòng làm việc, studio hoặc phòng ngủ thứ 3.',
    imageSrc: '/assets/ecolife/04_Can_B2_2PN_Plus_87.3m2.webp',
  },
  {
    id: 'can-b6',
    code: 'B6',
    name: 'Căn Hộ B6 (3PN Gia Đình Đa Thế Hệ)',
    areaGross: '87.1 m²',
    areaNet: '81.0 m²',
    bedrooms: '3 Phòng Ngủ',
    bathrooms: '2 Phòng Vệ Sinh',
    orientation: 'Đông Nam',
    view: 'Hồ bơi vô cực 32m & Wellness Walk',
    highlight: 'Bố trí 3 phòng ngủ tách biệt tạo sự riêng tư, phòng khách lớn là tâm điểm gắn kết gia đình.',
    imageSrc: '/assets/ecolife/05_Can_B6_3PN_87.1m2.webp',
  },
  {
    id: 'can-goc-b3',
    code: 'B3',
    name: 'Căn Góc B3 (3PN Panorama Hoa Hậu)',
    areaGross: '88.8 m²',
    areaNet: '83.2 m²',
    bedrooms: '3 Phòng Ngủ',
    bathrooms: '2 Phòng Vệ Sinh',
    orientation: 'Góc Nam - Đông Nam',
    view: 'Panorama 270° Vịnh biển + Hồ Bàu Tràm',
    highlight: 'Căn hộ hoa hậu của tòa tháp với ban công góc uốn lượn, kính Low-E tràn viền chống nóng bức xạ.',
    imageSrc: '/assets/ecolife/06_Can_Goc_B3_3PN_88.8m2.webp',
  },
];

export const LEGAL_MINUTES: LegalMinute[] = [
  {
    code: '051126',
    minuteNumber: '0511/2026/BBNT-CRM',
    legalBase: 'Hợp đồng dịch vụ MarTech số 3010/2026/HĐDV-CRM ký kết ngày 30/10/2026',
    title: 'Nghiệm Thu Hệ Thống CRM Data Automation & Phân Bổ Lead Real-Time',
    clientRep: {
      name: 'Bà Nguyễn Thị Dịu',
      title: 'Tổng Giám Đốc',
      org: 'Công ty Cổ phần Sàn Giao dịch Bất động sản CHG Homes (Tập đoàn Capital House)',
    },
    agencyRep: {
      name: 'Bà Trần Kim Ngân',
      title: 'Giám Đốc Vận Hành Dữ Liệu',
      org: 'Domation Agency',
    },
    scope:
      'Triển khai cổng điều phối và chia lead real-time tại https://ecolifesignature.vn/data, tích hợp thuật toán Round-Robin và cổng bảo mật Gatekeeper.',
    result:
      'Vận hành trơn tru 100%, tốc độ phân bổ lead dưới 5 giây, bảo vệ dữ liệu tuyệt đối không rò rỉ.',
    deliveryDate: '05/11/2026',
    statusBadge: '✦ 100% ĐÃ NGHIỆM THU & BÀN GIAO ✦',
  },
  {
    code: '261024',
    minuteNumber: '0511/2026/BBNT-MEDIA',
    legalBase: 'Hợp đồng giao khoán sản xuất tư liệu số 3010/2026/HĐDV-MEDIA ký kết ngày 30/10/2026',
    title: 'Nghiệm Thu Hệ Thống Tư Liệu Truyền Thông, Video Clip & Màn Hình LED',
    clientRep: {
      name: 'Bà Nguyễn Thị Dịu',
      title: 'Tổng Giám Đốc',
      org: 'CHG Homes (Tập đoàn Capital House)',
    },
    agencyRep: {
      name: 'Ông Huỳnh Trọng Phúc',
      title: 'CEO & Sáng Lập Viên',
      org: 'Domation Agency',
    },
    scope:
      'Sản xuất 01 Brand film 4K 90s, kho dữ liệu 85+ video clip nội thất các căn hộ, đồ họa LED trình chiếu sự kiện mở bán.',
    result:
      'Chất lượng hình ảnh sắc nét chuẩn 4K, âm thanh điện ảnh khóa khớp 100%, bàn giao đúng tiến độ cam kết.',
    deliveryDate: '05/11/2026',
    statusBadge: '✦ 100% ĐÃ NGHIỆM THU & BÀN GIAO ✦',
  },
];

export const ADS_BROCHURES = [
  {
    id: 1,
    title: 'Chuẩn Xanh EDGE Quốc Tế',
    img: '/assets/ecolife/01_QC_LEAD_BROCHURE_CHUAN_XANH_EDGE_QUOC_TE.webp',
  },
  {
    id: 2,
    title: '04 Tầng Vườn Chân Mây',
    img: '/assets/ecolife/02_QC_LEAD_BROCHURE_04_TANG_VUON_CHAN_MAY.webp',
  },
  {
    id: 3,
    title: '23 Tiện Ích Chữa Lành',
    img: '/assets/ecolife/03_QC_LEAD_BROCHURE_23_TIEN_ICH_CHUA_LANH.webp',
  },
  {
    id: 4,
    title: 'Căn Hộ Đón Gió Biển',
    img: '/assets/ecolife/04_QC_LEAD_BROCHURE_CAN_HO_DON_GIO_BIEN.webp',
  },
  {
    id: 5,
    title: 'Bảng Giá Ưu Đãi GĐ1',
    img: '/assets/ecolife/05_QC_LEAD_BROCHURE_BANG_GIA_UU_DAI_GD1.webp',
  },
];

export const EcoLifeDetailModal: React.FC<EcoLifeDetailModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<EcoLifeModalTabId>('overview');
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(0);
  const activeUnit = FLOORPLAN_UNITS[selectedUnitIndex];

  // Keyboard navigation & scroll locking lifecycle
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (activeTab === 'floorplans-3d') {
        if (e.key === 'ArrowRight') {
          setSelectedUnitIndex((prev) => (prev < FLOORPLAN_UNITS.length - 1 ? prev + 1 : 0));
        } else if (e.key === 'ArrowLeft') {
          setSelectedUnitIndex((prev) => (prev > 0 ? prev - 1 : FLOORPLAN_UNITS.length - 1));
        } else if (e.key === 'Home') {
          setSelectedUnitIndex(0);
        } else if (e.key === 'End') {
          setSelectedUnitIndex(FLOORPLAN_UNITS.length - 1);
        }
      }
    },
    [onClose, activeTab]
  );

  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('keydown', handleKeyDown);

    // Scrollbar compensation to avoid layout shift when locking body scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ecolife-modal-title"
        data-testid="ecolife-modal"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex flex-col w-full max-w-6xl h-[94vh] sm:h-[90vh] bg-[#0c081e] border border-amber-500/30 rounded-2xl shadow-[0_0_60px_rgba(245,158,11,0.15)] overflow-hidden overscroll-contain"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#090616]/95 backdrop-blur-md border-b border-amber-500/20">
            <div className="flex items-center gap-3">
              <img
                src="/assets/ecolife/ecolife_signature_logo_official_gold.webp"
                alt="EcoLife Signature Đà Nẵng Gold Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow" loading="lazy" decoding="async"
              />
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
                  ✦ Capital House Group (CHG Homes) ✦
                </span>
                <h2
                  id="ecolife-modal-title"
                  className="text-sm sm:text-base lg:text-lg font-bold text-white leading-tight font-serif"
                >
                  EcoLife Signature Đà Nẵng • Hồ Sơ Kỹ Thuật & 07 Trụ Cột
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://ecolifesignature.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/40 bg-white/5 hover:bg-white/10 text-amber-200 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng cửa sổ chi tiết"
                data-testid="modal-close-btn"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 5-Tab Navigation Bar */}
          <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2.5 bg-[#0a071a] border-b border-white/5 overflow-x-auto no-scrollbar shrink-0">
            {[
              { id: 'overview', label: 'Toàn Cảnh & 7 Trụ Cột', icon: Layers },
              { id: 'tech-pillars', label: 'Hệ Sinh Thái Kỹ Thuật (1-4)', icon: Cpu },
              { id: 'creative-media', label: 'Ấn Phẩm, Video & 3D (5-7)', icon: Palette },
              { id: 'legal-records', label: 'Bảo Chứng & Nghiệm Thu', icon: FileCheck2 },
              { id: 'floorplans-3d', label: 'Thư Viện Mặt Bằng 3D', icon: Compass },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as EcoLifeModalTabId)}
                  className={`min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-8 text-slate-200">
            {/* TAB 1: OVERVIEW & SCOPE MATRIX */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Strategic Framing Lead Banner */}
                <div className="p-5 sm:p-6 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Dossier Chiến Lược • Enterprise Flagship Case Study</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mb-2">
                    Tổng Thầu Công Nghệ & Hệ Sinh Thái MarTech Bất Động Sản Khép Kín
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    EcoLife Signature Đà Nẵng là cột mốc kinh nghiệm trọng điểm minh chứng năng lực
                    chỉ huy hạ tầng số ở quy mô doanh nghiệp: kết hợp giữa tư duy kiến trúc hệ thống
                    (Systems Architecture), tự động hóa định tuyến dữ liệu (Data Pipeline), trí tuệ
                    nhân tạo đàm thoại (Fine-tuned AI Agent) và sản xuất nội dung kỹ thuật số chuẩn quốc tế.
                    Dự án được nghiệm thu hai chiều đầy đủ cùng Chủ đầu tư Capital House Group.
                  </p>
                </div>

                {/* 4 Oversized Key Metrics Strip */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl border border-white/10 bg-slate-950/50">
                  <div className="text-center px-2">
                    <div className="text-3xl sm:text-4xl font-black font-serif text-amber-400">376</div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-200 mt-1">Căn Hộ Xanh EDGE</div>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Tiêu chuẩn quốc tế World Bank / IFC</p>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl sm:text-4xl font-black font-serif text-amber-400">03</div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-200 mt-1">Tòa Tháp Chữ U</div>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Đón trọn gió biển & hồ Bàu Tràm 61ha</p>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl sm:text-4xl font-black font-serif text-amber-400">07</div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-200 mt-1">Trụ Cột MarTech</div>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Đồng bộ từ Web 3D đến CRM & AI</p>
                  </div>
                  <div className="text-center px-2">
                    <div className="text-3xl sm:text-4xl font-black font-serif text-amber-400">100%</div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-amber-200 mt-1">Nghiệm Thu In-House</div>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-1">02 Biên bản pháp lý BBNT chính thức</p>
                  </div>
                </div>

                {/* Scope Matrix 7 Pillars Table */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>Ma Trận Phạm Vi Triển Khai 07 Trụ Cột (Scope Matrix)</span>
                    </h4>
                    <span className="text-[11px] text-slate-400 italic">
                      * Vuốt ngang trên thiết bị di động để xem trọn vẹn 5 cột thông số
                    </span>
                  </div>

                  <div className="rounded-xl border border-amber-500/20 bg-slate-950/70 overflow-hidden overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[760px]">
                      <thead>
                        <tr className="border-b border-amber-500/20 bg-amber-950/20 text-[11px] font-black uppercase tracking-wider text-amber-300">
                          <th className="py-3 px-3 w-12 text-center">STT</th>
                          <th className="py-3 px-4 w-44">Trụ Cột Chuyên Môn</th>
                          <th className="py-3 px-4">Giải Pháp Kỹ Thuật</th>
                          <th className="py-3 px-4 w-52">Chỉ Số Hiệu Năng</th>
                          <th className="py-3 px-4 w-56">Tác Động Thực Tế</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-xs">
                        {SCOPE_MATRIX_ROWS.map((row) => (
                          <tr key={row.stt} className="hover:bg-white/[0.02] transition-colors">
                            <td className="py-3.5 px-3 font-mono font-bold text-center text-amber-400 bg-black/20">
                              {row.stt}
                            </td>
                            <td className="py-3.5 px-4">
                              <div className="font-bold text-white">{row.pillar}</div>
                              <div className="text-[10px] text-amber-300/80 uppercase tracking-wider mt-0.5">
                                {row.category}
                              </div>
                            </td>
                            <td className="py-3.5 px-4 text-slate-300 leading-relaxed">
                              {row.techStack}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-emerald-300 font-medium">
                              {row.metrics}
                            </td>
                            <td className="py-3.5 px-4 text-slate-300 text-[11px] leading-relaxed">
                              {row.impact}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: TECH ECOSYSTEM (PILLARS 1-4) */}
            {activeTab === 'tech-pillars' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Pillar 1: Digital Storytelling Web Experience */}
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-slate-950/50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                        Trụ Cột 01
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Landing Page Kể Chuyện Số & Tương Tác 3D (Digital Storytelling)
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      Tải trang &lt;1.8s • 4.2% Conversion Rate
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Kiến trúc trải nghiệm cuộn mượt 60 FPS tích hợp thư viện Lenis Scroll qua 07 chương chuyển động,
                    giải phóng người xem khỏi bố cục bất động sản truyền thống. Mô hình tòa tháp 3D GLB nén nhẹ được
                    tải bất đồng bộ, cho phép tương tác trực quan xoay khối tháp và bóc tách từng tầng tiện ích. Toàn bộ
                    form đăng ký tư vấn được xác thực tức thời qua endpoint REST API{' '}
                    <code className="text-amber-300 bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs">
                      /wp-json/ecolife/v1/lead
                    </code>{' '}
                    đồng bộ trực tiếp về phễu CRM.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-amber-400 font-bold mb-1">Dual Showroom Mode</div>
                      <div className="text-slate-400 text-[11px]">Chuyển đổi liền mạch giữa chế độ Khách Hàng và Chế Độ Sa Bàn Đào Tạo Sale chuyên sâu.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-amber-400 font-bold mb-1">Time On Site +3.8x</div>
                      <div className="text-slate-400 text-[11px]">Thời gian trung bình người mua ở lại trang đạt 4 phút 18 giây so với 1 phút 08 giây chuẩn ngành.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-amber-400 font-bold mb-1">PWA & Caching</div>
                      <div className="text-slate-400 text-[11px]">Tối ưu hóa Service Worker lưu tạm tài nguyên tĩnh, phục vụ mượt mà ngay cả mạng yếu.</div>
                    </div>
                  </div>
                </div>

                {/* Pillar 2: Meta Ads Graph API & 5 Lead Brochures */}
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-slate-950/50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                        Trụ Cột 02
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Quảng Cáo Số & Tối Ưu Phễu Meta Ads Graph API
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      -54.8% CPL (774k xuống ~350k) • CTR 2.32%
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Thực hiện audit chuyên sâu tài khoản quảng cáo{' '}
                    <strong className="text-white font-mono">DOM - 8580</strong> (ID:{' '}
                    <code className="text-amber-300 bg-white/5 px-1 rounded font-mono text-xs">
                      act_302787476028580
                    </code>
                    ) thông qua Meta Ads Graph API. Thuật toán phát hiện và loại bỏ 68.5% ngân sách bị rò rỉ vào vị trí
                    Audience Network kém chất lượng, thiết lập bộ lọc tuổi chặt chẽ 28–55 và phân chia địa lý chiến lược
                    giữa cụm Đà Nẵng, Quảng Nam và nhà đầu tư Hà Nội / TP.HCM.
                  </p>

                  {/* 5 Lead Brochure Creatives Grid */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
                      Bộ 05 Ấn Phẩm Số Đổi Lead Tỷ Lệ Chuyển Đổi Cao (Meta Ads Creatives 4:5):
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      {ADS_BROCHURES.map((b) => (
                        <div
                          key={b.id}
                          className="group relative rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-md"
                        >
                          <div className="aspect-[4/5] w-full overflow-hidden">
                            <img
                              src={b.img}
                              alt={b.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              loading="lazy" decoding="async"
                            />
                          </div>
                          <div className="p-2 bg-black/90 text-center">
                            <span className="text-[10px] font-semibold text-slate-200 block truncate">
                              {b.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pillar 3: DOMATION DATA Flight Deck CRM */}
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-slate-950/50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                        Trụ Cột 03
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Agency CRM Data App — Trung Tâm Điều Phối Lead Thời Gian Thực
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      Phân bổ lead &lt;5s • 0% Rò rỉ dữ liệu
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Hệ thống <strong className="text-amber-300">DOMATION DATA War Room Flight Deck</strong> gồm 6,237 dòng
                    code React tùy biến, vận hành tại cổng bảo mật{' '}
                    <code className="text-amber-300 bg-white/5 px-1.5 py-0.5 rounded font-mono text-xs">
                      https://ecolifesignature.vn/data
                    </code>
                    . Hệ thống sử dụng thuật toán phân bổ xoay vòng <strong className="text-white">Round-Robin & Fair Share</strong>{' '}
                    đảm bảo tính công bằng tuyệt đối giữa các đội ngũ tư vấn, kết hợp bộ lọc Gatekeeper ngăn chặn spam/rác
                    và bot tự động bắn webhook thông báo trực tiếp qua Zalo OA của tư vấn viên phụ trách.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Tốc Độ &lt; 5 Giây</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">Khách hàng điền biểu mẫu, chuyên viên tư vấn nhận cuộc gọi chỉ trong vòng 5 giây.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Bảo Mật Gatekeeper</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">Mã hóa số điện thoại, phát hiện số ảo tự động, kiểm soát phân quyền 3 cấp độ.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Bàn Giao Nghiệm Thu</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">Được CĐT Capital House ký kết nghiệm thu ngày 05/11/2026 (Mã 0511/2026/BBNT-CRM).</p>
                    </div>
                  </div>
                </div>

                {/* Pillar 4: Gemini 2.5 Flash AI Assistant */}
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-slate-950/50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                        Trụ Cột 04
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Trợ Lý AI Đa Tác Tử Gemini 2.5 Flash Fine-Tuned
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      Độ chính xác 94.6% • Phản hồi &lt;800ms
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Được tinh chỉnh trên tập dữ liệu đặc thù 200 mẫu JSONL về dự án EcoLife Signature (thông số căn hộ,
                    bảng giá, chính sách ngân hàng VietinBank/BIDV, chứng chỉ xanh EDGE). Trợ lý AI vận hành theo hai chế độ:
                    vừa tương tác trực tiếp giải đáp thắc mắc khách hàng 24/7 với cấu trúc JSON chuẩn RFC 8259, vừa đóng
                    vai trò công cụ truy vấn dữ liệu báo cáo kinh doanh nội bộ cho Ban Giám Đốc bằng ngôn ngữ tự nhiên.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: CREATIVE, MEDIA & 3D (PILLARS 5-7) */}
            {activeTab === 'creative-media' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Pillar 5: Print Collateral & SGS-IFC EDGE Certificate */}
                <div className="p-6 rounded-2xl border border-emerald-500/30 bg-[#061810]/60 space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">
                        Trụ Cột 05
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Hệ Thống Thiết Kế In Ấn & Bảo Chứng Công Trình Xanh SGS - IFC EDGE
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-300 font-semibold bg-emerald-500/20 px-2.5 py-1 rounded border border-emerald-500/30">
                      World Bank / IFC Standard
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Sản xuất bộ ấn phẩm bán hàng cao cấp gồm tờ gập 7 cánh dạng Accordion 14x21cm in Offset 300 DPI,
                    quyển cẩm nang đào tạo chuyên sâu và hồ sơ bảo chứng công trình xanh quốc tế SGS - IFC EDGE.
                    Dự án đạt chuẩn hiệu năng năng lượng vượt bậc theo chuẩn đánh giá của Ngân Hàng Thế Giới.
                  </p>

                  {/* Upright Official Certificate Verification Card */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pt-2">
                    <div
                      data-testid="edge-certificate-container"
                      className="relative rounded-2xl border border-emerald-500/30 bg-black/60 p-4 sm:p-5 text-center shadow-lg"
                    >
                      <div className="text-xs font-bold text-emerald-300 uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
                        <Leaf className="w-4 h-4 text-emerald-400" />
                        <span>Chứng Chỉ Xanh SGS - IFC EDGE Chính Thức (A4 Dọc)</span>
                      </div>
                      {/* STRICT UPRIGHT IMAGE CONTAINER */}
                      <div className="w-full max-w-[340px] mx-auto flex items-center justify-center bg-black/80 rounded-xl p-2.5 border border-emerald-500/20">
                        <img
                          src="/assets/ecolife/edge_certificate_official.webp"
                          alt="Chứng chỉ công trình xanh quốc tế SGS - IFC EDGE chính thức"
                          data-testid="edge-certificate-img"
                          className="w-auto max-w-full h-auto max-h-[440px] object-contain rounded-lg shadow-xl"
                          style={{
                            transform: 'none',
                            imageOrientation: 'from-image',
                            display: 'block',
                          }}
                          loading="lazy" decoding="async"
                        />
                      </div>
                      <p className="text-[10px] text-slate-400 mt-2 font-mono">
                        Mã kiểm định độc lập SGS • Tiêu chuẩn công trình xanh quốc tế IFC
                      </p>
                    </div>

                    {/* Verified 3 Green Metrics Strip & Accordion Flyer */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                          3 Chỉ Số Tiết Kiệm Năng Lượng Độc Quyền:
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 rounded bg-white/5 text-xs">
                            <span className="text-slate-300">Tiết kiệm điện năng:</span>
                            <span className="font-mono font-bold text-emerald-300 text-sm">-24% Năng Lượng</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded bg-white/5 text-xs">
                            <span className="text-slate-300">Tiết kiệm nguồn nước sạch:</span>
                            <span className="font-mono font-bold text-emerald-300 text-sm">-30% Tiêu Thụ Nước</span>
                          </div>
                          <div className="flex items-center justify-between p-2 rounded bg-white/5 text-xs">
                            <span className="text-slate-300">Giảm phát thải vật liệu:</span>
                            <span className="font-mono font-bold text-emerald-300 text-sm">-30% Hàm Lượng Carbon</span>
                          </div>
                        </div>
                      </div>

                      {/* Accordion Flyer Mockup */}
                      <div className="rounded-xl border border-white/10 overflow-hidden bg-black/40 p-3">
                        <div className="text-[11px] font-bold text-amber-300 mb-2">
                          Ấn Phẩm Tờ Gấp 7x7 Accordion (2 Mặt):
                        </div>
                        <img
                          src="/assets/ecolife/TO_GAP_2_MAT_ONLINE_WEBSITE_BO_TRI_HOP_LY.webp"
                          alt="Tờ gấp 7x7 Accordion hai mặt"
                          className="w-full h-auto rounded-lg object-cover"
                          loading="lazy" decoding="async"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 6: 4K Cinematic Media */}
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-slate-950/50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                        Trụ Cột 06
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Sản Xuất Video Điện Ảnh 4K & Kho Tư Liệu 85+ Walkthroughs
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      4K Master v16 • 0.00s Drift Audio
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Sản xuất trọn gói phim thương hiệu 4K 90 giây phục vụ đại sự kiện mở bán, kho tư liệu 85+ video clip
                    quay chi tiết nội thất và 5 clip dọc 9:16 cho các chiến dịch TikTok/Reels. Kỹ thuật dựng khóa khớp
                    thời gian 1.1x đảm bảo âm thanh thuyết minh đồng điệu 100% với nhịp chuyển cảnh mà không bị lệch pha.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60">
                      <div className="aspect-video relative">
                        <video
                          src="/assets/ecolife/hero_facade_4k.mp4"
                          poster="/assets/ecolife/FACADE_HUONG_CHINH_03.webp"
                          playsInline
                          muted
                          autoPlay
                          loop
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2.5 text-center text-[11px] font-mono text-amber-300">
                        Phim Kiến Trúc 4K: Hero Facade 3 Khối Tháp
                      </div>
                    </div>

                    <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60">
                      <div className="aspect-video relative">
                        <video
                          src="/assets/ecolife/hero_trailer_15s.mp4"
                          poster="/assets/ecolife/CAN_CANH_01.webp"
                          playsInline
                          muted
                          autoPlay
                          loop
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-2.5 text-center text-[11px] font-mono text-amber-300">
                        Teaser Trailer 15s: 4 Tầng Vườn Chân Mây
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pillar 7: Three.js 3D Virtual Tour */}
                <div className="p-6 rounded-2xl border border-amber-500/20 bg-slate-950/50 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">
                        Trụ Cột 07
                      </span>
                      <h4 className="text-lg font-bold text-white">
                        Sa Bàn Ảo 3D Three.js & Tương Tác Căn Hộ Đa Chiều
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      60 FPS WebGL • Phối Cảnh 360°
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Xây dựng sa bàn trực tuyến bằng Three.js cho phép khách hàng toàn quốc xoay 360 độ ngắm toàn cảnh
                    khối tháp, góc đón gió biển vịnh Liên Chiểu và mặt hồ Bàu Tràm 61ha. Kỹ thuật bóc tách mái dollhouse
                    cắt lớp mang lại góc nhìn trực quan vào nội thất từng căn hộ mà không cần bất kỳ ứng dụng hỗ trợ nào.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 4: LEGAL ACCEPTANCE RECORDS */}
            {activeTab === 'legal-records' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-950/15">
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-amber-400" />
                    <span>Hồ Sơ Nghiệm Thu & Bảo Chứng Pháp Lý Thực Tế Cùng Capital House Group</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-light">
                    Mọi hạng mục công nghệ, hệ thống điều phối dữ liệu và ấn phẩm truyền thông đều được hoàn thành
                    và ký kết biên bản bàn giao nghiệm thu chính thức giữa Chủ đầu tư Capital House Group (CHG Homes)
                    và Domation Agency.
                  </p>
                </div>

                {/* 2 Signed Acceptance Minute Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {LEGAL_MINUTES.map((doc) => (
                    <div
                      key={doc.code}
                      className="p-6 rounded-2xl border border-amber-500/30 bg-slate-950/80 shadow-[0_0_30px_rgba(245,158,11,0.06)] space-y-4 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2">
                          <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                            Số: {doc.minuteNumber}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                            {doc.statusBadge}
                          </span>
                        </div>

                        <h5 className="text-base font-bold text-white font-serif">{doc.title}</h5>

                        <div className="text-[11px] text-slate-400 font-mono italic">
                          Căn cứ: {doc.legalBase}
                        </div>

                        <div className="space-y-2 pt-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-white/5">
                            <span className="text-amber-300 font-bold block mb-0.5">
                              Đại Diện Chủ Đầu Tư (CHG Homes):
                            </span>
                            <span className="text-white font-semibold">{doc.clientRep.name}</span>
                            <span className="text-slate-400"> — {doc.clientRep.title}</span>
                            <div className="text-[10px] text-slate-500 mt-0.5">{doc.clientRep.org}</div>
                          </div>

                          <div className="p-2.5 rounded-lg bg-white/5">
                            <span className="text-amber-300 font-bold block mb-0.5">
                              Đại Diện Tổng Thầu Triển Khai:
                            </span>
                            <span className="text-white font-semibold">{doc.agencyRep.name}</span>
                            <span className="text-slate-400"> — {doc.agencyRep.title}</span>
                            <div className="text-[10px] text-slate-500 mt-0.5">{doc.agencyRep.org}</div>
                          </div>
                        </div>

                        <div className="text-xs text-slate-300 pt-2 space-y-1">
                          <div>
                            <strong className="text-slate-200">Phạm vi nghiệm thu:</strong> {doc.scope}
                          </div>
                          <div>
                            <strong className="text-slate-200">Kết quả thẩm định:</strong> {doc.result}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-white/5 pt-3 mt-4">
                        <span>Ngày bàn giao: {doc.deliveryDate}</span>
                        <span className="text-emerald-400 flex items-center gap-1 font-bold">
                          <Check className="w-3.5 h-3.5" />
                          <span>Đã Ký Duyệt Hai Chiều</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Real Site Construction Proof */}
                <div className="p-6 rounded-2xl border border-white/10 bg-slate-950/60 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
                        Hình Ảnh Thực Địa
                      </span>
                      <h5 className="text-base font-bold text-white mt-0.5">
                        Tiến Độ Thi Công Thực Tế Tại Đại Lộ Mê Linh, Liên Chiểu, Đà Nẵng
                      </h5>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      Real Site Photo
                    </span>
                  </div>

                  <div className="relative rounded-xl overflow-hidden border border-white/10 max-h-[420px] flex items-center justify-center bg-black">
                    <img
                      src="/assets/ecolife/3_TIEN_DO_THI_CONG_THUC_TE_THAT.webp"
                      alt="Tiến độ thi công thực tế tại công trường EcoLife Signature"
                      className="w-full h-full object-cover max-h-[420px]"
                      loading="lazy" decoding="async"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: 3D FLOORPLAN BLUEPRINT GALLERY */}
            {activeTab === 'floorplans-3d' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
                      Thư Viện Mặt Bằng 3D Điển Hình
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-0.5">
                      Bản Vẽ Kiến Trúc 06 Mẫu Căn Hộ Chuẩn Xanh EDGE
                    </h4>
                  </div>

                  {/* Elongated Slide-Dots + Nav Buttons */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-amber-300 font-bold">
                      0{selectedUnitIndex + 1} / 0{FLOORPLAN_UNITS.length}
                    </span>

                    {/* Spring-animated Slide-Dots */}
                    <div className="flex items-center gap-1.5" role="tablist" aria-label="Floorplan Units">
                      {FLOORPLAN_UNITS.map((unit, idx) => {
                        const isCurrent = idx === selectedUnitIndex;
                        return (
                          <button
                            key={unit.id}
                            type="button"
                            role="tab"
                            aria-selected={isCurrent}
                            tabIndex={isCurrent ? 0 : -1}
                            aria-label={`Xem mặt bằng căn ${unit.code}`}
                            onClick={() => setSelectedUnitIndex(idx)}
                            className="py-1 focus:outline-none cursor-pointer"
                          >
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${
                                isCurrent
                                  ? 'w-7 bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.6)]'
                                  : 'w-2 bg-white/20 hover:bg-white/40'
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedUnitIndex((prev) =>
                            prev > 0 ? prev - 1 : FLOORPLAN_UNITS.length - 1
                          )
                        }
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Căn hộ trước"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedUnitIndex((prev) =>
                            prev < FLOORPLAN_UNITS.length - 1 ? prev + 1 : 0
                          )
                        }
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                        aria-label="Căn hộ kế tiếp"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Unit Selector Pills Ribbon */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  {FLOORPLAN_UNITS.map((unit, idx) => {
                    const isCurrent = idx === selectedUnitIndex;
                    return (
                      <button
                        key={unit.id}
                        type="button"
                        data-unit={unit.code}
                        role="tab"
                        aria-selected={isCurrent}
                        tabIndex={isCurrent ? 0 : -1}
                        onClick={() => setSelectedUnitIndex(idx)}
                        className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                          isCurrent
                            ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                            : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
                        }`}
                      >
                        <span className="font-mono">Căn {unit.code}</span>
                        <span className="text-[10px] opacity-80">({unit.areaGross})</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Unit Blueprint & Specs Showcase */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl border border-amber-500/20 bg-slate-950/70 items-center">
                  {/* Left: High-Res Blueprint Viewer */}
                  <div className="lg:col-span-7 flex flex-col items-center justify-center bg-black/60 rounded-xl p-3 border border-white/10">
                    <div className="w-full aspect-[4/3] flex items-center justify-center overflow-hidden">
                      <img
                        src={activeUnit.imageSrc}
                        alt={`Mặt bằng 3D ${activeUnit.name}`}
                        data-testid="floorplan-image"
                        className="max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                        loading="lazy" decoding="async"
                      />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-2 text-center">
                      Bản vẽ thiết kế căn hộ {activeUnit.code} • Chuẩn xanh SGS - IFC EDGE
                    </div>
                  </div>

                  {/* Right: Specifications & Architectural Highlight */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                        Mã Căn: {activeUnit.code}
                      </span>
                      <h4 className="text-xl font-bold font-serif text-white mt-1.5">
                        {activeUnit.name}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Diện tích tim tường:</span>
                        <span className="font-mono font-bold text-amber-300 text-sm">{activeUnit.areaGross}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Diện tích thông thủy:</span>
                        <span className="font-mono font-bold text-white text-sm">{activeUnit.areaNet}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Bố trí phòng:</span>
                        <span className="font-semibold text-slate-200">{activeUnit.bedrooms}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Vệ sinh:</span>
                        <span className="font-semibold text-slate-200">{activeUnit.bathrooms}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-start gap-1.5">
                        <strong className="text-amber-300 shrink-0">Hướng ban công:</strong>
                        <span className="text-slate-300">{activeUnit.orientation}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <strong className="text-amber-300 shrink-0">Tầm nhìn:</strong>
                        <span className="text-slate-300">{activeUnit.view}</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-950/20 text-xs text-slate-200 leading-relaxed font-light">
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Điểm Nhấn Kiến Trúc & Lưu Thông Gió</span>
                      </div>
                      {activeUnit.highlight}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Modal Footer */}
          <div className="sticky bottom-0 z-40 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-[#090616]/95 backdrop-blur-md border-t border-amber-500/20 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dự án được bảo chứng pháp lý và nghiệm thu 100% cùng Tập đoàn Capital House</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href="https://ecolifesignature.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold"
              >
                <span>Xem Website Dự Án</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default EcoLifeDetailModal;
