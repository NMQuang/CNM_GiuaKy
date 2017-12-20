// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { global } from './global'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'
import './components/register.js'
// import 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap-vue/dist/bootstrap-vue.js'

/* App sass */
import './assets/style/app.scss'

Vue.use(VueResource)
Vue.use(VueFire)
Vue.config.productionTip = false
    /* eslint-disable no-new */
    /* eslint-disable no-new */
    /* eslint comma-spacing: ["error", { "before": false, "after": true }] */
    /* eslint-disable no-new */
    /* eslint indent: ["error", "tab"] */
    /* eslint indent: ["error", 4, { "VariableDeclarator": 1 }] */
    /* eslint-env es6 */
    /* eslint-disable eol-last */
    /* eslint-env es6 */
    /* eslint no-extra-semi: "error" */
    /* eslint space-before-blocks: "error" */
    /* eslint space-before-function-paren: ["error", "never"] */
    /* eslint-env es6 */
    /* eslint space-before-function-paren: ["error", { "anonymous": "never", "named": "always" }] */
    /* eslint no-unused-vars: "error" */
    /* eslint padded-blocks: ["error", "never"] */

new Vue({
    el: '#app',
    // Attach the Vue instance to the window,
    // so it's available globally.
    created: function() {
        window.Vue = this
        window.global = global
    },
    router,
    store,
    render: h => h(App)
})