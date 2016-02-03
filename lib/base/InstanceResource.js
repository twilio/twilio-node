'use strict';

/**
 * @constructor
 * 
 * @description Base instance object
 * 
 * @param {Version} version - A twilio version instance
 */
function InstanceResource(version) {
  this._version = version;
}

module.exports = InstanceResource;
