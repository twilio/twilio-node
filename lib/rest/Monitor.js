'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./monitor/V1');


/**
 * Initialize monitor domain
 *
 * @constructor Twilio.Monitor
 *
 * @property {Twilio.Monitor.V1} v1 - v1 version
 * @property {AlertList} alerts - alerts resource
 * @property {EventList} events - events resource
 *
 * @param {Twilio} twilio - The twilio client
 */
function Monitor(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://monitor.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Monitor.prototype, Domain.prototype);
Monitor.prototype.constructor = Monitor;

Object.defineProperty(Monitor.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Monitor.prototype,
  'alerts', {
  get: function() {
    return this.v1.alerts;
  },
});

Object.defineProperty(Monitor.prototype,
  'events', {
  get: function() {
    return this.v1.events;
  },
});

module.exports = Monitor;
