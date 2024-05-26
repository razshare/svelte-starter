/**
 * @template T
 * @typedef {[T,undefined|Error]} Result
 */

export const result = {
  /**
   * @param {string|Error} error
   * @returns {Result<undefined>}
   */
  failure(error) {
    if (error instanceof Error) {
      // @ts-ignore
      return [undefined, error]
    }
    // @ts-ignore
    return [undefined, new Error(`${error}`)]
  },
  /**
   * @template T
   * @param {T} value
   * @returns {Result<T>}
   */
  success(value) {
    return [value, undefined]
  },
}
