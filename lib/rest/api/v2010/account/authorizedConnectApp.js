'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var AuthorizedConnectAppPage;
var AuthorizedConnectAppList;
var AuthorizedConnectAppInstance;
var AuthorizedConnectAppContext;

/**
 * Initialize the AuthorizedConnectAppPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns AuthorizedConnectAppPage
 */
function AuthorizedConnectAppPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(AuthorizedConnectAppPage.prototype, Page.prototype);
AuthorizedConnectAppPage.prototype.constructor = AuthorizedConnectAppPage;

/**
 * Build an instance of AuthorizedConnectAppInstance
 *
 * :param dict payload: Payload response from the API
 *
 * @returns AuthorizedConnectAppInstance
 */
AuthorizedConnectAppPage.prototype.getInstance = function getInstance(payload) {
  return new AuthorizedConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * Initialize the AuthorizedConnectAppList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The unique sid that identifies this account
 *
 * @returns AuthorizedConnectAppList
 */
function AuthorizedConnectAppList(version, accountSid) {
  function AuthorizedConnectAppListInstance(sid) {
    return AuthorizedConnectAppListInstance.get(sid);
  }

  AuthorizedConnectAppListInstance._version = version;
  // Path Solution
  AuthorizedConnectAppListInstance._solution = {
    accountSid: accountSid
  };
  AuthorizedConnectAppListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/AuthorizedConnectApps.json' // jshint ignore:line
  )(AuthorizedConnectAppListInstance._solution);
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {Function} opts.callback - A callback function to process records
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
   */
  AuthorizedConnectAppListInstance.stream = function stream(opts) {
    if (!(opts && 'callback' in opts)) {
      throw new Error('opts.callback parameter required');
    }

    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var deferred = Q.defer();
    function fetchNextPage(fn) {
      var promise = fn();

      promise.then(function(page) {
        if (_.isEmpty(page.instances)) {
          deferred.resolve();
        }

        _.each(page.instances, opts.callback);

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          deferred.resolve();
        } else {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(deferred.reject);
    }

    fetchNextPage(_.bind(this.page, this, opts));

    return deferred.promise;
  };

  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
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
  AuthorizedConnectAppListInstance.list = function list(opts) {
    opts = opts || {};

    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    var promise = this.stream(opts);
    promise = promise.then(function() {
      return allResources;
    });

    return promise;
  };

  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of AuthorizedConnectAppInstance
   */
  AuthorizedConnectAppListInstance.page = function page(opts) {
    opts = opts || {};
    var params = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = version.page(
      'GET',
      this._uri,
      { params: params }
    );

    promise = promise.then(function(response) {
      return new AuthorizedConnectAppPage(
        this._version,
        response,
        this._solution.accountSid
      );
    }.bind(this));

    return promise;
  };

  /**
   * Constructs a AuthorizedConnectAppContext
   *
   * :param connectAppSid - The connect_app_sid
   *
   * @returns AuthorizedConnectAppContext
   */
  AuthorizedConnectAppListInstance.get = function get(connectAppSid) {
    return new AuthorizedConnectAppContext(
      this._version,
      this._solution.accountSid,
      connectAppSid
    );
  };

  return AuthorizedConnectAppListInstance;
}


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
function AuthorizedConnectAppInstance(version, payload, accountSid,
                                       connectAppSid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    connectAppCompanyName: payload.connect_app_company_name, // jshint ignore:line,
    connectAppDescription: payload.connect_app_description, // jshint ignore:line,
    connectAppFriendlyName: payload.connect_app_friendly_name, // jshint ignore:line,
    connectAppHomepageUrl: payload.connect_app_homepage_url, // jshint ignore:line,
    connectAppSid: payload.connect_app_sid, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    permissions: payload.permissions, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid || this._properties.connectAppSid,
  };
}

_.extend(AuthorizedConnectAppInstance.prototype, InstanceResource.prototype);
AuthorizedConnectAppInstance.prototype.constructor = AuthorizedConnectAppInstance;

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  '_proxy', {
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

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppCompanyName', {
  get: function() {
    return this._properties.connectAppCompanyName;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppDescription', {
  get: function() {
    return this._properties.connectAppDescription;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppFriendlyName', {
  get: function() {
    return this._properties.connectAppFriendlyName;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppHomepageUrl', {
  get: function() {
    return this._properties.connectAppHomepageUrl;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'connectAppSid', {
  get: function() {
    return this._properties.connectAppSid;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'permissions', {
  get: function() {
    return this._properties.permissions;
  },
});

Object.defineProperty(AuthorizedConnectAppInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};


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
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/AuthorizedConnectApps/<%= connectAppSid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(AuthorizedConnectAppContext.prototype, InstanceContext.prototype);
AuthorizedConnectAppContext.prototype.constructor = AuthorizedConnectAppContext;

/**
 * Fetch a AuthorizedConnectAppInstance
 *
 * @returns Fetched AuthorizedConnectAppInstance
 */
AuthorizedConnectAppContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new AuthorizedConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.connectAppSid
    );
  }.bind(this));

  return promise;
};

module.exports = {
  AuthorizedConnectAppPage: AuthorizedConnectAppPage,
  AuthorizedConnectAppList: AuthorizedConnectAppList,
  AuthorizedConnectAppInstance: AuthorizedConnectAppInstance,
  AuthorizedConnectAppContext: AuthorizedConnectAppContext
};
