/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'navbar-green': '#758767',
        // 'header-beige': '#e6dfd4',
        // 'category-color': '#F1EBE2',
        // 'read-btn-color': '#4e642c',
        'light-brown': '#ae9c8a',
        'dark-brown': '#5e4b3f',
        'beige': '#e6dfd4',
        'light-green': '#95ad81',
        'dark-green': '#4e642c',
        'white': '#fefefe',
        'black': '#332e30',
      },
    },
  },
  plugins: [],
}