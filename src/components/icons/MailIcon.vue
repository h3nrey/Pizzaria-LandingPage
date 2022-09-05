<script setup>
import { PhEnvelope } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log(props);
</script>
<template>
  <ph-envelope :size="size" weight="fill" />
</template>
