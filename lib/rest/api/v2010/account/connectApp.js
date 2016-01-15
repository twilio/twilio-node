'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var ListResource = require('../../../../base/ListResource');
var values = require('../../../../base/values');

var ConnectAppList;
var ConnectAppInstance;
var ConnectAppContext;

/**
 * Initialize the ConnectAppList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns ConnectAppList
 */
function ConnectAppList(version, accountSid) {
  function ConnectAppListInstance(sid) {
    return ConnectAppListInstance.get(sid);
  }

  ConnectAppListInstance._version = version;
  // Path Solution
  ConnectAppListInstance._solution = {
    accountSid: accountSid
  };
  ConnectAppListInstance._uri = _.template(
    '/Accounts/{account_sid}/ConnectApps.json' // jshint ignore:line
  )(ConnectAppListInstance._solution);
  /**
   * Streams ConnectAppInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  ConnectAppListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists ConnectAppInstance records from the API as a list.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  ConnectAppListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of ConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of ConnectAppInstance
   */
  ConnectAppListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return ConnectAppPage(
      this._version,
      response,
      this._solution.accountSid
    );
  };

  /**
   * Constructs a ConnectAppContext
   *
   * :param sid - Fetch by unique connect-app Sid
   *
   * @returns ConnectAppContext
   */
  ConnectAppListInstance.get = function get(sid) {
    return new ConnectAppContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ConnectAppListInstance;
}


/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique connect-app Sid
 *
 * @returns {ConnectAppContext}
 */
function ConnectAppInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    authorizeRedirectUrl: payload.authorize_redirect_url, // jshint ignore:line,
    companyName: payload.company_name, // jshint ignore:line,
    deauthorizeCallbackMethod: payload.deauthorize_callback_method, // jshint ignore:line,
    deauthorizeCallbackUrl: payload.deauthorize_callback_url, // jshint ignore:line,
    description: payload.description, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    homepageUrl: payload.homepage_url, // jshint ignore:line,
    permissions: payload.permissions, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(ConnectAppInstance.prototype, InstanceResource.prototype);
ConnectAppInstance.prototype.constructor = ConnectAppInstance;

Object.defineProperty(ConnectAppInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConnectAppContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'authorizeRedirectUrl', {
  get: function() {
    return this._properties.authorizeRedirectUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'companyName', {
  get: function() {
    return this._properties.companyName;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'deauthorizeCallbackMethod', {
  get: function() {
    return this._properties.deauthorizeCallbackMethod;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'deauthorizeCallbackUrl', {
  get: function() {
    return this._properties.deauthorizeCallbackUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'homepageUrl', {
  get: function() {
    return this._properties.homepageUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'permissions', {
  get: function() {
    return this._properties.permissions;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConnectAppInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] -
 *          URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] -
 *          HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};


/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
 *
 * @returns {ConnectAppContext}
 */
function ConnectAppContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/ConnectApps/<% sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(ConnectAppContext.prototype, InstanceContext.prototype);
ConnectAppContext.prototype.constructor = ConnectAppContext;

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    );
  });

  return promise;
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] -
 *          URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] -
 *          HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppContext.prototype.update = function update(opts) {
  var data = values.of({
    'Authorizeredirecturl': opts.authorizeRedirectUrl,
    'Companyname': opts.companyName,
    'Deauthorizecallbackmethod': opts.deauthorizeCallbackMethod,
    'Deauthorizecallbackurl': opts.deauthorizeCallbackUrl,
    'Description': opts.description,
    'Friendlyname': opts.friendlyName,
    'Homepageurl': opts.homepageUrl,
    'Permissions': opts.permissions,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

module.exports = {
  ConnectAppList: ConnectAppList,
  ConnectAppInstance: ConnectAppInstance,
  ConnectAppContext: ConnectAppContext
};
