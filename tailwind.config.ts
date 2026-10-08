import type { Config } from "tailwindcss";

// "Midnight Pro": deep navy-black surfaces, cool white text and a single electric-cyan accent.
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#060a13",
          900: "#0a101d",
          850: "#0d1526",
          800: "#121b30",
          700: "#1a2540",
          600: "#26344f",
        },
        accent: {
          DEFAULT: "#22d3ee",
          bright:  "#67e8f9",
          deep:    "#0891b2",
        },
      },
      fontFamily: {
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee:   "marquee 90s linear infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.35), 0 8px 32px rgba(34,211,238,0.18)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 50px -20px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
