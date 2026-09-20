import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

const PORTRAIT_URL =
	"https://images.pexels.com/photos/33369429/pexels-photo-33369429.jpeg?auto=compress&cs=tinysrgb&w=800";
const PORTRAIT_CREDIT = "Jocelyn Espinoza / Pexels";

const LINKS = [
	{ label: "GitHub", href: "https://github.com/yourname" },
	{ label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
	{ label: "Email", href: "mailto:hello@example.com" },
];

const WORK = [
	{
		title: "Project One",
		year: "2025",
		blurb: "One-line description of what it is and what it achieved.",
	},
	{
		title: "Project Two",
		year: "2024",
		blurb: "One-line description of what it is and what it achieved.",
	},
	{
		title: "Project Three",
		year: "2023",
		blurb: "One-line description of what it is and what it achieved.",
	},
];

function Home() {
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
						<p className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[-0.013em] text-pulse-green">
							<span className="h-1.5 w-1.5 rounded-full bg-pulse-green" />
							Available for work
						</p>
						<h1 className="mt-4 text-[48px] font-medium leading-[1] tracking-[-0.022em] text-paper">
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
				<section className="mt-16 border-t border-graphite/70 pt-8">
					<p className="font-mono text-[12px] tracking-[-0.013em] text-ash">
						SELECTED WORK
					</p>
					<ul className="mt-4 divide-y divide-graphite/70">
						{WORK.map((item) => (
							<li key={item.title} className="flex items-baseline gap-4 py-4">
								<span className="shrink-0 font-mono text-[12px] text-ash">
									{item.year}
								</span>
								<div>
									<h2 className="text-[16px] font-medium text-paper">
										{item.title}
									</h2>
									<p className="mt-0.5 text-[14px] text-fog">{item.blurb}</p>
								</div>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}
