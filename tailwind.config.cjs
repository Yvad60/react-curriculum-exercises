/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#4A4E74",
        "primary-light": "#fefeff",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
