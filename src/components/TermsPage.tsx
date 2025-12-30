"use client";

import React from "react";
import { motion } from "motion/react";

export const TermsPage = React.memo(function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
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
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Introduction</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            Welcome to my personal portfolio website. These Terms of Service govern your use of this website and the services provided. This portfolio showcases my work, projects, and professional information. By accessing this site, you agree to comply with these terms.
          </p>
        </motion.section>

        {/* Use of the Website */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Permitted Use</h2>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-2xl p-6 md:p-8 border border-green-200 dark:border-green-800/30">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">✅</span> You May:
            </h3>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
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
          </div>
        </motion.section>

        {/* Restrictions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Restrictions & Prohibitions</h2>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-6 md:p-8 border border-red-200 dark:border-red-800/30">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🚫</span> You May Not:
            </h3>
            <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
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
          </div>
        </motion.section>

        {/* Intellectual Property */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-white/10 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-2xl">©️</span> Ownership
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, software, and code, is the property of M. Anjasfedo Afridiansah or is used with permission. The content is protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-200 dark:border-white/10 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="text-2xl">💻</span> Open Source Code
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Some code and projects may be available under open source licenses. When applicable, specific license information will be provided in the project repository or documentation. Otherwise, all code remains copyrighted unless explicitly stated.
              </p>
            </div>
          </div>
        </motion.section>

        {/* User Content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">User Content & Submissions</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl p-6 md:p-8 border border-blue-200 dark:border-blue-800/30 space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              If you submit content to this website (such as through contact forms or email communications):
            </p>
            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
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
          </div>
        </motion.section>

        {/* Limitation of Liability */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Disclaimer & Liability</h2>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-2xl p-6 md:p-8 border border-yellow-200 dark:border-yellow-800/30 space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">AS IS</strong> - This website is provided "as is" without any warranties, expressed or implied. I do not warrant that:
            </p>
            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 ml-4">
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
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
              In no event shall I be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website.
            </p>
          </div>
        </motion.section>

        {/* Termination */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Termination</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            I reserve the right to terminate or suspend access to this website immediately, without prior notice, for any breach of these Terms of Service.
          </p>
        </motion.section>

        {/* Changes to Terms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Changes to Terms</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
            I may update these Terms of Service from time to time. The updated version will be indicated by a revised "Last Updated" date and changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
          </p>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-6 md:p-8 border border-purple-200 dark:border-purple-800/30 text-center space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact me.
            </p>
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
        </motion.section>
      </div>
    </div>
  );
});

TermsPage.displayName = "TermsPage";
