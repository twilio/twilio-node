'use strict';

var Instance = require('../../../../base');

function SipInstance() {
}

/**
 * Initialize the SipContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {SipContext}
 */
SipInstance.prototype.SipInstance = function SipInstance(version, payload,
                                                          accountSid) {
  Instance.constructor.call(this, version);

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
  };
};

