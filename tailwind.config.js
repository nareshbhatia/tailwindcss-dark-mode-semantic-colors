const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      primary: colors.blue,
      neutral: colors.zinc,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-family-inter)'],
      },
    },
  },
  plugins: [],
};
