import { createRouter, createWebHistory } from 'vue-router'
import defines from '../utils/defines'
import HomeView from '../views/HomeView.vue'

console.log('dddd', defines)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: defines.layouts.app
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        layout: defines.layouts.app
      },
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
