'use strict';

var ConversationList = require('./v1/conversation').ConversationList;
var Version = require('../../base/Version');


/**
 * Initialize the V1 version of Conversations
 *
 * @constructor
 *
 * @param {Domain} domain - The twilio domain
 *
 * @returns V1 version of Conversations
 */
function V1(domain) {
  Version.constructor.call(this, domain, 'v1');

  // Resources
  this._conversations = undefined;
}

Object.defineProperty(V1.prototype,
  'conversations', {
  get: function() {
    this._conversations = this._conversations || new ConversationList();
    return this._conversations;
  },
});

module.exports = V1;
