const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  screens: {
   xs: "450px",
   ...defaultTheme.screens,
  },
  extend: {},
  fontFamily: {
   display: ["Poppins", "sans-serif"],
  },
 },
 plugins: [],
};
