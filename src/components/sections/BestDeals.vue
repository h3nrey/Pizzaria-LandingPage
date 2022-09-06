<script setup>
import OutlineButton from "../OutlineButton.vue";
import HorizontalDeal from "../HorizontalDeal.vue";
</script>

<template>
  <section
    id="bestdeals"
    class="bg-gray flex flex-col items-center px-6 py-10 gap-6 md:px-20"
  >
    <div
      class="flex flex-col items-center gap-4 md:flex-row md:justify-between md:w-full md:align-baseline"
    >
      <h2 class="font-title text-black text-[2.5rem] uppercase font-[500] md:text-[4rem] md:leading-[100%]">
        best deals!
      </h2>
      <OutlineButton
        buttonTxt="view all"
        class="outline-2 text-[0.875rem] tracking-[2px] leading-[100%] outline-red outline bg-red text-red w-auto px-6 hover:text-white md:py-[0.9375rem] md:px-[1.4375rem]"
      />
    </div>

    <div
      name="deal__grid"
      class="flex flex-col items-center gap-4 md:w-full md:gap-10"
    >
      <div
        name="deal"
        class="rounded-2xl w-full h-auto overflow-hidden md:flex md:h-80 md:relative md:items-end"
      >
        <div
          class="bestdeal__bg w-full h-[10rem] bg-home bg-center bg-cover p-4 flex md:h-full md:w-[100%] md:absolute md:z-[0] md:left-0 md:top-0 md:content-[''] bg-top"
        >
          <span
            class="font-title text-white font-bold bg-red rounded-full uppercase p-4 px-[1.5rem] text-base h-min"
            >Save <br />
            30%</span
          >
        </div>
        <div
          name="deal__details"
          class="bestdeal__details bg-red flex flex-col p-4 gap-4 md:w-[100%] md:items-start md:py-6 md:gap-0 md:text-start md:h-full"
        >
          <p
            class="text-yellow font-title font uppercase text-[0.875rem] md:text-base"
          >
            daily deal!
          </p>
          <h2
            class="font-title font-bold uppercase text-white text-[2rem] md:text-[4rem]"
          >
            Big Meat monsta
          </h2>
          <p class="font-text text-white capitalize font-bold">
            Tellus id nisl quis at sollicitudin nisl nisi tincidunt purus .
          </p>
          <span
            class="font-title text-white text-[3.5rem] font-bold md:text-[5rem]"
            >$18</span
          >
        </div>
      </div>
      <div
        class="md:flex-row md:justify-between md:w-full md:gap-16 md:h-[22.5rem] w-full flex flex-col gap-6"
      >
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
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 960px) {
  .bestdeal__bg {
    clip-path: polygon(0 0, 100% 0, 40% 100%, 0% 100%);
    /* padding: 2 0 2 32rem !important; */
  }

  .bestdeal__details {
    clip-path: polygon(52% 0%, 100% 0, 100% 100%, 45% 100%);
    padding-left: 40rem;
  }
}
</style>
