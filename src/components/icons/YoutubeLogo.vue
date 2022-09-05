<script setup>
import { PhYoutubeLogo } from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log(props);
</script>
<template>
  <ph-youtube-logo :size="size" weight="fill" />
</template>
