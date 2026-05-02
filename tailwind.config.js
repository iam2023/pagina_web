/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        'primary-dark': '#b91c1c',
        azulino: '#001a2e',
        'azulino-light': '#002542',
        'azulino-muted': '#abc9ef',
        accent: '#dc2626',
        gold: '#ffba48',
        secondary: '#545f72',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        headline: ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
