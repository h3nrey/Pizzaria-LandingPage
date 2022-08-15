<script setup>
import ViewTitle from '../ViewTitle.vue';

const plates = [
  {
    img: "bg-pastaPlate",
    title: "Pasta",
  },
  {
    img: "bg-circlePizza",
    title: "Pizza",
  },
  {
    img: "bg-dessert",
    title: "Dessert",
  }
  
]
</script>

<template>
  <div class="w-full h-[21.5rem] flex flex-col items-center justify-end">
    <ViewTitle  title="our menu"/>
    <div class="flex justify-between w-full">
      <div class="flex justify-between w-full translate-y-[55%]">
        <div v-for="(plate,index) in plates" :key="index" class="flex flex-col items-center gap-4" :class="{plate: index === 1}">
        <div class="w-[6.5rem] h-[6.5rem] rounded-full bg-center bg-cover" :class="plate.img"></div>
        <p class=" font-title text-2xl font-semibold uppercase text-red">{{plate.title}}</p>
      </div>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.plate{
  transform: translateY(25%);
}
</style>