"use strict";
/**
 * @namespace values
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = void 0;
/**
 * @function of
 * @memberOf values
 * @description removes all undefined values of an object
 *
 * @param  {object} obj object to filter
 * @return {object} object with no undefined values
 */
function of(obj) {
    return Object.fromEntries(Object.entries(obj).filter((entry) => entry[1] !== undefined));
}
exports.of = of;
