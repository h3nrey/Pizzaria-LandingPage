<script setup>
  import { PhTwitterLogo } from "phosphor-vue";
  
  const props = defineProps({
    size: String,
  });
  
  console.log();
  </script>
  <template>
    <ph-twitter-logo :size="size" weight="fill" />
  </template>
  