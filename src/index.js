import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import createRouter from './config/router'

const router = createRouter()

Vue.use(VueRouter)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
