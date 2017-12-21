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

export { pointsRef, driversRef }
