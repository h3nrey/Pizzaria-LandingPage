<template>
  <div
    class="home before:absolute before:bg-home before:top-0 before:left-0 before:h-[100vh] before:w-[100vw] before:bg-center before:bg-cover before:z-[-1] before:brightness-50"
  >
    <main class="flex flex-col align-center w-[100vw]">
      <section
        id="mainInfos"
        class="text-white flex flex-col align-center gap-16 px-6 pb-10 md:pb-[10rem]"
      >
        <div
          id="restaurant__description"
          class="gap-6 flex flex-col align-center"
        >
          <h1
            class="text-[3.5rem] font-title font-bold uppercase leading-[1] text-center overflow-hidden md:text-8xl"
          >
            authentic italian pizzaria
          </h1>
          <p class="text-[1rem] font-semibold text-center px-[20%]">
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
            class="bg-white outline-white text-white hover:text-black"
          />
        </div>
      </section>
      <section
        id="ourdifferential"
        class="bg-gray px-6 py-10 md:py-[11.25rem] md:px-20"
      >
        <div
          class="diferential__grid grid grid-rows-[1fr 1fr 1fr] text-center gap-10 md:grid-cols-3"
        >
          <div
            class="diferential__item flex flex-col items-center gap-4"
            v-for="(diff, index) in differentials"
            :key="index"
            :class="{ central__grid__element: index === 1 }"
          >
            <div
              :src="diff.image"
              alt=""
              class="diferential__image rounded-full bg-black w-40 h-40 bg-center bg-contain"
              :class="diff.class"
            ></div>
            <h2
              class="differential__title text-red text-2xl leading-[1] font-title uppercase font-bold md:text-[2rem]"
            >
              {{ diff.title }}
            </h2>
            <p class="font-text text-[1rem] text-black">
              {{ diff.description }}
            </p>
          </div>
        </div>
      </section>
      <section
        id="ourservices"
        class="px-6 py-10 bg-singleSlicePizza brightness-50 text-center text-white flex flex-col items-center gap-16"
      >
        <div class="section__text flex flex-col items-center gap-4">
          <h2 class="font-title font-bold text-[2.5rem] text-center">
            BRINGING HAPPINESS TO YOU
          </h2>
          <p class="">
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
          </p>
        </div>

        <div class="services__grid grid grid-rows-3 gap-6">
          <div
            v-for="(service, index) in services"
            name="service"
            class="flex flex-col items-center gap-4"
            :key="index"
          >
            <div
              name="icon__wrapper"
              class="bg-red rounded-full w-20 h-20 flex items-center justify-center"
            >
              <component :is="service.icon"></component>
            </div>
            <h3 class="uppercase font-title text-[1.5rem] font-bold">
              {{ service.title }}
            </h3>
            <button class="flex">
              <span class="font-mont font-bold">{{ service.buttonTxt }}</span>
              <ph-arrow-right :size="24" />
            </button>
          </div>
        </div>
      </section>
      <OurFlavors />
      <BestDeals />
      <OurLocations />
    </main>
    <FooterComponent />
  </div>
</template>

<style scoped>
.central__grid__element {
  transform: translateY(25%);
}
</style>

<script>
import OutlineButton from "@/components/OutlineButton.vue";
import {
  PhArrowRight,
  PhInstagramLogo,
  PhYoutubeLogo,
  PhFacebookLogo,
} from "phosphor-vue";
import PizzaIcon from "@/components/icons/PizzaIcon.vue";
import PackageIcon from "../components/icons/PackageIcon.vue";
import MobileIcon from "../components/icons/MobileIcon.vue";
import HorizontalDeal from "@/components/HorizontalDeal.vue";
import LocationContainer from "@/components/LocationContainer.vue";
import Logo from "@/components/Logo.vue";
import FooterComponent from "../components/footerComponent.vue";
import OurLocations from "@/components/sections/OurLocations.vue";
import BestDeals from "@/components/sections/BestDeals.vue";
import OurFlavors from "@/components/sections/OurFlavors.vue";

export default {
  name: "HomeView",
  components: {
    OutlineButton,
    PhArrowRight,
    PhFacebookLogo,
    PhYoutubeLogo,
    PhInstagramLogo,
    PizzaIcon,
    PackageIcon,
    MobileIcon,
    HorizontalDeal,
    LocationContainer,
    Logo,
    FooterComponent,
    OurLocations,
    BestDeals,
    OurFlavors,
  },
  data() {
    return {
      differentials: [
        {
          class: "bg-circlePizza",
          title: "fresh ingredients",
          description:
            "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
        },
        {
          class: "bg-circlePizza",
          title: "handmade mozzarela",
          description:
            "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
        },
        {
          class: "bg-circlePizza",
          title: "'SECRET RECIPE' SAUCE",
          description:
            "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
        },
      ],
      services: [
        {
          icon: MobileIcon,
          title: "online delivery",
          buttonTxt: "order online",
        },
        {
          icon: PackageIcon,
          title: "click & collect",
          buttonTxt: "takeout order",
        },
        {
          icon: PizzaIcon,
          title: "restaurant dinning",
          buttonTxt: "book a table",
        },
      ],
    };
  },
};
</script>
