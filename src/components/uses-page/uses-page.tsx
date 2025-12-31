"use client";
import React, { useMemo, type ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconDeviceLaptop,
  IconDeviceDesktop,
  IconCode,
  IconBrain,
  IconPalette,
  IconServer,
  IconTool,
  IconBrandVscode,
  IconBrandGithub,
  IconApi,
  IconBrandDocker,
  IconRobot,
  IconBrandGoogle,
  IconBrandFigma,
  IconBrandNotion,
  IconEdit,
  IconTerminal,
  IconSearch,
  IconBrowser,
  IconNotes,
  IconBrandSlack,
  IconBrandDiscord,
  IconVideo,
  IconChecklist,
  IconBrandTeams,
  IconBrandZoom,
} from "@tabler/icons-react";
import { HoverEffect } from "../ui/card-hover-effect";

// ============================================================================
// --- TYPES & INTERFACES ---
// ============================================================================

interface HardwareItem {
  name: string;
  specs: string;
  description: string;
}

interface HardwareCategory {
  title: string;
  icon: string;
  items: HardwareItem[];
}

// Data as it comes from MDX
interface SoftwareItem {
  title: string;
  description: string;
  link: string;
  icon: string;
}

// Data after it has been processed for the UI
interface ProcessedSoftwareItem {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

interface SoftwareCategory {
  title: string;
  icon: string;
  items: SoftwareItem[];
}

interface UsesPageContent {
  description?: string;
  hardware?: {
    laptop: HardwareCategory;
    computer: HardwareCategory;
    office: HardwareCategory;
  };
  software?: {
    development: SoftwareCategory;
    ai: SoftwareCategory;
    design: SoftwareCategory;
    productivity: SoftwareCategory;
    communication: SoftwareCategory;
  };
}

// ============================================================================
// --- ICON MAPPING ---
// ============================================================================

const iconMap: Record<string, React.ReactElement> = {
  IconDeviceLaptop: <IconDeviceLaptop className="w-6 h-6" />,
  IconDeviceDesktop: <IconDeviceDesktop className="w-6 h-6" />,
  IconCode: <IconCode className="w-6 h-6" />,
  IconBrain: <IconBrain className="w-6 h-6" />,
  IconPalette: <IconPalette className="w-6 h-6" />,
  IconServer: <IconServer className="w-6 h-6" />,
  IconTool: <IconTool className="w-6 h-6" />,
  IconBrandVscode: <IconBrandVscode className="w-6 h-6" />,
  IconBrandGithub: <IconBrandGithub className="w-6 h-6" />,
  IconApi: <IconApi className="w-6 h-6" />,
  IconBrandDocker: <IconBrandDocker className="w-6 h-6" />,
  IconRobot: <IconRobot className="w-6 h-6" />,
  IconBrandGoogle: <IconBrandGoogle className="w-6 h-6" />,
  IconBrandFigma: <IconBrandFigma className="w-6 h-6" />,
  IconBrandNotion: <IconBrandNotion className="w-6 h-6" />,
  IconEdit: <IconEdit className="w-6 h-6" />,
  IconTerminal: <IconTerminal className="w-6 h-6" />,
  IconSearch: <IconSearch className="w-6 h-6" />,
  IconBrowser: <IconBrowser className="w-6 h-6" />,
  IconNotes: <IconNotes className="w-6 h-6" />,
  IconBrandSlack: <IconBrandSlack className="w-6 h-6" />,
  IconBrandDiscord: <IconBrandDiscord className="w-6 h-6" />,
  IconVideo: <IconVideo className="w-6 h-6" />,
  IconChecklist: <IconChecklist className="w-6 h-6" />,
  IconBrandTeams: <IconBrandTeams className="w-6 h-6" />,
  IconBrandZoom: <IconBrandZoom className="w-6 h-6" />,
};

const getIconComponent = (iconName: string): React.ReactElement | null => {
  if (!iconName) return null;
  return iconMap[iconName] || null;
};

const HardwareCard = React.memo(
  ({
    title,
    icon,
    items,
  }: {
    title: string;
    icon: React.ReactNode;
    items: HardwareItem[];
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="backdrop-blur-sm bg-white/50 dark:bg-black/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border-l-2 border-blue-500 dark:border-blue-400 pl-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h4>
              {item.specs && (
                <span className="text-sm text-blue-600 dark:text-blue-400 font-mono">
                  {item.specs}
                </span>
              )}
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
);

HardwareCard.displayName = "HardwareCard";

const SoftwareSection = React.memo(
  ({
    title,
    icon,
    items,
  }: {
    title: string;
    icon: React.ReactNode;
    items: ProcessedSoftwareItem[]; // FIX: Use ProcessedSoftwareItem
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <HoverEffect items={items} />
    </motion.div>
  )
);

SoftwareSection.displayName = "SoftwareSection";

export const UsesPage = React.memo(function UsesPage({
  content,
}: {
  content?: UsesPageContent;
}) {
  const hardwareData = useMemo(() => {
    if (!content?.hardware) return null;

    return {
      laptop: {
        ...content.hardware.laptop,
        icon: getIconComponent(content.hardware.laptop.icon),
      },
      computer: {
        ...content.hardware.computer,
        icon: getIconComponent(content.hardware.computer.icon),
      },
      office: {
        ...content.hardware.office,
        icon: getIconComponent(content.hardware.office.icon),
      },
    };
  }, [content?.hardware]);

  const softwareData = useMemo(() => {
    if (!content?.software) return null;

    const processSoftwareItems = (items: SoftwareItem[]): ProcessedSoftwareItem[] =>
      items.map((item) => ({
        ...item,
        icon: getIconComponent(item.icon),
      }));

    return {
      development: {
        ...content.software.development,
        icon: getIconComponent(content.software.development.icon),
        items: processSoftwareItems(content.software.development.items),
      },
      ai: {
        ...content.software.ai,
        icon: getIconComponent(content.software.ai.icon),
        items: processSoftwareItems(content.software.ai.items),
      },
      design: {
        ...content.software.design,
        icon: getIconComponent(content.software.design.icon),
        items: processSoftwareItems(content.software.design.items),
      },
      productivity: {
        ...content.software.productivity,
        icon: getIconComponent(content.software.productivity.icon),
        items: processSoftwareItems(content.software.productivity.items),
      },
      communication: {
        ...content.software.communication,
        icon: getIconComponent(content.software.communication.icon),
        items: processSoftwareItems(content.software.communication.items),
      },
    };
  }, [content?.software]);

  if (!hardwareData || !softwareData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-neutral-600 dark:text-neutral-400">No content available</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Uses
            </h1>
          </div>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {content?.description ||
              "This is a overview of my hardware and software setup that I use daily for development, design, and productivity. Tools that help me build things efficiently."}
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></span>
              Hardware
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <HardwareCard
                title={hardwareData.laptop.title}
                icon={hardwareData.laptop.icon}
                items={hardwareData.laptop.items}
              />
              <HardwareCard
                title={hardwareData.computer.title}
                icon={hardwareData.computer.icon}
                items={hardwareData.computer.items}
              />
              <HardwareCard
                title={hardwareData.office.title}
                icon={hardwareData.office.icon}
                items={hardwareData.office.items}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              Software
            </h2>
            <SoftwareSection
              title={softwareData.development.title}
              icon={softwareData.development.icon}
              items={softwareData.development.items}
            />
            <SoftwareSection
              title={softwareData.ai.title}
              icon={softwareData.ai.icon}
              items={softwareData.ai.items}
            />
            <SoftwareSection
              title={softwareData.design.title}
              icon={softwareData.design.icon}
              items={softwareData.design.items}
            />
            <SoftwareSection
              title={softwareData.productivity.title}
              icon={softwareData.productivity.icon}
              items={softwareData.productivity.items}
            />
            <SoftwareSection
              title={softwareData.communication.title}
              icon={softwareData.communication.icon}
              items={softwareData.communication.items}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
});

UsesPage.displayName = "UsesPage";