"use client";
import React from "react";
import { motion } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";

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
}: {
  className?: string;
  content?: HeroContent;
}) {

  // Use a key on TextGenerateEffect to force re-render if the headline changes
  const headline = content?.headline || "Hi, I'm Anjasfedo.";

  return (
    <BackgroundLines className="min-h-screen bg-white dark:bg-neutral-950">
      <section
        className={cn(
          "relative min-h-screen flex items-center justify-center py-20 overflow-hidden z-10",
          className
        )}
      >
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover="hover" // This triggers the "hover" variant in all child motion components
            className="flex flex-col items-center mb-8 cursor-pointer"
          >
            <div className="relative mb-4">
              {/* Animated glow effect - intensified on hover */}
              <motion.div
                variants={{
                  hover: {
                    scale: 1.15,
                    opacity: 0.6,
                    filter: "blur(12px)",
                  },
                }}
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 animate-pulse transition-all duration-500"
              ></motion.div>

              <motion.img
                variants={{
                  hover: {
                    y: -5,
                    scale: 1.05,
                    rotate: 2, // Subtle tilt for personality
                  },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                src="/profile-circle.webp"
                alt="M. Anjasfedo Afridiansah"
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] border-white dark:border-neutral-900 shadow-lg z-10"
                loading="eager"
              />

              {/* Status Indicator */}
              <motion.div
                variants={{
                  hover: { scale: 1.2, x: 2, y: 2 },
                }}
                className="absolute bottom-1 right-1 p-1 bg-white dark:bg-gray-900 rounded-full shadow-sm z-20"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </motion.div>
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all"
            >
              {content?.viewMyWorkText || "View My Work"}
            </motion.a>
            <motion.a
              href="mailto:fedoafridiansah@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border border-gray-300 dark:border-neutral-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              {content?.getInTouchText || "Get In Touch"}
            </motion.a>
          </div>
        </div>
      </section>
    </BackgroundLines>
  );
}
