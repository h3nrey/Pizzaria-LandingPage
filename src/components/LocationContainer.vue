<script setup>
const props = defineProps({
  locationTitle: String,
  locationDesc: String,
});
</script>

<template>
  <div name="location__container" class="flex flex-col items-center gap-4">
    <h3 class="font-title uppercase text-yellow text-[1.75rem] font-bold">
      {{ locationTitle }}
    </h3>
    <p name="location__details" class="font-text max-w-[50%]">
      {{ locationDesc }}
    </p>
  </div>
</template>
