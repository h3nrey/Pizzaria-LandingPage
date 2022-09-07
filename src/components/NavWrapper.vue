<template>
  <div
    class="h-full flex flex-col items-center justify-center gap-10 md:flex-row"
  >
    <router-link
      v-for="(link, index) in links"
      :to="link.anchor"
      class="nav__link text-white font-mont font-semibold text-4xl md:text-base md:font-text md:font-normal md:hover:before:w-[120%] md:before:bg-red uppercase sm:before:hidden md:before:block"
      :class="{ active: link.activePage == true }"
      :key="index"
      @click="
        $emit('close');
        toggleActive(index);
      "
      >{{ link.text }}</router-link
    >
  </div>
</template>

<style scoped>
.nav__link {
  transition: all 400ms;
  position: relative;
  z-index: 2;
}

.nav__link::before {
  content: "";
  transition: all 400ms;
  top: 70%;
  position: absolute;
  height: 0.5rem;
  background-color: #fa0c3b;
  width: 0;
}

.nav__link.active::before {
  width: 120%;
}
</style>

<script setup>
import { reactive } from "vue";
let links = reactive([
  { anchor: "/", text: "Home", activePage: true },
  { anchor: "/ourmenu", text: "Our Menu", activePage: false },
  { anchor: "/aboutus", text: "About", activePage: false },
  { anchor: "/contact", text: "Contact", activePage: false },
]);

function toggleActive(key) {
  links.forEach((link, index) => {
    if (index !== key) {
      link.activePage = false;
    }
  });
  links[key].activePage = true;
  console.log(links[key].activePage);
}
</script>
