import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './consts';

const categoryNames = CATEGORIES.map((category) => category.name) as [string, ...string[]];

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1).max(120),
    description: z.string().min(1).max(300),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(categoryNames),
    tags: z.array(z.string()).default([]),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    author: z.string().default('테크플로우 편집팀'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
