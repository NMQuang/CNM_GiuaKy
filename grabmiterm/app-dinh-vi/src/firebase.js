/*eslint-disable*/
import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBDOa513-q8BmPHmm1zlurdkkot3Z3bX-w',
  authDomain: 'grab-midterm.firebaseapp.com',
  databaseURL: 'https://grab-midterm.firebaseio.com',
  projectId: 'grab-midterm',
  storageBucket: 'grab-midterm.appspot.com',
  messagingSenderId: '495408687232'
}

const app = Firebase.initializeApp(config)
const db = app.database()

const pointsRef = db.ref('points')
const driversRef = db.ref('drivers')
// var testData = {
//   random_firstname: ['Trần', 'Nguyễn', 'Lý', 'Hoàng', 'Thái', 'Ngô'],
//   random_midname: ['Thị', 'Văn', 'Ngọc', 'Kim'],
//   random_lastname: ['Vinh', 'Sơn', 'Hải', 'Vũ', 'Quang', 'Phước', 'Phúc', 'Chi', 'Tiến', 'Tuyền'],
//   vehicle: ['Sirius', 'Lead', 'Wave Alpha', 'SH', 'Exciter']
// }
// var circle1 = new google.maps.Circle({
//   center: new google.maps.LatLng(10.771129, 106.696045),
//   radius: 1000
// });

// var circle2 = new google.maps.Circle({
//   center: new google.maps.LatLng(10.786812, 106.701710),
//   radius: 1000
// });

// var bounds1 = circle1.getBounds();
// var bounds2 = circle2.getBounds();

// var sw1 = bounds1.getSouthWest();
// var ne1 = bounds1.getNorthEast();

// var sw2 = bounds2.getSouthWest();
// var ne2 = bounds2.getNorthEast();
// var listNum1 = 0;
// var listNum2 = 0;
// while(listNum1 < 50) {
//     var ptLat = Math.random() * (ne1.lat() - sw1.lat()) + sw1.lat();
//     var ptLng = Math.random() * (ne1.lng() - sw1.lng()) + sw1.lng();
//     var point = new google.maps.LatLng(ptLat, ptLng);
//     if (google.maps.geometry.spherical.computeDistanceBetween(point, circle1.getCenter()) < circle1.getRadius()) {
//       var driver = {
//         location: {
//           lat: ptLat,
//           lng: ptLng
//         },
//         name: testData.random_firstname[Math.floor(Math.random()*testData.random_firstname.length)] + ' ' + testData.random_midname[Math.floor(Math.random()*testData.random_midname.length)] + ' ' + testData.random_lastname[Math.floor(Math.random()*testData.random_lastname.length)],
//         status: 'free',
//         vehicle: {
//           name: testData.vehicle[Math.floor(Math.random()*testData.vehicle.length)],
//           service_type: 'normal'  ,
//           vehicle_type: 'bike'
//         }
//       }
//       driversRef.push(driver);
//       listNum1++
//       console.log(listNum1)
//     }
// }

// while(listNum2 < 100) {
//     var ptLat = Math.random() * (ne2.lat() - sw2.lat()) + sw2.lat();
//     var ptLng = Math.random() * (ne2.lng() - sw2.lng()) + sw2.lng();
//     var point = new google.maps.LatLng(ptLat, ptLng);
//     if (google.maps.geometry.spherical.computeDistanceBetween(point, circle2.getCenter()) < circle2.getRadius()) {
//       var driver = {
//         location: {
//           lat: ptLat,
//           lng: ptLng
//         },
//         name: testData.random_firstname[Math.floor(Math.random()*testData.random_firstname.length)] + ' ' + testData.random_midname[Math.floor(Math.random()*testData.random_midname.length)] + ' ' + testData.random_lastname[Math.floor(Math.random()*testData.random_lastname.length)],
//         status: 'free',
//         vehicle: {
//           name: testData.vehicle[Math.floor(Math.random()*testData.vehicle.length)],
//           service_type: 'normal',
//           vehicle_type: 'bike'
//         }
//       }
//       driversRef.push(driver)
//       listNum2++
//       console.log(listNum2)
//     }
// }

export { pointsRef, driversRef }
