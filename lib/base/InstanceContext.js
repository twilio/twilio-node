'use strict';

/**
 * Base context object
 #
 * @constructor
 #
 * @param {Version} version - A twilio version instance
 */
function InstanceContext(version) {
  this._version = version;
}

module.exports = InstanceContext;
