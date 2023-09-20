/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0084FF',
        'primary-dark': '#00509C',
        'black-dark': '#2e2e2e',
        'black-medium': '#4e4e4e',
        'black-light': '#6e6e6e'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
