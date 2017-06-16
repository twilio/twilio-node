'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var RecordingList;
var RecordingPage;
var RecordingInstance;
var RecordingContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingList
 * @description Initialize the RecordingList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The account_sid
 * @param {string} callSid - The call_sid
 */
/* jshint ignore:end */
RecordingList = function RecordingList(version, accountSid, callSid) {
  /* jshint ignore:start */
  /**
   * @function recordings
   * @memberof Twilio.Api.V2010.AccountContext.CallContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.RecordingContext}
   */
  /* jshint ignore:end */
  function RecordingListInstance(sid) {
    return RecordingListInstance.get(sid);
  }

  RecordingListInstance._version = version;
  // Path Solution
  RecordingListInstance._solution = {
    accountSid: accountSid,
    callSid: callSid
  };
  RecordingListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Recordings.json' // jshint ignore:line
  )(RecordingListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams RecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - The date_created
   * @param {Date} [opts.dateCreated] - The date_created
   * @param {Date} [opts.dateCreatedAfter] - The date_created
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
  RecordingListInstance.each = function each(opts, callback) {
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
   * @description Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - The date_created
   * @param {Date} [opts.dateCreated] - The date_created
   * @param {Date} [opts.dateCreatedAfter] - The date_created
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
  RecordingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.dateCreatedBefore] - The date_created
   * @param {Date} [opts.dateCreated] - The date_created
   * @param {Date} [opts.dateCreatedAfter] - The date_created
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RecordingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreated<': serialize.iso8601Date(_.get(opts, 'dateCreatedBefore')),
      'DateCreated': serialize.iso8601Date(_.get(opts, 'dateCreated')),
      'DateCreated>': serialize.iso8601Date(_.get(opts, 'dateCreatedAfter')),
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
      deferred.resolve(new RecordingPage(
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
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param {Date} [opts.dateCreatedBefore] - The date_created
   * @param {Date} [opts.dateCreated] - The date_created
   * @param {Date} [opts.dateCreatedAfter] - The date_created
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RecordingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new RecordingPage(
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
   * Constructs a recording
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.CallContext.RecordingContext}
   */
  /* jshint ignore:end */
  RecordingListInstance.get = function get(sid) {
    return new RecordingContext(
      this._version,
      this._solution.accountSid,
      this._solution.callSid,
      sid
    );
  };

  return RecordingListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingPage
 * @augments Page
 * @description Initialize the RecordingPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns RecordingPage
 */
/* jshint ignore:end */
RecordingPage = function RecordingPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(RecordingPage.prototype, Page.prototype);
RecordingPage.prototype.constructor = RecordingPage;

/* jshint ignore:start */
/**
 * Build an instance of RecordingInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns RecordingInstance
 */
/* jshint ignore:end */
RecordingPage.prototype.getInstance = function getInstance(payload) {
  return new RecordingInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.callSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
 * @description Initialize the RecordingContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} apiVersion - The api_version
 * @property {string} callSid - The call_sid
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} duration - The duration
 * @property {string} sid - The sid
 * @property {number} price - The price
 * @property {string} uri - The uri
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
RecordingInstance = function RecordingInstance(version, payload, accountSid,
                                                callSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.duration = payload.duration; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.price = deserialize.decimal(payload.price); // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(RecordingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RecordingContext(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a RecordingInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RecordingInstance
 */
/* jshint ignore:end */
RecordingInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a RecordingInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RecordingInstance
 */
/* jshint ignore:end */
RecordingInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
 * @description Initialize the RecordingContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} callSid - The call_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
RecordingContext = function RecordingContext(version, accountSid, callSid, sid)
                                              {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    callSid: callSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Calls/<%= callSid %>/Recordings/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a RecordingInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RecordingInstance
 */
/* jshint ignore:end */
RecordingContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new RecordingInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.callSid,
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
 * remove a RecordingInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.CallContext.RecordingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RecordingInstance
 */
/* jshint ignore:end */
RecordingContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
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
  RecordingList: RecordingList,
  RecordingPage: RecordingPage,
  RecordingInstance: RecordingInstance,
  RecordingContext: RecordingContext
};
