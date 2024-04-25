/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
      colors: {
        primary: "#ECEEFF",
        "slate-gray": "#6D6D6D",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "nav-links": "#3C4A47",
        "content-color": "#01303A",
      },
      backgroundImage: {
        hero: "url('assets/images/big.png')",
      },
      screens: {
        wide: "1440px",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "8xl": "6rem", // Added the missing 8xl font size
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "1.75",
      },
      letterSpacing: {
        tight: "-0.05em",
        normal: "0",
        wide: "0.05em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};
