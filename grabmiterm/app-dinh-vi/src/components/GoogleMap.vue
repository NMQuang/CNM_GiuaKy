<template>
  <div id="my-gmap">
    <gmap-map
      :center="this.$store.getters.center"
      :zoom="17"
      class="my-google-map"
      ref="myGMap"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in this.$store.getters.markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'myGoogleMap',
  data () {
    return {
      center: {},
      markers: []
    }
  },
  mounted: function () {
    global.map = this.$refs.myGMap
  }
}
</script>

<style>
  .my-google-map {
    width: 100%;
    height: 100%;
    min-height: 500px;
    margin-top: 20px;
  }
</style>
