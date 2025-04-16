/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B6B',
          dark: '#E05050',
          light: '#FF8A8A'
        },
        secondary: {
          DEFAULT: '#4ECDC4',
          dark: '#3DBDB5',
          light: '#6FDFD7'
        },
        dark: {
          DEFAULT: '#292F36',
          light: '#3A4149'
        },
        light: {
          DEFAULT: '#F7F9FB',
          dark: '#E8EDF2'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: [],
}