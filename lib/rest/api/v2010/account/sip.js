'use strict';

var _ = require('lodash');
var CredentialListList = require('./sip/credentialList').CredentialListList;
var DomainList = require('./sip/domain').DomainList;
var InstanceResource = require('../../../../base/InstanceResource');
var IpAccessControlListList = require(
    './sip/ipAccessControlList').IpAccessControlListList;
var Page = require('../../../../base/Page');

var SipPage;
var SipList;
var SipInstance;
var SipContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the SipPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns SipPage
 */
function SipPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(SipPage.prototype, Page.prototype);
SipPage.prototype.constructor = SipPage;

/**
 * Build an instance of SipInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns SipInstance
 */
SipPage.prototype.getInstance = function getInstance(payload) {
  return new SipInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor
 * @description Initialize the SipList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns {function} - SipListInstance
 */
function SipList(version, accountSid) {
  /**
   * @memberof SipList
   *
   * @param {string} sid - sid of instance
   *
   * @returns SipContext
   */
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


/**
 * @constructor
 * @augments InstanceResource
 * @description Initialize the SipContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 */
function SipInstance(version, payload, accountSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
  };
}

_.extend(SipInstance.prototype, InstanceResource.prototype);
SipInstance.prototype.constructor = SipInstance;

module.exports = {
  SipPage: SipPage,
  SipList: SipList,
  SipInstance: SipInstance,
  SipContext: SipContext
};
