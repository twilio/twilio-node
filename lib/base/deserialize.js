'use strict';

var _ = require('lodash');
var moment = require('moment');

function parseDate(s, format) {
  var m = moment.utc(s, format);
  if (m.isValid()) {
    return m.toDate();
  }

  return s;
}

function iso8601Date(s) {
  return parseDate(s, 'YYYY-MM-DD');
}

function iso8601DateTime(s) {
  return parseDate(s, 'YYYY-MM-DD[T]HH:mm:ss[Z]');
}

function rfc2822DateTime(s) {
  return parseDate(s, 'ddd, DD MMM YYYY HH:mm:ss [+0000]');
}

function parseNumber(n, parser) {
  var parsed = parser(n);
  if (isNaN(parsed)) {
    return n;
  }

  return parsed;
}

function decimal(d) {
  return parseNumber(d, parseFloat);
}

function integer(i) {
 return parseNumber(i, _.parseInt);
}

module.exports = {
  iso8601Date: iso8601Date,
  iso8601DateTime: iso8601DateTime,
  rfc2822DateTime: rfc2822DateTime,
  decimal: decimal,
  integer: integer
};