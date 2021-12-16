import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import pokedex from "../views/pokedex.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokedex",
    name: "pokedex",
    component: pokedex,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
