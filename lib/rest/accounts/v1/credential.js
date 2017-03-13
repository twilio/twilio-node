'use strict';

var _ = require('lodash');
var Page = require('../../../base/Page');
var PublicKeyList = require('./credential/publicKey').PublicKeyList;

var CredentialPage;
var CredentialList;
var CredentialInstance;
var CredentialContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Accounts.V1.CredentialPage
 * @augments Page
 * @description Initialize the CredentialPage
 *
 * @param {Twilio.Accounts.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns CredentialPage
 */
/* jshint ignore:end */
function CredentialPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(CredentialPage.prototype, Page.prototype);
CredentialPage.prototype.constructor = CredentialPage;

/* jshint ignore:start */
/**
 * Build an instance of CredentialInstance
 *
 * @function getInstance
 * @memberof Twilio.Accounts.V1.CredentialPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns CredentialInstance
 */
/* jshint ignore:end */
CredentialPage.prototype.getInstance = function getInstance(payload) {
  return new CredentialInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Accounts.V1.CredentialList
 * @description Initialize the CredentialList
 *
 * @param {Twilio.Accounts.V1} version - Version of the resource
 */
/* jshint ignore:end */
function CredentialList(version) {
  /* jshint ignore:start */
  /**
   * @function credentials
   * @memberof Twilio.Accounts.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Accounts.V1.CredentialContext}
   */
  /* jshint ignore:end */
  function CredentialListInstance(sid) {
    return CredentialListInstance.get(sid);
  }

  CredentialListInstance._version = version;
  // Path Solution
  CredentialListInstance._solution = {};

  // Components
  CredentialListInstance._publicKey = undefined;

  Object.defineProperty(CredentialListInstance,
    'publicKey', {
    get: function publicKey() {
      if (!this._publicKey) {
        this._publicKey = new PublicKeyList(
          this._version
        );
      }

      return this._publicKey;
    },
  });

  return CredentialListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Accounts.V1.CredentialInstance
 * @description Initialize the CredentialContext
 *
 * @param {Twilio.Accounts.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function CredentialInstance(version, payload) {
  this._version = version;

  // Context
  this._context = undefined;
  this._solution = {};
}

module.exports = {
  CredentialPage: CredentialPage,
  CredentialList: CredentialList,
  CredentialInstance: CredentialInstance,
  CredentialContext: CredentialContext
};
