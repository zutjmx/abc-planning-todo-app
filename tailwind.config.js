/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-navy': '#2B2D42',
        'cloudy-steel': '#8D99AE',
        'arctic-white': '#EDF2F4',
        'vibrant-cherry': '#EF233C',
        'racing-red': '#D90429',
      },
    },
  },
  plugins: [],
}