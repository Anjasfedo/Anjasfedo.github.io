import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

const PORTRAIT_URL =
	"https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&w=800";
const PORTRAIT_CREDIT = "Jocelyn Espinoza / Pexels";

const LINKS = [
	{ label: "GitHub", href: "https://github.com/yourname" },
	{ label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
	{ label: "Email", href: "mailto:hello@example.com" },
];

const TABS = ["Experiences", "Projects", "Certificates"] as const;
type Tab = (typeof TABS)[number];

/* Calendar year view — structure referenced from wahyusyahputra.com:
   horizontal year gridlines (60px rows, 42px mono label gutter),
   items absolutely positioned by year span, columns share the width. */
const YEAR_H = 60;
const GUTTER = 42;

type TimelineItem = {
	title: string;
	org: string;
	blurb: string;
	details: string;
	range: string;
	start: number;
	end: number;
	col: 0 | 1;
};

const EXPERIENCES: TimelineItem[] = [
	{
		title: "Software Engineer",
		org: "Company Name",
		blurb: "One-line description of what you do there.",
		details:
			"Longer detail goes here — responsibilities, stack, and outcomes you want to highlight.",
		range: "2023 — Present",
		start: 2023,
		end: 2025,
		col: 0,
	},
	{
		title: "Previous Role",
		org: "Previous Company",
		blurb: "One-line description of what you did there.",
		details:
			"Longer detail goes here — responsibilities, stack, and outcomes you want to highlight.",
		range: "2021 — 2022",
		start: 2021,
		end: 2022,
		col: 1,
	},
];

const EXP_TOP = 2025;
const EXP_BOTTOM = 2021;

type Project = {
	name: string;
	blurb: string;
	details: string;
	href: string;
	initial: string;
};

const PROJECTS: Project[] = [
	{
		name: "Project One",
		blurb: "One-line description of what it is and what it achieved.",
		details:
			"Longer detail goes here — what it does, the stack behind it, and the results it delivered.",
		href: "https://example.com/project-one",
		initial: "P1",
	},
	{
		name: "Project Two",
		blurb: "One-line description of what it is and what it achieved.",
		details:
			"Longer detail goes here — what it does, the stack behind it, and the results it delivered.",
		href: "https://example.com/project-two",
		initial: "P2",
	},
	{
		name: "Project Three",
		blurb: "One-line description of what it is and what it achieved.",
		details:
			"Longer detail goes here — what it does, the stack behind it, and the results it delivered.",
		href: "https://example.com/project-three",
		initial: "P3",
	},
];

type Certificate = {
	name: string;
	issuer: string;
	year: string;
	details: string;
};

const CERTIFICATES: Certificate[] = [
	{
		name: "Certificate Name",
		issuer: "Issuer",
		year: "2024",
		details: "Longer detail goes here — what the certification covers.",
	},
	{
		name: "Another Certificate",
		issuer: "Issuer",
		year: "2023",
		details: "Longer detail goes here — what the certification covers.",
	},
];

type Selection =
	| { kind: "experience"; item: TimelineItem }
	| { kind: "project"; item: Project }
	| { kind: "certificate"; item: Certificate };

function YearTimeline({
	items,
	topYear,
	bottomYear,
	originText,
	onSelect,
}: {
	items: TimelineItem[];
	topYear: number;
	bottomYear: number;
	originText: string;
	onSelect: (item: TimelineItem) => void;
}) {
	const years = Array.from(
		{ length: topYear - bottomYear + 1 },
		(_, i) => topYear - i,
	);
	const gridH = years.length * YEAR_H;
	return (
		<div className="relative hidden pb-8 sm:block">
			{/* Year gridlines */}
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
							<span className="-mt-0.5 inline-block bg-void pr-2 font-mono text-[11px] text-ash">
								{year}
							</span>
						</div>
					</div>
				))}
			</div>
			{/* Items */}
			<div className="relative flex" style={{ minHeight: gridH }}>
				<div className="relative" style={{ width: GUTTER }} />
				<div className="relative flex-1">
					<div className="relative" style={{ height: gridH }}>
						{items.map((item) => {
							const tall = item.end - item.start >= 1;
							return (
								<button
									key={item.title}
									type="button"
									onClick={() => onSelect(item)}
									className="absolute cursor-pointer overflow-hidden rounded-xl border border-graphite bg-carbon text-left shadow-subtle transition-colors hover:border-smoke"
									style={{
										top: (topYear - item.end) * YEAR_H,
										height: (item.end - item.start + 1) * YEAR_H - 10,
										width: "calc((100% - 10px) / 2)",
										left: `calc(((100% - 10px) / 2 + 10px) * ${item.col})`,
										padding: tall ? 12 : "0 12px",
									}}
								>
									<div
										className={`flex h-full gap-2 text-sm leading-tight ${
											tall ? "flex-col justify-between" : "items-center"
										}`}
									>
										<div className="flex w-full min-w-0 items-center justify-between">
											<div className="flex min-w-0 items-center gap-1">
												<h3 className="truncate text-sm font-medium text-paper">
													{item.title}
												</h3>
												<span className="h-1 w-1 shrink-0 rounded-full bg-smoke" />
												<p className="truncate text-sm text-fog">{item.org}</p>
											</div>
											{tall && (
												<span className="hidden shrink-0 font-mono text-[10px] uppercase text-ash md:block">
													{item.range}
												</span>
											)}
										</div>
										{tall && (
											<p className="text-[13px] leading-snug text-fog">
												{item.blurb}
											</p>
										)}
									</div>
								</button>
							);
						})}
					</div>
				</div>
			</div>
			{/* Origin marker */}
			<div
				className="absolute flex items-center gap-2"
				style={{ top: gridH + 12, left: 0 }}
			>
				<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-green" />
				<span className="font-mono text-[10px] uppercase text-ash">
					{originText}
				</span>
			</div>
		</div>
	);
}

