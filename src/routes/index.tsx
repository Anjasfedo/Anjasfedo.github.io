import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

const PORTRAIT_URL = "/profile-circle.webp";

function GitHubIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
		</svg>
	);
}

function LinkedInIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
		</svg>
	);
}

function InstagramIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function EmailIcon({ className = "" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			className={className}
		>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}

const LINKS = [
	{
		label: "GitHub",
		href: "https://github.com/anjasfedo",
		Icon: GitHubIcon,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/m-anjasfedo-afridiansah",
		Icon: LinkedInIcon,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/anjas_fedo/",
		Icon: InstagramIcon,
	},
	{ label: "Email", href: "mailto:fedoafridiansah@gmail.com", Icon: EmailIcon },
];

const TABS = ["Experiences", "Projects", "Certificates"] as const;
type Tab = (typeof TABS)[number];

type Experience = {
	title: string;
	org: string;
	blurb: string;
	details: string;
	range: string;
	logo: string;
	/** Month index (`year * 12 + (month - 1)`); `end: null` means present. */
	start: number;
	end: number | null;
};

const EXPERIENCES: Experience[] = [
	{
		title: "Software Engineer",
		org: "Perseverance Technology Co., Ltd.",
		blurb:
			"Desktop apps in Python & C++ with ML models in production features.",
		details:
			"Part-time, remote (New Taipei, Taiwan). Bridging traditional desktop software and modern AI — ML integration, software architecture, production code, tests & QA, code reviews. Translating complex requirements into scalable, maintainable solutions.",
		range: "Jul 2024 — Present",
		logo: "/perseverance-logo.png",
		start: 2024 * 12 + 6, // Jul 2024
		end: null, // Present
	},
	{
		title: "Software Developer",
		org: "Aranus Technology",
		blurb: "End-to-end web apps — architecture to deploy and maintenance.",
		details:
			"Part-time, on-site (Bengkulu, Indonesia). Full-stack across the SDLC: responsive UIs, server-side logic, database integrations; performance, security, and reliability as requirements evolve. Rapidly learning unfamiliar tech as project demands require.",
		range: "Jun 2024 — Present",
		logo: "/aranus-logo.webp",
		start: 2024 * 12 + 5, // Jun 2024
		end: null, // Present
	},
	{
		title: "Solutions Architect Intern",
		org: "Elitery",
		blurb: "Scalable AWS architectures tailored to client requirements.",
		details:
			"Remote. Analyzed technical needs to select the right AWS services, balancing cost, performance, and security. Produced technical documentation and architecture diagrams; articulated trade-offs between cloud-native services.",
		range: "Dec 2024 — Jan 2025",
		logo: "/elitery-logo.jpg",
		start: 2024 * 12 + 11, // Dec 2024
		end: 2025 * 12 + 0, // Jan 2025
	},
	{
		title: "DevOps Engineer Intern",
		org: "Elitery",
		blurb: "AWS infrastructure, IaC, and deployment pipelines.",
		details:
			"Remote. Configured EC2, S3, IAM, and networking; contributed to automated deployment pipelines and Infrastructure as Code to cut manual release overhead. Hands-on with monitoring, CI/CD, and keeping cloud environments secure and cost-efficient.",
		range: "Nov 2024 — Dec 2024",
		logo: "/elitery-logo.jpg",
		start: 2024 * 12 + 10, // Nov 2024
		end: 2024 * 12 + 11, // Dec 2024
	},
	{
		title: "Assistant Lecturer — Framework Programming",
		org: "Universitas Bengkulu",
		blurb: "Mentored a semester of Laravel, MVC, and RESTful APIs.",
		details:
			"Contract, hybrid. MVC architecture, MySQL, ORM from CRUD to full-stack apps, RESTful API design, routing, and Blade templating. Hands-on lab sessions and code reviews on professional full-stack workflows.",
		range: "Aug 2024 — Dec 2024",
		logo: "/unib-logo.jpg",
		start: 2024 * 12 + 7, // Aug 2024
		end: 2024 * 12 + 11, // Dec 2024
	},
	{
		title: "Frontend Engineer Intern",
		org: "Langgeng Inovasi Teknologi",
		blurb: "Wireframes to responsive frontend in an Agile team.",
		details:
			"Remote (Bandung). Translated UI/UX wireframes into functional, responsive code; code reviews, sprint planning, Git workflows, and modern CSS. Clean, maintainable frontend code on real project timelines.",
		range: "Jun 2024 — Aug 2024",
		logo: "/langit-logo.jpg",
		start: 2024 * 12 + 5, // Jun 2024
		end: 2024 * 12 + 7, // Aug 2024
	},
	{
		title: "Assistant Lecturer — Web Programming",
		org: "Universitas Bengkulu",
		blurb: "Taught HTML, CSS, JavaScript ES6+, and React, static to SPA.",
		details:
			"Contract, hybrid. State management, component architecture, hooks, async JavaScript, performance and accessibility best practices. Led labs, workshops, and debugging sessions with personalized student support.",
		range: "Jan 2024 — Jun 2024",
		logo: "/unib-logo.jpg",
		start: 2024 * 12 + 0, // Jan 2024
		end: 2024 * 12 + 5, // Jun 2024
	},
];

/* Month-based timeline: one full-width row per role (Gantt-style), so any
   number of concurrent roles stays readable — no shared lanes. */
const MONTHS = [
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

function monthLabel(idx: number): string {
	return `${MONTHS[idx % 12]} ${String(Math.floor(idx / 12)).slice(2)}`;
}

type Project = {
	name: string;
	blurb: string;
	details: string;
	href: string;
	initial: string;
	logo: string;
	/** Dark tile background for light-on-transparent artwork. */
	darkLogo?: boolean;
};

const PROJECTS: Project[] = [
	{
		name: "LATUN Website",
		blurb: "Public landing page for marine conservation in Bengkulu.",
		details:
			"Full-stack Developer · latun.or.id — Bilingual ID/EN landing page for Laut Untuk Negeri: programs (livelihood, marine, terrestrial), Berita, Agenda, Galeri, Video, Unduhan, Layanan, grant banner integration, newsletter, and contact.",
		href: "https://latun.or.id/",
		initial: "LA",
		logo: "/latun-main-logo.png",
	},
	{
		name: "Sistem Grant LATUN",
		blurb: "Grant management platform for coastal & marine conservation.",
		details:
			"Full-stack Developer · grant.latun.or.id — Admin panel plus Mitra portal, 6-step proposal wizard, 12-document verification workflow, dynamic DOCX legal generation (SK, SPK, RAB), reporting & self-assessments, guided tours, and notifications.",
		href: "https://grant.latun.or.id/",
		initial: "GL",
		logo: "/latun-grant-logo.png",
		darkLogo: true,
	},
	{
		name: "Chikora",
		blurb: "Landing page for broiler & layer farm management app.",
		details:
			"Full-stack Developer · chikora.rafflesiaagro.com — Landing page for RafflesiaAgro's Chikora app: daily flock recording, real-time FCR & IOFC analytics, IoT sensor integration, harvest alerts, multi-device sync, and marketplace integration; docs, release notes, legal, plus Web app and store links.",
		href: "https://chikora.rafflesiaagro.com/",
		initial: "CH",
		logo: "/chikora-logo.png",
		darkLogo: true,
	},
	{
		name: "Pulih Apps",
		blurb: "Bangkit 2024 capstone — cloud backend on Django & GCP.",
		details:
			"Cloud Computing cohort · May — Jun 2024 — Designed and deployed the backend: Django REST Framework on Cloud Run with Cloud SQL (PostgreSQL). APIs, auth, IAM, and serverless deploy for a production-ready, scalable app.",
		href: "https://github.com/C241-PS019/Pulih-Apps-CC",
		initial: "PA",
		logo: "/github-logo.svg",
	},
	{
		name: "PPL Point of Sale",
		blurb: "Laravel POS — products, transactions, and sales reporting.",
		details:
			"Full-stack Developer · Sep — Dec 2023 — Point-of-sale web app for the Software Development Project course (Universitas Bengkulu). Laravel + MySQL with MVC, UML, and sprint planning — my first complete app built end-to-end.",
		href: "https://github.com/Anjasfedo/PPL-Point-Of-Sale",
		initial: "PS",
		logo: "/github-logo.svg",
	},
];

type Certificate = {
	name: string;
	issuer: string;
	year: string;
};

const CERTIFICATES: Certificate[] = [
	{
		name: "Google Cybersecurity Specialization",
		issuer: "Google",
		year: "Jul 2024",
	},
	{
		name: "Google IT Support Specialization",
		issuer: "Google",
		year: "Jul 2024",
	},
	{
		name: "Google Cloud Computing Foundations",
		issuer: "Google",
		year: "Mar 2024",
	},
	{
		name: "Become a Google Cloud Engineer",
		issuer: "Dicoding Indonesia",
		year: "May 2024",
	},
	{
		name: "JavaScript Algorithms and Data Structures",
		issuer: "freeCodeCamp",
		year: "Sep 2023",
	},
	{
		name: "Responsive Web Design",
		issuer: "freeCodeCamp",
		year: "Mar 2023",
	},
	{
		name: "AWS Cloud Quest: Cloud Practitioner",
		issuer: "Amazon Web Services",
		year: "Jul 2024",
	},
	{
		name: "AWS Knowledge: Cloud Essentials",
		issuer: "Amazon Web Services",
		year: "Jul 2024",
	},
	{
		name: "AWS Educate Introduction to Cloud 101",
		issuer: "Amazon Web Services",
		year: "Sep 2023",
	},
	{
		name: "AWS Educate Machine Learning Foundations",
		issuer: "Amazon Web Services",
		year: "Sep 2023",
	},
	{
		name: "AWS Educate Getting Started with Compute",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Getting Started with Storage",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Getting Started with Databases",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Getting Started with Networking",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Getting Started with Serverless",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Getting Started with Security",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Getting Started with Cloud Ops",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Machine Learning — DeepRacer",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "AWS Educate Web Builder",
		issuer: "Amazon Web Services",
		year: "Nov 2023",
	},
	{
		name: "Implement Load Balancing on Compute Engine",
		issuer: "Google Cloud",
		year: "Mar 2024",
	},
	{
		name: "Set Up an App Dev Environment on Google Cloud",
		issuer: "Google Cloud",
		year: "Mar 2024",
	},
	{
		name: "Build a Secure Google Cloud Network",
		issuer: "Google Cloud",
		year: "Mar 2024",
	},
	{
		name: "Prepare Data for ML APIs on Google Cloud",
		issuer: "Google Cloud",
		year: "Mar 2024",
	},
	{
		name: "Preparing for Your Associate Cloud Engineer Journey",
		issuer: "Google Cloud",
		year: "Mar 2024",
	},
	{
		name: "Google Cloud Fundamentals: Core Infrastructure",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Essential Google Cloud Infrastructure: Foundation",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Essential Google Cloud Infrastructure: Core Services",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Elastic Google Cloud Infrastructure: Scaling and Automation",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Getting Started with Terraform for Google Cloud",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Getting Started with Google Kubernetes Engine",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Logging and Monitoring in Google Cloud",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Build Infrastructure with Terraform on Google Cloud",
		issuer: "Google Cloud",
		year: "Apr 2024",
	},
	{
		name: "Observability in Google Cloud",
		issuer: "Google Cloud",
		year: "May 2024",
	},
	{
		name: "Application Development with Cloud Run",
		issuer: "Google Cloud",
		year: "May 2024",
	},
	{
		name: "Learn Basic Web Programming",
		issuer: "Dicoding Indonesia",
		year: "Mar 2024",
	},
	{
		name: "Learn Basic JavaScript Programming",
		issuer: "Dicoding Indonesia",
		year: "Apr 2024",
	},
	{
		name: "Starting with Basic Programming to Become a Software Developer",
		issuer: "Dicoding Indonesia",
		year: "Feb 2024",
	},
	{
		name: "Learn Basic Structured Query Language (SQL)",
		issuer: "Dicoding Indonesia",
		year: "Oct 2023",
	},
	{
		name: "Learn Basic Git with GitHub",
		issuer: "Dicoding Indonesia",
		year: "Feb 2024",
	},
	{
		name: "Learn Basic AI",
		issuer: "Dicoding Indonesia",
		year: "May 2024",
	},
	{
		name: "Learn Applied Machine Learning with Google Cloud",
		issuer: "Dicoding Indonesia",
		year: "May 2024",
	},
	{
		name: "Learn to Build Back-End Applications for Beginners with Google Cloud",
		issuer: "Dicoding Indonesia",
		year: "May 2024",
	},
	{
		name: "Introduction to Programming Logic (Programming Logic 101)",
		issuer: "Dicoding Indonesia",
		year: "Feb 2024",
	},
	{
		name: "Learn Procedural Programming with Python",
		issuer: "Dicoding Indonesia",
		year: "Jan 2024",
	},
	{
		name: "Start Programming with Java",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Start Programming with C",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn SOLID Programming Principles",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn Functional Programming with Haskell",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn to Build Web Applications with React",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn Machine Learning for Beginners",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn to Build Front-End Web for Beginners",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn Basic Data Visualization",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Start Programming with Python",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn to Build Back-End Applications for Beginners",
		issuer: "Dicoding Indonesia",
		year: "Dec 2023",
	},
	{
		name: "Learn to Build Flutter Applications for Beginners",
		issuer: "Dicoding Indonesia",
		year: "Jan 2025",
	},
	{
		name: "Auth Concepts and Implementation in Express.js",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Hot Data Management with Sessions in Express.js",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "MongoDB Database Relation Implementation in Express, Mongoose",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn to Build an Express.js Project with MongoDB",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn to Use MongoDB in JavaScript",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn RESTful with Express.js",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn to Build Dynamic Web Pages with Express.js and EJS",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn Basic Node.js and NPM",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn AJAX and Web APIs",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Route and Cookie Management in Express.js",
		issuer: "CODEPOLITAN",
		year: "Nov 2024",
	},
	{
		name: "Learn Data Relations in MongoDB (Database Relationship)",
		issuer: "CODEPOLITAN",
		year: "Oct 2024",
	},
	{
		name: "Error Handler Implementation in Express.js and Mongoose",
		issuer: "CODEPOLITAN",
		year: "Oct 2024",
	},
	{
		name: "Middleware Implementation in Express.js",
		issuer: "CODEPOLITAN",
		year: "Oct 2024",
	},
	{
		name: "Learn MongoDB",
		issuer: "CODEPOLITAN",
		year: "Sep 2024",
	},
	{
		name: "Learn OOP Concepts in JavaScript",
		issuer: "CODEPOLITAN",
		year: "Aug 2024",
	},
	{
		name: "Learn Asynchronous JavaScript",
		issuer: "CODEPOLITAN",
		year: "Jul 2024",
	},
	{
		name: "Learn JavaScript DOM",
		issuer: "CODEPOLITAN",
		year: "Jul 2024",
	},
	{
		name: "Learn JavaScript",
		issuer: "CODEPOLITAN",
		year: "Jul 2024",
	},
	{
		name: "Learn Bootstrap CSS Framework",
		issuer: "CODEPOLITAN",
		year: "Jan 2024",
	},
	{
		name: "Learn Basic CSS",
		issuer: "CODEPOLITAN",
		year: "Jan 2024",
	},
	{
		name: "Learn Basic HTML",
		issuer: "CODEPOLITAN",
		year: "Jan 2024",
	},
	{
		name: "React.JS for Ecommerce: Building a Store with React.JS",
		issuer: "Udemy",
		year: "Feb 2026",
	},
	{
		name: "Foundations of Web Development: CSS, Bootstrap, JS, React",
		issuer: "Udemy",
		year: "Feb 2026",
	},
	{
		name: "MERN Stack Dev Journey Project Course",
		issuer: "Udemy",
		year: "Feb 2026",
	},
	{
		name: "Building Blog using MERN Stack",
		issuer: "Udemy",
		year: "Feb 2026",
	},
	{
		name: "C# Basics: From Zero to First Applications",
		issuer: "Udemy",
		year: "Apr 2025",
	},
	{
		name: "Java 21 Programming Masterclass: Fundamentals for Beginners",
		issuer: "Udemy",
		year: "Apr 2025",
	},
	{
		name: "PHP Tutorial Beginner to Advanced",
		issuer: "Udemy",
		year: "Mar 2025",
	},
	{
		name: "Streamlining Your Work with Copilot",
		issuer: "LinkedIn Learning",
		year: "Dec 2023",
	},
	{
		name: "Generative AI: The Evolution of Thoughtful Online Search",
		issuer: "LinkedIn Learning",
		year: "Nov 2023",
	},
	{
		name: "What Is Generative AI?",
		issuer: "LinkedIn Learning",
		year: "Nov 2023",
	},
];

function ExperienceModal({
	item,
	onClose,
}: {
	item: Experience;
	onClose: () => void;
}) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
			<div
				className="animate-fade-in absolute inset-0 bg-black/40"
				onClick={onClose}
			/>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="experience-modal-title"
				className="animate-modal-in relative max-h-[85dvh] w-full max-w-[560px] overflow-y-auto rounded-xl border border-graphite bg-carbon p-6 shadow-xl"
			>
				<div className="flex items-start justify-between gap-4">
					<div className="flex min-w-0 items-start gap-3">
						<img
							src={item.logo}
							alt={`${item.org} logo`}
							loading="lazy"
							className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
						/>
						<div className="min-w-0">
							<h2
								id="experience-modal-title"
								className="text-[20px] font-medium tracking-[-0.01em] text-paper"
							>
								{item.title}
							</h2>
							<p className="mt-1 font-mono text-[12px] text-ash">
								{item.org} · {item.range}
							</p>
						</div>
					</div>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close"
						autoFocus
						className="shrink-0 rounded-full border border-graphite px-3 py-1.5 text-[13px] text-mist transition-colors hover:border-smoke hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
					>
						✕
					</button>
				</div>
				<p className="mt-4 text-[15px] leading-relaxed text-ash">
					{item.blurb}
				</p>
				<p className="mt-3 text-[15px] leading-relaxed text-mist">
					{item.details}
				</p>
			</div>
		</div>
	);
}

