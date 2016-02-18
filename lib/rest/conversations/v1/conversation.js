'use strict';

var _ = require('lodash');
var Q = require('q');
var CompletedList = require('./conversation/completed').CompletedList;
var InProgressList = require('./conversation/inProgress').InProgressList;
var Page = require('../../../base/Page');
var ParticipantList = require('./conversation/participant').ParticipantList;
var deserialize = require('../../../base/deserialize');

var ConversationPage;
var ConversationList;
var ConversationInstance;
var ConversationContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationPage
 * @augments Page
 * @description Initialize the ConversationPage
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} response - Response from the API
 *
 * @returns ConversationPage
 */
/* jshint ignore:end */
function ConversationPage(version, response) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {};
}

_.extend(ConversationPage.prototype, Page.prototype);
ConversationPage.prototype.constructor = ConversationPage;

/* jshint ignore:start */
/**
 * Build an instance of ConversationInstance
 *
 * @function getInstance
 * @memberof Twilio.Conversations.V1.ConversationPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ConversationInstance
 */
/* jshint ignore:end */
ConversationPage.prototype.getInstance = function getInstance(payload) {
  return new ConversationInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationList
 * @description Initialize the ConversationList
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 */
/* jshint ignore:end */
function ConversationList(version) {
  /* jshint ignore:start */
  /**
   * @function conversations
   * @memberof Twilio.Conversations.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Conversations.V1.ConversationContext}
   */
  /* jshint ignore:end */
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

  /* jshint ignore:start */
  /**
   * Constructs a conversation
   *
   * @function get
   * @memberof Twilio.Conversations.V1.ConversationList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Conversations.V1.ConversationContext}
   */
  /* jshint ignore:end */
  ConversationListInstance.get = function get(sid) {
    return new ConversationContext(
      this._version,
      sid
    );
  };

  return ConversationListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationInstance
 * @description Initialize the ConversationContext
 *
 * @property {string} sid - The sid
 * @property {conversation.status} status - The status
 * @property {number} duration - The duration
 * @property {Date} dateCreated - The date_created
 * @property {Date} startTime - The start_time
 * @property {Date} endTime - The end_time
 * @property {string} accountSid - The account_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function ConversationInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.duration = deserialize.integer(payload.duration); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
}

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

/* jshint ignore:start */
/**
 * fetch a ConversationInstance
 *
 * @function fetch
 * @memberof Twilio.Conversations.V1.ConversationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConversationInstance
 */
/* jshint ignore:end */
ConversationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Access the participants
 *
 * @function participants
 * @memberof Twilio.Conversations.V1.ConversationInstance
 * @instance
 *
 * @returns {Twilio.Conversations.V1.ConversationContext.ParticipantList}
 */
/* jshint ignore:end */
ConversationInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Conversations.V1.ConversationContext
 * @description Initialize the ConversationContext
 *
 * @property {Twilio.Conversations.V1.ConversationContext.ParticipantList} participants -
 *          participants resource
 *
 * @param {Twilio.Conversations.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
function ConversationContext(version, sid) {
  this._version = version;

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

/* jshint ignore:start */
/**
 * fetch a ConversationInstance
 *
 * @function fetch
 * @memberof Twilio.Conversations.V1.ConversationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConversationInstance
 */
/* jshint ignore:end */
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
