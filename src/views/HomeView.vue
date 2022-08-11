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
      <section
        id="ourflavors"
        class="bg-white px-6 py-10 flex flex-col items-center text-center gap-[3.5rem]"
      >
        <div name="section__text" class="flex flex-col items-center gap-4">
          <h2 class="uppercase font-title text-red text-[1rem] font-bold">
            choose your flavor
          </h2>
          <h3 class="text-black font-title text-[2.5rem] font-bold uppercase">
            FOOD THAT BRINGS PEOPLE TOGETHER!
          </h3>
          <p class="text-black font-text">
            Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
            semper dictumst sit interdum ut venenatis pellentesque nunc.
          </p>
        </div>
        <OutlineButton
          buttonTxt="view all menu"
          class="outline-2 outline-red outline bg-red text-red w-48"
        />
        <div name="flavor__grid" class="grid grid-row-3 gap-6 items-center">
          <div name="flavor" v-for="(flavor, index) in flavors" :key="index">
            <div
              class="bg-circlePizza rounded-full w-[13.5rem] h-[13.5rem] bg-center bg-contain"
            ></div>
            <h3
              name="flavorTitle"
              class="text-red font-title uppercase text-2xl font-bold"
            >
              {{ flavor.title }}
            </h3>
          </div>
        </div>
      </section>
      <section
        id="bestdeals"
        class="bg-gray flex flex-col items-center px-6 py-10 gap-6"
      >
        <h2 class="font-title text-black text-[2.5rem] uppercase font-bold">
          best deals!
        </h2>
        <OutlineButton
          buttonTxt="view all"
          class="outline-2 outline-red outline bg-red text-red w-auto px-6"
        />

        <div name="deal__grid" class="flex flex-col items-center gap-4">
          <div name="deal" class="rounded-2xl w-full h-auto overflow-hidden">
            <div class="w-full h-[10rem] bg-home bg-center bg-cover p-4 flex">
              <span
                class="font-title text-white font-bold bg-red rounded-full uppercase p-4 px-[1.5rem] text-base h-min"
                >Save <br />
                30%</span
              >
            </div>
            <div name="deal__details" class="bg-red flex flex-col p-4 gap-4">
              <p class="text-yellow font-title font uppercase text-[0.875rem]">
                daily deal!
              </p>
              <h2 class="font-title uppercase text-white text-[2rem]">
                Big Meat monsta
              </h2>
              <p class="font-text text-white capitalize font-bold">
                Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
              </p>
              <span class="font-title text-white text-[3.5rem] font-bold"
                >$18</span
              >
            </div>
          </div>

          <HorizontalDeal
            dealTitle="Combo double max"
            dealPrice="18"
            dealTitleColor="text-yellow"
            dealAfterColor="after:bg-yellow"
            dealBeforeColor="before:bg-red"
          />
          <HorizontalDeal
            dealTitle="Combo double max"
            dealPrice="18"
            dealTitleColor="text-red"
            dealAfterColor="after:bg-red"
            dealBeforeColor="before:bg-yellow"
          />
        </div>
      </section>
      <section
        id="ourlocations"
        class="bg-red text-white flex flex-col items-center gap-6 text-center py-10 px-6"
      >
        <div name="section__info" class="flex flex-col items-center">
          <h2 class="font-bold font-title text-yellow text-[1rem] uppercase">
            our location
          </h2>
          <p class="uppercase font-title font-bold text-[2.5rem]">
            FIND THE PIZZERIA NEAR YOU
          </p>
          <p class="font-text text-sm">
            Cursus ultricies in maecenas pulvinar ultrices integer quam amet,
            semper dictumst sit interdum ut venenatis pellentesque.
          </p>
        </div>

        <div name="locations__grid" class="grid grid-rows-4 gap-6">
          <LocationContainer
            locationTitle="Bologna"
            locationDesc="Via delle Lame, 55, 40122 Bologna BO, Italy. +39 123 456 7890"
          />
          <LocationContainer
            locationTitle="Rome"
            locationDesc="Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890"
          />
          <LocationContainer
            locationTitle="Venice"
            locationDesc="S. Marco, 615, 30124 Venezia VE, Italy. +39 123 456 7890"
          />
          <LocationContainer
            locationTitle="Florence"
            locationDesc="Viale Belfiore, 50, 50144 Firenze FI, Italy. +39 123 456 7890"
          />
        </div>
      </section>
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
      flavors: [{ title: "pasta" }, { title: "pizza" }, { title: "dessert" }],
    };
  },
};
</script>
