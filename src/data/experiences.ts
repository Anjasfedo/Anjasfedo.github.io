import type { Experience } from "../types/portfolio";

export const EXPERIENCES: Experience[] = [
	{
		title: "Mobile Team Lead & Full-stack Developer",
		org: "Perseverance Technology Indonesia (CV Aranus Technology)",
		blurb:
			"Leading mobile team (Flutter/Native) & full-stack web architecture across global & regional entities.",
		details:
			"Full-time, hybrid (Taiwan Remote & Indonesia On-site). Dual responsibility across Perseverance Technology Co., Ltd. (Mobile Engineering Team Lead for Flutter, Android Kotlin/C, and iOS Swift apps) and its Indonesian entity, Perseverance Technology Indonesia / CV Aranus Technology (Full-stack web architecture, server-side logic, cloud deployments, and system maintenance).",
		range: "Jun 2024 — Present",
		logo: `${import.meta.env.BASE_URL}perseverance-logo.webp`,
		start: 2024 * 12 + 5,
		end: null,
	},
	{
		title: "Software Engineer",
		org: "PT Rafflesia Agro Investama",
		blurb:
			"Smart poultry & livestock ecosystem (Chikora Web/Mobile, Go backends & MQTT broker). Concurrent with Perseverance.",
		details:
			"Part-time, on-site (Bengkulu), concurrent with the Perseverance Technology role above. Engineered the technical core for Chikora's smart poultry platform: architected high-concurrency RESTful Go (Chi v5) backends, built real-time IoT MQTT telemetry broker pipelines for sensor/actuator synchronization, designed the initial cross-platform Flutter mobile foundation, and built the official web showcase.",
		range: "Aug 2025 — Apr 2026",
		logo: `${import.meta.env.BASE_URL}rafflesiaagro-logo.webp`,
		start: 2025 * 12 + 7,
		end: 2026 * 12 + 3,
	},
	{
		title: "DevOps & Solutions Architect Intern",
		org: "PT Data Sinergitama Jaya Tbk (Elitery)",
		blurb:
			"AWS cloud architecture design, IaC, CI/CD pipelines, and infrastructure optimization.",
		details:
			"Remote. Designed cost-efficient, scalable AWS cloud architectures and managed core infrastructure services (EC2, S3, IAM, VPC networking). Built automated CI/CD deployment pipelines and Infrastructure as Code (IaC) templates, produced technical architecture diagrams, and delivered cloud optimization strategies for clients.",
		range: "Nov 2024 — Jan 2025",
		logo: `${import.meta.env.BASE_URL}elitery-logo.webp`,
		start: 2024 * 12 + 10,
		end: 2025 * 12 + 0,
	},
	{
		title: "Assistant Lecturer — Framework Programming",
		org: "Universitas Bengkulu",
		blurb: "Mentored a semester of Laravel, MVC, and RESTful APIs.",
		details:
			"Contract, hybrid. MVC architecture, MySQL, ORM from CRUD to full-stack apps, RESTful API design, routing, and Blade templating. Hands-on lab sessions and code reviews on professional full-stack workflows.",
		range: "Aug 2024 — Dec 2024",
		logo: `${import.meta.env.BASE_URL}unib-logo.webp`,
		start: 2024 * 12 + 7,
		end: 2024 * 12 + 11,
	},
	{
		title: "Frontend Engineer Intern",
		org: "PT Langgeng Inovasi Teknologi",
		blurb: "Wireframes to responsive frontend in an Agile team.",
		details:
			"Remote (Bandung). Translated UI/UX wireframes into functional, responsive code; code reviews, sprint planning, Git workflows, and modern CSS. Clean, maintainable frontend code on real project timelines.",
		range: "Jun 2024 — Aug 2024",
		logo: `${import.meta.env.BASE_URL}langit-logo.webp`,
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
		logo: `${import.meta.env.BASE_URL}unib-logo.webp`,
		start: 2024 * 12 + 0,
		end: 2024 * 12 + 5,
	},
];

export const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
] as const;

export function monthLabel(idx: number): string {
	return `${MONTHS[idx % 12]} ${String(Math.floor(idx / 12)).slice(2)}`;
}
