<template>
  <div class="home">
    <div
      class="flex flex-col align-center gap-6 py-16 md:py-20 px-6 mt-0 bg-black"
    >
      <ViewTitle title="about" />
      <p class="text-white font-text text-center md:px-[30%]">
        Dignissim sed suscipit mattis neque, in nibh blandit at nec in urna
        tristique ornare aliquam orci augue vestibulum dignissim vel aliquam.
      </p>
    </div>
    <main class="pt-16 md:pt-20">
      <HistorySection />
      <div class="flex flex-col md:flex-row">
        <AboutMoreinfo
          sectionBg="bg-red"
          sectionColor="text-yellow"
          sectionHeader="sushi sun"
          sectionBigText="INCREDIBLE DISHES START HERE"
          :infos="infos.info1"
        >
          <template #item1>
            <ph-storefront :size="64" weight="fill" class="text-yellow" />
          </template>

          <template #item2>
            <ph-fish :size="64" weight="fill" class="text-yellow" />
          </template>
        </AboutMoreinfo>

        <AboutMoreinfo
          sectionBg="bg-yellow"
          sectionColor="text-red"
          sectionHeader="authentic"
          sectionBigText="RECIPE WITH ROOTS"
          :infos="infos.info2"
        >
          <template #item1>
            <ph-fish :size="64" weight="fill" class="text-red" />
          </template>

          <template #item2>
            <ph-scroll :size="64" weight="fill" class="text-red" />
          </template>
        </AboutMoreinfo>
      </div>
    </main>
  </div>
</template>
<script setup>
import ViewTitle from "@/components/ViewTitle.vue";
import HistorySection from "../components/sections/HistorySection.vue";
import AboutMoreinfo from "../components/sections/AboutMoreinfo.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import { PhStorefront, PhFish, PhScroll } from "phosphor-vue";

const infos = {
  info1: [
    {
      header: "4,200 SQUARE FEET OF SPACE",
      paragraph:
        "Bibendum rhoncus amet tellus ornare lobortis sit aliquet elit, hac nisi, mauris ac tellus velit sollicitudin.",
    },
    {
      header: "HERITAGE YOU CAN TASTE",
      paragraph:
        "Pretium, condimentum magna amet egestas ligula pretium magna rutrum a in arcu, mauris porttitor fermentum.",
    },
  ],
  info2: [
    {
      header: "AUTHENTIC japanese sushi",
      paragraph:
        "Bibendum rhoncus amet tellus ornare lobortis sit aliquet elit, hac nisi, mauris ac tellus velit sollicitudin.",
    },
    {
      header: 'HANDMADE "SECRET" INGREDIENTS',
      paragraph:
        "Pretium, condimentum magna amet egestas ligula pretium magna rutrum a in arcu, mauris porttitor fermentum.",
    },
  ],
};
</script>
