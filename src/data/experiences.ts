import type { Experience } from "../types/portfolio";

export const EXPERIENCES: Experience[] = [
    {
        title: "Software Engineer",
        org: "Perseverance Technology Co., Ltd.",
        blurb: "Desktop apps in Python & C++ with ML models in production features.",
        details:
            "Part-time, remote (New Taipei, Taiwan). Bridging traditional desktop software and modern AI — ML integration, software architecture, production code, tests & QA, code reviews. Translating complex requirements into scalable, maintainable solutions.",
        range: "Jul 2024 — Present",
        logo: `${import.meta.env.BASE_URL}perseverance-logo.png`,
        start: 2024 * 12 + 6,
        end: null,
    },
    {
        title: "Software Developer",
        org: "Aranus Technology",
        blurb: "End-to-end web apps — architecture to deploy and maintenance.",
        details:
            "Part-time, on-site (Bengkulu, Indonesia). Full-stack across the SDLC: responsive UIs, server-side logic, database integrations; performance, security, and reliability as requirements evolve. Rapidly learning unfamiliar tech as project demands require.",
        range: "Jun 2024 — Present",
        logo: `${import.meta.env.BASE_URL}aranus-logo.webp`,
        start: 2024 * 12 + 5,
        end: null,
    },
    {
        title: "Solutions Architect Intern",
        org: "Elitery",
        blurb: "Scalable AWS architectures tailored to client requirements.",
        details:
            "Remote. Analyzed technical needs to select the right AWS services, balancing cost, performance, and security. Produced technical documentation and architecture diagrams; articulated trade-offs between cloud-native services.",
        range: "Dec 2024 — Jan 2025",
        logo: `${import.meta.env.BASE_URL}elitery-logo.jpg`,
        start: 2024 * 12 + 11,
        end: 2025 * 12 + 0,
    },
    {
        title: "DevOps Engineer Intern",
        org: "Elitery",
        blurb: "AWS infrastructure, IaC, and deployment pipelines.",
        details:
            "Remote. Configured EC2, S3, IAM, and networking; contributed to automated deployment pipelines and Infrastructure as Code to cut manual release overhead. Hands-on with monitoring, CI/CD, and keeping cloud environments secure and cost-efficient.",
        range: "Nov 2024 — Dec 2024",
        logo: `${import.meta.env.BASE_URL}elitery-logo.jpg`,
        start: 2024 * 12 + 10,
        end: 2024 * 12 + 11,
    },
    {
        title: "Assistant Lecturer — Framework Programming",
        org: "Universitas Bengkulu",
        blurb: "Mentored a semester of Laravel, MVC, and RESTful APIs.",
        details:
            "Contract, hybrid. MVC architecture, MySQL, ORM from CRUD to full-stack apps, RESTful API design, routing, and Blade templating. Hands-on lab sessions and code reviews on professional full-stack workflows.",
        range: "Aug 2024 — Dec 2024",
        logo: `${import.meta.env.BASE_URL}unib-logo.jpg`,
        start: 2024 * 12 + 7,
        end: 2024 * 12 + 11,
    },
    {
        title: "Frontend Engineer Intern",
        org: "Langgeng Inovasi Teknologi",
        blurb: "Wireframes to responsive frontend in an Agile team.",
        details:
            "Remote (Bandung). Translated UI/UX wireframes into functional, responsive code; code reviews, sprint planning, Git workflows, and modern CSS. Clean, maintainable frontend code on real project timelines.",
        range: "Jun 2024 — Aug 2024",
        logo: `${import.meta.env.BASE_URL}langit-logo.jpg`,
        start: 2024 * 12 + 5,
        end: 2024 * 12 + 7,
    },
    {
        title: "Assistant Lecturer — Web Programming",
        org: "Universitas Bengkulu",
        blurb: "Taught HTML, CSS, JavaScript ES6+, and React, static to SPA.",
        details:
            "Contract, hybrid. State management, component architecture, hooks, async JavaScript, performance and accessibility best practices. Led labs, workshops, and debugging sessions with personalized student support.",
        range: "Jan 2024 — Jun 2024",
        logo: `${import.meta.env.BASE_URL}unib-logo.jpg`,
        start: 2024 * 12 + 0,
        end: 2024 * 12 + 5,
    },
];

export const MONTHS = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

export function monthLabel(idx: number): string {
    return `${MONTHS[idx % 12]} ${String(Math.floor(idx / 12)).slice(2)}`;
}