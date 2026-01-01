"use client";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Smooth out the line animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heightTransform = useTransform(scaleY, [0, 1], [0, height]);
  const opacityTransform = useTransform(scaleY, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}

        {/* Central Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-cyan-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item }: { item: TimelineEntry }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Trigger as the item moves into the upper half of the viewport
    offset: ["start 70%", "start 30%"],
  });

  // Smooth out the progress for subtle transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Color for the dot: from neutral to Cyan
  const dotColor = useTransform(smoothProgress, [0, 1], ["#e5e5e5", "#06b6d4"]);

  // Opacity for text and content: from 20% to 100%
  const contentOpacity = useTransform(smoothProgress, [0, 1], [0.2, 1]);

  // Subtle slide up effect: starts 20px lower and moves to original position
  const contentY = useTransform(smoothProgress, [0, 1], [20, 0]);

  return (
    <div
      ref={targetRef}
      className="flex justify-start pt-10 md:pt-20 md:gap-10"
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        {/* Outer Dot Container */}
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border border-neutral-200 dark:border-neutral-800">
          {/* Inner Animated Dot */}
          <motion.div
            style={{ backgroundColor: dotColor }}
            className="h-4 w-4 rounded-full border border-neutral-300 dark:border-neutral-700 shadow-sm"
          />
        </div>

        {/* Desktop Title */}
        <motion.h3
          style={{ opacity: contentOpacity }}
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 transition-colors"
        >
          {item.title}
        </motion.h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        {/* Mobile Title */}
        <motion.h3
          style={{ opacity: contentOpacity }}
          className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-900 dark:text-neutral-100"
        >
          {item.title}
        </motion.h3>

        {/* Enhanced Content Logic */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="w-full"
        >
          {item.content}
        </motion.div>
      </div>
    </div>
  );
};
