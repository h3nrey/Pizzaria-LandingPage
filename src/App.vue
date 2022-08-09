<template>
  <div class="flex flex-col items-center gap-16">
    <HeaderWrapper />
    <router-view />
  </div>
</template>

<script setup>
import HeaderWrapper from "./components/HeaderWrapper.vue";
</script>
