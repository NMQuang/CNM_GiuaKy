import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disable */
Vue.use(Router)
    /* eslint-disable no-new */
    /* eslint comma-spacing: ["error", { "before": false, "after": true }] */
    /* eslint-disable no-new */
    /* eslint indent: [0, "tab"] */

/* eslint-disable eol-last */
/* eslint-env es6 */
/* eslint no-extra-semi: "error" */
/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */
export default new Router({
    routes: [{
            path: '/',
            name: 'HomePage',
            component: function(resolve) {
                require(['@/components/HomePage.vue'], resolve)
            }
        },
        {
            path: '/home',
            name: 'HomePage',
            component: function(resolve) {
                require(['@/components/HomePage.vue'], resolve)
            }
        }
    ],
    mode: 'history'
})