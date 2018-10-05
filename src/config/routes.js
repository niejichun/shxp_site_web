export default [
  { path: '/', redirect: '/homePage' },
  { path: '/homePage', component: resolve => require(['../views/homePage.vue'], resolve) },
  { path: '/aboutMe', component: resolve => require(['../views/aboutMe.vue'], resolve) }
]
