import {
  IconUser,
  IconCode,
  IconBriefcase,
  IconDeviceDesktop,
  IconTerminal2,
  IconAward,
} from "@tabler/icons-react";

export const navIconMap: Record<string, React.ElementType> = {
  IconUser,
  IconCode,
  IconBriefcase,
  IconAward,
  IconTerminal2,
  IconDeviceDesktop,
};

export const languages = {
  en: "English",
  id: "Indonesia",
};

export const defaultLang = "en";

export type Language = keyof typeof languages;

export const ui = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.certificates": "Certificates",
    "nav.experience": "Experience",
    "nav.services": "Services",
    "nav.uses": "Uses",
    // Footer translations
    "footer.cta.title": "Ready to start?",
    "footer.cta.desc": "Currently accepting new projects and collaborations. Let’s turn your vision into a digital reality.",
    "footer.cta.button": "Start a Conversation",
    "footer.rights": "ALL RIGHTS RESERVED.",
    "footer.links.privacy": "Privacy",
    "footer.links.terms": "Terms",
    "footer.links.sitemap": "Sitemap",
  },
  id: {
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.certificates": "Sertifikat",
    "nav.experience": "Pengalaman",
    "nav.services": "Layanan",
    "nav.uses": "Peralatan",
    // Footer translations
    "footer.cta.title": "Siap untuk mulai?",
    "footer.cta.desc": "Menerima proyek dan kolaborasi baru. Mari wujudkan visi digital Anda menjadi kenyataan.",
    "footer.cta.button": "Mulai Percakapan",
    "footer.rights": "HAK CIPTA DILINDUNGI.",
    "footer.links.privacy": "Privasi",
    "footer.links.terms": "Ketentuan",
    "footer.links.sitemap": "Sitemap",
  },
} as const;

// This extracts the specific keys available in your translations
export type UIKeys = keyof (typeof ui)["en"];
export type TranslationMap = Record<UIKeys, string>;
