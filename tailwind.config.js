/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        richblack: {
          50: '#121212',
          100: '#0f0f0f',
          200: '#0a0a0a',
          300: '#050505',
          400: '#030303',
          500: '#020202',
          600: '#010101',
          700: '#000000',
          800: '#111111',
          900: '#0a0a0a',
        },
        pink: {
          200: '#FFC0CB',
        },
        blue: {
          100: '#ADD8E6',
        },
        yellow: {
          50: '#FFFFE0',
        },
      },
    },
  },
  plugins: [],
}
