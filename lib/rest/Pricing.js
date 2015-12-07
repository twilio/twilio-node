'use strict';

var _ = require('lodash');
var Domain = require('../base/domain').Domain;
var V1 = require('./pricing/V1').V1;


/**
 * Initialize pricing domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns pricing domain
 */
function Pricing(twilio) {
  Domain.constructor.call(twilio, 'https://pricing.twilio.com');

  // Versions
  this._v1 = undefined;
}

Object.defineProperty(Pricing.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1();
    return this._v1;
  },
});

Object.defineProperty(Pricing.prototype,
  'phoneNumbers', {
  get: function() {
    return this.v1.phoneNumbers;
  },
});

Object.defineProperty(Pricing.prototype,
  'voice', {
  get: function() {
    return this.v1.voice;
  },
});

module.exports = Pricing;
