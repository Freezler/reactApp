/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease infinite',
        fade: 'fadeIn 5s ease-in-out'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
fadeIn: (theme) => ({
  '0%': { '--tw-bg-opacity': '0%' },
  '100%': { '--tw-bg-opacity': '100%' },
})
      }
    },
  },
  plugins: [],
}