function ProjectModal({
	item,
	onClose,
}: {
	item: Project;
	onClose: () => void;
}) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
			<div
				className="animate-fade-in absolute inset-0 bg-black/40"
				onClick={onClose}
			/>
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="project-modal-title"
				className="animate-modal-in relative max-h-[85dvh] w-full max-w-[560px] overflow-y-auto rounded-xl border border-graphite bg-carbon p-6 shadow-xl"
			>
				{item.logo ? (
					<img
						src={item.logo}
						alt={`${item.name} logo`}
						loading="lazy"
						className={`h-10 w-10 shrink-0 rounded-badge border border-graphite object-cover ${item.darkLogo ? "bg-pitch" : "bg-obsidian"}`}
					/>
				) : (
					<span className="flex h-10 w-10 items-center justify-center rounded-badge bg-obsidian text-[13px] font-medium text-paper">
						{item.initial}
					</span>
				)}
				<div className="mt-1 flex items-start justify-between gap-4">
					<div className="min-w-0">
						<h2
							id="project-modal-title"
							className="text-[20px] font-medium tracking-[-0.01em] text-paper"
						>
							{item.name}
						</h2>
						<p className="mt-1 truncate font-mono text-[12px] text-ash">
							{item.href.replace("https://", "")}
						</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close"
						autoFocus
						className="shrink-0 rounded-full border border-graphite px-3 py-1.5 text-[13px] text-mist transition-colors hover:border-smoke hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
					>
						✕
					</button>
				</div>
				<p className="mt-4 text-[15px] leading-relaxed text-ash">
					{item.blurb}
				</p>
				<p className="mt-3 text-[15px] leading-relaxed text-mist">
					{item.details}
				</p>
			</div>
		</div>
	);
}

