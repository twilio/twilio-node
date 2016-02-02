'use strict';

var _ = require('lodash');
var moment = require('moment');

function iso8601Date(d) {
  if (_.isUndefined(d) || _.isString(d) || !((d instanceof Date))) {
    return d;
  } else {
    return moment.utc(d).format('YYYY-MM-DD');
  }
}

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