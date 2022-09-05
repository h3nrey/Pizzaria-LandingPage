<script setup>
import pizzaPng from "@/assets/singleSlicePizzaDarkBg.jpg";
import pastaPng from "@/assets/pastaPlate.jpg";
import dessertPng from "@/assets/dessert.jpg";
import { PhCaretRight } from "phosphor-vue";
const menu = [
  {
    flavorTitle: "pasta",
    flavorDesc:
      "Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.",
    plates: [
      {
        img: pastaPng,
        title: "caprese pasta",
        desc: "Roma tomatoes, fresh basil, Sicilian extra-virgin olive oil, pine nuts, and fresh mozzarella.",
      },
      {
        img: pastaPng,
        title: "SPAGHETTI BOLOGNESE",
        desc: "With Chianti-braised meat sauce and fresh basil.",
      },
      {
        img: pastaPng,
        title: "FETTUCCINE ALFREDO",
        desc: "Freshly prepared fettuccine pasta swirled in homemade cream sauce.",
      },
      {
        img: pastaPng,
        title: "TRUFFLE TORTELLONI",
        desc: "Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.",
      },
    ],
    crafting: false,
  },
  {
    flavorTitle: "pizza",
    flavorDesc:
      "Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.",
    plates: [
      {
        img: pizzaPng,
        title: "Paesano",
        desc: "Pepperoni, sliced sausage, roasted peppers, red onions, Pecorino Romano cheese, Sicilian extra-virgin olive oil, and fresh garlic.",
      },
      {
        img: pizzaPng,
        title: "SPICY FENNEL",
        desc: "House-made fennel sausage, jalapeño, roasted red peppers, garlic sauce, carmelized onions, goat cheese, and Wisconsin mozzarella.",
      },
      {
        img: pizzaPng,
        title: "ITALIAN MARKET",
        desc: "Prosciutto di Parma, ricotta cheese, pepperoni, red onions, Wisconsin mozzarella, and pizza sauce, drizzled with pesto sauce.",
      },
      {
        img: pizzaPng,
        title: "tuscan vegan",
        desc: "No Cheese. Marinara sauce, zucchini & squash, Portabella mushrooms, black olives, eggplant, roasted peppers, artichoke hearts, red onions, and fresh arugula.",
      },
      {
        img: pizzaPng,
        title: "SHRIMP ALFREDO",
        desc: "Pancetta, shrimp, red onions, Alfredo sauce, mozzarella, and fresh arugula.",
      },
      {
        img: pizzaPng,
        title: "BUFALINA PIZZA",
        desc: "Truffle olive oil sauce, Wisconsin mozzarella, Prosciutto di Parma, fresh arugula, and fresh mozzarella.",
      },
    ],
    crafting: [
      {
        stepTitle: "choose your size",
        stepDesc: "8″, 12″, 14″, 18″",
        hasToppings: false,
      },
      {
        stepTitle: "CHOOSE YOUR sauce",
        stepDesc: "MARINARA, BBQ, SPICY BBQ, OIL, ALFREDO, OR HOT SAUCE",
        hasToppings: false,
      },
      {
        stepTitle: "CHOOSE YOUR topping",
        hasToppings: true,
        toppingTypes: [
          {
            type: "traditional",
            toppings: [
              "extra mozzarela",
              "canadian bacon",
              "sliced sausage",
              "sun-dried tomatoes",
              "roasted peppers",
              "fresh basil",
              "bell peppers",
              "caramelized onions",
              "feta cheese",
              "italian beef",
            ],
          },
          {
            type: "premium",
            toppings: [
              "ricotta cheese",
              "goat cheese",
              "prosciutto di parma",
              "fresh mozzarella",
              "portabella mushrooms",
              "fresh arugula",
            ],
          },
        ],
      },
    ],
  },
  {
    flavorTitle: "dessert",
    flavorDesc:
      "Eros ornare nullam phasellus morbi mi rhoncus nunc neque risus mattis risus metus in suscipit scelerisque eu duis penatibus eros magna cursus elementum orci.",
    plates: [
      {
        img: dessertPng,
        title: "TRUFFLE CHOCOLATE",
        desc: "Crafted with layers of dark, moist chocolate and a silky truffle chocolate filling.",
      },
      {
        img: dessertPng,
        title: "ITALIAN CREAM CAKE",
        desc: "Sweet cream cake with coconut, pecans, and cream cheese frosting.",
      },
      {
        img: dessertPng,
        title: "PIZZERIA'S TIRAMISU",
        desc: "Freshly prepared fettuccine pasta swirled in homemade cream sauce.",
      },
      {
        img: dessertPng,
        title: "ITALIAN CANNOLI",
        desc: "Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.",
      },
      {
        img: dessertPng,
        title: "carrot cake",
        desc: "Cheese tortelloni with truffle mushroom sauce, topped with fresh arugula.",
      },
    ],
    crafting: false,
  },
];
</script>

