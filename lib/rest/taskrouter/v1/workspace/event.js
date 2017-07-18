'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var EventList;
var EventPage;
var EventInstance;
var EventContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventList
 * @description Initialize the EventList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The sid
 */
/* jshint ignore:end */
EventList = function EventList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @function events
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.EventContext}
   */
  /* jshint ignore:end */
  function EventListInstance(sid) {
    return EventListInstance.get(sid);
  }

  EventListInstance._version = version;
  // Path Solution
  EventListInstance._solution = {
    workspaceSid: workspaceSid
  };
  EventListInstance._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Events' // jshint ignore:line
  )(EventListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams EventInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [opts.eventType] - The event_type
   * @param {number} [opts.minutes] - The minutes
   * @param {string} [opts.reservationSid] - The reservation_sid
   * @param {Date} [opts.startDate] - The start_date
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskSid] - The task_sid
   * @param {string} [opts.workerSid] - The worker_sid
   * @param {string} [opts.workflowSid] - The workflow_sid
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
  EventListInstance.each = function each(opts, callback) {
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
   * @description Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [opts.eventType] - The event_type
   * @param {number} [opts.minutes] - The minutes
   * @param {string} [opts.reservationSid] - The reservation_sid
   * @param {Date} [opts.startDate] - The start_date
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskSid] - The task_sid
   * @param {string} [opts.workerSid] - The worker_sid
   * @param {string} [opts.workflowSid] - The workflow_sid
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
  EventListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {Date} [opts.endDate] - The end_date
   * @param {string} [opts.eventType] - The event_type
   * @param {number} [opts.minutes] - The minutes
   * @param {string} [opts.reservationSid] - The reservation_sid
   * @param {Date} [opts.startDate] - The start_date
   * @param {string} [opts.taskQueueSid] - The task_queue_sid
   * @param {string} [opts.taskSid] - The task_sid
   * @param {string} [opts.workerSid] - The worker_sid
   * @param {string} [opts.workflowSid] - The workflow_sid
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  EventListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
      'EventType': _.get(opts, 'eventType'),
      'Minutes': _.get(opts, 'minutes'),
      'ReservationSid': _.get(opts, 'reservationSid'),
      'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
      'TaskQueueSid': _.get(opts, 'taskQueueSid'),
      'TaskSid': _.get(opts, 'taskSid'),
      'WorkerSid': _.get(opts, 'workerSid'),
      'WorkflowSid': _.get(opts, 'workflowSid'),
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
      deferred.resolve(new EventPage(
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
   * Constructs a event
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.EventContext}
   */
  /* jshint ignore:end */
  EventListInstance.get = function get(sid) {
    return new EventContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return EventListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventPage
 * @augments Page
 * @description Initialize the EventPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns EventPage
 */
/* jshint ignore:end */
EventPage = function EventPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(EventPage.prototype, Page.prototype);
EventPage.prototype.constructor = EventPage;

/* jshint ignore:start */
/**
 * Build an instance of EventInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns EventInstance
 */
/* jshint ignore:end */
EventPage.prototype.getInstance = function getInstance(payload) {
  return new EventInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
 * @description Initialize the EventContext
 *
 * @property {string} accountSid - The account_sid
 * @property {string} actorSid - The actor_sid
 * @property {string} actorType - The actor_type
 * @property {string} actorUrl - The actor_url
 * @property {string} description - The description
 * @property {string} eventData - The event_data
 * @property {Date} eventDate - The event_date
 * @property {string} eventType - The event_type
 * @property {string} resourceSid - The resource_sid
 * @property {string} resourceType - The resource_type
 * @property {string} resourceUrl - The resource_url
 * @property {string} sid - The sid
 * @property {string} source - The source
 * @property {string} sourceIpAddress - The source_ip_address
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
EventInstance = function EventInstance(version, payload, workspaceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.actorSid = payload.actor_sid; // jshint ignore:line
  this.actorType = payload.actor_type; // jshint ignore:line
  this.actorUrl = payload.actor_url; // jshint ignore:line
  this.description = payload.description; // jshint ignore:line
  this.eventData = payload.event_data; // jshint ignore:line
  this.eventDate = deserialize.iso8601DateTime(payload.event_date); // jshint ignore:line
  this.eventType = payload.event_type; // jshint ignore:line
  this.resourceSid = payload.resource_sid; // jshint ignore:line
  this.resourceType = payload.resource_type; // jshint ignore:line
  this.resourceUrl = payload.resource_url; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.source = payload.source; // jshint ignore:line
  this.sourceIpAddress = payload.source_ip_address; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(EventInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new EventContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a EventInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EventInstance
 */
/* jshint ignore:end */
EventInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.EventContext
 * @description Initialize the EventContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
EventContext = function EventContext(version, workspaceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Events/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a EventInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.EventContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed EventInstance
 */
/* jshint ignore:end */
EventContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new EventInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
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
  EventList: EventList,
  EventPage: EventPage,
  EventInstance: EventInstance,
  EventContext: EventContext
};
