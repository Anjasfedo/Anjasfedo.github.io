"use client";
import React, { useMemo, memo } from "react";
import { cn } from "@/lib/utils";
import {
  IconCode,
  IconMapPin,
  IconSignature,
  IconSchool,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCoffee,
  IconCloud,
  IconDeviceDesktop,
  IconDeviceGamepad2,
  IconCamera,
  IconActivity,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { LinkPreview } from "../ui/link-preview";

// ============================================================================
// --- TYPES & INTERFACES ---
// ============================================================================

interface EducationItem {
  id: number;
  school: string;
  degree: string;
  year: string;
  logo: string;
  details: string;
}

interface TechStackItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface LocationItem {
  label: string;
  country: string;
  city: string;
  mapEmbedUrl: string;
}

interface ConnectItem {
  id: number;
  name: string;
  designation: string;
  icon: string;
  url: string;
}

interface InterestItem {
  id: number;
  label: string;
  color: string;
  icon: string;
}

interface IdentityGridContent {
  identityGridTitle?: string;
  techStackTitle?: string;
  techStackDescription?: string;
  locationTitle?: string;
  locationDescription?: string;
  connectTitle?: string;
  connectDescription?: string;
  educationTitle?: string;
  educationDescription?: string;
  interestsTitle?: string;
  interestsDescription?: string;
  education?: EducationItem[];
  techStack?: TechStackItem[];
  location?: LocationItem;
  connect?: ConnectItem[];
  interests?: InterestItem[];
}

// ============================================================================
// --- SUB-COMPONENTS ---
// ============================================================================

// Icon mapping helper
const iconMap: Record<string, React.ReactElement> = {
  IconBrandGithub: <IconBrandGithub className="h-6 w-6" />,
  IconBrandLinkedin: <IconBrandLinkedin className="h-6 w-6" />,
  IconBrandTwitter: <IconBrandTwitter className="h-6 w-6" />,
  IconCloud: <IconCloud />,
  IconDeviceDesktop: <IconDeviceDesktop />,
  IconCoffee: <IconCoffee />,
  IconCamera: <IconCamera />,
  IconDeviceGamepad2: <IconDeviceGamepad2 />,
  IconSignature: <IconSignature />,
  IconMapPin: <IconMapPin />,
  IconActivity: <IconActivity />,
  IconBrandInstagram: <IconBrandInstagram />,
  IconMail: <IconMail />,
};

const getIconComponent = (iconName: string): React.ReactElement => {
  return iconMap[iconName] || null;
};

const MarqueeContainer = ({
  children,
  className,
  direction = "up",
  speed = "normal",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
}) => {
  const duration =
    speed === "fast" ? "20s" : speed === "normal" ? "40s" : "60s";

  return (
    <div className={cn("relative h-64 overflow-hidden w-full p-4", className)}>
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-neutral-900 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-neutral-900 to-transparent z-20 pointer-events-none" />
      <div
        className={cn(
          "flex flex-col",
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        )}
        style={{ animationDuration: duration }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

const SkeletonEducation = memo(
  ({ educationData }: { educationData: EducationItem[] }) => (
    // FIXED: Changed min-h-[300px] to min-h-[180px] md:min-h-[300px] to reduce mobile height
    <div className="flex flex-1 w-full h-full  rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-neutral-200 dark:border-white/10 relative overflow-hidden group/edu">
      <MarqueeContainer className="px-3 md:px-6 py-4" speed="slow">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 md:gap-6 group mb-6 md:mb-8 last:mb-6"
          >
            <div className="relative shrink-0">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-1.5 md:p-2 flex items-center justify-center shadow-sm z-20 relative transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                <img
                  src={item.logo}
                  alt={item.school}
                  className="w-full h-full object-contain"
                />
              </div>
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
              <p className="text-[9px] md:text-[10px] text-neutral-400 mt-1 italic leading-relaxed">
                "{item.details}"
              </p>
            </div>
          </div>
        ))}
      </MarqueeContainer>
    </div>
  )
);
SkeletonEducation.displayName = "SkeletonEducation";

const SkeletonInterests = memo(
  ({ interestsData }: { interestsData: InterestItem[] }) => {
    const rawInterests = interestsData.map((interest) => ({
      ...interest,
      icon: getIconComponent(interest.icon),
    }));

    return (
      // FIXED: Added min-h-[180px] md:min-h-[300px] here as well
      <div className="group flex flex-1 w-full h-full  rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-neutral-200 dark:border-white/10 relative overflow-hidden">
        <MarqueeContainer
          className="px-3 md:px-6 py-4"
          direction="up"
          speed="slow"
        >
          {/* FIXED: Changed grid-cols-1 to grid-cols-2 on mobile so items pack tighter vertically */}
          <div className="grid grid-cols-2 gap-3 pb-3 items-center">
            {rawInterests.map((interest) => (
              <motion.div
                key={interest.id}
                whileHover={{ scale: 1.05 }}
                className="relative group/interest cursor-pointer"
              >
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm hover:border-amber-500/50 hover:bg-white dark:hover:bg-neutral-800 transition-all">
                  <div className={cn("shrink-0 scale-90", interest.color)}>
                    {interest.icon}
                  </div>
                  <span className="text-[10px] font-bold dark:text-neutral-300 text-neutral-700 truncate">
                    {interest.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </MarqueeContainer>
      </div>
    );
  }
);
SkeletonInterests.displayName = "SkeletonInterests";

const SkeletonTech = memo(({ techStack }: { techStack: TechStackItem[] }) => (
  <div className="flex flex-1 w-full h-full items-center justify-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-50 to-neutral-50 dark:from-slate-950/30 dark:to-neutral-950/30 border border-neutral-200 dark:border-white/10 relative">
    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 z-10 w-full">
      <AnimatedTooltip items={techStack} />
    </div>
  </div>
));
SkeletonTech.displayName = "SkeletonTech";

const SkeletonLocation = memo(
  ({ locationData }: { locationData: LocationItem }) => (
    <div className="group flex flex-1 w-full h-full rounded-xl bg-neutral-100 dark:bg-neutral-900 flex-col items-center justify-center relative overflow-hidden border border-neutral-200 dark:border-white/10 transition-all duration-300">
      <iframe
        src={locationData.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 grayscale group-hover:grayscale-0 dark:invert opacity-70 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all duration-700 ease-in-out pointer-events-none"
      />

      {/* Gradient overlay that disappears on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent dark:from-black/50 group-hover:opacity-0 transition-opacity duration-500" />

      {/* Map Pin Overlay */}
      <div className="relative z-20 flex flex-col items-center gap-1 group-hover:scale-110 transition-transform duration-300">
        <div className="relative">
          {/* Animated Ping Effect */}
          <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75 scale-150" />

          <div className="relative bg-blue-600 p-0.5 rounded-full shadow-lg border border-white/20">
            <IconMapPin className="w-5 h-5 text-white" stroke={2.5} />
          </div>
        </div>
      </div>
    </div>
  )
);
SkeletonLocation.displayName = "SkeletonLocation";

const SkeletonConnect = memo(
  ({ connectData }: { connectData: ConnectItem[] }) => {
    return (
      <div className="flex flex-1 w-full h-full rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-neutral-200 dark:border-white/10 flex-col items-center justify-center p-3 md:p-4 min-h-32 md:min-h-0">
        <div className="flex flex-row items-center justify-center w-full z-10 gap-4">
          {connectData.map((item) => (
            <div
              key={item.id}
              className="relative group/parent flex flex-col items-center"
            >
              <LinkPreview
                url={item.url}
                className="group/connect relative flex items-center justify-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="relative">
                  <div className="p-3 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm hover:border-blue-500/50 hover:bg-white dark:hover:bg-neutral-800 transition-all cursor-pointer">
                    <div className="text-neutral-700 dark:text-neutral-300">
                      {getIconComponent(item.icon)}
                    </div>
                  </div>
                </motion.div>
              </LinkPreview>

              {/* Bottom Tooltip Label 
                  1. Removed pointer-events-none to allow clicking/highlighting
                  2. Added pt-2 (padding top) to act as an invisible bridge between the icon and tooltip
              */}
              <div className="absolute top-full pt-2 opacity-0 group-hover/parent:opacity-100 transition-all duration-300 z-50 transform translate-y-1 group-hover/parent:translate-y-0">
                <div className="relative px-2 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-xl">
                  {/* Optional: Small triangle/arrow pointing up */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white dark:bg-neutral-800 border-l border-t border-neutral-200 dark:border-neutral-700 rotate-45" />

                  <p className="relative z-10 text-[10px] font-bold text-gray-900 dark:text-white whitespace-nowrap select-all">
                    {item.designation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
SkeletonConnect.displayName = "SkeletonConnect";

export const IdentityGrid = memo(function IdentityGrid({
  content,
}: {
  content?: IdentityGridContent;
}) {
  const educationData = content?.education || [];
  const techStackData = content?.techStack || [];

  // Default location data
  const defaultLocation: LocationItem = {
    label: "Bengkulu, ID",
    country: "Indonesia",
    city: "Bengkulu",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.54582046892!2d102.22728989531553!3d-3.818921124619567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b0204739506b%3A0x401e8f1fc28c110!2sBengkulu%2C%20Bengkulu%20City%2C%20Bengkulu!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid",
  };

  const locationData = content?.location || defaultLocation;
  const connectData = content?.connect || [];
  const interestsData = content?.interests || [];

  const items = useMemo(
    () => [
      {
        title: content?.techStackTitle || "The Tech Stack",
        description:
          content?.techStackDescription ||
          "Technologies I use to build scalable products.",
        header: <SkeletonTech techStack={techStackData} />,
        className: "md:col-span-3",
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: content?.locationTitle || "Location",
        description: content?.locationDescription || "Indonesia, Bengkulu.",
        header: <SkeletonLocation locationData={locationData} />,
        className: "md:col-span-1",
        icon: <IconMapPin className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: content?.connectTitle || "Connect",
        description:
          content?.connectDescription || "Let's build something together.",
        header: <SkeletonConnect connectData={connectData} />,
        className: "md:col-span-2",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: content?.educationTitle || "Education",
        description: content?.educationDescription || "My academic journey.",
        header: <SkeletonEducation educationData={educationData} />,
        className: "md:col-span-2",
        icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
      },
      {
        title: content?.interestsTitle || "Interests",
        description:
          content?.interestsDescription || "What drives my curiosity.",
        header: <SkeletonInterests interestsData={interestsData} />,
        className: "md:col-span-1",
        icon: <IconCoffee className="h-4 w-4 text-neutral-500" />,
      },
    ],
    [
      content,
      educationData,
      techStackData,
      locationData,
      connectData,
      interestsData,
    ]
  );

  return (
    <div className="relative min-h-fit !h-auto bg-white dark:bg-black z-0">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      <section className="py-12 md:py-20 relative z-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-12 text-center"
          >
            {content?.identityGridTitle || "Identity & Expertise"}
          </motion.h2>
          <BentoGrid className="max-w-6xl mx-auto gap-4">
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
