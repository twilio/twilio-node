'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./chat/V1');


/* jshint ignore:start */
/**
 * Initialize chat domain
 *
 * @constructor Twilio.Chat
 *
 * @property {Twilio.Chat.V1} v1 - v1 version
 * @property {Twilio.Chat.V1.CredentialList} credentials - credentials resource
 * @property {Twilio.Chat.V1.ServiceList} services - services resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Chat(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://chat.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Chat.prototype, Domain.prototype);
Chat.prototype.constructor = Chat;

Object.defineProperty(Chat.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Chat.prototype,
  'credentials', {
  get: function() {
    return this.v1.credentials;
  },
});

Object.defineProperty(Chat.prototype,
  'services', {
  get: function() {
    return this.v1.services;
  },
});

module.exports = Chat;
