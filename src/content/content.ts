// @ts-ignore
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.array(
      z.enum(["Production", "Development", "Concept", "On Hold"])
    ),
    tags: z.array(z.string()),
    images: z.array(z.string()),
  }),
});

export const collections = { projects };