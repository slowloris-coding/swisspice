import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ShopPage from "@/views/ShopPage/ShopPage.vue";
import AboutPage from "@/views/AboutPage/AboutPage.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import MaintenancePage from "@/views/MaintenancePage/MaintenancePage.vue";
import ProfilePage from "@/views/ProfilePage/ProfilePage.vue";
import LoginPage from "@/views/LoginPage/LoginPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopPage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/maintenance",
    name: "maintenance",
    component: MaintenancePage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfilePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
