'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Domain = require('../base/Domain');  /* jshint ignore:line */
var Marketplace = require('./preview/Marketplace');  /* jshint ignore:line */
var Sync = require('./preview/Sync');  /* jshint ignore:line */
var Wireless = require('./preview/Wireless');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize preview domain
 *
 * @constructor Twilio.Preview
 *
 * @property {Twilio.Preview.Sync} sync - sync version
 * @property {Twilio.Preview.Wireless} wireless - wireless version
 * @property {Twilio.Preview.Marketplace} marketplace - marketplace version
 * @property {Twilio.Preview.Sync.ServiceList} services - services resource
 * @property {Twilio.Preview.Wireless.CommandList} commands - commands resource
 * @property {Twilio.Preview.Wireless.RatePlanList} ratePlans - ratePlans resource
 * @property {Twilio.Preview.Wireless.SimList} sims - sims resource
 * @property {Twilio.Preview.Marketplace.AvailableAddOnList} availableAddOns -
 *          availableAddOns resource
 * @property {Twilio.Preview.Marketplace.InstalledAddOnList} installedAddOns -
 *          installedAddOns resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Preview(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://preview.twilio.com');

  // Versions
  this._sync = undefined;
  this._wireless = undefined;
  this._marketplace = undefined;
}

_.extend(Preview.prototype, Domain.prototype);
Preview.prototype.constructor = Preview;

Object.defineProperty(Preview.prototype,
  'sync', {
  get: function() {
    this._sync = this._sync || new Sync(this);
    return this._sync;
  }
});

Object.defineProperty(Preview.prototype,
  'wireless', {
  get: function() {
    this._wireless = this._wireless || new Wireless(this);
    return this._wireless;
  }
});

Object.defineProperty(Preview.prototype,
  'marketplace', {
  get: function() {
    this._marketplace = this._marketplace || new Marketplace(this);
    return this._marketplace;
  }
});

Object.defineProperty(Preview.prototype,
  'services', {
  get: function() {
    return this.sync.services;
  }
});

Object.defineProperty(Preview.prototype,
  'commands', {
  get: function() {
    return this.wireless.commands;
  }
});

Object.defineProperty(Preview.prototype,
  'ratePlans', {
  get: function() {
    return this.wireless.ratePlans;
  }
});

Object.defineProperty(Preview.prototype,
  'sims', {
  get: function() {
    return this.wireless.sims;
  }
});

Object.defineProperty(Preview.prototype,
  'availableAddOns', {
  get: function() {
    return this.marketplace.availableAddOns;
  }
});

Object.defineProperty(Preview.prototype,
  'installedAddOns', {
  get: function() {
    return this.marketplace.installedAddOns;
  }
});

module.exports = Preview;
