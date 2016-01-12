'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');

var UsageList;
var UsageInstance;
var UsageContext;

/**
 * Initialize the UsageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {UsageContext}
 */
function UsageInstance(version, payload, accountSid) {
  InstanceResource.constructor.call(this, version);

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(UsageInstance.prototype, InstanceResource.prototype);
UsageInstance.prototype.constructor = UsageInstance;

module.exports = {
  UsageList: UsageList,
  UsageInstance: UsageInstance,
  UsageContext: UsageContext
};
