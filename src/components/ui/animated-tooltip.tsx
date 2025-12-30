"use client";
import React, { useState, useRef, useCallback } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image?: string;
  icon?: React.ReactNode;
}

export const AnimatedTooltip = React.memo(
  ({ items }: { items: readonly TooltipItem[] }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const animationFrameRef = useRef<number | null>(null);

    const rotate = useSpring(
      useTransform(x, [-100, 100], [-45, 45]),
      springConfig
    );
    const translateX = useSpring(
      useTransform(x, [-100, 100], [-50, 50]),
      springConfig
    );

    const handleMouseMove = useCallback(
      (event: any) => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(() => {
          const halfWidth = event.target.offsetWidth / 2;
          x.set(event.nativeEvent.offsetX - halfWidth);
        });
      },
      [x]
    );

    const handleMouseEnter = useCallback((id: number) => {
      setHoveredIndex(id);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setHoveredIndex(null);
    }, []);

    return (
      <>
        {items.map((item) => (
          <div
            className="relative group -mr-4"
            key={item.name}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: "spring", stiffness: 260, damping: 10 },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  // FIXED: z-[100] ensures it's higher than any grid item border or text
                  className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-[100] shadow-xl px-4 py-2"
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                  <div className="text-white text-xs">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <div
              onMouseMove={handleMouseMove}
              className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 dark:border-white relative transition duration-500 bg-white dark:bg-neutral-800 flex items-center justify-center"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-full w-full rounded-full"
                />
              ) : (
                <div className="text-neutral-700 dark:text-neutral-200">
                  {item.icon}
                </div>
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
);

AnimatedTooltip.displayName = "AnimatedTooltip";
