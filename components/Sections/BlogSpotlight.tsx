import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Clock,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS } from '../../constants/blogPosts';
import { BlogPillar, BlogPost } from '../../types/blog';

interface BlogSpotlightProps {
  onOpenArchive: (pillar?: BlogPillar | 'Tất Cả') => void;
  onOpenPost: (slug: string) => void;
}

const PILLARS: { id: 'Tất Cả' | BlogPillar; label: string; icon: React.ReactNode }[] = [
  { id: 'Tất Cả', label: 'Tất Cả', icon: <Sparkles size={13} /> },
  { id: 'Chuyên Gia Martech', label: 'Chuyên Gia Martech', icon: <BarChart3 size={13} /> },
  { id: 'Fullstack Developer', label: 'Fullstack Developer', icon: <Layers size={13} /> },
  { id: 'AI Automation', label: 'AI Automation', icon: <Cpu size={13} /> },
];

const BlogSpotlight: React.FC<BlogSpotlightProps> = ({ onOpenArchive, onOpenPost }) => {
  const [activePillar, setActivePillar] = useState<'Tất Cả' | BlogPillar>('Tất Cả');

  const visiblePosts = useMemo<BlogPost[]>(() => {
    const filtered =
      activePillar === 'Tất Cả'
        ? BLOG_POSTS
        : BLOG_POSTS.filter((p) => p.pillar === activePillar);
    return filtered.slice(0, 4);
  }, [activePillar]);

  const leadPost = visiblePosts[0] || BLOG_POSTS[0];
  const secondaryPosts = visiblePosts.slice(1, 4);

  return (
    <section
      id="blog"
      className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1440px] mx-auto relative scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="ql-eyebrow mb-4">
            <BookOpen size={14} className="text-[#1E40FF]" />
            Tạp Chí Thực Chiến • Bài Viết Vệ Tinh SEO &amp; Growth
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Kinh Nghiệm{' '}
            <span className="font-editorial text-gradient-inkica pr-1">
              Martech &amp; AI Automation.
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl">
            Tổng hợp bài viết chuyên sâu bởi Huỳnh Trọng Phúc (TURNIO) về kiến trúc CRM quản lý
            150K+ Leads, biểu đồ tăng trưởng Meta CAPI &lt; 4s, ERP 5.0 và WebGL 3D.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenArchive(activePillar)}
          className="btn-inkica-primary px-5 py-3 text-xs sm:text-sm font-extrabold shrink-0 cursor-pointer"
        >
          <span>Xem Bộ Sưu Tập Bài Viết</span>
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Pillar Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {PILLARS.map((tab) => {
          const active = activePillar === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActivePillar(tab.id)}
              className={`px-3.5 py-2 text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all ${
                active ? 'ql-pill-tab ql-pill-tab-active' : 'ql-pill-tab'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Lead Article + 3 Satellite Highlights (equal desktop column height) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:items-stretch">
        {/* Featured Pillar Card */}
        <motion.article
          key={leadPost.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          onClick={() => onOpenPost(leadPost.slug)}
          className="lg:col-span-6 inkica-glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer group h-full"
        >
          <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 shrink-0">
            <img
              src={leadPost.coverImage}
              alt={leadPost.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-blue-100 text-[10px] font-extrabold uppercase tracking-wider text-[#1E40FF]">
              {leadPost.pillar}
            </div>
            <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-[11px] font-bold inline-flex items-center gap-1.5">
              <BarChart3 size={12} className="text-sky-400" />
              <span>{leadPost.chartData.kpis[0]?.value}</span>
            </div>
          </div>

          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500 mb-2">
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} className="text-[#1E40FF]" />
                  {leadPost.readMinutes} phút đọc
                </span>
                <span>•</span>
                <span>Có Biểu Đồ &amp; Dashboard</span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors leading-snug">
                {leadPost.title}
              </h3>
              <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                {leadPost.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-200/80">
              <div className="flex flex-wrap gap-1.5">
                {leadPost.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1E40FF] text-[10.5px] font-bold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs font-extrabold text-[#1E40FF] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Đọc bài <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </motion.article>

        {/* Right Stack: 3 Compact Satellite Cards + Archive CTA matching left height */}
        <div className="lg:col-span-6 flex flex-col justify-between gap-4 h-full">
          <div className="flex-1 flex flex-col gap-4 justify-between">
            {secondaryPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => onOpenPost(post.slug)}
                className="flex-1 inkica-glass-card rounded-2xl p-4 sm:p-5 flex gap-4 sm:gap-5 items-center cursor-pointer group min-h-[132px]"
              >
                <div className="w-28 sm:w-40 aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="min-w-0 flex-1 flex flex-col justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 text-[10.5px] font-bold mb-1.5">
                      <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#1E40FF] truncate">
                        {post.pillar}
                      </span>
                      <span className="text-slate-400 shrink-0">• {post.readMinutes}p đọc</span>
                    </div>
                    <h3 className="font-display text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1 text-[11px] font-bold text-slate-500">
                    <span className="inline-flex items-center gap-1 text-emerald-700 truncate">
                      <BarChart3 size={12} className="shrink-0" />
                      <span className="truncate">
                        {post.chartData.kpis[0]?.label}: {post.chartData.kpis[0]?.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-slate-400 group-hover:text-[#1E40FF] shrink-0"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Direct CTA card to Browse Full Archive */}
          <button
            type="button"
            onClick={() => onOpenArchive(activePillar)}
            className="w-full rounded-2xl border border-dashed border-blue-300 bg-blue-50/50 hover:bg-blue-50 px-5 py-4 flex items-center justify-between text-left transition-all cursor-pointer group shrink-0"
          >
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-[#1E40FF]">
                Khám Phá Thư Viện Bài Viết Vệ Tinh &amp; Growth Dashboard
              </div>
              <div className="text-[11px] text-slate-600 mt-0.5">
                Chuyên Gia Martech • Fullstack Developer • AI Automation Architecture
              </div>
            </div>
            <span className="w-9 h-9 rounded-full bg-white border border-blue-200 flex items-center justify-center text-[#1E40FF] group-hover:translate-x-1 transition-transform shrink-0">
              <ArrowRight size={15} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSpotlight;
