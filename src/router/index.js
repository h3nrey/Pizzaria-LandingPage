import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OurMenu from "../views/OurMenu.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/ourmenu",
    name: "ourmenu",
    component: OurMenu,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
