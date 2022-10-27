/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamliy: {
        lato: ["Lato"]
      },
      colors: {
        primary: "#6366f1",
        dark: "#1e293b",
        secondary: "#475569"
      }
    }
  },
  plugins: []
};
