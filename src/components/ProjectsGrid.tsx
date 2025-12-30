"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ProjectsGrid() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle mobile focus based on viewport position
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) { // Only on mobile
        const viewportCenter = window.innerHeight / 2;
        let maxVisibility = 0;
        let mostVisibleIndex = 0;

        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(viewportCenter - cardCenter);

          if (distanceFromCenter < maxVisibility || index === 0) {
            maxVisibility = distanceFromCenter;
            mostVisibleIndex = index;
          }
        });

        setFocusedCard(mostVisibleIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFocused = (index: number) => {
    if (typeof window === 'undefined') return hovered === index;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return focusedCard === index;
    }
    return hovered === index;
  };

  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative rounded-xl overflow-hidden min-h-100 md:min-h-112.5 transition-all duration-300 ease-out cursor-pointer",
                // Desktop hover effect
                hovered !== null && hovered !== index && "md:blur-sm md:scale-[0.98] md:opacity-70",
                // Mobile focus effect
                focusedCard !== null && focusedCard !== index && "blur-sm scale-[0.98] opacity-70 md:blur-0 md:scale-100 md:opacity-100"
              )}
              whileHover={{ scale: hovered === index ? 1.02 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-300",
                project.colorClass,
                isFocused(index) ? "opacity-40" : "opacity-70"
              )} />

              {/* Content */}
              <div className={cn(
                "absolute inset-0 flex flex-col justify-between p-6 transition-all duration-300",
                isFocused(index) ? "bg-black/20" : "bg-linear-to-t from-black/80 via-black/40 to-transparent"
              )}>
                {/* Top: Status Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.status.map((status) => (
                    <span
                      key={status}
                      className={cn(
                        "px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full border backdrop-blur-sm transition-all",
                        isFocused(index)
                          ? "bg-white/30 text-white border-white/50"
                          : "bg-white/20 text-white/90 border-white/30"
                      )}
                    >
                      {status}
                    </span>
                  ))}
                </div>

                {/* Bottom: Title, Description, Tags */}
                <div className="relative z-10 space-y-3">
                  <h2 className={cn(
                    "text-white font-semibold tracking-[-0.015em] transition-all duration-300",
                    isFocused(index)
                      ? "text-xl md:text-2xl lg:text-3xl"
                      : "text-lg md:text-xl lg:text-2xl"
                  )}>
                    {project.name}
                  </h2>

                  {isFocused(index) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="space-y-3"
                    >
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] md:text-xs text-white/80 bg-white/20 px-2 py-1 rounded-md backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <motion.a
            href="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// --- PROJECT DATA ---
// ============================================================================
const projects = [
  {
    id: 1,
    name: "AI Content Generator",
    description: "An intelligent content generation platform powered by LLMs with custom fine-tuning capabilities.",
    status: ["Production", "Featured"],
    tags: ["React", "Python", "OpenAI", "PostgreSQL"],
    image: "https://picsum.photos/seed/project1/800/600",
    colorClass: "bg-gradient-to-br from-indigo-900/90 to-purple-900/90",
  },
  {
    id: 2,
    name: "E-Commerce Analytics",
    description: "Real-time analytics dashboard for tracking sales, inventory, and customer behavior patterns.",
    status: ["Beta"],
    tags: ["Next.js", "TypeScript", "Stripe", "Redis"],
    image: "https://picsum.photos/seed/project2/800/600",
    colorClass: "bg-gradient-to-br from-blue-900/90 to-cyan-900/90",
  },
  {
    id: 3,
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    status: ["Production"],
    tags: ["Vue.js", "Firebase", "Tailwind", "PWA"],
    image: "https://picsum.photos/seed/project3/800/600",
    colorClass: "bg-gradient-to-br from-emerald-900/90 to-teal-900/90",
  },
  {
    id: 4,
    name: "Weather Forecast",
    description: "Beautiful weather application with 7-day forecasts, hourly data, and location-based alerts.",
    status: ["Production", "Open Source"],
    tags: ["React Native", "API", "Charts", "Location"],
    image: "https://picsum.photos/seed/project4/800/600",
    colorClass: "bg-gradient-to-br from-sky-900/90 to-blue-900/90",
  },
  {
    id: 5,
    name: "Social Media Dashboard",
    description: "Unified dashboard for managing multiple social media accounts with scheduling and analytics.",
    status: ["Alpha"],
    tags: ["Next.js", "Prisma", "OAuth", "Automation"],
    image: "https://picsum.photos/seed/project5/800/600",
    colorClass: "bg-gradient-to-br from-pink-900/90 to-rose-900/90",
  },
  {
    id: 6,
    name: "Code Snippet Manager",
    description: "Developer tool for organizing, sharing, and discovering code snippets with syntax highlighting.",
    status: ["Production", "Featured"],
    tags: ["Electron", "Monaco", "Cloud Sync", "Search"],
    image: "https://picsum.photos/seed/project6/800/600",
    colorClass: "bg-gradient-to-br from-amber-900/90 to-orange-900/90",
  },
];
