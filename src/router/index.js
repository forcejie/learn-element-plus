import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/basic",
    },
    {
      path: "/basic",
      component: () => import("../views/basic/basic.vue"),
    },
    {
      path: "/form",
      component: () => import("../views/form/form.vue"),
    },
  ],
});

export default router;
