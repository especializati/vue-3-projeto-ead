import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import MySupports from '@/views/supports/MySupports.vue'
import ModulesAndLessons from '@/views/modules/ModulesAndLessons.vue'

const routes = [
    {
      path: '/campus',
      component: () => import('@/layouts/DefaultTemplate.vue'),
      children: [
        {
          path: 'modulos',
          name: 'campus.modules',
          component: ModulesAndLessons
        }, {
          path: 'minhas-duvidas',
          name: 'campus.my.supports',
          component: MySupports
        }, {
          path: '',
          name: 'campus.home',
          component: Home
        }
      ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
