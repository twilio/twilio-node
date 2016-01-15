'use strict';
var _ = require('lodash');

var unset = {};

var of = function of(obj) {
  return _.omit(obj, function(value, key) {
    return value === unset;
  })
};

module.exports = {
  of: of,
  unset: unset
};
