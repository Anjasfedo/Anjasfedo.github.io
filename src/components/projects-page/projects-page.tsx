"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IconSearch, IconX, IconChevronDown } from "@tabler/icons-react";

// ============================================================================
// --- PROJECT DATA & TYPES ---
// ============================================================================

export type ProjectStatus =
  | "All"
  | "Production"
  | "Beta"
  | "Alpha"
  | "Archived"
  | "Featured";
export type ProjectTag =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "Python"
  | "Node.js"
  | "Vue.js"
  | "Tailwind"
  | "PostgreSQL"
  | "MongoDB"
  | "Firebase"
  | "OpenAI"
  | "Stripe"
  | "Prisma"
  | "Redis"
  | "Electron"
  | "React Native"
  | "PWA"
  | "OAuth"
  | "Automation"
  | "API"
  | "Charts"
  | "Location"
  | "Cloud Sync"
  | "Search"
  | "Monaco"
  | "Docker"
  | "Kubernetes"
  | "GraphQL"
  | "Laravel";

export interface Project {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  status: ProjectStatus[];
  tags: ProjectTag[];
  image: string; // thumbnail
  images?: string[]; // gallery images
  video?: string; // video URL (YouTube, Vimeo, etc.)
  colorClass: string;
  github?: string;
  demo?: string;
}
export const allProjects: Project[] = [
  // --- EXISTING PROJECTS (1-6) ---
  {
    id: 1,
    slug: "ai-content-generator",
    name: "AI Content Generator",
    description:
      "An intelligent content generation platform powered by LLMs with custom fine-tuning capabilities.",
    longDescription:
      "Built an AI-powered content generation platform using OpenAI's GPT models.",
    status: ["Production", "Featured"],
    tags: ["React", "Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Python"],
    image: "https://picsum.photos/seed/project1/800/600",
    images: [
      "https://picsum.photos/seed/project1-1/1200/800",
      "https://picsum.photos/seed/project1-2/1200/800",
      "https://picsum.photos/seed/project1-3/1200/800",
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    colorClass: "bg-gradient-to-br from-indigo-900/90 to-purple-900/90",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    slug: "ecommerce-analytics",
    name: "E-Commerce Analytics",
    description:
      "Real-time analytics dashboard for tracking sales, inventory, and customer behavior patterns.",
    longDescription:
      "Comprehensive analytics dashboard with real-time data visualization.",
    status: ["Beta"],
    tags: ["Next.js", "TypeScript", "Stripe", "Redis", "Charts", "PostgreSQL"],
    image: "https://picsum.photos/seed/project2/800/600",
    colorClass: "bg-gradient-to-br from-blue-900/90 to-cyan-900/90",
  },
  {
    id: 3,
    slug: "task-management-app",
    name: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team collaboration features.",
    longDescription:
      "Full-stack task management application with real-time updates.",
    status: ["Production"],
    tags: ["Vue.js", "Firebase", "Tailwind", "PWA", "TypeScript"],
    image: "https://picsum.photos/seed/project3/800/600",
    colorClass: "bg-gradient-to-br from-emerald-900/90 to-teal-900/90",
  },
  {
    id: 4,
    slug: "weather-forecast",
    name: "Weather Forecast",
    description:
      "Beautiful weather application with 7-day forecasts, hourly data, and location-based alerts.",
    longDescription:
      "Feature-rich weather app with geolocation-based forecasts.",
    status: ["Production", "Open Source"],
    tags: ["React Native", "API", "Charts", "Location", "TypeScript"],
    image: "https://picsum.photos/seed/project4/800/600",
    colorClass: "bg-gradient-to-br from-sky-900/90 to-blue-900/90",
  },
  {
    id: 5,
    slug: "social-media-dashboard",
    name: "Social Media Dashboard",
    description:
      "Unified dashboard for managing multiple social media accounts with scheduling and analytics.",
    longDescription: "Multi-platform social media management tool.",
    status: ["Alpha"],
    tags: ["Next.js", "Prisma", "OAuth", "Automation", "PostgreSQL", "Redis"],
    image: "https://picsum.photos/seed/project5/800/600",
    colorClass: "bg-gradient-to-br from-pink-900/90 to-rose-900/90",
  },
  {
    id: 6,
    slug: "code-snippet-manager",
    name: "Code Snippet Manager",
    description:
      "Developer tool for organizing, sharing, and discovering code snippets with syntax highlighting.",
    longDescription:
      "Developer productivity tool with Monaco editor integration.",
    status: ["Production", "Featured"],
    tags: ["Electron", "Monaco", "Cloud Sync", "Search", "React", "Node.js"],
    image: "https://picsum.photos/seed/project6/800/600",
    colorClass: "bg-gradient-to-br from-amber-900/90 to-orange-900/90",
  },

  // --- NEW PROJECTS (7-12) ---
  {
    id: 7,
    slug: "realtime-chat-app",
    name: "Real-time Chat App",
    description:
      "Secure messaging platform with end-to-end encryption, file sharing, and group calls.",
    longDescription:
      "A high-performance chat application utilizing WebSockets for instant communication.",
    status: ["Beta"],
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "Tailwind"],
    image: "https://picsum.photos/seed/project7/800/600",
    colorClass: "bg-gradient-to-br from-violet-900/90 to-fuchsia-900/90",
  },
  {
    id: 8,
    slug: "defi-crypto-portfolio",
    name: "DeFi Crypto Portfolio",
    description:
      "Cryptocurrency tracker connecting to multiple wallets and exchanges for a unified view.",
    longDescription:
      "Web3 dashboard for tracking decentralized finance assets and token performance.",
    status: ["Production"],
    tags: ["Next.js", "GraphQL", "Charts", "API", "Tailwind"],
    image: "https://picsum.photos/seed/project8/800/600",
    colorClass: "bg-gradient-to-br from-slate-900/90 to-zinc-900/90",
  },
  {
    id: 9,
    slug: "automated-testing-cicd",
    name: "Automated Testing CI/CD",
    description:
      "A custom CI/CD pipeline tool that automates testing and deployment workflows for microservices.",
    longDescription:
      "DevOps toolchain for orchestrating Docker containers and Kubernetes clusters.",
    status: ["Archived"],
    tags: ["Docker", "Kubernetes", "Python", "Automation", "Node.js"],
    image: "https://picsum.photos/seed/project9/800/600",
    colorClass: "bg-gradient-to-br from-red-900/90 to-orange-900/90",
  },
  {
    id: 10,
    slug: "health-fitness-tracker",
    name: "Health & Fitness Tracker",
    description:
      "Mobile application for tracking workouts, nutrition logs, and connecting with wearable devices.",
    longDescription:
      "Cross-platform mobile app with health kit integration and progress visualization.",
    status: ["Production"],
    tags: ["React Native", "Firebase", "Charts", "TypeScript", "Location"],
    image: "https://picsum.photos/seed/project10/800/600",
    colorClass: "bg-gradient-to-br from-teal-900/90 to-green-900/90",
  },
  {
    id: 11,
    slug: "learning-management-system",
    name: "Learning Management System",
    description:
      "Educational platform for course creation, student management, and interactive quizzes.",
    longDescription:
      "Scalable LMS built for universities with video streaming and assignment grading.",
    status: ["Alpha"],
    tags: ["Laravel", "Vue.js", "PostgreSQL", "Redis", "Tailwind"],
    image: "https://picsum.photos/seed/project11/800/600",
    colorClass: "bg-gradient-to-br from-blue-900/90 to-indigo-900/90",
  },
  {
    id: 12,
    slug: "travel-booking-engine",
    name: "Travel Booking Engine",
    description:
      "Search engine for flights and hotels aggregating data from multiple travel APIs.",
    longDescription:
      "High-traffic booking system with complex search algorithms and secure payment gateways.",
    status: ["Production"],
    tags: ["Next.js", "Stripe", "Search", "API", "Cloud Sync"],
    image: "https://picsum.photos/seed/project12/800/600",
    colorClass: "bg-gradient-to-br from-cyan-900/90 to-sky-900/90",
  },
];

