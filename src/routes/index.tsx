import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

const PORTRAIT_URL =
	"https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&w=800";

const LINKS = [
	{ label: "GitHub", href: "https://github.com/yourname" },
	{ label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
	{ label: "Email", href: "mailto:hello@example.com" },
];

const TABS = ["Experiences", "Projects", "Certificates"] as const;
type Tab = (typeof TABS)[number];

type Experience = {
	title: string;
	org: string;
	blurb: string;
	range: string;
	start: number;
	end: number;
};

const EXPERIENCES: Experience[] = [
	{
		title: "Software Engineer",
		org: "Company Name",
		blurb: "One-line description of what you do there.",
		range: "2023 — Present",
		start: 2023,
		end: 2026,
	},
	{
		title: "Previous Role",
		org: "Previous Company",
		blurb: "One-line description of what you did there.",
		range: "2021 — 2022",
		start: 2021,
		end: 2022,
	},
];

/* Calendar-year timeline: horizontal year gridlines, items positioned by
   year span. Overlapping items share the width via lane assignment so
   concurrent roles sit side by side instead of overriding each other. */
const YEAR_H = 84;
const GUTTER = 42;
const LANE_GAP = 10;

function assignLanes(items: Experience[]): Map<Experience, number> {
	const sorted = [...items].sort((a, b) => a.start - b.start || b.end - a.end);
	const laneEnds: number[] = [];
	const lanes = new Map<Experience, number>();
	for (const item of sorted) {
		let lane = laneEnds.findIndex((end) => item.start > end);
		if (lane === -1) {
			lane = laneEnds.length;
			laneEnds.push(item.end);
		} else {
			laneEnds[lane] = item.end;
		}
		lanes.set(item, lane);
	}
	return lanes;
}

type Project = {
	name: string;
	blurb: string;
	href: string;
	initial: string;
};

const PROJECTS: Project[] = [
	{
		name: "Project One",
		blurb: "One-line description of what it is and what it achieved.",
		href: "https://example.com/project-one",
		initial: "P1",
	},
	{
		name: "Project Two",
		blurb: "One-line description of what it is and what it achieved.",
		href: "https://example.com/project-two",
		initial: "P2",
	},
	{
		name: "Project Three",
		blurb: "One-line description of what it is and what it achieved.",
		href: "https://example.com/project-three",
		initial: "P3",
	},
];

type Certificate = {
	name: string;
	issuer: string;
	year: string;
};

const CERTIFICATES: Certificate[] = [
	{ name: "Certificate Name", issuer: "Issuer", year: "2024" },
	{ name: "Another Certificate", issuer: "Issuer", year: "2023" },
];

function ExperiencesPanel() {
	const topYear = Math.max(...EXPERIENCES.map((item) => item.end));
	const bottomYear = Math.min(...EXPERIENCES.map((item) => item.start));
	const years = Array.from(
		{ length: topYear - bottomYear + 1 },
		(_, i) => topYear - i,
	);
	const gridH = years.length * YEAR_H;
	const lanes = assignLanes(EXPERIENCES);
	const laneCount = Math.max(1, ...lanes.values()) + 1;
	return (
		<div>
			<div className="relative hidden pb-8 sm:block">
				<div
					className="pointer-events-none absolute inset-x-0"
					style={{ height: gridH }}
				>
					{years.map((year, i) => (
						<div
							key={year}
							className="absolute inset-x-0"
							style={{ top: i * YEAR_H }}
						>
							<div className="h-px bg-graphite" />
							<div
								className="absolute -translate-y-1/2"
								style={{ left: 0, width: GUTTER }}
							>
								<span className="-mt-0.5 inline-block bg-void pr-2 font-mono text-[11px] tabular-nums text-ash">
									{year}
								</span>
							</div>
						</div>
					))}
				</div>
				<div className="relative flex" style={{ minHeight: gridH }}>
					<div className="relative" style={{ width: GUTTER }} />
					<div className="relative flex-1">
						<div className="relative" style={{ height: gridH }}>
							{EXPERIENCES.map((item) => {
								const lane = lanes.get(item) ?? 0;
								return (
									<div
										key={item.title}
										className="absolute overflow-hidden rounded-xl border border-graphite bg-carbon shadow-subtle"
										style={{
											top: (topYear - item.end) * YEAR_H,
											height: (item.end - item.start + 1) * YEAR_H - LANE_GAP,
											width: `calc((100% - ${LANE_GAP * (laneCount - 1)}px) / ${laneCount})`,
											left: `calc(((100% - ${LANE_GAP * (laneCount - 1)}px) / ${laneCount} + ${LANE_GAP}px) * ${lane})`,
											padding: 12,
										}}
									>
										<div className="flex h-full flex-col justify-between gap-2">
											<div className="flex min-w-0 items-center gap-1">
												<h3 className="truncate text-sm font-medium text-paper">
													{item.title}
												</h3>
												<span className="h-1 w-1 shrink-0 rounded-full bg-smoke" />
												<p className="truncate text-sm text-ash">{item.org}</p>
											</div>
											<p className="text-[13px] leading-snug text-ash">
												{item.blurb}
											</p>
											<p className="font-mono text-[10px] uppercase text-ash">
												{item.range}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div
					className="absolute flex items-center gap-2"
					style={{ top: gridH + 12, left: 0 }}
				>
					<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-green" />
					<span className="font-mono text-[10px] uppercase text-ash">
						Started working in {bottomYear}
					</span>
				</div>
			</div>
			<ul className="divide-y divide-graphite/70 border-y border-graphite/70 sm:hidden">
				{EXPERIENCES.map((item) => (
					<li key={item.title} className="py-4">
						<h3 className="text-[15px] font-medium text-paper">
							{item.title}{" "}
							<span className="font-normal text-ash">@ {item.org}</span>
						</h3>
						<p className="mt-1 text-[14px] leading-relaxed text-ash">
							{item.blurb}
						</p>
						<p className="mt-1 font-mono text-[11px] uppercase text-ash">
							{item.range}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

function ProjectsPanel() {
	return (
		<ul className="grid gap-3 sm:grid-cols-2">
			{PROJECTS.map((project) => (
				<li key={project.name}>
					<a
						href={project.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex h-full flex-col rounded-xl border border-graphite bg-carbon p-6 transition-colors hover:border-smoke focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
					>
						<span
							aria-hidden="true"
							className="flex h-10 w-10 items-center justify-center rounded-badge bg-obsidian text-[13px] font-medium text-paper"
						>
							{project.initial}
						</span>
						<h3 className="mt-3 text-[16px] font-medium tracking-[-0.01em] text-paper">
							{project.name}
						</h3>
						<p className="mt-2 flex-1 text-[15px] leading-[1.6] text-ash">
							{project.blurb}
						</p>
						<span className="mt-6 truncate font-mono text-[12px] tracking-[-0.013em] text-ash">
							{project.href.replace("https://", "")}
						</span>
					</a>
				</li>
			))}
		</ul>
	);
}

function CertificatesPanel() {
	return (
		<ul className="divide-y divide-graphite/70 border-y border-graphite/70">
			{CERTIFICATES.map((cert) => (
				<li
					key={cert.name}
					className="flex items-baseline justify-between gap-4 py-4"
				>
					<h3 className="min-w-0 text-[15px] font-medium text-paper">
						{cert.name}{" "}
						<span className="font-normal text-ash">· {cert.issuer}</span>
					</h3>
					<span className="shrink-0 font-mono text-[11px] tabular-nums text-ash">
						{cert.year}
					</span>
				</li>
			))}
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
						alt="Portrait of Your Name"
						className="mx-auto aspect-square w-full max-w-[200px] rounded-xl border border-graphite bg-carbon object-cover shadow-subtle"
					/>
					<div>
						<p className="flex items-center gap-2 font-mono text-[12px] tracking-[-0.013em] text-ash uppercase">
							<span
								aria-hidden="true"
								className="h-1.5 w-1.5 rounded-full bg-pulse-green"
							/>
							Available for roles
						</p>
						<h1 className="mt-3 text-[48px] leading-[1] font-medium tracking-[-0.022em] text-paper">
							Your Name
						</h1>
						<p className="mt-2 font-mono text-[13px] text-ash">
							software engineer
						</p>
						<p className="mt-4 max-w-md text-[16px] leading-[1.5] text-ash">
							I build quiet, precise software for the web. Currently open to new
							projects and roles.
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-2">
							<a
								href="mailto:hello@example.com"
								className="rounded-md bg-acid-lime px-4 py-2 text-[14px] font-medium tracking-[-0.011em] text-pitch shadow-cta transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
							>
								Get in touch
							</a>
							{LINKS.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="rounded-full border border-graphite bg-carbon px-4 py-2 text-[13px] text-mist transition-colors hover:border-smoke hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				</div>
				<section className="mt-16">
					<div
						role="tablist"
						aria-label="Profile sections"
						className="flex gap-6 border-b border-graphite/70"
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
