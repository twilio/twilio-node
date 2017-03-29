'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./messaging/V1');


/* jshint ignore:start */
/**
 * Initialize messaging domain
 *
 * @constructor Twilio.Messaging
 *
 * @property {Twilio.Messaging.V1} v1 - v1 version
 * @property {Twilio.Messaging.V1.ServiceList} services - services resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Messaging(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://messaging.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Messaging.prototype, Domain.prototype);
Messaging.prototype.constructor = Messaging;

Object.defineProperty(Messaging.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  }
});

Object.defineProperty(Messaging.prototype,
  'services', {
  get: function() {
    return this.v1.services;
  }
});

module.exports = Messaging;