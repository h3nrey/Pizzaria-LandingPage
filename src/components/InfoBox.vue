<template>
  <div name="info__box" class="flex gap-2 items-center">
    <slot name="icon"></slot>
    <span @click="copy" ref="infoSpan" class="relative cursor-pointer"
      >{{ infoText }}
      <span
        class="copied__alert font-mont bg-black text-gray rounded-2xl"
        v-show="state.copied"
      >
        copied!
      </span>
    </span>
  </div>
</template>

<style scoped>
.copied__alert {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-100%);
  z-index: 1000;
  padding: 1rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: showingDown;
  animation-duration: 400ms;
  animation-fill-mode: forwards;
}

@media (min-width: 960px) {
  .copied__alert {
    animation-name: showingRight;
  }
}

@keyframes showingDown {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(50%);
  }
}

@keyframes showingRight {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(50%);
  }
}
</style>

<script setup>
import PhIcon from "./icons/PhIcon.vue";
import PhoneIcon from "./icons/PhoneIcon.vue";
import { ref, reactive } from "vue";

const props = defineProps({
  infoText: String,
});

let state = reactive({ copied: false });

function copy() {
  state.copied = true;
  navigator.clipboard.writeText(props.infoText);

  setTimeout(() => (state.copied = false), 1000);
}
</script>
