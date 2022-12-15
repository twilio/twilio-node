"use strict";

/**
 * @namespace values
 */

/**
 * @function of
 * @memberOf values
 * @description removes all undefined values of an object
 *
 * @param  {object} obj object to filter
 * @return {object} object with no undefined values
 */
export function of(obj: Object): Object {
  return Object.fromEntries(
    Object.entries(obj).filter((entry) => entry[1] !== undefined)
  );
}
