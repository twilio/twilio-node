'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var ServiceList = require('./conversations/service').ServiceList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the Conversations version of Preview
 *
 * @constructor Twilio.Preview.Conversations
 *
 * @property {Twilio.Preview.Conversations.ServiceList} services -
 *          services resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Conversations(domain) {
  Version.prototype.constructor.call(this, domain, 'Conversations');

  // Resources
  this._services = undefined;
}

_.extend(Conversations.prototype, Version.prototype);
Conversations.prototype.constructor = Conversations;

Object.defineProperty(Conversations.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

module.exports = Conversations;
