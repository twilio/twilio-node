'use strict';

var _ = require('lodash');
var Q = require('q');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var Page = require('../../../../base/Page');
var deserialize = require('../../../../base/deserialize');
var serialize = require('../../../../base/serialize');
var values = require('../../../../base/values');

var EventPage;
var EventList;
var EventInstance;
var EventContext;

/**
 * @constructor
 * @augments Page
 * @description Initialize the EventPage
 *
 * @param {V1} version - Version that contains the resource
 * @param {object} response - Response from the API
 * @param {string} workspaceSid - The sid
 *
 * @returns EventPage
 */
function EventPage(version, response, workspaceSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid
  };
}

_.extend(EventPage.prototype, Page.prototype);
EventPage.prototype.constructor = EventPage;

/**
 * Build an instance of EventInstance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns EventInstance
 */
EventPage.prototype.getInstance = function getInstance(payload) {
  return new EventInstance(
    this._version,
    payload,
    this._solution.workspaceSid
  );
};


/**
 * @constructor
 * @description Initialize the EventList
 *
 * @param {V1} version - Version that contains the resource
 * @param {string} workspaceSid - The sid
 *
 * @returns {function} - EventListInstance
 */
function EventList(version, workspaceSid) {
  /**
   * @memberof EventList
   *
   * @param {string} sid - sid of instance
   *
   * @returns EventContext
   */
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
  /**
   * @memberof EventList
   *
   * @description Streams EventInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
   * @memberof EventList
   *
   * @description Lists EventInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  EventListInstance.list = function list(opts, callback) {
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
   * @memberof EventList
   *
   * @description Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
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
  EventListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EndDate': serialize.iso8601DateTime(opts.endDate),
      'EventType': opts.eventType,
      'Minutes': opts.minutes,
      'ReservationSid': opts.reservationSid,
      'StartDate': serialize.iso8601DateTime(opts.startDate),
      'TaskQueueSid': opts.taskQueueSid,
      'TaskSid': opts.taskSid,
      'WorkerSid': opts.workerSid,
      'WorkflowSid': opts.workflowSid,
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
        this._solution.workspaceSid
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
   * @memberof EventList
   *
   * @description Constructs a EventContext
   *
   * @param {string} sid - The sid
   *
   * @returns EventContext
   */
  EventListInstance.get = function get(sid) {
    return new EventContext(
      this._version,
      this._solution.workspaceSid,
      sid
    );
  };

  return EventListInstance;
}


/**
 * @constructor
 * @augments InstanceResource
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
 * @param {V1} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
function EventInstance(version, payload, workspaceSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    actorSid: payload.actor_sid, // jshint ignore:line,
    actorType: payload.actor_type, // jshint ignore:line,
    actorUrl: payload.actor_url, // jshint ignore:line,
    description: payload.description, // jshint ignore:line,
    eventData: payload.event_data, // jshint ignore:line,
    eventDate: deserialize.iso8601DateTime(payload.event_date), // jshint ignore:line,
    eventType: payload.event_type, // jshint ignore:line,
    resourceSid: payload.resource_sid, // jshint ignore:line,
    resourceType: payload.resource_type, // jshint ignore:line,
    resourceUrl: payload.resource_url, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    source: payload.source, // jshint ignore:line,
    sourceIpAddress: payload.source_ip_address, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(EventInstance.prototype, InstanceResource.prototype);
EventInstance.prototype.constructor = EventInstance;

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
  },
});

Object.defineProperty(EventInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(EventInstance.prototype,
  'actorSid', {
  get: function() {
    return this._properties.actorSid;
  },
});

Object.defineProperty(EventInstance.prototype,
  'actorType', {
  get: function() {
    return this._properties.actorType;
  },
});

Object.defineProperty(EventInstance.prototype,
  'actorUrl', {
  get: function() {
    return this._properties.actorUrl;
  },
});

Object.defineProperty(EventInstance.prototype,
  'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(EventInstance.prototype,
  'eventData', {
  get: function() {
    return this._properties.eventData;
  },
});

Object.defineProperty(EventInstance.prototype,
  'eventDate', {
  get: function() {
    return this._properties.eventDate;
  },
});

Object.defineProperty(EventInstance.prototype,
  'eventType', {
  get: function() {
    return this._properties.eventType;
  },
});

Object.defineProperty(EventInstance.prototype,
  'resourceSid', {
  get: function() {
    return this._properties.resourceSid;
  },
});

Object.defineProperty(EventInstance.prototype,
  'resourceType', {
  get: function() {
    return this._properties.resourceType;
  },
});

Object.defineProperty(EventInstance.prototype,
  'resourceUrl', {
  get: function() {
    return this._properties.resourceUrl;
  },
});

Object.defineProperty(EventInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(EventInstance.prototype,
  'source', {
  get: function() {
    return this._properties.source;
  },
});

Object.defineProperty(EventInstance.prototype,
  'sourceIpAddress', {
  get: function() {
    return this._properties.sourceIpAddress;
  },
});

Object.defineProperty(EventInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * @description Fetch a EventInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched EventInstance
 */
EventInstance.prototype.fetch = function fetch(callback) {
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


/**
 * @constructor
 * @augments InstanceContext
 * @description Initialize the EventContext
 *
 * @param {V1} version - Version that contains the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} sid - The sid
 */
function EventContext(version, workspaceSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    workspaceSid: workspaceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Events/<%= sid %>' // jshint ignore:line
  )(this._solution);
}

_.extend(EventContext.prototype, InstanceContext.prototype);
EventContext.prototype.constructor = EventContext;

/**
 * @description Fetch a EventInstance
 *
 * @param {function} [callback] - Callback to handle fetched record
 *
 * @returns {Promise} Resolves to fetched EventInstance
 */
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
  EventPage: EventPage,
  EventList: EventList,
  EventInstance: EventInstance,
  EventContext: EventContext
};
