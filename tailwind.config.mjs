/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fade-light-gradient":
          "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%)",
        "fade-dark-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgba(0, 0, 0, 1) 100%)"
      }
    }
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "media"
}
