import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const NAV_LINKS = ["Features", "Method", "Customers", "Pricing"];

const CUSTOMERS = [
	"Vercel",
	"Cursor",
	"OpenAI",
	"Coinbase",
	"Cash App",
	"Ramp",
];

const ISSUES = [
	{
		id: "ENG-2703",
		title: "Command palette fuzzy ranking",
		tag: "In Review",
		tint: "text-iris-violet",
	},
	{
		id: "ENG-2704",
		title: "Kanban drag states on paper canvas",
		tag: "In Progress",
		tint: "text-signal-teal",
	},
	{
		id: "ENG-2705",
		title: "AI agent panel streaming polish",
		tag: "Todo",
		tint: "text-fog",
	},
];

const TAGS = [
	{ label: "Backlog", dot: "bg-fog" },
	{ label: "Sprint 42", dot: "bg-pulse-green" },
	{ label: "Needs triage", dot: "bg-coral-red" },
	{ label: "Design", dot: "bg-iris-violet" },
];

function Logo() {
	return (
		<a href="/" className="flex items-center gap-2">
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				aria-hidden="true"
			>
				<rect x="1" y="1" width="7" height="7" rx="1.5" fill="#121215" />
				<rect x="10" y="1" width="7" height="7" rx="3.5" fill="#a3a29b" />
				<rect x="1" y="10" width="7" height="7" rx="3.5" fill="#a3a29b" />
				<rect x="10" y="10" width="7" height="7" rx="1.5" fill="#e4f222" />
			</svg>
			<span className="text-[16px] font-medium tracking-[-0.01em] text-paper">
				Linear-style
			</span>
		</a>
	);
}

function TopNav() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-graphite/70 bg-void/85 backdrop-blur-md">
			<div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6">
				<Logo />
				<nav className="hidden items-center gap-1 md:flex">
					{NAV_LINKS.map((link) => (
						<a
							key={link}
							href="/"
							className="rounded-md px-3 py-2 text-[13px] text-mist transition-colors hover:text-paper hover:underline hover:underline-offset-4"
						>
							{link}
						</a>
					))}
				</nav>
				<div className="flex items-center gap-2">
					<a
						href="/"
						className="hidden px-3 py-2 text-[13px] text-mist hover:text-paper sm:block"
					>
						Log in
					</a>
					<a
						href="#cta"
						className="rounded-full bg-paper px-4 py-2 text-[13px] font-medium text-void transition-opacity hover:opacity-90"
					>
						Sign up
					</a>
				</div>
			</div>
		</header>
	);
}

function BadgeRow() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{TAGS.map((tag) => (
				<span
					key={tag.label}
					className="inline-flex items-center gap-1.5 rounded-badge bg-black/[0.04] px-1.5 py-0.5 text-[12px] text-fog"
				>
					<span className={`h-1.5 w-1.5 rounded-full ${tag.dot}`} />
					{tag.label}
				</span>
			))}
			<span className="inline-flex items-center rounded-badge border border-pulse-green/40 bg-pulse-green/10 px-1.5 py-0.5 font-mono text-[12px] tracking-[-0.013em] text-pulse-green">
				ENG-2703
			</span>
		</div>
	);
}

