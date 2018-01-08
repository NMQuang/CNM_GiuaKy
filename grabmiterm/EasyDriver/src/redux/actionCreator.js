import DriverLocation from '../lib/locationProcess';
import store from '../redux/store';
import Driver from '../lib/dbProcess';

export function updateLocationDriver(location) {
    return { type: 'UPDATE_LOCATION', location };
}

export function initLocationDriver(location) {
    return { type: 'INIT_LOCATION', location };
}
export function startSignIn() {
    return { type: 'START_SIGNIN' };
}

export function endSignIn() {
    return { type: 'END_SIGNIN' };
}

export function signIn(user) {
    return { type: 'SIGN_IN', user };
}
export function signOut() {
    if (store.getState().isConnect) {
        Driver.updateConnectStatus('offline', store.getState().user.userKey);
        DriverLocation.stopPingLocation();
    }
    return { type: 'SIGN_OUT' };
}
export function signInAsync(username, password) {
    return dispatch => {
        dispatch(startSignIn());
        fetch('https://easydriver-server.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: username,
                pwd: password
            })
        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            const userInfo = {
                token: responseJson.access_token,
                userKey: responseJson.userId,
                userName: responseJson.username
            };
            dispatch(signIn(userInfo));
            dispatch(endSignIn());
        })
        .catch((err) => {
            console.log(err);
            dispatch(endSignIn());
        });
    };
}
export function initLocationDriverAsync() {
    return dispatch => navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        const loc = {
            location: {
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude
            }
        };
        dispatch(initLocationDriver(loc));
    }, (error) => {
        console.log(error);
    }, {
            enableHighAccuracy: true,
            timeout: 5000
        });
}
export function toggleConnection() {
    return { type: 'TOGGLE_CONNECTION' };
}
export function getUserPointData(pointData) {
    return { type: 'GET_POINTDATA', pointData };
}

