<script setup>
import ViewTitle from "@/components/ViewTitle.vue";

const plates = [
  {
    img: "bg-pastaPlate",
    title: "pasta",
  },
  {
    img: "bg-circlePizza",
    title: "pizza",
  },
  {
    img: "bg-dessert",
    title: "dessert",
  },
];

console.log(ViewTitle);
</script>

<template>
  <div
    class="w-full flex flex-col items-center justify-end bg-black gap-16 py-16 px-6 pb-[6rem]"
  >
    <ViewTitle title="our menu" />
    <div class="flex justify-between w-full md:px-10 md:pb-32">
      <div class="flex justify-between w-full">
        <div
          v-for="(plate, index) in plates"
          :key="index"
          :class="{ plate: index === 1 }"
        >
          <a
            class="flex flex-col items-center gap-4 transition hover:-translate-y-[10%]"
            :href="`#${plate.title}`"
            v-smooth-scroll
          >
            <div
              class="w-[6.5rem] h-[6.5rem] rounded-full bg-center bg-cover md:w-[15rem] md:h-[15rem]"
              :class="plate.img"
            ></div>
            <p class="font-title text-2xl font-semibold uppercase text-red">
              {{ plate.title }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.plate {
  transform: translateY(25%);
}
</style>
