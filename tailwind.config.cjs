/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F5F7FB",
        "primary-dark-blue": "#4D5B9E",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
};
