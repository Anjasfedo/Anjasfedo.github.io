// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Your clean URL
  site: "https://Anjasfedo.github.io",

  // NO base property needed here!

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap()],
});
