import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ProfileViewVue from '@/views/ProfileView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainLayout,
    children: [
      {
        path : "/",
        name: "home",
        component: HomeViewVue
      },
      {
        path : "/profile",
        name: "profile",
        component: ProfileViewVue
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
