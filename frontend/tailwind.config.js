/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark",
    themes: [
      {
        light: {
          primary: "#b252f2",

          secondary: "#1af2aa",

          accent: "#44118c",

          neutral: "#9cd9c8",

          "base-100": "#f5efed",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
      {
        dark: {
          primary: "#b252f2",

          secondary: "#1af2aa",

          accent: "#44118c",

          neutral: "#9cd9c8",

          "base-100": "#090526",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
};
