import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage.vue")
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("@/views/PrivacyPolicy.vue")
  }
];

const navigateToTopRoutes = ["/", "/privacy"];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (navigateToTopRoutes.includes(to.fullPath)) {
      return { top: 0 };
    }
  }
});

export default router;
