import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import axios from 'axios'
import createRouter from './config/router'
import createStore from './store/index'

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$axios = axios;

const router = createRouter();
const store = createStore();

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
