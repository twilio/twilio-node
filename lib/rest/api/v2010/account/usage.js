'use strict';

var Instance = require('../../../../base');

function UsageInstance() {
}

/**
 * Initialize the UsageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {UsageContext}
 */
UsageInstance.prototype.UsageInstance = function UsageInstance(version, payload,
    accountSid) {
  Instance.constructor.call(this, version);

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
  };
};

