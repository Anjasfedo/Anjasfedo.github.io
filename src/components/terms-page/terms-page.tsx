"use client";

import React from "react";
import { motion } from "motion/react";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { CollapsibleSection } from "@/components/ui/collapsible-section";

export const TermsPage = React.memo(function TermsPage() {
  const sections = [
    {
      title: "Introduction",
      badge: "Overview",
      content: (
        <p>
          Welcome to my personal portfolio website. These Terms of Service govern your use of this website and the services provided. This portfolio showcases my work, projects, and professional information. By accessing this site, you agree to comply with these terms.
        </p>
      ),
    },
    {
      title: "Permitted Use",
      badge: "Allowed",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>Browse and view the portfolio for personal, informational purposes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>Download and use code snippets for educational purposes (with attribution)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>Share links to the portfolio on social media and other platforms</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>Contact me through the provided contact information for professional inquiries</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Restrictions & Prohibitions",
      badge: "Prohibited",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✗</span>
            <span>Copy, reproduce, or distribute the website content without permission</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✗</span>
            <span>Use the website for any illegal or unauthorized purpose</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✗</span>
            <span>Attempt to gain unauthorized access to any part of the website</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✗</span>
            <span>Use automated tools (bots, scrapers) to harvest data from the website</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-500 mt-1">✗</span>
            <span>Claim my work, projects, or content as your own</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Intellectual Property",
      badge: "IP Rights",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-2xl">©️</span> Ownership
            </h4>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, software, and code, is the property of M. Anjasfedo Afridiansah or is used with permission. The content is protected by copyright, trademark, and other intellectual property laws.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-2xl">💻</span> Open Source Code
            </h4>
            <p>
              Some code and projects may be available under open source licenses. When applicable, specific license information will be provided in the project repository or documentation. Otherwise, all code remains copyrighted unless explicitly stated.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "User Content & Submissions",
      badge: "Submissions",
      content: (
        <>
          <p className="mb-4">If you submit content to this website (such as through contact forms or email communications):</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>You retain ownership of your original content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>You grant me a license to use your content for responding to your inquiries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>You are responsible for the accuracy and legality of your submissions</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Disclaimer & Liability",
      badge: "Legal",
      content: (
        <>
          <p className="mb-4">
            <strong>AS IS</strong> - This website is provided "as is" without any warranties, expressed or implied. I do not warrant that:
          </p>
          <ul className="space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">⚠️</span>
              <span>The website will be uninterrupted, timely, secure, or error-free</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">⚠️</span>
              <span>The results from using the website will be effective or accurate</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-yellow-600 dark:text-yellow-400 mt-1">⚠️</span>
              <span>Any errors or defects will be corrected</span>
            </li>
          </ul>
          <p>
            In no event shall I be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website.
          </p>
        </>
      ),
    },
    {
      title: "Termination",
      badge: "Policy",
      content: (
        <p>
          I reserve the right to terminate or suspend access to this website immediately, without prior notice, for any breach of these Terms of Service.
        </p>
      ),
    },
    {
      title: "Changes to Terms",
      badge: "Updates",
      content: (
        <p>
          I may update these Terms of Service from time to time. The updated version will be indicated by a revised "Last Updated" date and changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
        </p>
      ),
    },
    {
      title: "Contact Me",
      badge: "Contact",
      content: (
        <div className="text-center space-y-4">
          <p>If you have any questions about these Terms of Service, please contact me.</p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Me
          </a>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-lg text-neutral-500 dark:text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using this website. By accessing or using this site, you agree to be bound by these terms.
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

TermsPage.displayName = "TermsPage";
