// Set the key we'll use in local storage.
// Go to Chrome dev tools, application tab, click "Local Storage" and "http://localhost:8080"
// and you'll see this key set below (if logged in):
/* eslint-disable */
export const STORAGE_KEY = 'app-dinh-vi'
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
initialState.center = { lat: 10.780142, lng: 106.665933 }
initialState.markers = [{
    position: { lat: 10.780142, lng: 106.665933 }
}]

export const state = initialState /* eslint-disable */