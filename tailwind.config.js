module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "living-bg": "#F69921",
        "living-header": "#0B0D17",
        "living-red": "#EB3728",
        "living-chart": "#D0651A",
      },
      backgroundImage: {
        about:
          "url('https://res.cloudinary.com/living-solutions/image/upload/v1633075754/living-images/about_jyuu0p.jpg')",
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
