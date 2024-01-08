/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {

        fadeIn: 'fadeIn .7s ease-in'
      },

      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },


    },
  },
  plugins: [],
}