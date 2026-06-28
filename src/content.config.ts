import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { authorIds } from "./types";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    author: z.enum(authorIds),
    crosspost: z
      .object({
        url: z.url(),
        site: z.string(),
        hasPrefix: z.boolean(),
      })
      .optional(),
  }),
});

export const collections = { posts };
