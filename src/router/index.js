import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Login',
    name: 'Login',
    component: Login
  },

  {
    path: '/Reg',
    name: 'Reg',
    component: Reg
  },

  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
