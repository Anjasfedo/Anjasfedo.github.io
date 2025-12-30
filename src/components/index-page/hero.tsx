"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";

// Types for content from MDX
interface Role {
  label: string;
  description: string;
}

interface HeroContent {
  roles?: Role[];
  title?: string;
}

// Default roles (fallback if no content provided)
const defaultRoles: Role[] = [
  {
    label: "Full-Stack Developer",
    description: "Bridging complex backends with beautiful frontends using Laravel & React.",
  },
  {
    label: "Backend Engineer",
    description: "Architecting scalable APIs and optimizing database performance.",
  },
  {
    label: "Frontend Developer",
    description: "Crafting pixel-perfect, responsive user interfaces with Tailwind & Astro.",
  },
  {
    label: "Mobile Developer",
    description: "Building cross-platform apps that feel native using React Native.",
  },
  {
    label: "UI/UX Enthusiast",
    description: "Designing intuitive user flows and accessible digital experiences.",
  },
  {
    label: "DevOps Engineer",
    description: "Automating deployments and managing cloud infrastructure with Docker.",
  },
];

// Memoized role card component to prevent unnecessary re-renders
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
      key={role.label}
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
          ? "border-transparent bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/25 transform"
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
  content
}: {
  className?: string;
  content?: HeroContent;
}) {
  // Use content from props or fall back to default roles
  const roles = content?.roles || defaultRoles;

  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, roles.length]);

  // Memoize the active role description
  const activeDescription = useMemo(
    () => roles[activeRoleIndex]?.description || "",
    [activeRoleIndex, roles]
  );

  // Use callbacks to prevent recreation of functions on each render
  const handleMouseEnter = useCallback((index: number) => {
    setIsHovered(true);
    setActiveRoleIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <BackgroundLines className="min-h-screen bg-white dark:bg-black">
      <section
        className={cn(
          "relative min-h-screen flex items-center justify-center py-20 overflow-hidden",
          className
        )}
      >
        {/* --- BACKGROUND BLOBS (Unchanged) --- */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>

        {/* --- CONTENT --- */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* --- PROFILE AVATAR SECTION --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-8"
          >
            {/* Avatar Container with Glow */}
            <div className="relative mb-4">
              {/* Subtle Gradient Glow behind the image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 dark:opacity-50"></div>

              {/* Profile Image */}
              <img
                // Using picsum seed so the image stays consistent on reload
                src="https://picsum.photos/seed/portfolio-avatar/200/200"
                alt="Profile"
                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-[3px] border-white dark:border-gray-900 shadow-lg"
              />

              {/* Integrated Status Dot */}
              <div className="absolute bottom-1 right-1 p-1 bg-white dark:bg-gray-900 rounded-full z-10">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white dark:border-gray-900"></span>
                </span>
              </div>
            </div>
          </motion.div>
          {/* ------------------------------- */}

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <TextGenerateEffect
              words="Hi, I'm John Doe. I craft digital experiences that merge design with technology."
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight"
            />
          </motion.h1>

          {/* --- GRID REVEAL (Unchanged) --- */}
          <div className="flex flex-col items-center justify-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 font-medium"
            >
              I specialize in:
            </motion.p>

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
                  transition={{ duration: 0.3 }}
                  className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-center font-medium"
                >
                  {activeDescription}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Buttons (Unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-purple-500 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </BackgroundLines>
  );
}
