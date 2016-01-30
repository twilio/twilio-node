'use strict';

var _ = require('lodash');
var Q = require('q');
var CompletedList = require('./conversation/completed').CompletedList;
var InProgressList = require('./conversation/inProgress').InProgressList;
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var Page = require('../../../base/Page');
var ParticipantList = require('./conversation/participant').ParticipantList;
var deserialize = require('../../../base/deserialize');

var ConversationPage;
var ConversationList;
var ConversationInstance;
var ConversationContext;

/**
 * Initialize the ConversationPage
 *
 * @param {Version} version - Version that contains the resource
 * @param {Response} response - Response from the API
 *
 * @returns ConversationPage
 */
function ConversationPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(ConversationPage.prototype, Page.prototype);
ConversationPage.prototype.constructor = ConversationPage;

/**
 * Build an instance of ConversationInstance
 *
 * @param {obj} payload - Payload response from the API
 *
 * @returns ConversationInstance
 */
ConversationPage.prototype.getInstance = function getInstance(payload) {
  return new ConversationInstance(
    this._version,
    payload
  );
};


/**
 * Initialize the ConversationList
 *
 * @param {Version} version - Version that contains the resource
 *
 * @returns ConversationList
 */
function ConversationList(version) {
  function ConversationListInstance(sid) {
    return ConversationListInstance.get(sid);
  }

  ConversationListInstance._version = version;
  // Path Solution
  ConversationListInstance._solution = {};

  // Components
  ConversationListInstance._inProgress = undefined;
  ConversationListInstance._completed = undefined;

  Object.defineProperty(ConversationListInstance,
    'inProgress', {
    get: function inProgress() {
      if (!this._inProgress) {
        this._inProgress = new InProgressList(
          this._version
        );
      }

      return this._inProgress;
    },
  });

  Object.defineProperty(ConversationListInstance,
    'completed', {
    get: function completed() {
      if (!this._completed) {
        this._completed = new CompletedList(
          this._version
        );
      }

      return this._completed;
    },
  });

  /**
   * Constructs a ConversationContext
   *
   * @param {string} sid - The sid
   *
   * @returns ConversationContext
   */
  ConversationListInstance.get = function get(sid) {
    return new ConversationContext(
      this._version,
      sid
    );
  };

  return ConversationListInstance;
}


/**
 * Initialize the ConversationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 *
 * @returns {ConversationContext}
 */
function ConversationInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    duration: deserialize.integer(payload.duration), // jshint ignore:line,
    dateCreated: deserialize.iso8601DateTime(payload.date_created), // jshint ignore:line,
    startTime: deserialize.iso8601DateTime(payload.start_time), // jshint ignore:line,
    endTime: deserialize.iso8601DateTime(payload.end_time), // jshint ignore:line,
    accountSid: payload.account_sid, // jshint ignore:line,
    url: payload.url, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this._properties.sid,
  };
}

_.extend(ConversationInstance.prototype, InstanceResource.prototype);
ConversationInstance.prototype.constructor = ConversationInstance;

Object.defineProperty(ConversationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConversationContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'status', {
  get: function() {
    return this._properties.status;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'duration', {
  get: function() {
    return this._properties.duration;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'startTime', {
  get: function() {
    return this._properties.startTime;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'endTime', {
  get: function() {
    return this._properties.endTime;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConversationInstance.prototype,
  'url', {
  get: function() {
    return this._properties.url;
  },
});

/**
 * Fetch a ConversationInstance
 *
 * @returns Fetched ConversationInstance
 */
ConversationInstance.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConversationInstance(
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

/**
 * Access the participants
 *
 * @returns participants
 */
ConversationInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};


/**
 * Initialize the ConversationContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} sid - The sid
 *
 * @returns {ConversationContext}
 */
function ConversationContext(version, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Conversations/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._participants = undefined;
}

_.extend(ConversationContext.prototype, InstanceContext.prototype);
ConversationContext.prototype.constructor = ConversationContext;

/**
 * Fetch a ConversationInstance
 *
 * @returns Fetched ConversationInstance
 */
ConversationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConversationInstance(
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

Object.defineProperty(ConversationContext.prototype,
  'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.sid
      );
    }
    return this._participants;
  },
});

module.exports = {
  ConversationPage: ConversationPage,
  ConversationList: ConversationList,
  ConversationInstance: ConversationInstance,
  ConversationContext: ConversationContext
};
