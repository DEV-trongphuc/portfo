import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Award, X } from 'lucide-react';
import Modal from '../UI/Modal';
import {
  CERTIFICATIONS,
  FEATURED_FLAGSHIP_PARTNERS,
  F1_AGENCY_PARTNERS,
  PARTNERS,
} from '../../constants';

export interface TrustShowcaseProps {
  onOpenEcoLife?: () => void;
}

const PARTNER_ROWS = [
  {
    rowTitle: 'Bất Động Sản & Tài Chính',
    matchIndustries: ['Bất Động Sản', 'Nghỉ Dưỡng & BĐS', 'Vật Liệu & Nội Thất', 'Tài Chính & Đầu Tư'],
  },
  {
    rowTitle: 'Giáo Dục, Công Nghệ & Y Tế',
    matchIndustries: ['Giáo Dục Quốc Tế', 'EdTech & Đào Tạo', 'Công Nghệ & SaaS', 'Y Tế & Chăm Sóc Sức Khỏe'],
  },
  {
    rowTitle: 'Thương Mại, F&B & Lifestyle',
    matchIndustries: ['F&B & Nhà Hàng', 'Mỹ Phẩm & Làm Đẹp', 'Bán Lẻ & TMĐT', 'Thời Trang & Lifestyle'],
  },
];

