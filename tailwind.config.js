const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      nice: {
        50: "#a4a5a6",
        100: "#949596",
        200: "#848586",
        300: "#747576",
        400: "#646566",
        500: "#545556",
        600: "#444546",
        700: "#343536",
        800: "#242526",
        900: "#141516",
      },
      // bruh is a collection of colors used for various
      // things
      bruh: {
        50: "#7289da",
        100: "#ffcc5b",
      },

      transparent: colors.transparent,
      current: colors.current,

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
