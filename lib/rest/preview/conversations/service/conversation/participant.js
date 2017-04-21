'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var ParticipantList;
var ParticipantPage;
var ParticipantInstance;
var ParticipantContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList
 * @description Initialize the ParticipantList
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 * @param {string} conversationSid - Conversation Sid.
 */
/* jshint ignore:end */
ParticipantList = function ParticipantList(version, serviceSid, conversationSid)
                                            {
  /* jshint ignore:start */
  /**
   * @function participants
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantContext}
   */
  /* jshint ignore:end */
  function ParticipantListInstance(sid) {
    return ParticipantListInstance.get(sid);
  }

  ParticipantListInstance._version = version;
  // Path Solution
  ParticipantListInstance._solution = {
    serviceSid: serviceSid,
    conversationSid: conversationSid
  };
  ParticipantListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants' // jshint ignore:line
  )(ParticipantListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams ParticipantInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.identifier] -
   *          The Participant's contact identifier, normally a phone number.
   * @param {participant.channel} [opts.channel] - The Channel of this Participant
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
  ParticipantListInstance.each = function each(opts, callback) {
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
   * @description Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.identifier] -
   *          The Participant's contact identifier, normally a phone number.
   * @param {participant.channel} [opts.channel] - The Channel of this Participant
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
  ParticipantListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.identifier] -
   *          The Participant's contact identifier, normally a phone number.
   * @param {participant.channel} [opts.channel] - The Channel of this Participant
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ParticipantListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Identifier': _.get(opts, 'identifier'),
      'Channel': _.get(opts, 'channel'),
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
      deferred.resolve(new ParticipantPage(
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
   * create a ParticipantInstance
   *
   * @function create
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList
   * @instance
   *
   * @param {object} opts - ...
   * @param {participant.channel} opts.channel - The Channel of this Participant
   * @param {string} opts.identifier -
   *          The Participant's contact identifier, normally a phone number.
   * @param {string} [opts.friendlyName] -
   *          A human readable description of this resource
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ParticipantInstance
   */
  /* jshint ignore:end */
  ParticipantListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.channel)) {
      throw new Error('Required parameter "opts.channel" missing.');
    }
    if (_.isUndefined(opts.identifier)) {
      throw new Error('Required parameter "opts.identifier" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Channel': _.get(opts, 'channel'),
      'Identifier': _.get(opts, 'identifier'),
      'FriendlyName': _.get(opts, 'friendlyName')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ParticipantInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.conversationSid,
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
   * Constructs a participant
   *
   * @function get
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList
   * @instance
   *
   * @param {string} sid - A string that uniquely identifies this Participant.
   *
   * @returns {Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantContext}
   */
  /* jshint ignore:end */
  ParticipantListInstance.get = function get(sid) {
    return new ParticipantContext(
      this._version,
      this._solution.serviceSid,
      this._solution.conversationSid,
      sid
    );
  };

  return ParticipantListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantPage
 * @augments Page
 * @description Initialize the ParticipantPage
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ParticipantPage
 */
/* jshint ignore:end */
ParticipantPage = function ParticipantPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ParticipantPage.prototype, Page.prototype);
ParticipantPage.prototype.constructor = ParticipantPage;

/* jshint ignore:start */
/**
 * Build an instance of ParticipantInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ParticipantInstance
 */
/* jshint ignore:end */
ParticipantPage.prototype.getInstance = function getInstance(payload) {
  return new ParticipantInstance(
    this._version,
    payload,
    this._solution.serviceSid,
    this._solution.conversationSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantInstance
 * @description Initialize the ParticipantContext
 *
 * @property {string} sid - A string that uniquely identifies this Participant.
 * @property {string} conversationSid - Conversation Sid.
 * @property {string} serviceSid - Service Sid.
 * @property {string} accountSid - Account Sid.
 * @property {string} friendlyName - A human readable description of this resource
 * @property {participant.channel} channel - The Channel of this Participant
 * @property {string} identifier -
 *          The Participant's contact identifier, normally a phone number.
 * @property {string} proxyIdentifier -
 *          What this Participant communicates with, normally a phone number.
 * @property {Date} dateCreated - The date this Participant was created
 * @property {Date} dateUpdated - The date this Participant was updated
 * @property {string} url - The URL of this resource.
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {sid} conversationSid - Conversation Sid.
 * @param {sid} sid - A string that uniquely identifies this Participant.
 */
/* jshint ignore:end */
ParticipantInstance = function ParticipantInstance(version, payload, serviceSid,
                                                    conversationSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.conversationSid = payload.conversation_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.channel = payload.channel; // jshint ignore:line
  this.identifier = payload.identifier; // jshint ignore:line
  this.proxyIdentifier = payload.proxy_identifier; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    conversationSid: conversationSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(ParticipantInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ParticipantContext(
        this._version,
        this._solution.serviceSid,
        this._solution.conversationSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a ParticipantInstance
 *
 * @function update
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {participant.channel} [opts.channel] - The Channel of this Participant
 * @param {string} [opts.identifier] -
 *          The Participant's contact identifier, normally a phone number.
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantContext
 * @description Initialize the ParticipantContext
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {sid} serviceSid - Service Sid.
 * @param {sid} conversationSid - Conversation Sid.
 * @param {sid} sid - A string that uniquely identifies this Participant.
 */
/* jshint ignore:end */
ParticipantContext = function ParticipantContext(version, serviceSid,
                                                  conversationSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    conversationSid: conversationSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Conversations/<%= conversationSid %>/Participants/<%= sid %>' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a ParticipantInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.conversationSid,
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
 * remove a ParticipantInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.remove = function remove(callback) {
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

/* jshint ignore:start */
/**
 * update a ParticipantInstance
 *
 * @function update
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {participant.channel} [opts.channel] - The Channel of this Participant
 * @param {string} [opts.identifier] -
 *          The Participant's contact identifier, normally a phone number.
 * @param {string} [opts.friendlyName] -
 *          A human readable description of this resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ParticipantInstance
 */
/* jshint ignore:end */
ParticipantContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Channel': _.get(opts, 'channel'),
    'Identifier': _.get(opts, 'identifier'),
    'FriendlyName': _.get(opts, 'friendlyName')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ParticipantInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.conversationSid,
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
  ParticipantList: ParticipantList,
  ParticipantPage: ParticipantPage,
  ParticipantInstance: ParticipantInstance,
  ParticipantContext: ParticipantContext
};
