import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import axios from 'axios'
import createRouter from './config/router'

const router = createRouter()

Vue.prototype.$axios = axios
Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
