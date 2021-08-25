const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      grey: {
        light: "#FAFBFD",
      },
      amber: {
        light: "#F8D57E",
      },
      bgColor: {
        light: "#FAFBFD",
      },
      black: colors.black,
      green: colors.green,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },

    extend: {},
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
    height: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      const extendLineThrough = {
        ".line-through": {
          textDecoration: "line-through",
          "text-decoration-color": "black",
          "text-decoration-thickness": "3px",
        },
      };
      addUtilities(extendLineThrough);
    },
  ],
  daisyui: {
    styled: true,
  },
};
