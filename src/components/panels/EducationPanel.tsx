import { EDUCATION } from "../../data/education";

export function EducationPanel() {
	return (
		<ul className="divide-y divide-graphite/70 border-y border-graphite/70">
			{EDUCATION.map((item) => (
				<li key={item.school} className="flex gap-3 py-4">
					<img
						src={item.logo}
						alt={`${item.school} logo`}
						loading="lazy"
						width={40}
						height={40}
						className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
					/>
					<div className="min-w-0 flex-1">
						<div className="flex items-baseline justify-between gap-4">
							<h3 className="text-[15px] font-medium text-paper">
								{item.school}
							</h3>
							<span className="shrink-0 font-mono text-[11px] uppercase tabular-nums text-ash">
								{item.range}
							</span>
						</div>
						<p className="mt-0.5 text-[13px] text-mist">{item.program}</p>
						<p className="mt-0.5 text-[13px] text-ash">{item.location}</p>
						<p className="mt-2 text-[13px] leading-relaxed text-mist">
							{item.blurb}
						</p>
					</div>
				</li>
			))}
		</ul>
	);
}
