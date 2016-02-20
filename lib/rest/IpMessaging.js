'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./ipMessaging/V1');


/* jshint ignore:start */
/**
 * Initialize ip_messaging domain
 *
 * @constructor Twilio.IpMessaging
 *
 * @property {Twilio.IpMessaging.V1} v1 - v1 version
 * @property {Twilio.IpMessaging.V1.CredentialList} credentials -
 *          credentials resource
 * @property {Twilio.IpMessaging.V1.ServiceList} services - services resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function IpMessaging(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://ip-messaging.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(IpMessaging.prototype, Domain.prototype);
IpMessaging.prototype.constructor = IpMessaging;

Object.defineProperty(IpMessaging.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(IpMessaging.prototype,
  'credentials', {
  get: function() {
    return this.v1.credentials;
  },
});

Object.defineProperty(IpMessaging.prototype,
  'services', {
  get: function() {
    return this.v1.services;
  },
});

module.exports = IpMessaging;
