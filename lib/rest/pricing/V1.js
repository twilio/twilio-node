'use strict';

var PhoneNumberList = require("lib/rest/pricing/v1/phone_number.js").PhoneNumberList;
var Version = require("lib/base/Version.js");
var VoiceList = require("lib/rest/pricing/v1/voice.js").VoiceList;


/**
 * Initialize the V1 version of Pricing
 * 
 * @constructor
 * 
 * @param {Domain} domain - The twilio domain
 * 
 * @returns V1 version of Pricing
 */
function V1(domain) {
    Version.constructor.call(this, domain, 'v1');
    
    // Resources
    self._phoneNumbers = None
    self._voice = None
}
_.extend(V1.prototype, Version.prototype);
V1.prototype.constructor = V1;

Object.defineProperty(V1.prototype, 'phoneNumbers', {
    get: function() {
        this._phoneNumbers = this._phoneNumbers || new PhoneNumberList();
        return this._phoneNumbers;
    }
});

Object.defineProperty(V1.prototype, 'voice', {
    get: function() {
        this._voice = this._voice || new VoiceList();
        return this._voice;
    }
});

module.exports = V1;