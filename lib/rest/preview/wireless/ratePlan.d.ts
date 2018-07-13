/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Wireless = require('../Wireless');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the RatePlanList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function RatePlanList(version: Wireless): RatePlanListInstance;

interface RatePlanResource {
  account_sid: string;
  data_enabled: boolean;
  data_limit: number;
  data_metering: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  international_roaming: string;
  messaging_enabled: boolean;
  national_roaming_enabled: boolean;
  sid: string;
  unique_name: string;
  url: string;
  voice_enabled: boolean;
}

interface RatePlanListInstance {
  /* jshint ignore:start */
  /**
   * create a RatePlanInstance
   *
   * @function create
   * @memberof Twilio.Preview.Wireless.RatePlanList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.uniqueName] - The unique_name
   * @param {string} [opts.friendlyName] - The friendly_name
   * @param {boolean} [opts.dataEnabled] - The data_enabled
   * @param {number} [opts.dataLimit] - The data_limit
   * @param {string} [opts.dataMetering] - The data_metering
   * @param {boolean} [opts.messagingEnabled] - The messaging_enabled
   * @param {boolean} [opts.voiceEnabled] - The voice_enabled
   * @param {boolean} [opts.commandsEnabled] - The commands_enabled
   * @param {boolean} [opts.nationalRoamingEnabled] - The national_roaming_enabled
   * @param {string|list} [opts.internationalRoaming] - The international_roaming
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed RatePlanInstance
   */
  /* jshint ignore:end */
  RatePlanListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'UniqueName': _.get(opts, 'uniqueName'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'DataEnabled': serialize.bool(_.get(opts, 'dataEnabled')),
      'DataLimit': _.get(opts, 'dataLimit'),
      'DataMetering': _.get(opts, 'dataMetering'),
      'MessagingEnabled': serialize.bool(_.get(opts, 'messagingEnabled')),
      'VoiceEnabled': serialize.bool(_.get(opts, 'voiceEnabled')),
      'CommandsEnabled': serialize.bool(_.get(opts, 'commandsEnabled')),
      'NationalRoamingEnabled': serialize.bool(_.get(opts, 'nationalRoamingEnabled')),
      'InternationalRoaming': serialize.map(_.get(opts, 'internationalRoaming'), function(e) { return e; })
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RatePlanInstance(this._version, payload, this._solution.sid));
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
   * Streams RatePlanInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Wireless.RatePlanList
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
  RatePlanListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Wireless.RatePlanList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RatePlanListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new RatePlanPage(this._version, payload, this._solution));
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
   * @description Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Wireless.RatePlanList
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
  RatePlanListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Wireless.RatePlanList
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
  RatePlanListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new RatePlanPage(this._version, payload, this._solution));
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
 * @property uniqueName - The unique_name
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - The unique_name
 * @property friendlyName - The friendly_name
 */
export interface UpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}


declare class RatePlanPage extends Page {
  /**
   * @constructor Twilio.Preview.Wireless.RatePlanPage
   * @augments Page
   * @description Initialize the RatePlanPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Wireless, response: object, solution: object);

  /**
   * Build an instance of RatePlanInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Wireless.RatePlanPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RatePlanInstance {
  /**
   * @constructor Twilio.Preview.Wireless.RatePlanInstance
   * @description Initialize the RatePlanContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dataEnabled - The data_enabled
   * @property dataMetering - The data_metering
   * @property dataLimit - The data_limit
   * @property messagingEnabled - The messaging_enabled
   * @property voiceEnabled - The voice_enabled
   * @property nationalRoamingEnabled - The national_roaming_enabled
   * @property internationalRoaming - The international_roaming
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, payload: object, sid: sid_like);

  _proxy?: RatePlanContext;
  /**
   * fetch a RatePlanInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RatePlanInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RatePlanInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   */
  toJSON();
  /**
   * update a RatePlanInstance
   *
   * @function update
   * @memberof Twilio.Preview.Wireless.RatePlanInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class RatePlanContext {
  /**
   * @constructor Twilio.Preview.Wireless.RatePlanContext
   * @description Initialize the RatePlanContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, sid: sid_like);

  /**
   * fetch a RatePlanInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.RatePlanContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RatePlanInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Wireless.RatePlanContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a RatePlanInstance
   *
   * @function update
   * @memberof Twilio.Preview.Wireless.RatePlanContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { RatePlanContext, RatePlanInstance, RatePlanList, RatePlanListInstance, RatePlanPage, RatePlanResource }