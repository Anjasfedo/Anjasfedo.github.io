"use client";
import React, { useMemo } from "react";
import { FloatingDock } from "../ui/floating-dock-navbar";
import { navIconMap } from "@/i18n/ui"; // Import your map

interface NavItem {
  title: string;
  icon: string; // Now a string name
  href: string;
}

export const FloatingDockWrapper = ({ items }: { items: NavItem[] }) => {
  const processedItems = useMemo(() =>
    items.map((item) => {
      const IconComponent = navIconMap[item.icon];

      return {
        ...item,
        // Render the component found in the map
        icon: IconComponent ? (
          <IconComponent className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : null
      };
    }),
    [items]
  );

  return <FloatingDock items={processedItems} />;
};