const allTags: ProjectTag[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Node.js",
  "Vue.js",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "OpenAI",
  "Stripe",
  "Prisma",
  "Redis",
  "Electron",
  "React Native",
  "PWA",
  "OAuth",
  "Automation",
  "API",
  "Charts",
  "Location",
  "Cloud Sync",
  "Search",
  "Monaco",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Laravel",
];

const statusOptions: ProjectStatus[] = [
  "All",
  "Production",
  "Beta",
  "Alpha",
  "Archived",
];

// ============================================================================
// --- FILTER BAR COMPONENT ---
// ============================================================================

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedStatus: ProjectStatus;
  setSelectedStatus: (status: ProjectStatus) => void;
  selectedTags: ProjectTag[];
  setSelectedTags: (tags: ProjectTag[]) => void;
  activeFiltersCount: number;
  onClearFilters: () => void;
}

const FilterBar = ({
  searchQuery,
  setSearchQuery,
  selectedStatus,
  setSelectedStatus,
  selectedTags,
  setSelectedTags,
  activeFiltersCount,
  onClearFilters,
}: FilterBarProps) => {
  const [showTagDropdown, setShowTagDropdown] = useState(false);

  const toggleTag = (tag: ProjectTag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-8 relative z-50">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/10 p-4 md:p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              >
                <IconX className="w-4 h-4 text-neutral-400" />
              </button>
            )}
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="px-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <IconX className="w-4 h-4" />
              Clear {activeFiltersCount}{" "}
              {activeFiltersCount === 1 ? "Filter" : "Filters"}
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
                    selectedStatus === status
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                  )}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Technologies{" "}
              {selectedTags.length > 0 && `(${selectedTags.length} selected)`}
            </label>
            <div className="relative">
              <button
                onClick={() => setShowTagDropdown(!showTagDropdown)}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              >
                <span className="text-neutral-900 dark:text-white truncate pr-4">
                  {selectedTags.length > 0
                    ? `${selectedTags.length} selected`
                    : "Select technologies"}
                </span>
                <IconChevronDown
                  className={cn(
                    "w-5 h-5 text-neutral-400 transition-transform",
                    showTagDropdown && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {showTagDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-[100] w-full mt-2 p-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-xl shadow-2xl max-h-80 overflow-y-auto"
                  >
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-xs font-medium transition-all border border-transparent",
                            selectedTags.includes(tag)
                              ? "bg-blue-500 text-white shadow-md"
                              : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 border-neutral-200 dark:border-white/5"
                          )}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-500/20 flex items-center gap-1 hover:bg-blue-500/20 transition-colors"
                  >
                    {tag} <IconX className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// --- PROJECT CARD COMPONENT (Refactored for Parent Control) ---
// ============================================================================

// We use forwardRef to allow the parent (ProjectsPage) to measure this element
const ProjectCard = React.forwardRef<
  HTMLDivElement,
  {
    project: Project;
    index: number;
    isFocused: boolean;
    isBlurred: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }
>(
  (
    { project, index, isFocused, isBlurred, onMouseEnter, onMouseLeave },
    ref
  ) => {
    // Status color helper function
    const getStatusColor = (status: string) => {
      switch (status) {
        case "Production":
          return "bg-green-500/20 text-green-400 border-green-500/30";
        case "Beta":
          return "bg-blue-500/20 text-blue-400 border-blue-500/30";
        case "Alpha":
          return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
        case "Archived":
          return "bg-gray-500/20 text-gray-400 border-gray-500/30";
        case "Featured":
          return "bg-purple-500/20 text-purple-400 border-purple-500/30";
        default:
          return "bg-neutral-500/20 text-neutral-400 border-neutral-500/30";
      }
    };

    return (
      <a href={`/projects/${project.slug}`}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          whileHover={{ scale: isFocused ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "relative rounded-xl overflow-hidden min-h-80 md:min-h-96 transition-all duration-500 ease-out cursor-pointer group",
            // Focus/Blur Logic applied via classNames based on props
            isBlurred && "blur-sm scale-[0.98] opacity-70 grayscale-[0.5]"
          )}
        >
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay - Changes opacity based on focus */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            project.colorClass,
            isFocused ? "opacity-30" : "opacity-70"
          )}
        />

        {/* Content */}
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-between p-6 transition-all duration-500",
            isFocused
              ? "bg-black/40"
              : "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
          )}
        >
          {/* Top: Status Tags */}
          <div className="flex flex-wrap gap-2 relative z-10">
            {project.status.map((status) => (
              <span
                key={status}
                className={cn(
                  "px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full border backdrop-blur-sm transition-all duration-300",
                  getStatusColor(status),
                  isFocused
                    ? "bg-opacity-30 border-opacity-50"
                    : "bg-opacity-10 border-opacity-20"
                )}
              >
                {status}
              </span>
            ))}
          </div>

          {/* Bottom: Title, Description, Tags */}
          <div className="relative z-10 space-y-3">
            <h2
              className={cn(
                "text-white font-semibold tracking-tight transition-all duration-300",
                isFocused
                  ? "text-xl md:text-2xl lg:text-3xl"
                  : "text-lg md:text-xl"
              )}
            >
              {project.name}
            </h2>

            {/* Conditional Reveal */}
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 overflow-hidden"
                >
                  <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] md:text-xs text-white/90 bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] md:text-xs text-white/60 px-2 py-1">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg backdrop-blur-sm transition-colors flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653 1.553 2.232 3.343 2.232-.927.007-1.813-.283-2.615-.767v2.234c0 .316.192.69.802.574 1.765 4.923-1.34 8.207-5.467 8.207-10 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg backdrop-blur-sm transition-colors flex items-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      </a>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

