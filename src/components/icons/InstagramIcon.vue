<script setup>
import { PhInstagramLogo } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log(props);
</script>
<template>
  <ph-instagram-logo :size="size" weight="fill" />
</template>
