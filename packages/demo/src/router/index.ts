import { createRouter, createWebHistory } from 'vue-router'
import VuetifyBasicExample from '../views/vuetify/BasicExample.vue'
import VuetifyCustomToolbarExample from '../views/vuetify/CustomToolbarItemsExample/index.vue'
import AffixToolbarExample from '../views/AffixToolbarExample.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vuetify',
      children: [
        {
          path: 'basic',
          component: VuetifyBasicExample
        },
        {
          path: 'custom-toolbar',
          component: VuetifyCustomToolbarExample
        }
      ]
    },
    {
      path: 'plugins',
      children: [
        {
          path: 'affix-toolbar',
          component: AffixToolbarExample
        }
      ]
    }
  ]
})

export default router
