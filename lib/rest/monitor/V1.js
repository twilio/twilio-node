'use strict';

var AlertList = require("lib/rest/monitor/v1/alert.js").AlertList;
var EventList = require("lib/rest/monitor/v1/event.js").EventList;
var Version = require("lib/base/Version.js");


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
    self._alerts = None
    self._events = None
}
_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'alerts', {
    get: function() {
        this._alerts = this._alerts || new AlertList();
        return this._alerts;
    }
});

Object.defineProperty(V1.prototype, 'events', {
    get: function() {
        this._events = this._events || new EventList();
        return this._events;
    }
});

module.exports = V1;