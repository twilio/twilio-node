'use strict';

var _ = require('lodash');
var Page = require('../../../../base/Page');
var RecordList = require('./usage/record').RecordList;
var TriggerList = require('./usage/trigger').TriggerList;

var UsagePage;
var UsageList;
var UsageInstance;
var UsageContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsagePage
 * @augments Page
 * @description Initialize the UsagePage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns UsagePage
 */
/* jshint ignore:end */
function UsagePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(UsagePage.prototype, Page.prototype);
UsagePage.prototype.constructor = UsagePage;

/* jshint ignore:start */
/**
 * Build an instance of UsageInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.UsagePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns UsageInstance
 */
/* jshint ignore:end */
UsagePage.prototype.getInstance = function getInstance(payload) {
  return new UsageInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageList
 * @description Initialize the UsageList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
function UsageList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function usage
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.UsageContext}
   */
  /* jshint ignore:end */
  function UsageListInstance(sid) {
    return UsageListInstance.get(sid);
  }

  UsageListInstance._version = version;
  // Path Solution
  UsageListInstance._solution = {
    accountSid: accountSid
  };

  // Components
  UsageListInstance._records = undefined;
  UsageListInstance._triggers = undefined;

  Object.defineProperty(UsageListInstance,
    'records', {
    get: function records() {
      if (!this._records) {
        this._records = new RecordList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._records;
    },
  });

  Object.defineProperty(UsageListInstance,
    'triggers', {
    get: function triggers() {
      if (!this._triggers) {
        this._triggers = new TriggerList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._triggers;
    },
  });

  return UsageListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageInstance
 * @description Initialize the UsageContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function UsageInstance(version, payload, accountSid) {
  this._version = version;

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

module.exports = {
  UsagePage: UsagePage,
  UsageList: UsageList,
  UsageInstance: UsageInstance,
  UsageContext: UsageContext
};
