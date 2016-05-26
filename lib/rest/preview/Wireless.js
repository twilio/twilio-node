'use strict';

var _ = require('lodash');
var CommandList = require('./wireless/command').CommandList;
var DeviceList = require('./wireless/device').DeviceList;
var RatePlanList = require('./wireless/ratePlan').RatePlanList;
var Version = require('../../base/Version');


/* jshint ignore:start */
/**
 * Initialize the Wireless version of Preview
 *
 * @constructor Twilio.Preview.Wireless
 *
 * @property {Twilio.Preview.Wireless.CommandList} commands - commands resource
 * @property {Twilio.Preview.Wireless.DeviceList} devices - devices resource
 * @property {Twilio.Preview.Wireless.RatePlanList} ratePlans - ratePlans resource
 *
 * @param {Twilio.Preview} domain - The twilio domain
 */
/* jshint ignore:end */
function Wireless(domain) {
  Version.prototype.constructor.call(this, domain, 'wireless');

  // Resources
  this._commands = undefined;
  this._devices = undefined;
  this._ratePlans = undefined;
}

_.extend(Wireless.prototype, Version.prototype);
Wireless.prototype.constructor = Wireless;

Object.defineProperty(Wireless.prototype,
  'commands', {
  get: function() {
    this._commands = this._commands || new CommandList(this);
    return this._commands;
  },
});

Object.defineProperty(Wireless.prototype,
  'devices', {
  get: function() {
    this._devices = this._devices || new DeviceList(this);
    return this._devices;
  },
});

Object.defineProperty(Wireless.prototype,
  'ratePlans', {
  get: function() {
    this._ratePlans = this._ratePlans || new RatePlanList(this);
    return this._ratePlans;
  },
});

module.exports = Wireless;
