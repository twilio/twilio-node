'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var InteractionList = require('./conversation/interaction').InteractionList;
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var ParticipantList = require('./conversation/participant').ParticipantList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ConversationList;
var ConversationPage;
var ConversationInstance;
var ConversationContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationList
 * @description Initialize the ConversationList
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {string} serviceSid - Service Sid.
 */
/* jshint ignore:end */
ConversationList = function ConversationList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function conversations
   * @memberof Twilio.Preview.Conversations.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.Conversations.ServiceContext.ConversationContext}
   */
  /* jshint ignore:end */
  function ConversationListInstance(sid) {
    return ConversationListInstance.get(sid);
  }

  ConversationListInstance._version = version;
  // Path Solution
  ConversationListInstance._solution = {
    serviceSid: serviceSid
  };
  ConversationListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Conversations' // jshint ignore:line
  )(ConversationListInstance._solution);
  /* jshint ignore:start */
  /**
   * Streams ConversationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this Conversation.
   * @param {conversation.status} [opts.status] - The Status of this Conversation
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
  ConversationListInstance.each = function each(opts, callback) {
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
   * @description Lists ConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this Conversation.
   * @param {conversation.status} [opts.status] - The Status of this Conversation
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
  ConversationListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ConversationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this Conversation.
   * @param {conversation.status} [opts.status] - The Status of this Conversation
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConversationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'UniqueName': _.get(opts, 'uniqueName'),
      'Status': _.get(opts, 'status'),
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
      deferred.resolve(new ConversationPage(
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
   * create a ConversationInstance
   *
   * @function create
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.uniqueName] -
   *          A unique, developer assigned name of this Conversation.
   * @param {number} [opts.ttl] -
   *          How long will this conversations stay open, in seconds.
   * @param {conversation.status} [opts.status] - The Status of this Conversation
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ConversationInstance
   */
  /* jshint ignore:end */
  ConversationListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'UniqueName': _.get(opts, 'uniqueName'),
      'Ttl': _.get(opts, 'ttl'),
      'Status': _.get(opts, 'status')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ConversationInstance(
        this._version,
        payload,
        this._solution.serviceSid,
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
   * Constructs a conversation
   *
   * @function get
   * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationList
   * @instance
   *
   * @param {string} sid - A string that uniquely identifies this Conversation.
   *
   * @returns {Twilio.Preview.Conversations.ServiceContext.ConversationContext}
   */
  /* jshint ignore:end */
  ConversationListInstance.get = function get(sid) {
    return new ConversationContext(
      this._version,
      this._solution.serviceSid,
      sid
    );
  };

  return ConversationListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationPage
 * @augments Page
 * @description Initialize the ConversationPage
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ConversationPage
 */
/* jshint ignore:end */
ConversationPage = function ConversationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ConversationPage.prototype, Page.prototype);
ConversationPage.prototype.constructor = ConversationPage;

/* jshint ignore:start */
/**
 * Build an instance of ConversationInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationPage
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
    payload,
    this._solution.serviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationInstance
 * @description Initialize the ConversationContext
 *
 * @property {string} sid - A string that uniquely identifies this Conversation.
 * @property {string} serviceSid - Service Sid.
 * @property {string} accountSid - Account Sid.
 * @property {string} uniqueName -
 *          A unique, developer assigned name of this Conversation.
 * @property {number} ttl - How long will this conversations stay open, in seconds.
 * @property {conversation.status} status - The Status of this Conversation
 * @property {Date} startTime - The date this Conversation was started
 * @property {Date} endTime - The date this Conversation was ended
 * @property {Date} dateCreated - The date this Conversation was created
 * @property {Date} dateUpdated - The date this Conversation was updated
 * @property {string} url - The URL of this Conversation.
 * @property {string} links - Nested resource URLs.
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - Service Sid.
 * @param {sid_like} sid - A string that uniquely identifies this Conversation.
 */
/* jshint ignore:end */
ConversationInstance = function ConversationInstance(version, payload,
                                                      serviceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.ttl = deserialize.integer(payload.ttl); // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(ConversationInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConversationContext(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ConversationInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationInstance
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
 * remove a ConversationInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConversationInstance
 */
/* jshint ignore:end */
ConversationInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a ConversationInstance
 *
 * @function update
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.uniqueName] -
 *          A unique, developer assigned name of this Conversation.
 * @param {number} [opts.ttl] -
 *          How long will this conversations stay open, in seconds.
 * @param {conversation.status} [opts.status] - The Status of this Conversation
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConversationInstance
 */
/* jshint ignore:end */
ConversationInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the interactions
 *
 * @function interactions
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationInstance
 * @instance
 *
 * @returns {Twilio.Preview.Conversations.ServiceContext.ConversationContext.InteractionList}
 */
/* jshint ignore:end */
ConversationInstance.prototype.interactions = function interactions() {
  return this._proxy.interactions;
};

/* jshint ignore:start */
/**
 * Access the participants
 *
 * @function participants
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationInstance
 * @instance
 *
 * @returns {Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList}
 */
/* jshint ignore:end */
ConversationInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Preview.Conversations.ServiceContext.ConversationContext
 * @description Initialize the ConversationContext
 *
 * @property {Twilio.Preview.Conversations.ServiceContext.ConversationContext.InteractionList} interactions -
 *          interactions resource
 * @property {Twilio.Preview.Conversations.ServiceContext.ConversationContext.ParticipantList} participants -
 *          participants resource
 *
 * @param {Twilio.Preview.Conversations} version - Version of the resource
 * @param {sid} serviceSid - Service Sid.
 * @param {sid_like} sid - A string that uniquely identifies this Conversation.
 */
/* jshint ignore:end */
ConversationContext = function ConversationContext(version, serviceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Conversations/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._interactions = undefined;
  this._participants = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ConversationInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext
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
      this._solution.serviceSid,
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
 * remove a ConversationInstance
 *
 * @function remove
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConversationInstance
 */
/* jshint ignore:end */
ConversationContext.prototype.remove = function remove(callback) {
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
 * update a ConversationInstance
 *
 * @function update
 * @memberof Twilio.Preview.Conversations.ServiceContext.ConversationContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.uniqueName] -
 *          A unique, developer assigned name of this Conversation.
 * @param {number} [opts.ttl] -
 *          How long will this conversations stay open, in seconds.
 * @param {conversation.status} [opts.status] - The Status of this Conversation
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConversationInstance
 */
/* jshint ignore:end */
ConversationContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'UniqueName': _.get(opts, 'uniqueName'),
    'Ttl': _.get(opts, 'ttl'),
    'Status': _.get(opts, 'status')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ConversationInstance(
      this._version,
      payload,
      this._solution.serviceSid,
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
  'interactions', {
  get: function() {
    if (!this._interactions) {
      this._interactions = new InteractionList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._interactions;
  }
});

Object.defineProperty(ConversationContext.prototype,
  'participants', {
  get: function() {
    if (!this._participants) {
      this._participants = new ParticipantList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._participants;
  }
});

module.exports = {
  ConversationList: ConversationList,
  ConversationPage: ConversationPage,
  ConversationInstance: ConversationInstance,
  ConversationContext: ConversationContext
};
