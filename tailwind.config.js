/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 80%, 100%": {
            transform: "translate(40px, 0)",
          },
          "85%": {
            transform: "translate(40px, -80px)",
          },
          "92%": {
            transform: "translate(40px, 0)",
          },
        },
      },

      animation: {
        jump: "jump 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};