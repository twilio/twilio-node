'use strict';

/**
 * Base instance object
 #
 * @constructor
 #
 * @param {Version} version - A twilio version instance
 */
function Instance(version) {
  this._version = version;
}

module.exports = Instance;
