import React from "react";
import { FloatingDock } from "./ui/floating-dock-navbar"; // Adjust path to your UI component
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export const navigationItems = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/products",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/components",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/changelog",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://twitter.com",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com",
  },
];

export const FloatingDockWrapper = () => {
  return (
    <div className="relative w-full">
      {/* Since we import navigationItems here (inside a React file), 
        the JSX icons remain valid React Elements. 
      */}
      <FloatingDock
        items={navigationItems} // Note: Prop name changed from 'navItems' to 'items' in the new code too!
        desktopClassName=""
        mobileClassName=""
      />
    </div>
  );
};
