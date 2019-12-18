import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import mcCreate from '../views/McCreate'

Vue.use(VueRouter)


export default new VueRouter({
      routes:[{
        path:'/',
        name:'Main',
        component:Main,
        children:[{
          path:'/mc/create',
          name:'createMC',
          component:mcCreate
        }],
      }]
})