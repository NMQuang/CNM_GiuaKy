import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: function (resolve) {
        require(['@/components/HomePage.vue'], resolve)
      }
    },
    {
      path: '/home',
      name: 'HomePage',
      component: function (resolve) {
        require(['@/components/HomePage.vue'], resolve)
      }
    }
  ],
  mode: 'history'
})
