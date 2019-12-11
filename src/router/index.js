import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import shopCart from "./modules/shopCart";
import classify from "./modules/classify";
import myWorld from "./modules/myWorld";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      showFooter:true
    },
  },
  ...shopCart,
  ...classify,
  ...myWorld
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
