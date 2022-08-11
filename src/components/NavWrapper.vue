<template>
  <div
    class="h-full flex flex-col items-center justify-center gap-10 md:w-full md:flex-row"
  >
    <router-link
      v-for="(link, index) in links"
      :to="link.anchor"
      class="nav__link text-white font-mont font-semibold text-4xl md:text-base md:font-text md:font-normal md:hover:before:w-full md:before:bg-red"
      :key="index"
      @click="$emit('close')"
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
  width: 0;
}
</style>

<script setup>
const links = [
  { anchor: "/", text: "Home" },
  { anchor: "/ourmenu", text: "OurMenu" },
  { anchor: "/contact", text: "Contact" },
  { anchor: "/aboutus", text: "AboutUs" },
];
</script>
