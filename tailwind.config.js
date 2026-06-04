/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f3f4f6', // gray-100
          dark: '#111827', // gray-900
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500
          dark: '#059669', // emerald-600
        },
        card: {
          light: 'rgba(255, 255, 255, 0.7)',
          dark: 'rgba(31, 41, 55, 0.7)', // gray-800 with opacity
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
