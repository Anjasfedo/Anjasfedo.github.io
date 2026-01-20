"use client";
import React, { useState, useRef, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse, IconX } from "@tabler/icons-react";

// Helper function to handle navigation with hash
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Check if the href contains a hash
  if (href.includes("#")) {
    const [path, hash] = href.split("#");
    const targetId = `#${hash}`;

    // If we're already on the home page or the path matches
    if (window.location.pathname === "/" || window.location.pathname === path) {
      e.preventDefault();
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Otherwise, let the default link behavior work (navigate to /#section)
  }
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  // Initialize with empty string, will be set immediately in useEffect on client
  const [currentPath, setCurrentPath] = useState("");

  // Update current path on mount and when URL changes
  React.useEffect(() => {
    // Immediately set the path on client-side mount
    setCurrentPath(window.location.pathname);

    const updatePath = () => setCurrentPath(window.location.pathname);

    // Listen for popstate events (back/forward buttons)
    window.addEventListener("popstate", updatePath);

    // Listen for Astro navigation events - after-swap fires earliest
    const handleAfterSwap = () => {
      updatePath();
    };
    window.addEventListener("astro:after-swap", handleAfterSwap);

    // Also listen for page-load as backup
    const handlePageLoad = () => {
      updatePath();
    };
    window.addEventListener("astro:page-load", handlePageLoad);

    return () => {
      window.removeEventListener("popstate", updatePath);
      window.removeEventListener("astro:after-swap", handleAfterSwap);
      window.removeEventListener("astro:page-load", handlePageLoad);
    };
  }, []);

  // Determine active item
  const activeHref = useMemo(() => {
    // Check if current path matches any href
    const exactMatch = items.find((item) => item.href === currentPath);
    if (exactMatch) return exactMatch.href;

    // Check for partial matches (e.g., /projects/abc should highlight /projects)
    const partialMatch = items.find((item) => {
      if (item.href === "/") return false;
      return currentPath.startsWith(item.href);
    });
    return partialMatch?.href || null;
  }, [currentPath, items]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    const direction = current - previous;

    if (current < 10) {
      setVisible(true);
    } else {
      if (direction < 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: visible ? 0 : -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-5 inset-x-0 mx-auto z-[5000] flex max-w-fit justify-center px-4",
          desktopClassName
        )}
      >
        <FloatingDockDesktop items={items} className={desktopClassName} activeHref={activeHref} />
        <FloatingDockMobile items={items} className={mobileClassName} activeHref={activeHref} />
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================================================
// --- MOBILE VIEW (Fixed Alignment & Label Styling) ---
// ============================================================================
const FloatingDockMobile = ({
  items,
  className,
  activeHref,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  activeHref: string | null;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 top-full mt-4 flex flex-col gap-3 bg-white/95 dark:bg-neutral-900/95 border border-gray-200 dark:border-white/10 p-3 rounded-[2rem] shadow-2xl backdrop-blur-xl min-w-[220px]"
          >
            {items.map((item, idx) => {
              const isActive = activeHref === item.href;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    x: -10,
                    transition: { delay: idx * 0.02 },
                  }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setTimeout(() => setOpen(false), 150);
                    }}
                    aria-label={item.title}
                    className={cn(
                      "group flex items-center gap-4 h-16 px-4 rounded-2xl transition-all overflow-hidden",
                      isActive
                        ? "bg-blue-50/80 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
                        : "bg-gray-50/50 dark:bg-neutral-800/50 border-transparent dark:border-white/5"
                    )}
                  >
                    {/* Magnified Icon Container */}
                    <motion.div
                      whileTap={{ scale: 1.4, rotate: 5 }}
                      className={cn(
                        "h-10 w-10 flex items-center justify-center rounded-xl border shadow-md transition-shadow active:shadow-inner",
                        isActive
                          ? "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700"
                          : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-white/10"
                      )}
                    >
                      <div className={cn(
                        "h-6 w-6",
                        isActive ? "text-blue-600 dark:text-blue-400" : "text-neutral-600 dark:text-neutral-300"
                      )}>
                        {item.icon}
                      </div>
                    </motion.div>

                    {/* Magnified Label */}
                    <motion.span
                      whileTap={{ scale: 1.1, x: 5 }}
                      className={cn(
                        "text-base font-bold tracking-tight",
                        isActive
                          ? "text-blue-700 dark:text-blue-300"
                          : "text-neutral-700 dark:text-neutral-200"
                      )}
                    >
                      {item.title}
                    </motion.span>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 shadow-lg backdrop-blur-md active:scale-90 transition-transform"
      >
        {open ? (
          <IconX className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
        ) : (
          <IconLayoutNavbarCollapse className="h-6 w-6 text-neutral-600 dark:text-neutral-300" />
        )}
      </button>
    </div>
  );
};

// ============================================================================
// --- DESKTOP VIEW (Kept High Performance) ---
// ============================================================================
const FloatingDockDesktop = ({
  items,
  className,
  activeHref,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  activeHref: string | null;
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "hidden md:flex h-16 gap-4 items-end rounded-full bg-white/90 dark:bg-neutral-900/90 border border-gray-200 dark:border-white/10 shadow-xl backdrop-blur-md px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          {...item}
          isActive={activeHref === item.href}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isActive,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} onClick={(e) => handleNavClick(e, href)} aria-label={title} aria-current={isActive ? "page" : undefined}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border shadow-sm transition-colors",
          isActive
            ? "bg-blue-100 dark:bg-blue-900/30 border-blue-400 dark:border-blue-500"
            : "bg-gray-100 dark:bg-neutral-800 border-gray-200 dark:border-white/10"
        )}
      >

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -2, x: "-50%" }}
              className="absolute top-full mt-2 left-1/2 w-fit rounded-md border border-gray-200 bg-white shadow-md px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center",
            isActive ? "text-blue-600 dark:text-blue-400" : ""
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}