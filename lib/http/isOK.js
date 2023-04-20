import HttpCode from './HttpCode'

/**
 * Check if the status code is in 2xx.
 *
 * @param {number} code
 * @return {boolean}
 */
const isOK = function (code) {
  return code === HttpCode.OK
    || code === HttpCode.CREATED
    || code === HttpCode.ACCEPTED
    || code === HttpCode.NON_AUTHORITATIVE_INFORMATION
    || code === HttpCode.NO_CONTENT
    || code === HttpCode.RESET_CONTENT
    || code === HttpCode.PARTIAL_CONTENT
    || code === HttpCode.MULTI_STATUS
    || code === HttpCode.ALREADY_REPORTED
    || code === HttpCode.IM_USED
}

export default isOK
