import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Shop from "../views/ShopPage/ShopPage.vue";
import About from "../views/AboutPage/AboutPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "shop",
    component: ShopPage,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopPage,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
