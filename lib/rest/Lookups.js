'use strict';

var Domain = require('../base/domain').Domain;
var V1 = require('./lookups/V1').V1;


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
  Domain.constructor.call(twilio, 'https://lookups.twilio.com');

  // Versions
  this._v1 = undefined;
}

Object.defineProperty(Lookups.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1();
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
