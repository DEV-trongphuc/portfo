import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Code2,
  Cpu,
  Layers,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  Terminal,
  Video,
  Wrench,
} from 'lucide-react';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

type SkillDomainId = 'all' | 'dev' | 'antigravity' | 'marketing' | 'creative' | 'tools';

interface SkillGroup {
  id: string;
  domain: Exclude<SkillDomainId, 'all'>;
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accentBg: string;
  accentText: string;
  skills: { name: string; tag?: string }[];
}

const DOMAIN_TABS: { id: SkillDomainId; label: string }[] = [
  { id: 'all', label: 'Tất Cả Kỹ Năng' },
  { id: 'dev', label: 'Dev & Ngôn Ngữ' },
  { id: 'antigravity', label: 'Antigravity & AI' },
  { id: 'marketing', label: 'Marketing & SEO' },
  { id: 'creative', label: 'Design & Edit Video' },
  { id: 'tools', label: 'Tools, Cloud & App' },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages-core',
    domain: 'dev',
    badge: 'Core Programming',
    title: 'Ngôn Ngữ Lập Trình & Database',
    subtitle: 'Từ Frontend UI phản hồi <100ms đến Backend chịu tải cao & xử lý dữ liệu SQL.',
    icon: <Code2 size={18} />,
    accentBg: 'bg-blue-50 border-blue-200/80',
    accentText: 'text-[#1E40FF]',
    skills: [
      { name: 'TypeScript', tag: 'Strict' },
      { name: 'JavaScript (ES6+)' },
      { name: 'Python', tag: 'AI / Data' },
      { name: 'SQL / PostgreSQL' },
      { name: 'HTML5 / CSS3' },
      { name: 'PHP / Laravel' },
      { name: 'Google Apps Script' },
      { name: 'Bash / PowerShell' },
    ],
  },
  {
    id: 'fullstack-app',
    domain: 'dev',
    badge: 'Web, 3D & App Architecture',
    title: 'Framework, Web 3D & Mobile/Mini App',
    subtitle: 'Xây dựng ERP, SaaS đa người dùng, WebGL 3D tương tác & Zalo Mini App.',
    icon: <Layers size={18} />,
    accentBg: 'bg-sky-50 border-sky-200/80',
    accentText: 'text-[#0284C7]',
    skills: [
      { name: 'React 19', tag: 'Hooks' },
      { name: 'Next.js App Router' },
      { name: 'Node.js / NestJS' },
      { name: 'Three.js / WebGL 3D', tag: '3D' },
      { name: 'Tailwind CSS' },
      { name: 'Prisma / Supabase' },
      { name: 'Zalo Mini App (ZMP)' },
      { name: 'PWA / REST & Webhook' },
    ],
  },
  {
    id: 'antigravity-ai',
    domain: 'antigravity',
    badge: 'Antigravity & Agentic AI',
    title: 'Antigravity IDE, AI Agents & RAG',
    subtitle: 'Điều phối Multi-Agent Workflow, Custom Skills, MCP Server & Vector RAG thực chiến.',
    icon: <Sparkles size={18} />,
    accentBg: 'bg-indigo-50 border-indigo-200/80',
    accentText: 'text-[#1E40FF]',
    skills: [
      { name: 'Antigravity IDE (AGY)', tag: 'Core' },
      { name: 'Multi-Agent Swarm' },
      { name: 'Custom Skills & Rules' },
      { name: 'MCP Server Integration' },
      { name: 'Vector RAG (768d)', tag: 'Live' },
      { name: 'Gemini API / Live / Veo' },
      { name: 'ONNX Runtime (SAM 3)' },
      { name: 'Prompt & Context Eng' },
    ],
  },
  {
    id: 'marketing-seo',
    domain: 'marketing',
    badge: 'Growth, Ads & Search',
    title: 'Performance Ads, Content SEO & Funnel',
    subtitle: 'Kết hợp Tracking chuẩn xác, Meta CAPI HTTP 200, SEO bền vững & tối ưu chuyển đổi.',
    icon: <Megaphone size={18} />,
    accentBg: 'bg-cyan-50 border-cyan-200/80',
    accentText: 'text-[#0284C7]',
    skills: [
      { name: 'Meta Ads & CAPI', tag: 'ROAS' },
      { name: 'Google Search & Display' },
      { name: 'TikTok Ads Manager' },
      { name: 'Technical & On-Page SEO', tag: 'SEO' },
      { name: 'Content SEO / Pillar' },
      { name: 'GA4 & GTM Server-Side' },
      { name: 'CRO & Copywriting' },
      { name: 'Email & CRM Nurture' },
    ],
  },
  {
    id: 'design-video',
    domain: 'creative',
    badge: 'Design & Video Production',
    title: 'UI/UX Design, Print POD & Edit Video',
    subtitle: 'Thiết kế hệ thống UI Figma, ấn phẩm OOH/Print-on-Demand, dựng phim & motion 4K.',
    icon: <Palette size={18} />,
    accentBg: 'bg-blue-50 border-blue-200/80',
    accentText: 'text-[#1E40FF]',
    skills: [
      { name: 'Figma UI/UX System', tag: 'Design' },
      { name: 'Adobe Premiere Pro', tag: 'Video' },
      { name: 'After Effects Motion' },
      { name: 'CapCut Pro & Reels' },
      { name: 'Photoshop & Illustrator' },
      { name: 'Canva Pro & Brand Kit' },
      { name: 'AOP 3D CAD / .PSD / .DST' },
      { name: 'AI Image & Video Gen' },
    ],
  },
  {
    id: 'tools-cloud',
    domain: 'tools',
    badge: 'DevOps, Automation & SaaS',
    title: 'Tools, Cloud Infra & Vận Hành Doanh Nghiệp',
    subtitle: 'Triển khai CI/CD, Worker hàng đợi, trình duyệt kiểm thử & đồng bộ ERP/MISA.',
    icon: <Wrench size={18} />,
    accentBg: 'bg-sky-50 border-sky-200/80',
    accentText: 'text-[#0284C7]',
    skills: [
      { name: 'Git / GitHub Actions' },
      { name: 'Docker / BullMQ / Redis' },
      { name: 'Cloudflare Workers / DNS' },
      { name: 'Vercel / Railway / Netlify' },
      { name: 'Playwright E2E Audit', tag: 'QA' },
      { name: 'n8n / Make / ZaloBot' },
      { name: 'Larksuite / Notion / Jira' },
      { name: 'MISA AMIS / KiotViet' },
    ],
  },
];

