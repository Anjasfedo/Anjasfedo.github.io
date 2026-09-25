import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CertificatesPanel } from "../components/panels/CertificatesPanel";
import { ExperiencesPanel } from "../components/panels/ExperiencesPanel";
import { ProjectsPanel } from "../components/panels/ProjectsPanel";
import { LINKS } from "../data/socialLinks";
// Import TypeScript types
import type { Tab } from "../types/portfolio";
import { TAB_IDS, TABS } from "../types/portfolio";

export const Route = createFileRoute("/")({ component: Home });

const PANELS: Record<Tab, () => React.ReactNode> = {
	Experiences: ExperiencesPanel,
	Projects: ProjectsPanel,
	Certificates: CertificatesPanel,
};

const PORTRAIT_URL = `${import.meta.env.BASE_URL}profile-circle.webp`;

// Helper to convert hash (e.g. "#projects") to Tab ("Projects")
function getTabFromHash(): Tab {
	if (typeof window === "undefined") return "Experiences";
	const hash = window.location.hash.replace("#", "").toLowerCase();
	const matchedTab = (Object.keys(TAB_IDS) as Tab[]).find(
		(key) => TAB_IDS[key] === hash,
	);
	return matchedTab ?? "Experiences";
}

function Home() {
	// Start from the prerendered default; read the hash after hydration
	const [tab, setTab] = useState<Tab>("Experiences");

	// Sync tab on load and when browser Back/Forward buttons are clicked
	useEffect(() => {
		setTab(getTabFromHash());
		const handleHashChange = () => {
			setTab(getTabFromHash());
		};
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	// Handle tab clicks: update React state and URL hash without page jump
	const handleTabChange = (newTab: Tab) => {
		setTab(newTab);
		const targetHash = `#${TAB_IDS[newTab]}`;
		if (window.location.hash !== targetHash) {
			window.history.pushState(null, "", targetHash);
		}
	};

	return (
		<div className="bg-void text-mist">
			<main className="mx-auto flex min-h-dvh w-full max-w-[880px] flex-col px-6 py-16">
				<div className="grid items-center gap-10 md:grid-cols-[200px_1fr]">
					<img
						src={PORTRAIT_URL}
						alt="Portrait of M. Anjasfedo Afridiansah"
						width={200}
						height={200}
						className="mx-auto aspect-square w-full max-w-[200px] rounded-full border border-graphite bg-carbon object-cover shadow-subtle"
					/>
					<div>
						<h1 className="mt-3 text-[48px] leading-[1] font-medium tracking-[-0.022em] text-paper">
							Anjasfedo
						</h1>
						<p className="mt-2 font-mono text-[13px] text-ash">
							M. Anjasfedo Afridiansah · Software Engineer — Bengkulu, Indonesia
						</p>
						<p className="mt-4 max-w-md text-[16px] leading-[1.5] text-ash">
							I lead mobile engineering and build full-stack systems end to end
							— Flutter and native apps, web platforms, Go and IoT backends, and
							the AWS, GCP, and Docker infrastructure they run on.
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
						{TABS.map((name) => {
							const tabId = TAB_IDS[name];
							return (
								<button
									key={name}
									id={`tab-${tabId}`}
									type="button"
									role="tab"
									aria-selected={tab === name}
									aria-controls={`panel-${tabId}`}
									onClick={() => handleTabChange(name)}
									className={`-mb-px border-b-2 pb-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper ${
										tab === name
											? "border-paper text-paper"
											: "border-transparent text-ash hover:text-mist"
									}`}
								>
									{name}
								</button>
							);
						})}
					</div>
					{/* All panels stay in the HTML so crawlers index every tab */}
					{TABS.map((name) => {
						const tabId = TAB_IDS[name];
						const Panel = PANELS[name];
						return (
							<div
								key={name}
								className="mt-6"
								role="tabpanel"
								id={`panel-${tabId}`}
								aria-labelledby={`tab-${tabId}`}
								hidden={tab !== name}
							>
								<h2 className="sr-only">{name}</h2>
								<Panel />
							</div>
						);
					})}
				</section>
			</main>
		</div>
	);
}
