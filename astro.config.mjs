// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import mdx from "@astrojs/mdx";

import markdoc from "@astrojs/markdoc";

export default defineConfig({
  // Your clean URL
  site: "https://anjasfedo.github.io",

  // NO base property needed here!

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), sitemap(), mdx(), markdoc(), keystatic()],
});
