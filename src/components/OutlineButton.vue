<template>
  <button
    class="hover:bg-red text-[1rem] w-full py-[1rem] px-2/4 uppercase font-mont font-bold rounded-[5px] bg-opacity-0 outline outline-2 hover:bg-opacity-100 active:bg-opacity-100 transition-all duration-300 text-red outline-red hover:text-white"
  >
    {{ buttonTxt }}
  </button>
</template>

<script>
export default {
  name: "OutlineButton",
  props: {
    buttonTxt: {
      typeof: String,
      required: true,
    },
  },
};
</script>
