import { useEffect } from "react";
import type { Experience } from "../../types/portfolio";

export function ExperienceModal({
    item,
    onClose,
}: {
    item: Experience;
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="animate-fade-in absolute inset-0 bg-black/40"
                onClick={onClose}
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="experience-modal-title"
                className="animate-modal-in relative max-h-[85dvh] w-full max-w-[560px] overflow-y-auto rounded-xl border border-graphite bg-carbon p-6 shadow-xl"
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-3">
                        <img
                            src={item.logo}
                            alt={`${item.org} logo`}
                            loading="lazy"
                            className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
                        />
                        <div className="min-w-0">
                            <h2
                                id="experience-modal-title"
                                className="text-[20px] font-medium tracking-[-0.01em] text-paper"
                            >
                                {item.title}
                            </h2>
                            <p className="mt-1 font-mono text-[12px] text-ash">
                                {item.org} · {item.range}
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        autoFocus
                        className="shrink-0 rounded-full border border-graphite px-3 py-1.5 text-[13px] text-mist transition-colors hover:border-smoke hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
                    >
                        ✕
                    </button>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ash">
                    {item.blurb}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-mist">
                    {item.details}
                </p>
            </div>
        </div>
    );
}