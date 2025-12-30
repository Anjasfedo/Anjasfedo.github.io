"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import type { Project } from "./ProjectsPage";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  // --- GALLERY STATE ---
  // We combine the main thumbnail and the gallery images into one list
  const allImages = [project.image, ...(project.images || [])];
  const [activeImage, setActiveImage] = useState(allImages[0]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
      case "Beta":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case "Alpha":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20";
      case "Featured":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      default:
        return "bg-neutral-500/10 text-neutral-600 dark:text-neutral-400 border-neutral-500/20";
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-950 ">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-neutral-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <motion.a
            href="/projects"
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <IconArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Projects</span>
          </motion.a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-4 space-y-12">
        {/* TOP SECTION: Gallery + Basic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* SHOPEE-STYLE GALLERY */}
          <div className="space-y-4">
            {/* Main Big Display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt="Project Preview"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails Row */}
            <div className="flex flex-wrap gap-3">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={cn(
                    "relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all",
                    activeImage === img
                      ? "border-blue-500 scale-105 shadow-md shadow-blue-500/20"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt={`Thumb ${idx}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PROJECT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              {project.status.map((status) => (
                <span
                  key={status}
                  className={cn(
                    "px-3 py-1 text-xs font-semibold rounded-full border",
                    getStatusColor(status)
                  )}
                >
                  {status}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              {project.name}
            </h1>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-bold hover:opacity-90 transition-opacity"
                >
                  <IconBrandGithub className="w-5 h-5" /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
                >
                  <IconExternalLink className="w-5 h-5" /> Live Demo
                </a>
              )}
            </div>

            <div className="pt-6">
              <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: Video & Long Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 border-t border-neutral-200 dark:border-white/10">
          {/* Demo Video Sidebar */}
          {project.video && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-neutral-900 dark:text-white">
                <IconVideo className="w-5 h-5" />
                <h3 className="font-bold">Project Preview</h3>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-lg">
                <iframe
                  src={project.video}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          )}
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                About this Project
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
