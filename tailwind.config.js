/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3CB371",
          secondary: "#7B68EE",
          accent: "#BDB76B",
          neutral: "#A9A9A9",
          "base-100": "#EAEAEA",
          info: "#4169E1",
          success: "#2E8B57",
          warning: "#DAA520",
          error: "#B22222",
        },
        dark: {
          primary: "#33975D",
          secondary: "#695DCB",
          accent: "#A29B5C",
          neutral: "#222222",
          "base-100": "#151515",
          info: "#3451B3",
          success: "#26734A",
          warning: "#B8860B",
          error: "#991919",
        },
      },
    ],
    darkTheme: "dark",
    logs: false,
  },
};
