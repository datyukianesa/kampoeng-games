const colors = require("tailwindcss/colors")
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        cover: "url('/images/amogus.png')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: {
          DEFAULT: "rgba(243,195,84,255)",
          lighter: "rgba(255,211,112,255)",
          darker: "rgba(165,128,40,255)",
        },
        secondary: {
          DEFAULT: "rgba(26,26,26,255)",
          lighter: "rgba(77,77,77,255)",
          darker: "rgba(0,0,0,255)",
        },
        complementary: {
          DEFAULT: "rgba(108,242,189,255)",
          lighter: "rgba(138,255,208,255)",
          darker: "rgba(56,165,123,255)",
        },
      },
      fontFamily: {
        gothic: "Century Gothic",
        // neue: "Baron Neue",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
