<template>
  <header
    class="flex align-center justify-between w-full px-6 py-6 md:gap-6 bg-black md:flex-row md:px-10"
  >
    <LogoWrapper color="text-white" />
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
import LogoWrapper from "./LogoWrapper.vue";
import { PhList } from "phosphor-vue";
import NavModal from "./NavModal.vue";
import { ref } from "vue";
import NavWrapper from "./NavWrapper.vue";

const showModal = ref(false);
</script>
