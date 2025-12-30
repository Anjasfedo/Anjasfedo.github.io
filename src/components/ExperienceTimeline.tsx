"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  const data = [
    {
      title: "Present",
      content: (
        <div className="flex flex-col">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-12 max-w-2xl leading-relaxed">
            I am currently managing a multi-faceted career path, balancing enterprise-level
            frontend engineering with specialized freelance consulting and open-source contributions.
          </p>
          <SubTimelineWrapper variant="present">
            <SubRole title="Senior Frontend Engineer" company="Tech Innovations Inc." date="2025 - Present" desc="Leading architecture and frontend strategy." />
            <SubRole title="Full Stack Freelancer" company="Independent" date="2024 - Present" desc="Specialized in Local-First synchronization." />
            <SubRole title="Open Source Maintainer" company="GitHub" date="2023 - Present" desc="Maintaining high-performance UI libraries." />
          </SubTimelineWrapper>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col">
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-12 max-w-2xl leading-relaxed">
            A high-growth period where I balanced agency leadership with specialized FinTech
            consulting projects from 2021 through 2024.
          </p>
          <SubTimelineWrapper variant="past">
            <SubRole title="Lead Web Developer" company="Creative Agency" date="2022 - 2024" desc="Managed a team of 5 developers for high-traffic media sites." />
            <SubRole title="UI/UX Consultant" company="FinTech Solutions" date="2021 - 2024" desc="Designed systems for global banking dashboards." />
          </SubTimelineWrapper>
        </div>
      ),
    },
    {
      title: "Early 2021",
      content: (
        <div className="pb-20">
          <h4 className="text-lg font-bold dark:text-white mb-2">Junior Developer</h4>
          <p className="text-neutral-600 dark:text-neutral-400">StartupXYZ • Jan 2021 - Dec 2022</p>
          <p className="mt-4 text-sm dark:text-neutral-300">Foundational years learning full-stack basics and agile development.</p>
        </div>
      ),
    },
  ];

  return (
    <BackgroundBeamsWithCollision className="!h-auto !min-h-screen w-full items-start justify-start pt-20">
      <section className="w-full relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 text-center"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-12 md:mb-16 text-center"
          >
            My professional journey through tech, from open source contributions to
            leading frontend teams.
          </motion.p>
        </div>
        <Timeline data={data} />
      </section>
    </BackgroundBeamsWithCollision>
  );
}

const SubTimelineWrapper = ({ children, variant }: { children: React.ReactNode, variant: "present" | "past" }) => {
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
      <div className="flex flex-col gap-20 relative z-20">
        {children}
      </div>
    </div>
  );
};

const SubRole = ({ title, company, date, desc }: any) => {
  return (
    <div className="relative pl-8 md:pl-0 group">
      <motion.div
        initial={{ scale: 0.8, backgroundColor: "#d1d5db" }}
        whileInView={{
          scale: 1.1,
          backgroundColor: "#3b82f6",
          boxShadow: "0px 0px 12px rgba(59, 130, 246, 0.6)"
        }}
        viewport={{ amount: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute left-[-5px] md:left-[-45px] top-2 w-3.5 h-3.5 rounded-full z-30 border-2 border-white dark:border-neutral-950 transition-transform group-hover:scale-125 shadow-sm"
      />
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{date}</span>
        <h4 className="text-xl font-bold dark:text-white leading-none">{title}</h4>
        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">{company}</p>
        <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-500 mt-3 max-w-xl leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};