'use strict';
var _ = require('lodash');

function Unset() {}

var unset = new Unset();

var of = function of(obj) {
  return _.reject(obj, function(key, value) {
    return value === unset;
  });
};

module.exports = {
  unset: unset,
  of: of,
};
