'use strict';

var _ = require('lodash');
var AlertList = require('./v1/alert').AlertList;
var EventList = require('./v1/event').EventList;
var Version = require('../../base/Version');

/**
 * Initialize the V1 version of Monitor
 *
 * @constructor
 *
 * @param {Domain} domain - The twilio domain
 *
 * @returns V1 version of Monitor
 */
function V1(domain) {
  Version.constructor.call(this, domain, 'v1');

  // Resources
  this._alerts = undefined;
  this._events = undefined;
}

_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'alerts', {
  get: function() {
    this._alerts = this._alerts || new AlertList();
    return this._alerts;
  },
});

Object.defineProperty(V1.prototype, 'events', {
  get: function() {
    this._events = this._events || new EventList();
    return this._events;
  },
});

module.exports = V1;
