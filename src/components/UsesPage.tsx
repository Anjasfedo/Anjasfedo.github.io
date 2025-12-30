"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { HoverEffect } from "./ui/card-hover-effect";
import {
  IconCpu,
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
} from "@tabler/icons-react";

// Hardware data organized by category
const hardwareData = {
  laptop: {
    title: "Laptop (Personal)",
    icon: <IconDeviceLaptop className="w-6 h-6" />,
    items: [
      {
        name: 'MacBook Pro 14"',
        specs: "M3 Pro, 18GB RAM, 512GB SSD",
        description:
          "My daily driver for development and freelance work. Portable yet powerful enough for full-stack development.",
      },
      {
        name: "External Display",
        specs: 'LG UltraGear 27" 144Hz',
        description:
          "Paired with my laptop for extended screen real estate during development sessions.",
      },
    ],
  },
  computer: {
    title: "Computer (Personal)",
    icon: <IconDeviceDesktop className="w-6 h-6" />,
    items: [
      {
        name: "Custom Built PC",
        specs: "AMD Ryzen 7 5800X, RTX 3070, 32GB RAM",
        description:
          "My main workstation for gaming, video editing, and heavier computational tasks.",
      },
      {
        name: "Storage",
        specs: "1TB NVMe SSD + 4TB HDD",
        description:
          "Fast NVMe for OS and applications, HDD for mass storage and backups.",
      },
      {
        name: "Peripherals",
        specs: "Keychron K2, Logitech MX Master 3",
        description:
          "Wireless mechanical keyboard and ergonomic mouse for comfortable long coding sessions.",
      },
    ],
  },
  office: {
    title: "Office Computer (Work)",
    icon: <IconDeviceDesktop className="w-6 h-6" />,
    items: [
      {
        name: "Dell XPS Desktop",
        specs: "Intel Core i7-12700, 16GB RAM, 512GB SSD",
        description:
          "Provided by the office for enterprise development work and team collaboration.",
      },
      {
        name: "Dual Monitors",
        specs: '2x Dell UltraSharp 24"',
        description:
          "Dual monitor setup for improved productivity when working on multiple projects simultaneously.",
      },
      {
        name: "Ergonomic Setup",
        specs: "Standing desk, ergonomic chair",
        description:
          "Office provides ergonomic furniture to maintain health during long work hours.",
      },
    ],
  },
} as const;

