import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPages from '../views/LandingPages.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPages',
    component: LandingPages
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/membership',
    name: 'Membership',
    component: () => import('../views/Membership.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
