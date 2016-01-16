'use strict';
var _ = require('lodash');

var of = function of(obj) {
  return _.omit(obj, _.isUndefined)
};

module.exports = {
  of: of
};
