'use strict';

var CredentialListList = require('./sip/credentialList');
var DomainList = require('./sip/domain');
var IpAccessControlListList = require('./sip/ipAccessControlList');
var ListResource = require('../../../../base/ListResource');

var SipList;
var SipInstance;
var SipContext;

/**
 * Initialize the SipList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: A 34 character string that uniquely identifies this resource.
 *
 * @returns SipList
 */
function SipList(version, accountSid) {
  function SipListInstance() {
  }

  SipListInstance._version = version;
  // Path Solution
  SipListInstance._solution = {
    accountSid: accountSid,
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
      return this._credentialLists;
    },
  });

  return SipListInstance;
}

module.exports = {
  SipList: SipList,
  SipInstance: SipInstance,
  SipContext: SipContext
};
