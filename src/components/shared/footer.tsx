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

export function Footer() {
  // Logic remains for settling points, but we'll focus on X-axis now
  const [settleX, setSettleX] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Typically for horizontal center, 0 is the neutral point in Framer Motion
      // if the parent container is flex-col items-center.
      setSettleX(0);
    };

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
      href: "https://linkedin.com",
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
          {/* Main Footer CTA - Updated Animation */}
          <motion.div
            // CHANGE: Start from -200px (left) and 0.2 opacity
            initial={{ opacity: 0, x: -200 }}
            // CHANGE: Animate to settleX (center)
            whileInView={{ opacity: 1, x: settleX }}
            viewport={{ once: true }} // Optional: only animate once
            transition={{
              delay: 0.3,
              duration: 1, // Slightly longer for a smoother horizontal sweep
              ease: "easeOut",
            }}
            className="text-center mb-16 md:mb-24 mt-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-slate-100 to-slate-500 bg-clip-text text-transparent mb-6">
              Ready to start?
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
              Currently accepting new projects and collaborations. Let’s turn
              your vision into a digital reality.
            </p>

            <motion.a
              href="mailto:fedoafridiansah@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold text-sm transition-all hover:bg-cyan-400 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Start a Conversation
              <IconChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Bottom Bar Section */}
          <div className="w-full pt-10 pb-10 border-t border-slate-800/60">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
              {/* Branding */}
              <div className="flex flex-col items-center md:items-start order-2 md:order-1">
                <p className="text-slate-100 font-bold text-xl mb-1 tracking-tighter">
                  ANJAS<span className="text-cyan-500">FEDO</span>
                </p>
                <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-wide">
                  © {new Date().getFullYear()} ALL RIGHTS RESERVED.
                </p>
              </div>

              {/* Socials */}
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
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 order-3">
                <a
                  href="/privacy"
                  className="text-slate-500 hover:text-cyan-400 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  Privacy
                </a>
                <a
                  href="/terms"
                  className="text-slate-500 hover:text-cyan-400 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  Terms
                </a>
                <a
                  href="/sitemap-index.xml"
                  className="text-slate-500 hover:text-cyan-400 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </LampContainer>
    </footer>
  );
}
