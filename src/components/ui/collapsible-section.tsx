"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";

interface CollapsibleSectionProps {
  title: string;
  badge?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const CollapsibleSection = React.memo(
  ({ title, badge, children, defaultOpen = false }: CollapsibleSectionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div className="mb-10 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left group"
        >
          {badge && (
            <span className="bg-black dark:bg-white text-white dark:text-black rounded-full text-sm w-fit px-4 mx-1 py-1 mb-4 inline-block">
              {badge}
            </span>
          )}
          <div className="flex items-center justify-between">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white pr-8">
              {title}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <IconChevronDown className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 text-neutral-600 dark:text-neutral-400 prose prose-sm dark:prose-invert max-w-none">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

CollapsibleSection.displayName = "CollapsibleSection";
