"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  IconBrandReact,
  IconServer,
  IconDeviceDesktop,
  IconPalette,
  IconSpeedboat,
  IconCode,
  IconApi,
  IconAppWindow,
} from "@tabler/icons-react";

export function ServicesSection() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive web applications with React, Vue, Astro, and cutting-edge CSS frameworks.",
      icon: <IconBrandReact className="w-8 h-8" />,
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Python, and scalable database architectures.",
      icon: <IconServer className="w-8 h-8" />,
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development services from database design to polished user interfaces.",
      icon: <IconDeviceDesktop className="w-8 h-8" />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive, accessible interfaces with smooth animations and delightful user experiences.",
      icon: <IconPalette className="w-8 h-8" />,
    },
    {
      title: "Performance Optimization",
      description: "Boosting website speed, Core Web Vitals, and overall performance for better user engagement.",
      icon: <IconSpeedboat className="w-8 h-8" />,
    },
    {
      title: "Code Review & Consulting",
      description: "Expert code reviews, architecture consulting, and best practices guidance for your projects.",
      icon: <IconCode className="w-8 h-8" />,
    },
    {
      title: "API Development",
      description: "Designing and building RESTful and GraphQL APIs with proper documentation and security.",
      icon: <IconApi className="w-8 h-8" />,
    },
    {
      title: "Progressive Web Apps",
      description: "Creating installable web apps with offline capabilities and native-like experiences.",
      icon: <IconAppWindow className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center tracking-tight"
        >
          Services & Offerings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-12 lg:mb-20 text-center leading-relaxed"
        >
          Specialized web development services tailored to bring your ideas to life
          with modern technologies and best practices.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto border-neutral-200 dark:border-neutral-800 md:border-t">
        {services.map((service, index) => (
          <Service key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  );
}

const Service = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      // Updated className: 
      // 1. Added 'items-center text-center' for mobile, 'lg:items-start lg:text-left' for desktop
      // 2. Controlled borders to appear only on desktop or specifically on mobile
      className={cn(
        "flex flex-col items-center text-center lg:items-start lg:text-left py-10 lg:py-12 relative group/feature border-b border-neutral-200 dark:border-neutral-800 lg:border-b-0",
        "lg:border-r dark:lg:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {/* Background Hover/Active Glow */}
      <div className="opacity-0 group-hover/feature:opacity-100 group-active/feature:opacity-50 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50/50 dark:from-blue-900/10 to-transparent pointer-events-none" />

      {/* Icon Container */}
      <div className="mb-4 relative z-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-blue-500 transition-colors duration-300">
        {icon}
      </div>

      {/* Title with Vertical Bar Logic */}
      <div className="text-xl font-bold mb-2 relative z-10 px-6 lg:px-10">
        {/* Vertical bar: Hidden on mobile, shown on desktop hover */}
        <div className="hidden lg:block absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-300 origin-center" />

        <span className="lg:group-hover/feature:translate-x-2 transition duration-300 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs relative z-10 px-6 lg:px-10 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};