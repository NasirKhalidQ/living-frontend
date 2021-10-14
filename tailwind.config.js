module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "living-bg": "#F69921",
        "living-header": "#054f6A",
        "living-yellow": "#F69921",
        "living-red": "#EB3728",
      },
      backgroundImage: {
        about:
          "url('https://res.cloudinary.com/living-solutions/image/upload/v1633087266/living-images/about_udyfbh.jpg')",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    extend: {
      filter: ["hover"],
      cursor: ["disabled"],
      pointerEvents: ["disabled"],
      opacity: ["disabled"],
    },
  },
};
