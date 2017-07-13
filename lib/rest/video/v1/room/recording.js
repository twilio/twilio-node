'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var RoomRecordingList;
var RoomRecordingPage;
var RoomRecordingInstance;
var RoomRecordingContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.RoomRecordingList
 * @description Initialize the RoomRecordingList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {string} roomSid - The room_sid
 */
/* jshint ignore:end */
RoomRecordingList = function RoomRecordingList(version, roomSid) {
  /* jshint ignore:start */
  /**
   * @function recordings
   * @memberof Twilio.Video.V1.RoomContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.RoomContext.RoomRecordingContext}
   */
  /* jshint ignore:end */
  function RoomRecordingListInstance(sid) {
    return RoomRecordingListInstance.get(sid);
  }

  RoomRecordingListInstance._version = version;
  // Path Solution
  RoomRecordingListInstance._solution = {
    roomSid: roomSid
  };
  RoomRecordingListInstance._uri = _.template(
    '/Rooms/<%= roomSid %>/Recordings' // jshint ignore:line
  )(RoomRecordingListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams RoomRecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
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
  RoomRecordingListInstance.each = function each(opts, callback) {
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
   * @description Lists RoomRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
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
  RoomRecordingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomRecordingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'SourceSid': _.get(opts, 'sourceSid'),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
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
      deferred.resolve(new RoomRecordingPage(
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
   * Retrieve a single target page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomRecordingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomRecordingPage(
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
   * Constructs a room_recording
   *
   * @function get
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Video.V1.RoomContext.RoomRecordingContext}
   */
  /* jshint ignore:end */
  RoomRecordingListInstance.get = function get(sid) {
    return new RoomRecordingContext(
      this._version,
      this._solution.roomSid,
      sid
    );
  };

  return RoomRecordingListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.RoomRecordingPage
 * @augments Page
 * @description Initialize the RoomRecordingPage
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns RoomRecordingPage
 */
/* jshint ignore:end */
RoomRecordingPage = function RoomRecordingPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(RoomRecordingPage.prototype, Page.prototype);
RoomRecordingPage.prototype.constructor = RoomRecordingPage;

/* jshint ignore:start */
/**
 * Build an instance of RoomRecordingInstance
 *
 * @function getInstance
 * @memberof Twilio.Video.V1.RoomContext.RoomRecordingPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns RoomRecordingInstance
 */
/* jshint ignore:end */
RoomRecordingPage.prototype.getInstance = function getInstance(payload) {
  return new RoomRecordingInstance(
    this._version,
    payload,
    this._solution.roomSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.RoomRecordingInstance
 * @description Initialize the RoomRecordingContext
 *
 * @property {string} accountSid - The account_sid
 * @property {room_recording.status} status - The status
 * @property {Date} dateCreated - The date_created
 * @property {string} sid - The sid
 * @property {string} sourceSid - The source_sid
 * @property {number} size - The size
 * @property {room_recording.type} type - The type
 * @property {number} duration - The duration
 * @property {room_recording.format} containerFormat - The container_format
 * @property {room_recording.codec} codec - The codec
 * @property {string} groupingSids - The grouping_sids
 * @property {string} roomSid - The room_sid
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} roomSid - The room_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
RoomRecordingInstance = function RoomRecordingInstance(version, payload,
                                                        roomSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.sourceSid = payload.source_sid; // jshint ignore:line
  this.size = deserialize.integer(payload.size); // jshint ignore:line
  this.type = payload.type; // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.containerFormat = payload.container_format; // jshint ignore:line
  this.codec = payload.codec; // jshint ignore:line
  this.groupingSids = payload.grouping_sids; // jshint ignore:line
  this.roomSid = payload.room_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    roomSid: roomSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(RoomRecordingInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RoomRecordingContext(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a RoomRecordingInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomRecordingInstance
 */
/* jshint ignore:end */
RoomRecordingInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext.RoomRecordingContext
 * @description Initialize the RoomRecordingContext
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {sid} roomSid - The room_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
RoomRecordingContext = function RoomRecordingContext(version, roomSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    roomSid: roomSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Rooms/<%= roomSid %>/Recordings/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a RoomRecordingInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RoomContext.RoomRecordingContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomRecordingInstance
 */
/* jshint ignore:end */
RoomRecordingContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new RoomRecordingInstance(
      this._version,
      payload,
      this._solution.roomSid,
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
  RoomRecordingList: RoomRecordingList,
  RoomRecordingPage: RoomRecordingPage,
  RoomRecordingInstance: RoomRecordingInstance,
  RoomRecordingContext: RoomRecordingContext
};
