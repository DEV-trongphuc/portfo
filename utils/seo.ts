export const SITE_URL = 'https://portfo-turnio.vercel.app';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: 'profile' | 'website' | 'article';
  publishedTime?: string;
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_SEO: Required<Pick<SeoConfig, 'title' | 'description' | 'keywords' | 'image'>> = {
  title: 'Huỳnh Trọng Phúc (TURNIO) | Chuyên Gia Martech, Fullstack Developer & AI Automation',
  description:
    'Portfolio chính thức của Huỳnh Trọng Phúc (TURNIO / Turnio DEV) — Chuyên Gia Martech, Fullstack Developer & AI Automation Architect. Kiến trúc 35+ App, Web, CRM Automation, ERP 5.0 & INKICA AI Studio.',
  keywords:
    'TURNIO, Turnio DEV, Huỳnh Trọng Phúc, Chuyên Gia Martech, Fullstack Developer, AI Automation, CRM Quản Lý, Meta CAPI, Chia Data 4s, DOMATION, INKICA AI',
  image: `${SITE_URL}/images/og-turnio-cover.jpg`,
};

function upsertMeta(attrName: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attrName}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function upsertDynamicJsonLd(data?: Record<string, unknown>) {
  const id = 'dynamic-seo-jsonld';
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing || document.createElement('script');
  script.id = id;
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

/** Updates document metadata, canonical URL, Open Graph tags, and dynamic Schema.org JSON-LD. */
export function applyPageSeo(config?: Partial<SeoConfig>) {
  if (typeof document === 'undefined') return;
  const title = config?.title || DEFAULT_SEO.title;
  const description = config?.description || DEFAULT_SEO.description;
  const keywords = config?.keywords || DEFAULT_SEO.keywords;
  const path = config?.path ?? '/';
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const rawImage = config?.image || DEFAULT_SEO.image;
  const image = rawImage.startsWith('http') ? rawImage : `${SITE_URL}${rawImage}`;
  const type = config?.type || 'profile';

  document.title = title;
  upsertCanonical(canonicalUrl);
  upsertMeta('name', 'description', description);
  upsertMeta('name', 'keywords', keywords);
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', canonicalUrl);
  upsertMeta('property', 'og:image', image);
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', image);
  if (config?.publishedTime && type === 'article') {
    upsertMeta('property', 'article:published_time', config.publishedTime);
  }
  upsertDynamicJsonLd(config?.jsonLd);
}
