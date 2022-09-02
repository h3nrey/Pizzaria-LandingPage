<template>
  <div class="flex flex-col items-center">
    <HeaderWrapper />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderWrapper from "./components/HeaderWrapper.vue";
import FooterComponent from "./components/footerComponent.vue";
</script>