function ExperiencesPanel() {
	const [selected, setSelected] = useState<Experience | null>(null);
	const now = new Date();
	const presentIdx = now.getFullYear() * 12 + now.getMonth();
	const endOf = (item: Experience) => item.end ?? presentIdx;
	const minIdx = Math.min(...EXPERIENCES.map((item) => item.start));
	const total = presentIdx - minIdx + 1;
	const sorted = [...EXPERIENCES].sort(
		(a, b) =>
			(a.end === null ? 0 : 1) - (b.end === null ? 0 : 1) ||
			b.start - a.start ||
			endOf(b) - endOf(a),
	);
	const ticks: number[] = [];
	for (let t = minIdx; t < presentIdx; t += 6) ticks.push(t);
	if (presentIdx - ticks[ticks.length - 1] >= 4) ticks.push(presentIdx);
	const pos = (idx: number) => ((idx - minIdx) / total) * 100;
	const activeCount = EXPERIENCES.filter((item) => item.end === null).length;
	return (
		<div>
			<div className="hidden sm:block">
				<div className="mb-2 grid grid-cols-[220px_1fr] gap-4 px-4">
					<span />
					<span className="relative block h-4" aria-hidden="true">
						{ticks.map((t) => (
							<span
								key={t}
								className="absolute -translate-x-1/2 font-mono text-[10px] uppercase tabular-nums text-ash first:translate-x-0 last:translate-x-[-100%]"
								style={{ left: `${pos(t)}%` }}
							>
								{monthLabel(t)}
							</span>
						))}
					</span>
				</div>
				<ul className="space-y-2">
					{sorted.map((item) => {
						const e = endOf(item);
						const left = pos(item.start);
						const width = ((e + 1 - item.start) / total) * 100;
						return (
							<li key={item.title}>
								<button
									type="button"
									onClick={() => setSelected(item)}
									className="grid w-full cursor-pointer grid-cols-[220px_1fr] items-center gap-4 rounded-xl border border-graphite bg-carbon px-4 py-3 text-left shadow-subtle transition-colors hover:border-smoke focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
								>
									<span className="flex min-w-0 items-center gap-3">
										<img
											src={item.logo}
											alt={`${item.org} logo`}
											loading="lazy"
											className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
										/>
										<span className="min-w-0">
											<span className="block truncate text-sm font-medium text-paper">
												{item.title}
											</span>
											<span className="mt-0.5 block truncate text-[13px] text-ash">
												{item.org}
											</span>
											<span className="mt-1 block font-mono text-[10px] uppercase tabular-nums text-ash">
												{item.range}
											</span>
										</span>
									</span>
									<span
										className="relative block h-2 rounded-full bg-obsidian"
										aria-hidden="true"
									>
										<span
											className="absolute top-0 h-full rounded-full bg-mist"
											style={{ left: `${left}%`, width: `${width}%` }}
										>
											{item.end === null && (
												<span className="absolute top-1/2 -right-1 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-pulse-green ring-2 ring-carbon" />
											)}
										</span>
									</span>
								</button>
							</li>
						);
					})}
				</ul>
				<div className="mt-4 flex items-center gap-2">
					<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-green" />
					<span className="font-mono text-[10px] uppercase text-ash">
						{`${activeCount} active · ${monthLabel(minIdx)} — Present`}
					</span>
				</div>
			</div>
			<ul className="divide-y divide-graphite/70 border-y border-graphite/70 sm:hidden">
				{EXPERIENCES.map((item) => (
					<li key={item.title}>
						<button
							type="button"
							onClick={() => setSelected(item)}
							className="flex w-full cursor-pointer items-center gap-3 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
						>
							<img
								src={item.logo}
								alt={`${item.org} logo`}
								loading="lazy"
								className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
							/>
							<span className="min-w-0">
								<h3 className="text-[15px] font-medium text-paper">
									{item.title}{" "}
									<span className="font-normal text-ash">@ {item.org}</span>
								</h3>
								<p className="mt-1 font-mono text-[11px] uppercase text-ash">
									{item.range}
								</p>
							</span>
						</button>
					</li>
				))}
			</ul>
			{selected && (
				<ExperienceModal item={selected} onClose={() => setSelected(null)} />
			)}
		</div>
	);
}

