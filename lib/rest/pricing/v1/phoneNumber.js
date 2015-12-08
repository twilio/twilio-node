'use strict';

var CountryList = require('./phoneNumber/country');
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

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {};

  // Components
  PhoneNumberListInstance._countries = undefined;

  Object.defineProperty(PhoneNumberListInstance,
    'countries', {
    get: function countries() {
      if (!this._countries) {
        this._countries = new CountryList(
          this._version
        );
      return this._countries;
    },
  });

  return PhoneNumberListInstance;
}

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};
