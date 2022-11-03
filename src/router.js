import { createRouter, createWebHistory } from 'vue-router'

import homePage from './views/Home.vue'
import aboutPage from './views/About.vue'

const routes = [
  {
    path: '/',
    component: homePage
  },
  {
    path: '/about',
    component: aboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
