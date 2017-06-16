'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var AuthorizedConnectAppList;
var AuthorizedConnectAppPage;
var AuthorizedConnectAppInstance;
var AuthorizedConnectAppContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList
 * @description Initialize the AuthorizedConnectAppList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 */
/* jshint ignore:end */
AuthorizedConnectAppList = function AuthorizedConnectAppList(version,
    accountSid) {
  /* jshint ignore:start */
  /**
   * @function authorizedConnectApps
   * @memberof Twilio.Api.V2010.AccountContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.AuthorizedConnectAppContext}
   */
  /* jshint ignore:end */
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
  /* jshint ignore:start */
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList
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
  AuthorizedConnectAppListInstance.each = function each(opts, callback) {
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
   * @description Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList
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
  AuthorizedConnectAppListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList
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
  AuthorizedConnectAppListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new AuthorizedConnectAppPage(
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
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AuthorizedConnectAppListInstance.getPage = function getPage(targetUrl, callback)
                                                               {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AuthorizedConnectAppPage(
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
   * Constructs a authorized_connect_app
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList
   * @instance
   *
   * @param {string} connectAppSid - The connect_app_sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.AuthorizedConnectAppContext}
   */
  /* jshint ignore:end */
  AuthorizedConnectAppListInstance.get = function get(connectAppSid) {
    return new AuthorizedConnectAppContext(
      this._version,
      this._solution.accountSid,
      connectAppSid
    );
  };

  return AuthorizedConnectAppListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppPage
 * @augments Page
 * @description Initialize the AuthorizedConnectAppPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AuthorizedConnectAppPage
 */
/* jshint ignore:end */
AuthorizedConnectAppPage = function AuthorizedConnectAppPage(version, response,
    solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AuthorizedConnectAppPage.prototype, Page.prototype);
AuthorizedConnectAppPage.prototype.constructor = AuthorizedConnectAppPage;

/* jshint ignore:start */
/**
 * Build an instance of AuthorizedConnectAppInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AuthorizedConnectAppInstance
 */
/* jshint ignore:end */
AuthorizedConnectAppPage.prototype.getInstance = function getInstance(payload) {
  return new AuthorizedConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppInstance
 * @description Initialize the AuthorizedConnectAppContext
 *
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {string} connectAppCompanyName -
 *          The company name set for this Connect App.
 * @property {string} connectAppDescription - Human readable description of the app
 * @property {string} connectAppFriendlyName -
 *          A human readable name for the Connect App.
 * @property {string} connectAppHomepageUrl - The public URL for this Connect App.
 * @property {string} connectAppSid - A string that uniquely identifies this app
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {authorized_connect_app.permission} permissions -
 *          Permissions authorized to this app
 * @property {string} uri - The URI for this resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} connectAppSid - The connect_app_sid
 */
/* jshint ignore:end */
AuthorizedConnectAppInstance = function AuthorizedConnectAppInstance(version,
    payload, accountSid, connectAppSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.connectAppCompanyName = payload.connect_app_company_name; // jshint ignore:line
  this.connectAppDescription = payload.connect_app_description; // jshint ignore:line
  this.connectAppFriendlyName = payload.connect_app_friendly_name; // jshint ignore:line
  this.connectAppHomepageUrl = payload.connect_app_homepage_url; // jshint ignore:line
  this.connectAppSid = payload.connect_app_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.permissions = payload.permissions; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid || this.connectAppSid,
  };
};

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
  }
});

/* jshint ignore:start */
/**
 * fetch a AuthorizedConnectAppInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthorizedConnectAppInstance
 */
/* jshint ignore:end */
AuthorizedConnectAppInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.AuthorizedConnectAppContext
 * @description Initialize the AuthorizedConnectAppContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} connectAppSid - The connect_app_sid
 */
/* jshint ignore:end */
AuthorizedConnectAppContext = function AuthorizedConnectAppContext(version,
    accountSid, connectAppSid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    connectAppSid: connectAppSid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/AuthorizedConnectApps/<%= connectAppSid %>.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a AuthorizedConnectAppInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.AuthorizedConnectAppContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AuthorizedConnectAppInstance
 */
/* jshint ignore:end */
AuthorizedConnectAppContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AuthorizedConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.connectAppSid
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
  AuthorizedConnectAppList: AuthorizedConnectAppList,
  AuthorizedConnectAppPage: AuthorizedConnectAppPage,
  AuthorizedConnectAppInstance: AuthorizedConnectAppInstance,
  AuthorizedConnectAppContext: AuthorizedConnectAppContext
};
