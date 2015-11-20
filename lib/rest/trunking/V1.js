'use strict';

var TrunkList = require("lib/rest/trunking/v1/trunk.js").TrunkList;
var Version = require("lib/base/Version.js");


/**
 * Initialize the V1 version of Trunking
 * 
 * @constructor
 * 
 * @param {Domain} domain - The twilio domain
 * 
 * @returns V1 version of Trunking
 */
function V1(domain) {
    Version.constructor.call(this, domain, 'v1');
    
    // Resources
    self._trunks = None
}
_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'trunks', {
    get: function() {
        this._trunks = this._trunks || new TrunkList();
        return this._trunks;
    }
});

module.exports = V1;