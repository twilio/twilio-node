'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var InviteList = require('./channel/invite').InviteList;
var MemberList = require('./channel/member').MemberList;
var MessageList = require('./channel/message').MessageList;
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ChannelList;
var ChannelPage;
var ChannelInstance;
var ChannelContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelList
 * @description Initialize the ChannelList
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {string} serviceSid - The service_sid
 */
/* jshint ignore:end */
ChannelList = function ChannelList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function channels
   * @memberof Twilio.IpMessaging.V1.ServiceContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext}
   */
  /* jshint ignore:end */
  function ChannelListInstance(sid) {
    return ChannelListInstance.get(sid);
  }

  ChannelListInstance._version = version;
  // Path Solution
  ChannelListInstance._solution = {
    serviceSid: serviceSid
  };
  ChannelListInstance._uri = _.template(
    '/Services/<%= serviceSid %>/Channels' // jshint ignore:line
  )(ChannelListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ChannelInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {string} [opts.attributes] - The attributes
   * @param {channel.channel_type} [opts.type] - The type
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ChannelInstance
   */
  /* jshint ignore:end */
  ChannelListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'Attributes': _.get(opts, 'attributes'),
      'Type': _.get(opts, 'type')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ChannelInstance(
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
   * Streams ChannelInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {channel.channel_type|list} [opts.type] - The type
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
  ChannelListInstance.each = function each(opts, callback) {
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
   * @description Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {channel.channel_type|list} [opts.type] - The type
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
  ChannelListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {channel.channel_type|list} [opts.type] - The type
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ChannelListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Type': _.get(opts, 'type'),
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
      deferred.resolve(new ChannelPage(
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
   * Retrieve a single target page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param {channel.channel_type|list} [opts.type] - The type
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ChannelListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ChannelPage(
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
   * Constructs a channel
   *
   * @function get
   * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext}
   */
  /* jshint ignore:end */
  ChannelListInstance.get = function get(sid) {
    return new ChannelContext(
      this._version,
      this._solution.serviceSid,
      sid
    );
  };

  return ChannelListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelPage
 * @augments Page
 * @description Initialize the ChannelPage
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ChannelPage
 */
/* jshint ignore:end */
ChannelPage = function ChannelPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ChannelPage.prototype, Page.prototype);
ChannelPage.prototype.constructor = ChannelPage;

/* jshint ignore:start */
/**
 * Build an instance of ChannelInstance
 *
 * @function getInstance
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ChannelInstance
 */
/* jshint ignore:end */
ChannelPage.prototype.getInstance = function getInstance(payload) {
  return new ChannelInstance(
    this._version,
    payload,
    this._solution.serviceSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @description Initialize the ChannelContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} serviceSid - The service_sid
 * @property {string} friendlyName - The friendly_name
 * @property {string} uniqueName - The unique_name
 * @property {string} attributes - The attributes
 * @property {channel.channel_type} type - The type
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} createdBy - The created_by
 * @property {number} membersCount - The members_count
 * @property {number} messagesCount - The messages_count
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
ChannelInstance = function ChannelInstance(version, payload, serviceSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.uniqueName = payload.unique_name; // jshint ignore:line
  this.attributes = payload.attributes; // jshint ignore:line
  this.type = payload.type; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.createdBy = payload.created_by; // jshint ignore:line
  this.membersCount = deserialize.integer(payload.members_count); // jshint ignore:line
  this.messagesCount = deserialize.integer(payload.messages_count); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    serviceSid: serviceSid,
    sid: sid || this.sid,
  };
};

Object.defineProperty(ChannelInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ChannelContext(
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
 * fetch a ChannelInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChannelInstance
 */
/* jshint ignore:end */
ChannelInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ChannelInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChannelInstance
 */
/* jshint ignore:end */
ChannelInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a ChannelInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.uniqueName] - The unique_name
 * @param {string} [opts.attributes] - The attributes
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChannelInstance
 */
/* jshint ignore:end */
ChannelInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the members
 *
 * @function members
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @instance
 *
 * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MemberList}
 */
/* jshint ignore:end */
ChannelInstance.prototype.members = function members() {
  return this._proxy.members;
};

/* jshint ignore:start */
/**
 * Access the messages
 *
 * @function messages
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @instance
 *
 * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MessageList}
 */
/* jshint ignore:end */
ChannelInstance.prototype.messages = function messages() {
  return this._proxy.messages;
};

/* jshint ignore:start */
/**
 * Access the invites
 *
 * @function invites
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelInstance
 * @instance
 *
 * @returns {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList}
 */
/* jshint ignore:end */
ChannelInstance.prototype.invites = function invites() {
  return this._proxy.invites;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.IpMessaging.V1.ServiceContext.ChannelContext
 * @description Initialize the ChannelContext
 *
 * @property {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MemberList} members -
 *          members resource
 * @property {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.MessageList} messages -
 *          messages resource
 * @property {Twilio.IpMessaging.V1.ServiceContext.ChannelContext.InviteList} invites -
 *          invites resource
 *
 * @param {Twilio.IpMessaging.V1} version - Version of the resource
 * @param {sid} serviceSid - The service_sid
 * @param {sid_like} sid - The sid
 */
/* jshint ignore:end */
ChannelContext = function ChannelContext(version, serviceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    serviceSid: serviceSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= serviceSid %>/Channels/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._members = undefined;
  this._messages = undefined;
  this._invites = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ChannelInstance
 *
 * @function fetch
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChannelInstance
 */
/* jshint ignore:end */
ChannelContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ChannelInstance(
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
 * remove a ChannelInstance
 *
 * @function remove
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChannelInstance
 */
/* jshint ignore:end */
ChannelContext.prototype.remove = function remove(callback) {
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
 * update a ChannelInstance
 *
 * @function update
 * @memberof Twilio.IpMessaging.V1.ServiceContext.ChannelContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.uniqueName] - The unique_name
 * @param {string} [opts.attributes] - The attributes
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ChannelInstance
 */
/* jshint ignore:end */
ChannelContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'UniqueName': _.get(opts, 'uniqueName'),
    'Attributes': _.get(opts, 'attributes')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ChannelInstance(
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

Object.defineProperty(ChannelContext.prototype,
  'members', {
  get: function() {
    if (!this._members) {
      this._members = new MemberList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._members;
  }
});

Object.defineProperty(ChannelContext.prototype,
  'messages', {
  get: function() {
    if (!this._messages) {
      this._messages = new MessageList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._messages;
  }
});

Object.defineProperty(ChannelContext.prototype,
  'invites', {
  get: function() {
    if (!this._invites) {
      this._invites = new InviteList(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    }
    return this._invites;
  }
});

module.exports = {
  ChannelList: ChannelList,
  ChannelPage: ChannelPage,
  ChannelInstance: ChannelInstance,
  ChannelContext: ChannelContext
};
