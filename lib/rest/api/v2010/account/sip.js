'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');

var SipList;
var SipInstance;
var SipContext;

/**
 * Initialize the SipContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {SipContext}
 */
function SipInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(SipInstance.prototype, InstanceResource.prototype);
SipInstance.prototype.constructor = SipInstance;

module.exports = {
  SipList: SipList,
  SipInstance: SipInstance,
  SipContext: SipContext
};
