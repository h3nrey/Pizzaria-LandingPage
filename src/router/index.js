import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OurMenu from "../views/OurMenu.vue";
import ContactView from "../views/ContactView";
import AboutUs from "../views/AboutUs.vue";

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
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: AboutUs,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
