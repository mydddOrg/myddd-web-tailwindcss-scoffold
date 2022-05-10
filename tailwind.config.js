module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('assets/icon.jpeg')",
        book: "url('assets/book.jpeg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
