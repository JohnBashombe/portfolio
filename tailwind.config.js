/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EBF0E9',
        secondary: '#F3F3F3',
      },
    },
    fontFamily: {
      serif: ['Source Serif Pro', 'serif'],
    },
  },
  plugins: [],
};
