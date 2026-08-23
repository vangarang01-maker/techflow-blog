import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are excluded from production builds. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postUrl(post: Post) {
  return `/blog/${post.id}/`;
}

const WORDS_PER_MINUTE = 250;
/** Korean prose reads slower per character than English per word. */
const CJK_PER_MINUTE = 350;

export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const text = body
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`~|-]/g, ' ');
  const cjk = (text.match(/[ㄱ-힝一-鿿぀-ヿ]/g) ?? []).length;
  const words = text.replace(/[ㄱ-힝一-鿿぀-ヿ]/g, ' ').trim().split(/\s+/)
    .filter(Boolean).length;
  const minutes = cjk / CJK_PER_MINUTE + words / WORDS_PER_MINUTE;
  return Math.max(1, Math.round(minutes));
}

export function formatDate(date: Date, locale = 'ko-KR'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Seoul',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString();
}

/** Posts sharing the category, then the most tag overlap. */
export function relatedPosts(post: Post, all: Post[], limit = 3): Post[] {
  const tags = new Set(post.data.tags);
  return all
    .filter((candidate) => candidate.id !== post.id)
    .map((candidate) => {
      const sameCategory = candidate.data.category === post.data.category ? 10 : 0;
      const shared = candidate.data.tags.filter((tag) => tags.has(tag)).length;
      return { candidate, score: sameCategory + shared };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
