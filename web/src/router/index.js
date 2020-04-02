import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

import softWareCreate from "../views/softWare/softWareCreate";
import softWareList from "../views/softWare/softWareList";
import softWareView from "../views/softWare/softWareView";

import anCreate from "../views/An/AnCreate";
import anList from "../views/An/AnList";
import anView from "../views/An/AnView";

import acCreate from "../views/Ac/AcCreate";
import acList from "../views/Ac/AcList";
import acView from "../views/Ac/AcView";

import userCreate from "../views/User/UserCreate";
import userList from "../views/User/UserList";

import projectCreate from "../views/Project/ProjectCreate";
import projectList from "../views/Project/ProjectList";

import Excel2XML from "../views/Tool/Excel2XML";
import XML2Excel from "../views/Tool/XML2Excel";

import home from "../views/home";

import login from "../views/User/Login";

import { Message } from "element-ui";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        isPublic: true
      },
      component: login
    },
    {
      path: "/",
      name: "Main",
      component: Main,
      redirect: "/home",
      children: [
        {
          path: "/softWare/create",
          name: "softWareCreate",
          component: softWareCreate
        },
        {
          path: "/softWare/edit/:id",
          name: "softWareEdit",
          component: softWareCreate,
          props: true
        },
        {
          path: "/softWare/view/:id",
          name: "softWareView",
          component: softWareView,
          props: true
        },
        {
          path: "/softWare/list",
          name: "softWareList",
          component: softWareList
        },
        {
          path: "/an/create",
          name: "anCreate",
          component: anCreate
        },
        {
          path: "/an/edit/:id",
          name: "anEdit",
          component: anCreate,
          props: true
        },
        {
          path: "/an/view/:id",
          name: "anView",
          component: anView,
          props: true
        },
        {
          path: "/an/list",
          name: "anList",
          component: anList
        },
        {
          path: "/ac/create",
          name: "acCreate",
          component: acCreate
        },
        {
          path: "/ac/edit/:id",
          name: "acEdit",
          component: acCreate,
          props: true
        },
        {
          path: "/ac/view/:id",
          name: "acView",
          component: acView,
          props: true
        },
        {
          path: "/ac/list",
          name: "acList",
          component: acList
        },
        {
          path: "/project/create",
          name: "projectCreate",
          component: projectCreate
        },
        {
          path: "/project/edit/:id",
          name: "projectEdit",
          component: projectCreate,
          props: true
        },
        {
          path: "/project/list",
          name: "projectList",
          component: projectList
        },
        {
          path: "/user/create",
          name: "userCreate",
          component: userCreate
        },
        {
          path: "/user/edit/:id",
          name: "userEdit",
          component: userCreate,
          props: true
        },
        {
          path: "/user/list",
          name: "userList",
          component: userList
        },
        {
          path: "/home",
          name: "home",
          component: home
        },
        {
          path: "/tool/Excel2XML",
          name: "Excel2XML",
          component: Excel2XML
        },
        {
          path: "/tool/XML2Excel",
          name: "XML2Excel",
          component: XML2Excel
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    Message({
      type: "error",
      message: "请先登录"
    });
    next("/login");
  }
  next();
});

export default router;
