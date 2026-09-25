import type { Project } from "../types/portfolio";

export const PROJECTS: Project[] = [
	// 1. Primary Active Products (RafflesiaAgro / Chikora Ecosystem)
	{
		name: "Chikora",
		blurb: "Landing page for broiler & layer farm management platform.",
		details:
			"Full-stack Developer · chikora.rafflesiaagro.com — Top contributor with 180+ commits (~46% of total commits) for RafflesiaAgro's Chikora web showcase. Highlighting daily flock recording, real-time FCR & IOFC analytics, IoT sensor integration, harvest alerts, multi-device sync, and marketplace integration.",
		href: "https://chikora.rafflesiaagro.com/",
		initial: "CH",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}chikora-rafflesiaagro-landing-page.webp`,
				caption: "Chikora landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}chikora-rafflesiaagro-github-stats.png`,
				caption: "Git commit contribution statistics (Top contributor)",
			},
		],
	},
	{
		name: "Chikora Mobile",
		blurb: "Cross-platform mobile app for broiler & layer farm management.",
		details:
			"Mobile App Developer · App Store / Play Store — Architected and built the initial foundation (100% of early repository commits) for Chikora's cross-platform mobile application. Laid the initial codebase for daily flock logging, FCR/HDP analytics, feed tracking, mortality records, and offline sync prior to production expansion.",
		href: "https://play.google.com/store/apps/details?id=com.rafflesiaagro.chikora",
		initial: "CM",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}chikora-preview.webp`,
				caption: "Chikora mobile app interface preview",
			},
			{
				src: `${import.meta.env.BASE_URL}chikora-mobile-initial-github-stats.png`,
				caption:
					"Git commit contribution statistics (Initial Mobile Repository)",
			},
		],
	},
	// 2. Marine Conservation Platforms (LATUN Ecosystem)
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
				src: `${import.meta.env.BASE_URL}latun-landing-page.webp`,
				caption: "LATUN landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}latun-landing-github-stats.png`,
				caption: "Git commit contribution statistics (100% contribution)",
			},
		],
	},
	{
		name: "Sistem Grant LATUN",
		blurb: "Grant management platform for coastal & marine conservation.",
		details:
			"Full-stack Developer · grant.latun.or.id — Sole contributor (89 commits) to the grant management platform. Built Admin panel & Mitra portal, 6-step proposal wizard, 12-document verification workflow, dynamic DOCX legal generation (SK, SPK, RAB), reporting & self-assessments, guided tours, and notifications.",
		href: "https://grant.latun.or.id/",
		initial: "GL",
		logo: `${import.meta.env.BASE_URL}latun-grant-logo.png`,
		darkLogo: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}grant-latun-landing-page.webp`,
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
		name: "Aranus Technology Cloud Infrastructure",
		blurb:
			"Self-hosted PaaS platform, Docker containerization, and automated CI/CD deployments.",
		details:
			"DevOps — Designed and deployed Aranus Technology's self-hosted Coolify PaaS environment. Authored production Dockerfiles and docker-compose.yml configurations across multiple microservices and client applications (POS, IoT tracking, databases), establishing automated containerized deployments, SSL routing, and server orchestration.",
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
			"Full-stack Developer · Jan 2025 – Nov 2025 · Upwork (Freelance) — Contributed 37 commits during the initial feature development of a 1,400+ commit codebase before handing off to the core team. Developed OpenAI vector similarity search with real-time SSE streaming for candidate matching, BullMQ CV parsing, Stripe subscription management, talent pools, and kanban pipelines in a Turborepo monorepo.",
		href: "https://yena.ai",
		initial: "YA",
		logo: `${import.meta.env.BASE_URL}yena-logo.png`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}02d-yena-candidate-import-cv-review-data-processed.webp`,
				caption: "CV parsing & automated candidate data extraction review",
			},
			{
				src: `${import.meta.env.BASE_URL}07-yena-git-stats.png`,
				caption: "Git commit shortlog contribution statistics",
			},
		],
	},
	// 4. Institutional & University Projects
	{
		name: "UPM FMIPA UNIB",
		blurb: "Quality assurance unit website for FMIPA Universitas Bengkulu.",
		details:
			"Full-stack Developer · upmfmipa.unib.ac.id — Lead contributor with 130 commits (~53% of total commits) for Unit Penjaminan Mutu (UPM) FMIPA Universitas Bengkulu: SPMI documents, surveys, reports, downloads, SOPs, and administrative portal.",
		href: "https://upmfmipa.unib.ac.id/",
		initial: "UPM",
		logo: `${import.meta.env.BASE_URL}unib-logo.jpg`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}upm-fmipa-unib-landing-page.webp`,
				caption: "UPM FMIPA UNIB landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}upm-fmipa-unib-github-stats.png`,
				caption: "Git commit contribution statistics (Top contributor)",
			},
		],
	},

	// 5. Legacy Infrastructure & Deprecated Services
	{
		name: "API Chikora (Legacy)",
		blurb: "Legacy Go backend API powering the Chikora web & mobile apps.",
		details:
			"Backend Developer · api.chikora.rafflesiaagro.com — Sole contributor (45 commits) to the legacy RESTful backend built with Go (Chi v5) router, supporting daily flock management, analytics, and mobile/web client synchronization for Chikora. Currently offline.",
		href: "https://api.chikora.rafflesiaagro.com/",
		initial: "AC",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}api-chikora-rafflesia-agro-git-stats.png`,
				caption: "Git commit contribution statistics (100% contribution)",
			},
		],
	},
	{
		name: "MQTT Server Rafflesia Agro (Legacy)",
		blurb: "MQTT broker service for IoT sensors and actuator telemetry.",
		details:
			"IoT / Backend Developer · mqtt.rafflesiaagro.com — Sole contributor (28 commits) to the MQTT broker infrastructure bridging IoT sensors, actuator control systems, and backend services within the Aranus Farm / Rafflesia Agro smart poultry ecosystem. Currently offline.",
		href: "https://mqtt.rafflesiaagro.com/",
		initial: "MQ",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}mqtt-rafflesia-agro-git-stats.png`,
				caption: "Git commit contribution statistics (100% contribution)",
			},
		],
	},
	{
		name: "API Rafflesia Agro (Legacy)",
		blurb: "Legacy API backend for Aranus Farm & Rafflesia Agro ecosystem.",
		details:
			"Backend Developer · api.rafflesiaagro.com — Sole contributor (126 commits) to the legacy REST API service supporting web and mobile apps across the former Aranus Farm and Rafflesia Agro livestock management ecosystem. Currently offline.",
		href: "https://api.rafflesiaagro.com/",
		initial: "RA",
		logo: `${import.meta.env.BASE_URL}chikora-logo.png`,
		darkLogo: true,
		deprecated: true,
		images: [
			{
				src: `${import.meta.env.BASE_URL}api-rafflesia-agro-git-stats.png`,
				caption: "Git commit contribution statistics (100% contribution)",
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
				src: `${import.meta.env.BASE_URL}rafflesiaagro-landing-page.webp`,
				caption: "Rafflesia Agro landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}rafflesiaagro-landing-website-git-stats.png`,
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
				src: `${import.meta.env.BASE_URL}aranus-technology-landing-page.webp`,
				caption: "Aranus Technology previous landing page hero section",
			},
			{
				src: `${import.meta.env.BASE_URL}aranus-technology-landing-git-stats.png`,
				caption: "Git commit contribution statistics (Previous repository)",
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
