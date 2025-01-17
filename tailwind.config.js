// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollDown: {
          "0%": {
            transform: "translate(-50%, 0)",
            opacity: "1",
          },
          "75%": {
            transform: "translate(-50%, 16px)",
            opacity: "0",
          },
          "76%, 100%": {
            transform: "translate(-50%, 0)",
            opacity: "0",
          },
        },
      },
      animation: {
        scrollDown: "scrollDown 2s cubic-bezier(0.45, 0, 0.55, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
