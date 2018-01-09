import Polyline from '@mapbox/polyline';
import Driver from '../lib/dbProcess';

let ping;
const DriverLocation = {};

DriverLocation.pingLocation = (driverKey) => {
    ping = setInterval(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const location = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            Driver.updateDriverLocation(location, driverKey);
        }, (error) => {
            console.log(error);
        },
            {
                enableHighAccuracy: true,
                timeout: 3000
            });
    }, 5000);
};

DriverLocation.stopPingLocation = () => { clearInterval(ping); };

DriverLocation.getDirections = (startLoc, destinationLoc) => new Promise((resolve, reject) => {
        fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}`)
            .then((response) => response.json())
            .then((responseJson) => {
                const points = Polyline.decode(responseJson.routes[0].overview_polyline.points);
                const coords = points.map((point, index) => ({
                    latitude: point[0],
                    longitude: point[1]
                }));
                resolve(coords);
            })
            .catch((error) => {
                reject(error);
            });
    });

export default DriverLocation;

