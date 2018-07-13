/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { LocalList } from './availablePhoneNumber/local';
import { MachineToMachineList } from './availablePhoneNumber/machineToMachine';
import { MobileList } from './availablePhoneNumber/mobile';
import { NationalList } from './availablePhoneNumber/national';
import { SerializableClass } from '../../../../interfaces';
import { SharedCostList } from './availablePhoneNumber/sharedCost';
import { TollFreeList } from './availablePhoneNumber/tollFree';
import { VoipList } from './availablePhoneNumber/voip';

/**
 * @description Initialize the AvailablePhoneNumberCountryList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function AvailablePhoneNumberCountryList(version: V2010, accountSid: string): AvailablePhoneNumberCountryListInstance;

interface AvailablePhoneNumberCountryResource {
  beta: boolean;
  country: string;
  country_code: string;
  subresource_uris: string;
  uri: string;
}

interface AvailablePhoneNumberCountryListInstance {
  /* jshint ignore:start */
  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
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
  AvailablePhoneNumberCountryListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AvailablePhoneNumberCountryListInstance.getPage = function getPage(targetUrl,
      callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new AvailablePhoneNumberCountryPage(this._version, payload, this._solution));
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
   * @description Lists AvailablePhoneNumberCountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
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
  AvailablePhoneNumberCountryListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList
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
  AvailablePhoneNumberCountryListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new AvailablePhoneNumberCountryPage(this._version, payload, this._solution));
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


declare class AvailablePhoneNumberCountryPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryPage
   * @augments Page
   * @description Initialize the AvailablePhoneNumberCountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of AvailablePhoneNumberCountryInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class AvailablePhoneNumberCountryInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @description Initialize the AvailablePhoneNumberCountryContext
   *
   * @property countryCode - The ISO Country code to lookup phone numbers for.
   * @property country - The country
   * @property uri - The uri
   * @property beta - True if new to Twilio platform.
   * @property subresourceUris - The subresource_uris
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param countryCode - The country_code
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, countryCode: iso_country_code);

  _proxy?: AvailablePhoneNumberCountryContext;
  /**
   * fetch a AvailablePhoneNumberCountryInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the local
   *
   * @function local
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  local();
  /**
   * Access the machineToMachine
   *
   * @function machineToMachine
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  machineToMachine();
  /**
   * Access the mobile
   *
   * @function mobile
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  mobile();
  /**
   * Access the national
   *
   * @function national
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  national();
  /**
   * Access the sharedCost
   *
   * @function sharedCost
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  sharedCost();
  /**
   * Produce a plain JSON object version of the AvailablePhoneNumberCountryInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  toJSON();
  /**
   * Access the tollFree
   *
   * @function tollFree
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  tollFree();
  /**
   * Access the voip
   *
   * @function voip
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryInstance
   * @instance
   */
  voip();
}


declare class AvailablePhoneNumberCountryContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext
   * @description Initialize the AvailablePhoneNumberCountryContext
   *
   * @property local - local resource
   * @property tollFree - tollFree resource
   * @property mobile - mobile resource
   * @property national - national resource
   * @property voip - voip resource
   * @property sharedCost - sharedCost resource
   * @property machineToMachine - machineToMachine resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param countryCode - The country_code
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, countryCode: iso_country_code);

  /**
   * fetch a AvailablePhoneNumberCountryInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  local?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList;
  machineToMachine?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MachineToMachineList;
  mobile?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.MobileList;
  national?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.NationalList;
  sharedCost?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.SharedCostList;
  tollFree?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.TollFreeList;
  voip?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.VoipList;
}

export { AvailablePhoneNumberCountryContext, AvailablePhoneNumberCountryInstance, AvailablePhoneNumberCountryList, AvailablePhoneNumberCountryListInstance, AvailablePhoneNumberCountryPage, AvailablePhoneNumberCountryResource }