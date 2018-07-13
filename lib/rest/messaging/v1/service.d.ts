/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { AlphaSenderList } from './service/alphaSender';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { PhoneNumberList } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { ShortCodeList } from './service/shortCode';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: V1): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  area_code_geomatch: boolean;
  date_created: Date;
  date_updated: Date;
  fallback_method: string;
  fallback_to_long_code: boolean;
  fallback_url: string;
  friendly_name: string;
  inbound_method: string;
  inbound_request_url: string;
  links: string;
  mms_converter: boolean;
  scan_message_content: ServiceScanMessageContent;
  sid: string;
  smart_encoding: boolean;
  status_callback: string;
  sticky_sender: boolean;
  synchronous_validation: boolean;
  url: string;
  validity_period: number;
}

interface ServiceListInstance {
  /* jshint ignore:start */
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Messaging.V1.ServiceList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.friendlyName -
   *          A human readable descriptive text for this resource, up to 64 characters.
   * @param {string} [opts.inboundRequestUrl] -
   *          A webhook request is made to the Inbound Request URL when a message is received by any phone number or shortcode associated to your Messaging Service.
   * @param {string} [opts.inboundMethod] -
   *          The HTTP method used when making requests to the Inbound Request URL.
   * @param {string} [opts.fallbackUrl] -
   *          A request is made to the Fallback URL if an error occurs with retrieving or executing the TwiML from you Inbound Request URL.
   * @param {string} [opts.fallbackMethod] -
   *          The HTTP method used when requesting the Fallback URL.
   * @param {string} [opts.statusCallback] -
   *          A webhook request is made to the Status Callback to pass status updates about your messages.
   * @param {boolean} [opts.stickySender] -
   *          Configuration to enable or disable Sticky Sender on your Service Instance.
   * @param {boolean} [opts.mmsConverter] -
   *          Configuration to enable or disable MMS Converter on your Service Instance.
   * @param {boolean} [opts.smartEncoding] -
   *          Configuration to enable or disable Smart Encoding.
   * @param {service.scan_message_content} [opts.scanMessageContent] -
   *          The scan_message_content
   * @param {boolean} [opts.fallbackToLongCode] -
   *          Configuration to enable or disable Fallback to Long Code.
   * @param {boolean} [opts.areaCodeGeomatch] -
   *          Configuration to enable or disable Area Code Geomatch.
   * @param {number} [opts.validityPeriod] -
   *          Configuration to set the validity period of all messages sent from your Service, in seconds.
   * @param {boolean} [opts.synchronousValidation] - The synchronous_validation
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
      'FriendlyName': _.get(opts, 'friendlyName'),
      'InboundRequestUrl': _.get(opts, 'inboundRequestUrl'),
      'InboundMethod': _.get(opts, 'inboundMethod'),
      'FallbackUrl': _.get(opts, 'fallbackUrl'),
      'FallbackMethod': _.get(opts, 'fallbackMethod'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StickySender': serialize.bool(_.get(opts, 'stickySender')),
      'MmsConverter': serialize.bool(_.get(opts, 'mmsConverter')),
      'SmartEncoding': serialize.bool(_.get(opts, 'smartEncoding')),
      'ScanMessageContent': _.get(opts, 'scanMessageContent'),
      'FallbackToLongCode': serialize.bool(_.get(opts, 'fallbackToLongCode')),
      'AreaCodeGeomatch': serialize.bool(_.get(opts, 'areaCodeGeomatch')),
      'ValidityPeriod': _.get(opts, 'validityPeriod'),
      'SynchronousValidation': serialize.bool(_.get(opts, 'synchronousValidation'))
    });

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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
   * @memberof Twilio.Messaging.V1.ServiceList
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
 * @property friendlyName - The friendly_name
 * @property inboundRequestUrl - The inbound_request_url
 * @property inboundMethod - The inbound_method
 * @property fallbackUrl - The fallback_url
 * @property fallbackMethod - The fallback_method
 * @property statusCallback - The status_callback
 * @property stickySender - The sticky_sender
 * @property mmsConverter - The mms_converter
 * @property smartEncoding - The smart_encoding
 * @property scanMessageContent - The scan_message_content
 * @property fallbackToLongCode - The fallback_to_long_code
 * @property areaCodeGeomatch - The area_code_geomatch
 * @property validityPeriod - The validity_period
 * @property synchronousValidation - The synchronous_validation
 */
