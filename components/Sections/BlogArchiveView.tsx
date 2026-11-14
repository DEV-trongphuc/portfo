import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Clock,
  Cpu,
  Layers,
  Search,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS } from '../../constants/blogPosts';
import { BlogPillar } from '../../types/blog';
import { applyPageSeo, SITE_URL } from '../../utils/seo';

interface BlogArchiveViewProps {
  initialPillar?: 'Tất Cả' | BlogPillar;
  onBackHome: () => void;
  onOpenPost: (slug: string) => void;
}

const PILLAR_TABS: { id: 'Tất Cả' | BlogPillar; label: string; icon: React.ReactNode }[] = [
  { id: 'Tất Cả', label: 'Tất Cả', icon: <Sparkles size={13} /> },
  { id: 'Chuyên Gia Martech', label: 'Chuyên Gia Martech', icon: <BarChart3 size={13} /> },
  { id: 'Fullstack Developer', label: 'Fullstack Developer', icon: <Layers size={13} /> },
  { id: 'AI Automation', label: 'AI Automation', icon: <Cpu size={13} /> },
];

const BlogArchiveView: React.FC<BlogArchiveViewProps> = ({
  initialPillar = 'Tất Cả',
  onBackHome,
  onOpenPost,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<'Tất Cả' | BlogPillar>(initialPillar);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSelectedPillar(initialPillar);
  }, [initialPillar]);

  useEffect(() => {
    applyPageSeo({
      title: 'Bộ Sưu Tập Bài Viết Thực Chiến | Huỳnh Trọng Phúc (TURNIO) — Martech, Fullstack & AI Automation',
      description:
        'Hệ thống bài viết vệ tinh chuyên sâu về Chuyên Gia Martech, Fullstack Developer, AI Automation, CRM Quản Lý 150K+ Leads, Meta CAPI < 4s, ERP 5.0 & Growth Dashboard bởi TURNIO.',
      keywords:
        'Bài viết TURNIO, Blog Huỳnh Trọng Phúc, Chuyên Gia Martech, Fullstack Developer, AI Automation, CRM Dashboard, Meta CAPI, GEO',
      path: '/bai-viet',
      type: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            name: 'Bộ Sưu Tập Bài Viết Thực Chiến — TURNIO',
            url: `${SITE_URL}/bai-viet`,
            inLanguage: 'vi-VN',
            author: { '@type': 'Person', name: 'Huỳnh Trọng Phúc', alternateName: 'TURNIO' },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Trang Chủ', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Bài Viết', item: `${SITE_URL}/bai-viet` },
            ],
          },
        ],
      },
    });
  }, []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      if (selectedPillar !== 'Tất Cả' && post.pillar !== selectedPillar) return false;
      if (!q) return true;
      const hay = `${post.title} ${post.excerpt} ${post.pillar} ${post.tags.join(' ')} ${post.seoKeywords.join(' ')}`.toLowerCase();
      return hay.includes(q);
    });
  }, [selectedPillar, searchQuery]);

  return (
    <section className="pt-24 pb-20 px-4 sm:px-8 max-w-[1440px] mx-auto">
      {/* Top Breadcrumb + Back */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <button
          type="button"
          onClick={onBackHome}
          className="ql-btn-outline px-4 py-2 text-xs font-extrabold cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Quay Lại Portfolio TURNIO</span>
        </button>

        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-500 flex items-center gap-2">
          <button type="button" onClick={onBackHome} className="hover:text-[#1E40FF] cursor-pointer">
            Trang Chủ
          </button>
          <span>/</span>
          <span className="text-[#1E40FF] font-extrabold">Bộ Sưu Tập Bài Viết</span>
        </nav>
      </div>

      {/* Hub Header — Topical Authority for TURNIO / Huỳnh Trọng Phúc */}
      <header className="inkica-glass-card rounded-3xl p-6 sm:p-9 mb-8">
        <span className="ql-eyebrow mb-4">
          <BookOpen size={14} className="text-[#1E40FF]" />
          TRUNG TÂM TRI THỨC VỆ TINH • HUỲNH TRỌNG PHÚC (TURNIO)
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Bộ Sưu Tập{' '}
          <span className="font-editorial text-gradient-inkica">
            Bài Viết Thực Chiến.
          </span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Hệ thống bài viết chuyên sâu xoay quanh 3 trụ cột:{' '}
          <strong className="text-slate-900">Chuyên Gia Martech</strong>,{' '}
          <strong className="text-slate-900">Fullstack Developer</strong> và{' '}
          <strong className="text-slate-900">AI Automation</strong> — kèm biểu đồ tăng trưởng,
          dashboard CRM quản lý và bản thiết kế kiến trúc thực tế từ 35+ dự án của TURNIO.
        </p>

        {/* Search & Pillar Filter Controls */}
        <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {PILLAR_TABS.map((tab) => {
              const active = selectedPillar === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedPillar(tab.id)}
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

          <div className="relative w-full md:w-72">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm CRM, Meta CAPI, RAG, 3D..."
              aria-label="Tìm kiếm bài viết"
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 focus:border-[#1E40FF] focus:outline-none text-xs sm:text-sm text-slate-800 placeholder:text-slate-400"
            />
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      {filteredPosts.length === 0 ? (
        <div className="inkica-glass-card rounded-2xl p-12 text-center">
          <p className="font-display font-bold text-slate-800">
            Không tìm thấy bài viết phù hợp từ khóa “{searchQuery}”.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedPillar('Tất Cả');
              setSearchQuery('');
            }}
            className="mt-4 ql-btn-outline px-4 py-2 text-xs font-bold cursor-pointer"
          >
            Xem Lại Tất Cả Bài Viết
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.slug}
              onClick={() => onOpenPost(post.slug)}
              className="inkica-glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  loading={idx < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-blue-100 text-[10px] font-extrabold text-[#1E40FF]">
                  {post.pillar}
                </span>
                <span className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-slate-900/85 text-white text-[10.5px] font-bold inline-flex items-center gap-1">
                  <BarChart3 size={11} className="text-sky-400" />
                  {post.chartData.kpis[0]?.value}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={12} className="text-[#1E40FF]" />
                      {post.readMinutes} phút đọc
                    </span>
                    <span>{post.publishedAt}</span>
                  </div>
                  <h2 className="font-display text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#1E40FF] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1E40FF] text-[10px] font-bold"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-[#1E40FF] inline-flex items-center gap-1 shrink-0 group-hover:translate-x-0.5 transition-transform">
                    Đọc chi tiết <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default BlogArchiveView;
