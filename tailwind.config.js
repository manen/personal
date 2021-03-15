const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
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
      discord: {
        50: "#7289da",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
