/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "917px",
      // => @media (min-width: 768px) { ... }

      lg: "1323px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["iranyekan", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-green-1": "#00C853",
        "brand-green-2": "#00C853",
        "brand-gray-1": "#E5E5E5",
        "brand-grey-2": "#7B7B7B",
        "brand-grey-3": "#373737",
        "brand-grey-4": "rgba(0, 0, 0, 0.3)",
        "brand-grey-5": "rgba(0, 0, 0, 0.2)",
      },
      spacing: {
        200: "12.5rem",
        36.5: "2.281rem",
        82: "5.125rem",
        156: "9.75rem",
        90: "5.625rem",
        288: "18rem",
        300: "18.75rem",
        347: "21.688rem",
        370: "23.125rem",
        470: "29.375rem",
        760: "47.5rem",
        "150%": "150%",
      },
      boxShadow: {
        "custom-1": "0px 0px 40px rgba(0, 0, 0, 0.05)",
        "custom-2": "0px 0px 30px rgba(0, 0, 0, 0.1)",
        "custom-3": "0px 0px 30px rgba(0, 200, 83, 0.05);",
        "custom-4": "0px 0px 10px rgba(0, 0, 0, 0.05);",
      },
      maxHeight: {
        370: "23.125rem",
      },
      minHeight: {
        370: "23.125rem",
        "1/2": "50%",
      },
      maxWidth: {
        760: "47.5rem",
      },
    },
  },
  plugins: [],
};
