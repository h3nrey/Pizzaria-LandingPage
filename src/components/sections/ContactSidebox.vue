<template>
  <div
    class="flex flex-col bg-white px-6 py-12 gap-6 rounded-l-2xl md:py-[3rem] md:px-10"
  >
    <div id="corporateoffice_container" class="gap-4 flex flex-col">
      <h2
        class="uppercase font-title text-black font-bold text-[1.75rem] md:text-[2.5rem]"
      >
        Corporate Office
      </h2>
      <div class="flex flex-col gap-6">
        <InfoBox infoText="Via di S. Vincenzo, 12/34A, 00123 Roma RM, Italy.">
          <template #icon>
            <PinIcon size="16" class="text-red" />
          </template>
        </InfoBox>

        <InfoBox infoText="+39 123 456 7890">
          <template #icon>
            <PhoneIcon size="16" class="text-red" />
          </template>
        </InfoBox>

        <InfoBox infoText="mail@example.com">
          <template #icon>
            <MailIcon size="16" class="text-red" />
          </template>
        </InfoBox>
      </div>
    </div>

    <div id="pressinquire_container" class="gap-4 flex flex-col">
      <h2 class="uppercase font-title text-black font-medium text-[1.375rem]">
        PRESS INQUIRIES
      </h2>
      <div class="flex flex-col gap-6">
        <InfoBox infoText="+39 123 456 7890">
          <template #icon>
            <PhoneIcon size="16" class="text-red" />
          </template>
        </InfoBox>

        <InfoBox infoText="mail@example.com">
          <template #icon>
            <MailIcon size="16" class="text-red" />
          </template>
        </InfoBox>
      </div>
    </div>

    <div id="corporateoffice_container" class="gap-4 flex flex-col">
      <h2 class="uppercase font-title text-black font-medium text-[1.375rem]">
        stay connected
      </h2>
      <div class="flex gap-6">
        <TwitterIcon size="20" class="text-red" />
        <InstagramIcon size="20" class="text-red" />
        <YoutubeLogo size="20" class="text-red" />
      </div>
    </div>
  </div>
</template>
<script setup>
import PhoneIcon from "../icons/PhoneIcon.vue";
import InfoBox from "../InfoBox.vue";
import MailIcon from "../icons/MailIcon.vue";
import PinIcon from "../icons/PinIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";
import YoutubeLogo from "../icons/YoutubeLogo.vue";
</script>
