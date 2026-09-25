import type { Project } from "../types/portfolio";

export const PROJECTS: Project[] = [
    {
        name: "LATUN Website",
        blurb: "Public landing page for marine conservation in Bengkulu.",
        details:
            "Full-stack Developer · latun.or.id — Bilingual ID/EN landing page for Laut Untuk Negeri: programs (livelihood, marine, terrestrial), Berita, Agenda, Galeri, Video, Unduhan, Layanan, grant banner integration, newsletter, and contact.",
        href: "https://latun.or.id/",
        initial: "LA",
        logo: `${import.meta.env.BASE_URL}latun-main-logo.png`,
    },
    {
        name: "Sistem Grant LATUN",
        blurb: "Grant management platform for coastal & marine conservation.",
        details:
            "Full-stack Developer · grant.latun.or.id — Admin panel plus Mitra portal, 6-step proposal wizard, 12-document verification workflow, dynamic DOCX legal generation (SK, SPK, RAB), reporting & self-assessments, guided tours, and notifications.",
        href: "https://grant.latun.or.id/",
        initial: "GL",
        logo: `${import.meta.env.BASE_URL}latun-grant-logo.png`,
        darkLogo: true,
    },
    {
        name: "Chikora",
        blurb: "Landing page for broiler & layer farm management app.",
        details:
            "Full-stack Developer · chikora.rafflesiaagro.com — Landing page for RafflesiaAgro's Chikora app: daily flock recording, real-time FCR & IOFC analytics, IoT sensor integration, harvest alerts, multi-device sync, and marketplace integration; docs, release notes, legal, plus Web app and store links.",
        href: "https://chikora.rafflesiaagro.com/",
        initial: "CH",
        logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
        darkLogo: true,
    },
    {
        name: "Pulih Apps",
        blurb: "Bangkit 2024 capstone — cloud backend on Django & GCP.",
        details:
            "Cloud Computing cohort · May — Jun 2024 — Designed and deployed the backend: Django REST Framework on Cloud Run with Cloud SQL (PostgreSQL). APIs, auth, IAM, and serverless deploy for a production-ready, scalable app.",
        href: "https://github.com/C241-PS019/Pulih-Apps-CC",
        initial: "PA",
        logo: `${import.meta.env.BASE_URL}github-logo.svg`,
    },
    {
        name: "PPL Point of Sale",
        blurb: "Laravel POS — products, transactions, and sales reporting.",
        details:
            "Full-stack Developer · Sep — Dec 2023 — Point-of-sale web app for the Software Development Project course (Universitas Bengkulu). Laravel + MySQL with MVC, UML, and sprint planning — my first complete app built end-to-end.",
        href: "https://github.com/Anjasfedo/PPL-Point-Of-Sale",
        initial: "PS",
        logo: `${import.meta.env.BASE_URL}github-logo.svg`,
    },
];