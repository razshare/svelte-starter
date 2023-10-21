import { ok } from ':scripts/ok'

export const PROMISE_INFINITE = new Promise(function run() {
  return true
})
/**
 * @type {Promise<void>}
 */
export const PROMISE_EMPTY = new Promise(function run(resolve) {
  resolve()
})
/**
 * @type {Promise<Array<any>>}
 */
export const PROMISE_EMPTY_ARRAY = new Promise(function run(resolve) {
  resolve([])
})
/**
 * @type {Promise<Unsafe<any>>}
 */
export const PROMISE_EMPTY_UNSAFE = new Promise(function run(resolve) {
  resolve(ok(true))
})
export const BORDER_THEME = 'border-gray-700 border-opacity-50'
export const PATTERN_PAGE_ACCOUNT = /^\/accounts?(\/|$)/
export const PATTERN_PAGE_DEVICES = /^\/devices?(\/|$)/
export const PATTERN_PAGE_USERS = /^\/users?(\/|$)/
export const PATTERN_PAGE_PLATFORM = /^\/platform(\/|$)/
export const IS_DEV = '80' !== location.port && '443' !== location.port
