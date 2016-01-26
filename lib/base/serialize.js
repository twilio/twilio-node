'use strict';

var _ = require('lodash');
var moment = require('moment');

function iso8601Date(d) {
  if (_.isUndefined(d) || _.isString(d) || !((d instanceof moment))) {
    return d;
  } else {
    return d.format('YYYY-MM-DD');
  }
}

function iso8601DateTime(d) {
  if (_.isUndefined(d) || _.isString(d) || !(d instanceof moment)) {
    return d;
  } else {
    return d.format('YYYY-MM-DD[T]HH:mm:ss[Z]');
  }
}

module.exports = {
  iso8601Date: iso8601Date,
  iso8601DateTime: iso8601DateTime
};