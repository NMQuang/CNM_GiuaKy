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

export default DriverLocation;

