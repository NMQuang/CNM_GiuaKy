// Set the key we'll use in local storage.
// Go to Chrome dev tools, application tab, click "Local Storage" and "http://localhost:8080"
// and you'll see this key set below (if logged in):
export const STORAGE_KEY = 'app-dinh-vi'

let initialState = {}

// Local storage sync state
if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
} else {
  initialState = {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      name: null
    }
  }
}

// Other state (not synced in local storage)
initialState.center = {lat: 10.780142, lng: 106.665933}
initialState.markers = [{
  position: {lat: 10.780142, lng: 106.665933}
}]

export const state = initialState
