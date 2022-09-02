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
  <ViewTitle title="our menu" />
  <div class="w-full flex flex-col items-center justify-end">
    <div class="flex justify-between w-full pb-20 md:p-0">
      <div
        class="flex justify-between w-full translate-y-[93%] md:translate-y-[10%]"
      >
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
              class="w-[6.5rem] h-[6.5rem] rounded-full bg-center bg-cover md:w-[19.5rem] md:h-[19.5rem]"
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
