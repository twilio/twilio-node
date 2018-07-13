/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2 = require('../../../V2');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the WebhookList
 *
 * @param version - Version of the resource
 * @param serviceSid - The service_sid
 * @param channelSid - The channel_sid
 */
declare function WebhookList(version: V2, serviceSid: string, channelSid: string): WebhookListInstance;

interface WebhookResource {
  account_sid: string;
  channel_sid: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  service_sid: string;
  sid: string;
  type: string;
  url: string;
}

interface WebhookListInstance {
  /* jshint ignore:start */
  /**
   * create a WebhookInstance
   *
   * @function create
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookList
   * @instance
   *
   * @param {object} opts - ...
   * @param {webhook.type} opts.type - The type
   * @param {string} [opts."configuration.url"] - The configuration.url
   * @param {webhook.method} [opts."configuration.method"] - The configuration.method
   * @param {string|list} [opts."configuration.filters"] - The configuration.filters
   * @param {string|list} [opts."configuration.triggers"] -
   *          The configuration.triggers
   * @param {string} [opts."configuration.flowSid"] - The configuration.flow_sid
   * @param {number} [opts."configuration.retryCount"] -
   *          The configuration.retry_count
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed WebhookInstance
   */
  /* jshint ignore:end */
  WebhookListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.type)) {
      throw new Error('Required parameter "opts.type" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Type': _.get(opts, 'type'),
      'Configuration.Url': _.get(opts, '"configuration.url"'),
      'Configuration.Method': _.get(opts, '"configuration.method"'),
      'Configuration.Filters': serialize.map(_.get(opts, '"configuration.filters"'), function(e) { return e; }),
      'Configuration.Triggers': serialize.map(_.get(opts, '"configuration.triggers"'), function(e) { return e; }),
      'Configuration.FlowSid': _.get(opts, '"configuration.flowSid"'),
      'Configuration.RetryCount': _.get(opts, '"configuration.retryCount"')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new WebhookInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.channelSid,
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
   * Streams WebhookInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookList
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
  WebhookListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of WebhookInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  WebhookListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new WebhookPage(this._version, payload, this._solution));
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
   * @description Lists WebhookInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookList
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
  WebhookListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of WebhookInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookList
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
  WebhookListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new WebhookPage(this._version, payload, this._solution));
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
 * @property "configuration.url" - The configuration.url
 * @property "configuration.method" - The configuration.method
 * @property "configuration.filters" - The configuration.filters
 * @property "configuration.triggers" - The configuration.triggers
 * @property "configuration.flowSid" - The configuration.flow_sid
 * @property "configuration.retryCount" - The configuration.retry_count
 */
export interface UpdateOptions {
  "configuration.filters"?: string|list;
  "configuration.flowSid"?: string;
  "configuration.method"?: webhook.method;
  "configuration.retryCount"?: number;
  "configuration.triggers"?: string|list;
  "configuration.url"?: string;
}

/**
 * Options to pass to update
 *
 * @property "configuration.url" - The configuration.url
 * @property "configuration.method" - The configuration.method
 * @property "configuration.filters" - The configuration.filters
 * @property "configuration.triggers" - The configuration.triggers
 * @property "configuration.flowSid" - The configuration.flow_sid
 * @property "configuration.retryCount" - The configuration.retry_count
 */
export interface UpdateOptions {
  "configuration.filters"?: string|list;
  "configuration.flowSid"?: string;
  "configuration.method"?: webhook.method;
  "configuration.retryCount"?: number;
  "configuration.triggers"?: string|list;
  "configuration.url"?: string;
}


declare class WebhookPage extends Page {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookPage
   * @augments Page
   * @description Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.IpMessaging.V2, response: object, solution: object);

  /**
   * Build an instance of WebhookInstance
   *
   * @function getInstance
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class WebhookInstance {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @description Initialize the WebhookContext
   *
   * @property sid - The sid
   * @property accountSid - The account_sid
   * @property serviceSid - The service_sid
   * @property channelSid - The channel_sid
   * @property type - The type
   * @property url - The url
   * @property configuration - The configuration
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: WebhookContext;
  /**
   * fetch a WebhookInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a WebhookInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the WebhookInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   */
  toJSON();
  /**
   * update a WebhookInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class WebhookContext {
  /**
   * @constructor Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @description Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.IpMessaging.V2, serviceSid: sid, channelSid: sid_like, sid: sid);

  /**
   * fetch a WebhookInstance
   *
   * @function fetch
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a WebhookInstance
   *
   * @function remove
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a WebhookInstance
   *
   * @function update
   * @memberof Twilio.IpMessaging.V2.ServiceContext.ChannelContext.WebhookContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { WebhookContext, WebhookInstance, WebhookList, WebhookListInstance, WebhookPage, WebhookResource }