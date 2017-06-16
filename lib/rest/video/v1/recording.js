'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var RecordingList;
var RecordingPage;
var RecordingInstance;
var RecordingContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RecordingList
 * @description Initialize the RecordingList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 */
/* jshint ignore:end */
RecordingList = function RecordingList(version) {
  /* jshint ignore:start */
  /**
   * @function recordings
   * @memberof Twilio.Video.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.RecordingContext}
   */
  /* jshint ignore:end */
  function RecordingListInstance(sid) {
    return RecordingListInstance.get(sid);
  }

  RecordingListInstance._version = version;
  // Path Solution
  RecordingListInstance._solution = {};
  RecordingListInstance._uri = _.template(
    '/Recordings' // jshint ignore:line
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {string|list} [opts.groupingSid] - The grouping_sid
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {string|list} [opts.groupingSid] - The grouping_sid
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {string|list} [opts.groupingSid] - The grouping_sid
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
      'Status': _.get(opts, 'status'),
      'SourceSid': _.get(opts, 'sourceSid'),
      'GroupingSid': _.get(opts, 'groupingSid'),
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {string|list} [opts.groupingSid] - The grouping_sid
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
   * @memberof Twilio.Video.V1.RecordingList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Video.V1.RecordingContext}
   */
  /* jshint ignore:end */
  RecordingListInstance.get = function get(sid) {
    return new RecordingContext(
      this._version,
      sid
    );
  };

  return RecordingListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RecordingPage
 * @augments Page
 * @description Initialize the RecordingPage
 *
 * @param {Twilio.Video.V1} version - Version of the resource
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
 * @memberof Twilio.Video.V1.RecordingPage
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
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RecordingInstance
 * @description Initialize the RecordingContext
 *
 * @property {string} accountSid - The account_sid
 * @property {recording.status} status - The status
 * @property {Date} dateCreated - The date_created
 * @property {string} sid - The sid
 * @property {string} sourceSid - The source_sid
 * @property {number} size - The size
 * @property {string} url - The url
 * @property {recording.type} type - The type
 * @property {number} duration - The duration
 * @property {recording.format} containerFormat - The container_format
 * @property {recording.codec} codec - The codec
 * @property {string} groupingSids - The grouping_sids
 * @property {string} links - The links
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
RecordingInstance = function RecordingInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.sourceSid = payload.source_sid; // jshint ignore:line
  this.size = deserialize.integer(payload.size); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.type = payload.type; // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.containerFormat = payload.container_format; // jshint ignore:line
  this.codec = payload.codec; // jshint ignore:line
  this.groupingSids = payload.grouping_sids; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
};

Object.defineProperty(RecordingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RecordingContext(
        this._version,
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
 * @memberof Twilio.Video.V1.RecordingInstance
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
 * @memberof Twilio.Video.V1.RecordingInstance
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
 * @constructor Twilio.Video.V1.RecordingContext
 * @description Initialize the RecordingContext
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
RecordingContext = function RecordingContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Recordings/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a RecordingInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RecordingContext
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
 * @memberof Twilio.Video.V1.RecordingContext
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
