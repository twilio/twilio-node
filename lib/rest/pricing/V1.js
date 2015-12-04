'use strict';

var _ = require('lodash');
var PhoneNumberList = require('./v1/phoneNumber').PhoneNumberList;
var Version = require('../../base/Version');
var VoiceList = require('./v1/voice').VoiceList;


/**
 * Initialize the V1 version of Pricing
 *
 * @constructor
 *
 * @param {Domain} domain - The twilio domain
 *
 * @returns V1 version of Pricing
 */
function V1(domain) {
  Version.constructor.call(this, domain, 'v1');

  // Resources
  this._phoneNumbers = undefined;
  this._voice = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'phoneNumbers', {
  get: function() {
    this._phoneNumbers = this._phoneNumbers || new PhoneNumberList();
    return this._phoneNumbers;
  },
});

Object.defineProperty(V1.prototype,
  'voice', {
  get: function() {
    this._voice = this._voice || new VoiceList();
    return this._voice;
  },
});

module.exports = V1;
