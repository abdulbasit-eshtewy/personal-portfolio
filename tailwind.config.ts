import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ice: "#D6E6F3", powder: "#A6C5D7", sapphire: "#0F52BA", navy: "#000926" },
    fontFamily: { sans: ["Arial", "sans-serif"], display: ["Arial", "sans-serif"], mono: ["ui-monospace", "monospace"] },
    boxShadow: { soft: "0 24px 80px rgba(0,9,38,.10)" }
  }},
  plugins: []
};
export default config;