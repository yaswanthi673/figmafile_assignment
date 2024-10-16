/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, rgba(250, 117, 248, 0.28) 0%, rgba(250, 117, 248, 0) 100%)',
        'custom-radial2': 'radial-gradient(50% 50% at 50% 50%, rgba(250, 117, 248, 0.28) 0%, rgba(250, 117, 248, 0) 100%)',
      },



      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'scroll-fade-up': 'scroll-fade-up 1s ease-out forwards',
      },
      
    },
  },
  plugins: [],
}