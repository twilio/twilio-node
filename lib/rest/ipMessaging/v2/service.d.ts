/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V2 = require('../V2');
import serialize = require('../../../base/serialize');
import { BindingList } from './service/binding';
import { ChannelList } from './service/channel';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { RoleList } from './service/role';
import { SerializableClass } from '../../../interfaces';
import { UserList } from './service/user';

/**
 * @description Initialize the ServiceList
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V2): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  consumption_report_interval: number;
  date_created: Date;
  date_updated: Date;
  default_channel_creator_role_sid: string;
  default_channel_role_sid: string;
  default_service_role_sid: string;
  friendly_name: string;
  limits: string;
  links: string;
  media: string;
  notifications: string;
  post_webhook_retry_count: number;
  post_webhook_url: string;
  pre_webhook_retry_count: number;
  pre_webhook_url: string;
  reachability_enabled: boolean;
  read_status_enabled: boolean;
  sid: string;
  typing_indicator_timeout: number;
  url: string;
  webhook_filters: string;
  webhook_method: string;
}

interface ServiceListInstance {
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V2.ServiceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName -
   *          Human-readable name for this service instance
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
    var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServiceInstance(this._version, payload, this._solution.sid));
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
   * @memberof Twilio.IpMessaging.V2.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  ServiceListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
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
          callback(instance, onComplete);
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
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V2.ServiceList
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

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
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
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V2.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
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
   * @memberof Twilio.IpMessaging.V2.ServiceList
   * @instance
   *
   * @param {object} [opts] - ...
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
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ServicePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human-readable name for this service instance
 * @property defaultServiceRoleSid - The default_service_role_sid
 * @property defaultChannelRoleSid - Channel role assigned on channel join
 * @property defaultChannelCreatorRoleSid - Channel role assigned to creator of channel when joining for first time
 * @property readStatusEnabled - true if the member read status feature is enabled, false if not.
 * @property reachabilityEnabled - true if the reachability feature should be enabled.
 * @property typingIndicatorTimeout - The duration in seconds indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
 * @property consumptionReportInterval - The consumption_report_interval
 * @property "notifications.newMessage.enabled" - The notifications.new_message.enabled
 * @property "notifications.newMessage.template" - The notifications.new_message.template
 * @property "notifications.newMessage.sound" - The notifications.new_message.sound
 * @property "notifications.newMessage.badgeCountEnabled" - The notifications.new_message.badge_count_enabled
 * @property "notifications.addedToChannel.enabled" - The notifications.added_to_channel.enabled
 * @property "notifications.addedToChannel.template" - The notifications.added_to_channel.template
 * @property "notifications.addedToChannel.sound" - The notifications.added_to_channel.sound
 * @property "notifications.removedFromChannel.enabled" - The notifications.removed_from_channel.enabled
 * @property "notifications.removedFromChannel.template" - The notifications.removed_from_channel.template
 * @property "notifications.removedFromChannel.sound" - The notifications.removed_from_channel.sound
 * @property "notifications.invitedToChannel.enabled" - The notifications.invited_to_channel.enabled
 * @property "notifications.invitedToChannel.template" - The notifications.invited_to_channel.template
 * @property "notifications.invitedToChannel.sound" - The notifications.invited_to_channel.sound
 * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
 * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
 * @property webhookMethod - The webhook request format to use.
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
 * @property "limits.channelMembers" - The maximum number of Members that can be added to Channels within this Service.
 * @property "limits.userChannels" - The maximum number of Channels Users can be a Member of within this Service.
 * @property "media.compatibilityMessage" - The media.compatibility_message
 * @property preWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
 * @property postWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
 * @property "notifications.logEnabled" - The notifications.log_enabled
 */
