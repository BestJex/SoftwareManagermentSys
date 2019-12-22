import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import mcCreate from '../views/McCreate'
import mcList from '../views/McList'
import projectCreate from '../views/ProjectCreate'
import projectList from '../views/ProjectList'


Vue.use(VueRouter)


export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
      path: '/mc/create',
      name: 'mcCreate',
      component: mcCreate
    }, {
      path: '/mc/edit/:id',
      name: 'mcEdit',
      component: mcCreate,
      props: true
    }, {
      path: '/mc/list',
      name: 'mcList',
      component: mcList
    }, {
      path: '/project/create',
      name: 'projectCreate',
      component: projectCreate
    }, {
      path: '/project/edit/:id',
      name: 'projectEdit',
      component: projectCreate,
      props: true
    }, {
      path: '/project/list',
      name: 'projectList',
      component: projectList
    }],
  }]
})