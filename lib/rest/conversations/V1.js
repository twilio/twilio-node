'use strict';

var _ = require('lodash');
var ConversationList = require('./v1/conversation').ConversationList;
var Version = require('../../base/Version');


/**
 * Initialize the V1 version of Conversations
 *
 * @constructor
 *
 * @property {ConversationList} conversations - conversations resource
 *
 * @param {Conversations} domain - The twilio domain
 */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._conversations = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'conversations', {
  get: function() {
    this._conversations = this._conversations || new ConversationList(this);
    return this._conversations;
  },
});

module.exports = V1;
