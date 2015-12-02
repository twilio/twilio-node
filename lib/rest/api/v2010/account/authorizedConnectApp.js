'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the AuthorizedConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} connectAppSid - The connect_app_sid
 *
 * @returns {AuthorizedConnectAppContext}
 */
function AuthorizedConnectAppContext(version, accountSid, connectAppSid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/AuthorizedConnectApps/<% connect_app_sid %>.json', this._solution);
}

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new AuthorizedConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.connectAppSid,
  );
};


function AuthorizedConnectAppInstance() {
}

Object.defineProperty(AuthorizedConnectAppInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AuthorizedConnectAppContext(
        this._version,
        this._solution.accountSid,
        this._solution.connectAppSid
      );
    }

    return this._context;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'connectAppCompanyName', {
  get: function() {
    return this._properties.connectAppCompanyName;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'connectAppDescription', {
  get: function() {
    return this._properties.connectAppDescription;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'connectAppFriendlyName', {
  get: function() {
    return this._properties.connectAppFriendlyName;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'connectAppHomepageUrl', {
  get: function() {
    return this._properties.connectAppHomepageUrl;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'connectAppSid', {
  get: function() {
    return this._properties.connectAppSid;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'permissions', {
  get: function() {
    return this._properties.permissions;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the AuthorizedConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} connectAppSid: The connect_app_sid
 *
 * @returns {AuthorizedConnectAppContext}
 */
AuthorizedConnectAppInstance.prototype.AuthorizedConnectAppInstance = function
    AuthorizedConnectAppInstance(version, payload, accountSid, connectAppSid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      connectAppCompanyName: payload.connect_app_company_name,
      connectAppDescription: payload.connect_app_description,
      connectAppFriendlyName: payload.connect_app_friendly_name,
      connectAppHomepageUrl: payload.connect_app_homepage_url,
      connectAppSid: payload.connect_app_sid,
      dateCreated: payload.date_created,
      dateUpdated: payload.date_updated,
      permissions: payload.permissions,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid || this._properties.connectAppSid,
  };
};

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

