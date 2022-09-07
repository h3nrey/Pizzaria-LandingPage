<template>
  <div
    class="home bg-black"
  >
    <main class="flex flex-col align-center w-full">
      <section
        id="mainInfos"
        class="text-white flex flex-col align-center gap-16 px-6 md:py-[6rem] py-16"
      >
        <div
          id="restaurant__description"
          class="gap-6 flex flex-col align-center"
        >
          <ViewTitle title="authentic  italian pizzaria" />
          <p class="text-[1rem] font-semibold text-center md:px-[20%]">
            Et praesent nulla urna consequat dui arcu cursus diam fringilla
            libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit
            suspendisse aliquam lacus sollicitudin mauris.
          </p>
        </div>

        <div
          id="restaurant__buttons"
          class="flex flex-col align-center gap-4 md:flex-row md:px-[28rem]"
        >
          <OutlineButton buttonTxt="book a table" class="bg-red outline-red" />
          <OutlineButton
            buttonTxt="TakeAway"
            id="variant__outline__button"
            class="bg-white outline-white text-white hover:text-black hover:bg-"
          />
        </div>
      </section>
      <OurDifferential />
      <OurServices />
      <OurFlavors />
      <BestDeals />
      <OurLocations />
    </main>
  </div>
</template>

<style scoped>
#variant__outline__button:hover {
  background-color: #f7f6f2;
}
</style>

<script>
import OutlineButton from "@/components/OutlineButton.vue";
import OurLocations from "@/components/sections/OurLocations.vue";
import BestDeals from "@/components/sections/BestDeals.vue";
import OurFlavors from "@/components/sections/OurFlavors.vue";
import OurServices from "../components/sections/OurServices.vue";
import OurDifferential from "@/components/sections/OurDifferential.vue";
import ViewTitle from "@/components/ViewTitle.vue";

export default {
  name: "HomeView",
  components: {
    OutlineButton,
    OurLocations,
    BestDeals,
    OurFlavors,
    OurServices,
    OurDifferential,
    ViewTitle,
  },
};
</script>
