import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/layout/default'
import Home from '@/pages/home'
import City from '@/pages/changeCity'
import Product from '@/pages/product'
import Login from '@/pages/login'
import Register from '@/pages/register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: Default,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'city',
        name: 'city',
        component: City
      },
      {
        path: 'product/:name',
        name: 'product',
        component: Product
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
