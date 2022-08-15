<script setup>
const props = defineProps({
  title: String,
});

console.log(props);
</script>

<template>
  <h1
    class="text-[3.5rem] font-title font-bold uppercase leading-[1] text-center overflow-hidden md:text-8xl text-white"
  >
    {{ title }}
  </h1>
</template>
