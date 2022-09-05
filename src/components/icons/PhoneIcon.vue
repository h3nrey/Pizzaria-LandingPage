<script setup>
import { PhPhone } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log(props);
</script>
<template>
  <ph-phone :size="size" weight="fill" />
</template>
