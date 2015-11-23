'use strict';
var _ = require('lodash');

var unset = new Object();

var of = function of(obj) {
  return _.reject(obj, function(key, value) {
    return value === unset;
  });
};

module.exports = {
  unset: unset,
  of: of
};
