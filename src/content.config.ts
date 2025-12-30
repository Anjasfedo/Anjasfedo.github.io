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

// Index page content collection
const indexPage = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/index-page" }),
    schema: z.object({
        section: z.enum(["hero", "identity-grid", "experience-timeline", "services"]),
        title: z.string().optional(),
        order: z.number(),
        // Hero section data
        roles: z.array(z.object({
            label: z.string(),
            description: z.string(),
        })).optional(),
        // Identity grid data
        education: z.array(z.object({
            id: z.number(),
            school: z.string(),
            degree: z.string(),
            year: z.string(),
            logo: z.string(),
            details: z.string(),
        })).optional(),
        techStack: z.array(z.object({
            id: z.number(),
            name: z.string(),
            designation: z.string(),
            image: z.string(),
        })).optional(),
        // Experience timeline data
        timeline: z.array(z.object({
            title: z.string(),
            content: z.array(z.object({
                title: z.string(),
                company: z.string(),
                date: z.string(),
                desc: z.string(),
            })).optional(),
            description: z.string().optional(),
        })).optional(),
        // Services data
        services: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
        })).optional(),
    })
});

export const collections = { projects, indexPage };