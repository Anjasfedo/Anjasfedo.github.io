"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import {
  IconCode,
  IconMapPin,
  IconSignature,
  IconSchool,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandLaravel,
  IconBrandDocker,
  IconBrandNodejs,
  IconDatabase,
  IconCpu,
  IconBrandRust,
  IconAtom,
  IconBrandPython,
  IconDeviceGamepad2,
  IconCloudCode,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function IdentityGrid() {
  return (
    <div className="relative min-h-fit !h-auto bg-white dark:bg-black">
      <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />
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
}

// ============================================================================
// --- SKELETON: EDUCATION (Row 3: Col 1-2 with Tracing Beam) ---
// ============================================================================
const educationData = [
  {
    id: 1,
    school: "University of Indonesia",
    degree: "B.S. Computer Science",
    year: "2019 - 2023",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=UI",
    details: "Focused on Web Architecture and Distributed Systems."
  },
  {
    id: 2,
    school: "State Vocational School",
    degree: "Information Technology",
    year: "2016 - 2019",
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=School",
    details: "Learned the fundamentals of networking and algorithm logic."
  },
];

const SkeletonEducation = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/10 relative overflow-hidden group/edu">
    <div className="px-3 md:px-6 h-full flex flex-col justify-around py-4 md:py-6 relative z-10 antialiased">
      {educationData.map((item) => (
        <div key={item.id} className="flex items-start gap-3 md:gap-6 group mb-3 md:mb-4">
          <div className="relative shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1.5 md:p-2 flex items-center justify-center shadow-sm z-20 relative transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
              <img src={item.logo} alt={item.school} className="w-full h-full object-contain" />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[9px] md:text-[10px] font-bold text-blue-500 bg-blue-500/10 px-1.5 md:px-2 py-0.5 rounded w-fit mb-1">{item.year}</span>
            <h4 className="font-bold text-xs md:text-sm lg:text-md text-neutral-800 dark:text-white leading-tight">{item.school}</h4>
            <p className="text-[10px] md:text-xs text-neutral-500 dark:text-neutral-400 font-medium">{item.degree}</p>
            <p className="text-[9px] md:text-[10px] text-neutral-400 mt-1 italic">"{item.details}"</p>
          </div>
        </div>
      ))}
    </div>

    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] z-0" />
  </div>
);

// ============================================================================
// --- SKELETON: INTERESTS (Vertical Scroll) ---
// ============================================================================
const interestItems = [
  { name: "Rust", desc: "Systems Programming", icon: <IconBrandRust className="text-orange-500" /> },
  { name: "AI Agents", desc: "Autonomous LLMs", icon: <IconCpu className="text-purple-500" /> },
  { name: "Local First", desc: "Offline Sync", icon: <IconAtom className="text-blue-500" /> },
  { name: "Python", desc: "Automation", icon: <IconBrandPython className="text-yellow-500" /> },
  { name: "Gaming", desc: "Strategy Games", icon: <IconDeviceGamepad2 className="text-red-500" /> },
  { name: "Cloud", desc: "Infrastructure", icon: <IconCloudCode className="text-sky-500" /> },
];

const SkeletonInterests = () => {
  const duplicatedItems = [...interestItems, ...interestItems];
  return (
    <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/10 flex-col items-center relative overflow-hidden group">
      <div className="absolute top-0 inset-x-0 h-6 md:h-10 bg-linear-to-b from-white dark:from-black to-transparent z-20" />
      <div className="absolute bottom-0 inset-x-0 h-6 md:h-10 bg-linear-to-t from-white dark:from-black to-transparent z-20" />
      <div className="flex flex-col w-full px-2 md:px-4 z-10 animate-marquee-vertical mt-1 md:mt-4">
        {duplicatedItems.map((item, i) => (
          <CardTooltip key={i} className="w-full mb-1.5 md:mb-3" content={
            <div className="text-center">
              <p className="font-bold text-xs md:text-sm text-neutral-900 dark:text-white">{item.name}</p>
              <p className="text-[10px] md:text-xs text-neutral-500">{item.desc}</p>
            </div>
          }>
            <div className="flex items-center gap-2 md:gap-3 p-1.5 md:p-3 rounded-xl bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 transition-all w-full cursor-pointer">
              {React.cloneElement(item.icon as any, { className: "w-3 h-3 md:w-4 md:h-4" })}
              <span className="text-[9px] md:text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">{item.name}</span>
            </div>
          </CardTooltip>
        ))}
      </div>
      <style>{`
        @keyframes marquee-vertical { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .animate-marquee-vertical { animation: marquee-vertical 15s linear infinite; }
      `}</style>
    </div>
  );
};

// ============================================================================
// --- REMAINING SKELETONS (Tech Stack, Location, Connect) ---
// ============================================================================

const techStack = [
  { name: "React", desc: "UI Library", icon: <IconBrandReact className="w-8 h-8 text-cyan-400" /> },
  { name: "Next.js", desc: "Fullstack Framework", icon: <IconBrandNextjs className="w-8 h-8 text-black dark:text-white" /> },
  { name: "TypeScript", desc: "Type Safety", icon: <IconBrandTypescript className="w-8 h-8 text-blue-500" /> },
  { name: "Tailwind", desc: "Styling", icon: <IconBrandTailwind className="w-8 h-8 text-cyan-500" /> },
  { name: "Laravel", desc: "Backend", icon: <IconBrandLaravel className="w-8 h-8 text-red-500" /> },
  { name: "PostgreSQL", desc: "Database", icon: <IconDatabase className="w-8 h-8 text-blue-400" /> },
  { name: "Docker", desc: "Deployment", icon: <IconBrandDocker className="w-8 h-8 text-blue-600" /> },
  { name: "Node.js", desc: "Runtime", icon: <IconBrandNodejs className="w-8 h-8 text-green-500" /> },
];

