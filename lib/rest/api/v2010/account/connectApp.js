'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ConnectAppList;
var ConnectAppPage;
var ConnectAppInstance;
var ConnectAppContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppList
 * @description Initialize the ConnectAppList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 */
/* jshint ignore:end */
ConnectAppList = function ConnectAppList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function connectApps
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConnectAppContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
  /**
   * Streams ConnectAppInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
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
    var currentResource = 0;
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
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
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

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * @description Lists ConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList
   * @instance
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
  /* jshint ignore:end */
  ConnectAppListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
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

  /* jshint ignore:start */
  /**
   * Retrieve a single page of ConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList
   * @instance
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
  /* jshint ignore:end */
  ConnectAppListInstance.page = function page(opts, callback) {
    opts = opts || {};

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
        this._solution
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

  /* jshint ignore:start */
  /**
   * Constructs a connect_app
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ConnectAppList
   * @instance
   *
   * @param {string} sid - Fetch by unique connect-app Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConnectAppContext}
   */
  /* jshint ignore:end */
  ConnectAppListInstance.get = function get(sid) {
    return new ConnectAppContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return ConnectAppListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppPage
 * @augments Page
 * @description Initialize the ConnectAppPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ConnectAppPage
 */
/* jshint ignore:end */
ConnectAppPage = function ConnectAppPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ConnectAppPage.prototype, Page.prototype);
ConnectAppPage.prototype.constructor = ConnectAppPage;

/* jshint ignore:start */
/**
 * Build an instance of ConnectAppInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppPage.prototype.getInstance = function getInstance(payload) {
  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppInstance
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
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
 */
/* jshint ignore:end */
ConnectAppInstance = function ConnectAppInstance(version, payload, accountSid,
                                                  sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.authorizeRedirectUrl = payload.authorize_redirect_url; // jshint ignore:line
  this.companyName = payload.company_name; // jshint ignore:line
  this.deauthorizeCallbackMethod = payload.deauthorize_callback_method; // jshint ignore:line
  this.deauthorizeCallbackUrl = payload.deauthorize_callback_url; // jshint ignore:line
  this.description = payload.description; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.homepageUrl = payload.homepage_url; // jshint ignore:line
  this.permissions = payload.permissions; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * fetch a ConnectAppInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ConnectAppInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppInstance
 * @instance
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
 * @param {connect_app.permission|list} [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.ConnectAppContext
 * @description Initialize the ConnectAppContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
 */
/* jshint ignore:end */
ConnectAppContext = function ConnectAppContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/ConnectApps/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a ConnectAppInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
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

/* jshint ignore:start */
/**
 * update a ConnectAppInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConnectAppContext
 * @instance
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
 * @param {connect_app.permission|list} [opts.permissions] -
 *          The set of permissions that your ConnectApp requests.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConnectAppInstance
 */
/* jshint ignore:end */
ConnectAppContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AuthorizeRedirectUrl': _.get(opts, 'authorizeRedirectUrl'),
    'CompanyName': _.get(opts, 'companyName'),
    'DeauthorizeCallbackMethod': _.get(opts, 'deauthorizeCallbackMethod'),
    'DeauthorizeCallbackUrl': _.get(opts, 'deauthorizeCallbackUrl'),
    'Description': _.get(opts, 'description'),
    'FriendlyName': _.get(opts, 'friendlyName'),
    'HomepageUrl': _.get(opts, 'homepageUrl'),
    'Permissions': _.get(opts, 'permissions')
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
  ConnectAppList: ConnectAppList,
  ConnectAppPage: ConnectAppPage,
  ConnectAppInstance: ConnectAppInstance,
  ConnectAppContext: ConnectAppContext
};
