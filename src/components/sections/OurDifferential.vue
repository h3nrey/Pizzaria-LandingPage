<script setup>
const differentials = [
  {
    class: "bg-circlePizza",
    title: "fresh ingredients",
    description:
      "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
  },
  {
    class: "bg-circlePizza",
    title: "handmade mozzarela",
    description:
      "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
  },
  {
    class: "bg-circlePizza",
    title: "'SECRET RECIPE' SAUCE",
    description:
      "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
  },
];
</script>

<template>
  <section
    id="ourdifferential"
    class="bg-gray px-6 py-10 md:py-[11.25rem] md:px-20 w-full"
  >
    <div
      class="diferential__grid grid grid-rows-[1fr 1fr 1fr] text-center gap-10 md:grid-cols-3"
    >
      <div
        class="diferential__item flex flex-col items-center gap-4"
        v-for="(diff, index) in differentials"
        :key="index"
        :class="{ central__grid__element: index === 1 }"
      >
        <div
          :src="diff.image"
          alt=""
          class="diferential__image rounded-full bg-black w-40 h-40 bg-center bg-contain"
          :class="diff.class"
        ></div>
        <h2
          class="differential__title text-red text-2xl leading-[1] font-title uppercase font-bold md:text-[2rem]"
        >
          {{ diff.title }}
        </h2>
        <p class="font-text text-[1rem] text-black">
          {{ diff.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 960px) {
  .central__grid__element {
    transform: translateY(25%);
  }
}
</style>
