/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the LocalList
 *
 * @param version - Version of the resource
 * @param accountSid - The 34 character string that uniquely identifies your account.
 * @param countryCode - The ISO Country code to lookup phone numbers for.
 */
declare function LocalList(version: V2010, accountSid: string, countryCode: string): LocalListInstance;

interface LocalResource {
  address_requirements: string;
  beta: boolean;
  capabilities: string;
  friendly_name: string;
  iso_country: string;
  lata: string;
  latitude: number;
  locality: string;
  longitude: number;
  phone_number: string;
  postal_code: string;
  rate_center: string;
  region: string;
}

interface LocalListInstance {
  /* jshint ignore:start */
  /**
   * Streams LocalInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.areaCode] - Find phone numbers in the specified area code.
   * @param {string} [opts.contains] - A pattern on which to match phone numbers.
   * @param {boolean} [opts.smsEnabled] -
   *          This indicates whether the phone numbers can receive text messages.
   * @param {boolean} [opts.mmsEnabled] -
   *          This indicates whether the phone numbers can receive MMS messages.
   * @param {boolean} [opts.voiceEnabled] -
   *          This indicates whether the phone numbers can receive calls.
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          Indicates whether the response includes phone numbers which require any Address.
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          Indicates whether the response includes phone numbers which require a local Address.
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          Indicates whether the response includes phone numbers which require a foreign Address.
   * @param {boolean} [opts.beta] - Include phone numbers new to the Twilio platform.
   * @param {string} [opts.nearNumber] -
   *          Given a phone number, find a geographically close number within Distance miles. (US/Canada only)
   * @param {string} [opts.nearLatLong] -
   *          Given a latitude/longitude pair lat,long find geographically close numbers within Distance miles. (US/Canada only)
   * @param {number} [opts.distance] -
   *          Specifies the search radius for a Near- query in miles. (US/Canada only)
   * @param {string} [opts.inPostalCode] -
   *          Limit results to a particular postal code. (US/Canada only)
   * @param {string} [opts.inRegion] -
   *          Limit results to a particular region. (US/Canada only)
   * @param {string} [opts.inRateCenter] -
   *          Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
   * @param {string} [opts.inLata] -
   *          Limit results to a specific Local access and transport area. (US/Canada only)
   * @param {string} [opts.inLocality] -
   *          Limit results to a particular locality. (US/Canada only)
   * @param {boolean} [opts.faxEnabled] -
   *          This indicates whether the phone numbers can receive faxes.
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
  LocalListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new LocalPage(this._version, payload, this._solution));
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
   * @description Lists LocalInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.areaCode] - Find phone numbers in the specified area code.
   * @param {string} [opts.contains] - A pattern on which to match phone numbers.
   * @param {boolean} [opts.smsEnabled] -
   *          This indicates whether the phone numbers can receive text messages.
   * @param {boolean} [opts.mmsEnabled] -
   *          This indicates whether the phone numbers can receive MMS messages.
   * @param {boolean} [opts.voiceEnabled] -
   *          This indicates whether the phone numbers can receive calls.
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          Indicates whether the response includes phone numbers which require any Address.
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          Indicates whether the response includes phone numbers which require a local Address.
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          Indicates whether the response includes phone numbers which require a foreign Address.
   * @param {boolean} [opts.beta] - Include phone numbers new to the Twilio platform.
   * @param {string} [opts.nearNumber] -
   *          Given a phone number, find a geographically close number within Distance miles. (US/Canada only)
   * @param {string} [opts.nearLatLong] -
   *          Given a latitude/longitude pair lat,long find geographically close numbers within Distance miles. (US/Canada only)
   * @param {number} [opts.distance] -
   *          Specifies the search radius for a Near- query in miles. (US/Canada only)
   * @param {string} [opts.inPostalCode] -
   *          Limit results to a particular postal code. (US/Canada only)
   * @param {string} [opts.inRegion] -
   *          Limit results to a particular region. (US/Canada only)
   * @param {string} [opts.inRateCenter] -
   *          Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
   * @param {string} [opts.inLata] -
   *          Limit results to a specific Local access and transport area. (US/Canada only)
   * @param {string} [opts.inLocality] -
   *          Limit results to a particular locality. (US/Canada only)
   * @param {boolean} [opts.faxEnabled] -
   *          This indicates whether the phone numbers can receive faxes.
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
  LocalListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of LocalInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.areaCode] - Find phone numbers in the specified area code.
   * @param {string} [opts.contains] - A pattern on which to match phone numbers.
   * @param {boolean} [opts.smsEnabled] -
   *          This indicates whether the phone numbers can receive text messages.
   * @param {boolean} [opts.mmsEnabled] -
   *          This indicates whether the phone numbers can receive MMS messages.
   * @param {boolean} [opts.voiceEnabled] -
   *          This indicates whether the phone numbers can receive calls.
   * @param {boolean} [opts.excludeAllAddressRequired] -
   *          Indicates whether the response includes phone numbers which require any Address.
   * @param {boolean} [opts.excludeLocalAddressRequired] -
   *          Indicates whether the response includes phone numbers which require a local Address.
   * @param {boolean} [opts.excludeForeignAddressRequired] -
   *          Indicates whether the response includes phone numbers which require a foreign Address.
   * @param {boolean} [opts.beta] - Include phone numbers new to the Twilio platform.
   * @param {string} [opts.nearNumber] -
   *          Given a phone number, find a geographically close number within Distance miles. (US/Canada only)
   * @param {string} [opts.nearLatLong] -
   *          Given a latitude/longitude pair lat,long find geographically close numbers within Distance miles. (US/Canada only)
   * @param {number} [opts.distance] -
   *          Specifies the search radius for a Near- query in miles. (US/Canada only)
   * @param {string} [opts.inPostalCode] -
   *          Limit results to a particular postal code. (US/Canada only)
   * @param {string} [opts.inRegion] -
   *          Limit results to a particular region. (US/Canada only)
   * @param {string} [opts.inRateCenter] -
   *          Limit results to a specific rate center, or given a phone number search within the same rate center as that number. (US/Canada only)
   * @param {string} [opts.inLata] -
   *          Limit results to a specific Local access and transport area. (US/Canada only)
   * @param {string} [opts.inLocality] -
   *          Limit results to a particular locality. (US/Canada only)
   * @param {boolean} [opts.faxEnabled] -
   *          This indicates whether the phone numbers can receive faxes.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  LocalListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'AreaCode': _.get(opts, 'areaCode'),
      'Contains': _.get(opts, 'contains'),
      'SmsEnabled': serialize.bool(_.get(opts, 'smsEnabled')),
      'MmsEnabled': serialize.bool(_.get(opts, 'mmsEnabled')),
      'VoiceEnabled': serialize.bool(_.get(opts, 'voiceEnabled')),
      'ExcludeAllAddressRequired': serialize.bool(_.get(opts, 'excludeAllAddressRequired')),
      'ExcludeLocalAddressRequired': serialize.bool(_.get(opts, 'excludeLocalAddressRequired')),
      'ExcludeForeignAddressRequired': serialize.bool(_.get(opts, 'excludeForeignAddressRequired')),
      'Beta': serialize.bool(_.get(opts, 'beta')),
      'NearNumber': _.get(opts, 'nearNumber'),
      'NearLatLong': _.get(opts, 'nearLatLong'),
      'Distance': _.get(opts, 'distance'),
      'InPostalCode': _.get(opts, 'inPostalCode'),
      'InRegion': _.get(opts, 'inRegion'),
      'InRateCenter': _.get(opts, 'inRateCenter'),
      'InLata': _.get(opts, 'inLata'),
      'InLocality': _.get(opts, 'inLocality'),
      'FaxEnabled': serialize.bool(_.get(opts, 'faxEnabled')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new LocalPage(this._version, payload, this._solution));
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


declare class LocalPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalPage
   * @augments Page
   * @description Initialize the LocalPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of LocalInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class LocalInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalInstance
   * @description Initialize the LocalContext
   *
   * @property friendlyName - A nicely-formatted version of the phone number.
   * @property phoneNumber - The phone number, in E.
   * @property lata - The LATA of this phone number.
   * @property locality - The locality/city of this phone number.
   * @property rateCenter - The rate center of this phone number.
   * @property latitude - The latitude coordinate of this phone number.
   * @property longitude - The longitude coordinate of this phone number.
   * @property region - The two-letter state or province abbreviation of this phone number.
   * @property postalCode - The postal code of this phone number.
   * @property isoCountry - The ISO country code of this phone number.
   * @property addressRequirements - This indicates whether the phone number requires you or your customer to have an Address registered with Twilio.
   * @property beta - Phone numbers new to the Twilio platform are marked as beta.
   * @property capabilities - This is a set of boolean properties that indicate whether a phone number can receive calls or messages.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The 34 character string that uniquely identifies your account.
   * @param countryCode - The ISO Country code to lookup phone numbers for.
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: account_sid, countryCode: iso_country_code);

  /**
   * Produce a plain JSON object version of the LocalInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryContext.LocalInstance
   * @instance
   */
  toJSON();
}

export { LocalInstance, LocalList, LocalListInstance, LocalPage, LocalResource }