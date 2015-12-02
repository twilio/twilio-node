'use strict';

var Instance = require('../../../../base');

function ValidationRequestInstance() {
}

Object.defineProperty(ValidationRequestInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype, 'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype, 'validationCode', {
  get: function() {
    return this._properties.validationCode;
  },
});

Object.defineProperty(ValidationRequestInstance.prototype, 'callSid', {
  get: function() {
    return this._properties.callSid;
  },
});

/**
 * Initialize the ValidationRequestContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {ValidationRequestContext}
 */
ValidationRequestInstance.prototype.ValidationRequestInstance = function
    ValidationRequestInstance(version, payload, accountSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      phoneNumber: payload.phone_number,
      friendlyName: payload.friendly_name,
      validationCode: payload.validation_code,
      callSid: payload.call_sid,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
  };
};

