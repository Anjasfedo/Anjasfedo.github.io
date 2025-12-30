"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconSun, IconMoon, IconGlobe, IconArrowUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Language = "en" | "id";

export const ThemeLanguageToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<Language>("en");
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load theme and language from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Handle scroll to show/hide scroll top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleLanguage = () => {
    const newLanguage: Language = language === "en" ? "id" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const languageLabel = language === "en" ? "EN" : "ID";

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className={cn(
              "p-3 rounded-full shadow-lg backdrop-blur-md",
              "bg-white/80 dark:bg-black/80",
              "border border-neutral-200 dark:border-white/10",
              "hover:bg-white dark:hover:bg-black",
              "transition-colors duration-200"
            )}
            aria-label="Scroll to top"
          >
            <IconArrowUp className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className={cn(
          "p-3 rounded-full shadow-lg backdrop-blur-md",
          "bg-white/80 dark:bg-black/80",
          "border border-neutral-200 dark:border-white/10",
          "hover:bg-white dark:hover:bg-black",
          "transition-colors duration-200"
        )}
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -180 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "light" ? (
              <IconSun className="w-5 h-5 text-amber-500" />
            ) : (
              <IconMoon className="w-5 h-5 text-blue-400" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Language Toggle Button */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "p-3 rounded-full shadow-lg backdrop-blur-md",
            "bg-white/80 dark:bg-black/80",
            "border border-neutral-200 dark:border-white/10",
            "hover:bg-white dark:hover:bg-black",
            "transition-colors duration-200"
          )}
          aria-label="Change language"
        >
          <IconGlobe className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
        </motion.button>

        {/* Language Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-32 rounded-lg shadow-xl backdrop-blur-md bg-white/95 dark:bg-black/95 border border-neutral-200 dark:border-white/10 overflow-hidden"
            >
              <button
                onClick={() => {
                  setLanguage("en");
                  localStorage.setItem("language", "en");
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-3 text-left text-sm font-medium transition-colors",
                  "hover:bg-neutral-100 dark:hover:bg-neutral-900",
                  language === "en"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30"
                    : "text-neutral-700 dark:text-neutral-300"
                )}
              >
                <div className="flex items-center justify-between">
                  <span>English</span>
                  {language === "en" && (
                    <motion.div
                      layoutId="activeLanguage"
                      className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                    />
                  )}
                </div>
              </button>

              <button
                onClick={() => {
                  setLanguage("id");
                  localStorage.setItem("language", "id");
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full px-4 py-3 text-left text-sm font-medium transition-colors",
                  "hover:bg-neutral-100 dark:hover:bg-neutral-900",
                  language === "id"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30"
                    : "text-neutral-700 dark:text-neutral-300"
                )}
              >
                <div className="flex items-center justify-between">
                  <span>Bahasa Indonesia</span>
                  {language === "id" && (
                    <motion.div
                      layoutId="activeLanguage"
                      className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
                    />
                  )}
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
