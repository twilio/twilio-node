'use strict';

var _ = require('lodash');
var Instance = require('../../../../../../base');
var InstanceContext = require('../../../../../../base/InstanceContext');
var values = require('../../../../../../base/values');

/**
 * Initialize the IpAccessControlListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} domainSid - The domain_sid
 * @param {sid} sid - The sid
 *
 * @returns {IpAccessControlListMappingContext}
 */
function IpAccessControlListMappingContext(version, accountSid, domainSid, sid)
                                            {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/SIP/Domains/<% domain_sid %>/IpAccessControlListMappings/<% sid %>.json', this._solution);
}

/**
 * Fetch a IpAccessControlListMappingInstance
 *
 * @returns Fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new IpAccessControlListMappingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.domainSid,
    this._solution.sid,
  );
};

/**
 * Deletes the IpAccessControlListMappingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAccessControlListMappingContext.prototype.delete = function delete(self) {
  return this._version.delete('delete', self._uri);
};


function IpAccessControlListMappingInstance() {
}

Object.defineProperty(IpAccessControlListMappingInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new IpAccessControlListMappingContext(
        this._version,
        this._solution.accountSid,
        this._solution.domainSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(IpAccessControlListMappingInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the IpAccessControlListMappingContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} domainSid: The domain_sid
 * @param {sid} sid: The sid
 *
 * @returns {IpAccessControlListMappingContext}
 */
IpAccessControlListMappingInstance.prototype.IpAccessControlListMappingInstance
    = function IpAccessControlListMappingInstance(version, payload, accountSid,
    domainSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid // jshint ignore:line,
      dateCreated: payload.date_created // jshint ignore:line,
      dateUpdated: payload.date_updated // jshint ignore:line,
      friendlyName: payload.friendly_name // jshint ignore:line,
      sid: payload.sid // jshint ignore:line,
      uri: payload.uri // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    domainSid: domainSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a IpAccessControlListMappingInstance
 *
 * @returns Fetched IpAccessControlListMappingInstance
 */
IpAccessControlListMappingInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Deletes the IpAccessControlListMappingInstance
 *
 * @returns True if delete succeeds, False otherwise
 */
IpAccessControlListMappingInstance.prototype.delete = function delete(self) {
  return this._proxy.delete();
};

