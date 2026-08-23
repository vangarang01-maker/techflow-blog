// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://techflow-blog-choi-f69b.vercel.app',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  markdown: {
    // Dual themes emit --shiki-dark vars that global.css swaps in dark mode.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
