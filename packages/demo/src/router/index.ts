import { createRouter, createWebHashHistory } from 'vue-router'
import Demo from '../views/Demo.vue'
import Doc from '../views/Doc.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/demo',
      component: Demo
    },
    {
      path: '/playground',
      component: () => import('../views/Playground/index.vue')
    },
    {
      path: '/',
      component: Doc
    }
  ]
})

export default router
