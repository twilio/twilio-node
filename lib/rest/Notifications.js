'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./notifications/V1');


/* jshint ignore:start */
/**
 * Initialize notifications domain
 *
 * @constructor Twilio.Notifications
 *
 * @property {Twilio.Notifications.V1} v1 - v1 version
 * @property {Twilio.Notifications.V1.CredentialList} credentials -
 *          credentials resource
 * @property {Twilio.Notifications.V1.ServiceList} services - services resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Notifications(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://notifications.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Notifications.prototype, Domain.prototype);
Notifications.prototype.constructor = Notifications;

Object.defineProperty(Notifications.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Notifications.prototype,
  'credentials', {
  get: function() {
    return this.v1.credentials;
  },
});

Object.defineProperty(Notifications.prototype,
  'services', {
  get: function() {
    return this.v1.services;
  },
});

module.exports = Notifications;
