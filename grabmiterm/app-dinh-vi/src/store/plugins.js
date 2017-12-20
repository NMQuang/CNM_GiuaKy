import { STORAGE_KEY } from './state'
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
const localStoragePlugin = store => {
    store.subscribe((mutation, state) => {
        const syncedData = { auth: state.auth, user: state.user, center: state.center, markers: state.markers }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(syncedData))

        if (mutation.type === 'CLEAR_ALL_DATA') {
            localStorage.removeItem(STORAGE_KEY)
        }
    })
}

// TODO: setup env
// export default process.env.NODE_ENV !== 'production' ? [localStoragePlugin] : [localStoragePlugin]
export default [localStoragePlugin]