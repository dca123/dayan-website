import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    publishedDate: z.date(),
    tags: z.string(),
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = {
  writing: writingCollection,
};
