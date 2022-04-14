import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
