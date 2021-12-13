import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/landingpage',
        name: 'LandingPage',
        component: () => import('../views/LandingPages.vue')
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
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    next('/landingpage')
  } else {
    next()
  }
})

export default router
