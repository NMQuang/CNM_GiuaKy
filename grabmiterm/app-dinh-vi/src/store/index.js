import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import plugins from './plugins'
import * as VueGoogleMaps from 'vue2-google-maps'
/* eslint-disable no-new */
/* eslint comma-spacing: ["error", { "before": false, "after": true }] */
/* eslint-disable no-new */
/* eslint indent: ["error", "tab"] */
/* eslint indent: ["error", 4, { "VariableDeclarator": 1 }] */
/* eslint-env es6 */
/* eslint-disable eol-last */
/* eslint-env es6 */
/* eslint no-extra-semi: "error" */
/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */
Vue.use(Vuex)
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCVqONGKSDwyB0Z6hLz8rrOx3XDcQKNWQU',
        libraries: ['places', 'geometry']
    }
})

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    plugins
})

export default store