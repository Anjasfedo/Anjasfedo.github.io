import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}", base: "./src/content/projects", generateId: ({ entry }) => {
      // entry is the relative path, e.g., "en/my-project.mdx"
      // We'll turn it into "en/my-project"
      return entry.replace(/\.[^/.]+$/, "");
    }
  }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    longDescription: z.string(),
    status: z.array(
      z.enum(["Production", "Beta", "Alpha", "Archived", "Featured"])
    ),
    tags: z.array(z.string()),
    image: z.string(), // thumbnail
    images: z.array(z.string()).optional(), // gallery images
    video: z.string().optional(), // video URL (YouTube embed, Vimeo, etc.)
    colorClass: z
      .string()
      .default("bg-gradient-to-br from-blue-900/90 to-purple-900/90"),
    github: z.string().optional(),
    demo: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

// Index page content collection - single file with all content
const indexPage = defineCollection({
  loader: glob({
    pattern: "**/index.{md,mdx}",
    base: "./src/content/index-page"
  }),
  schema: z.object({
    title: z.string(),
    order: z.number(),

    // Hero section
    headline: z.string(),
    heroSubtitle: z.string(), // e.g., "I specialize in:"
    viewMyWorkText: z.string(), // e.g., "View My Work"
    getInTouchText: z.string(), // e.g., "Get In Touch"
    roles: z.array(
      z.object({
        label: z.string(),
        description: z.string(),
      })
    ),

    // Identity grid section
    identityGridTitle: z.string(), // e.g., "Identity & Expertise"
    techStackTitle: z.string(), // e.g., "The Tech Stack"
    techStackDescription: z.string(), // e.g., "Technologies I use to build scalable products."
    locationTitle: z.string(), // e.g., "Location"
    locationDescription: z.string(), // e.g., "Indonesia, Bengkulu."
    connectTitle: z.string(), // e.g., "Connect"
    connectDescription: z.string(), // e.g., "Let's build something together."
    educationTitle: z.string(), // e.g., "Education"
    educationDescription: z.string(), // e.g., "My academic journey."
    interestsTitle: z.string(), // e.g., "Interests"
    interestsDescription: z.string(), // e.g., "What drives my curiosity."
    education: z.array(
      z.object({
        id: z.number(),
        school: z.string(),
        degree: z.string(),
        year: z.string(),
        logo: z.string(),
        details: z.string(),
      })
    ),
    techStack: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        designation: z.string(),
        image: z.string(),
      })
    ),
    location: z
      .object({
        label: z.string(),
        country: z.string(),
        city: z.string(),
        mapEmbedUrl: z.string(),
      })
      .optional(),
    connect: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          designation: z.string(),
          icon: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    interests: z
      .array(
        z.object({
          id: z.number(),
          label: z.string(),
          color: z.string(),
          icon: z.string(),
        })
      )
      .optional(),

    // Experience timeline section
    experienceTitle: z.string(),
    experienceDescription: z.string(),
    timeline: z.array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        content: z
          .array(
            z.object({
              title: z.string(),
              company: z.string(),
              date: z.string(),
              desc: z.string(),
            })
          )
          .optional(),
      })
    ),

    // Services section
    servicesTitle: z.string(),
    servicesDescription: z.string(),
    services: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
  }),
});

// Uses page content collection
const usesPage = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/uses-page" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),

    // Hardware section
    hardware: z.object({
      laptop: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            specs: z.string(),
            description: z.string(),
          })
        ),
      }),
      computer: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            specs: z.string(),
            description: z.string(),
          })
        ),
      }),
      office: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            name: z.string(),
            specs: z.string(),
            description: z.string(),
          })
        ),
      }),
    }),

    // Software section
    software: z.object({
      development: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        ),
      }),
      ai: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        ),
      }),
      design: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        ),
      }),
      productivity: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        ),
      }),
      communication: z.object({
        title: z.string(),
        icon: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            link: z.string(),
            icon: z.string(),
          })
        ),
      }),
    }),
  }),
});

// Terms page content collection
const termsPage = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/terms-page" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        badge: z.string(),
        content: z.string(), // HTML content stored as string
      })
    ),
  }),
});

const projectsPage = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/projects-page" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // Hero section
    pageTitle: z.string(), // e.g., "All Projects"
    pageDescription: z.string(), // e.g., "Explore my collection of projects..."
    // Filter section
    searchPlaceholder: z.string(), // e.g., "Search projects..."
    resetFiltersText: z.string(), // e.g., "Reset Filters"
    statusLabel: z.string(), // e.g., "Status"
    technologiesLabel: z.string(), // e.g., "Technologies"
    selectTechnologiesText: z.string(), // e.g., "Select technologies"
    selectedCount: z.string(), // e.g., "selected"
    // Empty state
    noProjectsFoundText: z.string(), // e.g., "No matching projects found."
    // Load more
    loadMoreText: z.string(), // e.g., "Load More Projects"
  }),
});

const certificatesPage = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/certificates-page" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // Hero section
    pageTitle: z.string(), // e.g., "Expertise Certified"
    pageDescription: z.string(), // e.g., "Verifiable credentials from..."
    // Filter section
    searchPlaceholder: z.string(), // e.g., "Search by title, issuer, or skill..."
    resetFiltersText: z.string(), // e.g., "Reset Filters"
    issuerLabel: z.string(), // e.g., "Issuer"
    skillsFilterLabel: z.string(), // e.g., "Skills Filter"
    allSkillsText: z.string(), // e.g., "All Skills"
    selectedCount: z.string(), // e.g., "selected"
    // Empty state
    noCertificatesFoundText: z.string(), // e.g., "No matching certificates found."
    // Load more
    loadMoreText: z.string(), // e.g., "Load More"
    // Link labels
    credentialLinkText: z.string(), // e.g., "Credential"
    mediaLinkText: z.string(), // e.g., "Media"
  }),
});

// Privacy page content collection
const privacyPage = defineCollection({
  loader: glob({ pattern: "**/index.mdx", base: "./src/content/privacy-page" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        badge: z.string(),
        content: z.string(), // HTML content stored as string
      })
    ),
  }),
});

const certificates = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/certificates" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    issuer: z.string(),
    description: z.string().optional(),
    skills: z.array(z.string()).optional(),
    media: z.string().optional(),
    credential: z.string().optional(), // URL to credential
    issueDate: z.coerce.date(),
    expirationDate: z.coerce.date().optional(),
  }),
});

export const collections = {
  projects,
  certificates,
  indexPage,
  usesPage,
  termsPage,
  privacyPage,
  projectsPage,     // Add this
  certificatesPage, // Add this
};
