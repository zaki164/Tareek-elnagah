/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },
    extend: {
      colors: {
        mainColor: "#00c6c7",
        // mainColor: "#00C0C1",
        mainColor2: "#3A4650",
        lightBg: "#535D65",
        lightBg2: "#6B747C",
        darkColor: "#242424",
        whitelite1: "#cbcbcbd6",
        // whitelite1: "#fff8",
        // whitelite1: "#ffffffd6",
        whitelite2: "#fff8",
        grayText: "#ddd",
        // grayText: "#ABABAB",
        goldColor: "#ff991c",
        redColor: "#e54f4f",
        grayColor: "#656565",
        grayColor3: "#ebece6",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Cairo: ["Cairo", "sans-serif"],
      },
      boxShadow: {
        box: "0px 3px 6px #00000029",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
