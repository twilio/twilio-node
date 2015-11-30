'use strict';

var _ = require('lodash');
var Domain = require('../base/domain').Domain;
var V1 = require('./monitor/V1').V1;

/**
 * Initialize monitor domain
 *
 * @constructor
 *
 * @params {Twilio} twilio - The twilio client
 *
 * @returns monitor domain
 */
function Monitor(twilio) {
  Domain.constructor.call(twilio, 'https://monitor.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Monitor.prototype, Domain.prototype);
Monitor.prototype.constructor = Monitor;

Object.defineProperty(Monitor.prototype, 'v1', {
  get: function() {
    this._v1 = this._v1 || new V1();
    return this._v1;
  },
});

Object.defineProperty(Monitor.prototype, 'alerts', {
  get: function() {
    return this.v1.alerts;
  },
});

Object.defineProperty(Monitor.prototype, 'events', {
  get: function() {
    return this.v1.events;
  },
});

module.exports = Monitor;
