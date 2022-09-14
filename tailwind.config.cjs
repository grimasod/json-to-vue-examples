/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ['"Exo 2"', 'sans-serif'],
      'serif': ['"Roboto+Slab"', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      gray: '#F0EAEA',
      gray2: '#E0D1D1',
      gray3: '#CCB3B3',
      gray4: '#FBF9F9',
      gray5: '#EAE1E1',
      light: '#D9FFFF',
      navy: '#072448',
      blue: '#134E6F',
      blue2: '#1A6D9B',
      blue3: '#95E8FF',
      teal: '#b1ebee',
      teal1: '#54D2D2',
      teal3: '#009688',
      green: '#3B933B',
      yellow2: '#FFA822',
      orange: '#FF6150',
      red: '#CC2C5D',
      red1: '#E4819F'
    }
  },
  plugins: []
}
