<template>
  <main>
    <div
      class="home w-[100vw] before:absolute before:bg-pizzaOverflow before:top-0 before:left-0 before:h-[47vh] before:w-[100vw] before:bg-center before:bg-cover before:z-[-1] before:brightness-50 px-6 md:before:h-[75vh] py-20"
    >
      <MainOurmenu />
      <OurmenuMenu />
    </div>
  </main>
</template>

<script setup>
import MainOurmenu from "@/components/sections/MainOurmenu.vue";
import OurmenuMenu from "@/components/sections/OurmenuMenu.vue";
</script>
