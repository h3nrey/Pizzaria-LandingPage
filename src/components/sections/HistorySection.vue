<template>
  <div id="history__container" class="md:flex w-full rounded-2xl md:px-10 flex flex-col gap-6 pb-10 px-6">
        <span>
          <h2 class=" uppercase text-red font-title font-[500] tracking-[2px]">our story</h2>
        </span>
        
        <div class="flex flex-col gap-10 md:flex-row">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col">
              <h1 class=" text-black uppercase font-title font-[500] text-[2.5rem] md:text-[4rem]">authetic italian pizzeria</h1>
              <p class="font-semibold text-black">Varius eu mauris est vitae ultrices et, justo, at in ut faucibus libero pellentesque facilisis molestie suspendisse lacinia gravida sed habitasse diam nec nulla.</p>
            </div>
            <div class="flex flex-col gap-10 md:flex-row-reverse">
              <div class="flex flex-col gap-6">
                <section v-for="(section, index) in sections" :key="index" class="flex flex-col gap-2">
                  <h2 class="font-title text-black uppercase font-bold md:text-[1.375rem]">{{section.header}}</h2>
                  <p class="text-darkGray font-text">{{section.paragraph}}</p>
                </section>
              </div>
            
            <div name="Founder__container" class="flex flex-col gap-4">
              <div class="bg-founder bg-cover bg-right sepia contrast-75 saturate-50 w-[10.69rem] h-[10.69rem] md:w-[21.9rem] md:h-[21.9rem]"></div>
              <div class="flex flex-col gap-2">
                <h2 class="font-bold font-title uppercase md:text-[1.6rem]">kiriyama akari</h2>
                <p class="font-semibold text-darkGray font-text">Founder of the sushi man</p>
              </div>
            </div>
            </div>
          </div>
          <div name="first local" class="bg-firstLocal bg-cover bg-center sepia contrast-75 saturate-50 w-full h-[32rem] md:h-[37.5rem]"></div>
        </div>
        
      </div>
</template>
<script setup>
  const sections = [
  {
    header: "it's all about a family",
    paragraph: "Imperdiet orci, volutpat consequat fermentum, proin tempus et tellus, vulputate adipiscing auctor nulla in malesuada et amet, aliquam laoreet mauris gravida consectetur malesuada est ultricies diam vestibulum velit sit aliquet pellentesque vitae."
  },
  {
    header: "generations in the making",
    paragraph: "Imperdiet orci, volutpat consequat fermentum, proin tempus et tellus, vulputate adipiscing auctor nulla in malesuada et amet, aliquam laoreet mauris gravida consectetur malesuada est ultricies diam vestibulum velit sit aliquet pellentesque vitae."
  }
]
</script>