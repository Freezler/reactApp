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
          fade: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          }
        }
      }
    },
  },
  plugins: [],
}