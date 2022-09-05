<script setup>
import { PhMapPin } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log(props);
</script>
<template>
  <ph-map-pin :size="size" weight="fill" />
</template>
