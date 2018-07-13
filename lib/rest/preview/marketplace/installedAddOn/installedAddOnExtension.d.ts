/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../../Marketplace');
import Page = require('../../../../base/Page');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the InstalledAddOnExtensionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param installedAddOnSid - The installed_add_on_sid
 */
declare function InstalledAddOnExtensionList(version: Marketplace, installedAddOnSid: string): InstalledAddOnExtensionListInstance;

interface InstalledAddOnExtensionResource {
  enabled: boolean;
  friendly_name: string;
  installed_add_on_sid: string;
  product_name: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface InstalledAddOnExtensionListInstance {
  /* jshint ignore:start */
  /**
   * Streams InstalledAddOnExtensionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionList
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
  InstalledAddOnExtensionListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of InstalledAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  InstalledAddOnExtensionListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new InstalledAddOnExtensionPage(this._version, payload, this._solution));
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
   * @description Lists InstalledAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionList
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
  InstalledAddOnExtensionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of InstalledAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionList
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
  InstalledAddOnExtensionListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new InstalledAddOnExtensionPage(this._version, payload, this._solution));
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
 * @property enabled - A Boolean indicating if the Extension will be invoked
 */
export interface UpdateOptions {
  enabled: boolean;
}

/**
 * Options to pass to update
 *
 * @property enabled - A Boolean indicating if the Extension will be invoked
 */
export interface UpdateOptions {
  enabled: boolean;
}


declare class InstalledAddOnExtensionPage extends Page {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionPage
   * @augments Page
   * @description Initialize the InstalledAddOnExtensionPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Marketplace, response: object, solution: object);

  /**
   * Build an instance of InstalledAddOnExtensionInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class InstalledAddOnExtensionInstance {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionInstance
   * @description Initialize the InstalledAddOnExtensionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Extension
   * @property installedAddOnSid - The installed_add_on_sid
   * @property friendlyName - A human-readable description of this Extension
   * @property productName - A human-readable description of the Extension's Product
   * @property uniqueName - The string that uniquely identifies this Extension
   * @property enabled - A Boolean indicating if the Extension will be invoked
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param installedAddOnSid - The installed_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Preview.Marketplace, payload: object, installedAddOnSid: sid, sid: sid);

  _proxy?: InstalledAddOnExtensionContext;
  /**
   * fetch a InstalledAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the InstalledAddOnExtensionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionInstance
   * @instance
   */
  toJSON();
  /**
   * update a InstalledAddOnExtensionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class InstalledAddOnExtensionContext {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionContext
   * @description Initialize the InstalledAddOnExtensionContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param installedAddOnSid - The installed_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Twilio.Preview.Marketplace, installedAddOnSid: sid, sid: sid);

  /**
   * fetch a InstalledAddOnExtensionInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * update a InstalledAddOnExtensionInstance
   *
   * @function update
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { InstalledAddOnExtensionContext, InstalledAddOnExtensionInstance, InstalledAddOnExtensionList, InstalledAddOnExtensionListInstance, InstalledAddOnExtensionPage, InstalledAddOnExtensionResource }