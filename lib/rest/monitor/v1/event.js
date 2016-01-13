'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var values = require('../../../base/values');

var EventList;
var EventInstance;
var EventContext;

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
    '/Events/<% sid %>', // jshint ignore:line
    this._solution
  );
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

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new EventInstance(
    this._version,
    payload,
    this._solution.sid
  );
};

module.exports = {
  EventList: EventList,
  EventInstance: EventInstance,
  EventContext: EventContext
};
