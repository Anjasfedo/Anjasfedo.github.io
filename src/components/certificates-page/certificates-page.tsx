"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import {
  IconSearch,
  IconX,
  IconChevronDown,
  IconAward,
  IconCalendar,
  IconExternalLink,
  IconCamera
} from "@tabler/icons-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { LinkPreview } from "@/components/ui/link-preview";

// ============================================================================
// --- TYPES ---
// ============================================================================

export type CertificateSkill = string;
export type CertificateIssuer = string;

export interface CertificatesPageContent {
  pageTitle?: string;
  pageDescription?: string;
  searchPlaceholder?: string;
  resetFiltersText?: string;
  issuerLabel?: string;
  skillsFilterLabel?: string;
  allSkillsText?: string;
  selectedCount?: string;
  noCertificatesFoundText?: string;
  loadMoreText?: string;
  credentialLinkText?: string;
  mediaLinkText?: string;
}

export interface Certificate {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  description?: string;
  skills?: CertificateSkill[];
  media?: string;
  credential?: string;
  issueDate: Date;
  expirationDate?: Date;
}

// ============================================================================
// --- FILTER BAR COMPONENT ---
// ============================================================================

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedIssuer: CertificateIssuer;
  setSelectedIssuer: (issuer: CertificateIssuer) => void;
  selectedSkills: CertificateSkill[];
  setSelectedSkills: (skills: CertificateSkill[]) => void;
  activeFiltersCount: number;
  onClearFilters: () => void;
  availableSkills: CertificateSkill[];
  availableIssuers: CertificateIssuer[];
  content?: CertificatesPageContent;
}

