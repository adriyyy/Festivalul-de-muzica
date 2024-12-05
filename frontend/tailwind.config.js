import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-tray": "scroll-vertical 80s linear infinite",
      },
      keyframes: {
        "scroll-vertical": {
          "0%": { transform: "translateY(0)" },
          "99.99%": { transform: "translateY(-7089px)" }, // Ajustează la înălțimea totală a imaginilor
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["retro"],
  },
};
