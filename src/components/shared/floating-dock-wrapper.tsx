"use client";
import React from "react";
import {
  IconUser,
  IconCode,
  IconBriefcase,
  IconDeviceDesktop,
  IconTerminal2,
  IconAward, // Added for Certificates
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock-navbar";

export const navigationItems = [
  {
    title: "About",
    icon: (
      <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Projects",
    icon: (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Certificates",
    icon: (
      <IconAward className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/certificates",
  },
  {
    title: "Experience",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/#experience",
  },
  {
    title: "Services",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/#services",
  },
  {
    title: "Uses",
    icon: (
      <IconDeviceDesktop className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/uses",
  },
];

export const FloatingDockWrapper = () => {
  return (
    <div className="relative w-full">
      <FloatingDock
        items={navigationItems}
        desktopClassName=""
        mobileClassName=""
      />
    </div>
  );
};