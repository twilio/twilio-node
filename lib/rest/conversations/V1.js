'use strict';

var ConversationList = require("lib/rest/conversations/v1/conversation.js").ConversationList;
var Version = require("lib/base/Version.js");


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
    self._conversations = None
}
_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'conversations', {
    get: function() {
        this._conversations = this._conversations || new ConversationList();
        return this._conversations;
    }
});

module.exports = V1;