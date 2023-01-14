const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '.theme-dark'],
  theme: {
    colors: {},
    backgroundColor: {
      transparent: 'transparent',
      default: 'var(--color-bg-default)',
      'default-hover': 'var(--color-bg-default-hover)',
      brand: 'var(--color-bg-brand)',
      'brand-hover': 'var(--color-bg-brand-hover)',
      secondary: 'var(--color-bg-secondary)',
      'secondary-hover': 'var(--color-bg-secondary-hover)',
      primary: {
        50: 'rgba(var(--color-primary-50))',
        100: 'rgba(var(--color-primary-100))',
        200: 'rgba(var(--color-primary-200))',
        300: 'rgba(var(--color-primary-300))',
        400: 'rgba(var(--color-primary-400))',
        500: 'rgba(var(--color-primary-500))',
        600: 'rgba(var(--color-primary-600))',
        700: 'rgba(var(--color-primary-700))',
        800: 'rgba(var(--color-primary-800))',
        900: 'rgba(var(--color-primary-900))',
      },
      neutral: {
        50: 'rgba(var(--color-neutral-50))',
        100: 'rgba(var(--color-neutral-100))',
        200: 'rgba(var(--color-neutral-200))',
        300: 'rgba(var(--color-neutral-300))',
        400: 'rgba(var(--color-neutral-400))',
        500: 'rgba(var(--color-neutral-500))',
        600: 'rgba(var(--color-neutral-600))',
        700: 'rgba(var(--color-neutral-700))',
        800: 'rgba(var(--color-neutral-800))',
        900: 'rgba(var(--color-neutral-900))',
      },
    },
    borderColor: {
      default: 'var(--color-border-default)',
      focus: 'var(--color-border-focus)',
    },
    textColor: {
      default: 'var(--color-text-default)',
      brand: 'var(--color-text-brand)',
      onbrand: 'var(--color-text-onbrand)',
      onsecondary: 'var(--color-text-onsecondary)',
    },
    stroke: {
      default: 'var(--color-stroke-default)',
      brand: 'var(--color-stroke-brand)',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-family-inter)'],
      },
    },
  },
  plugins: [],
};