function ProjectsPanel() {
	const [selected, setSelected] = useState<Project | null>(null);
	return (
		<>
			<ul className="grid gap-3 sm:grid-cols-2">
				{PROJECTS.map((project) => (
					<li key={project.name}>
						<button
							type="button"
							onClick={() => setSelected(project)}
							className="flex h-full w-full cursor-pointer flex-col rounded-xl border border-graphite bg-carbon p-6 text-left transition-colors hover:border-smoke focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
						>
							<span className="flex items-center gap-3">
								{project.logo ? (
									<img
										src={project.logo}
										alt={`${project.name} logo`}
										loading="lazy"
										className={`h-10 w-10 shrink-0 rounded-badge border border-graphite object-cover ${project.darkLogo ? "bg-pitch" : "bg-obsidian"}`}
									/>
								) : (
									<span
										aria-hidden="true"
										className="flex h-10 w-10 shrink-0 items-center justify-center rounded-badge bg-obsidian text-[13px] font-medium text-paper"
									>
										{project.initial}
									</span>
								)}
								<span className="block min-w-0 text-[16px] font-medium tracking-[-0.01em] text-paper">
									<span className="block truncate">{project.name}</span>
								</span>
							</span>
							<span className="mt-4 block flex-1 text-[15px] leading-[1.6] text-ash">
								{project.blurb}
							</span>
							<span className="mt-6 block truncate border-t border-graphite/70 pt-4 font-mono text-[12px] tracking-[-0.013em] text-ash">
								{project.href.replace("https://", "")}
							</span>
						</button>
					</li>
				))}
			</ul>
			{selected && (
				<ProjectModal item={selected} onClose={() => setSelected(null)} />
			)}
		</>
	);
}

