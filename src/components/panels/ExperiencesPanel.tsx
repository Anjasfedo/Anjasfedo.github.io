import { useState } from "react";
import { EXPERIENCES, monthLabel } from "../../data/experiences";
import type { Experience } from "../../types/portfolio";
import { ExperienceModal } from "../modals/ExperienceModal";

export function ExperiencesPanel() {
    const [selected, setSelected] = useState<Experience | null>(null);
    const now = new Date();
    const presentIdx = now.getFullYear() * 12 + now.getMonth();
    const endOf = (item: Experience) => item.end ?? presentIdx;
    const minIdx = Math.min(...EXPERIENCES.map((item) => item.start));
    const total = presentIdx - minIdx + 1;
    const sorted = [...EXPERIENCES].sort(
        (a, b) =>
            (a.end === null ? 0 : 1) - (b.end === null ? 0 : 1) ||
            b.start - a.start ||
            endOf(b) - endOf(a),
    );
    const ticks: number[] = [];
    for (let t = minIdx; t < presentIdx; t += 6) ticks.push(t);
    if (presentIdx - ticks[ticks.length - 1] >= 4) ticks.push(presentIdx);
    const pos = (idx: number) => ((idx - minIdx) / total) * 100;
    const activeCount = EXPERIENCES.filter((item) => item.end === null).length;

    return (
        <div>
            <div className="hidden sm:block">
                <div className="mb-2 grid grid-cols-[220px_1fr] gap-4 px-4">
                    <span />
                    <span className="relative block h-4" aria-hidden="true">
                        {ticks.map((t) => (
                            <span
                                key={t}
                                className="absolute -translate-x-1/2 font-mono text-[10px] uppercase tabular-nums text-ash first:translate-x-0 last:translate-x-[-100%]"
                                style={{ left: `${pos(t)}%` }}
                            >
                                {monthLabel(t)}
                            </span>
                        ))}
                    </span>
                </div>
                <ul className="space-y-2">
                    {sorted.map((item) => {
                        const e = endOf(item);
                        const left = pos(item.start);
                        const width = ((e + 1 - item.start) / total) * 100;
                        return (
                            <li key={item.title}>
                                <button
                                    type="button"
                                    onClick={() => setSelected(item)}
                                    className="grid w-full cursor-pointer grid-cols-[220px_1fr] items-center gap-4 rounded-xl border border-graphite bg-carbon px-4 py-3 text-left shadow-subtle transition-colors hover:border-smoke focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                                >
                                    <span className="flex min-w-0 items-center gap-3">
                                        <img
                                            src={item.logo}
                                            alt={`${item.org} logo`}
                                            loading="lazy"
                                            className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
                                        />
                                        <span className="min-w-0">
                                            <span className="block truncate text-sm font-medium text-paper">
                                                {item.title}
                                            </span>
                                            <span className="mt-0.5 block truncate text-[13px] text-ash">
                                                {item.org}
                                            </span>
                                            <span className="mt-1 block font-mono text-[10px] uppercase tabular-nums text-ash">
                                                {item.range}
                                            </span>
                                        </span>
                                    </span>
                                    <span
                                        className="relative block h-2 rounded-full bg-obsidian"
                                        aria-hidden="true"
                                    >
                                        <span
                                            className="absolute top-0 h-full rounded-full bg-mist"
                                            style={{ left: `${left}%`, width: `${width}%` }}
                                        >
                                            {item.end === null && (
                                                <span className="absolute top-1/2 -right-1 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-pulse-green ring-2 ring-carbon" />
                                            )}
                                        </span>
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-pulse-green" />
                    <span className="font-mono text-[10px] uppercase text-ash">
                        {`${activeCount} active · ${monthLabel(minIdx)} — Present`}
                    </span>
                </div>
            </div>
            <ul className="divide-y divide-graphite/70 border-y border-graphite/70 sm:hidden">
                {EXPERIENCES.map((item) => (
                    <li key={item.title}>
                        <button
                            type="button"
                            onClick={() => setSelected(item)}
                            className="flex w-full cursor-pointer items-center gap-3 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                        >
                            <img
                                src={item.logo}
                                alt={`${item.org} logo`}
                                loading="lazy"
                                className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
                            />
                            <span className="min-w-0">
                                <h3 className="text-[15px] font-medium text-paper">
                                    {item.title}{" "}
                                    <span className="font-normal text-ash">@ {item.org}</span>
                                </h3>
                                <p className="mt-1 font-mono text-[11px] uppercase text-ash">
                                    {item.range}
                                </p>
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
            {selected && (
                <ExperienceModal item={selected} onClose={() => setSelected(null)} />
            )}
        </div>
    );
}