/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        heading: "var(--heading)",
        subHeading: "var(--subHeading)",
        textColor: "var(--textColor)",
        lineColor: "var(--line-color)",
        linkColor: "var(--link-color)",
      },
    },
  },
  plugins: [],
};
