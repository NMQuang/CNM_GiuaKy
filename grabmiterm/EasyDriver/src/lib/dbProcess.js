import Firebase from 'firebase';
import NavigatorService from '../navigations/NavigatorService';
import store from '../redux/store';
import { getUserPointData, updateLocationDriver } from '../redux/actionCreator';

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
};
let listenID;

Driver.listenPointComing = (driverKey) => {
    listenID = db.ref(`drivers/${driverKey}/status`).on('value', (snapshot) => {
        if (snapshot.val() === 'busy') {
            db.ref(`drivers/${driverKey}`).once('value').then((driverSnapshot) => {
                const pointData = driverSnapshot.val().pointData;
                store.dispatch(getUserPointData(pointData));
                NavigatorService.reset('CustomerNotificationScreen');
            });
        }
    });
};
Driver.stopListenPointComing = (driverKey) => {
    db.ref(`drivers/${driverKey}/status`).off('value', listenID);
};
Driver.returnPoint = (pointKey, driverKey) => {
    db.ref(`drivers/${driverKey}`).update({
        status: 'free', pointData: null
    });
    db.ref(`points/${pointKey}`).update({
        serviceStatus: 'completed', driverId: null
    });
};
Driver.sendOnDriverWaySignal = (pointKey) => {
    db.ref(`points/${pointKey}`).update({
        serviceStatus: 'driver-is-coming'
    });
};
Driver.sendPickedSignal = (pointKey) => {
    db.ref(`points/${pointKey}`).update({
        serviceStatus: 'picked'
    });
};

export default Driver;

