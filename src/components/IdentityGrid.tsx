"use client";
import React from "react";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconCode,
  IconSchool,
  IconBulb,
  IconDevices,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandNodejs,
  IconDatabase,
  IconCloud,
} from "@tabler/icons-react";

export function IdentityGrid({ className }: { className?: string }) {
  return (
    <section className={cn("py-20 relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto"
          >
            A glimpse into my world, interests, and expertise
          </motion.p>
        </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {/* Current Focus - Large card spanning 2 columns */}
          <BentoGridItem
            title="Current Focus"
            description="Building scalable web applications with React, Node.js, and cloud technologies. Exploring AI integration and modern frontend architectures."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 items-center justify-center">
                <IconBulb className="w-12 h-12 text-white" />
              </div>
            }
            icon={<IconBulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
            className="md:col-span-2"
          />

          {/* Location */}
          <BentoGridItem
            title="Location"
            description="Based in San Francisco, CA. Open to remote opportunities worldwide."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 dark:from-green-500 dark:to-emerald-700 items-center justify-center">
                <IconMapPin className="w-12 h-12 text-white" />
              </div>
            }
            icon={<IconMapPin className="w-6 h-6 text-green-600 dark:text-green-400" />}
          />

          {/* Tech Stack - Large card spanning 2 columns and 2 rows */}
          <BentoGridItem
            title="Tech Stack"
            description="Proficient in modern JavaScript ecosystem. Frontend: React, Next.js, TypeScript. Backend: Node.js, PostgreSQL, Docker. Always learning new technologies."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 items-center justify-center gap-4 flex-wrap p-4">
                <IconBrandJavascript className="w-8 h-8 text-yellow-300" />
                <IconBrandTypescript className="w-8 h-8 text-blue-300" />
                <IconBrandReact className="w-8 h-8 text-cyan-400" />
                <IconBrandNextjs className="w-8 h-8 text-white" />
                <IconBrandNodejs className="w-8 h-8 text-green-500" />
                <IconDatabase className="w-8 h-8 text-purple-300" />
              </div>
            }
            icon={<IconCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            className="md:col-span-2 md:row-span-2"
          />

          {/* Social Accounts - Small card */}
          <BentoGridItem
            title="Connect"
            description="Let's connect! Find me on GitHub, LinkedIn, and Twitter."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 dark:from-pink-500 dark:to-rose-700 items-center justify-center gap-3">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white/20 rounded-lg"
                >
                  <IconBrandGithub className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white/20 rounded-lg"
                >
                  <IconBrandLinkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 bg-white/20 rounded-lg"
                >
                  <IconBrandTwitter className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            }
            icon={<IconDevices className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
          />

          {/* Education */}
          <BentoGridItem
            title="Education"
            description="B.S. Computer Science from Stanford University. Specialized in Human-Computer Interaction and Distributed Systems."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 dark:from-amber-500 dark:to-orange-700 items-center justify-center">
                <IconSchool className="w-12 h-12 text-white" />
              </div>
            }
            icon={<IconSchool className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
          />

          {/* Interests */}
          <BentoGridItem
            title="Interests"
            description="Open source contributor, tech blogger, amateur photographer, and coffee enthusiast. Love exploring new frameworks and tools."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-400 to-teal-600 dark:from-cyan-500 dark:to-teal-700 items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <IconCloud className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            }
            icon={<IconBulb className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
          />

          {/* Availability */}
          <BentoGridItem
            title="Status"
            description="Currently available for freelance projects and full-time opportunities. Let's build something amazing together!"
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 dark:from-violet-500 dark:to-purple-700 items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2"
                >
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-semibold">Open to Work</span>
                </motion.div>
              </div>
            }
            icon={<IconDevices className="w-6 h-6 text-violet-600 dark:text-violet-400" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </motion.div>
    </section>
  );
}

function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}
