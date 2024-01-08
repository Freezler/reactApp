/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {

        fadeIn: 'fadeIn 5s ease-in-out'
      },

      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: 0 },
          '50%': { transform: 'rotate(3deg)' },
        }
      },


    },
  },
  plugins: [],
}