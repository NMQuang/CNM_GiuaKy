<template>
<div id="address-list" class="address-list">
  <div class="row">
    <div class="col-sm-12 col-12">
      <div class="card">
        <h4 class="card-header">Định vị bản đồ</h4>
        <div class="card-body">
          <div id="geomap" class="geomap">
            <my-google-map></my-google-map>
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
            <th scope="col">Vị trí khách</th>
            <th scope="col">Trạng thái định vị</th>
            <th scope="col">Trạng thái xe nhận</th>
            <th scope="col">SĐT</th>
            <th scope="col">Họ tên xe</th>
            <th scope="col">Xe</th>
            <th scope="col">Loại xe</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pointData in dataPoints">
            <td>{{pointData.pointInfo.place}}</td>
            <td v-if="pointData.pointInfo.status">Đã định vị</td>
            <td v-else>Chưa định vị</td>
            <td v-if="pointData.pointInfo.serviceStatus">{{pointData.pointInfo.serviceStatus}}</td>
            <td v-else>Chưa có xe nhận</td>
            <td>{{pointData.pointInfo.sđt}}</td>
            <td v-if="pointData.driverInfo">{{pointData.driverInfo.name}}</td>
            <td v-else></td>
            <td v-if="pointData.driverInfo">{{pointData.driverInfo.vehicle.name}}</td>
            <td v-else></td>
            <td v-if="pointData.driverInfo">{{pointData.driverInfo.vehicle.service_type}}</td>
            <td v-else></td>
            <td v-if="pointData.driverInfo"><button class="btn btn-success" v-on:click="showRoute(pointData)">Xem đường đi</button></td>
            <td v-else></td>
            <td v-if="pointData.pointInfo.serviceStatus && pointData.pointInfo.serviceStatus === 'wait'"><button class="btn btn-danger" v-on:click="cancelWait(pointData)">Hủy chờ</button></td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import GoogleMap from './GoogleMap.vue'
import { pointsRef, driversRef } from '../firebase.js'
import { searchPlace, isNearCustomerWithinRadius, initializeDirectionsService, calcRoute } from '../map-utils'

export default {
  name: 'VinhNguyen',
  modules: { GoogleMap },
  methods: {
    showRoute: function(pointData) {
      initializeDirectionsService()
      var start = new google.maps.LatLng(pointData.pointInfo.location.lat,pointData.pointInfo.location.lng)
      var end = new google.maps.LatLng(pointData.driverInfo.location.lat,pointData.driverInfo.location.lng)
      calcRoute(start,end)
    },
    cancelWait: function(pointData) {
      driversRef.child(pointData.pointInfo.driverId).update({"status": "free", "pointData": null})
      pointsRef.child(pointData.pointKey).update({"serviceStatus": 'processing', "driverId": null})
    }
  },
  data () {
    let pointList = []
    pointsRef.on('value',function(snapshot){
      pointList.length = 0
      snapshot.forEach(function(snap){
        let point = snap.val()
        var pointKey = snap.key;
        var driver;
        if(point.hasOwnProperty('driverId')) {
          driversRef.once('value').then(function(snapshotDriver){
            driver = snapshotDriver.child(point.driverId).val()
            var pointData = {
              pointKey,
              pointInfo: point,
              driverInfo: driver
            }
            pointList.push(pointData)
          })
        } else {
          var pointData = {
            pointInfo: point,
            driverInfo: driver
          }
          pointList.push(pointData)
        }
      })
    })
    return {
      dataPoints: pointList
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
