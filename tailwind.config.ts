import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: {
      ink: "#172B4D", navy: "#12365A", teal: "#13A89E",
      mint: "#E9F7F4", cream: "#FAF8F2", gold: "#F5B84B"
    },
    fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] },
    boxShadow: { soft: "0 18px 55px rgba(23,43,77,.09)" },
    backgroundImage: { "hero-wash": "linear-gradient(115deg, #F2FAF8 0%, #F9F7F0 58%, #FFF8EA 100%)" }
  }},
  plugins: []
};
export default config;
