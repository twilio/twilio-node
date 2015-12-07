'use strict';

var ListResource = require('../../../../base/ListResource');

var NumberList;
var NumberInstance;
var NumberContext;

/**
 * Initialize the NumberList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns NumberList
 */
function NumberList(version) {
  function NumberListInstance() {
  }

  // Path Solution
  NumberListInstance._solution = {};
  return NumberListInstance;
}

module.exports = {
  NumberList: NumberList,
  NumberInstance: NumberInstance,
  NumberContext: NumberContext
};
