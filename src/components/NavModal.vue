<script setup>
import { PhX } from "phosphor-vue";
import { defineProps } from "vue";
import NavWrapper from "./NavWrapper.vue";

defineEmits(["close"]);

const props = defineProps({
  show: Boolean,
});

function close() {
  $emit("close");
  console.log("testing links close");
}

console.log(props);
</script>

<template>
  <Transition name="modal">
    <div
      id="modalWrapper"
      class="bg-red w-[100vw] h-[100vh] flex flex-col items-center gap-10 fixed top-0 left-0 z-50 p-6"
    >
      <button class="w-full flex justify-end" @click="$emit('close')">
        <PhX size="40" class="text-white" weight="bold" />
      </button>
      <NavWrapper @close="$emit('close')" />
    </div>
  </Transition>
</template>
