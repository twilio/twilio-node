'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var RoomRecordingList = require('./room/recording').RoomRecordingList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var RoomList;
var RoomPage;
var RoomInstance;
var RoomContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomList
 * @description Initialize the RoomList
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 */
/* jshint ignore:end */
RoomList = function RoomList(version) {
  /* jshint ignore:start */
  /**
   * @function rooms
   * @memberof Twilio.Video.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Video.V1.RoomContext}
   */
  /* jshint ignore:end */
  function RoomListInstance(sid) {
    return RoomListInstance.get(sid);
  }

  RoomListInstance._version = version;
  // Path Solution
  RoomListInstance._solution = {};
  RoomListInstance._uri = _.template(
    '/Rooms' // jshint ignore:line
  )(RoomListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a RoomInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.enableTurn] - The enable_turn
   * @param {room.room_type} [opts.type] - The type
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {string} [opts.statusCallback] - The status_callback
   * @param {string} [opts.statusCallbackMethod] - The status_callback_method
   * @param {number} [opts.maxParticipants] - The max_participants
   * @param {string} [opts.recordParticipantsOnConnect] -
   *          The record_participants_on_connect
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed RoomInstance
   */
  /* jshint ignore:end */
  RoomListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EnableTurn': _.get(opts, 'enableTurn'),
      'Type': _.get(opts, 'type'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'MaxParticipants': _.get(opts, 'maxParticipants'),
      'RecordParticipantsOnConnect': _.get(opts, 'recordParticipantsOnConnect')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomInstance(
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
   * Streams RoomInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {room.room_status} [opts.status] - The status
   * @param {string} [opts.uniqueName] - The unique_name
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
  RoomListInstance.each = function each(opts, callback) {
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
   * @description Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {room.room_status} [opts.status] - The status
   * @param {string} [opts.uniqueName] - The unique_name
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
  RoomListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {room.room_status} [opts.status] - The status
   * @param {string} [opts.uniqueName] - The unique_name
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
  RoomListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'UniqueName': _.get(opts, 'uniqueName'),
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
      deferred.resolve(new RoomPage(
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
   * Retrieve a single target page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {room.room_status} [opts.status] - The status
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomPage(
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
   * Constructs a room
   *
   * @function get
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Video.V1.RoomContext}
   */
  /* jshint ignore:end */
  RoomListInstance.get = function get(sid) {
    return new RoomContext(
      this._version,
      sid
    );
  };

  return RoomListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomPage
 * @augments Page
 * @description Initialize the RoomPage
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns RoomPage
 */
/* jshint ignore:end */
RoomPage = function RoomPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(RoomPage.prototype, Page.prototype);
RoomPage.prototype.constructor = RoomPage;

/* jshint ignore:start */
/**
 * Build an instance of RoomInstance
 *
 * @function getInstance
 * @memberof Twilio.Video.V1.RoomPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns RoomInstance
 */
/* jshint ignore:end */
RoomPage.prototype.getInstance = function getInstance(payload) {
  return new RoomInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomInstance
 * @description Initialize the RoomContext
 *
 * @property {string} sid - The sid
 * @property {room.room_status} status - The status
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} accountSid - The account_sid
 * @property {string} enableTurn - The enable_turn
 * @property {string} uniqueName - The unique_name
 * @property {string} statusCallback - The status_callback
 * @property {string} statusCallbackMethod - The status_callback_method
 * @property {Date} endTime - The end_time
 * @property {number} duration - The duration
 * @property {room.room_type} type - The type
 * @property {number} maxParticipants - The max_participants
 * @property {string} recordParticipantsOnConnect -
 *          The record_participants_on_connect
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
RoomInstance = function RoomInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.enableTurn = payload.enable_turn; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.statusCallbackMethod = payload.status_callback_method; // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.type = payload.type; // jshint ignore:line
  this.maxParticipants = deserialize.integer(payload.max_participants); // jshint ignore:line
  this.recordParticipantsOnConnect = payload.record_participants_on_connect; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
};

Object.defineProperty(RoomInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new RoomContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a RoomInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RoomInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a RoomInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.RoomInstance
 * @instance
 *
 * @param {object} opts - ...
 * @param {room.room_status} opts.status - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the recordings
 *
 * @function recordings
 * @memberof Twilio.Video.V1.RoomInstance
 * @instance
 *
 * @returns {Twilio.Video.V1.RoomContext.RoomRecordingList}
 */
/* jshint ignore:end */
RoomInstance.prototype.recordings = function recordings() {
  return this._proxy.recordings;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Video.V1.RoomContext
 * @description Initialize the RoomContext
 *
 * @property {Twilio.Video.V1.RoomContext.RoomRecordingList} recordings -
 *          recordings resource
 *
 * @param {Twilio.Video.V1} version - Version of the resource
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
RoomContext = function RoomContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Rooms/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._recordings = undefined;
};

/* jshint ignore:start */
/**
 * fetch a RoomInstance
 *
 * @function fetch
 * @memberof Twilio.Video.V1.RoomContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new RoomInstance(
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
 * update a RoomInstance
 *
 * @function update
 * @memberof Twilio.Video.V1.RoomContext
 * @instance
 *
 * @param {object} opts - ...
 * @param {room.room_status} opts.status - The status
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RoomInstance
 */
/* jshint ignore:end */
RoomContext.prototype.update = function update(opts, callback) {
  if (_.isUndefined(opts)) {
    throw new Error('Required parameter "opts" missing.');
  }
  if (_.isUndefined(opts.status)) {
    throw new Error('Required parameter "opts.status" missing.');
  }

  var deferred = Q.defer();
  var data = values.of({
    'Status': _.get(opts, 'status')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new RoomInstance(
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

Object.defineProperty(RoomContext.prototype,
  'recordings', {
  get: function() {
    if (!this._recordings) {
      this._recordings = new RoomRecordingList(
        this._version,
        this._solution.sid
      );
    }
    return this._recordings;
  }
});

module.exports = {
  RoomList: RoomList,
  RoomPage: RoomPage,
  RoomInstance: RoomInstance,
  RoomContext: RoomContext
};
