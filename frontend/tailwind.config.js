import daisyui from "daisyui";
import animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-tray": "scroll-vertical 80s linear infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        pop: "pop 0.2s ease-out",
      },
      keyframes: {
        "scroll-vertical": {
          "0%": { transform: "translateY(0)" },
          "99.99%": { transform: "translateY(-7089px)" }, // Ajustează la înălțimea totală a imaginilor
          "100%": { transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pop: {
          "0%": { transform: "scale(1)", boxShadow: "0 0 0 rgba(0,0,0,0)" },
          "100%": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
  plugins: [daisyui, animated],
  daisyui: {
    themes: ["retro"],
  },
};
