/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    keyframes: {
      'slide-in': {
        '0%': {
          '-webkit-transform': 'translateX(400px)',
          transform: 'translateX(400px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(0px)',
          transform: 'translateX(0px)',
        },
      },
      'slide-out': {
        '0%': {
          '-webkit-transform': 'translateX(0px)',
          transform: 'translateX(0px)',
        },
        '100%': {
          '-webkit-transform': 'translateX(-200px)',
          transform: 'translateX(-200px)',
        },
      },
      'spin': {          
        '0%': {
          '-webkit-transform': 'rotate(0deg)',
          transform: 'rotate(0deg)',
        },
        '100%': {
          '-webkit-transform': 'rotate(360deg)',
          transform: 'rotate(360deg)',
        },
      }
    },
    animation: {
      'slide-in': 'slide-in 0.5s ease-out',
      'slide-out': 'slide-out 0.5s ease-out',
      'spin': 'spin 2s linear infinite'
    }
  }
}