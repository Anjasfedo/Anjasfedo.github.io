"use client";

import React from "react";
import { motion } from "motion/react";

export const PrivacyPage = React.memo(function PrivacyPage() {
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
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 space-y-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            Welcome to my portfolio website. This privacy policy describes how I collect, use, and protect information when you visit this site. As this is a personal portfolio showcasing my work and projects, I am committed to maintaining transparency about data practices.
          </p>
        </motion.section>

        {/* Information We Collect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 md:p-8 space-y-4 border border-neutral-200 dark:border-white/10">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-2xl">📊</span> Automatically Collected Information
              </h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Browser Information:</strong> Browser type, version, and operating system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Device Information:</strong> Device type, screen resolution, and IP address (anonymized)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Usage Data:</strong> Pages visited, time spent, and navigation patterns</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-2xl">📧</span> Voluntarily Provided Information
              </h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 ml-8">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Contact Form:</strong> Name, email address, and message (when you reach out)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span><strong>Email Communications:</strong> Any information you provide in email correspondence</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* How We Use Your Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "💬", title: "Communication", desc: "To respond to your inquiries and messages" },
              { icon: "📈", title: "Analytics", desc: "To improve website performance and user experience" },
              { icon: "🔒", title: "Security", desc: "To protect against fraud and ensure site security" },
              { icon: "🎨", title: "Personalization", desc: "To tailor content to your interests" },
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-800/50 rounded-xl p-5 border border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Data Protection */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Data Protection & Security</h2>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 md:p-8 border border-green-200 dark:border-green-800/30">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              I implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and I cannot guarantee absolute security.
            </p>
          </div>
        </motion.section>

        {/* Third-Party Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Third-Party Services</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            This website may use third-party services that collect information:
          </p>
          <div className="space-y-3">
            {[
              { name: "GitHub", desc: "For project repositories and code hosting" },
              { name: "Vercel/Netlify", desc: "For website hosting and deployment" },
              { name: "Analytics Services", desc: "For understanding site usage and performance" },
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 dark:bg-neutral-900/30 rounded-xl border border-neutral-200 dark:border-white/5">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{service.name}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Rights</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-6 md:p-8 border border-purple-200 dark:border-purple-800/30">
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">✓</span>
                <span><strong>Access:</strong> Request a copy of your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">✓</span>
                <span><strong>Correction:</strong> Update inaccurate or incomplete information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">✓</span>
                <span><strong>Deletion:</strong> Request deletion of your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 mt-1">✓</span>
                <span><strong>Objection:</strong> Object to processing of your data</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact & Questions</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-800/30 text-center space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this privacy policy or your personal information, please don't hesitate to contact me.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
});

PrivacyPage.displayName = "PrivacyPage";
