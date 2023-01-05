/**
 * @namespace values
 */

/**
 * Removes all undefined values of an object
 *
 * @param obj - object to filter
 * @returns object with no undefined values
 */
export function of(obj: Object): Object {
  return Object.fromEntries(
    Object.entries(obj).filter((entry) => entry[1] !== undefined)
  );
}
