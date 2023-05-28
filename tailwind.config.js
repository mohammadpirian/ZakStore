/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      rotate: {
        270: "270deg",
      },
      keyframes: {
        nav: {
          "0%": "height:'0%'",
          "100%": "height:'100%'",
        },
      },
      animation: {
        openNav: "nav 10s",
      },

      fontFamily: {
        iransans: ["sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        meCyan: "#CAE6E3",
        meGreen: "#11b07a",
        meGreen2: "#14C38E",
        meRed: "#FD5D5D",
        meRed2: "#A12422",
        meBlue: "#2D46B9",
        meBlue2: "#1E3163",
        mePurple: "#94DAFF",
        mePurple2: "#B983FF",
        meWhite: "#EEEEEE",
        meBlack: "#393E46",
        meBlack2: "#222831",
        mePrimary: "#00ADB5",
      },
    },
  },
  plugins: [],
};
