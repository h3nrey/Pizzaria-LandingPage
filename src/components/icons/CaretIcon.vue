<script setup>
import { PhCaretDown } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log();
</script>
<template>
  <ph-caret-down :size="size" weight="fill" />
</template>
