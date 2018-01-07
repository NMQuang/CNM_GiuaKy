
const Firebase = require('firebase'); 
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

const getDriverInfo = (username) => {
    return new Promise((resolve,reject) => {
        db.ref('drivers').orderByChild('username').equalTo(username).once('value').then((snapshot) => {
            snapshot.forEach((driverSnapshot) => {
                const temp = {
                    userInfo: driverSnapshot.val(),
                    key: driverSnapshot.key
                }
                resolve(temp);
            })
            reject('not found')
        })
    })
}
module.exports = getDriverInfo;