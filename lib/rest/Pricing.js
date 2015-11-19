'use strict';

var Domain = require("lib/base/domain");
var V1 = require("lib/rest/pricing/V1.js");


function Pricing(twilio) {
    Domain.constructor.call(twilio, 'https://pricing.twilio.com');
    
    // Versions
    this._v1 = null
}
_.extend(Pricing.prototype, Domain.prototype);
Pricing.prototype.constructor = Pricing;

Object.defineProperty(Pricing.prototype, 'v1', {
    get: function() {
        this._v1 = this._v1 || new V1();
        return this._v1;
    }
});

Object.defineProperty(Pricing.prototype, 'phoneNumbers', {
    get: function() {
        return this.v1.phoneNumbers
    }
});

Object.defineProperty(Pricing.prototype, 'voice', {
    get: function() {
        return this.v1.voice
    }
});

module.exports = Pricing;