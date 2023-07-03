/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      s: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        blitzRed: '#74444A',
        blitzYellow: '#E4B777',
        blitzBlack: '#001011',
        blitzBlue: '#20A4F3'
      }
    },
  },
  plugins: [],
}

