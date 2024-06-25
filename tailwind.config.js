/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        manrope: ["Manrope"],
        optima: ["Optima"],
      },
      colors: {
        darkGreen: "#014F54",
        gold: "#b89238"
      },
    },
  },
  plugins: [],
};
