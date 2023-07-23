import { createRouter, createWebHistory } from "vue-router";
import HeaderVue from "../components/Header.vue";

const routes = [
  {
    path: "/teste",
    name: "teste",
    component: HeaderVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
