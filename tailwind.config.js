/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      font1: ["Nunito", "sans-serif"],
      verela: ["Varela Round", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
