"use client";
import React, { useState, useRef } from "react";
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
        <FloatingDockDesktop items={items} className={desktopClassName} />
        <FloatingDockMobile items={items} className={mobileClassName} />
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
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
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
            {items.map((item, idx) => (
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
                  onClick={() => setTimeout(() => setOpen(false), 150)}
                  className="group flex items-center gap-4 h-16 px-4 rounded-2xl bg-gray-50/50 dark:bg-neutral-800/50 border border-transparent dark:border-white/5 transition-all overflow-hidden"
                >
                  {/* Magnified Icon Container */}
                  <motion.div
                    whileTap={{ scale: 1.4, rotate: 5 }}
                    className="h-10 w-10 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 shadow-md transition-shadow active:shadow-inner"
                  >
                    <div className="h-6 w-6 text-neutral-600 dark:text-neutral-300">
                      {item.icon}
                    </div>
                  </motion.div>

                  {/* Magnified Label */}
                  <motion.span
                    whileTap={{ scale: 1.1, x: 5 }}
                    className="text-base font-bold text-neutral-700 dark:text-neutral-200 tracking-tight"
                  >
                    {item.title}
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
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
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

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
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-sm"
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
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}