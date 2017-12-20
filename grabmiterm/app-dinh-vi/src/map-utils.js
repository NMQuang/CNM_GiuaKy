/* eslint-disable */
/* eslint-disable no-new */
/* eslint comma-spacing: ["error", { "before": false, "after": true }] */
/* eslint-disable no-new */
/* eslint indent: ["error", "tab"] */
/* eslint indent: ["error", 4, { "VariableDeclarator": 1 }] */
/* eslint-env es6 */
/* eslint-disable eol-last */
/* eslint-env es6 */
/* eslint no-extra-semi: "error" */
/* eslint space-before-function-paren: ["error", "never"] */
/* eslint-env es6 */
/* eslint no-extra-semi: "error" */
const searchPlace = function(context, query) {
    if (!global.service) {
        global.service = new google.maps.places.PlacesService(global.map.$mapObject)
    }
    const request = { query }
    global.service.textSearch(
        request,
        (response) => {
            console.log('GMAP_SEARCH___', response)
            if (!response || response.length === 0) {
                console.error('Search failed')
                return
            }
            const place = response[0].geometry
            if (!place) {
                console.error('Place not found')
                return
            }
            context.$store.commit('SET_MARKER_POSITION', place.location)
        },
        (err) => console.error(err)
    )
}

const isNearCustomerWithinRadius = (customerPoint, driverPoint, fromRadius, toRadius) => {
    var distance = google.maps.geometry.spherical.computeDistanceBetween(customerPoint, driverPoint)
    if (distance >= fromRadius && distance < toRadius) return distance
    else return -1
}

var directionsDisplay
var directionsService = new google.maps.DirectionsService()
var map
const initializeDirectionsService = () => {
    directionsDisplay = new google.maps.DirectionsRenderer()
    map = global.map.$mapObject
    directionsDisplay.setMap(map)
}

const calcRoute = (start, end) => {
    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }
    directionsService.route(request, function(result, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(result)
        }
    })
}
export { searchPlace, isNearCustomerWithinRadius, initializeDirectionsService, calcRoute }