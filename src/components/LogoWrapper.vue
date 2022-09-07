<template>
  <span id="logo__wrapper" class="flex">
    <a
      href="/"
      class="text-[2rem] font-logo relative z-0 leading-[1]"
      :class="color"
      >Sushi Sun</a
    >
  </span>
</template>

<script setup>
const props = defineProps({
  color: String,
});
</script>
