'use strict';

var ListResource = require('../../../../base/ListResource');
var RecordList = require('./usage/record');
var TriggerList = require('./usage/trigger');

var UsageList;
var UsageInstance;
var UsageContext;

/**
 * Initialize the UsageList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns UsageList
 */
function UsageList(version, accountSid) {
  function UsageListInstance() {
  }

  // Path Solution
  UsageListInstance._solution = {
    accountSid: accountSid,
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
      return this._triggers;
    },
  });

  return UsageListInstance;
}

module.exports = {
  UsageList: UsageList,
  UsageInstance: UsageInstance,
  UsageContext: UsageContext
};