// ============================================================================
// --- MAIN PROJECTS PAGE COMPONENT ---
// ============================================================================

export function ProjectsPage({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus>("All");
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  // --- FOCUS LOGIC STATE ---
  const [hovered, setHovered] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesStatus =
        selectedStatus === "All" || project.status.includes(selectedStatus);
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => project.tags.includes(tag));
      return matchesSearch && matchesStatus && matchesTags;
    });
  }, [projects, searchQuery, selectedStatus, selectedTags]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleCount;

  // --- MOBILE SCROLL FOCUS LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        setFocusedCard(null); // Clear mobile focus on desktop
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let maxVisibility = Infinity;
      let mostVisibleIndex = 0;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportCenter - cardCenter);

        if (distanceFromCenter < maxVisibility) {
          maxVisibility = distanceFromCenter;
          mostVisibleIndex = index;
        }
      });

      setFocusedCard(mostVisibleIndex);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check (delay slightly to ensure rendering)
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleProjects]); // Re-run when list changes

  // Determine if a card is "Active" (Focused)
  const isCardFocused = (index: number) => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 768;
    if (isMobile) return focusedCard === index;
    return hovered === index;
  };

  // Determine if a card should be "Blurred" (Inactive)
  const isCardBlurred = (index: number) => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      // Mobile: Blur if something is focused and it's not me
      return focusedCard !== null && focusedCard !== index;
    } else {
      // Desktop: Blur if something is hovered and it's not me
      return hovered !== null && hovered !== index;
    }
  };

  const handleLoadMore = () =>
    setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length));

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedStatus("All");
    setSelectedTags([]);
  };

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (selectedStatus !== "All" ? 1 : 0) +
    selectedTags.length;

  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 py-16 md:py-24">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 px-4"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
          All Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">
          Explore my collection of projects, experiments, and open-source
          contributions.
        </p>
      </motion.div>

      {/* Filter Bar (High Z-Index) */}
      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        activeFiltersCount={activeFiltersCount}
        onClearFilters={handleClearFilters}
      />

      {/* Projects Grid (Low Z-Index) */}
      <div className="relative z-0 w-full">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4"
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  isFocused={isCardFocused(index)}
                  isBlurred={isCardBlurred(index)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Try adjusting your filters or search query
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center pt-8"
        >
          <motion.button
            onClick={handleLoadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-black dark:bg-white rounded-full text-white dark:text-black font-semibold overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Load More Projects
              <svg
                className="w-5 h-5 transition-transform group-hover:rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* No More Projects Message */}
      {!hasMore && filteredProjects.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-neutral-500 dark:text-neutral-400 pt-8"
        >
          All projects loaded 🎉
        </motion.div>
      )}
    </div>
  );
}
