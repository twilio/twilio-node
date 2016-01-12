'use strict';

var Domain = require('../base/domain').Domain;
var V1 = require('./conversations/V1').V1;


/**
 * Initialize conversations domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns conversations domain
 */
function Conversations(twilio) {
  Domain.constructor.call(twilio, 'https://conversations.twilio.com');

  // Versions
  this._v1 = undefined;
}

Object.defineProperty(Conversations.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1();
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
