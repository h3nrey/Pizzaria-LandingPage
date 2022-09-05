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
      darkGray: "#4A4A4A",
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
      singleSlicePizza: "url('/src/assets/singleSlicePizzaDarkBg.jpg')",
      pizzaOverflow: "url('/src/assets/pizzaFilligOverflowing.jpg')",
      dessert: "url('/src/assets/dessert.jpg')",
      pastaPlate: "url('/src/assets/pastaPlate.jpg')",
      outdoorRestaurant: "url('/src/assets/outdoorRestaurant.jpg')",
      history: "url('/src/assets/history.jpg')",
      founder: "url('/src/assets/founder.jpg')",
      firstLocal: "url('/src/assets/firstRestaurant.jpg')"
    },
    screens: {
      sm: "350px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    keyframes: {
      showingDown: {
        "0%, 100%": { transform: "translateY(100%)" },
        "50%": { transform: "translateY(50%)" },
      },
      showingRight: {
        "0%, 100%": { transform: "translateX(50%)" },
        "50%": { transform: "translateX(0%)" },
      },
    },
  },
  plugins: [],
};
