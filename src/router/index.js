import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import LoginTask from '../components/Login.vue' 


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginTask',
    component: LoginTask
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/completati',
    name: 'Completati',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CompletatiView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
