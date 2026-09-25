import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import { ProjectModal } from "../modals/ProjectModal";

export function ProjectsPanel() {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<>
			<ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{PROJECTS.map((project) => (
					<li key={project.name} className="relative">
						<button
							type="button"
							onClick={() => setSelected(project)}
							className="flex h-full w-full cursor-pointer flex-col rounded-xl border border-graphite bg-carbon p-6 text-left transition-colors hover:border-smoke focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
						>
							<span className="flex items-center justify-between gap-3">
								<span className="flex items-center gap-3 min-w-0">
									{project.logo ? (
										<img
											src={project.logo}
											alt={`${project.name} logo`}
											loading="lazy"
											width={40}
											height={40}
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

								{project.deprecated && (
									<span className="shrink-0 rounded-md border border-graphite bg-obsidian px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ash">
										Deprecated
									</span>
								)}
							</span>
							<span className="mt-4 block flex-1 text-[15px] leading-[1.6] text-ash">
								{project.blurb}
							</span>
							{/* Footer spacer; the link sits over it as a sibling, since <a> can't nest in <button> */}
							<span className="mt-6 block border-t border-graphite/70 pt-4">
								<span className="block h-[18px]" />
							</span>
						</button>
						<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							className="absolute bottom-6 left-6 max-w-[calc(100%-3rem)] truncate font-mono text-[12px] leading-[18px] tracking-[-0.013em] text-ash underline-offset-4 hover:text-paper hover:underline"
						>
							{project.href.replace(/^https?:\/\//, "")} ↗
						</a>
					</li>
				))}
			</ul>
			{selected && (
				<ProjectModal item={selected} onClose={() => setSelected(null)} />
			)}
		</>
	);
}
