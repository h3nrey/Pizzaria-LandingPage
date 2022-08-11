<template>
  <header
    class="flex align-center justify-between w-full px-6 pt-6 md:justify-center md:flex-col md:items-center md:gap-6"
  >
    <LogoWrapper />
    <NavWrapper class="sm:hidden md:flex" />
    <button class="sm:visible md:hidden">
      <ph-list
        size="24"
        class="text-red"
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
import NavWrapper from "./NavWrapper.vue";

const showModal = ref(false);
</script>
