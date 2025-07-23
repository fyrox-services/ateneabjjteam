import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    readingTime: z.number(),
    datePublished: z.date(),
    dateModified: z.date(),
    image: z.string(),
    wordCount: z.number(),
    author: z.enum(["Renzo Martínez"]),
    topPick: z.boolean().optional(),
  }),
});

export const collections = { posts};
