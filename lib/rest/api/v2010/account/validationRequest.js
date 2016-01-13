'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');

var ValidationRequestList;
var ValidationRequestInstance;
var ValidationRequestContext;

/**
 * Initialize the ValidationRequestContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {ValidationRequestContext}
 */
function ValidationRequestInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    validationCode: payload.validation_code, // jshint ignore:line,
    callSid: payload.call_sid, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(ValidationRequestInstance.prototype, InstanceResource.prototype);
ValidationRequestInstance.prototype.constructor = ValidationRequestInstance;

Object.defineProperty(ValidationRequestInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'validationCode', {
  get: function() {
    return this._properties.validationCode;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype,
  'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

module.exports = {
  ValidationRequestList: ValidationRequestList,
  ValidationRequestInstance: ValidationRequestInstance,
  ValidationRequestContext: ValidationRequestContext
};
