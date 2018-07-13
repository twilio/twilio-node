/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import serialize = require('../../../base/serialize');
import { InstalledAddOnExtensionList } from './installedAddOn/installedAddOnExtension';
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the InstalledAddOnList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function InstalledAddOnList(version: Marketplace): InstalledAddOnListInstance;

interface InstalledAddOnResource {
  account_sid: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  description: string;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface InstalledAddOnPayload extends InstalledAddOnResource, Page.TwilioResponsePayload {
}

interface InstalledAddOnListInstance {
  /* jshint ignore:start */
  /**
   * create a InstalledAddOnInstance
   *
   * @function create
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.availableAddOnSid -
   *          A string that uniquely identifies the Add-on to install
   * @param {boolean} opts.acceptTermsOfService -
   *          A boolean reflecting your acceptance of the Terms of Service
   * @param {string} [opts.configuration] -
   *          The JSON object representing the configuration
   * @param {string} [opts.uniqueName] -
   *          The string that uniquely identifies this Add-on installation
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed InstalledAddOnInstance
   */
  /* jshint ignore:end */
  InstalledAddOnListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.availableAddOnSid)) {
      throw new Error('Required parameter "opts.availableAddOnSid" missing.');
    }
    if (_.isUndefined(opts.acceptTermsOfService)) {
      throw new Error('Required parameter "opts.acceptTermsOfService" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'AvailableAddOnSid': _.get(opts, 'availableAddOnSid'),
      'AcceptTermsOfService': serialize.bool(_.get(opts, 'acceptTermsOfService')),
      'Configuration': serialize.object(_.get(opts, 'configuration')),
      'UniqueName': _.get(opts, 'uniqueName')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new InstalledAddOnInstance(this._version, payload, this._solution.sid));
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
   * Streams InstalledAddOnInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnList
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
  InstalledAddOnListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  InstalledAddOnListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new InstalledAddOnPage(this._version, payload, this._solution));
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
   * @description Lists InstalledAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnList
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
  InstalledAddOnListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of InstalledAddOnInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnList
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
  InstalledAddOnListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new InstalledAddOnPage(this._version, payload, this._solution));
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
 * @property configuration - The JSON object representing the configuration
 * @property uniqueName - The string that uniquely identifies this Add-on installation
 */
export interface UpdateOptions {
  configuration?: string;
  uniqueName?: string;
}

/**
 * Options to pass to update
 *
 * @property configuration - The JSON object representing the configuration
 * @property uniqueName - The string that uniquely identifies this Add-on installation
 */
export interface UpdateOptions {
  configuration?: string;
  uniqueName?: string;
}


declare class InstalledAddOnPage extends Page {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnPage
   * @augments Page
   * @description Initialize the InstalledAddOnPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Marketplace, response: object, solution: object);

  /**
   * Build an instance of InstalledAddOnInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class InstalledAddOnInstance {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @description Initialize the InstalledAddOnContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Add-on installation
   * @property accountSid - The Account id that has installed this Add-on
   * @property friendlyName - A description of this Add-on installation
   * @property description - A short description of the Add-on functionality
   * @property configuration - The JSON object representing the current configuration
   * @property uniqueName - The string that uniquely identifies this Add-on installation
   * @property dateCreated - The date this Add-on installation was created
   * @property dateUpdated - The date this Add-on installation was last updated
   * @property url - The url
   * @property links - A dictionary of URLs for related resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Twilio.Preview.Marketplace, payload: object, sid: sid);

  _proxy?: InstalledAddOnContext;
  /**
   * Access the extensions
   *
   * @function extensions
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   */
  extensions();
  /**
   * fetch a InstalledAddOnInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a InstalledAddOnInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the InstalledAddOnInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   */
  toJSON();
  /**
   * update a InstalledAddOnInstance
   *
   * @function update
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class InstalledAddOnContext {
  /**
   * @constructor Twilio.Preview.Marketplace.InstalledAddOnContext
   * @description Initialize the InstalledAddOnContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property extensions - extensions resource
   *
   * @param version - Version of the resource
   * @param sid - The unique Installed Add-on Sid
   */
  constructor(version: Twilio.Preview.Marketplace, sid: sid);

  extensions?: Twilio.Preview.Marketplace.InstalledAddOnContext.InstalledAddOnExtensionList;
  /**
   * fetch a InstalledAddOnInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a InstalledAddOnInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a InstalledAddOnInstance
   *
   * @function update
   * @memberof Twilio.Preview.Marketplace.InstalledAddOnContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { InstalledAddOnContext, InstalledAddOnInstance, InstalledAddOnList, InstalledAddOnListInstance, InstalledAddOnPage, InstalledAddOnPayload, InstalledAddOnResource }
