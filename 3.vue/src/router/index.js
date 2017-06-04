import Vue from 'vue'
import Router from 'vue-router'
import Timeout from '@/components/timeout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timeout',
      component: Timeout
    }
  ]
})
