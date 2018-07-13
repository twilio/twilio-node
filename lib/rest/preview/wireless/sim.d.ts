/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Wireless = require('../Wireless');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';
import { UsageList } from './sim/usage';

/**
 * @description Initialize the SimList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function SimList(version: Wireless): SimListInstance;

interface SimResource {
  account_sid: string;
  commands_callback_method: string;
  commands_callback_url: string;
  date_created: Date;
  date_updated: Date;
  e_id: string;
  friendly_name: string;
  iccid: string;
  links: string;
  rate_plan_sid: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_url: string;
  status: string;
  unique_name: string;
  url: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface SimListInstance {
  /* jshint ignore:start */
  /**
   * Streams SimInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Wireless.SimList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.status] - The status
   * @param {string} [opts.iccid] - The iccid
   * @param {string} [opts.ratePlan] - The rate_plan
   * @param {string} [opts.eId] - The e_id
   * @param {string} [opts.simRegistrationCode] - The sim_registration_code
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
  SimListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Wireless.SimList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimPage(this._version, payload, this._solution));
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
   * @description Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Wireless.SimList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.status] - The status
   * @param {string} [opts.iccid] - The iccid
   * @param {string} [opts.ratePlan] - The rate_plan
   * @param {string} [opts.eId] - The e_id
   * @param {string} [opts.simRegistrationCode] - The sim_registration_code
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
  SimListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Wireless.SimList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.status] - The status
   * @param {string} [opts.iccid] - The iccid
   * @param {string} [opts.ratePlan] - The rate_plan
   * @param {string} [opts.eId] - The e_id
   * @param {string} [opts.simRegistrationCode] - The sim_registration_code
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SimListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'Iccid': _.get(opts, 'iccid'),
      'RatePlan': _.get(opts, 'ratePlan'),
      'EId': _.get(opts, 'eId'),
      'SimRegistrationCode': _.get(opts, 'simRegistrationCode'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new SimPage(this._version, payload, this._solution));
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
 * @property callbackMethod - The callback_method
 * @property callbackUrl - The callback_url
 * @property friendlyName - The friendly_name
 * @property ratePlan - The rate_plan
 * @property status - The status
 * @property commandsCallbackMethod - The commands_callback_method
 * @property commandsCallbackUrl - The commands_callback_url
 * @property smsFallbackMethod - The sms_fallback_method
 * @property smsFallbackUrl - The sms_fallback_url
 * @property smsMethod - The sms_method
 * @property smsUrl - The sms_url
 * @property voiceFallbackMethod - The voice_fallback_method
 * @property voiceFallbackUrl - The voice_fallback_url
 * @property voiceMethod - The voice_method
 * @property voiceUrl - The voice_url
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  status?: string;
  uniqueName?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property uniqueName - The unique_name
 * @property callbackMethod - The callback_method
 * @property callbackUrl - The callback_url
 * @property friendlyName - The friendly_name
 * @property ratePlan - The rate_plan
 * @property status - The status
 * @property commandsCallbackMethod - The commands_callback_method
 * @property commandsCallbackUrl - The commands_callback_url
 * @property smsFallbackMethod - The sms_fallback_method
 * @property smsFallbackUrl - The sms_fallback_url
 * @property smsMethod - The sms_method
 * @property smsUrl - The sms_url
 * @property voiceFallbackMethod - The voice_fallback_method
 * @property voiceFallbackUrl - The voice_fallback_url
 * @property voiceMethod - The voice_method
 * @property voiceUrl - The voice_url
 */
export interface UpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  commandsCallbackMethod?: string;
  commandsCallbackUrl?: string;
  friendlyName?: string;
  ratePlan?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsUrl?: string;
  status?: string;
  uniqueName?: string;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}


declare class SimPage extends Page {
  /**
   * @constructor Twilio.Preview.Wireless.SimPage
   * @augments Page
   * @description Initialize the SimPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Wireless, response: object, solution: object);

  /**
   * Build an instance of SimInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Wireless.SimPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class SimInstance {
  /**
   * @constructor Twilio.Preview.Wireless.SimInstance
   * @description Initialize the SimContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property ratePlanSid - The rate_plan_sid
   * @property friendlyName - The friendly_name
   * @property iccid - The iccid
   * @property eId - The e_id
   * @property status - The status
   * @property commandsCallbackUrl - The commands_callback_url
   * @property commandsCallbackMethod - The commands_callback_method
   * @property smsFallbackMethod - The sms_fallback_method
   * @property smsFallbackUrl - The sms_fallback_url
   * @property smsMethod - The sms_method
   * @property smsUrl - The sms_url
   * @property voiceFallbackMethod - The voice_fallback_method
   * @property voiceFallbackUrl - The voice_fallback_url
   * @property voiceMethod - The voice_method
   * @property voiceUrl - The voice_url
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, payload: object, sid: sid_like);

  _proxy?: SimContext;
  /**
   * fetch a SimInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.SimInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the SimInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Wireless.SimInstance
   * @instance
   */
  toJSON();
  /**
   * update a SimInstance
   *
   * @function update
   * @memberof Twilio.Preview.Wireless.SimInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  /**
   * Access the usage
   *
   * @function usage
   * @memberof Twilio.Preview.Wireless.SimInstance
   * @instance
   */
  usage();
}


declare class SimContext {
  /**
   * @constructor Twilio.Preview.Wireless.SimContext
   * @description Initialize the SimContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property usage - usage resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Preview.Wireless, sid: sid_like);

  /**
   * fetch a SimInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Wireless.SimContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a SimInstance
   *
   * @function update
   * @memberof Twilio.Preview.Wireless.SimContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
  usage?: Twilio.Preview.Wireless.SimContext.UsageList;
}

export { SimContext, SimInstance, SimList, SimListInstance, SimPage, SimResource }