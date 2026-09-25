import {
	EmailIcon,
	GitHubIcon,
	InstagramIcon,
	LinkedInIcon,
} from "../components/icons";
import type { SocialLink } from "../types/portfolio";

export const LINKS: SocialLink[] = [
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
	{
		label: "Email",
		href: "mailto:fedoafridiansah@gmail.com",
		Icon: EmailIcon,
	},
];
