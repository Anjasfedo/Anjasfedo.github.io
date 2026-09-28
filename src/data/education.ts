import type { Education } from "../types/portfolio";

export const EDUCATION: Education[] = [
	{
		program:
			"Solution Architect, DevOps, and Site Reliability Engineer Cloud Computing",
		school: "Talenta Cloud Academy Bootcamp",
		location: "Indonesia",
		range: "Jul 2024 — Jan 2025",
		blurb:
			"Completed intensive study in cloud infrastructure design, container management, and system reliability automation on Amazon Web Services.",
		logo: `${import.meta.env.BASE_URL}talenta-logo.webp`,
	},
	{
		program: "Cloud Computing Cohort",
		school: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
		location: "Indonesia",
		range: "Feb 2024 — Jun 2024",
		blurb:
			"Studied cloud computing architecture, cloud service fundamentals, and infrastructure deployment on Google Cloud Platform.",
		logo: `${import.meta.env.BASE_URL}bangkit-logo.webp`,
	},
	{
		program: "Bachelor of Informatics",
		school: "Universitas Bengkulu",
		location: "Bengkulu, Indonesia",
		range: "Aug 2021 — May 2026",
		blurb:
			"Active in campus organizations and in software engineering and computer networking projects.",
		logo: `${import.meta.env.BASE_URL}unib-logo.webp`,
	},
];
