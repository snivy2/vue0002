import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import shop from '../components/shop.vue'
import cart from '../components/cart.vue'
import mycenter from '../components/mycenter.vue'
import goodinfo from'../components/goodinfo.vue'
import pinglun from'../components/pinglun.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: mycenter
    },
    {
      path: '/goodinfo/:id',
      name: 'goodinfo',
      component: goodinfo
    },
    {
      path: '/pinglun/:id',
      name: 'pinglun',
      component: pinglun
    }
  ],

  linkActiveClass:'mui-active'
})
