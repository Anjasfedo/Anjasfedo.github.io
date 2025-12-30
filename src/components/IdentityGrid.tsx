"use client";
import React, { useMemo, memo } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import {
  IconCode,
  IconMapPin,
  IconSignature,
  IconSchool,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconActivity,
} from "@tabler/icons-react";
import { motion } from "motion/react";

// ============================================================================
// --- STATIC DATA ---
// ============================================================================

const educationData = [
  {
    id: 1,
    school: "University of Indonesia",
    degree: "B.S. Computer Science",
    year: "2019 - 2023",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=UI",
    details: "Focused on Web Architecture and Distributed Systems.",
  },
  {
    id: 2,
    school: "State Vocational School",
    degree: "Information Technology",
    year: "2016 - 2019",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=School",
    details: "Learned the fundamentals of networking and algorithm logic.",
  },
] as const;

const techStack = [
  {
    id: 1,
    name: "React",
    designation: "UI Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Next.js",
    designation: "Fullstack Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Type Safety",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "Styling",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    id: 5,
    name: "Laravel",
    designation: "Backend",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "Docker",
    designation: "Deployment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: 8,
    name: "Node.js",
    designation: "Runtime",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
] as const;

const connectItems = [
  {
    id: 1,
    name: "GitHub",
    designation: "Open Source",
    icon: <IconBrandGithub className="h-6 w-6" />,
    image: "",
  },
  {
    id: 2,
    name: "LinkedIn",
    designation: "Professional",
    icon: <IconBrandLinkedin className="h-6 w-6" />,
    image: "",
  },
  {
    id: 3,
    name: "Twitter",
    designation: "Updates",
    icon: <IconBrandTwitter className="h-6 w-6" />,
    image: "",
  },
] as const;

// ============================================================================
// --- MEMOIZED SKELETON COMPONENTS ---
// ============================================================================

// 1. UPDATED EDUCATION SKELETON (Indigo/Purple Gradient)
const SkeletonEducation = memo(() => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-neutral-200 dark:border-white/10 relative overflow-hidden group/edu">
    <div className="px-3 md:px-6 h-full flex flex-col justify-center py-4 md:py-6 relative z-10 antialiased">
      {educationData.map((item) => (
        <div
          key={item.id}
          className="flex items-start gap-3 md:gap-6 group mb-3 md:mb-4"
        >
          <div className="relative shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1.5 md:p-2 flex items-center justify-center shadow-sm z-20 relative transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <img
                src={item.logo}
                alt={item.school}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[9px] md:text-[10px] font-bold text-blue-500 bg-blue-500/10 px-1.5 md:px-2 py-0.5 rounded w-fit mb-1">
              {item.year}
            </span>
            <h4 className="font-bold text-xs md:text-sm lg:text-md text-neutral-800 dark:text-white leading-tight">
              {item.school}
            </h4>
            <p className="text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 font-medium">
              {item.degree}
            </p>
            <p className="text-[9px] md:text-[10px] text-neutral-400 mt-1 italic">
              "{item.details}"
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute top-0 right-0 w-32 h-32 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] z-0" />
  </div>
));
SkeletonEducation.displayName = "SkeletonEducation";

// 2. UPDATED TECH STACK SKELETON (Slate/Gray Gradient)
const SkeletonTech = memo(() => (
  <div className="flex flex-1 w-full h-full items-center justify-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-50 to-neutral-50 dark:from-slate-950/30 dark:to-neutral-950/30 border border-neutral-200 dark:border-white/10">
    <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1] z-0" />
    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 z-10 w-full">
      <AnimatedTooltip items={techStack} />
    </div>
  </div>
));
SkeletonTech.displayName = "SkeletonTech";

const SkeletonLocation = memo(() => (
  <div className="group flex flex-1 w-full h-full rounded-xl bg-neutral-100 dark:bg-neutral-900 flex-col items-center justify-center relative overflow-hidden border border-neutral-200 dark:border-white/10 min-h-48 md:min-h-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127395.732442434!2d102.2131908866782!3d-3.805901306443694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b01f37e19035%3A0x3039d80b220cc30!2sBengkulu%20City%2C%20Bengkulu!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 dark:invert opacity-70 group-hover:opacity-100 scale-110 group-hover:scale-100 pointer-events-none"
    />
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50 group-hover:opacity-0 transition-opacity" />
    <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-20 px-2 md:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
      Bengkulu, ID
    </div>
  </div>
));
SkeletonLocation.displayName = "SkeletonLocation";

const SkeletonConnect = memo(() => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-neutral-200 dark:border-white/10 flex-col items-center justify-center p-3 md:p-4 relative">
    {/* Contained Background Pattern */}
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] z-0" />
    </div>
    {/* Uncontained Tooltips */}
    <div className="flex flex-row items-center justify-center w-full z-10">
      <AnimatedTooltip items={connectItems} />
    </div>
  </div>
));
SkeletonConnect.displayName = "SkeletonConnect";

