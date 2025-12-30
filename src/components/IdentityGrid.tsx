"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { TracingBeam } from "./ui/tracing-beam"; // Ensure this path is correct
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
  IconCamera,
  IconCloudCode,
} from "@tabler/icons-react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export function IdentityGrid() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Identity & Expertise
        </motion.h2>

        <BentoGrid className="max-w-6xl mx-auto md:grid-cols-3 md:auto-rows-[22rem] gap-4">
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
  <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.1] relative overflow-hidden group/edu">
    <TracingBeam className="px-6 h-full">
      <div className="flex flex-col justify-around h-full py-6 relative z-10 antialiased">
        {educationData.map((item) => (
          <div key={item.id} className="flex items-start gap-6 group mb-4">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-2 flex items-center justify-center shadow-sm z-20 relative transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <img src={item.logo} alt={item.school} className="w-full h-full object-contain" />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded w-fit mb-1">{item.year}</span>
              <h4 className="font-bold text-sm md:text-md text-neutral-800 dark:text-white leading-tight">{item.school}</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">{item.degree}</p>
              <p className="text-[10px] text-neutral-400 mt-1 hidden md:block italic">"{item.details}"</p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>

    {/* Background Pattern */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-0" />
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
    <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.1] flex-col items-center relative overflow-hidden group">
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-white dark:from-black to-transparent z-20" />
      <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white dark:from-black to-transparent z-20" />
      <div className="flex flex-col w-full px-4 z-10 animate-marquee-vertical group-hover:pause mt-4">
        {duplicatedItems.map((item, i) => (
          <CardTooltip key={i} className="w-full mb-3" content={
            <div className="text-center">
              <p className="font-bold text-sm text-neutral-900 dark:text-white">{item.name}</p>
              <p className="text-xs text-neutral-500">{item.desc}</p>
            </div>
          }>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-white/[0.1] hover:bg-white dark:hover:bg-neutral-800 transition-all w-full cursor-pointer">
              {React.cloneElement(item.icon as any, { className: "w-4 h-4" })}
              <span className="text-[11px] font-semibold text-neutral-700 dark:text-neutral-300">{item.name}</span>
            </div>
          </CardTooltip>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee-vertical { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .animate-marquee-vertical { animation: marquee-vertical 15s linear infinite; }
        .pause { animation-play-state: paused; }
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
  <div className="flex flex-1 w-full h-full items-center justify-center relative overflow-hidden group rounded-xl bg-white dark:bg-black border border-transparent dark:border-white/[0.1]">
    <div className="absolute inset-0 bg-dot-black/[0.1] dark:bg-dot-white/[0.1] z-0" />
    <div className="absolute left-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-20 h-full" />
    <div className="absolute right-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-20 h-full" />
    <div className="flex gap-6 z-10 animate-marquee-horizontal group-hover:pause">
      {[...techStack, ...techStack].map((tech, i) => (
        <CardTooltip key={i} className="shrink-0" content={
          <div className="flex flex-col items-center gap-1">
            <p className="font-bold text-sm text-neutral-900 dark:text-white">{tech.name}</p>
            <p className="text-[10px] text-neutral-500">{tech.desc}</p>
          </div>
        }>
          <div className="p-4 bg-gray-50/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-gray-200 dark:border-white/[0.1] rounded-2xl transition-all hover:bg-white dark:hover:bg-neutral-800">{tech.icon}</div>
        </CardTooltip>
      ))}
    </div>
    <style jsx global>{`
      @keyframes marquee-horizontal { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .animate-marquee-horizontal { animation: marquee-horizontal 25s linear infinite; }
    `}</style>
  </div>
);

const SkeletonLocation = () => (
  <div className="group flex flex-1 w-full h-full rounded-xl bg-neutral-100 dark:bg-neutral-900 flex-col items-center justify-center relative overflow-hidden border border-transparent dark:border-white/[0.1]">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127395.732442434!2d102.2131908866782!3d-3.805901306443694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b01f37e19035%3A0x3039d80b220cc30!2sBengkulu%20City%2C%20Bengkulu!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 dark:invert opacity-70 group-hover:opacity-100 scale-110 group-hover:scale-100 pointer-events-none" />
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50 group-hover:opacity-0 transition-opacity" />
    <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">Bengkulu, ID</div>
  </div>
);

const SkeletonConnect = () => (
  <div className="flex flex-1 w-full h-full rounded-xl bg-white dark:bg-black border border-neutral-200 dark:border-white/[0.1] flex-col items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.05] z-0" />
    <div className="flex gap-8 z-10">
      <SpringTooltip content="GitHub"><a href="https://github.com/Anjasfedo" target="_blank" className="block p-5 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/[0.1] hover:text-black dark:hover:text-white transition-all hover:scale-110 shadow-sm"><IconBrandGithub className="w-10 h-10" /></a></SpringTooltip>
      <SpringTooltip content="LinkedIn"><a href="#" target="_blank" className="block p-5 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/[0.1] hover:text-blue-600 transition-all hover:scale-110 shadow-sm"><IconBrandLinkedin className="w-10 h-10" /></a></SpringTooltip>
      <SpringTooltip content="Twitter"><a href="#" target="_blank" className="block p-5 rounded-2xl bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-white/[0.1] hover:text-sky-500 transition-all hover:scale-110 shadow-sm"><IconBrandTwitter className="w-10 h-10" /></a></SpringTooltip>
    </div>
  </div>
);

// ============================================================================
// --- GRID CONFIG ---
// ============================================================================
const items = [
  { title: "The Tech Stack", description: <span className="text-sm">Technologies I use to build scalable products.</span>, header: <SkeletonTech />, className: "md:col-span-3", icon: <IconCode className="h-4 w-4 text-neutral-500" /> },
  { title: "Location", description: <span className="text-sm">Bengkulu, ID.</span>, header: <SkeletonLocation />, className: "md:col-span-1", icon: <IconMapPin className="h-4 w-4 text-neutral-500" /> },
  { title: "Connect", description: <span className="text-sm">Let's build something together.</span>, header: <SkeletonConnect />, className: "md:col-span-2", icon: <IconSignature className="h-4 w-4 text-neutral-500" /> },
  { title: "Education", description: <span className="text-sm">My academic journey.</span>, header: <SkeletonEducation />, className: "md:col-span-2", icon: <IconSchool className="h-4 w-4 text-neutral-500" /> },
  { title: "Interests", description: <span className="text-sm">Current tinkering.</span>, header: <SkeletonInterests />, className: "md:col-span-1", icon: <IconBulb className="h-4 w-4 text-neutral-500" /> },
];

// ============================================================================
// --- TOOLTIPS ---
// ============================================================================
const CardTooltip = ({ children, content, className }: { children: React.ReactNode; content: React.ReactNode; className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={cn("relative inline-block", className)} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      <AnimatePresence>
        {isVisible && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute -top-20 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl rounded-lg p-3 w-40 text-center relative pointer-events-none">
              {content}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-neutral-900 border-b border-r border-neutral-200 dark:border-neutral-800 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

const SpringTooltip = ({ children, content }: { children: React.ReactNode; content: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), { stiffness: 100, damping: 5 });
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), { stiffness: 100, damping: 5 });
  return (
    <div className="relative inline-block" onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); x.set(0); }} onMouseMove={(e) => x.set(e.nativeEvent.offsetX - e.currentTarget.offsetWidth / 2)}>
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} style={{ translateX, rotate }} className="absolute -top-12 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-lg bg-black dark:bg-white z-50 shadow-xl px-4 py-2 font-bold text-white dark:text-black">
            {content}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};