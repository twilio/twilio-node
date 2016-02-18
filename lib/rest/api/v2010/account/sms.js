'use strict';

var _ = require('lodash');
var Page = require('../../../../base/Page');
var ShortCodeList = require('./sms/shortCode').ShortCodeList;
var SmsMessageList = require('./sms/smsMessage').SmsMessageList;

var SmsPage;
var SmsList;
var SmsInstance;
var SmsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsPage
 * @augments Page
 * @description Initialize the SmsPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns SmsPage
 */
/* jshint ignore:end */
function SmsPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(SmsPage.prototype, Page.prototype);
SmsPage.prototype.constructor = SmsPage;

/* jshint ignore:start */
/**
 * Build an instance of SmsInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SmsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SmsInstance
 */
/* jshint ignore:end */
SmsPage.prototype.getInstance = function getInstance(payload) {
  return new SmsInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsList
 * @description Initialize the SmsList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
function SmsList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function sms
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SmsContext}
   */
  /* jshint ignore:end */
  function SmsListInstance(sid) {
    return SmsListInstance.get(sid);
  }

  SmsListInstance._version = version;
  // Path Solution
  SmsListInstance._solution = {
    accountSid: accountSid
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
      }

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
      }

      return this._shortCodes;
    },
  });

  return SmsListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SmsInstance
 * @description Initialize the SmsContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function SmsInstance(version, payload, accountSid) {
  this._version = version;

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

module.exports = {
  SmsPage: SmsPage,
  SmsList: SmsList,
  SmsInstance: SmsInstance,
  SmsContext: SmsContext
};
