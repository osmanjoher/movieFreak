/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        queryScreen: { min: "340px", max: "1200px" },
      },
    },
  },
  plugins: [],
};