export interface UpdateOptions {
  areaCodeGeomatch?: boolean;
  fallbackMethod?: string;
  fallbackToLongCode?: boolean;
  fallbackUrl?: string;
  friendlyName?: string;
  inboundMethod?: string;
  inboundRequestUrl?: string;
  mmsConverter?: boolean;
  scanMessageContent?: service.scan_message_content;
  smartEncoding?: boolean;
  statusCallback?: string;
  stickySender?: boolean;
  synchronousValidation?: boolean;
  validityPeriod?: number;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 * @property inboundRequestUrl - The inbound_request_url
 * @property inboundMethod - The inbound_method
 * @property fallbackUrl - The fallback_url
 * @property fallbackMethod - The fallback_method
 * @property statusCallback - The status_callback
 * @property stickySender - The sticky_sender
 * @property mmsConverter - The mms_converter
 * @property smartEncoding - The smart_encoding
 * @property scanMessageContent - The scan_message_content
 * @property fallbackToLongCode - The fallback_to_long_code
 * @property areaCodeGeomatch - The area_code_geomatch
 * @property validityPeriod - The validity_period
 * @property synchronousValidation - The synchronous_validation
 */
export interface UpdateOptions {
  areaCodeGeomatch?: boolean;
  fallbackMethod?: string;
  fallbackToLongCode?: boolean;
  fallbackUrl?: string;
  friendlyName?: string;
  inboundMethod?: string;
  inboundRequestUrl?: string;
  mmsConverter?: boolean;
  scanMessageContent?: service.scan_message_content;
  smartEncoding?: boolean;
  statusCallback?: string;
  stickySender?: boolean;
  synchronousValidation?: boolean;
  validityPeriod?: number;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Messaging.V1.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Messaging.V1, response: object, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Messaging.V1.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Messaging.V1.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - Unique 34 character ID of the Service.
   * @property accountSid - Unique 34 character ID of the Account that created this Service.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property inboundRequestUrl - The URL Twilio will make a webhook request to when a message is received by any phone number or short code in your Service.
   * @property inboundMethod - The HTTP method Twilio will use when making requests to the Inbound Request URL.
   * @property fallbackUrl - The URL that Twilio will request if an error occurs when retrieving or executing the TwiML from your Inbound Request URL.
   * @property fallbackMethod - The HTTP method Twilio will use when making requests to the Fallback URL.
   * @property statusCallback - The URL Twilio will make a webhook request to when passing you status updates about the delivery of your messages.
   * @property stickySender - Configuration to enable or disable Sticky Sender on your Service instance.
   * @property mmsConverter - Configuration to enable or disable MMS Converter for messages sent through your Service instance.
   * @property smartEncoding - Configuration to enable or disable Smart Encoding for messages sent through your Service instance.
   * @property scanMessageContent - The scan_message_content
   * @property fallbackToLongCode - Configuration to enable or disable Fallback to Long Code for messages sent through your Service instance.
   * @property areaCodeGeomatch - Configuration to enable or disable Area Code Geomatch on your Service Instance.
   * @property synchronousValidation - The synchronous_validation
   * @property validityPeriod - The number of seconds all messages sent from your Service are valid for.
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Messaging.V1, payload: object, sid: sid);

  _proxy?: ServiceContext;
  /**
   * Access the alphaSenders
   *
   * @function alphaSenders
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  alphaSenders();
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the phoneNumbers
   *
   * @function phoneNumbers
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  phoneNumbers();
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the shortCodes
   *
   * @function shortCodes
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  shortCodes();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Messaging.V1.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Messaging.V1.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property phoneNumbers - phoneNumbers resource
   * @property shortCodes - shortCodes resource
   * @property alphaSenders - alphaSenders resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Messaging.V1, sid: sid);

  alphaSenders?: Twilio.Messaging.V1.ServiceContext.AlphaSenderList;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Messaging.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  phoneNumbers?: Twilio.Messaging.V1.ServiceContext.PhoneNumberList;
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Messaging.V1.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  shortCodes?: Twilio.Messaging.V1.ServiceContext.ShortCodeList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Messaging.V1.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServiceResource }