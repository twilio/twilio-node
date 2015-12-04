'use strict';

var Instance = require('../../../../base');

var SipInstance;
var SipContext;

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
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
};

module.exports = {
  SipInstance: SipInstance,
  SipContext: SipContext
};
