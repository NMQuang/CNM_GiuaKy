import Vue from 'vue'
import GoogleMap from './GoogleMap.vue'

Vue.component('my-google-map', {
  template: '<GoogleMap/>',
  components: { GoogleMap }
})
