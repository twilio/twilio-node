'use strict';

var _ = require('lodash');
var moment = require('moment');

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
function iso8601Date(d) {
  if (_.isUndefined(d) || _.isString(d) || !((d instanceof Date))) {
    return d;
  } else {
    return moment.utc(d).format('YYYY-MM-DD');
  }
}

/**
 * @function iso8601DateTime
 * @memberOf serialize
 * @description turns a Date object into a string if parameter is a Date
 * otherwise returns the parameter
 *
 * @param  {Date} d date object to format
 * @return {string|object} date formatted in YYYY-MM-DD[T]HH:mm:ss[Z] form
 */
function iso8601DateTime(d) {
  if (_.isUndefined(d) || _.isString(d) || !(d instanceof Date)) {
    return d;
  } else {
    return moment.utc(d).format('YYYY-MM-DD[T]HH:mm:ss[Z]');
  }
}

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
function prefixedCollapsibleMap(m, prefix) {
  if (_.isUndefined(m) || !_.isPlainObject(m)) {
    return {};
  }

  function flatten(m, result, previous) {
    result = result || {};
    previous = previous || [];

    _.each(_.keys(m), function(key) {
      if (_.isPlainObject(m[key])) {
        flatten(m[key], result, _.union(previous, [key]));
      } else {
        result[_.join(_.union(previous, [key]), '.')] = m[key];
      }
    });

    return result;
  }

  var flattened = flatten(m);
  var result = flattened;
  if (prefix) {
    result = {};
    _.each(_.keys(flattened), function(key) {
      result[prefix + '.' + key] = flattened[key];
    });
  }

  return result;
}

/**
 * @function object
 * @memberOf serialize
 * @description turns an object into a JSON string if the parameter
 * is an object, otherwise returns the passed in object
 *
 * @param {object} o json object
 * @returns {string|object} stringified object
 */
function object(o) {
  if (_.isObject(o)) {
    return JSON.stringify(o);
  }

  return o;
}

module.exports = {
  iso8601Date: iso8601Date,
  iso8601DateTime: iso8601DateTime,
  prefixedCollapsibleMap: prefixedCollapsibleMap,
  object: object,
};
