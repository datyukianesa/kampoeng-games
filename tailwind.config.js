const colors = require("tailwindcss/colors")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        amber: {
          default: "color.amber",
          darker: "color.amber.600",
          lighter: "color.amber.400",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
