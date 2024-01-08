/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'primary': 'purple',
        'secondary': 'blue',
        'tertiary': 'white,
      },
      linearGradientColors: {
        'gradient': ['primary', 'secondary', 'tertiary']
      },
      animation: {
        spinSlow: 'spin 24s linear infinite',
        fadeIn: 'fadeIn .3s ease-in'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },


    },
  },
  plugins: [],
}