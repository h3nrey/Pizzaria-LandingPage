<script setup>
  import { PhYoutubeLogo } from "phosphor-vue";
  
  const props = defineProps({
    size: String,
  });
  
  console.log();
  </script>
  <template>
    <ph-youtube-logo :size="size" weight="fill" />
  </template>
  