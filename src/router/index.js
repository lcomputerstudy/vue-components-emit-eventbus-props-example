import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Props from '../views/Props.vue'
import Emit from '../views/emit.vue'
import EventBus from '../views/eventbus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/props',
    name: 'Props',
    component: Props
  },
  {
    path: '/emit',
    name: 'Emit',
    component: Emit
  },
  {
    path: '/eventbus',
    name: 'EventBus',
    component: EventBus
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
