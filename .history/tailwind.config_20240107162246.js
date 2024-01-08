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
          fadeIn: {
            '0%, 100%': { opacity: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          }
        }
      }
    },
  },
  plugins: [],
}