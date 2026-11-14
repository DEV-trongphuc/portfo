import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Layers,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { BLOG_POSTS, BLOG_POSTS_BY_SLUG } from '../../constants/blogPosts';
import { BlogPost } from '../../types/blog';
import BlogChartCard from '../UI/BlogChartCard';
import { copyWithToast } from '../../utils/toast';
import { applyPageSeo, SITE_URL } from '../../utils/seo';
// @ts-ignore
import meAvatar from '../../me.webp';

interface BlogSinglePostViewProps {
  slug: string;
  onBackArchive: () => void;
  onBackHome: () => void;
  onOpenPost: (slug: string) => void;
  onJumpSection: (sectionId: string) => void;
  onOpenContact?: (defaultService?: string) => void;
}

const BlogSinglePostView: React.FC<BlogSinglePostViewProps> = ({
  slug,
  onBackArchive,
  onBackHome,
  onOpenPost,
  onJumpSection,
  onOpenContact,
}) => {
  const post = BLOG_POSTS_BY_SLUG[slug] || BLOG_POSTS[0];
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    applyPageSeo({
      title: post.seoTitle,
      description: post.seoDescription,
      keywords: [...post.seoKeywords, 'Huỳnh Trọng Phúc', 'TURNIO', 'Chuyên Gia Martech'].join(', '),
      path: `/bai-viet/${post.slug}`,
      image: post.coverImage,
      type: 'article',
      publishedTime: post.publishedAt,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.seoDescription,
            image: `${SITE_URL}${post.coverImage}`,
            datePublished: post.publishedAt,
            dateModified: '2026-11-14',
            inLanguage: 'vi-VN',
            articleSection: post.pillar,
            keywords: post.seoKeywords.join(', '),
            url: `${SITE_URL}/bai-viet/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Huỳnh Trọng Phúc',
              alternateName: ['TURNIO', 'Turnio DEV'],
              url: SITE_URL,
            },
            publisher: {
              '@type': 'Person',
              name: 'Huỳnh Trọng Phúc (TURNIO)',
              url: SITE_URL,
            },
          },
          ...(post.faqs && post.faqs.length > 0
            ? [
                {
                  '@type': 'FAQPage',
                  mainEntity: post.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: faq.answer,
                    },
                  })),
                },
              ]
            : []),
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Trang Chủ', item: SITE_URL },
              { '@type': 'ListItem', position: 2, name: 'Bài Viết', item: `${SITE_URL}/bai-viet` },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: `${SITE_URL}/bai-viet/${post.slug}`,
              },
            ],
          },
        ],
      },
    });
  }, [post]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) {
        setReadProgress(100);
        return;
      }
      setReadProgress(Math.min(100, Math.max(0, Math.round((window.scrollY / total) * 100))));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [post.slug]);

  const relatedPosts = post.relatedSlugs
    .map((slug) => BLOG_POSTS_BY_SLUG[slug])
    .filter((p): p is BlogPost => Boolean(p));

  const currentIdx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIdx > 0 ? BLOG_POSTS[currentIdx - 1] : null;
  const nextPost = currentIdx >= 0 && currentIdx < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIdx + 1] : null;

  const articleUrl = `https://portfo-turnio.vercel.app/bai-viet/${post.slug}`;

  return (
    <article className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Top Reading Progress Indicator */}
      <div
        aria-hidden="true"
        style={{ width: `${readProgress}%` }}
        className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-[#1E40FF] via-[#0EA5E9] to-[#06B6D4] transition-[width] duration-75"
      />

      {/* Breadcrumb & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackArchive}
            className="ql-btn-outline px-3.5 py-2 text-xs font-extrabold cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Tất Cả Bài Viết</span>
          </button>
        </div>

        <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 flex-wrap">
          <button type="button" onClick={onBackHome} className="hover:text-[#1E40FF] cursor-pointer">
            TURNIO
          </button>
          <span>/</span>
          <button type="button" onClick={onBackArchive} className="hover:text-[#1E40FF] cursor-pointer">
            Bài Viết
          </button>
          <span>/</span>
          <span className="text-[#1E40FF] font-extrabold">{post.pillar}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="space-y-4 mb-7">
        <span className="ql-eyebrow">
          <Sparkles size={13} className="text-[#1E40FF]" />
          {post.categoryBadge}
        </span>

        <h1 className="font-display text-2xl sm:text-4xl md:text-[40px] font-black text-slate-900 tracking-tight leading-tight">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>

        {/* Author + Meta Row */}
        <div className="inkica-glass-card rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={meAvatar}
              alt="Huỳnh Trọng Phúc (TURNIO)"
              width={44}
              height={44}
              decoding="async"
              className="w-11 h-11 rounded-full object-cover border-2 border-[#1E40FF]/30"
            />
            <div>
              <div className="font-display text-sm font-extrabold text-slate-900">
                Huỳnh Trọng Phúc <span className="text-[#1E40FF]">(TURNIO)</span>
              </div>
              <div className="text-[11px] font-semibold text-slate-500">
                Chuyên Gia Martech • Fullstack Developer • AI Automation
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Calendar size={13} className="text-[#1E40FF]" />
              {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} className="text-[#1E40FF]" />
              {post.readMinutes} phút đọc
            </span>
            <button
              type="button"
              onClick={() => copyWithToast(articleUrl, 'Đã sao chép link bài viết chuẩn SEO!')}
              className="ql-btn-outline px-3 py-1.5 text-[11px] font-bold cursor-pointer"
            >
              <Copy size={12} />
              <span>Copy Link</span>
            </button>
          </div>
        </div>
      </header>

      {/* Widescreen 16:9 Generated Cover Image */}
      <figure className="mb-8 rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          decoding="async"
          fetchPriority="high"
          className="w-full aspect-[16/9] object-cover"
        />
      </figure>

      {/* GEO Direct Answer Box */}
      {post.directAnswer && (
        <section
          aria-label="Tóm tắt trả lời trực tiếp chuẩn GEO"
          className="rounded-2xl bg-gradient-to-br from-blue-50/90 to-sky-50/70 border border-blue-200/80 p-5 sm:p-6 mb-7"
        >
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#1E40FF] mb-2 flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Tóm Tắt Nhanh Chuẩn GEO • Trả Lời Trực Tiếp</span>
          </div>
          <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-relaxed">
            {post.directAnswer}
          </p>
        </section>
      )}

      {/* Key Takeaways Box */}
      <section className="inkica-glass-card rounded-2xl p-5 sm:p-6 mb-8">
        <div className="text-xs font-extrabold uppercase tracking-wider text-[#1E40FF] mb-3 flex items-center gap-2">
          <CheckCircle2 size={15} />
          <span>Điểm Cốt Lõi Rút Ra Trong Bài Viết</span>
        </div>
        <ul className="space-y-2.5">
          {post.takeaways.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-[#1E40FF] mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Interactive Analytics Chart & Growth Telemetry Dashboard */}
      <section className="mb-9">
        <BlogChartCard chart={post.chartData} />
      </section>

      {/* 4-Step Implementation Architecture Strip */}
      <section className="mb-9">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1E40FF] mb-3">
          <Layers size={14} />
          <span>Quy Trình Triển Khai 4 Bước Thực Chiến</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {post.architectureSteps.map((st) => (
            <div
              key={st.step}
              className="rounded-2xl bg-white/90 border border-slate-200/90 p-4 shadow-xs"
            >
              <div className="font-display text-sm font-extrabold text-[#1E40FF] mb-1">
                {st.step}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Deep-Dive Content Sections */}
      <div className="space-y-7 mb-10">
        {post.sections.map((sec) => (
          <section key={sec.id} className="inkica-glass-card rounded-2xl p-5 sm:p-7 space-y-4">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
              {sec.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{sec.summary}</p>
            <ul className="space-y-2.5">
              {sec.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-2 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {sec.callout && (
              <blockquote className="rounded-xl bg-blue-50/85 border-l-4 border-[#1E40FF] px-4 py-3 text-xs sm:text-sm font-semibold text-slate-800">
                {sec.callout}
              </blockquote>
            )}
            {sec.codeSnippet && (
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 text-slate-100">
                <div className="px-4 py-2 bg-slate-800 text-[11px] font-mono font-bold text-sky-300 border-b border-slate-700">
                  {sec.codeSnippet.label}
                </div>
                <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed">
                  <code>{sec.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* GEO FAQ Section */}
      {post.faqs && post.faqs.length > 0 && (
        <section aria-labelledby="faq-heading" className="mb-10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1E40FF]">
            <Sparkles size={14} />
            <span>Câu Hỏi Thường Gặp (FAQ — Chuẩn Schema &amp; GEO)</span>
          </div>
          <div className="space-y-3">
            {post.faqs.map((faq) => (
              <details
                key={faq.question}
                open
                className="inkica-glass-card rounded-2xl p-5 group"
              >
                <summary className="font-display text-sm sm:text-base font-extrabold text-slate-900 cursor-pointer list-none flex items-start justify-between gap-3">
                  <span>{faq.question}</span>
                </summary>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed border-t border-slate-200/70 pt-2.5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Tags & Pillar CTA Bridge */}
      <div className="inkica-glass-card rounded-2xl p-5 sm:p-6 mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
            Cần Tư Vấn Triển Khai Hệ Thống Tương Tự Cho Doanh Nghiệp?
          </div>
          <div className="flex flex-wrap gap-1.5">
            {post.tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-[#1E40FF]"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 shrink-0">
          {post.portfolioAnchor && (
            <button
              type="button"
              onClick={() => onJumpSection(post.portfolioAnchor!.id)}
              className="ql-btn-outline px-4 py-2.5 text-xs font-extrabold cursor-pointer"
            >
              <span>{post.portfolioAnchor.label}</span>
              <ArrowUpRight size={14} />
            </button>
          )}
          {onOpenContact && (
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="btn-inkica-primary px-4 py-2.5 text-xs font-extrabold cursor-pointer"
            >
              <Sparkles size={14} />
              <span>Gửi Yêu Cầu Tư Vấn</span>
            </button>
          )}
          <a
            href="https://zalo.me/0378859736"
            target="_blank"
            rel="noreferrer"
            className="ql-btn-outline px-4 py-2.5 text-xs font-extrabold"
          >
            <MessageCircle size={14} />
            <span>Tư Vấn Zalo TURNIO</span>
          </a>
        </div>
      </div>

      {/* Prev / Next Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {prevPost ? (
          <button
            type="button"
            onClick={() => onOpenPost(prevPost.slug)}
            className="inkica-glass-card rounded-2xl p-4 text-left cursor-pointer group"
          >
            <div className="text-[11px] font-bold text-slate-500 inline-flex items-center gap-1 mb-1">
              <ArrowLeft size={12} /> Bài Trước
            </div>
            <div className="font-display text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] line-clamp-2">
              {prevPost.title}
            </div>
          </button>
        ) : (
          <div />
        )}
        {nextPost && (
          <button
            type="button"
            onClick={() => onOpenPost(nextPost.slug)}
            className="inkica-glass-card rounded-2xl p-4 text-right cursor-pointer group"
          >
            <div className="text-[11px] font-bold text-slate-500 inline-flex items-center gap-1 mb-1 justify-end w-full">
              Bài Tiếp Theo <ArrowRight size={12} />
            </div>
            <div className="font-display text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] line-clamp-2">
              {nextPost.title}
            </div>
          </button>
        )}
      </div>

      {/* Satellite Cross-Links for Topical Authority SEO */}
      <section aria-labelledby="related-heading">
        <div className="flex items-center justify-between gap-4 mb-5">
          <h3 id="related-heading" className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
            Bài Viết Vệ Tinh{' '}
            <span className="font-editorial text-gradient-inkica">Liên Quan.</span>
          </h3>
          <button
            type="button"
            onClick={onBackArchive}
            className="text-xs font-extrabold text-[#1E40FF] hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            Xem tất cả bài viết <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedPosts.map((rp) => (
            <article
              key={rp.slug}
              onClick={() => onOpenPost(rp.slug)}
              className="inkica-glass-card rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={rp.coverImage}
                  alt={rp.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between gap-2">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#1E40FF]">
                  {rp.pillar}
                </div>
                <h4 className="font-display text-sm font-extrabold text-slate-900 group-hover:text-[#1E40FF] line-clamp-2 leading-snug">
                  {rp.title}
                </h4>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
};

export default BlogSinglePostView;
