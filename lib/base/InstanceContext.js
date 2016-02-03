'use strict';

/**
 * @constructor
 * 
 * @description Base context object
 * 
 * @param {Version} version - A twilio version instance
 */
function InstanceContext(version) {
  this._version = version;
}

module.exports = InstanceContext;
