import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/home")
  },
  {
    path: "/article",
    name: "article",
    component: () => import("../views/article/article")
  },
  {
    path: "/videos",
    name: "videos",
    component: () => import("../views/videos/videos")
  },
  {
    path: "/pictures",
    name: "pictures",
    component: () => import("../views/pictures/pictures")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
