/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2 = require('../../V2');
import serialize = require('../../../../base/serialize');
import { InviteList } from './channel/invite';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { MemberList } from './channel/member';
import { MessageList } from './channel/message';
import { SerializableClass } from '../../../../interfaces';
import { WebhookList } from './channel/webhook';

/**
 * @description Initialize the ChannelList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this channel belongs to.
 */
declare function ChannelList(version: V2, serviceSid: string): ChannelListInstance;

interface ChannelResource {
  account_sid: string;
  attributes: string;
  created_by: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  members_count: number;
  messages_count: number;
  service_sid: string;
  sid: string;
  type: ChannelChannelType;
  unique_name: string;
  url: string;
}

interface ChannelListInstance {
  /* jshint ignore:start */
  /**
   * create a ChannelInstance
   *
   * @function create
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.friendlyName] - A human-readable name for the Channel.
   * @param {string} [opts.uniqueName] - A unique, addressable name for the Channel.
   * @param {string} [opts.attributes] -
   *          An optional metadata field you can use to store any data you wish.
   * @param {channel.channel_type} [opts.type] -
   *          The visibility of the channel - public or private.
   * @param {Date} [opts.dateCreated] -
   *          The optional ISO8601 time specifying the datetime the Channel should be set as being created.
   * @param {Date} [opts.dateUpdated] -
   *          The optional ISO8601 time specifying the datetime the Channel should be set as having been last updated.
   * @param {string} [opts.createdBy] -
   *          Optional field to specify the Identity of the User that created the Channel.
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
      'Type': _.get(opts, 'type'),
      'DateCreated': serialize.iso8601DateTime(_.get(opts, 'dateCreated')),
      'DateUpdated': serialize.iso8601DateTime(_.get(opts, 'dateUpdated')),
      'CreatedBy': _.get(opts, 'createdBy')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

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
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {channel.channel_type|list} [opts.type] - The type
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
  ChannelListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of ChannelInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ChannelListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ChannelPage(this._version, payload, this._solution));
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
   * @description Lists ChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelList
   * @instance
   *
   * @param {object} [opts] - ...
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
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelList
   * @instance
   *
   * @param {object} [opts] - ...
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
      'Type': serialize.map(_.get(opts, 'type'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ChannelPage(this._version, payload, this._solution));
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
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 * @property attributes - An optional metadata field you can use to store any data you wish.
 * @property dateCreated - The optional ISO8601 time specifying the datetime the Channel should be set as being created.
 * @property dateUpdated - The optional ISO8601 time specifying the datetime the Channel should be set as having been last updated.
 * @property createdBy - Optional field to specify the Identity of the User that created the Channel.
 */
export interface UpdateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human-readable name for the Channel.
 * @property uniqueName - A unique, addressable name for the Channel.
 * @property attributes - An optional metadata field you can use to store any data you wish.
 * @property dateCreated - The optional ISO8601 time specifying the datetime the Channel should be set as being created.
 * @property dateUpdated - The optional ISO8601 time specifying the datetime the Channel should be set as having been last updated.
 * @property createdBy - Optional field to specify the Identity of the User that created the Channel.
 */
export interface UpdateOptions {
  attributes?: string;
  createdBy?: string;
  dateCreated?: Date;
  dateUpdated?: Date;
  friendlyName?: string;
  uniqueName?: string;
}


declare class ChannelPage extends Page {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelPage
   * @augments Page
   * @description Initialize the ChannelPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V2, response: object, solution: object);

  /**
   * Build an instance of ChannelInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ChannelInstance {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @description Initialize the ChannelContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this channel.
   * @property serviceSid - The unique id of the Service this channel belongs to.
   * @property friendlyName - The human-readable name of this channel.
   * @property uniqueName - The unique, addressable name of this channel.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property type - The visibility of this channel - either public or private
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property createdBy - Identity of the channel's creator.
   * @property membersCount - The number of Members in the Channel
   * @property messagesCount - The number of Messages in the Channel
   * @property url - An absolute URL for this channel.
   * @property links - Absolute URLs to access the Members, Messages , Invites and, if it exists the last Message for this Channel.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this channel belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, payload: object, serviceSid: sid, sid: sid_like);

  _proxy?: ChannelContext;
  /**
   * fetch a ChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the invites
   *
   * @function invites
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  invites();
  /**
   * Access the members
   *
   * @function members
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  members();
  /**
   * Access the messages
   *
   * @function messages
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  messages();
  /**
   * remove a ChannelInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the ChannelInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  toJSON();
  /**
   * update a ChannelInstance
   *
   * @function update
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the webhooks
   *
   * @function webhooks
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelInstance
   * @instance
   */
  webhooks();
}


declare class ChannelContext {
  /**
   * @constructor Twilio.Chat.V2.ServiceContext.ChannelContext
   * @description Initialize the ChannelContext
   *
   * @property members - members resource
   * @property messages - messages resource
   * @property invites - invites resource
   * @property webhooks - webhooks resource
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V2, serviceSid: sid, sid: sid_like);

  /**
   * fetch a ChannelInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  invites?: Twilio.Chat.V2.ServiceContext.ChannelContext.InviteList;
  members?: Twilio.Chat.V2.ServiceContext.ChannelContext.MemberList;
  messages?: Twilio.Chat.V2.ServiceContext.ChannelContext.MessageList;
  /**
   * remove a ChannelInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a ChannelInstance
   *
   * @function update
   * @memberof Twilio.Chat.V2.ServiceContext.ChannelContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  webhooks?: Twilio.Chat.V2.ServiceContext.ChannelContext.WebhookList;
}

export { ChannelContext, ChannelInstance, ChannelList, ChannelListInstance, ChannelPage, ChannelResource }