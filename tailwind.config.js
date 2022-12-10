/* 
100: Main Color
200: Border Color
300: Hover Color
*/

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        sans: ['"GeneralSans-Variable"', ...defaultTheme.fontFamily.sans],
      },
      height: {
        "fit-content": "fit-content",
      },
      colors: {
        primary: {
          100: "#0057fa",
          200: "#669afc", // 40%
          300: "#3379fb", // 20%
        },
        secondary: {
          100: "#FC5F29",
          200: "#fd9f7f", // 40%
          300: "#fd7f54", // 20%
        },
      },
    },
  },
  plugins: [],
};
