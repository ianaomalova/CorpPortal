import { createRouter, createWebHistory } from 'vue-router'
import Main from "@/views/Main";
import Modals from "@/views/Modals";
import Calendar from "@/views/Calendar";


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/modals',
    name: 'Modals',
    component: Modals
  },
  {
    path: '/calendar',
    component: Calendar
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
