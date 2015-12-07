'use strict';

var ListResource = require('../../../base/ListResource');

var PhoneNumberList;
var PhoneNumberInstance;
var PhoneNumberContext;

/**
 * Initialize the PhoneNumberList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns PhoneNumberList
 */
function PhoneNumberList(version) {
  function PhoneNumberListInstance() {
  }

  // Path Solution
  PhoneNumberListInstance._solution = {};
  return PhoneNumberListInstance;
}

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
