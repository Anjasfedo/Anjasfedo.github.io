import type { Project } from "../types/portfolio";

export const PROJECTS: Project[] = [
	{
		name: "Daily Log",
		blurb:
			"Offline daily reminders & private journal — no account, no streaks.",
		details:
			"Android Developer · github.com/Anjasfedo/daily-log-releases — Offline daily reminder & private journal app: native Kotlin + Jetpack Compose + Room + Hilt with a fully custom design system (zero Material UI). Built reliable exact alarms, offline computed prayer times, mood journal with biometric lock, step-by-step routines with voice guide, home-screen widget, progress dashboard with Year in Pixels, and encrypted JSON/CSV export — no account, no cloud, no streaks.",
		href: "https://github.com/Anjasfedo/daily-log-releases",
		initial: "DL",
		logo: `${import.meta.env.BASE_URL}daily-log-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}daily-log-today.webp`,
				caption: "Today view — one-tap completions, grouped by time of day",
			},
			{
				src: `${import.meta.env.BASE_URL}daily-log-progress.webp`,
				caption: "Progress dashboard with insights and heatmaps",
			},
			{
				src: `${import.meta.env.BASE_URL}daily-log-prayer.webp`,
				caption: "Prayer times with alarms, computed offline",
			},
		],
	},
	{
		name: "Series Log",
		blurb: "Offline series tracker with a built-in reading browser.",
		details:
			"Android Developer · github.com/Anjasfedo/series-log-releases — Offline series tracker with a built-in browser: native Kotlin + Jetpack Compose + Room + DataStore + Hilt. Built Chrome-style browser tabs, bookmarks with backup, clean read mode, on-device ML Kit image translation, per-site element blocking and domain lock, progress suggestions, ~70 default genres, star ratings, and a fingerprint quick lock — no account, no cloud.",
		href: "https://github.com/Anjasfedo/series-log-releases",
		initial: "SL",
		logo: `${import.meta.env.BASE_URL}series-log-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}series-log-library.webp`,
				caption: "Library — every series in a masonry grid",
			},
			{
				src: `${import.meta.env.BASE_URL}series-log-browser.webp`,
				caption: "Built-in browser, right inside the app",
			},
			{
				src: `${import.meta.env.BASE_URL}series-log-detail.webp`,
				caption: "Series detail with progress and a 10-star rating",
			},
		],
	},
	{
		name: "Chillin",
		blurb: "Offline-first music player with YouTube audio downloads.",
		details:
			"Android Developer · github.com/Anjasfedo/chillin-releases — Offline-first music player: native Kotlin + Jetpack Compose (Material 3) + Media3 ExoPlayer. Built local MediaStore library, background playback with Now Playing queue and synced lyrics, YouTube audio downloads (M4A/MP3, playlists) via yt-dlp with a pausable queue, song/artist radio, Smart Shuffle, speed dial, and an equalizer with 8D audio — no account, no streaming service.",
		href: "https://github.com/Anjasfedo/chillin-releases",
		initial: "CH",
		logo: `${import.meta.env.BASE_URL}chillin-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}chillin-home.webp`,
				caption: "Home — your library at a glance",
			},
			{
				src: `${import.meta.env.BASE_URL}chillin-player.webp`,
				caption: "Now Playing with queue and synced lyrics",
			},
			{
				src: `${import.meta.env.BASE_URL}chillin-download.webp`,
				caption: "Paste a YouTube link and it lands in Music/Chillin",
			},
		],
	},
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
		name: "SuratLamaran",
		blurb:
			"Local-first toolkit for tailored CVs, cover letters, and freelance proposals.",
		details:
			"Full-stack Developer · suratlamaran.my.id — Job-application and proposal toolkit: React 19 + TypeScript + TanStack Router/Query/DB + Tailwind 4 + shadcn/ui, backed by Appwrite Auth, database, and storage on Cloudflare Pages. Built reusable biodata, CV and cover-letter builders, job-specific tailoring, application tracking, proposal budgeting, PDF exports, browser OCR, copy-paste AI workflows, and offline-capable cloud synchronization.",
		href: "https://suratlamaran.my.id/",
		initial: "SL",
		logo: `${import.meta.env.BASE_URL}suratlamaran-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}suratlamaran-cv-preview.webp`,
				caption: "CV document preview with scoring and PDF export controls",
			},
			{
				src: `${import.meta.env.BASE_URL}suratlamaran-proposal-budget.webp`,
				caption: "Freelance proposal cost breakdown and itemized budget",
			},
			{
				src: `${import.meta.env.BASE_URL}suratlamaran-tools.webp`,
				caption: "Reusable biodata and job-application toolkit overview",
			},
		],
	},
	{
		name: "Idea Log",
		blurb:
			"Offline-first idea workspace for turning rough captures into actionable plans.",
		details:
			"Full-stack Developer · idea-log.pages.dev — Idea-management workspace: TanStack Start SPA + React 19 + TypeScript + Tailwind 4 + shadcn/ui, backed by IndexedDB and Firebase Auth/Firestore on Cloudflare Pages. Built project-scoped status boards, progress dashboards, reviewable copy-paste AI workflows, resumable execution plans, ZIP plan exports, JSON import/export, and device-local evidence attachments.",
		href: "https://idea-log.pages.dev/",
		initial: "IL",
		logo: `${import.meta.env.BASE_URL}idea-log-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}idea-log-ideas-board.webp`,
				caption: "Project ideas organized across six lifecycle stages",
			},
			{
				src: `${import.meta.env.BASE_URL}idea-log-enhancement-review.webp`,
				caption: "Review AI-assisted idea enhancements before applying changes",
			},
			{
				src: `${import.meta.env.BASE_URL}idea-log-dashboard.webp`,
				caption: "Idea capture activity, progress, and project overview",
			},
		],
	},
	{
		name: "Cash Log",
		blurb:
			"Offline-first personal finance tracker for daily spending and cash-flow insights.",
		details:
			"Full-stack Developer · cash-log.pages.dev — Personal cash-flow tracker for Indonesian rupiah: React 19 + TypeScript + Vite 8 + TanStack Router/Query/DB + Tailwind 4 + shadcn/ui, backed by Supabase PostgreSQL, Auth, and Storage on Cloudflare Pages. Built offline cash logging, transfers, budgets, savings goals, trip tracking, receipt attachments, spending reports, and reviewable copy-paste AI workflows for categorizing and splitting entries.",
		href: "https://cash-log.pages.dev/",
		initial: "CL",
		logo: `${import.meta.env.BASE_URL}cash-log-logo.webp`,
		images: [
			{
				src: `${import.meta.env.BASE_URL}cash-log-dashboard.webp`,
				caption: "Personal cash-flow dashboard, budgets, and savings goals",
			},
			{
				src: `${import.meta.env.BASE_URL}cash-log-reports.webp`,
				caption: "Monthly spending reports and activity heatmap",
			},
			{
				src: `${import.meta.env.BASE_URL}cash-log-entries.webp`,
				caption:
					"Cash log entries with transaction breakdowns and enhancement status",
			},
		],
	},
	// Collaborative / Freelance Client Development
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
	// Institutional & University Projects
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

	// Early Career & Academic Capstones
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
