'use strict';

var _ = require('lodash');
var PhoneNumberList = require('./v1/phoneNumber').PhoneNumberList;
var Version = require('../../base/Version');


/**
 * Initialize the V1 version of Lookups
 *
 * @constructor
 *
 * @property {PhoneNumberList} phoneNumbers - phoneNumbers resource
 *
 * @param {Lookups} domain - The twilio domain
 */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._phoneNumbers = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'phoneNumbers', {
  get: function() {
    this._phoneNumbers = this._phoneNumbers || new PhoneNumberList(this);
    return this._phoneNumbers;
  },
});

module.exports = V1;
