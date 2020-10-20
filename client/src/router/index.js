import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Register from "../components/Register";
import Workouts from "../components/Workouts";
import Single from '../components/Single';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Workouts',
    component: Workouts,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      requiresGuest: true
    }
  },
  {
    path: '/:id',
    name: 'Single',
    component: Single,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('token')){
      next({
        path: '/login',
        query:{
          redirect: to.fullPath
        }
      })
    }else{
      next();
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    if(localStorage.getItem('token')){
      next({
        path: '/',
        query:{
          redirect: to.fullPath
        }
      })
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
