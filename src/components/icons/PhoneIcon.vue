<script setup>
import { PhPhone } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log();
</script>
<template>
  <ph-phone :size="size" weight="fill" />
</template>
