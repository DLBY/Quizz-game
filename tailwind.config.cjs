/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      green: {
        dark: '#012025',
        DEFAULT: '#00C957',
        secondary: '#019842',
        pastel: '#067E7B',
      },
      blue: {
        DEFAULT: '#4E8098',
        light: '#90C2E7',
      },
      red: {
        DEFAULT: colors.red[500],
        alert: '#E74C3C',
      },
      purple: '#9B59B6',
      sand: '#F9E79F',
    },
    fontFamily: {
      sans: ['Poppins-Regular', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        hogwarts: "url('/src/assets/images/hogwarts-large.png')",
        'hogwarts-medium': "url('/src/assets/images/hogwarts-medium.png')",
        'hogwarts-small': "url('/src/assets/images/hogwarts-small.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
