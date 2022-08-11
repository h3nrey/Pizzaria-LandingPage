<script setup>
import LocationContainer from '../LocationContainer.vue';

const locations = [
  {
    title: "Bologna",
    desc: "Via delle Lame, 55, 40122 Bologna BO, Italy. +39 123 456 7890"
  },
  {
    title: "Rome",
    desc: "Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy. +39 123 456 7890"
  },
  {
    title: "Venice",
    desc: "S. Marco, 615, 30124 Venezia VE, Italy. +39 123 456 7890"
  },
  {
    title: "Florence",
    desc: "Viale Belfiore, 50, 50144 Firenze FI, Italy. +39 123 456 7890"
  }
]

</script>

<template>
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
          <LocationContainer v-for="location in locations"
            :locationTitle="location.title"
            :locationDesc="location.desc"
          />
        </div>
      </section>
</template>