const ISSUER_LOGOS: Record<string, string> = {
	Google: "/google-logo.jpg",
	"Google Cloud": "/google-cloud-logo.svg",
	"Amazon Web Services": "/aws-logo.png",
	"Dicoding Indonesia": "/dicoding-logo.jpg",
	freeCodeCamp: "/freecodecamp-logo.jpg",
	CODEPOLITAN: "/codepolitan-logo.png",
	Udemy: "/udemy-logo.png",
	"LinkedIn Learning": "/linkedin-learning-logo.svg",
};

function CertificatesPanel() {
	return (
		<ul className="divide-y divide-graphite/70 border-y border-graphite/70">
			{CERTIFICATES.map((cert) => {
				const logo = ISSUER_LOGOS[cert.issuer];
				return (
					<li
						key={cert.name}
						className="flex items-center justify-between gap-4 py-4"
					>
						<div className="flex min-w-0 items-center gap-3">
							{logo && (
								<img
									src={logo}
									alt={`${cert.issuer} logo`}
									loading="lazy"
									className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
								/>
							)}
							<div className="min-w-0">
								<h3
									title={cert.name}
									className="truncate text-[15px] font-medium text-paper"
								>
									{cert.name}
								</h3>
								<p
									title={cert.issuer}
									className="mt-0.5 truncate text-[13px] text-ash"
								>
									{cert.issuer}
								</p>
							</div>
						</div>
						<span className="shrink-0 font-mono text-[11px] tabular-nums text-ash">
							{cert.year}
						</span>
					</li>
				);
			})}
		</ul>
	);
}

