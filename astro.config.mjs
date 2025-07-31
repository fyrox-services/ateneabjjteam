// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

const site = "https://ateneabjjteam.netlify.app";

// https://astro.build/config
export default defineConfig({
  site,
  server: {
    host: true,
    allowedHosts: true,
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => {
        const excludedPages = [
          `${site}/contacto/`,
          `${site}/legal/aviso-legal/`,
          `${site}/legal/politica-cookies/`,
          `${site}/legal/politica-privacidad/`,
        ];
        return !excludedPages.includes(page);
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
