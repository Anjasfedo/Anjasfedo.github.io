import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NotFound } from "../components/NotFound";
import { LINKS } from "../data/socialLinks";
import appCss from "../styles.css?url";

const SITE_URL = "https://anjasfedo.github.io/";
const TITLE = "M. Anjasfedo Afridiansah — Software Engineer";
const DESCRIPTION =
	"M. Anjasfedo Afridiansah — Software Engineer and Mobile Team Lead from Bengkulu, Indonesia, building Flutter apps, web platforms, Go and IoT backends on AWS, GCP, and Docker.";
const OG_IMAGE = `${SITE_URL}og-image.jpg`;

const PERSON_JSON_LD = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "M. Anjasfedo Afridiansah",
	alternateName: "Anjasfedo",
	url: SITE_URL,
	image: OG_IMAGE,
	jobTitle: "Software Engineer",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Bengkulu",
		addressCountry: "ID",
	},
	sameAs: LINKS.filter(({ href }) => href.startsWith("http")).map(
		({ href }) => href,
	),
};

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: "#ffffff" },
			{ name: "description", content: DESCRIPTION },
			{ title: TITLE },
			{ property: "og:type", content: "profile" },
			{ property: "og:url", content: SITE_URL },
			{ property: "og:title", content: TITLE },
			{ property: "og:description", content: DESCRIPTION },
			{ property: "og:image", content: OG_IMAGE },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:title", content: TITLE },
			{ name: "twitter:description", content: DESCRIPTION },
			{ name: "twitter:image", content: OG_IMAGE },
		],
		links: [
			{ rel: "canonical", href: SITE_URL },
			{
				rel: "icon",
				type: "image/webp",
				href: `${import.meta.env.BASE_URL}profile-circle.webp`,
			},
			{
				rel: "apple-touch-icon",
				href: `${import.meta.env.BASE_URL}apple-touch-icon.png`,
			},
			{ rel: "stylesheet", href: appCss },
		],
		scripts: [
			{
				type: "application/ld+json",
				children: JSON.stringify(PERSON_JSON_LD),
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="bg-void text-mist antialiased">
				{children}
				<TanStackDevtools
					config={{ position: "bottom-right" }}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
