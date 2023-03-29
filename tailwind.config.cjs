/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "dark-to-light-violet-gradient":
          "linear-gradient(90deg, #672280 1.18%, #A626D3 100%)",
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
