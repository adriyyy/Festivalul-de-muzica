import daisyui from "daisyui";
import animated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "470px",
      },
      animation: {
        slideUp: "slideUp 80s ease-out infinite",
        wiggle: "wiggle 0.5s ease-in-out infinite",
        pop: "pop 0.2s ease-out",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4420px)" },
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
        glow: {
          "0%": {
            textShadow: "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0",
            transform: "scale(1)",
          },
          "100%": {
            textShadow: "0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0",
            transform: "scale(1.1)",
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
