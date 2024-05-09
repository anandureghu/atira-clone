/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      subjectivity: {
        regular: ["subjectivity", "sans-serif"],
        medium: ["subjectivity-medium", "sans-serif"],
        bold: ["subjectivity-bold", "sans-serif"],
        extrabold: ["subjectivity-extrabold", "sans-serif"],
      },
      inconsolata: ["inconsolata", "sans-serif"],
    },
  },
  plugins: [],
};
