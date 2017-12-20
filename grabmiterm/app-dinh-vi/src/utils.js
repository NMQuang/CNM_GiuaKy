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
 module.exports = {

     /**
      * Get the error from a response.
      *
      * @param {Response} response The Vue-resource Response that we will try to get errors from.
      */
     getError: function(response) {
         return response.body['error_description'] ?
             response.body.error_description :
             response.statusText
     }
 }