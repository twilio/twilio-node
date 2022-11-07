"use strict";

var dayjs = require("dayjs");
var utc = require("dayjs/plugin/utc");

dayjs.extend(utc);

module.exports = {};

/**
 * @namespace serialize
 */

/**
 * @function iso8601Date
 * @memberOf serialize
 * @description turns a Date object into a string if parameter is a Date
 * otherwise returns the parameter
 *
 * @param  {Date} d date object to format
 * @return {string|object} date formatted in YYYY-MM-DD form
 */
module.exports.iso8601Date = function (d) {
  if (!d || typeof d === "string" || !(d instanceof Date)) {
    return d;
  } else {
    return dayjs.utc(d).format("YYYY-MM-DD");
  }
};

/**
 * @function iso8601DateTime
 * @memberOf serialize
 * @description turns a Date object into a string if parameter is a Date
 * otherwise returns the parameter
 *
 * @param  {Date} d date object to format
 * @return {string|object} date formatted in YYYY-MM-DD[T]HH:mm:ss[Z] form
 */
module.exports.iso8601DateTime = function (d) {
  if (!d || typeof d === "string" || !(d instanceof Date)) {
    return d;
  } else {
    return dayjs.utc(d).format("YYYY-MM-DD[T]HH:mm:ss[Z]");
  }
};

/**
 * @function prefixedCollapsibleMap
 * @memberOf serialize
 * @description turns a map of params int oa flattened map separated by dots
 * if the parameter is an object, otherwise returns an empty map
 *
 * @param {object} m map to transform
 * @param {string|undefined} prefix to append to each flattened value
 * @return {object} flattened map
 */
module.exports.prefixedCollapsibleMap = function (m, prefix) {
  if (
    !m ||
    typeof m !== "object" ||
    Object.prototype.toString.call(m) !== "[object Object]"
  ) {
    return {};
  }

  function flatten(m, result, previous) {
    result = result || {};
    previous = previous || [];

    Object.keys(m).forEach((key) => {
      const unionKeys = [...previous];
      if (!unionKeys.includes(key)) {
        unionKeys.push(key);
      }
      if (
        typeof m[key] === "object" &&
        Object.prototype.toString.call(m[key]) === "[object Object]"
      ) {
        flatten(m[key], result, unionKeys);
      } else {
        result[unionKeys.join(".")] = m[key];
      }
    });

    return result;
  }

  var flattened = flatten(m);
  var result = flattened;
  if (prefix) {
    result = {};
    Object.keys(flattened).forEach((key) => {
      result[prefix + "." + key] = flattened[key];
    });
  }

  return result;
};

/**
 * @function object
 * @memberOf serialize
 * @description turns an object into a JSON string if the parameter
 * is an object, otherwise returns the passed in object
 *
 * @param {object|array} o json object or array
 * @returns {string|object} stringified object
 */
module.exports.object = function (o) {
  if (typeof o === "object") {
    return JSON.stringify(o);
  }

  return o;
};

/**
 * @function bool
 * @memberOf serialize
 * @description coerces a boolean literal into a string
 *
 * @param {boolean|string} input boolean or string to be coerced
 * @returns {string} a string "true" or "false"
 */
module.exports.bool = function (input) {
  if (typeof input === "string") {
    return input;
  }
  if (
    typeof input === "boolean" ||
    (typeof input === "object" &&
      Object.prototype.toString.call(input) === "[object Boolean]")
  ) {
    return input.toString();
  }

  return input;
};

/**
 * @function map
 * @memberOf serialize
 * @description maps transform over each element in input if input is an array
 *
 * @param {array} input array to map transform over, if not an array then it is
 * returned as is.
 * @returns {array} new array with transform applied to each element.
 */
module.exports.map = function (input, transform) {
  if (
    typeof input === "object" &&
    Object.prototype.toString.call(input) === "[object Array]"
  ) {
    return input.map((element) => transform(element));
  }
  return input;
};
