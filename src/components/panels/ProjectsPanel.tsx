import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import { ProjectModal } from "../modals/ProjectModal";

export function ProjectsPanel() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <>
            <ul className="grid gap-3 sm:grid-cols-2">
                {PROJECTS.map((project) => (
                    <li key={project.name}>
                        <button
                            type="button"
                            onClick={() => setSelected(project)}
                            className="flex h-full w-full cursor-pointer flex-col rounded-xl border border-graphite bg-carbon p-6 text-left transition-colors hover:border-smoke focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                        >
                            <span className="flex items-center gap-3">
                                {project.logo ? (
                                    <img
                                        src={project.logo}
                                        alt={`${project.name} logo`}
                                        loading="lazy"
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
                            <span className="mt-4 block flex-1 text-[15px] leading-[1.6] text-ash">
                                {project.blurb}
                            </span>
                            <span className="mt-6 block truncate border-t border-graphite/70 pt-4 font-mono text-[12px] tracking-[-0.013em] text-ash">
                                {project.href.replace("https://", "")}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
            {selected && (
                <ProjectModal item={selected} onClose={() => setSelected(null)} />
            )}
        </>
    );
}