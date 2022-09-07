<template>
  <div class="home pt-10 md:pt-20 bg-black">
    <main class="bg-black flex flex-col gap-16 md:gap-20">
      <ViewTitle title="Contact" />
      <div
        id="contact__container"
        class="md:flex w-full md:rounded-2xl rounded-t-2xl md:px-10"
      >
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