<template>
  <div class="flex flex-col pt-32 pb-20 gap-16">
    <div
      v-for="(flavor, index) in menu"
      :key="index"
      class="flex flex-col gap-10"
      :id="flavor.flavorTitle"
    >
      <div class="md:flex justify-between items-end md:gap-[17rem]">
        <h2 class="font-title font-bold uppercase text-red text-[4rem]">
          {{ flavor.flavorTitle }}
        </h2>
        <p class="font-text md:text-right">{{ flavor.flavorDesc }}</p>
      </div>

      <div class="flex flex-col md:grid md:grid-cols-2 gap-y-8 gap-x-20">
        <div
          class="flex flex-col gap-4 md:flex-row"
          v-for="(plate, index) in flavor.plates"
          :key="index"
        >
          <img
            :src="plate.img"
            alt=""
            class="w-[12rem] h-[8rem] md:w-[30%] rounded-xl"
          />
          <div class="md:flex md:flex-col md:gap-4 md:w-[59.5%]">
            <h3 class="font-title font-bold text-black text-[2rem] uppercase">
              {{ plate.title }}
            </h3>
            <p class="font-text text-black text-base upper">{{ plate.desc }}</p>
          </div>
        </div>
      </div>

      <div v-if="flavor.crafting" class="gap-6 flex flex-col">
        <div class="flex flex-col gap-4">
          <h2 class="font-title font-bold uppercase text-[2.5rem] text-red">
            craft your own
          </h2>
          <p class="font-text text-black">
            Erat pharetra suscipit tincidunt in eget ultricies lectus posuere
            arcu.
          </p>
        </div>
        <div class="flex flex-col gap-6 md:flex-wrap md:h-[29rem]">
          <div
            v-for="(step, index) in flavor.crafting"
            :key="index"
            class="flex flex-col gap-4 md:inline-flex"
            :class="{ aside__step: index === 2 }"
          >
            <h3 class="font-title font-bold text-red uppercase">
              {{ `step ${index + 1}` }}
            </h3>
            <p class="font-title font-bold uppercase text-black text-[1.5rem]">
              {{ step.stepTitle }}
            </p>
            <p
              class="uppercase text-darkGray font-bold font-title"
              v-if="step.hasToppings === false"
            >
              {{ step.stepDesc }}
            </p>
            <div
              v-show="step.hasToppings"
              v-for="(type, index) in step.toppingTypes"
              :key="index"
              class="gap-4 flex flex-col"
            >
              <p
                class="uppercase text-darkGray font-bold font-title text-[1.125rem]"
              >
                {{ `${type.type} topping` }}
              </p>
              <div
                class="flex flex-col flex-wrap gap-2"
                :style="{ height: index < 1 ? '10rem' : '6rem' }"
              >
                <p
                  v-for="(topping, index) in type.toppings"
                  :key="index"
                  class="capitalize text-black font-bold inline-flex text-[0.9375rem] gap-2 items-center"
                >
                  <ph-caret-right
                    :size="16"
                    weight="fill"
                    class="text-darkGray flex justify-start"
                  />
                  {{ topping }}
                </p>
              </div>
            </div>

            <!-- <hr v-if="index !== 2" class="text-black" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 960px) {
  .aside__step {
    float: left;
    border-left: 1px solid #1e1e1e;
    padding-left: 1rem;
  }
}
</style>
