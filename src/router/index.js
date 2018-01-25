import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'
import Map from '@/components/Map'
import About from '@/components/About'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
