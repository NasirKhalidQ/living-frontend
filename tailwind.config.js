module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "living-bg": "#F69921",
        "living-header": "#0B0D17",
        "living-red": "#EB3728",
      },
      backgroundImage: {
        about: "url('about.jpg')",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    extend: {
      filter: ["hover"],
    },
  },
};
