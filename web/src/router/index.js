import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

import mcCreate from '../views/McCreate'
import mcList from '../views/McList'
import mcView from '../views/McView'

import anCreate from '../views/AnCreate'
import anList from '../views/AnList'
import anView from '../views/AnView'

import acCreate from '../views/AcCreate'
import acList from '../views/AcList'
import acView from '../views/AcView'

import projectCreate from '../views/ProjectCreate'
import projectList from '../views/ProjectList'

import Excel2XML from '../views/Excel2XML';
import XML2Excel from '../views/XML2Excel';

import home from '../views/home'

import login from '../views/Login'

Vue.use(VueRouter)


export default new VueRouter({
  routes: [{
    path:'/login',
    name:'login',
    component:login
  },{
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
      path: '/mc/view/:id',
      name: 'mcView',
      component: mcView,
      props: true
    }, {
      path: '/mc/list',
      name: 'mcList',
      component: mcList
    }, {
      path: '/an/create',
      name: 'anCreate',
      component: anCreate
    }, {
      path: '/an/edit/:id',
      name: 'anEdit',
      component: anCreate,
      props: true
    }, {
      path: '/an/view/:id',
      name: 'anView',
      component: anView,
      props: true
    }, {
      path: '/an/list',
      name: 'anList',
      component: anList
    }, {
      path: '/ac/create',
      name: 'acCreate',
      component: acCreate
    }, {
      path: '/ac/edit/:id',
      name: 'acEdit',
      component: acCreate,
      props: true
    }, {
      path: '/ac/view/:id',
      name: 'acView',
      component: acView,
      props: true
    }, {
      path: '/ac/list',
      name: 'acList',
      component: acList
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
    }, {
      path: '/home',
      name: 'home',
      component: home
    }, {
      path: '/tool/Excel2XML',
      name: 'Excel2XML',
      component: Excel2XML
    }, {
      path: '/tool/XML2Excel',
      name: 'XML2Excel',
      component: XML2Excel
    }],
  }]
})