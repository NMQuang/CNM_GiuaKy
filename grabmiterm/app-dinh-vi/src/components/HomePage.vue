<template>
<div id="address-list" class="address-list">
  <div class="row">
    <div class="col-sm-4 col-12">
      <div class="list-group">
        <a href="#" class="list-group-item" v-for="point in points" v-on:click="addMapAddress($event,point)" v-if="point.serviceStatus == 'processing'">{{ point.place }}</a>
      </div>
    </div>
    <div class="col-sm-8 col-12">
      <div class="card">
        <h4 class="card-header">Định vị bản đồ</h4>
        <div class="card-body">
          <div class="input-group">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button" v-on:click="resetMapAddress">Bỏ qua</button>
            </span>
            <gmap-autocomplete
              id="my-place-search-box"
              class="form-control"
              placeholder="Nhập địa chỉ vào đây"
              v-model="mapAddress"
              :selectFirstOnEnter="false"
              @place_changed="handlePlaceChanged"
            >
          </gmap-autocomplete>
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button" v-on:click="handleSearchPlace">Tìm kiếm</button>
            </span>
          </div>
          <div id="geomap" class="geomap">
            <my-google-map></my-google-map>
          </div>
        </div>
        <div class="card-footer">
          <div class="float-right">
            <button class="btn btn-warning" v-on:click="resetMapAddress">Huỷ bỏ</button>
            <button class="btn btn-primary" v-on:click="submitGeocode">Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12 col-12">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Họ tên</th>
            <th scope="col">Xe</th>
            <th scope="col">Loại xe</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Khoảng cách(m)</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="driver in drivers" v-if="driver.data.status === 'free' && driver.data.connect === 'online'">
            <td>{{driver.data.name}}</td>
            <td>{{driver.data.vehicle.name}}</td>
            <td>{{driver.data.vehicle.service_type}}</td>
            <td>{{driver.data.status}}</td>
            <td>{{driver.distance}}</td>
            <td><button class="btn btn-success" v-on:click="submitPointToDriver(driver)">Gửi thông tin</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import GoogleMap from './GoogleMap.vue'
import { pointsRef, driversRef, db } from '../firebase.js'
import { searchPlace, isNearCustomerWithinRadius, initializeDirectionsService, calcRoute } from '../map-utils'

export default {
  name: 'VinhNguyen',
  firebase: {
    points: pointsRef,
  },
  methods: {
    addMapAddress: function (event,point) {
      this.drivers = []
      this.mapAddress = event.target.text
      this.selectedPoint = point
      searchPlace(event.target.text)
        .then((location) => this.$store.commit('SET_MARKER_POSITION', location))
    },
    submitGeocode: function(event) {
      event.preventDefault()
      var center = this.$store.getters.markers[0].position
      let resultList = [];
      searchPlace(this.selectedPoint['endPlace']).then((location) => {
        pointsRef.child(this.selectedPoint['.key'])
                  .update({"endLocation": {lat: location.lat(), lng: location.lng()}});
      })
      pointsRef.child(this.selectedPoint['.key']).update({"location": {lat: center.lat(), lng: center.lng()},
                                                          "status": true })
      driversRef.on('value', function(snapshot) {
        resultList.length = 0;
        let driversJson = snapshot.toJSON();
        Object.keys(driversJson).forEach((key) => {
          var driverData = driversJson[key]
          var centerPoint = new google.maps.LatLng(center.lat(),center.lng())
          var driverPoint = new google.maps.LatLng(driverData.location.lat,driverData.location.lng)
          if(isNearCustomerWithinRadius(centerPoint ,driverPoint, 0, 300) !== -1) {
            var driverFullData = {
              key,
              data: driverData,
              distance: isNearCustomerWithinRadius(centerPoint, driverPoint, 0, 300)
            } 
            resultList.push(driverFullData)
          }
        });
        if(resultList.length < 10) {
          Object.keys(driversJson).forEach((key) => {
            var driverData = driversJson[key]
            var centerPoint = new google.maps.LatLng(center.lat(),center.lng())
            var driverPoint = new google.maps.LatLng(driverData.location.lat,driverData.location.lng)
            if(isNearCustomerWithinRadius(centerPoint ,driverPoint, 300, 600) !== -1) {
              var driverFullData = {
                key,
                data: driverData,
                distance: isNearCustomerWithinRadius(centerPoint, driverPoint, 300, 600)
              }
              resultList.push(driverFullData)
            }
          });
        }
        if(resultList.length < 10) {
          Object.keys(driversJson).forEach((key) => {
            var driverData = driversJson[key]
            var centerPoint = new google.maps.LatLng(center.lat(),center.lng())
            var driverPoint = new google.maps.LatLng(driverData.location.lat,driverData.location.lng)
            if(isNearCustomerWithinRadius(centerPoint ,driverPoint, 600, 1000) !== -1) {
              var driverFullData = {
                key,
                data: driverData,
                distance: isNearCustomerWithinRadius(centerPoint, driverPoint, 600, 1000)
              } 
              resultList.push(driverFullData)
            }
          });
        }
        resultList.sort(function(a,b){
        return (a['distance'] > b['distance']) ? 1 : ((a['distance'] < b['distance']) ? -1 : 0)});
        resultList.splice(9, resultList.length - 10);
        console.log(resultList);
      });
      this.drivers = resultList;
    },
    handleSearchPlace: function () {
      const element = $('#my-place-search-box')
      if (!element || element.length === 0) {
        console.error('Search box not found')
        return
      }
      const query = element[0].value
      console.log('query__', query)
      if (!query || query === '') {
        console.error('Query null')
        return
      }
      searchPlace(query).then((location) => {this.$store.commit('SET_MARKER_POSITION', location)})
    },
    resetMapAddress: function (event) {
      this.mapAddress = ''
    },
    handlePlaceChanged: function (place) {
      if (!place || !place.geometry) {
        console.log('Place was not found')
        return
      }

      const position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }

      this.$store.commit('SET_MARKER_POSITION', position)
    },
    submitPointToDriver: function(driver) {
      let pointKey = this.selectedPoint['.key']
      db.ref(`points/${pointKey}`).once('value').then((snapshot) => {
        let point = snapshot.val();
        console.log(point);
        pointsRef.child(pointKey).update({"serviceStatus": 'wait', "driverId": driver.key})
        db.ref(`drivers/${driver.key}`).update({"status": "busy", "pointData": {point,pointKey} })
      }); 
      this.selectedPoint = []
      this.drivers = []
      this.mapAddress = ''
    }
  },
  modules: { GoogleMap },
  data () {
    return {
      mapAddress: '',
      drivers: [],
      selectedPoint: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.address-list {
  height: 85vh;
  width: 100%;
}
.address-list .list-group {
  height: 85vh;
  overflow-y: scroll;
}
.address-list .card {
  height: 85vh;
  overflow-y: scroll;
}

.table {
  margin-top: 20px !important;
}
</style>
