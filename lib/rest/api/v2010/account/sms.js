'use strict';

var Instance = require('../../../../base');

function SmsInstance() {
}

/**
 * Initialize the SmsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {SmsContext}
 */
SmsInstance.prototype.SmsInstance = function SmsInstance(version, payload,
                                                          accountSid) {
  Instance.constructor.call(this, version);

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
  };
};

