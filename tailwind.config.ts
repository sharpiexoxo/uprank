import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1F1B17",
        "ink-soft": "#4A433C",
        paper: "#EFE7D8",
        "paper-2": "#E5DBC8",
        clay: "#D9622B",
        "clay-deep": "#A8431A",
        moss: "#5B6B58",
        line: "rgba(31,27,23,0.12)",
        "line-dark": "rgba(239,231,216,0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "10px",
      },
      maxWidth: {
        wrap: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
