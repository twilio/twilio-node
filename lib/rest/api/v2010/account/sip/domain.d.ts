/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { CredentialListMappingList } from './domain/credentialListMapping';
import { IpAccessControlListMappingList } from './domain/ipAccessControlListMapping';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the DomainList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function DomainList(version: V2010, accountSid: string): DomainListInstance;

interface DomainResource {
  account_sid: string;
  api_version: string;
  auth_type: string;
  date_created: Date;
  date_updated: Date;
  domain_name: string;
  friendly_name: string;
  sid: string;
  sip_registration: boolean;
  subresource_uris: string;
  uri: string;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_status_callback_method: string;
  voice_status_callback_url: string;
  voice_url: string;
}

interface DomainListInstance {
  /* jshint ignore:start */
  /**
   * create a DomainInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.domainName -
   *          The unique address on Twilio to route SIP traffic
   * @param {string} [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param {string} [opts.authType] -
   *          The types of authentication mapped to the domain
   * @param {string} [opts.voiceUrl] - URL Twilio will request when receiving a call
   * @param {string} [opts.voiceMethod] - HTTP method to use with voice_url
   * @param {string} [opts.voiceFallbackUrl] -
   *          URL Twilio will request if an error occurs in executing TwiML
   * @param {string} [opts.voiceFallbackMethod] -
   *          HTTP method used with voice_fallback_url
   * @param {string} [opts.voiceStatusCallbackUrl] -
   *          URL that Twilio will request with status updates
   * @param {string} [opts.voiceStatusCallbackMethod] -
   *          The HTTP method Twilio will use to make requests to the StatusCallback URL.
   * @param {boolean} [opts.sipRegistration] - The sip_registration
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed DomainInstance
   */
  /* jshint ignore:end */
  DomainListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.domainName)) {
      throw new Error('Required parameter "opts.domainName" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'DomainName': _.get(opts, 'domainName'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'AuthType': _.get(opts, 'authType'),
      'VoiceUrl': _.get(opts, 'voiceUrl'),
      'VoiceMethod': _.get(opts, 'voiceMethod'),
      'VoiceFallbackUrl': _.get(opts, 'voiceFallbackUrl'),
      'VoiceFallbackMethod': _.get(opts, 'voiceFallbackMethod'),
      'VoiceStatusCallbackUrl': _.get(opts, 'voiceStatusCallbackUrl'),
      'VoiceStatusCallbackMethod': _.get(opts, 'voiceStatusCallbackMethod'),
      'SipRegistration': serialize.bool(_.get(opts, 'sipRegistration'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new DomainInstance(
        this._version,
        payload,
        this._solution.accountSid,
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
   * Streams DomainInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList
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
  DomainListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  DomainListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new DomainPage(this._version, payload, this._solution));
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
   * @description Lists DomainInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList
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
  DomainListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of DomainInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainList
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
  DomainListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new DomainPage(this._version, payload, this._solution));
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
 * @property authType - The auth_type
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 * @property voiceFallbackMethod - The voice_fallback_method
 * @property voiceFallbackUrl - The voice_fallback_url
 * @property voiceMethod - HTTP method to use with voice_url
 * @property voiceStatusCallbackMethod - The voice_status_callback_method
 * @property voiceStatusCallbackUrl - The voice_status_callback_url
 * @property voiceUrl - The voice_url
 * @property sipRegistration - The sip_registration
 */
export interface UpdateOptions {
  authType?: string;
  friendlyName?: string;
  sipRegistration?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceStatusCallbackMethod?: string;
  voiceStatusCallbackUrl?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to update
 *
 * @property authType - The auth_type
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 * @property voiceFallbackMethod - The voice_fallback_method
 * @property voiceFallbackUrl - The voice_fallback_url
 * @property voiceMethod - HTTP method to use with voice_url
 * @property voiceStatusCallbackMethod - The voice_status_callback_method
 * @property voiceStatusCallbackUrl - The voice_status_callback_url
 * @property voiceUrl - The voice_url
 * @property sipRegistration - The sip_registration
 */
export interface UpdateOptions {
  authType?: string;
  friendlyName?: string;
  sipRegistration?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceStatusCallbackMethod?: string;
  voiceStatusCallbackUrl?: string;
  voiceUrl?: string;
}


declare class DomainPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainPage
   * @augments Page
   * @description Initialize the DomainPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of DomainInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class DomainInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @description Initialize the DomainContext
   *
   * @property accountSid - The unique id of the account that sent the message
   * @property apiVersion - The Twilio API version used to process the message
   * @property authType - The types of authentication mapped to the domain
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property domainName - The unique address on Twilio to route SIP traffic
   * @property friendlyName - A user-specified, human-readable name for the trigger.
   * @property sid - A string that uniquely identifies the SIP Domain
   * @property uri - The URI for this resource
   * @property voiceFallbackMethod - HTTP method used with voice_fallback_url
   * @property voiceFallbackUrl - URL Twilio will request if an error occurs in executing TwiML
   * @property voiceMethod - HTTP method to use with voice_url
   * @property voiceStatusCallbackMethod - The HTTP method Twilio will use to make requests to the StatusCallback URL.
   * @property voiceStatusCallbackUrl - URL that Twilio will request with status updates
   * @property voiceUrl - URL Twilio will request when receiving a call
   * @property subresourceUris - The subresource_uris
   * @property sipRegistration - If SIP registration is allowed
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique Domain Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: DomainContext;
  /**
   * Access the credentialListMappings
   *
   * @function credentialListMappings
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @instance
   */
  credentialListMappings();
  /**
   * fetch a DomainInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the ipAccessControlListMappings
   *
   * @function ipAccessControlListMappings
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @instance
   */
  ipAccessControlListMappings();
  /**
   * remove a DomainInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the DomainInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @instance
   */
  toJSON();
  /**
   * update a DomainInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class DomainContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext
   * @description Initialize the DomainContext
   *
   * @property ipAccessControlListMappings - ipAccessControlListMappings resource
   * @property credentialListMappings - credentialListMappings resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Domain Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  credentialListMappings?: Twilio.Api.V2010.AccountContext.SipContext.DomainContext.CredentialListMappingList;
  /**
   * fetch a DomainInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  ipAccessControlListMappings?: Twilio.Api.V2010.AccountContext.SipContext.DomainContext.IpAccessControlListMappingList;
  /**
   * remove a DomainInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a DomainInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { DomainContext, DomainInstance, DomainList, DomainListInstance, DomainPage, DomainResource }