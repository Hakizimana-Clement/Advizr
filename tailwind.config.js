/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope,sans-serif"],
      },
      colors: {
        D_gray: {
          Ligth_cyan: "hsl(193, 38%, 86%)",
          Neon_green: "hsl(150, 100%, 66%)",
          Neon_green_Dark: "#4ac788",
          Grayish_blue: "hsl(217, 19%, 38%)",
          Dark_grayish_blue: " hsl(217, 19%, 24%)",
          DEFAUT_Dark_Blue: "hsl(218, 23%, 16%)",
        },
        action: {
          error: "#E53835",
          success: "#1D8E36",
          warning: "#FBC02D",
        },
      },
      boxShadow: {
        glow: "0px 0px 25px hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
