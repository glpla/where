import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import City from '@/components/city/City'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/Detail.vue')
    }, {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})