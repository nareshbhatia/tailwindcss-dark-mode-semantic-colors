const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', 'theme-dark'],
  theme: {
    colors: {},
    backgroundColor: {
      default: 'var(--color-bg-default)',
      'default-hover': 'var(--color-bg-default-hover)',
      brand: 'var(--color-bg-brand)',
      'brand-hover': 'var(--color-bg-brand-hover)',
      secondary: 'var(--color-bg-secondary)',
      'secondary-hover': 'var(--color-bg-secondary-hover)',
    },
    ringColor: {
      brand: 'var(--color-ring-brand)',
      secondary: 'var(--color-ring-secondary)',
    },
    textColor: {
      default: 'var(--color-text-default)',
      onbrand: 'var(--color-text-onbrand)',
      onsecondary: 'var(--color-text-onsecondary)',
    },
    stroke: {
      default: 'var(--color-stroke-default)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-family-inter)'],
      },
    },
  },
  plugins: [],
};
