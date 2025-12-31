"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import {
  IconBrandReact,
  IconServer,
  IconDeviceDesktop,
  IconPalette,
  IconSpeedboat,
  IconCode,
  IconApi,
  IconAppWindow,
} from "@tabler/icons-react";

// ============================================================================
// --- TYPES & INTERFACES ---
// ============================================================================

interface ServiceItem {
  title: string;
  description: string;
  icon: string; // Icon name as string
}

interface ServicesSectionContent {
  servicesTitle: string;
  servicesDescription: string;
  services?: ServiceItem[];
}

// ============================================================================
// --- ICON MAPPING ---
// ============================================================================

const iconMap: Record<string, React.ReactNode> = {
  IconBrandReact: <IconBrandReact className="w-8 h-8" />,
  IconServer: <IconServer className="w-8 h-8" />,
  IconDeviceDesktop: <IconDeviceDesktop className="w-8 h-8" />,
  IconPalette: <IconPalette className="w-8 h-8" />,
  IconSpeedboat: <IconSpeedboat className="w-8 h-8" />,
  IconCode: <IconCode className="w-8 h-8" />,
  IconApi: <IconApi className="w-8 h-8" />,
  IconAppWindow: <IconAppWindow className="w-8 h-8" />,
};

// ============================================================================
// --- DEFAULT DATA ---
// ============================================================================

export function ServicesSection({
  content,
}: {
  content?: ServicesSectionContent;
}) {
  // Use content from props or fall back to defaults
  const servicesData = content?.services || [];

  // Convert service items to include actual icon components
  const services = servicesData.map((service) => ({
    ...service,
    icon: iconMap[service.icon] || iconMap.IconCode,
  }));

  return (
    <AuroraBackground showRadialGradient={true} className="min-h-fit !h-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 md:mb-4 text-center"
          >
            {content?.servicesTitle || "Our Services"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }} // Delay added for staggered effect
            className="text-neutral-600 dark:text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed text-center mb-12"
          >
            {content?.servicesDescription ||
              "Specialized web development services tailored to bring your ideas to life with modern technologies and best practices."}
          </motion.p>
        </motion.div>

        {/* Grid is kept standard, AuroraBackground handles the container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-neutral-200 dark:border-neutral-800 md:border-t">
          {services.map((service, index) => (
            <Service key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
}

const Service = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      // Updated className:
      // 1. Added 'items-center text-center' for mobile, 'lg:items-start lg:text-left' for desktop
      // 2. Controlled borders to appear only on desktop or specifically on mobile
      className={cn(
        "flex flex-col items-center text-center lg:items-start lg:text-left py-10 lg:py-12 relative group/feature border-b border-neutral-200 dark:border-neutral-800 lg:border-b-0",
        "lg:border-r dark:lg:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {/* Background Hover/Active Glow */}
      <div className="opacity-0 group-hover/feature:opacity-100 group-active/feature:opacity-50 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50/50 dark:from-blue-900/10 to-transparent pointer-events-none" />

      {/* Icon Container */}
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-blue-500 transition-colors duration-300">
        {icon}
      </div>

      {/* Title with Vertical Bar Logic */}
      <div className="text-xl font-bold mb-2 relative z-10 px-6 lg:px-10">
        {/* Vertical bar: Hidden on mobile, shown on desktop hover */}
        <div className="hidden lg:block absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-300 origin-center" />

        <span className="lg:group-hover/feature:translate-x-2 transition duration-300 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs relative z-10 px-6 lg:px-10 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};
