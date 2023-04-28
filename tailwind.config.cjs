/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        readable: "80ch",
      },
      backgroundColor: {
        light: "#FAFAFA",
        ivory: "#FFFFF0",
        offWhite: "#FAF9F6",
      },
      colors: {
        "dark-blue": "#353935",
      },
      fontFamily: {
        brandon: "brandon",
        "brandon-light": "brandon-light",
        "brandon-thin": "brandon-thin",
        "brandon-bold": "brandon-bold",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"),],
};
