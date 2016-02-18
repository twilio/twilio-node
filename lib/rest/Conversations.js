'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./conversations/V1');


/* jshint ignore:start */
/**
 * Initialize conversations domain
 *
 * @constructor Twilio.Conversations
 *
 * @property {Twilio.Conversations.V1} v1 - v1 version
 * @property {Twilio.Conversations.V1.ConversationList} conversations -
 *          conversations resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Conversations(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://conversations.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Conversations.prototype, Domain.prototype);
Conversations.prototype.constructor = Conversations;

Object.defineProperty(Conversations.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Conversations.prototype,
  'conversations', {
  get: function() {
    return this.v1.conversations;
  },
});

module.exports = Conversations;
