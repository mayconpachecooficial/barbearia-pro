import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coal: "#080808",
        ink: "#111111",
        panel: "#171717",
        line: "#2a2a2a",
        gold: "#d8a63f",
        "gold-soft": "#f2d58a",
        ivory: "#f8f5ed",
        muted: "#a8a29a",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(216, 166, 63, 0.28), 0 18px 60px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
