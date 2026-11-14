import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileSearch,
  Film,
  GitBranch,
  Globe,
  Layers,
  Mail,
  Megaphone,
  Network,
  Palette,
  PenTool,
  Scissors,
  Search,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
  Zap,
} from 'lucide-react';
import ResponsiveSlideDeck from '../UI/ResponsiveSlideDeck';

type SkillDomainId = 'all' | 'dev' | 'antigravity' | 'marketing' | 'creative' | 'tools';

interface SkillTile {
  name: string;
  badge: React.ReactNode;
}

interface SkillGroup {
  id: string;
  domain: Exclude<SkillDomainId, 'all'>;
  category: string;
  title: string;
  icon: React.ReactNode;
  accentBg: string;
  accentText: string;
  skills: SkillTile[];
}

const MonoLogo = ({
  label,
  bg,
  fg = '#FFFFFF',
}: {
  label: string;
  bg: string;
  fg?: string;
}) => (
  <span
    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-[9.5px] font-black tracking-tighter shadow-2xs select-none"
    style={{ backgroundColor: bg, color: fg }}
    aria-hidden="true"
  >
    {label}
  </span>
);

const IconBadge = ({
  icon,
  bg,
  fg,
}: {
  icon: React.ReactNode;
  bg: string;
  fg: string;
}) => (
  <span
    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 border border-black/5"
    style={{ backgroundColor: bg, color: fg }}
    aria-hidden="true"
  >
    {icon}
  </span>
);

