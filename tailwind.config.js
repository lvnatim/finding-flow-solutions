/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/*.twig",
    "./templates/**/*.twig"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#363E48',
      'grey': '#EDF1F9',
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        // sm: '600px',
        // md: '728px',
        // lg: '984px',
        xl: '1240px',
        // '2xl': '1440px',
      },
    },
    extend: {},
    screens: {
      'xl': '1240px'
    },
  },
  plugins: [],
  important: true,
}