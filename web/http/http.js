import Vue from 'vue';
import axios from 'axios';
// import router from '../src/router/index';


Vue.prototype.axios = axios;
Vue.prototype.host = '/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; // 配置请求头
axios.defaults.baseURL = 'http://localhost:3333/api'

export default axios;