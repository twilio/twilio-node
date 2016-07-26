'use strict';

var _ = require('lodash');
var CredentialListList = require('./sip/credentialList').CredentialListList;
var DomainList = require('./sip/domain').DomainList;
var IpAccessControlListList = require(
    './sip/ipAccessControlList').IpAccessControlListList;
var Page = require('../../../../base/Page');

var SipPage;
var SipList;
var SipInstance;
var SipContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipPage
 * @augments Page
 * @description Initialize the SipPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns SipPage
 */
/* jshint ignore:end */
function SipPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
}

_.extend(SipPage.prototype, Page.prototype);
SipPage.prototype.constructor = SipPage;

/* jshint ignore:start */
/**
 * Build an instance of SipInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.SipPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SipInstance
 */
/* jshint ignore:end */
SipPage.prototype.getInstance = function getInstance(payload) {
  return new SipInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipList
 * @description Initialize the SipList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
function SipList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function sip
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext}
   */
  /* jshint ignore:end */
  function SipListInstance(sid) {
    return SipListInstance.get(sid);
  }

  SipListInstance._version = version;
  // Path Solution
  SipListInstance._solution = {
    accountSid: accountSid
  };

  // Components
  SipListInstance._domains = undefined;
  SipListInstance._ipAccessControlLists = undefined;
  SipListInstance._credentialLists = undefined;

  Object.defineProperty(SipListInstance,
    'domains', {
    get: function domains() {
      if (!this._domains) {
        this._domains = new DomainList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._domains;
    },
  });

  Object.defineProperty(SipListInstance,
    'ipAccessControlLists', {
    get: function ipAccessControlLists() {
      if (!this._ipAccessControlLists) {
        this._ipAccessControlLists = new IpAccessControlListList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._ipAccessControlLists;
    },
  });

  Object.defineProperty(SipListInstance,
    'credentialLists', {
    get: function credentialLists() {
      if (!this._credentialLists) {
        this._credentialLists = new CredentialListList(
          this._version,
          this._solution.accountSid
        );
      }

      return this._credentialLists;
    },
  });

  return SipListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.SipInstance
 * @description Initialize the SipContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 */
/* jshint ignore:end */
function SipInstance(version, payload, accountSid) {
  this._version = version;

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

module.exports = {
  SipPage: SipPage,
  SipList: SipList,
  SipInstance: SipInstance,
  SipContext: SipContext
};