export interface UpdateOptions {
  "limits.channelMembers"?: number;
  "limits.userChannels"?: number;
  "media.compatibilityMessage"?: string;
  "notifications.addedToChannel.enabled"?: boolean;
  "notifications.addedToChannel.sound"?: string;
  "notifications.addedToChannel.template"?: string;
  "notifications.invitedToChannel.enabled"?: boolean;
  "notifications.invitedToChannel.sound"?: string;
  "notifications.invitedToChannel.template"?: string;
  "notifications.logEnabled"?: boolean;
  "notifications.newMessage.badgeCountEnabled"?: boolean;
  "notifications.newMessage.enabled"?: boolean;
  "notifications.newMessage.sound"?: string;
  "notifications.newMessage.template"?: string;
  "notifications.removedFromChannel.enabled"?: boolean;
  "notifications.removedFromChannel.sound"?: string;
  "notifications.removedFromChannel.template"?: string;
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  postWebhookRetryCount?: number;
  postWebhookUrl?: string;
  preWebhookRetryCount?: number;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string|list;
  webhookMethod?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human-readable name for this service instance
 * @property defaultServiceRoleSid - The default_service_role_sid
 * @property defaultChannelRoleSid - Channel role assigned on channel join
 * @property defaultChannelCreatorRoleSid - Channel role assigned to creator of channel when joining for first time
 * @property readStatusEnabled - true if the member read status feature is enabled, false if not.
 * @property reachabilityEnabled - true if the reachability feature should be enabled.
 * @property typingIndicatorTimeout - The duration in seconds indicating the timeout after "started typing" event when client should assume that user is not typing anymore even if no "ended typing" message received
 * @property consumptionReportInterval - The consumption_report_interval
 * @property "notifications.newMessage.enabled" - The notifications.new_message.enabled
 * @property "notifications.newMessage.template" - The notifications.new_message.template
 * @property "notifications.newMessage.sound" - The notifications.new_message.sound
 * @property "notifications.newMessage.badgeCountEnabled" - The notifications.new_message.badge_count_enabled
 * @property "notifications.addedToChannel.enabled" - The notifications.added_to_channel.enabled
 * @property "notifications.addedToChannel.template" - The notifications.added_to_channel.template
 * @property "notifications.addedToChannel.sound" - The notifications.added_to_channel.sound
 * @property "notifications.removedFromChannel.enabled" - The notifications.removed_from_channel.enabled
 * @property "notifications.removedFromChannel.template" - The notifications.removed_from_channel.template
 * @property "notifications.removedFromChannel.sound" - The notifications.removed_from_channel.sound
 * @property "notifications.invitedToChannel.enabled" - The notifications.invited_to_channel.enabled
 * @property "notifications.invitedToChannel.template" - The notifications.invited_to_channel.template
 * @property "notifications.invitedToChannel.sound" - The notifications.invited_to_channel.sound
 * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
 * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
 * @property webhookMethod - The webhook request format to use.
 * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
 * @property "limits.channelMembers" - The maximum number of Members that can be added to Channels within this Service.
 * @property "limits.userChannels" - The maximum number of Channels Users can be a Member of within this Service.
 * @property "media.compatibilityMessage" - The media.compatibility_message
 * @property preWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
 * @property postWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
 * @property "notifications.logEnabled" - The notifications.log_enabled
 */
export interface UpdateOptions {
  "limits.channelMembers"?: number;
  "limits.userChannels"?: number;
  "media.compatibilityMessage"?: string;
  "notifications.addedToChannel.enabled"?: boolean;
  "notifications.addedToChannel.sound"?: string;
  "notifications.addedToChannel.template"?: string;
  "notifications.invitedToChannel.enabled"?: boolean;
  "notifications.invitedToChannel.sound"?: string;
  "notifications.invitedToChannel.template"?: string;
  "notifications.logEnabled"?: boolean;
  "notifications.newMessage.badgeCountEnabled"?: boolean;
  "notifications.newMessage.enabled"?: boolean;
  "notifications.newMessage.sound"?: string;
  "notifications.newMessage.template"?: string;
  "notifications.removedFromChannel.enabled"?: boolean;
  "notifications.removedFromChannel.sound"?: string;
  "notifications.removedFromChannel.template"?: string;
  consumptionReportInterval?: number;
  defaultChannelCreatorRoleSid?: string;
  defaultChannelRoleSid?: string;
  defaultServiceRoleSid?: string;
  friendlyName?: string;
  postWebhookRetryCount?: number;
  postWebhookUrl?: string;
  preWebhookRetryCount?: number;
  preWebhookUrl?: string;
  reachabilityEnabled?: boolean;
  readStatusEnabled?: boolean;
  typingIndicatorTimeout?: number;
  webhookFilters?: string|list;
  webhookMethod?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceInstance
   * @description Initialize the ServiceContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this service.
   * @property friendlyName - The human-readable name of this service.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property defaultServiceRoleSid - The service role assigned to users when they are added to the service.
   * @property defaultChannelRoleSid - The channel role assigned to users when they are added to a channel.
   * @property defaultChannelCreatorRoleSid - The channel role assigned to a channel creator when joining a new channel.
   * @property readStatusEnabled - Enable the Message Constumption Horizon feature.
   * @property reachabilityEnabled - Indicates whether the  the Reachability feature is enabled for this Service instance.
   * @property typingIndicatorTimeout - The amount of time in seconds after a "started typing" event when clients should assume that user is no longer typing, even if no "ended typing" message was received.
   * @property consumptionReportInterval - DEPRECATED.
   * @property limits - Configuration for service instance level limits.
   * @property preWebhookUrl - The webhook URL for PRE-Event webhooks.
   * @property postWebhookUrl - The webhook URL for POST-Event webhooks.
   * @property webhookMethod - The webhook request format to use for both PRE and POST webhooks.
   * @property webhookFilters - The list of WebHook events that are enabled for this Service instance.
   * @property preWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
   * @property postWebhookRetryCount - Count of times webhook will be retried in case of timeout or 429/503/504 HTTP responses.
   * @property notifications - Notification configuration for the Service instance.
   * @property media - The media
   * @property url - An absolute URL for this service.
   * @property links - URLs to access the Channels, Roles, and Users for this service.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the bindings
   *
   * @function bindings
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   */
  bindings();
  /**
   * Access the channels
   *
   * @function channels
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   */
  channels();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the roles
   *
   * @function roles
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   */
  roles();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the users
   *
   * @function users
   * @memberof Twilio.IpMessaging.V2.ServiceInstance
   * @instance
   */
  users();
}


declare class ServiceContext {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext
   * @description Initialize the ServiceContext
   *
   * @property channels - channels resource
   * @property roles - roles resource
   * @property users - users resource
   * @property bindings - bindings resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, sid: sid);

  bindings?: Twilio.IpMessaging.V2.ServiceContext.BindingList;
  channels?: Twilio.IpMessaging.V2.ServiceContext.ChannelList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  roles?: Twilio.IpMessaging.V2.ServiceContext.RoleList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  users?: Twilio.IpMessaging.V2.ServiceContext.UserList;
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServiceResource }