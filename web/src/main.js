import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index'
import http from '../http/http'

Vue.config.productionTip = false
Vue.prototype.axios = http
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')