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
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1240px',
      },
    },
    extend: {
      screens: {
          sm: '425px',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
          '2xl': '1350px',
      }
    }
  },
  plugins: [],
  important: true,
}