// 3. UPDATED STATUS SKELETON (Emerald/Green Gradient)
const SkeletonStatus = memo(() => (
  <div className="group flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 border border-neutral-200 dark:border-white/10 flex-col items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1] z-0" />
    <div className="z-10 flex flex-col items-center gap-3 md:gap-4 relative">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-12 h-12 bg-emerald-500/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute w-12 h-12 bg-emerald-500/10 rounded-full" />
        <div className="relative w-4 h-4 bg-emerald-500 rounded-full border-[3px] border-white dark:border-black shadow-sm" />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-md md:text-lg text-neutral-800 dark:text-neutral-100 mb-1">
          Available for Work
        </h3>
        <p className="text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 max-w-[150px] mx-auto leading-relaxed">
          Accepting new projects & contracts.
        </p>
      </div>
      <a
        href="mailto:hello@example.com"
        className="mt-1 px-4 py-1.5 rounded-full bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm text-neutral-600 dark:text-neutral-300 text-[10px] md:text-xs font-bold border border-neutral-200 dark:border-neutral-800 transition-all hover:scale-105 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 shadow-sm"
      >
        Hire Me
      </a>
    </div>
  </div>
));
SkeletonStatus.displayName = "SkeletonStatus";

// ============================================================================
// --- MAIN IDENTITY GRID COMPONENT ---
// ============================================================================

export const IdentityGrid = memo(function IdentityGrid() {
  const items = useMemo(
    () => [
      {
        title: "The Tech Stack",
        description: (
          <span className="text-xs md:text-sm">
            Technologies I use to build scalable products.
          </span>
        ),
        header: <SkeletonTech />,
        className: "md:col-span-3",
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Location",
        description: <span className="text-xs md:text-sm">Bengkulu, ID.</span>,
        header: <SkeletonLocation />,
        className: "md:col-span-1",
        icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Connect",
        description: (
          <span className="text-xs md:text-sm">
            Let's build something together.
          </span>
        ),
        header: <SkeletonConnect />,
        className: "md:col-span-2",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Education",
        description: (
          <span className="text-xs md:text-sm">My academic journey.</span>
        ),
        header: <SkeletonEducation />,
        className: "md:col-span-2",
        icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: "Status",
        description: (
          <span className="text-xs md:text-sm">Current availability.</span>
        ),
        header: <SkeletonStatus />,
        className: "md:col-span-1 h-[300px] md:h-full",
        icon: <IconActivity className="h-4 w-4 text-neutral-500" />,
      },
    ],
    []
  );

  return (
    <div className="relative min-h-fit !h-auto bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <section className="py-12 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 text-center"
          >
            Identity & Expertise
          </motion.h2>

          <BentoGrid className="max-w-6xl mx-auto grid-cols-1 md:grid-cols-3 md:auto-rows-[20rem] lg:auto-rows-[22rem] gap-3 md:gap-4">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={cn(item.className)}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </section>
    </div>
  );
});
