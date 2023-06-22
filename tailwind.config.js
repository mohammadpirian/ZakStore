// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {
//       rotate: {
//         270: "270deg",
//       },
//       keyframes: {
//         nav: {
//           "0%": "height:'0%'",
//           "100%": "height:'100%'",
//         },
//       },
//       animation: {
//         openNav: "nav 10s",
//       },

//       fontFamily: {
//         iransans: ["sans-serif"],
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         meCyan: "#CAE6E3",
//         meGreen: "#11b07a",
//         meGreen2: "#14C38E",
//         meRed: "#FD5D5D",
//         meRed2: "#A12422",
//         meBlue: "#2D46B9",
//         meBlue2: "#1E3163",
//         mePurple: "#94DAFF",
//         mePurple2: "#B983FF",
//         meWhite: "#EEEEEE",
//         meBlack: "#393E46",
//         meBlack2: "#222831",
//         mePrimary: "#00ADB5",
//         meMain: "#D9D9D9",
//         meBlackDot: "#323232",
//         meBlueText: "#009EA8",
//       },
//     },
//   },
//   plugins: [],
// };
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
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
        meBlack: "#393E46",
        meBlack2: "#222831",
        mePrimary: "#00ADB5",
        meMain: "#E4E4E4",
        meButtonBlack: "#081226",
        meWhite: "#FAFAFA",
        meBlackDot: "#323232",
        meHalfBlack: "#565656",
        meBlueText: "#009EA8",
        meRedBtn: "#FE4242",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
