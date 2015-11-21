'use strict';

var _ = require('lodash');
var PhoneNumberList = require(
    'lib/rest/lookups/v1/phone_number').PhoneNumberList;
var Version = require('lib/base/Version');

/**
 * Initialize the V1 version of Lookups
 *
 * @constructor
 *
 * @param {Domain} domain - The twilio domain
 *
 * @returns V1 version of Lookups
 */
function V1(domain) {
  Version.constructor.call(this, domain, 'v1');

  // Resources
  this._phoneNumbers = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'phoneNumbers', {
  get: function() {
    this._phoneNumbers = this._phoneNumbers || new PhoneNumberList();
    return this._phoneNumbers;
  },
});

module.exports = V1;
