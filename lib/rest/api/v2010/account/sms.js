'use strict';

var ListResource = require('../../../../base/ListResource');
var ShortCodeList = require('./sms/shortCode');
var SmsMessageList = require('./sms/smsMessage');

var SmsList;
var SmsInstance;
var SmsContext;

/**
 * Initialize the SmsList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsList
 */
function SmsList(version, accountSid) {
  function SmsListInstance() {
  }

  // Path Solution
  SmsListInstance._solution = {
    accountSid: accountSid,
  };

  // Components
  SmsListInstance._messages = undefined;
  SmsListInstance._shortCodes = undefined;

  Object.defineProperty(SmsListInstance,
    'messages', {
    get: function messages() {
      if (!this._messages) {
        this._messages = new SmsMessageList(
          this._version,
          this._solution.accountSid
        );
      return this._messages;
    },
  });

  Object.defineProperty(SmsListInstance,
    'shortCodes', {
    get: function shortCodes() {
      if (!this._shortCodes) {
        this._shortCodes = new ShortCodeList(
          this._version,
          this._solution.accountSid
        );
      return this._shortCodes;
    },
  });

  return SmsListInstance;
}

module.exports = {
  SmsList: SmsList,
  SmsInstance: SmsInstance,
  SmsContext: SmsContext
};
