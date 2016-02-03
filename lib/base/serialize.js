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
 * @return {string} date formatted in YYYY-MM-DD form
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
 * @return {string} date formatted in YYYY-MM-DD[T]HH:mm:ss[Z] form
 */
function iso8601DateTime(d) {
  if (_.isUndefined(d) || _.isString(d) || !(d instanceof Date)) {
    return d;
  } else {
    return moment.utc(d).format('YYYY-MM-DD[T]HH:mm:ss[Z]');
  }
}

module.exports = {
  iso8601Date: iso8601Date,
  iso8601DateTime: iso8601DateTime
};