const SkeletonTech = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center relative overflow-hidden group rounded-xl bg-white dark:bg-black border border-transparent dark:border-white/10">
    <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1] z-0" />
    <div className="absolute left-0 w-8 md:w-16 bg-linear-to-r from-white dark:from-black to-transparent z-20 h-full" />
    <div className="absolute right-0 w-8 md:w-16 bg-linear-to-l from-white dark:from-black to-transparent z-20 h-full" />
    <div className="flex gap-3 md:gap-6 z-10 animate-marquee-horizontal">
      {[...techStack, ...techStack].map((tech, i) => (
        <CardTooltip key={i} className="shrink-0" content={
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold text-xs md:text-sm text-neutral-900 dark:text-white">{tech.name}</p>
            <p className="text-[9px] md:text-[10px] text-neutral-500">{tech.desc}</p>
          </div>
        }>
          <div className="p-2 md:p-4 bg-gray-50/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl md:rounded-2xl transition-all hover:bg-white dark:hover:bg-neutral-800">
            {React.cloneElement(tech.icon as any, { className: "w-5 h-5 md:w-8 md:h-8" })}
          </div>
        </CardTooltip>
      ))}
    </div>
    <style>{`
      @keyframes marquee-horizontal { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .animate-marquee-horizontal { animation: marquee-horizontal 25s linear infinite; }
    `}</style>
  </div>
);

const SkeletonLocation = () => (
  <div className="group flex flex-1 w-full h-full rounded-xl bg-neutral-100 dark:bg-neutral-900 flex-col items-center justify-center relative overflow-hidden border border-transparent dark:border-white/10 min-h-48 md:min-h-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127395.732442434!2d102.2131908866782!3d-3.805901306443694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b01f37e19035%3A0x3039d80b220cc30!2sBengkulu%20City%2C%20Bengkulu!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 dark:invert opacity-70 group-hover:opacity-100 scale-110 group-hover:scale-100 pointer-events-none"
    />
    <div className="absolute inset-0 z-10 bg-linear-to-t from-white/50 via-transparent to-transparent dark:from-black/50 group-hover:opacity-0 transition-opacity" />
    <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-20 px-2 md:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">Bengkulu, ID</div>
  </div>
);

const SkeletonConnect = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/10 flex-col items-center justify-center p-3 md:p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] z-0" />
    <div className="flex gap-4 md:gap-6 z-10 flex-wrap justify-center">
      <a
        href="https://github.com/Anjasfedo"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:text-black dark:hover:text-white transition-all hover:scale-110 shadow-sm cursor-pointer"
      >
        <IconBrandGithub className="w-6 h-6 md:w-8 md:h-8" />
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:text-blue-600 transition-all hover:scale-110 shadow-sm cursor-pointer"
      >
        <IconBrandLinkedin className="w-6 h-6 md:w-8 md:h-8" />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:text-sky-500 transition-all hover:scale-110 shadow-sm cursor-pointer"
      >
        <IconBrandTwitter className="w-6 h-6 md:w-8 md:h-8" />
      </a>
    </div>
  </div>
);

// ============================================================================
// --- GRID CONFIG ---
// ============================================================================
const items = [
  { title: "The Tech Stack", description: <span className="text-xs md:text-sm">Technologies I use to build scalable products.</span>, header: <SkeletonTech />, className: "md:col-span-3 ", icon: <IconCode className="h-4 w-4 text-neutral-500" /> },
  { title: "Location", description: <span className="text-xs md:text-sm">Bengkulu, ID.</span>, header: <SkeletonLocation />, className: "md:col-span-1", icon: <IconMapPin className="h-4 w-4 text-neutral-500" /> },
  { title: "Connect", description: <span className="text-xs md:text-sm">Let's build something together.</span>, header: <SkeletonConnect />, className: "md:col-span-2", icon: <IconSignature className="h-4 w-4 text-neutral-500" /> },
  { title: "Education", description: <span className="text-xs md:text-sm">My academic journey.</span>, header: <SkeletonEducation />, className: "md:col-span-2", icon: <IconSchool className="h-4 w-4 text-neutral-500" /> },
  { title: "Interests", description: <span className="text-xs md:text-sm">Current tinkering.</span>, header: <SkeletonInterests />, className: "md:col-span-1 h-[300px] md:h-full", icon: <IconBulb className="h-4 w-4 text-neutral-500" /> },
];

// ============================================================================
// --- TOOLTIPS ---
// ============================================================================
const CardTooltip = ({ children, content, className }: { children: React.ReactNode; content: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("relative inline-block group", className)}>
      <div className="absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden md:block">
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl rounded-lg p-2 md:p-3 w-36 md:w-40 text-center relative">
          {content}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-neutral-900 border-b border-r border-neutral-200 dark:border-neutral-800 rotate-45" />
        </div>
      </div>
      {children}
    </div>
  );
};