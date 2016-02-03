'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var values = require('../../../../base/values');

var ConnectAppPage;
var ConnectAppList;
var ConnectAppInstance;
var ConnectAppContext;

/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppPage
 * @augments Page
 * @description Initialize the ConnectAppPage
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns ConnectAppPage
 */
function ConnectAppPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(ConnectAppPage.prototype, Page.prototype);
ConnectAppPage.prototype.constructor = ConnectAppPage;

/**
 * Build an instance of ConnectAppInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ConnectAppInstance
 */
ConnectAppPage.prototype.getInstance = function getInstance(payload) {
  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppList
 * @description Initialize the ConnectAppList
 *
 * @param {V2010} version - Version that contains the resource
 * @param {string} accountSid - The unique sid that identifies this account
 *
 * @returns {function} - ConnectAppListInstance
 */
function ConnectAppList(version, accountSid) {
  /**
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList
   *
   * @param {string} sid - sid of instance
   *
   * @returns ConnectAppContext
   */
  function ConnectAppListInstance(sid) {
    return ConnectAppListInstance.get(sid);
  }

  ConnectAppListInstance._version = version;
  // Path Solution
  ConnectAppListInstance._solution = {
    accountSid: accountSid
  };
  ConnectAppListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/ConnectApps.json' // jshint ignore:line
  )(ConnectAppListInstance._solution);
  /**
   * @memberof ConnectAppList
   *
   * @description Streams ConnectAppInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  ConnectAppListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done) {
            return false;
          }

          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /**
   * @memberof ConnectAppList
   *
   * @description Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
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
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ConnectAppListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /**
   * @memberof ConnectAppList
   *
   * @description Retrieve a single page of ConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  ConnectAppListInstance.page = function page(opts, callback) {
    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ConnectAppPage(
        this._version,
        payload,
        this._solution.accountSid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /**
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList
   *
   * @description Constructs a ConnectAppContext
   *
   * @param {string} sid - Fetch by unique connect-app Sid
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
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppInstance
 * @augments InstanceResource
 * @description Initialize the ConnectAppContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} authorizeRedirectUrl -
 *          URIL Twilio sends requests when users authorize
 * @property {string} companyName - The company name set for this Connect App.
 * @property {string} deauthorizeCallbackMethod -
 *          HTTP method Twilio WIll use making requests to the url
 * @property {string} deauthorizeCallbackUrl -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @property {string} description - A more detailed human readable description
 * @property {string} friendlyName - A human readable name for the Connect App.
 * @property {string} homepageUrl - The URL users can obtain more information
 * @property {connect_app.permission} permissions -
 *          The set of permissions that your ConnectApp requests.
 * @property {string} sid - A string that uniquely identifies this connect-apps
 * @property {string} uri - The URI for this resource
 *
 * @param {V2010} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
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
 * @description Fetch a ConnectAppInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ConnectAppInstance
 */
ConnectAppInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * @description Update the ConnectAppInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.authorizeRedirectUrl] -
 *          URIL Twilio sends requests when users authorize
 * @param {string} [opts.companyName] - The company name set for this Connect App.
 * @param {string} [opts.deauthorizeCallbackMethod] -
 *          HTTP method Twilio WIll use making requests to the url
 * @param {string} [opts.deauthorizeCallbackUrl] -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @param {string} [opts.description] - A more detailed human readable description
 * @param {string} [opts.friendlyName] - A human readable name for the Connect App.
 * @param {string} [opts.homepageUrl] - The URL users can obtain more information
 * @param {connect_app.permission} [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ConnectAppInstance
 */
ConnectAppInstance.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AuthorizeRedirectUrl': opts.authorizeRedirectUrl,
    'CompanyName': opts.companyName,
    'DeauthorizeCallbackMethod': opts.deauthorizeCallbackMethod,
    'DeauthorizeCallbackUrl': opts.deauthorizeCallbackUrl,
    'Description': opts.description,
    'FriendlyName': opts.friendlyName,
    'HomepageUrl': opts.homepageUrl,
    'Permissions': opts.permissions
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};


/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppContext
 * @augments InstanceContext
 * @description Initialize the ConnectAppContext
 *
 * @param {V2010} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
 */
function ConnectAppContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/ConnectApps/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

_.extend(ConnectAppContext.prototype, InstanceContext.prototype);
ConnectAppContext.prototype.constructor = ConnectAppContext;

/**
 * @description Fetch a ConnectAppInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched ConnectAppInstance
 */
ConnectAppContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/**
 * @description Update the ConnectAppInstance
 *
 * If a function is passed as the first argument, it will be used as the callback function.
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.authorizeRedirectUrl] -
 *          URIL Twilio sends requests when users authorize
 * @param {string} [opts.companyName] - The company name set for this Connect App.
 * @param {string} [opts.deauthorizeCallbackMethod] -
 *          HTTP method Twilio WIll use making requests to the url
 * @param {string} [opts.deauthorizeCallbackUrl] -
 *          URL Twilio will send a request when a user de-authorizes this app
 * @param {string} [opts.description] - A more detailed human readable description
 * @param {string} [opts.friendlyName] - A human readable name for the Connect App.
 * @param {string} [opts.homepageUrl] - The URL users can obtain more information
 * @param {connect_app.permission} [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 * @param {function} [callback] - Callback to handle updated record
 *
 * @returns {Promise} Resolves to updated ConnectAppInstance
 */
ConnectAppContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AuthorizeRedirectUrl': opts.authorizeRedirectUrl,
    'CompanyName': opts.companyName,
    'DeauthorizeCallbackMethod': opts.deauthorizeCallbackMethod,
    'DeauthorizeCallbackUrl': opts.deauthorizeCallbackUrl,
    'Description': opts.description,
    'FriendlyName': opts.friendlyName,
    'HomepageUrl': opts.homepageUrl,
    'Permissions': opts.permissions
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  ConnectAppPage: ConnectAppPage,
  ConnectAppList: ConnectAppList,
  ConnectAppInstance: ConnectAppInstance,
  ConnectAppContext: ConnectAppContext
};
