"use client";
import React, { memo, useMemo } from "react";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { IconDownload, IconFileText } from "@tabler/icons-react";

// ============================================================================
// --- TYPES & INTERFACES ---
// ============================================================================

interface Role {
  title: string;
  company: string;
  date: string;
  desc: string;
}

interface TimelineItem {
  title: string;
  description?: string;
  content?: Role[];
}

interface ExperienceTimelineContent {
  experienceTitle: string;
  experienceDescription: string;
  timeline?: TimelineItem[];
}

// ============================================================================
// --- SUB-COMPONENTS ---
// ============================================================================

const SubTimelineWrapper = memo(
  ({
    children,
    variant,
  }: {
    children: React.ReactNode;
    variant: "present" | "past";
  }) => {
    return (
      <div className="relative pb-20">
        <div className="absolute left-[3px] md:left-[-37px] top-2 bottom-0 w-[2px] bg-neutral-100 dark:bg-neutral-900 z-0" />
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={cn(
            "absolute left-[3px] md:left-[-37px] top-2 bottom-0 w-[2px] z-10 origin-top",
            variant === "present"
              ? "bg-gradient-to-b from-blue-600 via-blue-400 to-blue-500"
              : "bg-blue-500/50"
          )}
        />
        <div className="flex flex-col gap-20 relative z-20">{children}</div>
      </div>
    );
  }
);

SubTimelineWrapper.displayName = "SubTimelineWrapper";

const SubRole = memo(
  ({
    title,
    company,
    date,
    desc,
  }: {
    title: string;
    company: string;
    date: string;
    desc: string;
  }) => {
    return (
      <div className="relative pl-8 md:pl-0 group">
        <motion.div
          initial={{ scale: 0.8, backgroundColor: "#d1d5db" }}
          whileInView={{
            scale: 1.1,
            backgroundColor: "#3b82f6",
            boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.6)",
          }}
          viewport={{ amount: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute left-[-5px] md:left-[-45px] top-2 w-3.5 h-3.5 rounded-full z-30 border-2 border-white dark:border-neutral-950 transition-transform group-hover:scale-125 shadow-sm"
        />
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {date}
          </span>
          <h4 className="text-xl font-bold dark:text-white leading-none">
            {title}
          </h4>
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
            {company}
          </p>
          <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-500 mt-3 max-w-xl leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    );
  }
);

SubRole.displayName = "SubRole";

// ============================================================================
// --- DEFAULT DATA ---
// ============================================================================


// Helper to convert TimelineItem to the structure expected by Timeline component
const convertToTimelineData = (items: TimelineItem[]) => {
  return items.map((item) => ({
    title: item.title,
    content: (
      <div className="flex flex-col">
        {item.description && (
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-12 max-w-2xl leading-relaxed">
            {item.description}
          </p>
        )}
        {/* Check if content is actually an array before mapping */}
        {Array.isArray(item.content) ? (
          <SubTimelineWrapper
            variant={item.title === "Present" ? "present" : "past"}
          >
            {item.content.map((role, idx) => (
              <SubRole
                key={idx}
                title={role.title}
                company={role.company}
                date={role.date}
                desc={role.desc}
              />
            ))}
          </SubTimelineWrapper>
        ) : (
          /* Fallback for when content is JSX or missing (like in your old defaultData) */
          item.content
        )}
      </div>
    ),
  }));
};

export const ExperienceTimeline = memo(function ExperienceTimeline({
  content,
}: {
  content?: ExperienceTimelineContent;
}) {
  // 1. Prioritize data from MDX (content.timeline)
  // 2. Fall back to default data if MDX is empty
  const rawData = content?.timeline || [];

  // 3. Convert that data into the format the UI Timeline expects
  const convertedData = useMemo(
    () => convertToTimelineData(rawData),
    [rawData]
  );

  return (
    <BackgroundBeamsWithCollision className="!h-auto !min-h-screen w-full items-start justify-start pt-20">
      <section className="w-full relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-4 text-center"
          >
            {content?.experienceTitle || "Work Experience"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} // Delay added for staggered effect
            className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed text-center mb-12"
          >
            {content?.experienceDescription ||
              "Specialized software engineering services tailored to bring your ideas to life with modern technologies and best practices."}
          </motion.p>
          {/* ... rest of your header section ... */}
        </div>

        <Timeline data={convertedData} />

        {/* ... Download CV section ... */}
      </section>
    </BackgroundBeamsWithCollision>
  );
});
