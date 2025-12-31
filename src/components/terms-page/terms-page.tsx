"use client";

import React from "react";
import { motion } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

interface TermsSection {
  title: string;
  badge: string;
  content: string;
}

interface TermsPageContent {
  description?: string;
  sections?: TermsSection[];
}

export const TermsPage = React.memo(function TermsPage({
  content,
}: {
  content?: TermsPageContent;
}) {
  const sections = content?.sections || [];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              {content?.description || "Please read these terms carefully before using this website. By accessing or using this site, you agree to be bound by these terms."}
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

TermsPage.displayName = "TermsPage";
