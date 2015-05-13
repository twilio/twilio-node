/**
 @module ConversationsClient

 This module presents a higher-level API for interacting with resources
 in the Twilio Conversations API.  Tries to map very closely to the resource structure
 of the actual Twilio API, while still providing a nice JavaScript interface.
 */

//Dependencies
var _ = require('underscore');
var Client = require('./Client');
var util = require('util');

/**
 The Twilio Conversations API client
 @constructor
 @param {string} sid - The application SID, as seen in the Twilio portal
 @param {string} tkn - The auth token, as seen in the Twilio portal
 @param {object} options (optional) - optional config for the REST client
 - @member {string} host - host for the Twilio API (default: conversations.twilio.com)
 - @member {string} apiVersion - the Twilio REST API version to use for requests (default: v1)
 */
function ConversationsClient(sid, tkn, options) {
    //Required client config
    options = options || {};
    ConversationsClient.super_.call(this, sid, tkn, options.host || 'conversations.twilio.com', options.apiVersion || 'v1', options.timeout);

    var conversationResource = require('./resources/conversations/Conversations')(this);
    this.conversations = conversationResource;

    //mix the account object in with the client object - assume master account for resources
    _.extend(this, conversationResource);
}

util.inherits(ConversationsClient, Client);

module.exports = ConversationsClient;
