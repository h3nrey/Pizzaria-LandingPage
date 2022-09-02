import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";
import store from "./store";
import "./styles.css";

createApp(App).use(store).use(router).use(VueSmoothScroll).mount("#app");
