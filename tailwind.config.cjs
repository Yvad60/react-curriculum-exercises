/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        "btn-shadow": "1px -8px 4px -1px #a20037 inset",
      },
    },
  },
  plugins: [],
};
