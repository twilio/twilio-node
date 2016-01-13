'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./lookups/V1');


/**
 * Initialize lookups domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns lookups domain
 */
function Lookups(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://lookups.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Lookups.prototype, Domain.prototype);
Lookups.prototype.constructor = Lookups;

Object.defineProperty(Lookups.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Lookups.prototype,
  'phoneNumbers', {
  get: function() {
    return this.v1.phoneNumbers;
  },
});

module.exports = Lookups;
