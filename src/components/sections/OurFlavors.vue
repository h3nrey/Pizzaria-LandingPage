<script setup>
import OutlineButton from "../OutlineButton.vue";

const flavors = [{ title: "pasta" }, { title: "pizza" }, { title: "dessert" }];
</script>

<template>
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
        Cursus ultricies in maecenas pulvinar ultrices integer quam amet, semper
        dictumst sit interdum ut venenatis pellentesque nunc.
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
</template>
