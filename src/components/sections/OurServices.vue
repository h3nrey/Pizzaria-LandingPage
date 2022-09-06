<script setup>
import PizzaIcon from "@/components/icons/PizzaIcon.vue";
import PackageIcon from "@/components/icons/PackageIcon.vue";
import MobileIcon from "@/components/icons/MobileIcon.vue";
import { PhArrowRight } from "phosphor-vue";
const services = [
  {
    icon: MobileIcon,
    title: "online delivery",
    buttonTxt: "order online",
  },
  {
    icon: PackageIcon,
    title: "click & collect",
    buttonTxt: "takeout order",
  },
  {
    icon: PizzaIcon,
    title: "restaurant dinning",
    buttonTxt: "book a table",
  },
];
</script>

<template>
  <section
    id="ourservices"
    class="px-6 py-10 bg-singleSlicePizza text-center text-white flex flex-col items-center gap-16 md:flex-row md:justify-between md:py-32 md:px-10 md:gap-0"
  >
    <div class="section__text flex flex-col items-center gap-4 md:items-start md:w-min">
      <h2 class="font-title font-[500] text-[2.5rem] text-center md:text-[4rem] md:text-left leading-[100%]">
        BRINGING HAPPINESS TO YOU
      </h2>
      <p class="md:text-left md:font-[500]">
        Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
      </p>
    </div>

    <div class="services__grid grid grid-rows-3 gap-6 md:grid-cols-3 md:grid-rows-1 md:gap-0 md:min-w-max">
      <div
        v-for="(service, index) in services"
        name="service"
        class="flex flex-col items-center gap-4"
        :key="index"
      >
        <div
          name="icon__wrapper"
          class="bg-red rounded-full w-20 h-20 md:w-32 md:h-32 flex items-center justify-center"
        >
          <component :is="service.icon" :size="'70%'"></component>
        </div>
        <h3 class="uppercase font-title text-[1.5rem] font-bold md:text-[2rem]">
          {{ service.title }}
        </h3>
        <button class="flex">
          <span class="font-mont font-bold">{{ service.buttonTxt }}</span>
          <ph-arrow-right :size="24" class="arrow"/>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>

  .arrow{
    transition: all 300ms;
    transform: translateX(0) scaleY(1);
  }
  button:hover .arrow{
    transform: translateX(50%) scaleY(0.7);
  }
</style>