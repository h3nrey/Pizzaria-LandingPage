<script setup>
import OutlineButton from "../OutlineButton.vue";
import HorizontalDeal from "../HorizontalDeal.vue";
</script>

<template>
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
          <span class="font-title text-white text-[3.5rem] font-bold">$18</span>
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
</template>
