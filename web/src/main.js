import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index'


Vue.config.productionTip = false

import http from './http/http.js'
Vue.prototype.$http = http;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')