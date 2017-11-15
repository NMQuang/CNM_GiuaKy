import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'

Vue.use(VueFire)

/* eslint-disable no-new */
/* eslint indent: ["error", "tab"] */
/* eslint indent: ["error", 4, { "VariableDeclarator": 1 }] */
/* eslint-env es6 */
/* eslint-disable eol-last */
/* eslint-env es6 */
/* eslint no-extra-semi: "error" */
/* eslint space-before-blocks: "error" */
/* eslint space-before-function-paren: "error" */
/* eslint-env es6 */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})