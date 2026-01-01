"use client";
import React, { useEffect, useState } from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
  IconChevronRight,
} from "@tabler/icons-react";
import { useTranslations } from "@/i18n/utils";
import type { Language } from "@/i18n/ui";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = useTranslations(lang);
  const [settleX, setSettleX] = useState(0);

  useEffect(() => {
    const handleResize = () => setSettleX(0);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <IconBrandGithub className="w-5 h-5" />,
      href: "https://github.com/anjasfedo",
      color: "hover:bg-neutral-800",
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/anjasfedo",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <IconBrandTwitter className="w-5 h-5" />,
      href: "https://twitter.com",
      color: "hover:bg-sky-500",
    },
    {
      name: "Email",
      icon: <IconMail className="h-5 w-5" />,
      href: "mailto:fedoafridiansah@gmail.com",
      color: "hover:bg-red-500",
    },
  ];

  return (
    <footer className="bg-slate-950 w-full overflow-hidden">
      <LampContainer className="">
        <div className="flex flex-col items-center justify-end w-full h-full mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: settleX }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-center mb-16 md:mb-24 mt-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent mb-6">
              {t("footer.cta.title")}
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
              {t("footer.cta.desc")}
            </p>

            <motion.a
              href="mailto:fedoafridiansah@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm transition-all hover:bg-cyan-400 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              aria-label="Send email to fedoafridiansah@gmail.com"
            >
              {t("footer.cta.button")}
              <IconChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          <div className="w-full pt-10 pb-10 border-t border-slate-800/60">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
              <div className="flex flex-col items-center md:items-start order-2 md:order-1">
                <p className="text-slate-100 font-bold text-xl mb-1 tracking-tighter">
                  ANJAS<span className="text-cyan-500">FEDO</span>
                </p>
                <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-wide">
                  © {new Date().getFullYear()} {t("footer.rights")}
                </p>
              </div>

              <div className="flex items-center gap-4 order-1 md:order-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 transition-all duration-300",
                      "hover:text-white hover:border-slate-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
                      social.color
                    )}
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-6 order-3">
                <a
                  href={`/${lang}/privacy`}
                  className="text-slate-500 hover:text-cyan-400 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  {t("footer.links.privacy")}
                </a>
                <a
                  href={`/${lang}/terms`}
                  className="text-slate-500 hover:text-cyan-400 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  {t("footer.links.terms")}
                </a>
                <a
                  href="/sitemap-index.xml"
                  className="text-slate-500 hover:text-cyan-400 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  {t("footer.links.sitemap")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </LampContainer>
    </footer>
  );
}
