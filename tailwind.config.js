/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f8f6',
          100: '#f1ede4',
          200: '#e1d6c2',
          300: '#cebc9b',
          400: '#bca173',
          500: '#ae8c54',
          600: '#a17845',
          700: '#865f3a',
          800: '#6f4f34',
          900: '#5a412b',
          950: '#322216',
        },
        gold: {
          light: '#f3e5ab',
          DEFAULT: '#d4af37',
          dark: '#aa8c2c',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
