<template>
  <div
    class="home w-[100vw] before:absolute before:bg-outdoorRestaurant before:top-0 before:left-0 before:h-[47vh] before:w-[100vw] before:bg-center before:bg-cover before:z-[-1] before:brightness-50 md:before:h-[75vh] py-20"
  >
    <ViewTitle title="Contact" />
    <main class=" mt-20">
      <div id="contact__container" class="w-full rounded-2xl overflow-hidden">
        <ContactSidebox />
        <ContactForm />
      </div>
    </main>
  </div>
</template>
<script setup>
import ViewTitle from "@/components/ViewTitle.vue";
import ContactSidebox from "@/components/sections/ContactSidebox.vue";
import ContactForm from "@/components/sections/ContactForm.vue";
</script>
