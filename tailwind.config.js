import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#FF3811",
        title: "#151515",
        text: "#444444",
        altText: "#737373",
      },
      fontFamily: {
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
