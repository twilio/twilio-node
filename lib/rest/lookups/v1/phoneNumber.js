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
  function PhoneNumberListInstance(sid) {
    return this.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};
  /**
   * Constructs a PhoneNumberContext
   *
   * :param phoneNumber - The phone_number
   *
   * @returns PhoneNumberContext
   */
  function get(phoneNumber) {
    return new PhoneNumberContext(
      this._version,
      phoneNumber
    );
  }

  return PhoneNumberListInstance;
}

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
