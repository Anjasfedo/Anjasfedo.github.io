import type { Project } from "../types/portfolio";

export const PROJECTS: Project[] = [
	{
		name: "LATUN Jobs",
		blurb: "Recruitment platform for marine conservation roles in Bengkulu.",
		details:
			"Full-stack Developer · job.latun.or.id — LATUN's recruitment platform: TanStack Start SPA + React 19 + Tailwind 4 + shadcn/ui client backed by a Laravel 13 + Sanctum + MySQL JSON API. Built coastal-identity landing page with job board, applicant portal (dashboard, 4-step apply wizard, document library, per-application chat, notifications), and admin panel (vacancy management, sequential application review queue, applicant directory, support inbox) for REKRUTMEN LATUN 2026 — 50 positions in Bengkulu.",
		href: "https://job.latun.or.id/",
		initial: "LJ",
		logo: `${import.meta.env.BASE_URL}latun-main-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}job-latun-landing-page.webp`,
				caption: "LATUN Jobs landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}job-latun-app-dashboard-page.webp`,
				caption: "Applicant dashboard overview",
			},
			{
				src: `${import.meta.env.BASE_URL}job-latun-admin-dashboard-page.webp`,
				caption: "Admin dashboard overview",
			},
		],
	},
	{
		name: "LATUN Website",
		blurb: "Public landing page for marine conservation in Bengkulu.",
		details:
			"Full-stack Developer · latun.or.id — Bilingual ID/EN landing page for Laut Untuk Negeri: Laravel 13 + Livewire 4 Blaze + Fortify auth + Flux UI + Tailwind v4 + MySQL monolith. Built programs (livelihood, marine, terrestrial), Berita (News), Agenda (Events), Galeri (Gallery), Video (Videos), Unduhan (Downloads), Layanan (Services), grant banner integration, newsletter, and contact.",
		href: "https://latun.or.id/",
		initial: "LA",
		logo: `${import.meta.env.BASE_URL}latun-main-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}latun-landing-page.webp`,
				caption: "LATUN landing page hero section",
			},
		],
	},
	{
		name: "Grant LATUN",
		blurb: "Grant management platform for coastal & marine conservation.",
		details:
			"Full-stack Developer · grant.latun.or.id — Grant management platform: Laravel 13 + Inertia 2 + Vue 3 (TS) + Tailwind + MySQL monolith. Built Admin panel & Mitra portal, 6-step proposal wizard, 12-document verification workflow, dynamic DOCX legal generation (SK, SPK, RAB), reporting & self-assessments, guided tours, and notifications.",
		href: "https://grant.latun.or.id/",
		initial: "GL",
		logo: `${import.meta.env.BASE_URL}latun-grant-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}grant-latun-landing-page.webp`,
				caption: "Grant LATUN landing page",
			},
			{
				src: `${import.meta.env.BASE_URL}grant-latun-admin-dashboard-page.webp`,
				caption: "Admin dashboard overview",
			},
		],
	},
	{
		name: "Chikora",
		blurb: "Landing page for broiler & layer farm management platform.",
		details:
			"Full-stack Developer · chikora.rafflesiaagro.com — Rafflesia Agro's Chikora web showcase: Next.js + Supabase + Tailwind. Highlighting daily flock recording, real-time FCR & IOFC analytics, IoT sensor integration, harvest alerts, multi-device sync, and marketplace integration.",
		href: "https://chikora.rafflesiaagro.com/",
		initial: "CH",
		logo: `${import.meta.env.BASE_URL}chikora-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}chikora-rafflesiaagro-landing-page.webp`,
				caption: "Chikora landing page hero section",
			},
		],
	},
	{
		name: "Chikora Mobile",
		blurb: "Cross-platform mobile app for broiler & layer farm management.",
		details:
			"Mobile App Developer · App Store / Play Store — Architected and built the initial foundation for Chikora's cross-platform mobile application in Flutter. Laid the initial codebase for daily flock logging, FCR/HDP analytics, feed tracking, mortality records, and offline sync prior to production expansion.",
		href: "https://play.google.com/store/apps/details?id=com.rafflesiaagro.chikora",
		initial: "CM",
		logo: `${import.meta.env.BASE_URL}chikora-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}chikora-preview.webp`,
				caption: "Chikora mobile app interface preview",
			},
		],
	},
	{
		name: "Aranus Technology Cloud Infrastructure",
		blurb:
			"Self-hosted PaaS platform, Docker containerization, and automated CI/CD deployments.",
		details:
			"DevOps — Designed and deployed Aranus Technology's self-hosted Coolify PaaS environment on a VPS. Authored production Dockerfiles and docker-compose.yml configurations across multiple microservices and client applications (POS, IoT tracking, databases), establishing automated containerized deployments, SSL routing, and server orchestration.",
		href: "https://aranustech.co.id/",
		initial: "AC",
		logo: `${import.meta.env.BASE_URL}aranus-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}aranus-technology-coolify.webp`,
				caption:
					"Coolify self-hosted dashboard & container deployment management",
			},
		],
	},
	// 3. Collaborative / Freelance Client Development
	{
		name: "Yena AI",
		blurb: "AI-powered recruitment SaaS platform built from the ground up.",
		details:
			"Full-stack Developer · Jan 2025 – Nov 2025 · Upwork (Freelance) — Contributed to the initial feature development before handing off to the core team: Next.js + Express + Tailwind in a Turborepo monorepo. Developed OpenAI vector similarity search with real-time SSE streaming for candidate matching, BullMQ CV parsing with multi-provider OCR (Google, Mistral, and others), Stripe subscription management, talent pools, and kanban pipelines.",
		href: "https://yena.ai",
		initial: "YA",
		logo: `${import.meta.env.BASE_URL}yena-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}02d-yena-candidate-import-cv-review-data-processed.webp`,
				caption: "CV parsing & automated candidate data extraction review",
			},
		],
	},
	// 4. Institutional & University Projects
	{
		name: "UPM FMIPA UNIB",
		blurb: "Quality assurance unit website for FMIPA Universitas Bengkulu.",
		details:
			"Full-stack Developer · upmfmipa.unib.ac.id — Unit Penjaminan Mutu (UPM) FMIPA Universitas Bengkulu's quality assurance website: Laravel 10 + Blade + Bootstrap (SBAdmin2) + MySQL monolith. Built SPMI documents, surveys, reports, downloads, SOPs, and administrative portal.",
		href: "https://upmfmipa.unib.ac.id/",
		initial: "UPM",
		logo: `${import.meta.env.BASE_URL}unib-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}upm-fmipa-unib-landing-page.webp`,
				caption: "UPM FMIPA UNIB landing page hero section",
			},
		],
	},

	// 5. Legacy Infrastructure & Deprecated Services
	{
		name: "API Chikora (Legacy)",
		blurb: "Legacy Go backend API powering the Chikora web & mobile apps.",
		details:
			"Backend Developer · api.chikora.rafflesiaagro.com — Legacy RESTful backend built with Go (Chi v5) router + PostgreSQL, supporting daily flock management, analytics, and mobile/web client synchronization for Chikora. Superseded by a newer backend version.",
		href: "https://api.chikora.rafflesiaagro.com/",
		initial: "AC",
		logo: `${import.meta.env.BASE_URL}chikora-logo.webp`,
		deprecated: true,
	},
	{
		name: "MQTT Server Rafflesia Agro",
		blurb: "MQTT broker service for IoT sensors and actuator telemetry.",
		details:
			"IoT / Backend Developer · mqtt.rafflesiaagro.com — MQTT broker infrastructure with a Go backend, bridging ESP32 microcontrollers, sensors (humidity, temperature, brightness), and actuators for electricity connection within the Aranus Farm / Rafflesia Agro smart poultry ecosystem. Currently offline.",
		href: "https://mqtt.rafflesiaagro.com/",
		initial: "MQ",
		logo: `${import.meta.env.BASE_URL}chikora-logo.webp`,
		deprecated: true,
	},
	{
		name: "API Rafflesia Agro",
		blurb: "API backend for Aranus Farm & Rafflesia Agro ecosystem.",
		details:
			"Backend Developer · api.rafflesiaagro.com — REST API service supporting web and mobile apps across the former Aranus Farm and Rafflesia Agro livestock management ecosystem: Laravel + PostgreSQL + Redis. Currently offline.",
		href: "https://api.rafflesiaagro.com/",
		initial: "RA",
		logo: `${import.meta.env.BASE_URL}rafflesiaagro-logo.webp`,
		deprecated: true,
	},
	{
		name: "Rafflesia Agro (Legacy)",
		blurb: "Previous landing page for agricultural technology company.",
		details:
			"Full-stack Developer · rafflesiaagro.com — Corporate landing page presenting smart farming solutions, product portfolio, company profiles, and contact channels: Astro frontend with PocketBase backend & CMS. Superseded by a newer site version.",
		href: "https://rafflesiaagro.com/",
		initial: "RA",
		logo: `${import.meta.env.BASE_URL}rafflesiaagro-logo.webp`,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}rafflesiaagro-landing-page.webp`,
				caption: "Rafflesia Agro landing page hero section",
			},
		],
	},
	{
		name: "Aranus Technology (Legacy)",
		blurb:
			"Previous landing page for software development agency (Old Version).",
		details:
			"Full-stack Developer · aranustech.co.id — Previous company website featuring IT services, portfolio, client testimonials, and contact channels: Laravel + MySQL. Superseded by a newer web layout version.",
		href: "https://aranustech.co.id/",
		initial: "AT",
		logo: `${import.meta.env.BASE_URL}aranus-logo.webp`,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}aranus-technology-landing-page.webp`,
				caption: "Aranus Technology previous landing page hero section",
			},
		],
	},

	// 6. Early Career & Academic Capstones
	{
		name: "Pulih Apps",
		blurb: "Bangkit 2024 capstone — cloud backend on Django & GCP.",
		details:
			"Cloud Computing Cohort · May — Jun 2024 — Designed and deployed the backend architecture using Django REST Framework on Cloud Run with Cloud SQL (PostgreSQL). Implemented REST APIs, authentication, IAM permissions, and automated serverless deployment.",
		href: "https://github.com/C241-PS019/Pulih-Apps-CC",
		initial: "PA",
		logo: `${import.meta.env.BASE_URL}github-logo.svg`,
	},
	{
		name: "PPL Point of Sale",
		blurb: "Laravel POS — products, transactions, and sales reporting.",
		details:
			"Full-stack Developer · Sep — Dec 2023 — Point-of-sale web app for the Software Development Project course (Universitas Bengkulu). Laravel + MySQL with MVC, UML design, and sprint planning — first complete end-to-end full-stack project.",
		href: "https://github.com/Anjasfedo/PPL-Point-Of-Sale",
		initial: "PS",
		logo: `${import.meta.env.BASE_URL}github-logo.svg`,
	},
];
