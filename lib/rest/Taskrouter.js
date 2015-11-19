'use strict';

var Domain = require("lib/base/domain");
var V1 = require("lib/rest/taskrouter/V1.js");


function Taskrouter(twilio) {
    Domain.constructor.call(twilio, 'https://taskrouter.twilio.com');
    
    // Versions
    this._v1 = null
}
_.extend(Taskrouter.prototype, Domain.prototype);
Taskrouter.prototype.constructor = Taskrouter;

Object.defineProperty(Taskrouter.prototype, 'v1', {
    get: function() {
        this._v1 = this._v1 || new V1();
        return this._v1;
    }
});

Object.defineProperty(Taskrouter.prototype, 'workspaces', {
    get: function() {
        return this.v1.workspaces
    }
});

module.exports = Taskrouter;