export type BlogPillar =
  | 'Chuyên Gia Martech'
  | 'Fullstack Developer'
  | 'AI Automation';

export interface BlogChartPoint {
  label: string;
  primary: number;
  secondary?: number;
}

export interface BlogChartSpec {
  title: string;
  subtitle: string;
  type: 'area' | 'bar' | 'funnel';
  primaryLabel: string;
  secondaryLabel?: string;
  unit: string;
  points: BlogChartPoint[];
  kpis: { label: string; value: string; delta: string }[];
}

export interface BlogSectionBlock {
  id: string;
  heading: string;
  summary: string;
  bullets: string[];
  callout?: string;
  codeSnippet?: { label: string; code: string };
}

export interface BlogFaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  pillar: BlogPillar;
  categoryBadge: string;
  industryFocus?: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  directAnswer?: string;
  seoDescription: string;
  seoKeywords: string[];
  coverImage: string;
  publishedAt: string;
  readMinutes: number;
  featured?: boolean;
  tags: string[];
  takeaways: string[];
  chartData: BlogChartSpec;
  architectureSteps: { step: string; detail: string }[];
  sections: BlogSectionBlock[];
  faqs?: BlogFaqItem[];
  relatedSlugs: string[];
  portfolioAnchor?: { id: string; label: string };
}
