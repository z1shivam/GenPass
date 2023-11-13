/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', "sans-serif"],
        mmono: ['IBM Plex Mono', "monospace"],
      },
    },
  },
  plugins: [],
}