function ExperiencesPanel({
	onSelect,
}: {
	onSelect: (item: TimelineItem) => void;
}) {
	return (
		<div>
			<YearTimeline
				items={EXPERIENCES}
				topYear={EXP_TOP}
				bottomYear={EXP_BOTTOM}
				originText={`Started working in ${EXP_BOTTOM}`}
				onSelect={onSelect}
			/>
			<ul className="space-y-3 sm:hidden">
				{EXPERIENCES.map((item) => (
					<li key={item.title}>
						<button
							type="button"
							onClick={() => onSelect(item)}
							className="w-full rounded-xl border border-graphite bg-carbon p-4 text-left shadow-subtle"
						>
							<h3 className="truncate text-sm font-medium text-paper">
								{item.title}{" "}
								<span className="font-normal text-fog">@ {item.org}</span>
							</h3>
							<p className="mt-0.5 text-xs text-fog">{item.blurb}</p>
							<p className="mt-2 font-mono text-[10px] uppercase text-ash">
								{item.range}
							</p>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

function ProjectsPanel({ onSelect }: { onSelect: (item: Project) => void }) {
	return (
		<ul className="grid gap-3 sm:grid-cols-2">
			{PROJECTS.map((project) => (
				<li key={project.name}>
					<button
						type="button"
						onClick={() => onSelect(project)}
						className="flex h-full w-full cursor-pointer flex-col rounded-xl border border-graphite bg-carbon p-6 text-left transition-colors hover:border-smoke"
					>
						<span className="flex h-10 w-10 items-center justify-center rounded-badge bg-obsidian text-[13px] font-medium text-paper">
							{project.initial}
						</span>
						<h3 className="mt-3 text-[16px] font-medium tracking-[-0.01em] text-paper">
							{project.name}
						</h3>
						<p className="mt-2 flex-1 text-body-sm text-fog">{project.blurb}</p>
						<span className="mt-6 truncate font-mono text-[12px] tracking-[-0.013em] text-ash">
							{project.href}
						</span>
					</button>
				</li>
			))}
		</ul>
	);
}

function CertificatesPanel({
	onSelect,
}: {
	onSelect: (item: Certificate) => void;
}) {
	return (
		<ul className="divide-y divide-graphite/70">
			{CERTIFICATES.map((cert) => (
				<li key={cert.name}>
					<button
						type="button"
						onClick={() => onSelect(cert)}
						className="flex w-full cursor-pointer items-baseline gap-4 py-3 text-left"
					>
						<div className="min-w-0 flex-1">
							<h3 className="text-[15px] font-medium text-paper">
								{cert.name}{" "}
								<span className="font-normal text-fog">· {cert.issuer}</span>
							</h3>
						</div>
						<span className="shrink-0 font-mono text-[11px] text-ash">
							{cert.year}
						</span>
					</button>
				</li>
			))}
		</ul>
	);
}

function BottomSheet({
	selection,
	onClose,
}: {
	selection: Selection;
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
		<div className="fixed inset-0 z-50">
			<div
				className="animate-fade-in absolute inset-0 bg-black/40"
				onClick={onClose}
			/>
			<div className="animate-sheet-in absolute inset-x-0 bottom-0 mx-auto max-h-[80dvh] w-full max-w-[560px] overflow-y-auto rounded-t-xl border border-graphite bg-carbon p-6 shadow-xl">
				<div className="mx-auto mb-5 h-1 w-10 rounded-full bg-smoke" />
				{selection.kind === "project" && (
					<span className="flex h-10 w-10 items-center justify-center rounded-md bg-obsidian font-mono text-[12px] font-medium text-mist">
						{selection.item.initial}
					</span>
				)}
				<div className="mt-1 flex items-start justify-between gap-4">
					<div className="min-w-0">
						<h2 className="text-[20px] font-medium tracking-[-0.01em] text-paper">
							{selection.kind === "experience"
								? selection.item.title
								: selection.item.name}
						</h2>
						<p className="mt-1 font-mono text-[12px] text-ash">
							{selection.kind === "experience" &&
								`${selection.item.org} · ${selection.item.range}`}
							{selection.kind === "certificate" &&
								`${selection.item.issuer} · ${selection.item.year}`}
							{selection.kind === "project" && selection.item.href}
						</p>
					</div>
					<button
						type="button"
						onClick={onClose}
						aria-label="Close"
						className="shrink-0 rounded-full border border-graphite px-3 py-1.5 text-[13px] text-mist transition-colors hover:border-smoke hover:text-paper"
					>
						✕
					</button>
				</div>
				<p className="mt-4 text-[15px] leading-relaxed text-fog">
					{selection.item.blurb}
				</p>
				<p className="mt-3 text-[15px] leading-relaxed text-mist">
					{selection.item.details}
				</p>
				{selection.kind === "project" && (
					<a
						href={selection.item.href}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-6 block rounded-md bg-acid-lime px-4 py-3 text-center text-[14px] font-medium text-pitch shadow-cta transition-opacity hover:opacity-90"
					>
						Open project →
					</a>
				)}
			</div>
		</div>
	);
}

function Home() {
	const [tab, setTab] = useState<Tab>("Experiences");
	const [selection, setSelection] = useState<Selection | null>(null);
	return (
		<div className="bg-void text-mist">
			<main className="mx-auto flex min-h-dvh w-full max-w-[880px] flex-col justify-center px-6 py-16">
				<div className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
					<figure className="mx-auto w-full max-w-[240px]">
						<img
							src={PORTRAIT_URL}
							alt="Portrait placeholder"
							className="aspect-square w-full rounded-xl border border-graphite bg-carbon object-cover shadow-subtle"
						/>
						<figcaption className="mt-2 text-center font-mono text-[11px] text-ash">
							Photo: {PORTRAIT_CREDIT}
						</figcaption>
					</figure>
					<div>
						<h1 className="text-[48px] font-medium leading-[1] tracking-[-0.022em] text-paper">
							Your Name
						</h1>
						<p className="mt-3 font-mono text-[13px] text-fog">
							software engineer
						</p>
						<p className="mt-5 max-w-md text-[16px] leading-[1.5] text-fog">
							I build quiet, precise software for the web. Currently open to new
							projects and roles.
						</p>
						<nav className="mt-8 flex flex-wrap items-center gap-2">
							{LINKS.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="rounded-full border border-graphite bg-carbon px-4 py-2 text-[13px] text-mist shadow-subtle transition-colors hover:border-smoke hover:text-paper"
								>
									{link.label}
								</a>
							))}
						</nav>
					</div>
				</div>
				<section className="mt-16">
					<nav className="flex gap-6 border-b border-graphite/70">
						{TABS.map((name) => (
							<button
								key={name}
								type="button"
								onClick={() => setTab(name)}
								className={`-mb-px border-b-2 pb-2 text-sm font-medium whitespace-nowrap transition-colors ${
									tab === name
										? "border-paper text-paper"
										: "border-transparent text-ash hover:text-mist"
								}`}
							>
								{name}
							</button>
						))}
					</nav>
					<div className="mt-6">
						{tab === "Experiences" && (
							<ExperiencesPanel
								onSelect={(item) => setSelection({ kind: "experience", item })}
							/>
						)}
						{tab === "Projects" && (
							<ProjectsPanel
								onSelect={(item) => setSelection({ kind: "project", item })}
							/>
						)}
						{tab === "Certificates" && (
							<CertificatesPanel
								onSelect={(item) => setSelection({ kind: "certificate", item })}
							/>
						)}
					</div>
				</section>
			</main>
			{selection && (
				<BottomSheet selection={selection} onClose={() => setSelection(null)} />
			)}
		</div>
	);
}
