"use client";

import React from "react";
import { motion } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export const PrivacyPage = React.memo(function PrivacyPage() {
  const sections = [
    {
      title: "Introduction",
      badge: "Overview",
      content: (
        <>
          <p>
            Welcome to my portfolio website. This privacy policy describes how I
            collect, use, and protect information when you visit this site. As
            this is a personal portfolio showcasing my work and projects, I am
            committed to maintaining transparency about data practices.
          </p>
        </>
      ),
    },
    {
      title: "Information We Collect",
      badge: "Data Collection",
      content: (
        <>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="text-2xl">📊</span> Automatically Collected
            Information
          </h4>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                <strong>Browser Information:</strong> Browser type, version, and
                operating system
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                <strong>Device Information:</strong> Device type, screen
                resolution, and IP address (anonymized)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>
                <strong>Usage Data:</strong> Pages visited, time spent, and
                navigation patterns
              </span>
            </li>
          </ul>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
            <span className="text-2xl">📧</span> Voluntarily Provided
            Information
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">•</span>
              <span>
                <strong>Contact Form:</strong> Name, email address, and message
                (when you reach out)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-500 mt-1">•</span>
              <span>
                <strong>Email Communications:</strong> Any information you
                provide in email correspondence
              </span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Information",
      badge: "Usage",
      content: (
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-xl p-4 border border-neutral-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💬</span>
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Communication
              </h5>
            </div>
            <p className="text-sm">To respond to your inquiries and messages</p>
          </div>
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-xl p-4 border border-neutral-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📈</span>
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Analytics
              </h5>
            </div>
            <p className="text-sm">
              To improve website performance and user experience
            </p>
          </div>
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-xl p-4 border border-neutral-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🔒</span>
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Security
              </h5>
            </div>
            <p className="text-sm">
              To protect against fraud and ensure site security
            </p>
          </div>
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-xl p-4 border border-neutral-200 dark:border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🎨</span>
              <h5 className="font-semibold text-gray-900 dark:text-white">
                Personalization
              </h5>
            </div>
            <p className="text-sm">To tailor content to your interests</p>
          </div>
        </div>
      ),
    },
    {
      title: "Data Protection & Security",
      badge: "Security",
      content: (
        <p>
          I implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the Internet is 100% secure, and I cannot guarantee
          absolute security.
        </p>
      ),
    },
    {
      title: "Third-Party Services",
      badge: "Services",
      content: (
        <>
          <p className="mb-4">
            This website may use third-party services that collect information:
          </p>
          <div className="space-y-3">
            {[
              {
                name: "GitHub",
                desc: "For project repositories and code hosting",
              },
              {
                name: "Vercel/Netlify",
                desc: "For website hosting and deployment",
              },
              {
                name: "Analytics Services",
                desc: "For understanding site usage and performance",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-900/30 rounded-xl border border-neutral-200 dark:border-white/5"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h5>
                  <p className="text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      title: "Your Rights",
      badge: "User Rights",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-purple-500 mt-1">✓</span>
            <span>
              <strong>Access:</strong> Request a copy of your personal data
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 mt-1">✓</span>
            <span>
              <strong>Correction:</strong> Update inaccurate or incomplete
              information
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 mt-1">✓</span>
            <span>
              <strong>Deletion:</strong> Request deletion of your personal data
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-purple-500 mt-1">✓</span>
            <span>
              <strong>Objection:</strong> Object to processing of your data
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "Contact & Questions",
      badge: "Contact",
      content: (
        <div className="text-center space-y-4">
          <p>
            If you have any questions, concerns, or requests regarding this
            privacy policy or your personal information, please don't hesitate
            to contact me.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Contact Me
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content with TracingBeam */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <TracingBeam className="px-6">
          {sections.map((section, index) => (
            <CollapsibleSection
              key={index}
              title={section.title}
              badge={section.badge}
              defaultOpen={index === 0}
            >
              {section.content}
            </CollapsibleSection>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
});

PrivacyPage.displayName = "PrivacyPage";
