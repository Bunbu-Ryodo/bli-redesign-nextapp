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
        blitzLighterRed: 'rgba(116, 68, 74, 0.45)',
        blitzYellow: '#E4B777',
        blitzLighterYellow: 'rgba(228, 183, 119, 0.45)',
        blitzBlack: '#001011',
        blitzBlue: '#20A4F3'
      },
      lineHeight: {
        '12': '3rem',
      },
      boxShadow: {
        'blitzShadow': '0, 0, 4px, -50px, rgba(0, 0, 0, 0.25)'
      },
      height: {
        '128': '32rem'
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

