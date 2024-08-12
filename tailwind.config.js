import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/components/*.jsx'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'rgb(251, 116, 19)',
          white: 'rgb(255, 255, 255)',
          'light-grey': 'rgb(149, 158, 172)',
          'dark-blue': 'rgb(37, 45, 55)',
          'very-dark-blue': 'rgb(18, 20, 23)'
        }
      },

      fontFamily: {
        sans: ['"Overpass"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