const FilterBar = ({
  searchQuery,
  setSearchQuery,
  selectedIssuer,
  setSelectedIssuer,
  selectedSkills,
  setSelectedSkills,
  activeFiltersCount,
  onClearFilters,
  availableSkills,
  availableIssuers,
  content,
}: FilterBarProps) => {
  const [showSkillDropdown, setShowSkillDropdown] = useState(false)

  const toggleSkill = (skill: CertificateSkill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s: string) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-8 relative z-50">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-neutral-200 dark:border-white/10 p-4 md:p-6 space-y-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder={content?.searchPlaceholder || "Search by title, issuer, or skill..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black text-neutral-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 flex items-center gap-2 text-sm font-bold"
            >
              <IconX className="w-4 h-4" /> {content?.resetFiltersText || "Reset Filters"}
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{content?.issuerLabel || "Issuer"}</label>
            <div className="flex flex-wrap gap-2">
              {availableIssuers.map((issuer: string) => (
                <button
                  key={issuer}
                  onClick={() => setSelectedIssuer(issuer)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all",
                    selectedIssuer === issuer
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200"
                  )}
                >
                  {issuer}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 relative">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">{content?.skillsFilterLabel || "Skills Filter"}</label>
            <button
              onClick={() => setShowSkillDropdown(!showSkillDropdown)}
              className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black flex items-center justify-between"
            >
              <span className="text-sm truncate">
                {selectedSkills.length > 0 ? `${selectedSkills.length} ${content?.selectedCount || "selected"}` : content?.allSkillsText || "All Skills"}
              </span>
              <IconChevronDown className={cn("w-4 h-4 transition-transform", showSkillDropdown && "rotate-180")} />
            </button>
            <AnimatePresence>
              {showSkillDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute z-[60] w-full mt-2 p-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-xl shadow-2xl max-h-60 overflow-y-auto flex flex-wrap gap-2"
                >
                  {availableSkills.map((skill: string) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={cn(
                        "px-2 py-1 rounded text-[10px] font-bold border transition-all",
                        selectedSkills.includes(skill)
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-neutral-200 dark:border-neutral-700 text-neutral-500"
                      )}
                    >
                      {skill}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// --- MAIN COMPONENT ---
// ============================================================================

export function CertificatesPage({ certificates, content }: { certificates: Certificate[]; content?: CertificatesPageContent }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState<CertificateIssuer>("All");
  const [selectedSkills, setSelectedSkills] = useState<CertificateSkill[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const { availableSkills, availableIssuers } = useMemo(() => {
    const skillsSet = new Set<string>();
    const issuersSet = new Set<string>(["All"]);
    certificates.forEach((c) => {
      c.skills?.forEach((s) => skillsSet.add(s));
      issuersSet.add(c.issuer);
    });
    return {
      availableSkills: Array.from(skillsSet).sort(),
      availableIssuers: Array.from(issuersSet).sort(),
    };
  }, [certificates]);

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesSearch = searchQuery === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIssuer = selectedIssuer === "All" || cert.issuer === selectedIssuer;
      const matchesSkills = selectedSkills.length === 0 ||
        selectedSkills.every(s => cert.skills?.includes(s));

      return matchesSearch && matchesIssuer && matchesSkills;
    });
  }, [certificates, searchQuery, selectedIssuer, selectedSkills]);

  // Format data for HoverEffect
  const items = useMemo(() => {
    return filteredCertificates.slice(0, visibleCount).map((cert) => {
      const formattedIssueDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short"
      }).format(cert.issueDate);

      const formattedExpirationDate = cert.expirationDate
        ? new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short"
        }).format(cert.expirationDate)
        : null;

      return {
        title: cert.title,
        description: (
          <div className="flex flex-col gap-3 h-full">
            {/* Header Info */}
            <div className="flex items-center justify-between text-[10px] font-bold">
              <span className="text-blue-500 uppercase tracking-widest">{cert.issuer}</span>
              <div className="flex items-center gap-1 text-neutral-500">
                <IconCalendar className="w-3 h-3" />
                <span>{formattedIssueDate}</span>
                {formattedExpirationDate && (
                  <>
                    <span className="mx-0.5">-</span>{formattedExpirationDate}
                  </>
                )}
              </div>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
              {cert.description}
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-1 mt-auto pb-2">
              {cert.skills?.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="text-[9px] bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-white/5"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Footer */}
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
              {cert.credential && (
                <LinkPreview
                  url={cert.credential}
                  className="inline-flex items-center gap-1 text-[10px] font-black text-neutral-900 dark:text-white hover:text-blue-500 transition-colors uppercase tracking-tight"
                >
                  {content?.credentialLinkText || "Credential"} <IconExternalLink className="w-3 h-3" />
                </LinkPreview>
              )}

              {cert.media && (
                <>
                  <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700 hidden sm:block" />
                  <LinkPreview
                    url={cert.media}
                    className="inline-flex items-center gap-1 text-[10px] font-black text-neutral-900 dark:text-white hover:text-blue-500 transition-colors uppercase tracking-tight"
                  >
                    {content?.mediaLinkText || "Media"} <IconCamera className="w-3 h-3" />
                  </LinkPreview>
                </>
              )}
            </div>
          </div>
        ),
        link: cert.credential || "#",
      };
    });
  }, [filteredCertificates, visibleCount]);
  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 py-16 md:py-24">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">{content?.pageTitle || "Expertise Certified"}</h1>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
          {content?.pageDescription || "Verifiable credentials in Machine Learning and Software Engineering."}
        </p>
      </div>

      <FilterBar
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        selectedIssuer={selectedIssuer} setSelectedIssuer={setSelectedIssuer}
        selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills}
        availableSkills={availableSkills} availableIssuers={availableIssuers}
        activeFiltersCount={(searchQuery ? 1 : 0) + (selectedIssuer !== "All" ? 1 : 0) + selectedSkills.length}
        onClearFilters={() => { setSearchQuery(""); setSelectedIssuer("All"); setSelectedSkills([]); }}
        content={content}
      />

      <div className="w-full max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {items.length > 0 ? (
            <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <HoverEffect items={items} className="grid grid-cols-1 pt-0 md:grid-cols-2 lg:grid-cols-3 gap-4" />
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl border border-dashed border-neutral-300 dark:border-neutral-800">
              <IconAward className="w-12 h-12 mx-auto text-neutral-300 mb-4" />
              <p className="text-neutral-500">{content?.noCertificatesFoundText || "No matching certificates found."}</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {filteredCertificates.length > visibleCount && (
        <button
          onClick={() => setVisibleCount(v => v + 6)}
          className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold shadow-xl transition-transform active:scale-95"
        >
          {content?.loadMoreText || "Load More"}
        </button>
      )}
    </div>
  );
}