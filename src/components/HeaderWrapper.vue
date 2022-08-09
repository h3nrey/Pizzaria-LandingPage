<template>
  <header class="flex align-center justify-between w-full p-6">
    <LogoWrapper />
    <button class="">
      <ph-list
        size="24"
        class="text-white"
        weight="bold"
        @click="showModal = true"
      />
    </button>

    <Teleport to="body">
      <NavModal v-if="showModal" @close="showModal = false" />
    </Teleport>
  </header>
</template>

<script setup>
//imports
import LogoWrapper from "./Logo.vue";
import { PhList } from "phosphor-vue";
import NavModal from "./NavModal.vue";
import { ref } from "vue";

const showModal = ref(false);
</script>
