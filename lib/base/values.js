'use strict';
var _ = require('lodash');

var unset = {};

var of = function of(obj) {
  return _.reject(obj, function(key, value) {
    return value === unset;
  });
};

module.exports = {
  of: of,
  unset: unset
};