// Software data organized by category - formatted for HoverEffect
const softwareData = {
  development: {
    title: "Development Tools",
    icon: <IconCode className="w-6 h-6" />,
    items: [
      {
        title: "Visual Studio Code",
        description:
          "My primary code editor. Heavily customized with themes, extensions, and keybindings.",
        link: "https://code.visualstudio.com",
        icon: <IconBrandVscode className="w-6 h-6" />,
      },
      {
        title: "Claude CLI",
        description:
          "AI-powered coding assistant integrated into my terminal for instant code review and generation.",
        link: "https://claude.ai/code",
        icon: <IconTerminal className="w-6 h-6" />,
      },
      {
        title: "Git & GitHub",
        description:
          "Version control with GitHub CLI for seamless repository management and collaboration.",
        link: "https://github.com",
        icon: <IconBrandGithub className="w-6 h-6" />,
      },
      {
        title: "Postman",
        description:
          "API testing and documentation tool for backend development and debugging.",
        link: "https://www.postman.com",
        icon: <IconApi className="w-6 h-6" />,
      },
      {
        title: "Docker Desktop",
        description:
          "Container management for local development environment consistency.",
        link: "https://www.docker.com",
        icon: <IconBrandDocker className="w-6 h-6" />,
      },
    ],
  },
  ai: {
    title: "AI & Automation",
    icon: <IconBrain className="w-6 h-6" />,
    items: [
      {
        title: "Claude (Anthropic)",
        description:
          "My go-to AI for code review, debugging, and architectural decisions. Deep understanding of complex codebases.",
        link: "https://claude.ai",
        icon: <IconBrain className="w-6 h-6" />,
      },
      {
        title: "Google Gemini",
        description:
          "Alternative AI for brainstorming, research, and different perspectives on problem-solving.",
        link: "https://gemini.google.com",
        icon: <IconBrandGoogle className="w-6 h-6" />,
      },
      {
        title: "GitHub Copilot",
        description:
          "AI pair programmer that suggests code completions and entire functions in real-time.",
        link: "https://github.com/features/copilot",
        icon: <IconRobot className="w-6 h-6" />,
      },
    ],
  },
  design: {
    title: "Design & Planning",
    icon: <IconPalette className="w-6 h-6" />,
    items: [
      {
        title: "Figma",
        description:
          "UI/UX design tool for prototyping, wireframing, and creating design systems.",
        link: "https://www.figma.com",
        icon: <IconBrandFigma className="w-6 h-6" />,
      },
      {
        title: "Notion",
        description:
          "All-in-one workspace for notes, project management, documentation, and knowledge base.",
        link: "https://www.notion.so",
        icon: <IconBrandNotion className="w-6 h-6" />,
      },
      {
        title: "Excalidraw",
        description:
          "Virtual whiteboard for diagrams, system architecture, and rough sketches.",
        link: "https://excalidraw.com",
        icon: <IconEdit className="w-6 h-6" />,
      },
    ],
  },
  productivity: {
    title: "Productivity & Utilities",
    icon: <IconTool className="w-6 h-6" />,
    items: [
      {
        title: "Warp Terminal",
        description:
          "Modern, AI-powered terminal with autocomplete and workflow commands.",
        link: "https://www.warp.dev",
        icon: <IconTerminal className="w-6 h-6" />,
      },
      {
        title: "Raycast",
        description:
          "Productivity launcher and clipboard manager for macOS. Spotlight replacement on steroids.",
        link: "https://www.raycast.com",
        icon: <IconSearch className="w-6 h-6" />,
      },
      {
        title: "Arc Browser",
        description:
          "Innovative web browser with built-in spaces, profiles, and productivity features.",
        link: "https://arc.net",
        icon: <IconBrowser className="w-6 h-6" />,
      },
      {
        title: "Obsidian",
        description:
          "Markdown-based note-taking with graph view for personal knowledge management.",
        link: "https://obsidian.md",
        icon: <IconNotes className="w-6 h-6" />,
      },
    ],
  },
  communication: {
    title: "Communication & Collaboration",
    icon: <IconServer className="w-6 h-6" />,
    items: [
      {
        title: "Slack",
        description:
          "Team communication platform for work channels and direct messaging.",
        link: "https://slack.com",
        icon: <IconBrandSlack className="w-6 h-6" />,
      },
      {
        title: "Discord",
        description:
          "Community chat for developer communities, open source projects, and study groups.",
        link: "https://discord.com",
        icon: <IconBrandDiscord className="w-6 h-6" />,
      },
      {
        title: "Zoom",
        description:
          "Video conferencing for remote work, client meetings, and team standups.",
        link: "https://zoom.us",
        icon: <IconVideo className="w-6 h-6" />,
      },
      {
        title: "Linear",
        description:
          "Issue tracking and project management tool used by modern software teams.",
        link: "https://linear.app",
        icon: <IconChecklist className="w-6 h-6" />,
      },
    ],
  },
} as const;

const HardwareCard = React.memo(
  ({
    title,
    icon,
    items,
  }: {
    title: string;
    icon: React.ReactNode;
    items: typeof hardwareData.laptop.items;
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
    items: typeof softwareData.development.items;
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

export const UsesPage = React.memo(function UsesPage() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Dotted Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24 w-full">
        {/* Header */}
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
            This is a overview of my hardware and software setup that I use daily
            for development, design, and productivity. Tools that help me build
            things efficiently.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Hardware Section */}
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

          {/* Software Section */}
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
