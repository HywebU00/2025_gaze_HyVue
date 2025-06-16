// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/admin/statusComponent.vue"),
      },
      {
        path: "vuetify",
        component: () => import("@/views/admin/vuetifyComponent.vue"),
      },
      {
        path: "chart",
        component: () => import("@/views/admin/chartComponent.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/login/login.vue"),
      },
      {
        path: "pw1",
        component: () => import("@/views/login/forget_pw1.vue"),
      },
      {
        path: "pw2",
        component: () => import("@/views/login/forget_pw2.vue"),
      },
      {
        path: "pw3",
        component: () => import("@/views/login/forget_pw3.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
