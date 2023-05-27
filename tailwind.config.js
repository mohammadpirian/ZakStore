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
    },
  },
  plugins: [],
};
