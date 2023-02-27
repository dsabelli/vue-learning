import FormViewVue from "@/views/FormView.vue";
import ReactionTimerVue from "@/views/ReactionTimer.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/form",
      name: "form",
      component: FormViewVue,
    },
    {
      path: "/reaction",
      name: "reaction",
      component: ReactionTimerVue,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },
    {
      path: "/jobs/:id",
      name: "JobDetails",
      component: JobDetails,
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
