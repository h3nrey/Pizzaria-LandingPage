/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: "#FA0C3B",
      yellow: "#FECC00",
      white: "#F7F6F2",
      gray: "#EBEBEB",
      black: "#1E1E1E",
    },
    fontFamily: {
      logo: "Caveat",
      title: "Oswald",
      text: "Source Sans Pro",
      mont: "Montserrat",
    },
    backgroundImage: {
      home: "url('/src/assets/cuttedPizzaSpacedHome.jpg')",
      circlePizza: "url('/src/assets/circlePizza.png')",
    },
  },
  plugins: [],
};
