/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{ts,tsx,js,js}', './src/main.tsx'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = config;
