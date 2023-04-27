/**
 * Make any `Promise` suspensible - catchable by `Suspense` component.
 *
 * @param {Promise} promise  the promise.
 * @return {Object}
 */
const suspensify = function (promise) {
  let status = 'pending'
  let result

  let suspend = promise.then(
    function (response) {
      status = 'success'
      result = response
    },
    function (response) {
      status = 'error'
      result = response
    },
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspend
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

export default suspensify
