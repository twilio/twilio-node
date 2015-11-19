'use strict';

var Domain = require("lib/base/domain");
var V1 = require("lib/rest/monitor/V1.js");


function Monitor(twilio) {
    Domain.constructor.call(twilio, 'https://monitor.twilio.com');
    
    // Versions
    this._v1 = null
}
_.extend(Monitor.prototype, Domain.prototype);
Monitor.prototype.constructor = Monitor;

Object.defineProperty(Monitor.prototype, 'v1', {
    get: function() {
        this._v1 = this._v1 || new V1();
        return this._v1;
    }
});

Object.defineProperty(Monitor.prototype, 'alerts', {
    get: function() {
        return this.v1.alerts
    }
});

Object.defineProperty(Monitor.prototype, 'events', {
    get: function() {
        return this.v1.events
    }
});

module.exports = Monitor;