<script setup>
const props = defineProps({
  dealTitle: String,
  dealPrice: Int16Array,
  dealTitleColor: String,
  dealAfterColor: String,
  dealBeforeColor: String,
});

console.log(props);
</script>

<template>
  <div
    name="deal"
    class="rounded-2xl w-[21.5rem] h-[12rem] overflow-hidden md:w-full md:h-full"
  >
    <div class="w-full h-full bg-home bg-center bg-cover flex justify-end">
      <div
        name="deal__details"
        class="deal__details flex flex-col p-4 gap-3 items-end w-[60%] h-full rounded-2xl overflow-hidden relative text-end z-20 md:pt-10"
        :class="[`${dealAfterColor}  ${dealBeforeColor}`]"
      >
        <h2
          class="font-title uppercase text-xl font-semibold max-w-[70%] md:text-[2.5rem] leading-10"
          :class="dealTitleColor"
        >
          {{ dealTitle }}
        </h2>
        <span
          class="text-white font-title text-[2.5rem] font-semibold md:text-[5rem]"
          >{{ `$ ${dealPrice}` }}</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.deal__details::before {
  content: "";
  z-index: -1;
  width: 10.5rem;
  height: 9.5rem;
  position: absolute;
  border-radius: 16px;
  transform: rotate(-13deg) translate(30px, -5px);
}

.deal__details::after {
  content: "";
  z-index: -2;
  width: 10.5rem;
  height: 9.5rem;
  position: absolute;
  border-radius: 16px;
  transform: rotate(-13deg) translate(14px, 8px);
}

@media (min-width: 960px) {
  .deal__details::before {
    width: 17.8rem;
    height: 17.8rem;
    transform: rotate(-13deg) translate(20%, -10%);
  }

  .deal__details::after {
    content: "";
    z-index: -2;
    width: 17.8rem;
    height: 17.8rem;
    position: absolute;
    border-radius: 16px;
    transform: rotate(-13deg) translate(8%, 1%);
  }
}
</style>
