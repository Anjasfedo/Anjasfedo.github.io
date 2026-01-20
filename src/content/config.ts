import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.array(
      z.enum(["Production", "Development", "Concept", "On Hold"])
    ),
    tags: z.array(z.string()),
    images: z.array(z.string()),
  }),
});

const certificates = defineCollection({
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    media: z.string().optional(),
    credential: z.string().optional(),
    issueDate: z.coerce.date(),
    expireDate: z.coerce.date(),
  }),
});

export const collections = { projects, certificates };