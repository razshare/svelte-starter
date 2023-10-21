/**
 * @param {string|Error|unknown} value
 * @returns {Unsafe<any>}
 */
export function error(value) {
  if (value instanceof Error) {
    return [false, value]
  }
  return [false, new Error(`${value}`)]
}
