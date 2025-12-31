"use client";

import React from "react";
import { motion } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

interface PrivacySection {
  title: string;
  badge: string;
  content: string;
}

interface PrivacyPageContent {
  description?: string;
  sections?: PrivacySection[];
}

export const PrivacyPage = React.memo(function PrivacyPage({
  content,
}: {
  content?: PrivacyPageContent;
}) {
  const sections = content?.sections || [];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              {content?.description || "Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content with TracingBeam */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <TracingBeam className="px-6">
          {sections.map((section, index) => (
            <CollapsibleSection
              key={index}
              title={section.title}
              badge={section.badge}
              defaultOpen={index === 0}
            >
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </CollapsibleSection>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
});

PrivacyPage.displayName = "PrivacyPage";
