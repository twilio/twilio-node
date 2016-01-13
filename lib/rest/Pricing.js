'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./pricing/V1');


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
  Domain.prototype.constructor.call(this, twilio, 'https://pricing.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Pricing.prototype, Domain.prototype);
Pricing.prototype.constructor = Pricing;

Object.defineProperty(Pricing.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
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
