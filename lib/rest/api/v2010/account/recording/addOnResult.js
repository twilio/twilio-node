'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var PayloadList = require('./addOnResult/payload').PayloadList;
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var AddOnResultList;
var AddOnResultPage;
var AddOnResultInstance;
var AddOnResultContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList
 * @description Initialize the AddOnResultList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The unique sid that identifies this account
 * @param {string} referenceSid - A string that uniquely identifies the recording.
 */
/* jshint ignore:end */
AddOnResultList = function AddOnResultList(version, accountSid, referenceSid) {
  /* jshint ignore:start */
  /**
   * @function addOnResults
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext}
   */
  /* jshint ignore:end */
  function AddOnResultListInstance(sid) {
    return AddOnResultListInstance.get(sid);
  }

  AddOnResultListInstance._version = version;
  // Path Solution
  AddOnResultListInstance._solution = {
    accountSid: accountSid,
    referenceSid: referenceSid
  };
  AddOnResultListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Recordings/<%= referenceSid %>/AddOnResults.json' // jshint ignore:line
  )(AddOnResultListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams AddOnResultInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList
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
  AddOnResultListInstance.each = function each(opts, callback) {
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
   * @description Lists AddOnResultInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList
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
  AddOnResultListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AddOnResultInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList
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
  AddOnResultListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new AddOnResultPage(
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
   * Retrieve a single target page of AddOnResultInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AddOnResultListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new AddOnResultPage(
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
   * Constructs a add_on_result
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultList
   * @instance
   *
   * @param {string} sid - Fetch by unique result Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext}
   */
  /* jshint ignore:end */
  AddOnResultListInstance.get = function get(sid) {
    return new AddOnResultContext(
      this._version,
      this._solution.accountSid,
      this._solution.referenceSid,
      sid
    );
  };

  return AddOnResultListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultPage
 * @augments Page
 * @description Initialize the AddOnResultPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns AddOnResultPage
 */
/* jshint ignore:end */
AddOnResultPage = function AddOnResultPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AddOnResultPage.prototype, Page.prototype);
AddOnResultPage.prototype.constructor = AddOnResultPage;

/* jshint ignore:start */
/**
 * Build an instance of AddOnResultInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns AddOnResultInstance
 */
/* jshint ignore:end */
AddOnResultPage.prototype.getInstance = function getInstance(payload) {
  return new AddOnResultInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.referenceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultInstance
 * @description Initialize the AddOnResultContext
 *
 * @property {string} sid - A string that uniquely identifies this result
 * @property {string} accountSid - The unique sid that identifies this account
 * @property {add_on_result.status} status - The status of this result.
 * @property {string} addOnSid - A string that uniquely identifies the Add-on.
 * @property {string} addOnConfigurationSid -
 *          A string that uniquely identifies the Add-on configuration.
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {Date} dateCompleted - The date this result was completed.
 * @property {string} referenceSid -
 *          A string that uniquely identifies the recording.
 * @property {string} subresourceUris - The subresource_uris
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} referenceSid - The reference_sid
 * @param {sid} sid - Fetch by unique result Sid
 */
/* jshint ignore:end */
AddOnResultInstance = function AddOnResultInstance(version, payload, accountSid,
                                                    referenceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.addOnSid = payload.add_on_sid; // jshint ignore:line
  this.addOnConfigurationSid = payload.add_on_configuration_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.dateCompleted = deserialize.rfc2822DateTime(payload.date_completed); // jshint ignore:line
  this.referenceSid = payload.reference_sid; // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    referenceSid: referenceSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(AddOnResultInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new AddOnResultContext(
        this._version,
        this._solution.accountSid,
        this._solution.referenceSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a AddOnResultInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddOnResultInstance
 */
/* jshint ignore:end */
AddOnResultInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a AddOnResultInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddOnResultInstance
 */
/* jshint ignore:end */
AddOnResultInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the payloads
 *
 * @function payloads
 * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultInstance
 * @instance
 *
 * @returns {Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList}
 */
/* jshint ignore:end */
AddOnResultInstance.prototype.payloads = function payloads() {
  return this._proxy.payloads;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext
 * @description Initialize the AddOnResultContext
 *
 * @property {Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext.PayloadList} payloads -
 *          payloads resource
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} referenceSid - The reference_sid
 * @param {sid} sid - Fetch by unique result Sid
 */
/* jshint ignore:end */
AddOnResultContext = function AddOnResultContext(version, accountSid,
                                                  referenceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    referenceSid: referenceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Recordings/<%= referenceSid %>/AddOnResults/<%= sid %>.json' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._payloads = undefined;
};

/* jshint ignore:start */
/**
 * fetch a AddOnResultInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddOnResultInstance
 */
/* jshint ignore:end */
AddOnResultContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new AddOnResultInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.referenceSid,
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
 * remove a AddOnResultInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.AddOnResultContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AddOnResultInstance
 */
/* jshint ignore:end */
AddOnResultContext.prototype.remove = function remove(callback) {
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

Object.defineProperty(AddOnResultContext.prototype,
  'payloads', {
  get: function() {
    if (!this._payloads) {
      this._payloads = new PayloadList(
        this._version,
        this._solution.accountSid,
        this._solution.referenceSid,
        this._solution.sid
      );
    }
    return this._payloads;
  }
});

module.exports = {
  AddOnResultList: AddOnResultList,
  AddOnResultPage: AddOnResultPage,
  AddOnResultInstance: AddOnResultInstance,
  AddOnResultContext: AddOnResultContext
};
