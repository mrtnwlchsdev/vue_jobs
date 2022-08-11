import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/jobs/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: () => import('../views/jobs/JobsView.vue')
    },
    {
      path: '/jobs/:id',
      name: 'JobsDetails',
      component: () => import('../views/jobs/JobsDetails.vue'),
      props: true
    },
  ]
})

export default router