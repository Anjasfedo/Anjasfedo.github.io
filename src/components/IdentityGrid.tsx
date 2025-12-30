"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { LinkPreview } from "./ui/link-preview";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
  IconCode,
  IconMapPin,
  IconSignature,
  IconSchool,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function IdentityGrid() {
  return (
    <div className="relative min-h-fit !h-auto bg-white dark:bg-black">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
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
    <div className="px-3 md:px-6 h-full flex flex-col justify-center py-4 md:py-6 relative z-10 antialiased">
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
  { quote: "Rust", name: "Systems Programming", title: "Memory-safe systems programming" },
  { quote: "AI Agents", name: "Autonomous LLMs", title: "Building autonomous AI systems" },
  { quote: "Local First", name: "Offline Sync", title: "Offline-first application architecture" },
  { quote: "Python", name: "Automation", title: "Scripting and automation workflows" },
  { quote: "Gaming", name: "Strategy Games", title: "Strategy and simulation games" },
  { quote: "Cloud", name: "Infrastructure", title: "Cloud infrastructure management" },
];

const SkeletonInterests = () => {
  return (
    <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/10 flex-col items-center justify-center relative overflow-hidden group">
      <InfiniteMovingCards
        items={interestItems}
        direction="left"
        speed="slow"
        pauseOnHover={true}
        className="w-full"
      />
    </div>
  );
};

// ============================================================================
// --- REMAINING SKELETONS (Tech Stack, Location, Connect) ---
// ============================================================================

const techStack = [
  { quote: "React", name: "UI Library", title: "Building modern user interfaces" },
  { quote: "Next.js", name: "Fullstack Framework", title: "React framework for production" },
  { quote: "TypeScript", name: "Type Safety", title: "Typed JavaScript at scale" },
  { quote: "Tailwind", name: "Styling", title: "Utility-first CSS framework" },
  { quote: "Laravel", name: "Backend", title: "Elegant PHP framework" },
  { quote: "PostgreSQL", name: "Database", title: "Powerful open source database" },
  { quote: "Docker", name: "Deployment", title: "Container platform for apps" },
  { quote: "Node.js", name: "Runtime", title: "JavaScript runtime environment" },
];

const SkeletonTech = () => (
  <div className="flex flex-1 w-full h-full items-center justify-center relative overflow-hidden group rounded-xl bg-white dark:bg-black border border-transparent dark:border-white/10">
    <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1] z-0" />
    <div className="absolute left-0 w-8 md:w-16 bg-linear-to-r from-white dark:from-black to-transparent z-20 h-full" />
    <div className="absolute right-0 w-8 md:w-16 bg-linear-to-l from-white dark:from-black to-transparent z-20 h-full" />
    <InfiniteMovingCards
      items={techStack}
      direction="left"
      speed="fast"
      pauseOnHover={true}
      className="w-full"
    />
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
      <LinkPreview url="https://github.com/Anjasfedo" className="p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:text-black dark:hover:text-white transition-all hover:scale-110 shadow-sm cursor-pointer">
        <IconBrandGithub className="w-6 h-6 md:w-8 md:h-8" />
      </LinkPreview>

      <LinkPreview url="https://linkedin.com" className="p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:text-blue-600 transition-all hover:scale-110 shadow-sm cursor-pointer">
        <IconBrandLinkedin className="w-6 h-6 md:w-8 md:h-8" />
      </LinkPreview>

      <LinkPreview url="https://twitter.com" className="p-3 md:p-4 rounded-xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/10 hover:text-sky-500 transition-all hover:scale-110 shadow-sm cursor-pointer">
        <IconBrandTwitter className="w-6 h-6 md:w-8 md:h-8" />
      </LinkPreview>
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