const DOMAIN_TABS: { id: SkillDomainId; label: string }[] = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'dev', label: 'Dev & Ngôn Ngữ' },
  { id: 'antigravity', label: 'Antigravity & AI' },
  { id: 'marketing', label: 'Marketing & SEO' },
  { id: 'creative', label: 'Design & Video' },
  { id: 'tools', label: 'Tools & Cloud' },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages-core',
    domain: 'dev',
    category: 'Programming',
    title: 'Ngôn Ngữ & Database',
    icon: <Code2 size={17} />,
    accentBg: 'bg-blue-50 border-blue-200/80',
    accentText: 'text-[#1E40FF]',
    skills: [
      { name: 'TypeScript', badge: <MonoLogo label="TS" bg="#3178C6" /> },
      { name: 'JavaScript', badge: <MonoLogo label="JS" bg="#F7DF1E" fg="#0F172A" /> },
      { name: 'Python', badge: <MonoLogo label="Py" bg="#3776AB" fg="#FFD43B" /> },
      { name: 'PostgreSQL', badge: <IconBadge icon={<Database size={13} />} bg="#336791" fg="#FFFFFF" /> },
      { name: 'HTML5 / CSS3', badge: <MonoLogo label="<>" bg="#E34F26" /> },
      { name: 'PHP / Laravel', badge: <MonoLogo label="PHP" bg="#777BB4" /> },
      { name: 'Apps Script', badge: <IconBadge icon={<Terminal size={13} />} bg="#0F9D58" fg="#FFFFFF" /> },
      { name: 'Bash / PS', badge: <MonoLogo label="$_" bg="#0F172A" /> },
    ],
  },
  {
    id: 'fullstack-app',
    domain: 'dev',
    category: 'Web & App',
    title: 'Framework, 3D & App',
    icon: <Layers size={17} />,
    accentBg: 'bg-sky-50 border-sky-200/80',
    accentText: 'text-[#0284C7]',
    skills: [
      {
        name: 'React 19',
        badge: (
          <IconBadge
            icon={
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
                <circle cx="12" cy="12" r="2.2" fill="#0EA5E9" />
                <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#0EA5E9" strokeWidth="1.6" />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="9"
                  ry="3.5"
                  stroke="#0EA5E9"
                  strokeWidth="1.6"
                  transform="rotate(60 12 12)"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="9"
                  ry="3.5"
                  stroke="#0EA5E9"
                  strokeWidth="1.6"
                  transform="rotate(120 12 12)"
                />
              </svg>
            }
            bg="#E0F2FE"
            fg="#0284C7"
          />
        ),
      },
      { name: 'Next.js', badge: <MonoLogo label="N" bg="#0F172A" /> },
      { name: 'Node / NestJS', badge: <MonoLogo label="Nj" bg="#339933" /> },
      { name: 'Three.js 3D', badge: <IconBadge icon={<Cpu size={13} />} bg="#1E293B" fg="#38BDF8" /> },
      { name: 'Tailwind CSS', badge: <MonoLogo label="TW" bg="#06B6D4" /> },
      { name: 'Supabase / ORM', badge: <IconBadge icon={<Zap size={13} />} bg="#3ECF8E" fg="#0F172A" /> },
      { name: 'Zalo Mini App', badge: <IconBadge icon={<Smartphone size={13} />} bg="#0068FF" fg="#FFFFFF" /> },
      { name: 'PWA / Webhook', badge: <IconBadge icon={<Zap size={13} />} bg="#4F46E5" fg="#FFFFFF" /> },
    ],
  },
  {
    id: 'antigravity-ai',
    domain: 'antigravity',
    category: 'Agentic AI',
    title: 'Antigravity & AI Agents',
    icon: <Sparkles size={17} />,
    accentBg: 'bg-indigo-50 border-indigo-200/80',
    accentText: 'text-[#1E40FF]',
    skills: [
      { name: 'Antigravity IDE', badge: <MonoLogo label="AGY" bg="#1E40FF" /> },
      { name: 'Multi-Agent Swarm', badge: <IconBadge icon={<Network size={13} />} bg="#4338CA" fg="#FFFFFF" /> },
      { name: 'Custom Skills', badge: <IconBadge icon={<Sparkles size={13} />} bg="#2563EB" fg="#FFFFFF" /> },
      { name: 'MCP Servers', badge: <MonoLogo label="MCP" bg="#0F172A" fg="#38BDF8" /> },
      { name: 'Vector RAG 768d', badge: <IconBadge icon={<FileSearch size={13} />} bg="#0284C7" fg="#FFFFFF" /> },
      { name: 'Gemini / Live AI', badge: <MonoLogo label="✦" bg="#1D4ED8" /> },
      { name: 'ONNX (SAM 3)', badge: <MonoLogo label="AI" bg="#0E7490" /> },
      { name: 'n8n / ZaloBot', badge: <IconBadge icon={<Bot size={13} />} bg="#EA4B71" fg="#FFFFFF" /> },
    ],
  },
  {
    id: 'marketing-seo',
    domain: 'marketing',
    category: 'Growth & Search',
    title: 'Marketing & Content SEO',
    icon: <Megaphone size={17} />,
    accentBg: 'bg-cyan-50 border-cyan-200/80',
    accentText: 'text-[#0284C7]',
    skills: [
      { name: 'Meta Ads & CAPI', badge: <MonoLogo label="∞" bg="#0668E1" /> },
      { name: 'Google Ads', badge: <MonoLogo label="G" bg="#4285F4" /> },
      { name: 'TikTok Ads', badge: <MonoLogo label="TT" bg="#0F172A" fg="#25F4EE" /> },
      { name: 'Technical SEO', badge: <IconBadge icon={<Search size={13} />} bg="#059669" fg="#FFFFFF" /> },
      { name: 'Content SEO', badge: <IconBadge icon={<PenTool size={13} />} bg="#0284C7" fg="#FFFFFF" /> },
      { name: 'GA4 & GTM', badge: <IconBadge icon={<BarChart3 size={13} />} bg="#F97316" fg="#FFFFFF" /> },
      { name: 'CRO Funnel', badge: <IconBadge icon={<Share2 size={13} />} bg="#1E40FF" fg="#FFFFFF" /> },
      { name: 'Email & CRM', badge: <IconBadge icon={<Mail size={13} />} bg="#0EA5E9" fg="#FFFFFF" /> },
    ],
  },
  {
    id: 'design-video',
    domain: 'creative',
    category: 'Creative Studio',
    title: 'Design, POD & Edit Video',
    icon: <Palette size={17} />,
    accentBg: 'bg-blue-50 border-blue-200/80',
    accentText: 'text-[#1E40FF]',
    skills: [
      { name: 'Figma UI/UX', badge: <MonoLogo label="Fg" bg="#1E1E1E" fg="#0ACF83" /> },
      { name: 'Premiere Pro', badge: <MonoLogo label="Pr" bg="#00005B" fg="#9999FF" /> },
      { name: 'After Effects', badge: <MonoLogo label="Ae" bg="#00005B" fg="#9999FF" /> },
      { name: 'CapCut Pro', badge: <IconBadge icon={<Scissors size={13} />} bg="#0F172A" fg="#FFFFFF" /> },
      { name: 'Photoshop', badge: <MonoLogo label="Ps" bg="#001E36" fg="#31A8FF" /> },
      { name: 'Illustrator', badge: <MonoLogo label="Ai" bg="#330000" fg="#FF9A00" /> },
      { name: 'Canva Pro', badge: <MonoLogo label="C" bg="#00C4CC" /> },
      { name: '4K AI Video', badge: <IconBadge icon={<Film size={13} />} bg="#1E40FF" fg="#FFFFFF" /> },
    ],
  },
  {
    id: 'tools-cloud',
    domain: 'tools',
    category: 'Infra & Ops',
    title: 'Tools, Cloud & ERP',
    icon: <Wrench size={17} />,
    accentBg: 'bg-sky-50 border-sky-200/80',
    accentText: 'text-[#0284C7]',
    skills: [
      { name: 'Git / GitHub', badge: <IconBadge icon={<GitBranch size={13} />} bg="#181717" fg="#FFFFFF" /> },
      { name: 'Docker / Redis', badge: <MonoLogo label="Dk" bg="#2496ED" /> },
      { name: 'Cloudflare', badge: <IconBadge icon={<Cloud size={13} />} bg="#F38020" fg="#FFFFFF" /> },
      { name: 'Vercel / Railway', badge: <MonoLogo label="▲" bg="#0F172A" /> },
      { name: 'Playwright QA', badge: <IconBadge icon={<ShieldCheck size={13} />} bg="#2EAD33" fg="#FFFFFF" /> },
      { name: 'Lark / Notion', badge: <IconBadge icon={<Workflow size={13} />} bg="#00D6B9" fg="#0F172A" /> },
      { name: 'MISA / KiotViet', badge: <MonoLogo label="ERP" bg="#1E40FF" /> },
      { name: 'Meta CAPI Proxy', badge: <IconBadge icon={<Globe size={13} />} bg="#0284C7" fg="#FFFFFF" /> },
    ],
  },
];

