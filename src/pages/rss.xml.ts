import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { SITE } from '../consts';
import { getPublishedPosts, postUrl } from '../utils/posts';

export const GET: APIRoute = async (context) => {
  const posts = await getPublishedPosts();
  const site = context.site ?? new URL(SITE.url);

  return rss({
    title: SITE.title,
    description: SITE.description,
    site,
    // Match the canonical URLs, which Astro emits with a trailing slash.
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postUrl(post),
      categories: [post.data.category, ...post.data.tags],
      author: `${SITE.email} (${post.data.author})`,
    })),
    customData: [
      `<language>ko-kr</language>`,
      `<copyright>© ${new Date().getFullYear()} ${SITE.name}</copyright>`,
      `<managingEditor>${SITE.email} (${SITE.name})</managingEditor>`,
      `<webMaster>${SITE.email} (${SITE.name})</webMaster>`,
    ].join(''),
  });
};
