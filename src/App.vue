<template>
  <div class="flex flex-col items-center">
    <HeaderWrapper />
    <router-view />
  </div>
</template>

<script setup>
import HeaderWrapper from "./components/HeaderWrapper.vue";
</script>
