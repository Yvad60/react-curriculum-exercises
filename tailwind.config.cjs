/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "btn-shadow": "1px -8px 4px -1px #a20037 inset",
      },
    },
  },
  plugins: [],
};
