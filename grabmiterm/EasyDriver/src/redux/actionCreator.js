export function updateLocationDriver(location) {
    return { type: 'UPDATE_LOCATION', location };
}

export function initLocationDriver(location) {
    return { type: 'INIT_LOCATION', location };
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
