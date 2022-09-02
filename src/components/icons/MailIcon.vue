<script setup>
import { PhEnvelope } from "phosphor-vue";

const props = defineProps({
  size: String,
});
</script>
<template>
  <ph-envelope :size="size" weight="fill" />
</template>
