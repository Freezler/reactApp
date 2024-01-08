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
        keyframes: {
          fadeIn: {
            '0%, 100%': { opacity:'' 0 },
            '50%': { opacity: 1 },
          }
        }
      }
    },
  },
  plugins: [],
}