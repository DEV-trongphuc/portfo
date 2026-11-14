import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  X,
  AlertCircle,
} from 'lucide-react';
import { copyWithToast } from '../../utils/toast';

export interface ContactConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  'CRM Automation & Chia Data Đa Đại Lý / Meta CAPI',
  'ERP 5.0 Toàn Trình (GPS, Ca Làm, Lương, KPI)',
  'AI Chatbot RAG / AI Workflow / Computer Vision',
  'WebGL 3D & Website / Landing Page Chuẩn SEO + GEO',
  'Zalo Mini App + Loyalty ZNS Đa Ngành',
  'Tư Vấn Chuyển Đổi Số & Tăng Trưởng Tổng Thể',
];

interface FormValues {
  name: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface SubmittedReceipt {
  values: FormValues;
  mode: 'synced' | 'fallback';
  emailSent: boolean;
  submittedAt: string;
  statusDetail: string;
}

export const ContactConsultModal: React.FC<ContactConsultModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: defaultService || SERVICE_OPTIONS[0],
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);

  useEffect(() => {
    if (defaultService) {
      setValues((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): string | null => {
    if (values.name.trim().length < 2) return 'Vui lòng nhập Họ và Tên (tối thiểu 2 ký tự).';
    if (!/^[0-9+\s().-]{8,18}$/.test(values.phone.trim())) {
      return 'Vui lòng nhập Số điện thoại hợp lệ để TURNIO liên hệ lại.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      return 'Vui lòng nhập đúng định dạng Email để nhận thư xác nhận.';
    }
    if (values.company.trim().length < 2) {
      return 'Vui lòng nhập Tên Đơn vị / Công ty hoặc Thương hiệu của bạn.';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    const invalid = validate();
    if (invalid) {
      setErrorMsg(invalid);
      return;
    }

    setSubmitting(true);
    const payload = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      company: values.company.trim(),
      service: values.service,
      message: values.message.trim() || 'Đăng ký trao đổi kiến trúc hệ thống & tối ưu vận hành.',
      pageUrl: typeof window !== 'undefined' ? window.location.href : 'https://portfo-turnio.vercel.app/',
    };

    try {
      let syncedOk = false;
      let emailSent = false;
      let detail = '';

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (res && res.ok) {
        const data = (await res.json()) as {
          ok?: boolean;
          emailSent?: boolean;
          rowNumber?: number | null;
        };
        if (data.ok) {
          syncedOk = true;
          emailSent = Boolean(data.emailSent);
          detail = `Đã ghi dòng #${data.rowNumber ?? 'mới'} vào Google Sheet & gửi Email xác nhận.`;
        }
      } else {
        const publicWebhook = import.meta.env.VITE_APPS_SCRIPT_WEBHOOK_URL as string | undefined;
        if (publicWebhook && publicWebhook.trim()) {
          const direct = await fetch(publicWebhook.trim(), {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            redirect: 'follow',
            body: JSON.stringify(payload),
          }).catch(() => null);
          if (direct && direct.ok) {
            const directJson = (await direct.json().catch(() => ({}))) as {
              ok?: boolean;
              emailSent?: boolean;
            };
            if (directJson.ok !== false) {
              syncedOk = true;
              emailSent = Boolean(directJson.emailSent);
              detail = 'Đã ghi trực tiếp lên Google Apps Script Webhook & gửi Email xác nhận.';
            }
          }
        }
      }

      const nowStr = new Date().toLocaleString('vi-VN', { hour12: false });
      setReceipt({
        values: { ...payload },
        mode: syncedOk ? 'synced' : 'fallback',
        emailSent,
        submittedAt: nowStr,
        statusDetail: syncedOk
          ? detail
          : 'Webhook APPS_SCRIPT_WEBHOOK_URL chưa được gắn vào Vercel Env Vars — bạn có thể gửi ngay bản tóm tắt bên dưới qua Email/Zalo.',
      });
    } catch (err) {
      setErrorMsg(`Có lỗi xảy ra khi gửi thông tin: ${String(err)}`);
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setReceipt(null);
    setErrorMsg(null);
    setValues({
      name: '',
      phone: '',
      email: '',
      company: '',
      service: defaultService || SERVICE_OPTIONS[0],
      message: '',
    });
  };

  const buildSummaryText = (r: SubmittedReceipt) =>
    [
      `[TURNIO PORTFO - YÊU CẦU TƯ VẤN]`,
      `Họ & Tên: ${r.values.name}`,
      `Số Điện Thoại: ${r.values.phone}`,
      `Email: ${r.values.email}`,
      `Đơn Vị / Công Ty: ${r.values.company}`,
      `Giải Pháp: ${r.values.service}`,
      `Nội Dung: ${r.values.message}`,
    ].join('\n');

  const mailtoHref = receipt
    ? `mailto:turniodev@gmail.com?subject=${encodeURIComponent(
        `[Tư Vấn Hệ Thống] ${receipt.values.name} - ${receipt.values.company}`
      )}&body=${encodeURIComponent(buildSummaryText(receipt))}`
    : 'mailto:turniodev@gmail.com';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-consult-title"
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-blue-100 shadow-[0_32px_90px_-18px_rgba(15,23,42,0.4)] overflow-hidden my-auto">
        {/* Top Accent Header */}
        <div className="relative px-6 py-5 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E40FF] text-white">
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng hộp thoại liên hệ"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[10.5px] font-extrabold uppercase tracking-widest text-sky-200 mb-2">
            <Sparkles size={12} />
            <span>TURNIO DEV • Direct Consultation</span>
          </div>
          <h2 id="contact-consult-title" className="font-display text-xl sm:text-2xl font-extrabold">
            {receipt ? 'Cảm Ơn Đã Kết Nối Cùng TURNIO!' : 'Đăng Ký Tư Vấn Giải Pháp Hệ Thống'}
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/90 mt-1 pr-8">
            {receipt
              ? 'Huỳnh Trọng Phúc đã tiếp nhận bản tóm tắt yêu cầu từ doanh nghiệp của bạn.'
              : 'Điền SĐT, Email & Đơn vị công tác để đồng bộ CRM Google Sheets và nhận phản hồi trực tiếp.'}
          </p>
        </div>

        {/* Body */}
        {receipt ? (
          <div className="p-6 sm:p-7 space-y-5">
            {/* Celebration Badge */}
            <div className="flex flex-col items-center text-center space-y-2.5 pt-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <CheckCircle2 size={34} strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900">
                Xin Cảm Ơn {receipt.values.name}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
                Thông tin của <strong>{receipt.values.company}</strong> đã được ghi nhận lúc{' '}
                <span className="font-mono font-semibold text-slate-800">{receipt.submittedAt}</span>.
                Phúc sẽ kiểm tra bài toán và liên hệ lại qua số{' '}
                <span className="font-bold text-[#1E40FF]">{receipt.values.phone}</span> trong thời gian sớm nhất.
              </p>
            </div>

            {/* Honest Delivery Status Pill */}
            {receipt.mode === 'synced' ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 px-4 py-3 flex items-start gap-2.5 text-xs text-emerald-900">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold">Đồng Bộ Google Sheet Apps Script &amp; Email Thành Công</div>
                  <div className="text-emerald-800/90 mt-0.5">
                    {receipt.statusDetail}
                    {receipt.emailSent
                      ? ` Email cảm ơn cũng đã gửi tới ${receipt.values.email}.`
                      : ''}
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 flex items-start gap-2.5 text-xs text-amber-900">
                <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold">Đã Tạo Phiếu Tóm Tắt • Chờ Kích Hoạt Webhook Apps Script</div>
                  <div className="text-amber-800 mt-0.5">{receipt.statusDetail}</div>
                </div>
              </div>
            )}

            {/* Receipt Summary Card */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200/90 p-4 space-y-2 text-xs">
              <div className="text-[10.5px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                Thông Tin Đã Ghi Nhận
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-500">Họ &amp; Tên: </span>
                  <strong className="text-slate-900">{receipt.values.name}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Số Điện Thoại: </span>
                  <strong className="text-[#1E40FF]">{receipt.values.phone}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Email: </span>
                  <strong className="text-slate-900">{receipt.values.email}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Đơn Vị / Công Ty: </span>
                  <strong className="text-slate-900">{receipt.values.company}</strong>
                </div>
              </div>
              <div className="pt-1 border-t border-slate-200/70">
                <span className="text-slate-500">Giải Pháp: </span>
                <strong className="text-slate-900">{receipt.values.service}</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="https://zalo.me/0378859736"
                target="_blank"
                rel="noreferrer"
                className="btn-inkica-primary py-3 px-4 text-xs justify-center"
              >
                <MessageCircle size={15} />
                <span>Nhắn Zalo 0378.859.736</span>
              </a>
              <a
                href={mailtoHref}
                className="ql-btn-outline py-3 px-4 text-xs font-extrabold justify-center"
              >
                <Mail size={15} />
                <span>Gửi Kèm Email Trực Tiếp</span>
              </a>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <button
                type="button"
                onClick={() => void copyWithToast(buildSummaryText(receipt), 'Thông tin liên hệ')}
                className="inline-flex items-center gap-1.5 font-bold text-slate-600 hover:text-[#1E40FF] cursor-pointer"
              >
                <Copy size={13} />
                <span>Sao chép phiếu</span>
              </button>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="font-bold text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 cursor-pointer"
                >
                  Hoàn tất
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                  Họ &amp; Tên <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn An"
                    value={values.name}
                    onChange={(e) => setValues((p) => ({ ...p, name: e.target.value }))}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1E40FF] focus:outline-none text-sm text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                  Số Điện Thoại / Zalo <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0909 xxx xxx"
                    value={values.phone}
                    onChange={(e) => setValues((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1E40FF] focus:outline-none text-sm text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                  Email Nhận Xác Nhận <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="ceo@doanhnghiep.vn"
                    value={values.email}
                    onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1E40FF] focus:outline-none text-sm text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-company" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                  Đơn Vị / Công Ty <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building2 size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    required
                    placeholder="Công ty / Chuỗi / Sàn F1..."
                    value={values.company}
                    onChange={(e) => setValues((p) => ({ ...p, company: e.target.value }))}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1E40FF] focus:outline-none text-sm text-slate-900"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                Hệ Thống / Giải Pháp Quan Tâm
              </label>
              <select
                id="contact-service"
                name="service"
                value={values.service}
                onChange={(e) => setValues((p) => ({ ...p, service: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1E40FF] focus:outline-none text-sm text-slate-900 font-semibold"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-extrabold text-slate-800 mb-1.5">
                Mô Tả Ngắn Bài Toán Hoặc Mục Tiêu Triển Khai
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                placeholder="Ví dụ: Chuỗi 5 chi nhánh muốn đồng bộ POS - Zalo ZNS hoặc sàn BĐS cần Chia Data đa đại lý + Meta CAPI..."
                value={values.message}
                onChange={(e) => setValues((p) => ({ ...p, message: e.target.value }))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#1E40FF] focus:outline-none text-sm text-slate-900 resize-none"
              />
            </div>

            {errorMsg && (
              <div className="rounded-xl bg-rose-50 border border-rose-200 px-3.5 py-2.5 text-xs font-bold text-rose-700 flex items-center gap-2">
                <AlertCircle size={15} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <a
                href="https://zalo.me/0378859736"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-[#1E40FF]"
              >
                <MessageCircle size={14} className="text-[#1E40FF]" />
                <span>Hoặc chat Zalo nhanh: 0378.859.736</span>
              </a>

              <button
                type="submit"
                disabled={submitting}
                className="btn-inkica-primary px-6 py-3 text-xs font-extrabold inline-flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {submitting ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Đang gửi &amp; đồng bộ...</span>
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    <span>Gửi Yêu Cầu Tư Vấn</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactConsultModal;
