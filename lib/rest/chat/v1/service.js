'use strict';

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var ChannelList = require('./service/channel').ChannelList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var RoleList = require('./service/role').RoleList;
var UserList = require('./service/user').UserList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var ServiceList;
var ServicePage;
var ServiceInstance;
var ServiceContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceList
 * @description Initialize the ServiceList
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 */
/* jshint ignore:end */
ServiceList = function ServiceList(version) {
  /* jshint ignore:start */
  /**
   * @function services
   * @memberof Twilio.Chat.V1
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Chat.V1.ServiceContext}
   */
  /* jshint ignore:end */
  function ServiceListInstance(sid) {
    return ServiceListInstance.get(sid);
  }

  ServiceListInstance._version = version;
  // Path Solution
  ServiceListInstance._solution = {};
  ServiceListInstance._uri = _.template(
    '/Services' // jshint ignore:line
  )(ServiceListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Chat.V1.ServiceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName - The friendly_name
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed ServiceInstance
   */
  /* jshint ignore:end */
  ServiceListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName')
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(
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

  /* jshint ignore:start */
  /**
   * Streams ServiceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
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
  ServiceListInstance.each = function each(opts, callback) {
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
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
  ServiceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.page = function page(opts, callback) {
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
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
      deferred.resolve(new ServicePage(
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
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V1.ServiceList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ServiceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({
      method: 'GET',
      uri: targetUrl
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(
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
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.Chat.V1.ServiceList
   * @instance
   *
   * @param {string} sid - The sid
   *
   * @returns {Twilio.Chat.V1.ServiceContext}
   */
  /* jshint ignore:end */
  ServiceListInstance.get = function get(sid) {
    return new ServiceContext(
      this._version,
      sid
    );
  };

  return ServiceListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServicePage
 * @augments Page
 * @description Initialize the ServicePage
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns ServicePage
 */
/* jshint ignore:end */
ServicePage = function ServicePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ServicePage.prototype, Page.prototype);
ServicePage.prototype.constructor = ServicePage;

/* jshint ignore:start */
/**
 * Build an instance of ServiceInstance
 *
 * @function getInstance
 * @memberof Twilio.Chat.V1.ServicePage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns ServiceInstance
 */
/* jshint ignore:end */
ServicePage.prototype.getInstance = function getInstance(payload) {
  return new ServiceInstance(
    this._version,
    payload
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceInstance
 * @description Initialize the ServiceContext
 *
 * @property {string} sid - The sid
 * @property {string} accountSid - The account_sid
 * @property {string} friendlyName - The friendly_name
 * @property {Date} dateCreated - The date_created
 * @property {Date} dateUpdated - The date_updated
 * @property {string} defaultServiceRoleSid - The default_service_role_sid
 * @property {string} defaultChannelRoleSid - The default_channel_role_sid
 * @property {string} defaultChannelCreatorRoleSid -
 *          The default_channel_creator_role_sid
 * @property {string} readStatusEnabled - The read_status_enabled
 * @property {string} reachabilityEnabled - The reachability_enabled
 * @property {number} typingIndicatorTimeout - The typing_indicator_timeout
 * @property {number} consumptionReportInterval - The consumption_report_interval
 * @property {string} limits - The limits
 * @property {string} webhooks - The webhooks
 * @property {string} preWebhookUrl - The pre_webhook_url
 * @property {string} postWebhookUrl - The post_webhook_url
 * @property {string} webhookMethod - The webhook_method
 * @property {string} webhookFilters - The webhook_filters
 * @property {string} notifications - The notifications
 * @property {string} url - The url
 * @property {string} links - The links
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
ServiceInstance = function ServiceInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.defaultServiceRoleSid = payload.default_service_role_sid; // jshint ignore:line
  this.defaultChannelRoleSid = payload.default_channel_role_sid; // jshint ignore:line
  this.defaultChannelCreatorRoleSid = payload.default_channel_creator_role_sid; // jshint ignore:line
  this.readStatusEnabled = payload.read_status_enabled; // jshint ignore:line
  this.reachabilityEnabled = payload.reachability_enabled; // jshint ignore:line
  this.typingIndicatorTimeout = deserialize.integer(payload.typing_indicator_timeout); // jshint ignore:line
  this.consumptionReportInterval = deserialize.integer(payload.consumption_report_interval); // jshint ignore:line
  this.limits = payload.limits; // jshint ignore:line
  this.webhooks = payload.webhooks; // jshint ignore:line
  this.preWebhookUrl = payload.pre_webhook_url; // jshint ignore:line
  this.postWebhookUrl = payload.post_webhook_url; // jshint ignore:line
  this.webhookMethod = payload.webhook_method; // jshint ignore:line
  this.webhookFilters = payload.webhook_filters; // jshint ignore:line
  this.notifications = payload.notifications; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    sid: sid || this.sid,
  };
};

Object.defineProperty(ServiceInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ServiceContext(
        this._version,
        this._solution.sid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V1.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V1.ServiceInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Chat.V1.ServiceInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.defaultServiceRoleSid] - The default_service_role_sid
 * @param {string} [opts.defaultChannelRoleSid] - The default_channel_role_sid
 * @param {string} [opts.defaultChannelCreatorRoleSid] -
 *          The default_channel_creator_role_sid
 * @param {string} [opts.readStatusEnabled] - The read_status_enabled
 * @param {string} [opts.reachabilityEnabled] - The reachability_enabled
 * @param {number} [opts.typingIndicatorTimeout] - The typing_indicator_timeout
 * @param {number} [opts.consumptionReportInterval] -
 *          The consumption_report_interval
 * @param {string} [opts.notifications.newMessage.enabled] -
 *          The notifications.new_message.enabled
 * @param {string} [opts.notifications.newMessage.template] -
 *          The notifications.new_message.template
 * @param {string} [opts.notifications.addedToChannel.enabled] -
 *          The notifications.added_to_channel.enabled
 * @param {string} [opts.notifications.addedToChannel.template] -
 *          The notifications.added_to_channel.template
 * @param {string} [opts.notifications.removedFromChannel.enabled] -
 *          The notifications.removed_from_channel.enabled
 * @param {string} [opts.notifications.removedFromChannel.template] -
 *          The notifications.removed_from_channel.template
 * @param {string} [opts.notifications.invitedToChannel.enabled] -
 *          The notifications.invited_to_channel.enabled
 * @param {string} [opts.notifications.invitedToChannel.template] -
 *          The notifications.invited_to_channel.template
 * @param {string} [opts.preWebhookUrl] - The pre_webhook_url
 * @param {string} [opts.postWebhookUrl] - The post_webhook_url
 * @param {string} [opts.webhookMethod] - The webhook_method
 * @param {string|list} [opts.webhookFilters] - The webhook_filters
 * @param {string} [opts.webhooks.onMessageSend.url] -
 *          The webhooks.on_message_send.url
 * @param {string} [opts.webhooks.onMessageSend.method] -
 *          The webhooks.on_message_send.method
 * @param {string} [opts.webhooks.onMessageSend.format] -
 *          The webhooks.on_message_send.format
 * @param {string} [opts.webhooks.onMessageUpdate.url] -
 *          The webhooks.on_message_update.url
 * @param {string} [opts.webhooks.onMessageUpdate.method] -
 *          The webhooks.on_message_update.method
 * @param {string} [opts.webhooks.onMessageUpdate.format] -
 *          The webhooks.on_message_update.format
 * @param {string} [opts.webhooks.onMessageRemove.url] -
 *          The webhooks.on_message_remove.url
 * @param {string} [opts.webhooks.onMessageRemove.method] -
 *          The webhooks.on_message_remove.method
 * @param {string} [opts.webhooks.onMessageRemove.format] -
 *          The webhooks.on_message_remove.format
 * @param {string} [opts.webhooks.onChannelAdd.url] -
 *          The webhooks.on_channel_add.url
 * @param {string} [opts.webhooks.onChannelAdd.method] -
 *          The webhooks.on_channel_add.method
 * @param {string} [opts.webhooks.onChannelAdd.format] -
 *          The webhooks.on_channel_add.format
 * @param {string} [opts.webhooks.onChannelDestroy.url] -
 *          The webhooks.on_channel_destroy.url
 * @param {string} [opts.webhooks.onChannelDestroy.method] -
 *          The webhooks.on_channel_destroy.method
 * @param {string} [opts.webhooks.onChannelDestroy.format] -
 *          The webhooks.on_channel_destroy.format
 * @param {string} [opts.webhooks.onChannelUpdate.url] -
 *          The webhooks.on_channel_update.url
 * @param {string} [opts.webhooks.onChannelUpdate.method] -
 *          The webhooks.on_channel_update.method
 * @param {string} [opts.webhooks.onChannelUpdate.format] -
 *          The webhooks.on_channel_update.format
 * @param {string} [opts.webhooks.onMemberAdd.url] - The webhooks.on_member_add.url
 * @param {string} [opts.webhooks.onMemberAdd.method] -
 *          The webhooks.on_member_add.method
 * @param {string} [opts.webhooks.onMemberAdd.format] -
 *          The webhooks.on_member_add.format
 * @param {string} [opts.webhooks.onMemberRemove.url] -
 *          The webhooks.on_member_remove.url
 * @param {string} [opts.webhooks.onMemberRemove.method] -
 *          The webhooks.on_member_remove.method
 * @param {string} [opts.webhooks.onMemberRemove.format] -
 *          The webhooks.on_member_remove.format
 * @param {string} [opts.webhooks.onMessageSent.url] -
 *          The webhooks.on_message_sent.url
 * @param {string} [opts.webhooks.onMessageSent.method] -
 *          The webhooks.on_message_sent.method
 * @param {string} [opts.webhooks.onMessageSent.format] -
 *          The webhooks.on_message_sent.format
 * @param {string} [opts.webhooks.onMessageUpdated.url] -
 *          The webhooks.on_message_updated.url
 * @param {string} [opts.webhooks.onMessageUpdated.method] -
 *          The webhooks.on_message_updated.method
 * @param {string} [opts.webhooks.onMessageUpdated.format] -
 *          The webhooks.on_message_updated.format
 * @param {string} [opts.webhooks.onMessageRemoved.url] -
 *          The webhooks.on_message_removed.url
 * @param {string} [opts.webhooks.onMessageRemoved.method] -
 *          The webhooks.on_message_removed.method
 * @param {string} [opts.webhooks.onMessageRemoved.format] -
 *          The webhooks.on_message_removed.format
 * @param {string} [opts.webhooks.onChannelAdded.url] -
 *          The webhooks.on_channel_added.url
 * @param {string} [opts.webhooks.onChannelAdded.method] -
 *          The webhooks.on_channel_added.method
 * @param {string} [opts.webhooks.onChannelAdded.format] -
 *          The webhooks.on_channel_added.format
 * @param {string} [opts.webhooks.onChannelDestroyed.url] -
 *          The webhooks.on_channel_destroyed.url
 * @param {string} [opts.webhooks.onChannelDestroyed.method] -
 *          The webhooks.on_channel_destroyed.method
 * @param {string} [opts.webhooks.onChannelDestroyed.format] -
 *          The webhooks.on_channel_destroyed.format
 * @param {string} [opts.webhooks.onChannelUpdated.url] -
 *          The webhooks.on_channel_updated.url
 * @param {string} [opts.webhooks.onChannelUpdated.method] -
 *          The webhooks.on_channel_updated.method
 * @param {string} [opts.webhooks.onChannelUpdated.format] -
 *          The webhooks.on_channel_updated.format
 * @param {string} [opts.webhooks.onMemberAdded.url] -
 *          The webhooks.on_member_added.url
 * @param {string} [opts.webhooks.onMemberAdded.method] -
 *          The webhooks.on_member_added.method
 * @param {string} [opts.webhooks.onMemberAdded.format] -
 *          The webhooks.on_member_added.format
 * @param {string} [opts.webhooks.onMemberRemoved.url] -
 *          The webhooks.on_member_removed.url
 * @param {string} [opts.webhooks.onMemberRemoved.method] -
 *          The webhooks.on_member_removed.method
 * @param {string} [opts.webhooks.onMemberRemoved.format] -
 *          The webhooks.on_member_removed.format
 * @param {number} [opts.limits.channelMembers] - The limits.channel_members
 * @param {number} [opts.limits.userChannels] - The limits.user_channels
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the channels
 *
 * @function channels
 * @memberof Twilio.Chat.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Chat.V1.ServiceContext.ChannelList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.channels = function channels() {
  return this._proxy.channels;
};

/* jshint ignore:start */
/**
 * Access the roles
 *
 * @function roles
 * @memberof Twilio.Chat.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Chat.V1.ServiceContext.RoleList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.roles = function roles() {
  return this._proxy.roles;
};

/* jshint ignore:start */
/**
 * Access the users
 *
 * @function users
 * @memberof Twilio.Chat.V1.ServiceInstance
 * @instance
 *
 * @returns {Twilio.Chat.V1.ServiceContext.UserList}
 */
/* jshint ignore:end */
ServiceInstance.prototype.users = function users() {
  return this._proxy.users;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Chat.V1.ServiceContext
 * @description Initialize the ServiceContext
 *
 * @property {Twilio.Chat.V1.ServiceContext.ChannelList} channels -
 *          channels resource
 * @property {Twilio.Chat.V1.ServiceContext.RoleList} roles - roles resource
 * @property {Twilio.Chat.V1.ServiceContext.UserList} users - users resource
 *
 * @param {Twilio.Chat.V1} version - Version of the resource
 * @param {sid} sid - The sid
 */
/* jshint ignore:end */
ServiceContext = function ServiceContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    sid: sid,
  };
  this._uri = _.template(
    '/Services/<%= sid %>' // jshint ignore:line
  )(this._solution);

  // Dependents
  this._channels = undefined;
  this._roles = undefined;
  this._users = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ServiceInstance
 *
 * @function fetch
 * @memberof Twilio.Chat.V1.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(
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

/* jshint ignore:start */
/**
 * remove a ServiceInstance
 *
 * @function remove
 * @memberof Twilio.Chat.V1.ServiceContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.remove = function remove(callback) {
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
 * update a ServiceInstance
 *
 * @function update
 * @memberof Twilio.Chat.V1.ServiceContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.defaultServiceRoleSid] - The default_service_role_sid
 * @param {string} [opts.defaultChannelRoleSid] - The default_channel_role_sid
 * @param {string} [opts.defaultChannelCreatorRoleSid] -
 *          The default_channel_creator_role_sid
 * @param {string} [opts.readStatusEnabled] - The read_status_enabled
 * @param {string} [opts.reachabilityEnabled] - The reachability_enabled
 * @param {number} [opts.typingIndicatorTimeout] - The typing_indicator_timeout
 * @param {number} [opts.consumptionReportInterval] -
 *          The consumption_report_interval
 * @param {string} [opts.notifications.newMessage.enabled] -
 *          The notifications.new_message.enabled
 * @param {string} [opts.notifications.newMessage.template] -
 *          The notifications.new_message.template
 * @param {string} [opts.notifications.addedToChannel.enabled] -
 *          The notifications.added_to_channel.enabled
 * @param {string} [opts.notifications.addedToChannel.template] -
 *          The notifications.added_to_channel.template
 * @param {string} [opts.notifications.removedFromChannel.enabled] -
 *          The notifications.removed_from_channel.enabled
 * @param {string} [opts.notifications.removedFromChannel.template] -
 *          The notifications.removed_from_channel.template
 * @param {string} [opts.notifications.invitedToChannel.enabled] -
 *          The notifications.invited_to_channel.enabled
 * @param {string} [opts.notifications.invitedToChannel.template] -
 *          The notifications.invited_to_channel.template
 * @param {string} [opts.preWebhookUrl] - The pre_webhook_url
 * @param {string} [opts.postWebhookUrl] - The post_webhook_url
 * @param {string} [opts.webhookMethod] - The webhook_method
 * @param {string|list} [opts.webhookFilters] - The webhook_filters
 * @param {string} [opts.webhooks.onMessageSend.url] -
 *          The webhooks.on_message_send.url
 * @param {string} [opts.webhooks.onMessageSend.method] -
 *          The webhooks.on_message_send.method
 * @param {string} [opts.webhooks.onMessageSend.format] -
 *          The webhooks.on_message_send.format
 * @param {string} [opts.webhooks.onMessageUpdate.url] -
 *          The webhooks.on_message_update.url
 * @param {string} [opts.webhooks.onMessageUpdate.method] -
 *          The webhooks.on_message_update.method
 * @param {string} [opts.webhooks.onMessageUpdate.format] -
 *          The webhooks.on_message_update.format
 * @param {string} [opts.webhooks.onMessageRemove.url] -
 *          The webhooks.on_message_remove.url
 * @param {string} [opts.webhooks.onMessageRemove.method] -
 *          The webhooks.on_message_remove.method
 * @param {string} [opts.webhooks.onMessageRemove.format] -
 *          The webhooks.on_message_remove.format
 * @param {string} [opts.webhooks.onChannelAdd.url] -
 *          The webhooks.on_channel_add.url
 * @param {string} [opts.webhooks.onChannelAdd.method] -
 *          The webhooks.on_channel_add.method
 * @param {string} [opts.webhooks.onChannelAdd.format] -
 *          The webhooks.on_channel_add.format
 * @param {string} [opts.webhooks.onChannelDestroy.url] -
 *          The webhooks.on_channel_destroy.url
 * @param {string} [opts.webhooks.onChannelDestroy.method] -
 *          The webhooks.on_channel_destroy.method
 * @param {string} [opts.webhooks.onChannelDestroy.format] -
 *          The webhooks.on_channel_destroy.format
 * @param {string} [opts.webhooks.onChannelUpdate.url] -
 *          The webhooks.on_channel_update.url
 * @param {string} [opts.webhooks.onChannelUpdate.method] -
 *          The webhooks.on_channel_update.method
 * @param {string} [opts.webhooks.onChannelUpdate.format] -
 *          The webhooks.on_channel_update.format
 * @param {string} [opts.webhooks.onMemberAdd.url] - The webhooks.on_member_add.url
 * @param {string} [opts.webhooks.onMemberAdd.method] -
 *          The webhooks.on_member_add.method
 * @param {string} [opts.webhooks.onMemberAdd.format] -
 *          The webhooks.on_member_add.format
 * @param {string} [opts.webhooks.onMemberRemove.url] -
 *          The webhooks.on_member_remove.url
 * @param {string} [opts.webhooks.onMemberRemove.method] -
 *          The webhooks.on_member_remove.method
 * @param {string} [opts.webhooks.onMemberRemove.format] -
 *          The webhooks.on_member_remove.format
 * @param {string} [opts.webhooks.onMessageSent.url] -
 *          The webhooks.on_message_sent.url
 * @param {string} [opts.webhooks.onMessageSent.method] -
 *          The webhooks.on_message_sent.method
 * @param {string} [opts.webhooks.onMessageSent.format] -
 *          The webhooks.on_message_sent.format
 * @param {string} [opts.webhooks.onMessageUpdated.url] -
 *          The webhooks.on_message_updated.url
 * @param {string} [opts.webhooks.onMessageUpdated.method] -
 *          The webhooks.on_message_updated.method
 * @param {string} [opts.webhooks.onMessageUpdated.format] -
 *          The webhooks.on_message_updated.format
 * @param {string} [opts.webhooks.onMessageRemoved.url] -
 *          The webhooks.on_message_removed.url
 * @param {string} [opts.webhooks.onMessageRemoved.method] -
 *          The webhooks.on_message_removed.method
 * @param {string} [opts.webhooks.onMessageRemoved.format] -
 *          The webhooks.on_message_removed.format
 * @param {string} [opts.webhooks.onChannelAdded.url] -
 *          The webhooks.on_channel_added.url
 * @param {string} [opts.webhooks.onChannelAdded.method] -
 *          The webhooks.on_channel_added.method
 * @param {string} [opts.webhooks.onChannelAdded.format] -
 *          The webhooks.on_channel_added.format
 * @param {string} [opts.webhooks.onChannelDestroyed.url] -
 *          The webhooks.on_channel_destroyed.url
 * @param {string} [opts.webhooks.onChannelDestroyed.method] -
 *          The webhooks.on_channel_destroyed.method
 * @param {string} [opts.webhooks.onChannelDestroyed.format] -
 *          The webhooks.on_channel_destroyed.format
 * @param {string} [opts.webhooks.onChannelUpdated.url] -
 *          The webhooks.on_channel_updated.url
 * @param {string} [opts.webhooks.onChannelUpdated.method] -
 *          The webhooks.on_channel_updated.method
 * @param {string} [opts.webhooks.onChannelUpdated.format] -
 *          The webhooks.on_channel_updated.format
 * @param {string} [opts.webhooks.onMemberAdded.url] -
 *          The webhooks.on_member_added.url
 * @param {string} [opts.webhooks.onMemberAdded.method] -
 *          The webhooks.on_member_added.method
 * @param {string} [opts.webhooks.onMemberAdded.format] -
 *          The webhooks.on_member_added.format
 * @param {string} [opts.webhooks.onMemberRemoved.url] -
 *          The webhooks.on_member_removed.url
 * @param {string} [opts.webhooks.onMemberRemoved.method] -
 *          The webhooks.on_member_removed.method
 * @param {string} [opts.webhooks.onMemberRemoved.format] -
 *          The webhooks.on_member_removed.format
 * @param {number} [opts.limits.channelMembers] - The limits.channel_members
 * @param {number} [opts.limits.userChannels] - The limits.user_channels
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ServiceInstance
 */
/* jshint ignore:end */
ServiceContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'FriendlyName': _.get(opts, 'friendlyName'),
    'DefaultServiceRoleSid': _.get(opts, 'defaultServiceRoleSid'),
    'DefaultChannelRoleSid': _.get(opts, 'defaultChannelRoleSid'),
    'DefaultChannelCreatorRoleSid': _.get(opts, 'defaultChannelCreatorRoleSid'),
    'ReadStatusEnabled': _.get(opts, 'readStatusEnabled'),
    'ReachabilityEnabled': _.get(opts, 'reachabilityEnabled'),
    'TypingIndicatorTimeout': _.get(opts, 'typingIndicatorTimeout'),
    'ConsumptionReportInterval': _.get(opts, 'consumptionReportInterval'),
    'Notifications.NewMessage.Enabled': _.get(opts, 'notifications.newMessage.enabled'),
    'Notifications.NewMessage.Template': _.get(opts, 'notifications.newMessage.template'),
    'Notifications.AddedToChannel.Enabled': _.get(opts, 'notifications.addedToChannel.enabled'),
    'Notifications.AddedToChannel.Template': _.get(opts, 'notifications.addedToChannel.template'),
    'Notifications.RemovedFromChannel.Enabled': _.get(opts, 'notifications.removedFromChannel.enabled'),
    'Notifications.RemovedFromChannel.Template': _.get(opts, 'notifications.removedFromChannel.template'),
    'Notifications.InvitedToChannel.Enabled': _.get(opts, 'notifications.invitedToChannel.enabled'),
    'Notifications.InvitedToChannel.Template': _.get(opts, 'notifications.invitedToChannel.template'),
    'PreWebhookUrl': _.get(opts, 'preWebhookUrl'),
    'PostWebhookUrl': _.get(opts, 'postWebhookUrl'),
    'WebhookMethod': _.get(opts, 'webhookMethod'),
    'WebhookFilters': _.get(opts, 'webhookFilters'),
    'Webhooks.OnMessageSend.Url': _.get(opts, 'webhooks.onMessageSend.url'),
    'Webhooks.OnMessageSend.Method': _.get(opts, 'webhooks.onMessageSend.method'),
    'Webhooks.OnMessageSend.Format': _.get(opts, 'webhooks.onMessageSend.format'),
    'Webhooks.OnMessageUpdate.Url': _.get(opts, 'webhooks.onMessageUpdate.url'),
    'Webhooks.OnMessageUpdate.Method': _.get(opts, 'webhooks.onMessageUpdate.method'),
    'Webhooks.OnMessageUpdate.Format': _.get(opts, 'webhooks.onMessageUpdate.format'),
    'Webhooks.OnMessageRemove.Url': _.get(opts, 'webhooks.onMessageRemove.url'),
    'Webhooks.OnMessageRemove.Method': _.get(opts, 'webhooks.onMessageRemove.method'),
    'Webhooks.OnMessageRemove.Format': _.get(opts, 'webhooks.onMessageRemove.format'),
    'Webhooks.OnChannelAdd.Url': _.get(opts, 'webhooks.onChannelAdd.url'),
    'Webhooks.OnChannelAdd.Method': _.get(opts, 'webhooks.onChannelAdd.method'),
    'Webhooks.OnChannelAdd.Format': _.get(opts, 'webhooks.onChannelAdd.format'),
    'Webhooks.OnChannelDestroy.Url': _.get(opts, 'webhooks.onChannelDestroy.url'),
    'Webhooks.OnChannelDestroy.Method': _.get(opts, 'webhooks.onChannelDestroy.method'),
    'Webhooks.OnChannelDestroy.Format': _.get(opts, 'webhooks.onChannelDestroy.format'),
    'Webhooks.OnChannelUpdate.Url': _.get(opts, 'webhooks.onChannelUpdate.url'),
    'Webhooks.OnChannelUpdate.Method': _.get(opts, 'webhooks.onChannelUpdate.method'),
    'Webhooks.OnChannelUpdate.Format': _.get(opts, 'webhooks.onChannelUpdate.format'),
    'Webhooks.OnMemberAdd.Url': _.get(opts, 'webhooks.onMemberAdd.url'),
    'Webhooks.OnMemberAdd.Method': _.get(opts, 'webhooks.onMemberAdd.method'),
    'Webhooks.OnMemberAdd.Format': _.get(opts, 'webhooks.onMemberAdd.format'),
    'Webhooks.OnMemberRemove.Url': _.get(opts, 'webhooks.onMemberRemove.url'),
    'Webhooks.OnMemberRemove.Method': _.get(opts, 'webhooks.onMemberRemove.method'),
    'Webhooks.OnMemberRemove.Format': _.get(opts, 'webhooks.onMemberRemove.format'),
    'Webhooks.OnMessageSent.Url': _.get(opts, 'webhooks.onMessageSent.url'),
    'Webhooks.OnMessageSent.Method': _.get(opts, 'webhooks.onMessageSent.method'),
    'Webhooks.OnMessageSent.Format': _.get(opts, 'webhooks.onMessageSent.format'),
    'Webhooks.OnMessageUpdated.Url': _.get(opts, 'webhooks.onMessageUpdated.url'),
    'Webhooks.OnMessageUpdated.Method': _.get(opts, 'webhooks.onMessageUpdated.method'),
    'Webhooks.OnMessageUpdated.Format': _.get(opts, 'webhooks.onMessageUpdated.format'),
    'Webhooks.OnMessageRemoved.Url': _.get(opts, 'webhooks.onMessageRemoved.url'),
    'Webhooks.OnMessageRemoved.Method': _.get(opts, 'webhooks.onMessageRemoved.method'),
    'Webhooks.OnMessageRemoved.Format': _.get(opts, 'webhooks.onMessageRemoved.format'),
    'Webhooks.OnChannelAdded.Url': _.get(opts, 'webhooks.onChannelAdded.url'),
    'Webhooks.OnChannelAdded.Method': _.get(opts, 'webhooks.onChannelAdded.method'),
    'Webhooks.OnChannelAdded.Format': _.get(opts, 'webhooks.onChannelAdded.format'),
    'Webhooks.OnChannelDestroyed.Url': _.get(opts, 'webhooks.onChannelDestroyed.url'),
    'Webhooks.OnChannelDestroyed.Method': _.get(opts, 'webhooks.onChannelDestroyed.method'),
    'Webhooks.OnChannelDestroyed.Format': _.get(opts, 'webhooks.onChannelDestroyed.format'),
    'Webhooks.OnChannelUpdated.Url': _.get(opts, 'webhooks.onChannelUpdated.url'),
    'Webhooks.OnChannelUpdated.Method': _.get(opts, 'webhooks.onChannelUpdated.method'),
    'Webhooks.OnChannelUpdated.Format': _.get(opts, 'webhooks.onChannelUpdated.format'),
    'Webhooks.OnMemberAdded.Url': _.get(opts, 'webhooks.onMemberAdded.url'),
    'Webhooks.OnMemberAdded.Method': _.get(opts, 'webhooks.onMemberAdded.method'),
    'Webhooks.OnMemberAdded.Format': _.get(opts, 'webhooks.onMemberAdded.format'),
    'Webhooks.OnMemberRemoved.Url': _.get(opts, 'webhooks.onMemberRemoved.url'),
    'Webhooks.OnMemberRemoved.Method': _.get(opts, 'webhooks.onMemberRemoved.method'),
    'Webhooks.OnMemberRemoved.Format': _.get(opts, 'webhooks.onMemberRemoved.format'),
    'Limits.ChannelMembers': _.get(opts, 'limits.channelMembers'),
    'Limits.UserChannels': _.get(opts, 'limits.userChannels')
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new ServiceInstance(
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

Object.defineProperty(ServiceContext.prototype,
  'channels', {
  get: function() {
    if (!this._channels) {
      this._channels = new ChannelList(
        this._version,
        this._solution.sid
      );
    }
    return this._channels;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'roles', {
  get: function() {
    if (!this._roles) {
      this._roles = new RoleList(
        this._version,
        this._solution.sid
      );
    }
    return this._roles;
  }
});

Object.defineProperty(ServiceContext.prototype,
  'users', {
  get: function() {
    if (!this._users) {
      this._users = new UserList(
        this._version,
        this._solution.sid
      );
    }
    return this._users;
  }
});

module.exports = {
  ServiceList: ServiceList,
  ServicePage: ServicePage,
  ServiceInstance: ServiceInstance,
  ServiceContext: ServiceContext
};
