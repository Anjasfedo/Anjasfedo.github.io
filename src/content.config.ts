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

// Index page content collection - single file with all content
const indexPage = defineCollection({
    loader: glob({ pattern: "**/index.mdx", base: "./src/content/index-page" }), schema: z.object({
        title: z.string(),
        order: z.number(),

        // Hero section
        headline: z.string(),
        roles: z.array(z.object({
            label: z.string(),
            description: z.string(),
        })),

        // Identity grid section
        education: z.array(z.object({
            id: z.number(),
            school: z.string(),
            degree: z.string(),
            year: z.string(),
            logo: z.string(),
            details: z.string(),
        })),
        techStack: z.array(z.object({
            id: z.number(),
            name: z.string(),
            designation: z.string(),
            image: z.string(),
        })),
        location: z.object({
            label: z.string(),
            country: z.string(),
            city: z.string(),
            mapEmbedUrl: z.string(),
        }).optional(),
        connect: z.array(z.object({
            id: z.number(),
            name: z.string(),
            designation: z.string(),
            icon: z.string(),
            url: z.string(),
        })).optional(),
        interests: z.array(z.object({
            id: z.number(),
            label: z.string(),
            color: z.string(),
            icon: z.string(),
        })).optional(),

        // Experience timeline section
        experienceTitle: z.string(),
        experienceDescription: z.string(),
        timeline: z.array(z.object({
            title: z.string(),
            description: z.string().optional(),
            content: z.array(z.object({
                title: z.string(),
                company: z.string(),
                date: z.string(),
                desc: z.string(),
            })).optional(),
        })),

        // Services section
        servicesTitle: z.string(),
        servicesDescription: z.string(),
        services: z.array(z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
        })),
    })
});

// Uses page content collection
const usesPage = defineCollection({
    loader: glob({ pattern: "**/index.mdx", base: "./src/content/uses-page" }), schema: z.object({
        title: z.string(),
        order: z.number(),
        description: z.string(),

        // Hardware section
        hardware: z.object({
            laptop: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    name: z.string(),
                    specs: z.string(),
                    description: z.string(),
                })),
            }),
            computer: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    name: z.string(),
                    specs: z.string(),
                    description: z.string(),
                })),
            }),
            office: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    name: z.string(),
                    specs: z.string(),
                    description: z.string(),
                })),
            }),
        }),

        // Software section
        software: z.object({
            development: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    title: z.string(),
                    description: z.string(),
                    link: z.string(),
                    icon: z.string(),
                })),
            }),
            ai: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    title: z.string(),
                    description: z.string(),
                    link: z.string(),
                    icon: z.string(),
                })),
            }),
            design: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    title: z.string(),
                    description: z.string(),
                    link: z.string(),
                    icon: z.string(),
                })),
            }),
            productivity: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    title: z.string(),
                    description: z.string(),
                    link: z.string(),
                    icon: z.string(),
                })),
            }),
            communication: z.object({
                title: z.string(),
                icon: z.string(),
                items: z.array(z.object({
                    title: z.string(),
                    description: z.string(),
                    link: z.string(),
                    icon: z.string(),
                })),
            }),
        }),
    })
});

export const collections = { projects, indexPage, usesPage };