const ANTIGRAVITY_PILLARS = [
  { icon: <Terminal size={14} />, label: 'AGY Custom Skills & Workflows' },
  { icon: <Cpu size={14} />, label: 'MCP Servers & Browser E2E' },
  { icon: <Bot size={14} />, label: 'Gemini RAG & Agentic Coding' },
  { icon: <Search size={14} />, label: 'Technical SEO + Growth Ops' },
  { icon: <Video size={14} />, label: '4K Edit Video & UI Motion' },
];

const SkillsMatrix: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<SkillDomainId>('all');

  const visibleGroups = useMemo(() => {
    if (activeDomain === 'all') return SKILL_GROUPS;
    return SKILL_GROUPS.filter((g) => g.domain === activeDomain);
  }, [activeDomain]);

  return (
    <section
      id="skills-mastery"
      className="py-14 sm:py-20 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10.5px] font-bold uppercase tracking-[0.16em] mb-3">
              <Sparkles size={13} />
              <span>Fullstack • Antigravity • Creative • Growth Skills</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.35]">
              Bản Đồ Kỹ Năng{' '}
              <span className="font-editorial text-gradient-inkica">
                Dev, AI &amp; Marketing Toàn Diện.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
              Hợp nhất ngôn ngữ lập trình, hệ sinh thái Agentic AI (Antigravity, MCP, RAG),
              Performance Ads, Content SEO, Design UI/UX, Edit Video và công cụ vận hành App/Cloud.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {DOMAIN_TABS.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  activeDomain === tab.id
                    ? 'bg-[#1E40FF] text-white shadow-sm'
                    : 'bg-white/85 border border-slate-200/90 text-slate-600 hover:border-[#1E40FF]/40 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Responsive SlideDeck (1/slide Mobile, 2/slide Tablet, 3-col Grid Desktop) */}
        <ResponsiveSlideDeck<SkillGroup>
          items={visibleGroups}
          keyExtractor={(group) => group.id}
          resetKey={activeDomain}
          desktopMode="grid"
          desktopGridClass={
            visibleGroups.length === 1
              ? 'lg:grid-cols-1 max-w-3xl mx-auto'
              : visibleGroups.length === 2
              ? 'lg:grid-cols-2'
              : 'lg:grid-cols-3'
          }
          gapClass="gap-4"
          ariaLabel="Kỹ năng chuyên môn toàn diện"
          renderItem={(group) => (
            <div className="inkica-glass-card rounded-3xl p-5 sm:p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${group.accentBg} ${group.accentText}`}
                    >
                      {group.icon}
                    </div>
                    <div className="min-w-0">
                      <div
                        className={`text-[10px] font-extrabold uppercase tracking-wider truncate ${group.accentText}`}
                      >
                        {group.badge}
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 pb-3 border-b border-slate-200/70">
                  {group.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/90 border border-slate-200/85 text-[11.5px] font-semibold text-slate-800 hover:border-[#1E40FF]/40 hover:text-[#1E40FF] transition-colors"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-blue-50 text-[#1E40FF]">
                          {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        />

        {/* Compact Capability Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {ANTIGRAVITY_PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 text-[11px] font-bold text-slate-700"
            >
              <span className="text-[#1E40FF]">{pillar.icon}</span>
              <span>{pillar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;
