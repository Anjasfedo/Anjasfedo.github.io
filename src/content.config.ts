import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/projects" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        longDescription: z.string(),
        status: z.array(z.enum(["Production", "Beta", "Alpha", "Archived", "Featured"])),
        tags: z.array(z.string()),
        image: z.string(), // thumbnail
        images: z.array(z.string()).optional(), // gallery images
        video: z.string().optional(), // video URL (YouTube embed, Vimeo, etc.)
        colorClass: z.string().default("bg-gradient-to-br from-blue-900/90 to-purple-900/90"),
        github: z.string().optional(),
        demo: z.string().optional(),
        pubDate: z.coerce.date().optional(),
    })
});

export const collections = { projects };