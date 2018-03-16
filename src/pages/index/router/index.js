import Vue from 'vue'
import Router from 'vue-router'
import Default from '@/components/Default'
import Order from '@/components/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      component: Default
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
