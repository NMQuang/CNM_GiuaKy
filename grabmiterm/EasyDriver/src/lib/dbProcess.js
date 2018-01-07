import Firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBDOa513-q8BmPHmm1zlurdkkot3Z3bX-w',
    authDomain: 'grab-midterm.firebaseapp.com',
    databaseURL: 'https://grab-midterm.firebaseio.com',
    projectId: 'grab-midterm',
    storageBucket: 'grab-midterm.appspot.com',
    messagingSenderId: '495408687232'
};

const app = Firebase.initializeApp(config);
const db = app.database();

const Driver = {};

Driver.updateConnectStatus = (status, driverKey) => {
    db.ref(`drivers/${driverKey}`).update({
        connect: status
    });
};

Driver.updateDriverLocation = (location, driverKey) => {
    db.ref(`drivers/${driverKey}`).update({
        location
    });
    db.ref(`drivers/${driverKey}`).once('value').then((snapshot) => alert(JSON.stringify(snapshot.val())));
};

export default Driver;

