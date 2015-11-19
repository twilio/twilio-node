'use strict';

var Domain = require("lib/base/domain");
var V1 = require("lib/rest/conversations/V1.js");


function Conversations(twilio) {
    Domain.constructor.call(twilio, 'https://conversations.twilio.com');
    
    // Versions
    this._v1 = null
}
_.extend(Conversations.prototype, Domain.prototype);
Conversations.prototype.constructor = Conversations;

Object.defineProperty(Conversations.prototype, 'v1', {
    get: function() {
        this._v1 = this._v1 || new V1();
        return this._v1;
    }
});

Object.defineProperty(Conversations.prototype, 'conversations', {
    get: function() {
        return this.v1.conversations
    }
});

module.exports = Conversations;