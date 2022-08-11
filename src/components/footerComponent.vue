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
    class="bg-gray flex flex-col items-center text-center py-10 px-6 gap-6"
  >
    <Logo />
    <p class="font-text text[1rem] text-black">
      Vivamus convallis fermen sollicitudin et, vitae <br />
      elit in vel ultrices sed in urna ipsum ullamcorper auctor.
    </p>

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

    <section v-for="(section, index) in footerSections" :key="index">
      <h2 class="font-title text-black uppercase font-bold text-2xl">
        {{ section.title }}
      </h2>
      <div class="flex flex-col">
        <router-link
          to="/ourmenu"
          class="font-text text-black text-base font-light capitalize underline"
          v-for="(link, index) in section.sections"
          :key="index"
        >
          {{ link }}
        </router-link>
      </div>
    </section>
    <span class="text-black mt-6 font-text"
      >made by
      <a href="https://github.com/h3nrey" class="font-semibold" target="_blank"
        >Pedro</a
      ></span
    >
  </footer>
</template>
