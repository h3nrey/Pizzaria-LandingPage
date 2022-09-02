<template>
  <div class="p-6 flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h2 class="text-[1.75rem] font-bold text-black uppercase font-title">we love to hear  from you</h2>
      <p class=" text-darkGray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>

    <form ref="form" @submit.prevent="sendEmail" class="flex flex-col gap-6">
      <fieldset class="flex">
        <legend class="capitalize text-darkGray font-medium">name</legend>
        <div class=" grid grid-cols-2 gap-4">
          <div class="flex flex-col">
          <input name="from_name" type="text" id="firstname" class="field " placeholder="first">
          <label for="firstname" class=" text-black">first</label>
          </div>
          <div class="flex flex-col">
            <input name="from_lastname" type="text" id="lastname" class="field" placeholder="first">
            <label for="lastname" class=" text-black">last</label>
          </div>
        </div>
        

      </fieldset>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col text-darkGray font-medium">
          <label for="email" class=" capitalize">email</label>
          <input name="reply_to" type="email" id="email" class="field" placeholder="Email Address">
        </div>

        <div class="flex flex-col text-darkGray font-medium">
          <label for="phone" class=" capitalize">phone</label>
          <input name="phone" type="text" id="phone" class="field" placeholder="Phone Number">
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col text-darkGray font-medium">
          <label for="subject" class="capitalize">subject</label>
          <input name="subject" type="subject" id="subject" class="field" placeholder="Subject">
        </div>
        
        <div class="flex flex-col">
          <label for="location" class="capitalize text-darkGray font-medium">Select Location</label>
          <div class="relative z-0 w-full cursor-pointer">
            <span class="absolute z-10 top-1/2 left-[100%] -translate-y-1/2 -translate-x-[100%] p-4 height-full w-[12%] outline-1 outline-darkGray pointer-events-none">
              <CaretIcon class=" text-darkGray" :size="20"/>
            </span>
            <select 
              name="restaurant"
              v-model="selected" 
              id="location" 
              class="field appearance-none w-full cursor-pointer" 
            >
              <option disabled value="default" class=" text-darkGray font-semibold">Select a Restaurant</option>
              <option v-for="(option, index) in options" class=" capitalize text-darkGray font-semibold" :value="option.value" :key="index">{{option.text}}</option>
              </select>
          </div>
          

        </div>

        <div class="flex flex-col text-darkGray font-medium">
          <label for="comment" class="capitalize">comment or message</label>
          <textarea name="feedback" id="comment" cols="30" rows="5" class="field"></textarea>
        </div>
        
        <button @click="sendEmail" type="submit" class=" hover:bg-red text-[1rem] w-fit py-[0.875rem] px-[1.3125rem] uppercase font-mont font-bold rounded-[5px] bg-opacity-0 outline outline-2 hover:bg-opacity-100 active:bg-opacity-100 transition-all duration-300 text-red outline-red hover:text-white font-semibold tracking-widest leading-[initial]">submit</button>
      </div>
    </form>
    
  </div>
</template>

<style scoped>
  .field{
    outline: 2px solid transparent;
    transition: all 400ms;
    color: #4a4a4a;
    font-weight: 600;
    background-color: #EBEBEB;
    border-radius: 0.25rem;
    padding: 0.7rem;
  }

  .field:visited, .field:focus, .field:focus-visible, .field:hover{
    outline-color: #4a4a4a;

  }
</style>

<script setup>
  import { ref } from 'vue';
  import CaretIcon from '../icons/CaretIcon.vue';
  import emailjs from 'emailjs-com';

  //this need to be put on a .env file
  const YOUR_SERVICE_ID = "service_y0e6tfp"
  const YOUR_TEMPLATE_ID = "template_3g5f9sf"
  const YOUR_USER_ID = "6L_Vkog5XBYghUAp9"

  const selected = ref('default')

  const form = ref(null)

  function sendEmail() {
    try {
      emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.value,
      YOUR_USER_ID)

    } catch(error) {

        console.log({error})
    }
    // Reset form field
  }

  const options = [
    {
      text: "the pizzeria Rome",
      value: "rome",
    },
    {
      text: "the pizzeria bologna",
      value: "bologna"
    },
    {
      text: "the pizzeria venice",
      value: "venice"
    },
    {
      text: "the pizzeria florence",
      value: "florence"
    }
  ]
</script>