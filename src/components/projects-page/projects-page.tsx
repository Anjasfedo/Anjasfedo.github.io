"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IconSearch, IconX, IconChevronDown, IconAward, IconCapProjecting } from "@tabler/icons-react";

// ============================================================================
// --- TYPES ---
// ============================================================================

export type ProjectStatus = string;
export type ProjectTag = string;

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  status: ProjectStatus[];
  tags: ProjectTag[];
  image: string;
  images?: string[];
  video?: string;
  colorClass: string;
  github?: string;
  demo?: string;
}

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
  availableTags: ProjectTag[];
  availableStatuses: ProjectStatus[];
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
  availableTags,
  availableStatuses,
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
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 flex items-center gap-2 text-sm font-bold"
            >
              <IconX className="w-4 h-4" /> Reset Filters
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {availableStatuses.map((status) => (
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
                    className="absolute z-[100] w-full mt-2 p-3 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-white/10 rounded-xl shadow-2xl max-h-80 overflow-y-auto"
                  >
                    <div className="flex flex-wrap gap-2">
                      {availableTags.map((tag) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// --- PROJECT CARD COMPONENT ---
// ============================================================================

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
    _ref
  ) => {
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

    const handleNavigation = () => {
      sessionStorage.setItem(
        "projects-scroll-position",
        window.scrollY.toString()
      );
    };

    return (
      <a href={`/projects/${project.slug}`} onClick={handleNavigation}>
        <motion.div
          ref={_ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          whileHover={{ scale: isFocused ? 1.02 : 1 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "relative rounded-xl overflow-hidden min-h-80 md:min-h-96 transition-all duration-500 ease-out cursor-pointer group",
            isBlurred && "blur-sm scale-[0.98] opacity-70 grayscale-[0.5]"
          )}
        >
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              project.colorClass,
              isFocused ? "opacity-30" : "opacity-70"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 flex flex-col justify-between p-6 transition-all duration-500",
              isFocused
                ? "bg-black/40"
                : "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
            )}
          >
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
// --- MAIN PROJECTS PAGE ---
// ============================================================================

export function ProjectsPage({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus>("All");
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [hovered, setHovered] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // DYNAMIC FILTER OPTIONS
  const { availableTags, availableStatuses } = useMemo(() => {
    const tagsSet = new Set<string>();
    const statusSet = new Set<string>(["All"]);
    projects.forEach((p) => {
      p.tags?.forEach((t) => tagsSet.add(t));
      p.status?.forEach((s) => statusSet.add(s));
    });
    return {
      availableTags: Array.from(tagsSet).sort(),
      availableStatuses: Array.from(statusSet),
    };
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
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

  // MOBILE SCROLL FOCUS
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setFocusedCard(null);
        return;
      }
      const viewportCenter = window.innerHeight / 2;
      let minDistance = Infinity;
      let mostVisible = 0;
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(
          viewportCenter - (rect.top + rect.height / 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          mostVisible = index;
        }
      });
      setFocusedCard(mostVisible);
    };
    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleProjects]);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("projects-scroll-position");

    if (savedPosition) {
      // Use a slight timeout to ensure the grid has rendered before scrolling
      const timeoutId = setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition, 10),
          behavior: "instant", // Use "instant" so the user doesn't see the jump
        });
        // Clear it so it doesn't scroll again on refresh
        sessionStorage.removeItem("projects-scroll-position");
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  const isCardFocused = (index: number) => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768 ? focusedCard === index : hovered === index;
  };

  const isCardBlurred = (index: number) => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 768;
    const activeIndex = isMobile ? focusedCard : hovered;
    return activeIndex !== null && activeIndex !== index;
  };

  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 py-16 md:py-24">
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

      <FilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        activeFiltersCount={
          (searchQuery ? 1 : 0) +
          (selectedStatus !== "All" ? 1 : 0) +
          selectedTags.length
        }
        onClearFilters={() => {
          setSearchQuery("");
          setSelectedStatus("All");
          setSelectedTags([]);
        }}
        availableTags={availableTags}
        availableStatuses={availableStatuses}
      />

      <div className="relative z-0 w-full px-4">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
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
            <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl border border-dashed border-neutral-300 dark:border-neutral-800">
              <IconCapProjecting className="w-12 h-12 mx-auto text-neutral-300 mb-4" />
              <p className="text-neutral-500">No matching projects found.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {hasMore && (
        <motion.button
          onClick={() => setVisibleCount((prev) => prev + 6)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-black dark:bg-white rounded-full text-white dark:text-black font-semibold flex items-center gap-2"
        >
          Load More Projects <IconChevronDown className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}
