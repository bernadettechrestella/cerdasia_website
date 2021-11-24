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
]

const router = new VueRouter({
  routes
})

export default router
