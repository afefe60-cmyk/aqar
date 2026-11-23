/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sz: {
          terracotta: "#b45309",
          "terracotta-dark": "#78350f",
          "terracotta-light": "#d97706",
          "terracotta-soft": "#fffbeb",
          gold: "#f59e0b",
          "gold-light": "#fbbf24",
          "gold-dark": "#d97706",
          green: "#1e3a2b",
          "green-dark": "#14261c",
          "green-emerald": "#15803d",
          "green-light": "#dcfce7",
          card: "#ffffff",
          bg: "#fafaf9",
        },
      },
      fontFamily: {
        sans: [
          "Cairo",
          "Tajawal",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px rgba(180, 83, 9, 0.06)",
        hover: "0 8px 30px rgba(180, 83, 9, 0.12)",
      },
    },
  },
  plugins: [],
};
