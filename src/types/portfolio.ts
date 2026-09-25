import type { ComponentType } from "react";

export type Tab = "Experiences" | "Projects" | "Certificates";

export interface Experience {
	title: string;
	org: string;
	blurb: string;
	details: string;
	range: string;
	logo: string;
	/** Month index (`year * 12 + (month - 1)`); `end: null` means present. */
	start: number;
	end: number | null;
}

export interface Project {
	name: string;
	blurb: string;
	details: string;
	href: string;
	initial: string;
	logo: string;
	/** Dark tile background for light-on-transparent artwork. */
	darkLogo?: boolean;
}

export interface Certificate {
	name: string;
	issuer: string;
	year: string;
}

export interface SocialLink {
	label: string;
	href: string;
	Icon: ComponentType<{ className?: string }>;
}
