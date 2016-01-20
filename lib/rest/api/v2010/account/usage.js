'use strict';

var Q = require('q');
var _ = require('lodash');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var Page = require('../../../../base/Page');
var RecordList = require('./usage/record').RecordList;
var TriggerList = require('./usage/trigger').TriggerList;

var UsagePage;
var UsageList;
var UsageInstance;
var UsageContext;

/**
 * Initialize the UsagePage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns UsagePage
 */
function UsagePage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(UsagePage.prototype, Page.prototype);
UsagePage.prototype.constructor = UsagePage;

/**
 * Build an instance of UsageInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns UsageInstance
 */
UsagePage.prototype.getInstance = function getInstance(payload) {
  var version = this._version;
  var solution = this._solution;

  return new UsageInstance(
    version,
    payload,
    solution.accountSid
  );
};


/**
 * Initialize the UsageList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns UsageList
 */
function UsageList(version, accountSid) {
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


/**
 * Initialize the UsageContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {UsageContext}
 */
function UsageInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(UsageInstance.prototype, InstanceResource.prototype);
UsageInstance.prototype.constructor = UsageInstance;

module.exports = {
  UsagePage: UsagePage,
  UsageList: UsageList,
  UsageInstance: UsageInstance,
  UsageContext: UsageContext
};
