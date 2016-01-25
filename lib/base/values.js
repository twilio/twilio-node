'use strict';
var _ = require('lodash');

var of = function of(obj) {
  return _.omitBy(obj, _.isUndefined);
};

module.exports = {
  of: of
};
