/** Site-wide constants shared by layouts, SEO tags and structured data. */

export const SITE = {
  name: 'TechFlow',
  title: 'TechFlow — 스마트한 일상과 디지털 생산성 가이드',
  shortTitle: 'TechFlow',
  tagline: '스마트한 일상과 디지털 생산성 가이드',
  description:
    '맥과 PC, 스마트 도구, 업무 자동화까지. 직접 써보고 검증한 디지털 생산성 노하우를 실전 중심으로 정리합니다.',
  url: 'https://techflow-blog-choi-f69b.vercel.app',
  locale: 'ko_KR',
  lang: 'ko',
  email: 'contact@techflow-guide.com',
  defaultImage: '/og-default.svg',
  themeColor: '#4f46e5',
} as const;

export const AUTHOR = {
  name: '테크플로우 편집팀',
  role: '디지털 생산성 리서치 · 에디터',
  bio: '10년 차 IT 기획자와 개발자로 구성된 편집팀입니다. 실제 업무에 도입해 최소 2주 이상 사용한 도구와 워크플로우만 기록합니다.',
  url: '/about',
  avatar: '/authors/techflow.svg',
} as const;

/**
 * Replace with the real publisher id (`ca-pub-...`) after AdSense approval.
 * While it is empty no AdSense script is emitted and `AdSlot` renders an
 * inert placeholder, which keeps the site policy-safe before review.
 */
export const ADSENSE = {
  client: '',
  enabled: false,
} as const;

export const CATEGORIES = [
  {
    slug: 'productivity',
    name: 'Productivity',
    label: '생산성',
    description: '시간을 되찾아주는 습관, 시스템, 그리고 앱 활용법.',
    icon: '⚡',
  },
  {
    slug: 'mac-pc',
    name: 'Mac & PC',
    label: '맥 & PC',
    description: '맥OS와 윈도우를 더 빠르고 조용하게 쓰는 설정과 유지관리.',
    icon: '💻',
  },
  {
    slug: 'smart-tools',
    name: 'Smart Tools',
    label: '스마트 도구',
    description: '직접 결제하고 써본 앱·서비스의 솔직한 사용 후기와 비교.',
    icon: '🧰',
  },
  {
    slug: 'workflow',
    name: 'Workflow',
    label: '워크플로우',
    description: '반복 작업을 자동화하고 팀 협업을 매끄럽게 만드는 방법.',
    icon: '🔁',
  },
] as const;

export type CategoryName = (typeof CATEGORIES)[number]['name'];

export const NAV_LINKS = [
  { href: '/', label: '홈' },
  { href: '/blog', label: '전체 글' },
  { href: '/about', label: '소개' },
  { href: '/contact', label: '문의' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Sitemap', href: '/sitemap-index.xml' },
] as const;

export function categoryBySlug(slug: string) {
  return CATEGORIES.find((category) => category.slug === slug);
}

export function categoryByName(name: string) {
  return CATEGORIES.find((category) => category.name === name);
}

export function categorySlug(name: string) {
  return categoryByName(name)?.slug ?? name.toLowerCase().replace(/\s+/g, '-');
}
