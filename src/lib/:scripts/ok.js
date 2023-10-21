/**
 * @template T
 * @param {T} value
 * @returns {Unsafe<T>}
 */
export function ok(value) {
  return [value, false]
}