const TrustShowcase: React.FC<TrustShowcaseProps> = ({ onOpenEcoLife }) => {
  const [selectedCert, setSelectedCert] = useState<(typeof CERTIFICATIONS)[number] | null>(null);

  const groupedPartnerIds = new Set<string>();
  const rows = PARTNER_ROWS.map((row) => {
    const items = PARTNERS.filter((p) => {
      if (row.matchIndustries.some((ind) => p.industry.toLowerCase().includes(ind.toLowerCase()))) {
        groupedPartnerIds.add(p.name);
        return true;
      }
      return false;
    });
    return { ...row, items };
  });
  const remainingPartners = PARTNERS.filter((p) => !groupedPartnerIds.has(p.name));

  return (
    <section
      id="partners"
      className="py-20 sm:py-28 relative bg-white/65 backdrop-blur-sm border-b border-[#E2E8F0] overflow-hidden"
    >
      <div className="max-w-[1220px] mx-auto px-6 sm:px-10 relative z-10 space-y-16">
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="ql-eyebrow">CHƯƠNG 07 • ĐỐI TÁC ĐỒNG HÀNH &amp; CHỨNG CHỈ</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#0F172A]">
            Chủ Đầu Tư, Đại Lý F1 &amp;{' '}
            <span className="ql-grad-title">24+ Thương Hiệu.</span>
          </h2>
        </div>

        {/* ROW 1: 2 EQUAL FLAGSHIP CARDS — CAPITAL HOUSE & ECOLIFE SIGNATURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_FLAGSHIP_PARTNERS.map((item) => {
            const isEcoLife = item.id === 'ecolife-signature';
            return (
              <div
                key={item.id}
                className="ql-card rounded-[28px] p-8 sm:p-10 bg-white border border-[#D97706]/45 flex flex-col justify-between gap-6"
              >
                <div className="space-y-6">
                  <div className="h-24 rounded-2xl bg-white/40 border border-[#E2E8F0] flex items-center justify-center p-4">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-14 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="space-y-2 text-center">
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B45309]">
                      {item.role}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#0F172A]">{item.name}</h3>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {isEcoLife
                        ? 'Website Quiet Luxury, WebGL 3D, Trợ lý AI Portal & Auto Routing F1.'
                        : 'Chủ đầu tư tiên phong chuẩn Xanh IFC EDGE — Nghiệm thu CRM & Media 2026.'}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-center gap-3">
                  {isEcoLife && onOpenEcoLife && (
                    <button
                      type="button"
                      onClick={onOpenEcoLife}
                      className="ql-btn-gold h-10 px-5 text-xs whitespace-nowrap cursor-pointer"
                    >
                      <span>Xem Hồ Sơ Dự Án</span>
                      <ArrowUpRight size={14} className="shrink-0" />
                    </button>
                  )}
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B45309] hover:underline whitespace-nowrap"
                    >
                      <span>{isEcoLife ? 'ai.ecolifesignature.vn' : 'chgroup.vn'}</span>
                      <ExternalLink size={13} className="shrink-0" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ROW 2: 3 OFFICIAL F1 AGENCIES (TÙNG LONG, HỢP NHẤT, IHD) */}
        <div className="space-y-5">
          <div className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#B45309]">
            3 Đại Lý Phân Phối Chính Thức (F1)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {F1_AGENCY_PARTNERS.map((agency) => (
              <div
                key={agency.id}
                className="ql-card rounded-[24px] p-6 sm:p-7 bg-white border border-[#E2E8F0] flex flex-col items-center text-center gap-4"
              >
                <div className="w-full h-24 rounded-xl bg-white/40 border border-[#E2E8F0] p-3 flex items-center justify-center">
                  <img
                    src={agency.logo}
                    alt={agency.name}
                    className="max-h-14 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-[#0F172A]">{agency.name}</h4>
                  <div className="text-xs font-medium text-[#B45309] mt-0.5">
                    {agency.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: ALL 24+ PARTNER BRANDS IN CLEAN SPACIOUS LOGO ROWS */}
        <div className="rounded-[28px] bg-white border border-[#E2E8F0] p-7 sm:p-10 space-y-8">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0F172A]">
              Mạng Lưới Thương Hiệu Hợp Tác
            </h3>
            <span className="text-xs font-bold text-[#B45309]">{PARTNERS.length} Thương Hiệu</span>
          </div>

          <div className="space-y-7">
            {[
              ...rows.filter((r) => r.items.length > 0),
              ...(remainingPartners.length > 0
                ? [{ rowTitle: 'Khối Thương Mại & Dịch Vụ', items: remainingPartners }]
                : []),
            ].map((group, gIdx) => (
              <div key={gIdx} className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#475569]">
                  {group.rowTitle}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {group.items.map((partner, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-white/40 border border-[#E2E8F0] hover:border-[#D97706] px-3 py-4 flex flex-col items-center justify-center text-center gap-2 transition-colors"
                    >
                      <div className="h-9 flex items-center justify-center">
                        {partner.image ? (
                          <img
                            src={partner.image}
                            alt={partner.name}
                            className="max-h-8 max-w-[100px] w-auto object-contain"
                            loading="lazy"
                          />
                        ) : (
                          <span className="font-display font-bold text-xs text-[#B45309]">
                            {partner.name}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] font-semibold text-[#0F172A] truncate w-full">
                        {partner.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 4: CERTIFICATIONS (Clean Visual Grid) */}
        <div id="certifications" className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-2xl text-[#0F172A] flex items-center gap-2">
              <Award size={20} className="text-[#D97706]" />
              <span>Chứng Chỉ Quốc Tế</span>
            </h3>
            <span className="text-xs font-semibold text-[#475569]">Meta • Google • HubSpot</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
            {CERTIFICATIONS.map((cert, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="rounded-xl bg-white border border-[#E2E8F0] hover:border-[#D97706] p-2.5 flex flex-col items-center text-center gap-2 transition-all cursor-pointer group"
              >
                <div className="h-16 w-full flex items-center justify-center bg-white/40 rounded-lg p-1.5">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="text-[10.5px] font-semibold text-[#0F172A] line-clamp-1 w-full">
                  {cert.issuer}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.name || 'Chứng Chỉ'}
        className="max-w-2xl"
      >
        {selectedCert && (
          <div className="p-6 space-y-3 text-center">
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="max-h-[62vh] w-auto object-contain mx-auto rounded-xl"
            />
            <div className="text-xs font-bold text-[#B45309]">
              {selectedCert.issuer} • {selectedCert.year}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default TrustShowcase;
