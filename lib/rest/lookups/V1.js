'use strict';

var _ = require('lodash');
var PhoneNumberList = require('./v1/phoneNumber').PhoneNumberList;
var Version = require('../../base/Version');


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

Object.defineProperty(V1.prototype,
  'phoneNumbers', {
  get: function() {
    this._phoneNumbers = this._phoneNumbers || new PhoneNumberList();
    return this._phoneNumbers;
  },
});

module.exports = V1;
