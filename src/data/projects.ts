import type { Project } from "../types/portfolio";

export const PROJECTS: Project[] = [
	{
		name: "Chikora",
		blurb: "Landing page for broiler & layer farm management app.",
		details:
			"Full-stack Developer · chikora.rafflesiaagro.com — Top contributor with 180+ commits (~46% of total commits) for RafflesiaAgro's Chikora app landing page: daily flock recording, real-time FCR & IOFC analytics, IoT sensor integration, harvest alerts, multi-device sync, and marketplace integration; docs, release notes, legal, plus Web app and store links.",
		href: "https://chikora.rafflesiaagro.com/",
		initial: "CH",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}chikora-rafflesiaagro-landing-page.png`,
				caption: "Chikora landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}chikora-rafflesiaagro-github-statspng.png`,
				caption: "Git commit contribution statistics (Top contributor)",
			},
		],
	},
	{
		name: "Rafflesia Agro",
		blurb: "Official landing page for agricultural technology company.",
		details:
			"Full-stack Developer · rafflesiaagro.com — Sole contributor (18 commits) to the corporate landing page presenting smart farming solutions, product portfolio, company profiles, and contact channels. Currently offline.",
		href: "https://rafflesiaagro.com/",
		initial: "RA",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}rafflesiaagro-landing-page.png`,
				caption: "Rafflesia Agro landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}rafflesiaagro-landing website-git-stats.png`,
				caption: "Git commit contribution statistics (100% contribution)",
			},
		],
	},
	{
		name: "Aranus Technology (Legacy)",
		blurb:
			"Previous landing page for software development agency (Old Version).",
		details:
			"Full-stack Developer · aranustech.co.id — Contributed 90+ commits (~36% of total commits) to the previous company website featuring IT services, portfolio, client testimonials, and contact channels. Superseded by a newer web layout version.",
		href: "https://aranustech.co.id/",
		initial: "AT",
		logo: `${import.meta.env.BASE_URL}aranus-logo.webp`,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}aranus-technology-landing-page.png`,
				caption: "Aranus Technology previous landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}aranus-technology-landing-git-stats.png`,
				caption: "Git commit contribution statistics (Previous repository)",
			},
		],
	},
	{
		name: "LATUN Website",
		blurb: "Public landing page for marine conservation in Bengkulu.",
		details:
			"Full-stack Developer · latun.or.id — Sole contributor (140 commits) to the bilingual ID/EN landing page for Laut Untuk Negeri: programs (livelihood, marine, terrestrial), Berita, Agenda, Galeri, Video, Unduhan, Layanan, grant banner integration, newsletter, and contact.",
		href: "https://latun.or.id/",
		initial: "LA",
		logo: `${import.meta.env.BASE_URL}latun-main-logo.png`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}latun-landing-page.png`,
				caption: "LATUN landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}latun-landing-github-statspng.png`,
				caption: "Git commit contribution statistics (100% contribution)",
			},
		],
	},
	{
		name: "Sistem Grant LATUN",
		blurb: "Grant management platform for coastal & marine conservation.",
		details:
			"Full-stack Developer · grant.latun.or.id — Sole contributor (89 commits) to the grant management platform: Admin panel plus Mitra portal, 6-step proposal wizard, 12-document verification workflow, dynamic DOCX legal generation (SK, SPK, RAB), reporting & self-assessments, guided tours, and notifications.",
		href: "https://grant.latun.or.id/",
		initial: "GL",
		logo: `${import.meta.env.BASE_URL}latun-grant-logo.png`,
		darkLogo: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}grant-latun-landing-page.png`,
				caption: "Sistem Grant LATUN landing page",
			},
			{
				src: `${import.meta.env.BASE_URL}grant-latun-admin-dashboard-page.png`,
				caption: "Admin dashboard overview",
			},
			{
				src: `${import.meta.env.BASE_URL}grant-latun-github-stats.png`,
				caption: "Git commit contribution statistics (100% contribution)",
			},
		],
	},
	{
		name: "Yena AI",
		blurb: "AI-powered recruitment SaaS platform built from the ground up.",
		details:
			"Full-stack Developer · Jan 2025 – Nov 2025 · Upwork (Freelance) — Contributed 37 commits to a 1,400+ commit codebase. Built using Next.js 14, Express.js, PostgreSQL, Redis, and Turborepo monorepo with ts-rest. Key features include OpenAI vector similarity search with real-time SSE streaming for candidate matching, BullMQ CV parsing, Stripe subscription management, talent pools, and kanban pipelines.",
		href: "https://yena.ai",
		initial: "YA",
		logo: `${import.meta.env.BASE_URL}yena-logo.png`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}02d-yena-candidate-import-cv-review-data-processed.png`,
				caption: "CV parsing & automated candidate data extraction review",
			},
			{
				src: `${import.meta.env.BASE_URL}07-yena-git-stats.png`,
				caption: "Git commit shortlog contribution statistics",
			},
		],
	},
	{
		name: "UPM FMIPA UNIB",
		blurb: "Quality assurance unit website for FMIPA Universitas Bengkulu.",
		details:
			"Full-stack Developer · upmfmipa.unib.ac.id — Official website for Unit Penjaminan Mutu (UPM) FMIPA Universitas Bengkulu: SPMI documents, surveys, reports, downloads, SOPs, and administrative portal.",
		href: "https://upmfmipa.unib.ac.id/",
		initial: "UPM",
		logo: `${import.meta.env.BASE_URL}unib-logo.jpg`,
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
