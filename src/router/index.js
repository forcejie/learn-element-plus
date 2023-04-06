import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/navigation",
    },
    {
      path: "/basic",
      component: () => import("../views/basic/basic.vue"),
    },
    {
      path: "/form",
      component: () => import("../views/form/form.vue"),
    },
    {
      path: "/data",
      component: () => import("../views/data/data.vue"),
    },
    {
      path: "/navigation",
      component: () => import("../views/navigation/navigation.vue"),
    },
  ],
});

export default router;
