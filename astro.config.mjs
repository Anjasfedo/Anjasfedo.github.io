// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  site: "https://anjasfedo.github.io",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(),
    markdoc(),
    // Only run Keystatic integration in development mode
    import.meta.env.DEV ? keystatic() : [],
  ].flat(), // .flat() handles the empty array in production
});