const SkillsMatrix: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<SkillDomainId>('all');

  const visibleGroups = useMemo(() => {
    return activeDomain === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.domain === activeDomain);
  }, [activeDomain]);

  return (
    <section
      id="skills-mastery"
      className="py-12 sm:py-16 border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Compact Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 mb-7"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40FF] text-[10px] font-bold uppercase tracking-[0.16em] mb-2.5">
              <Sparkles size={12} />
              <span>Dev • Antigravity • Growth • Creative Stack</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-900 leading-[1.3]">
              Hệ Kỹ Năng{' '}
              <span className="font-editorial text-gradient-inkica">
                Dev, AI &amp; Marketing.
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {DOMAIN_TABS.map((tab) => (
              <button
                type="button"
                key={tab.id}
                onClick={() => setActiveDomain(tab.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  activeDomain === tab.id
                    ? 'bg-[#1E40FF] text-white shadow-xs'
                    : 'bg-white/85 border border-slate-200/90 text-slate-600 hover:border-[#1E40FF]/40 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Compact Icon/Logo Matrix Deck (1/slide Mobile, 2/slide Tablet, 3-col Grid Desktop) */}
        <ResponsiveSlideDeck<SkillGroup>
          items={visibleGroups}
          keyExtractor={(group) => group.id}
          resetKey={activeDomain}
          desktopMode="grid"
          desktopGridClass={
            visibleGroups.length === 1
              ? 'lg:grid-cols-1 max-w-2xl mx-auto'
              : visibleGroups.length === 2
              ? 'lg:grid-cols-2'
              : 'lg:grid-cols-3'
          }
          gapClass="gap-4"
          ariaLabel="Kỹ năng chuyên môn theo nhóm"
          renderItem={(group) => (
            <div className="inkica-glass-card rounded-3xl p-4 sm:p-5 h-full">
              <div className="flex items-center gap-3 pb-3 mb-3.5 border-b border-slate-200/70">
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${group.accentBg} ${group.accentText}`}
                >
                  {group.icon}
                </div>
                <div className="min-w-0">
                  <div
                    className={`text-[9.5px] font-extrabold uppercase tracking-wider truncate ${group.accentText}`}
                  >
                    {group.category}
                  </div>
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-900 leading-snug truncate">
                    {group.title}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-white/90 border border-slate-200/80 hover:border-[#1E40FF]/40 transition-colors min-w-0"
                  >
                    {skill.badge}
                    <span className="text-[11.5px] sm:text-xs font-bold text-slate-800 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default SkillsMatrix;
