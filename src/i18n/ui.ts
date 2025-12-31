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
  },
  id: {
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.certificates": "Sertifikat",
    "nav.experience": "Pengalaman",
    "nav.services": "Layanan",
    "nav.uses": "Peralatan",
  },
} as const;

// This extracts the specific keys available in your translations
export type UIKeys = keyof (typeof ui)["en"];
export type TranslationMap = Record<UIKeys, string>;