function ProductFrame() {
	return (
		<div className="rounded-xl bg-carbon p-6 shadow-subtle">
			<div className="overflow-hidden rounded-md border border-graphite bg-void">
				<div className="flex items-center gap-1.5 border-b border-graphite px-4 py-2.5">
					<span className="h-2 w-2 rounded-full bg-smoke" />
					<span className="h-2 w-2 rounded-full bg-smoke" />
					<span className="h-2 w-2 rounded-full bg-acid-lime" />
					<span className="ml-3 hidden font-mono text-[12px] tracking-[-0.013em] text-ash sm:block">
						⌘K — Jump to issue, project, or agent…
					</span>
				</div>
				<div className="grid md:grid-cols-[1fr_240px]">
					<ul className="divide-y divide-graphite/70">
						{ISSUES.map((issue) => (
							<li key={issue.id} className="flex items-center gap-3 px-4 py-3">
								<span
									className={`font-mono text-[12px] tracking-[-0.013em] ${issue.tint}`}
								>
									{issue.id}
								</span>
								<span className="flex-1 truncate text-[13px] text-mist">
									{issue.title}
								</span>
								<span className="hidden rounded-full bg-black/[0.04] px-3 py-1 text-[12px] text-mist sm:block">
									{issue.tag}
								</span>
							</li>
						))}
						<li className="flex items-center gap-3 bg-black/[0.02] px-4 py-3 shadow-sm">
							<span className="font-mono text-[12px] text-ash">AI</span>
							<span className="flex-1 text-[13px] text-fog">
								Agent triaged 14 issues while you slept…
							</span>
							<span className="rounded-md border border-graphite px-2 py-1 font-mono text-[12px] text-mist">
								Tab
							</span>
						</li>
					</ul>
					<aside className="hidden border-l border-graphite bg-obsidian p-4 md:block">
						<p className="text-[10px] font-medium uppercase tracking-[0.08em] text-ash">
							Cycle progress
						</p>
						<p className="mt-1 text-subheading text-paper">68%</p>
						<div className="mt-3 h-1 overflow-hidden rounded-full bg-graphite">
							<div className="h-full w-2/3 rounded-full bg-acid-lime" />
						</div>
						<div className="mt-4 space-y-2">
							{["Todo", "In Progress", "In Review"].map((col) => (
								<div
									key={col}
									className="rounded-md border border-graphite bg-void px-3 py-2 text-[12px] text-fog"
								>
									{col}
								</div>
							))}
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
}

function FeatureCard({
	title,
	body,
	accent,
}: {
	title: string;
	body: string;
	accent: string;
}) {
	return (
		<div className="rounded-xl border border-graphite/70 bg-carbon p-6 shadow-subtle">
			<span className={`inline-block h-px w-8 ${accent}`} />
			<h3 className="mt-4 text-subheading text-paper">{title}</h3>
			<p className="mt-2 text-[15px] leading-[1.6] tracking-[-0.011em] text-fog">
				{body}
			</p>
		</div>
	);
}

function Home() {
	return (
		<div className="min-h-screen bg-void text-mist">
			<TopNav />
			<main className="mx-auto w-full max-w-[1200px] px-6 pt-14">
				{/* Hero */}
				<section className="pb-24 pt-16 md:pt-24">
					<div className="flex items-center justify-between gap-6">
						<BadgeRow />
						<a
							href="/"
							className="hidden shrink-0 text-[13px] text-mist hover:text-paper md:block"
						>
							Changelog →
						</a>
					</div>
					<h1 className="mt-8 max-w-3xl text-[48px] font-medium leading-[1] tracking-[-0.022em] text-paper md:text-heading-lg">
						The daylight command center for product teams
					</h1>
					<p className="mt-5 max-w-xl text-[16px] leading-[1.5] text-fog">
						Issue tracking, kanban, and AI triage on a quiet paper canvas. One
						electric accent, hairline borders, zero ornament — the product UI is
						the visual texture.
					</p>
					<div id="cta" className="mt-8 flex flex-wrap items-center gap-4">
						<a
							href="#cta"
							className="rounded-md bg-acid-lime px-4 py-2.5 text-[14px] font-medium tracking-[-0.011em] text-pitch shadow-cta transition-opacity hover:opacity-90"
						>
							Start building
						</a>
						<a href="/" className="text-[14px] text-mist hover:text-paper">
							Talk to sales →
						</a>
					</div>
					{/* Hero gradient floor + product frame */}
					<div className="relative mt-12">
						<div
							aria-hidden="true"
							className="absolute inset-x-0 -bottom-10 top-1/3 bg-gradient-to-b from-void via-graphite to-smoke/70 blur-2xl"
						/>
						<div className="relative">
							<ProductFrame />
						</div>
					</div>
					{/* Logo strip */}
					<div className="mt-16 flex flex-wrap items-center justify-between gap-x-12 gap-y-4">
						{CUSTOMERS.map((name) => (
							<span key={name} className="text-[15px] text-fog/80">
								{name}
							</span>
						))}
					</div>
				</section>

				{/* Feature pair — 2-col per spec, never 3-col */}
				<section className="grid gap-4 pb-24 md:grid-cols-2">
					<FeatureCard
						title="Precision issue tracking"
						body="Hairline surfaces, mono issue IDs, and keyboard-first navigation. Density without noise — every pixel earns its place."
						accent="bg-pulse-green"
					/>
					<FeatureCard
						title="AI triage that stays quiet"
						body="The agent drafts, labels, and routes while you sleep. It surfaces one decision at a time — never a dashboard of noise."
						accent="bg-iris-violet"
					/>
				</section>

				{/* Full-width showcase band */}
				<section className="pb-24">
					<div className="rounded-xl border border-graphite/70 bg-obsidian p-6 shadow-subtle md:p-8">
						<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
							<div>
								<p className="font-mono text-[12px] tracking-[-0.013em] text-signal-teal">
									SYSTEM TOKENS
								</p>
								<h2 className="mt-2 text-heading-sm text-paper">
									One accent. Three radii. No shadows.
								</h2>
								<p className="mt-2 max-w-lg text-[15px] leading-[1.6] text-fog">
									Acid lime fires once per view. Cards sit at 12px, buttons at
									6px, pills fill out. Elevation comes from 0.5px hairlines —
									never ambient shadow stacks.
								</p>
							</div>
							<div className="flex flex-wrap items-center gap-2">
								<button
									type="button"
									className="rounded-md border border-graphite bg-transparent px-3 py-2 text-[13px] text-mist transition-colors hover:border-smoke hover:text-paper"
								>
									Ghost action
								</button>
								<button
									type="button"
									className="rounded-full bg-black/[0.04] px-3 py-1 text-[12px] text-mist transition-colors hover:text-paper"
								>
									Pill trigger
								</button>
							</div>
						</div>
						<div className="mt-6 flex flex-col gap-3 rounded-md border border-graphite bg-void p-4 sm:flex-row">
							<input
								type="text"
								placeholder="Search issues, projects, agents…"
								className="w-full flex-1 rounded-md border border-black/10 bg-black/[0.02] px-3.5 py-3 text-[14px] text-mist placeholder:text-fog focus:border-mist focus:outline-none"
							/>
							<button
								type="button"
								className="shrink-0 rounded-md bg-acid-lime px-4 py-3 text-[14px] font-medium text-pitch transition-opacity hover:opacity-90"
							>
								⌘K Quick find
							</button>
						</div>
					</div>
				</section>

				<footer className="flex flex-col gap-3 border-t border-graphite/70 py-8 text-[13px] text-ash sm:flex-row sm:items-center sm:justify-between">
					<span className="font-mono text-[12px]">
						{" "}
						Daylight precision instrument — Inter + JetBrains Mono{" "}
					</span>
					<span>Canvas #fafaf8 · Hairlines #e3e2de · Accent #e4f222</span>
				</footer>
			</main>
		</div>
	);
}
