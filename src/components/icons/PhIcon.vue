<script setup>
import {
  PhPhone,
  PhPackage,
  PhDeviceMobile,
  PhMapPin,
  PhPizza,
} from "phosphor-vue";

const props = defineProps({
  size: String,
});

console.log();
</script>
<template>
  <div class="bg-yellow">
    <slot />
  </div>
</template>
