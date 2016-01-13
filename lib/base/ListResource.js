'use strict';

/**
 * Base list object
 #
 * @constructor
 #
 * @param {Version} version - A twilio version instance
 */
function ListResource(version) {
  this._version = version;
}

module.exports = ListResource;
