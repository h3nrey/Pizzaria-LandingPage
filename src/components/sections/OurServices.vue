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
    class="px-6 py-10 bg-singleSlicePizza text-center text-white flex flex-col items-center gap-16"
  >
    <div class="section__text flex flex-col items-center gap-4">
      <h2 class="font-title font-bold text-[2.5rem] text-center">
        BRINGING HAPPINESS TO YOU
      </h2>
      <p class="">
        Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
      </p>
    </div>

    <div class="services__grid grid grid-rows-3 gap-6">
      <div
        v-for="(service, index) in services"
        name="service"
        class="flex flex-col items-center gap-4"
        :key="index"
      >
        <div
          name="icon__wrapper"
          class="bg-red rounded-full w-20 h-20 flex items-center justify-center"
        >
          <component :is="service.icon"></component>
        </div>
        <h3 class="uppercase font-title text-[1.5rem] font-bold">
          {{ service.title }}
        </h3>
        <button class="flex">
          <span class="font-mont font-bold">{{ service.buttonTxt }}</span>
          <ph-arrow-right :size="24" />
        </button>
      </div>
    </div>
  </section>
</template>
