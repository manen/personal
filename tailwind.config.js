const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      accent: {
        50: "#ffffff",
        100: "#eeeeee",
        200: "#dddddd",
        300: "#cccccc",
        400: "#bbbbbb",
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
