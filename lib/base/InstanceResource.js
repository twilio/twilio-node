'use strict';

/**
 * Base instance object
 #
 * @constructor
 #
 * @param {Version} version - A twilio version instance
 */
function InstanceResource(version) {
  this._version = version;
}

module.exports = InstanceResource;
