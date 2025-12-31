"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import type { Language } from "@/i18n/ui";

interface Role {
  label: string;
  description: string;
}

interface HeroContent {
  roles?: Role[];
  headline?: string;
  heroSubtitle?: string;
  viewMyWorkText?: string;
  getInTouchText?: string;
}

const RoleCard = React.memo(
  ({
    role,
    isActive,
    onMouseEnter,
    onMouseLeave,
  }: {
    role: Role;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      className={cn(
        "px-4 py-2 rounded-full border text-sm md:text-base transition-all duration-300 cursor-pointer backdrop-blur-sm",
        isActive
          ? "border-transparent bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/25"
          : "border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-950/80 hover:bg-white dark:hover:bg-gray-900 hover:border-purple-300/50"
      )}
    >
      {role.label}
    </motion.div>
  )
);

RoleCard.displayName = "RoleCard";

export function Hero({
  className,
  content,
  lang,
}: {
  className?: string;
  content?: HeroContent;
  lang: Language;
}) {
  // Use a fallback to empty array but ensure it updates when content arrives
  const roles = useMemo(() => content?.roles || [], [content?.roles]);

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Interval logic
  useEffect(() => {
    if (isHovered || roles.length === 0) return;

    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, roles.length]);

  const activeDescription = useMemo(
    () => roles[activeRoleIndex]?.description || "Crafting digital excellence.",
    [activeRoleIndex, roles]
  );

  const handleMouseEnter = useCallback((index: number) => {
    setIsHovered(true);
    setActiveRoleIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Use a key on TextGenerateEffect to force re-render if the headline changes
  const headline = content?.headline || "Hi, I'm Anjasfedo.";

  return (
    <BackgroundLines className="min-h-screen bg-white dark:bg-neutral-950">
      <section
        className={cn(
          "relative min-h-screen flex items-center justify-center py-20 overflow-hidden",
          className
        )}
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Avatar Section */}
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative mb-4">
              {/* Animated glow effect behind the avatar */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 animate-pulse"></div>

              <img
                src="/profile-circle.webp" // Updated to your circular WebP
                alt="M. Anjasfedo Afridiansah"
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] border-white dark:border-neutral-900 shadow-lg"
                loading="eager" // Load this immediately as it's above the fold
              />

              {/* Status Indicator (Online/Available) */}
              <div className="absolute bottom-1 right-1 p-1 bg-white dark:bg-gray-900 rounded-full shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* HEADLINE FIX: Ensure it updates when MDX loads */}
          <div className="mb-8 min-h-[120px]">
            <TextGenerateEffect
              key={headline}
              words={headline}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            />
          </div>

          <div className="flex flex-col items-center justify-center mb-12">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
              {content?.heroSubtitle || "I specialize in:"}
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-8">
              {roles.map((role, idx) => (
                <RoleCard
                  key={role.label}
                  role={role}
                  isActive={idx === activeRoleIndex}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
            <div className="h-16 flex items-center justify-center w-full max-w-2xl px-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeRoleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-center font-medium"
                >
                  {activeDescription}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <a
              href={`/${lang}/projects`}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition-all"
            >
              {content?.viewMyWorkText || "View My Work"}
            </a>
            <a
              href="mailto:fedoafridiansah@gmail.com"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border border-gray-300 dark:border-neutral-700 hover:border-purple-500 transition-all"
            >
              {content?.getInTouchText || "Get In Touch"}
            </a>
          </div>
        </div>
      </section>
    </BackgroundLines>
  );
}
