import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

import softWareCreate from "../views/softWare/softWareCreate";
import softWareList from "../views/softWare/softWareList";
import softWareView from "../views/softWare/softWareView";

import userCreate from "../views/User/UserCreate";
import userList from "../views/User/UserList";

import tagCreate from "../views/tag/tagCreate";
import tagList from "../views/tag/tagList";

import Excel2XML from "../views/Tool/Excel2XML";
import XML2Excel from "../views/Tool/XML2Excel";

import home from "../views/home/home";

import login from "../views/User/Login";

import { Message } from "element-ui";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      meta: {
        isPublic: true,
      },
      component: login,
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
          component: softWareCreate,
        },
        {
          path: "/softWare/edit/:id",
          name: "softWareEdit",
          component: softWareCreate,
          props: true,
        },
        {
          path: "/softWare/view/:id",
          name: "softWareView",
          component: softWareView,
          props: true,
        },
        {
          path: "/softWare/list",
          name: "softWareList",
          component: softWareList,
        },
        {
          path: "/softWare/list/:id",
          name: "softWareListFindTag",
          props: true,
          component: softWareList,
        },
        {
          path: "/tag/create",
          name: "tagCreate",
          component: tagCreate,
        },
        {
          path: "/tag/edit/:id",
          name: "tagEdit",
          component: tagCreate,
          props: true,
        },
        {
          path: "/tag/list",
          name: "tagList",
          component: tagList,
        },
        {
          path: "/user/create",
          name: "userCreate",
          component: userCreate,
        },
        {
          path: "/user/edit/:id",
          name: "userEdit",
          component: userCreate,
          props: true,
        },
        {
          path: "/user/list",
          name: "userList",
          component: userList,
        },
        {
          path: "/home",
          name: "home",
          component: home,
        },
        {
          path: "/tool/Excel2XML",
          name: "Excel2XML",
          component: Excel2XML,
        },
        {
          path: "/tool/XML2Excel",
          name: "XML2Excel",
          component: XML2Excel,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    Message({
      type: "error",
      message: "请先登录",
    });
    next("/login");
  }
  next();
});

export default router;
