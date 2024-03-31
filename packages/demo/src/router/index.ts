import { createRouter, createWebHistory } from 'vue-router'
import Demo from '../views/Demo.vue'
import Doc from '../views/Doc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/demo',
      component: Demo
    },
    {
      path: '/',
      component: Doc
    }
  ]
})

export default router
