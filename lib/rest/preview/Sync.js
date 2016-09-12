'use strict';

var _ = require('lodash');
var ServiceList = require('./sync/service').ServiceList;
var Version = require('../../base/Version');


/* jshint ignore:start */
/**
 * Initialize the Sync version of Preview
 *
 * @constructor Twilio.Preview.Sync
 *
 * @property {Twilio.Preview.Sync.ServiceList} services - services resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Sync(domain) {
  Version.prototype.constructor.call(this, domain, 'Sync');

  // Resources
  this._services = undefined;
}

_.extend(Sync.prototype, Version.prototype);
Sync.prototype.constructor = Sync;

Object.defineProperty(Sync.prototype,
  'services', {
  get: function() {
    this._services = this._services || new ServiceList(this);
    return this._services;
  },
});

module.exports = Sync;
