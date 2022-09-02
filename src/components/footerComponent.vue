<script setup>
import { PhInstagramLogo, PhYoutubeLogo, PhFacebookLogo } from "phosphor-vue";
import Logo from "./Logo.vue";

const footerSections = [
  {
    title: "about us",
    sections: ["our story", "our location", "current deals", "contact us"],
  },
  {
    title: "our menu",
    sections: ["pizza", "pasta", "dessert", "take & bake"],
  },
  {
    title: "our location",
    sections: [
      "the pizzeria rome",
      "the pizzeria florence",
      "the pizzeria bologna",
      "the pizzeria venice",
    ],
  },
];
</script>

<template>
  <footer
    class="bg-gray flex flex-col items-center text-center py-10 px-6 gap-6 md:items-start md:px-20 w-[100vw]"
  >
    <div
      class="flex flex-col items-center gap-8 md:flex md:flex-row md:justify-between md:w-full"
    >
      <div
        class="flex flex-col items-center gap-6 md:flex-col md:flex md:gap-6 md:items-start"
      >
        <Logo />
        <div name="social__row" class="flex gap-4">
          <a href="https://vuejs.org">
            <ph-instagram-logo :size="32" weight="fill" class="text-red" />
          </a>
          <a href="https://vuejs.org">
            <ph-youtube-logo :size="32" weight="fill" class="text-red" />
          </a>
          <a href="https://vuejs.org">
            <ph-facebook-logo :size="32" weight="fill" class="text-red" />
          </a>
        </div>
        <p class="font-text text[1rem] text-black md:text-start md:w-60%">
          Vivamus convallis fermen sollicitudin et, vitae
          <br class="sm:inline md:hidden" />
          elit in vel ultrices sed in urna <br class="sm:hidden md:block" />
          ullamcorper auctor.
        </p>
      </div>

      <div
        class="md:flex-row md:flex md:gap-20 gap-6 flex-col flex items-center"
      >
        <section
          v-for="(section, index) in footerSections"
          :key="index"
          class="md:flex-col md:flex md:gap-9 md:underline-offset-0 gap-2 flex-col flex items-center"
        >
          <h2 class="font-title text-black uppercase font-bold text-2xl">
            {{ section.title }}
          </h2>
          <div class="flex flex-col">
            <router-link
              to="/ourmenu"
              class="font-text text-black text-base font-light capitalize underline md:no-underline md:hover:underline transition-all duration-300"
              v-for="(link, index) in section.sections"
              :key="index"
            >
              {{ link }}
            </router-link>
          </div>
        </section>
      </div>
    </div>

    <span class="text-black mt-6 font-text capitalize"
      >made by
      <a href="https://github.com/h3nrey" class="font-semibold" target="_blank"
        >Pedro
      </a>
    </span>
  </footer>
</template>
