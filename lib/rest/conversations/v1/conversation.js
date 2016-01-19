'use strict';

var _ = require('lodash');
var CompletedList = require('./conversation/completed').CompletedList;
var InProgressList = require('./conversation/inProgress').InProgressList;
var InstanceContext = require('../../../base/InstanceContext');
var InstanceResource = require('../../../base/InstanceResource');
var ListResource = require('../../../base/ListResource');
var Page = require('../../../base/Page');
var ParticipantList = require('./conversation/participant').ParticipantList;
var values = require('../../../base/values');

var ConversationPage;
var ConversationList;
var ConversationInstance;
var ConversationContext;

/**
 * Initialize the ConversationPage
 *
 * :param Version version: Version that contains the resource
 * :param Response response: Response from the API
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
 * :param dict payload: Payload response from the API
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
 * :param Version version: Version that contains the resource
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
   * :param sid - The sid
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
 * @param {sid} sid: The sid
 *
 * @returns {ConversationContext}
 */
function ConversationInstance(version, payload, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    sid: payload.sid, // jshint ignore:line,
    status: payload.status, // jshint ignore:line,
    duration: payload.duration, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    startTime: payload.start_time, // jshint ignore:line,
    endTime: payload.end_time, // jshint ignore:line,
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
ConversationInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
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
ConversationContext.prototype.fetch = function fetch() {
  var version = this._version;
  var solution = this._solution;
  var params = values.of({});

  var promise = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  promise = promise.then(function(payload) {
    return new ConversationInstance(
      version,
      payload,
      solution.sid
    );
  });

  return promise;
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
