// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5e3517',
        secondary: '#e4d6cc',
        accent: '#c4704f',
        background: '#f5f0ec',
        text: '#786864',
        heading: '#f97e50',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cardo: ['Cardo', 'serif'],
        americanTypewriterCondensed: [
          'American Typewriter Condensed',
          'monospace',
        ],
      },
      keyframes: {
        modalEntry: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        modalEntry: 'modalEntry 0.3s ease-out',
        fadeIn: 'fadeIn 0.2s ease-out',
      }
    },
  },
  plugins: [],
};
