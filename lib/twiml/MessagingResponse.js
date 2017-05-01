'use strict';

var builder = require('xmlbuilder');

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sms/your_response
 *
 * @constructor
 */
function MessagingResponse() {
  this.response = builder.create('Response').dec('1.0', 'UTF-8');
}

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sms/message
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.to] number to send message to
 * @param {string} [attributes.from] number to send from
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.action] action url
 * @param {string} [attributes.statusCallback] status callback url
 * @param {string} body body of message
 *
 * @returns Message
 */
MessagingResponse.prototype.message = function(attributes, body) {
  return new Message(this.response.ele('Message', attributes, body));
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/redirect
 *
 * @param {object} attributes - ...
 * @param {string} [attributes.method] (GET, POST)
 * @param {string} [attributes.url] redirect url
 */
MessagingResponse.prototype.redirect = function(attributes) {
  this.response.ele('Redirect', attributes);
};

/**
 * Convert to TwiML
 *
 * @returns String
 */
MessagingResponse.prototype.toString = function() {
  return this.response.end();
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sms/message
 *
 * @constructor
 */
function Message(message) {
  this.message = message;
}

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sms/message#nouns.
 *
 * @param body body of the message
 */
Message.prototype.body = function(body) {
  this.message.ele('Body', {}, body);
};

/**
 * TwiML wrapper for https://www.twilio.com/docs/api/twiml/sms/message#nouns.
 *
 * @param body media url
 */
Message.prototype.media = function(body) {
  this.message.ele('Media', {}, body);
};

module.exports = MessagingResponse;