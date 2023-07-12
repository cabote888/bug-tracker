/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "500px",
        "md": "950px",
      },
      maxWidth: {
        readable: "80ch",
      },
      backgroundColor: {
        light: "#FAFAFA",
        ivory: "#FFFFF0",
        offWhite: "#FAF9F6",
        grayBlue: "#D6E0EF",
        lightBlue: "#e8f4f8",
        lightGrayBlue: "#f5f7fa",
      },
      colors: {
        "dark-blue": "#353935",
        "offWhite": "#FAF9F6",
        "lightGrayBlue": "#f5f7fa",
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
