<template>
  <div class="container-fluid" id="app">
    
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#sidebar-collapse"><span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span></button>
              <a class="navbar-brand" href="index.html"><span>Grab QV</span> System</a>
          </div>
      </div><!-- /.container-fluid -->
    </nav>
      <div class="row home">
        <div class="col-md-6"> 
          <legend>Thông tin khách hàng</legend>
          <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Địa điểm đón</th>
                    <th scope="col">Địa điểm đến</th>
                    <th scope="col">Loại xe</th>
                    <th scope="col">SĐT</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="point in points">
                   
                    <th scope="row">1</th>
                    <td>{{point.startPlace}}</td>
                    <td>{{point.place}}</td>
                    <td>{{point.type}}</td>
                    <td>{{point.sđt}}</td>
                    <template v-if="point.status"><td>Done</td></template>
                    <template v-else><td>Processing</td></template>
                     <span class="pull-right" title="remove note" @click="deletePoint(point)">
                        <span class="glyphicon glyphicon-remove"></span>
                    </span>
                </tr>
            </tbody>
          </table>
        </div>
		
        <div class="col-md-4 grab">
            <form>
                <legend>Đặt Grab</legend>
                <div class="form-group">
                    <label for="pointPlace">Địa điểm đón</label>
                    <input id="pointPlace" type="text" class="form-control" placeholder="Nhập địa điểm" v-model="newPoint.startPlace">
                </div>
                <div class="form-group">
                    <label for="pointPlace">Địa điểm đến</label>
                    <input id="pointPlace" type="text" class="form-control" placeholder="Nhập địa điểm" v-model="newPoint.place">
                </div>
                <div class="form-group">
                    <label for="pointType">Loại xe</label>
                    <input id="pointType" type="text" class="form-control" placeholder="Nhập loại xe" v-model="newPoint.type">
                </div>
                <div class="form-group">
                    <label for="pointSDT">SĐT</label>
                    <input id="pointSDT" type="text" class="form-control" placeholder="Nhập SĐT" v-model="newPoint.sđt">
                </div>
                <button type="button" class="btn btn-primary btn-block" @click="addPoint">
                    <span class="glyphicon glyphicon-ok"></span>
                    Save
                </button>
            </form>
        </div>
        
      </div>
    <nav class="navbar navbar-custom navbar-fixed-bottom" role="navigation">
      <div class="container-fluid">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                      data-target="#sidebar-collapse"><span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span></button>
              <a class="navbar-brand" href="index.html"><span>Development by QV</span> Solution</a>
          </div>
      </div><!-- /.container-fluid -->
    </nav>
      
    </div>
</template>

<script>

import Firebase from 'firebase'
import toastr from 'toastr'

let config = {
  apiKey: 'AIzaSyBDOa513-q8BmPHmm1zlurdkkot3Z3bX-w',
  authDomain: 'grab-midterm.firebaseapp.com',
  databaseURL: 'https://grab-midterm.firebaseio.com',
  projectId: 'grab-midterm',
  storageBucket: 'grab-midterm.appspot.com',
  messagingSenderId: '495408687232'
}

let app = Firebase.initializeApp(config)
let db = app.database()

let pointsRef = db.ref('points')

export default {
  name: 'app',
  firebase: {
    points: pointsRef
  },
  data () {
    return {
      newPoint: {
        startPlace: '',
        place: '',
        type: '',
        status: '',
        sđt: '',
        location: 'null'
      }
    }
  },
  methods: {
    addPoint: function () {
      var self = this
      self.newPoint.status = false
      pointsRef.push(self.newPoint)
      self.startPlace = ''
      self.newPoint.place = ''
      self.newPoint.type = ''
      self.newPoint.sđt = ''
      self.newPoint.location = 'null'
    },
    deletePoint: function (point) {
      var rs = confirm('Are you really remove this point?')
      if (rs) {
        pointsRef.child(point['.key']).remove()
        toastr.success('Point removed successfully.')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.home {
  margin-top:40px;
}

.navbar-custom {
    background: #222;
    height: 60px;
}

.grab {
  margin-left:30px;
}
</style>
