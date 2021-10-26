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
        "living-contrast": "#2c2d2f",
        "living-background": "#f0f2f3",
        "living-brown": "#523d3c",
        "living-c1-header": "#fefbe9",
        "living-c1-background": "#e1eedd",
        "living-c2-header": "#2b6777",
        "living-c2-background": "#c8d8e4",
        "living-c3-header": "#ef9273",
        "living-c3-background": "#fef9f8",
      },
      backgroundImage: {
        about:
          "url('https://res.cloudinary.com/living-solutions/image/upload/v1633087266/living-images/about_udyfbh.jpg')",
      },
      shadow: ["hover"],
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    fontFamily: {
      Spectral: ["Spectral, sans-serif"],
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
      scale: ["group-hover"],
    },
  },
};
