<script setup>
import { PhX } from "phosphor-vue";
import { defineProps } from "vue";

const props = defineProps({
  show: Boolean,
});

console.log(props);

const links = [
  { anchor: "/", text: "Home" },
  { anchor: "/ourhome", text: "OurHome" },
  { anchor: "/contact", text: "Contact" },
  { anchor: "/aboutus", text: "AboutUs" },
];
</script>

<template>
  <Transition name="modal">
    <div
      id="modalWrapper"
      class="bg-red w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-6 fixed top-0 left-0 z-50"
    >
      <button class="fixed z-3 top-4 left-[80%]" @click="$emit('close')">
        <PhX size="40" class="text-white" weight="bold" />
      </button>
      <router-link
        v-for="(link, index) in links"
        :to="link.anchor"
        class="text-white font-mont font-semibold text-3xl"
        :key="index"
        @click="$emit('close')"
        >{{ link.text }}</router-link
      >
    </div>
  </Transition>
</template>
