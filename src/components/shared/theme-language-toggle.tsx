"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconSun, IconMoon, IconArrowUp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Language = "en" | "id";

// --- METEOR COMPONENT ---
// Renders a burst of falling particles
const MeteorShower = ({ theme }: { theme: "light" | "dark" }) => {
  // Generate stable random values for the meteors
  const meteors = new Array(12).fill(true).map((_, idx) => ({
    id: idx,
    left: Math.floor(Math.random() * 100) + "%", // Random horizontal start
    delay: Math.random() * 0.2, // Slight randomization in start time
    duration: Math.random() * 0.5 + 0.5, // Different speeds
  }));

  return (
    <div className="fixed inset-0 z-[110] pointer-events-none overflow-hidden">
      {meteors.map((meteor) => (
        <motion.span
          key={meteor.id}
          initial={{
            opacity: 1,
            top: -100,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: 0,
            top: "120vh", // Falls off screen
            x: -200, // Moves slightly left for angle
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            ease: "easeIn",
          }}
          style={{
            left: meteor.left,
            position: "absolute",
          }}
          className={cn(
            "w-[2px] h-20 md:h-32 rotate-[215deg] shadow-lg",
            // Light Mode -> Dark Meteors (Black)
            // Dark Mode -> Light Meteors (White)
            theme === "light"
              ? "bg-gradient-to-b from-neutral-800 to-transparent"
              : "bg-gradient-to-b from-white to-transparent"
          )}
        />
      ))}
    </div>
  );
};

export const ThemeLanguageToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  // const [language, setLanguage] = useState<Language>("en");
  // const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Transition State
  const [transitionState, setTransitionState] = useState<{
    isActive: boolean;
    toTheme: "light" | "dark";
  }>({ isActive: false, toTheme: "dark" });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    // const savedLanguage = localStorage.getItem("language") as Language | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    // if (savedLanguage) {
    //   setLanguage(savedLanguage);
    // }
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = async () => {
    if (transitionState.isActive) return;

    const newTheme = theme === "light" ? "dark" : "light";

    // 1. Trigger Animation State
    setTransitionState({ isActive: true, toTheme: newTheme });

    // 2. Wait slightly for meteors to start falling
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 3. Switch DOM Theme
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    // 4. Cleanup Animation
    setTimeout(() => {
      setTransitionState((prev) => ({ ...prev, isActive: false }));
    }, 1000); // Allow meteors to finish falling
  };

  return (
    <>
      {/* --- METEOR ANIMATION LAYER --- */}
      <AnimatePresence>
        {transitionState.isActive && (
          <MeteorShower theme={transitionState.toTheme} />
        )}
      </AnimatePresence>

      {/* --- BACKGROUND OVERLAY (Clip Path) --- */}
      <AnimatePresence>
        {transitionState.isActive && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 z-[100] pointer-events-none",
              transitionState.toTheme === "dark" ? "bg-neutral-950" : "bg-white"
            )}
          />
        )}
      </AnimatePresence>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {/* Scroll to Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              onClick={scrollToTop}
              className={cn(
                "p-3 rounded-full shadow-lg backdrop-blur-md",
                "bg-white/90 dark:bg-neutral-900/90",
                "border border-neutral-200 dark:border-white/10",
                "text-neutral-700 dark:text-neutral-200",
                "hover:scale-110 transition-all duration-200"
              )}
            >
              <IconArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className={cn(
            "p-3 rounded-full shadow-lg backdrop-blur-md",
            "bg-white/90 dark:bg-neutral-900/90",
            "border border-neutral-200 dark:border-white/10",
            "transition-colors duration-200"
          )}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={theme}
              initial={{ y: -20, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "light" ? (
                <IconSun className="w-5 h-5 text-neutral-800" stroke={2} />
              ) : (
                <IconMoon className="w-5 h-5 text-white" stroke={2} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Language Toggle */}
        {/* <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-3 rounded-full shadow-lg backdrop-blur-md",
              "bg-white/90 dark:bg-neutral-900/90",
              "border border-neutral-200 dark:border-white/10",
              "text-neutral-700 dark:text-neutral-200"
            )}
          >
            <IconGlobe className="w-5 h-5" />
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                className="absolute top-0 right-14 w-32 rounded-lg shadow-xl backdrop-blur-md bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-white/10 overflow-hidden"
              >
                {[
                  { code: "en", label: "English" },
                  { code: "id", label: "Indonesia" },
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language);
                      localStorage.setItem("language", lang.code);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-3 text-left text-sm font-medium transition-colors flex items-center justify-between",
                      "hover:bg-neutral-100 dark:hover:bg-neutral-800",
                      language === lang.code
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-500 dark:text-neutral-400"
                    )}
                  >
                    <span>{lang.label}</span>
                    {language === lang.code && (
                      <motion.div
                        layoutId="activeLang"
                        className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white"
                      />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
      </div>
    </>
  );
};
