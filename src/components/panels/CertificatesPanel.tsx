import { CERTIFICATES, ISSUER_LOGOS } from "../../data/certificates";

export function CertificatesPanel() {
    return (
        <ul className="divide-y divide-graphite/70 border-y border-graphite/70">
            {CERTIFICATES.map((cert) => {
                const logo = ISSUER_LOGOS[cert.issuer];
                return (
                    <li
                        key={cert.name}
                        className="flex items-center justify-between gap-4 py-4"
                    >
                        <div className="flex min-w-0 items-center gap-3">
                            {logo && (
                                <img
                                    src={logo}
                                    alt={`${cert.issuer} logo`}
                                    loading="lazy"
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 shrink-0 rounded-badge border border-graphite bg-obsidian object-cover"
                                />
                            )}
                            <div className="min-w-0">
                                <h3
                                    title={cert.name}
                                    className="truncate text-[15px] font-medium text-paper"
                                >
                                    {cert.name}
                                </h3>
                                <p
                                    title={cert.issuer}
                                    className="mt-0.5 truncate text-[13px] text-ash"
                                >
                                    {cert.issuer}
                                </p>
                            </div>
                        </div>
                        <span className="shrink-0 font-mono text-[11px] tabular-nums text-ash">
                            {cert.year}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}