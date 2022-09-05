<template>
  <section class="py-10 px-6 md:px-16" :class="sectionBg">
    <span>
      <h2 class=" uppercase font-title font-[500] tracking-[2px]" :class="sectionColor">{{sectionHeader}}</h2>
    </span>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-white font-[500] uppercase text-[1.75rem] font-title md:text-[2.5rem]">{{sectionBigText}}</h3>
        <p class=" text-gray">Semper dictumst sit interdum venenatis pellentesque nunc libero vestibulum velit sit aliquet pellentesque vitae.</p>
      </div>
      <div v-for="(info, index) in infos" :key="infos" class="flex flex-col md:flex-row gap-4">
        <slot name="item1" v-if="index == 0"></slot>
        <slot name="item2" v-if="index == 1"></slot>
        <div class="flex flex-col gap-1">
          <h4 class=" text-[500] font-title uppercase text-white md:text-[1.375rem]">{{info.header}}</h4>
          <p class="text-gray">{{info.paragraph}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PhoneIcon from "@/components/icons/PhoneIcon.vue";

const props = defineProps({
  sectionBg: String,
  sectionColor: String,
  sectionHeader: String,
  sectionBigText: String,
  infos: Array,
})

console.log(props);

</script>