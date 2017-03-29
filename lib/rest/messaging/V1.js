'use strict';

var _ = require('lodash');
var ServiceList = require('./v1/service').ServiceList;
var Version = require('../../base/Version');


/* jshint ignore:start */
/**
 * Initialize the V1 version of Messaging
 *
 * @constructor Twilio.Messaging.V1
 *
 * @property {Twilio.Messaging.V1.ServiceList} services - services resource
 *
 * @param {Twilio.Messaging} domain - The twilio domain
 */
/* jshint ignore:end */
function V1(domain) {
  Version.prototype.constructor.call(this, domain, 'v1');

  // Resources
  this._services = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  }
});

module.exports = V1;