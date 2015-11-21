'use strict';

var _ = require('lodash');
var Domain = require('lib/base/domain').Domain;
var V1 = require('lib/rest/trunking/V1').V1;

/**
 * Initialize trunking domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns trunking domain
 */
function Trunking(twilio) {
  Domain.constructor.call(twilio, 'https://trunking.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Trunking.prototype, Domain.prototype);
Trunking.prototype.constructor = Trunking;

Object.defineProperty(Trunking.prototype, 'v1', {
  get: function() {
    this._v1 = this._v1 || new V1();
    return this._v1;
  },
});

Object.defineProperty(Trunking.prototype, 'trunks', {
  get: function() {
    return this.v1.trunks;
  },
});

module.exports = Trunking;
