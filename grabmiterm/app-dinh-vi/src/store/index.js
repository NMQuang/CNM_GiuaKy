import Vue from 'vue'
import Vuex from 'vuex'
import { state } from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import plugins from './plugins'
import * as VueGoogleMaps from 'vue2-google-maps'

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
