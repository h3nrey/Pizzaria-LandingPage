<script setup>
import { PhCaretDown } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log(props);
</script>
<template>
  <ph-caret-down :size="size" weight="fill" />
</template>
