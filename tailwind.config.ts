import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "#0E0B12",
          dark: "#1E1128",
          card: "#2D1B3D",
          result: "#4A1F34",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E2C992",
          dark: "#A8854A",
        },
        amethyst: {
          DEFAULT: "#9B6EA8",
          light: "#B885C4",
          dark: "#7A4F87",
        },
        rose: {
          soft: "#E8C5D0",
          wine: "#A33B6A",
        },
        text: {
          primary: "#F5EFE8",
          secondary: "#D4C5E2",
          muted: "#9B8FAA",
        },
        lavender: {
          DEFAULT: "#F0D9FF",
          soft: "#D4C5E2",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mystical":
          "linear-gradient(135deg, #0E0B12 0%, #1E1128 50%, #2D1B3D 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #C9A96E 0%, #E2C992 50%, #C9A96E 100%)",
        "gradient-result":
          "linear-gradient(180deg, #4A1F34 0%, #2D1B3D 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(201, 169, 110, 0.3)" },
          "50%": { boxShadow: "0 0 25px rgba(201, 169, 110, 0.7)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
