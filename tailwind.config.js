/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // "./src/dashboard/**/*.html",
    "./src/dashboard/index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope,sans-serif"],
      },
      colors: {
        D_gray: {
          Ligth_cyan: "hsl(193, 38%, 86%)",
          Neon_green: "hsl(150, 100%, 66%)",
          Grayish_blue: "hsl(217, 19%, 38%)",
          Dark_grayish_blue: " hsl(217, 19%, 24%)",
          DEFAUT_Dark_Blue: "hsl(218, 23%, 16%)",
        },
      },
      boxShadow: {
        glow: "0px 0px 25px hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
