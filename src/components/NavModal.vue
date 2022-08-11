<script setup>
import { PhX } from "phosphor-vue";
import { defineProps } from "vue";

const props = defineProps({
  show: Boolean,
});

console.log(props);

const links = [
  { anchor: "/", text: "Home" },
  { anchor: "/ourmenu", text: "OurMenu" },
  { anchor: "/contact", text: "Contact" },
  { anchor: "/aboutus", text: "AboutUs" },
];
</script>

<template>
  <Transition name="modal">
    <div
      id="modalWrapper"
      class="bg-red w-[100vw] h-[100vh] flex flex-col items-center gap-10 fixed top-0 left-0 z-50 p-6"
    >
      <button class="w-full flex justify-end" @click="$emit('close')">
        <PhX size="40" class="text-white" weight="bold" />
      </button>
      <div class="h-full flex flex-col items-center justify-center gap-10">
        <router-link
        v-for="(link, index) in links"
        :to="link.anchor"
        class="text-white font-mont font-semibold text-4xl"
        :key="index"
        @click="$emit('close')"
        >{{ link.text }}</router-link
      >
      </div>
      
    </div>
  </Transition>
</template>
