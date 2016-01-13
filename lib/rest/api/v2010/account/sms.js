'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');

var SmsList;
var SmsInstance;
var SmsContext;

/**
 * Initialize the SmsContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {SmsContext}
 */
function SmsInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(SmsInstance.prototype, InstanceResource.prototype);
SmsInstance.prototype.constructor = SmsInstance;

module.exports = {
  SmsList: SmsList,
  SmsInstance: SmsInstance,
  SmsContext: SmsContext
};