function Home() {
	const [tab, setTab] = useState<Tab>("Experiences");
	return (
		<div className="bg-void text-mist">
			<main className="mx-auto flex min-h-dvh w-full max-w-[880px] flex-col px-6 py-16">
				<div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
					<img
						src={PORTRAIT_URL}
						alt="Portrait of Anjasfedo"
						className="mx-auto aspect-square w-full max-w-[200px] rounded-full border border-graphite bg-carbon object-cover shadow-subtle"
					/>
					<div>
						<h1 className="mt-3 text-[48px] leading-[1] font-medium tracking-[-0.022em] text-paper">
							Anjasfedo
						</h1>
						<p className="mt-2 font-mono text-[13px] text-ash">
							software engineer — bengkulu, indonesia
						</p>
						<p className="mt-4 max-w-md text-[16px] leading-[1.5] text-ash">
							I build scalable, efficient software systems ready for real-world
							use — from full-stack web apps to cloud architecture and ML in
							production.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-2">
							{LINKS.map(({ label, href, Icon }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									title={label}
									target={href.startsWith("mailto:") ? undefined : "_blank"}
									rel={
										href.startsWith("mailto:")
											? undefined
											: "noopener noreferrer"
									}
									className="flex h-10 w-10 items-center justify-center rounded-full border border-graphite bg-carbon text-mist transition-colors hover:border-smoke hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
								>
									<Icon className="h-[18px] w-[18px]" />
								</a>
							))}
						</div>
					</div>
				</div>
				<section className="mt-16">
					<div
						role="tablist"
						aria-label="Profile sections"
						className="sticky top-0 z-10 flex gap-6 border-b border-graphite/70 bg-void pt-3"
					>
						{TABS.map((name) => (
							<button
								key={name}
								type="button"
								role="tab"
								aria-selected={tab === name}
								onClick={() => setTab(name)}
								className={`-mb-px border-b-2 pb-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper ${
									tab === name
										? "border-paper text-paper"
										: "border-transparent text-ash hover:text-mist"
								}`}
							>
								{name}
							</button>
						))}
					</div>
					<div className="mt-6" role="tabpanel">
						{tab === "Experiences" && <ExperiencesPanel />}
						{tab === "Projects" && <ProjectsPanel />}
						{tab === "Certificates" && <CertificatesPanel />}
					</div>
				</section>
			</main>
		</div>
	);
}
