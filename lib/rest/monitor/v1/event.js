'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var ListResource = require('../../../base/ListResource');
var values = require('../../../base/values');

var EventList;
var EventInstance;
var EventContext;

/**
 * Initialize the EventList
 *
 * :param Version version: Version that contains the resource
 *
 * @returns EventList
 */
function EventList(version) {
  function EventListInstance(sid) {
    return EventListInstance.get(sid);
  }

  EventListInstance._version = version;
  // Path Solution
  EventListInstance._solution = {};
  EventListInstance._uri = _.template(
    '/Events' // jshint ignore:line
  )(EventListInstance._solution);
  /**
   * Streams EventInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param string [opts.actorSid] - The actor_sid
   * @param string [opts.endDateBefore] - The end_date
   * @param string [opts.endDate] - The end_date
   * @param string [opts.endDateAfter] - The end_date
   * @param string [opts.eventType] - The event_type
   * @param string [opts.resourceSid] - The resource_sid
   * @param string [opts.sourceIpAddress] - The source_ip_address
   * @param string [opts.startDateBefore] - The start_date
   * @param string [opts.startDate] - The start_date
   * @param string [opts.startDateAfter] - The start_date
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
   * @param {Function} opts.callback - A callback function to process records
   */
  EventListInstance.stream = function stream(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page(
      opts
    );

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists EventInstance records from the API as a list.
   *
   * @param string [opts.actorSid] - The actor_sid
   * @param string [opts.endDateBefore] - The end_date
   * @param string [opts.endDate] - The end_date
   * @param string [opts.endDateAfter] - The end_date
   * @param string [opts.eventType] - The event_type
   * @param string [opts.resourceSid] - The resource_sid
   * @param string [opts.sourceIpAddress] - The source_ip_address
   * @param string [opts.startDateBefore] - The start_date
   * @param string [opts.startDate] - The start_date
   * @param string [opts.startDateAfter] - The start_date
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
   *
   * @returns {Array} A list of records
   */
  EventListInstance.list = function list(opts) {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      opts,
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of EventInstance records from the API.
   * Request is executed immediately
   *
   * @param string [opts.actorSid] - The actor_sid
   * @param string [opts.endDateBefore] - The end_date
   * @param string [opts.endDate] - The end_date
   * @param string [opts.endDateAfter] - The end_date
   * @param string [opts.eventType] - The event_type
   * @param string [opts.resourceSid] - The resource_sid
   * @param string [opts.sourceIpAddress] - The source_ip_address
   * @param string [opts.startDateBefore] - The start_date
   * @param string [opts.startDate] - The start_date
   * @param string [opts.startDateAfter] - The start_date
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of EventInstance
   */
  EventListInstance.page = function page(opts) {
    var params = values.of({
      'Actorsid': opts.actorSid,
      'Enddate<': opts.enddatebefore,
      'Enddate': opts.endDate,
      'Enddate>': opts.enddateafter,
      'Eventtype': opts.eventType,
      'Resourcesid': opts.resourceSid,
      'Sourceipaddress': opts.sourceIpAddress,
      'Startdate<': opts.startdatebefore,
      'Startdate': opts.startDate,
      'Startdate>': opts.startdateafter,
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return EventPage(
      this._version,
      response
    );
  };

  /**
   * Constructs a EventContext
   *
   * :param sid - The sid
   *
   * @returns EventContext
   */
  EventListInstance.get = function get(sid) {
    return new EventContext(
      this._version,
      sid
    );
  };

  return EventListInstance;
}


/**
 * Initialize the EventContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid: The sid
 *
 * @returns {EventContext}
 */
function EventInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    actorSid: payload.actor_sid, // jshint ignore:line,
    actorType: payload.actor_type, // jshint ignore:line,
    description: payload.description, // jshint ignore:line,
    eventData: payload.event_data, // jshint ignore:line,
    eventDate: payload.event_date, // jshint ignore:line,
    eventType: payload.event_type, // jshint ignore:line,
    resourceSid: payload.resource_sid, // jshint ignore:line,
    resourceType: payload.resource_type, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    source: payload.source, // jshint ignore:line,
    sourceIpAddress: payload.source_ip_address, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
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

/**
 * Fetch a EventInstance
 *
 * @returns Fetched EventInstance
 */
EventInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};


/**
 * Initialize the EventContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {EventContext}
 */
function EventContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Events/<%= sid%>' // jshint ignore:line
  )(this._solution);
}

_.extend(EventContext.prototype, InstanceContext.prototype);
EventContext.prototype.constructor = EventContext;

/**
 * Fetch a EventInstance
 *
 * @returns Fetched EventInstance
 */
EventContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new EventInstance(
      this._version,
      payload,
      this._solution.sid
    );
  });

  return promise;
};

module.exports = {
  EventList: EventList,
  EventInstance: EventInstance,
  EventContext: EventContext
};
