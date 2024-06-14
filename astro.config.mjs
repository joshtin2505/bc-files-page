import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://bcfiles.vercel.app",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date("2024-06-14"), // Fecha de última modificación por defecto
      serialize(item) {
        if (item.url === "https://www.tudominio.com/") {
          item.changefreq = "daily"
          item.priority = 1.0
        }
        return item
      }
    })
  ]
})
