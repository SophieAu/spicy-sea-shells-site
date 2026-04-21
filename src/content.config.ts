import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    author: z.enum(['kamala', 'sophie', 'jean', 'jackie', 'nimish', 'andrei', 'ellie']),
    crosspost: z
      .object({
        url: z.string(),
        site: z.string(),
        hasPrefix: z.boolean(),
      })
      .optional(),
  }),
});

export const collections = { posts };
