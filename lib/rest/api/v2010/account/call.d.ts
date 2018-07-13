/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { FeedbackList } from './call/feedback';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { NotificationList } from './call/notification';
import { RecordingList } from './call/recording';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the CallList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account responsible for creating this Call
 */
declare function CallList(version: V2010, accountSid: string): CallListInstance;

interface CallResource {
  account_sid: string;
  annotation: string;
  answered_by: string;
  api_version: string;
  caller_name: string;
  date_created: Date;
  date_updated: Date;
  direction: string;
  duration: string;
  end_time: Date;
  forwarded_from: string;
  from: string;
  from_formatted: string;
  group_sid: string;
  parent_call_sid: string;
  phone_number_sid: string;
  price: number;
  price_unit: string;
  sid: string;
  start_time: Date;
  status: CallStatus;
  subresource_uris: string;
  to: string;
  to_formatted: string;
  uri: string;
}

interface CallListInstance {
  /* jshint ignore:start */
  /**
   * create a CallInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.CallList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.to -
   *          Phone number, SIP address, or client identifier to call
   * @param {string} opts.from - Twilio number from which to originate the call
   * @param {string} [opts.method] - HTTP method to use to fetch TwiML
   * @param {string} [opts.fallbackUrl] - Fallback URL in case of error
   * @param {string} [opts.fallbackMethod] - HTTP Method to use with FallbackUrl
   * @param {string} [opts.statusCallback] - Status Callback URL
   * @param {string|list} [opts.statusCallbackEvent] -
   *          The call progress events that Twilio will send webhooks on.
   * @param {string} [opts.statusCallbackMethod] -
   *          HTTP Method to use with StatusCallback
   * @param {string} [opts.sendDigits] - Digits to send
   * @param {string} [opts.ifMachine] - The if_machine
   * @param {number} [opts.timeout] - Number of seconds to wait for an answer
   * @param {boolean} [opts.record] - Whether or not to record the Call
   * @param {string} [opts.recordingChannels] -
   *          mono or dualSet this parameter to specify the number of channels in the final recording.
   * @param {string} [opts.recordingStatusCallback] -
   *          A URL that Twilio will send a webhook request to when the recording is available for access.
   * @param {string} [opts.recordingStatusCallbackMethod] -
   *          The HTTP method Twilio should use when requesting the `RecordingStatusCallback` URL.
   * @param {string} [opts.sipAuthUsername] - The sip_auth_username
   * @param {string} [opts.sipAuthPassword] - The sip_auth_password
   * @param {string} [opts.machineDetection] -
   *          Enable machine detection or end of greeting detection
   * @param {number} [opts.machineDetectionTimeout] -
   *          Number of miliseconds to wait for machine detection
   * @param {string|list} [opts.recordingStatusCallbackEvent] -
   *          The recording status changes that Twilio will send webhooks on to the URL specified in RecordingStatusCallback.
   * @param {string} [opts.trim] -
   *          Set this parameter to control trimming of silence on the recording.
   * @param {string} [opts.callerId] -
   *          The phone number, SIP address, or Client identifier that made this Call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`.
   * @param {string} [opts.url] - Url from which to fetch TwiML
   * @param {string} [opts.applicationSid] -
   *          ApplicationSid that configures from where to fetch TwiML
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed CallInstance
   */
  /* jshint ignore:end */
  CallListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.to)) {
      throw new Error('Required parameter "opts.to" missing.');
    }
    if (_.isUndefined(opts.from)) {
      throw new Error('Required parameter "opts.from" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'To': _.get(opts, 'to'),
      'From': _.get(opts, 'from'),
      'Url': _.get(opts, 'url'),
      'ApplicationSid': _.get(opts, 'applicationSid'),
      'Method': _.get(opts, 'method'),
      'FallbackUrl': _.get(opts, 'fallbackUrl'),
      'FallbackMethod': _.get(opts, 'fallbackMethod'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackEvent': serialize.map(_.get(opts, 'statusCallbackEvent'), function(e) { return e; }),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'SendDigits': _.get(opts, 'sendDigits'),
      'IfMachine': _.get(opts, 'ifMachine'),
      'Timeout': _.get(opts, 'timeout'),
      'Record': serialize.bool(_.get(opts, 'record')),
      'RecordingChannels': _.get(opts, 'recordingChannels'),
      'RecordingStatusCallback': _.get(opts, 'recordingStatusCallback'),
      'RecordingStatusCallbackMethod': _.get(opts, 'recordingStatusCallbackMethod'),
      'SipAuthUsername': _.get(opts, 'sipAuthUsername'),
      'SipAuthPassword': _.get(opts, 'sipAuthPassword'),
      'MachineDetection': _.get(opts, 'machineDetection'),
      'MachineDetectionTimeout': _.get(opts, 'machineDetectionTimeout'),
      'RecordingStatusCallbackEvent': serialize.map(_.get(opts, 'recordingStatusCallbackEvent'), function(e) { return e; }),
      'Trim': _.get(opts, 'trim'),
      'CallerId': _.get(opts, 'callerId')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CallInstance(
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
   * Streams CallInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.CallList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.to] - Phone number or Client identifier to filter `to` on
   * @param {string} [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param {string} [opts.parentCallSid] - Parent Call Sid to filter on
   * @param {call.status} [opts.status] - Status to filter on
   * @param {Date} [opts.startTimeBefore] - StartTime to filter on
   * @param {Date} [opts.startTime] - StartTime to filter on
   * @param {Date} [opts.startTimeAfter] - StartTime to filter on
   * @param {Date} [opts.endTimeBefore] - EndTime to filter on
   * @param {Date} [opts.endTime] - EndTime to filter on
   * @param {Date} [opts.endTimeAfter] - EndTime to filter on
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
  CallListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of CallInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.CallList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CallListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new CallPage(this._version, payload, this._solution));
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
   * @description Lists CallInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.CallList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.to] - Phone number or Client identifier to filter `to` on
   * @param {string} [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param {string} [opts.parentCallSid] - Parent Call Sid to filter on
   * @param {call.status} [opts.status] - Status to filter on
   * @param {Date} [opts.startTimeBefore] - StartTime to filter on
   * @param {Date} [opts.startTime] - StartTime to filter on
   * @param {Date} [opts.startTimeAfter] - StartTime to filter on
   * @param {Date} [opts.endTimeBefore] - EndTime to filter on
   * @param {Date} [opts.endTime] - EndTime to filter on
   * @param {Date} [opts.endTimeAfter] - EndTime to filter on
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
  CallListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of CallInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.CallList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string} [opts.to] - Phone number or Client identifier to filter `to` on
   * @param {string} [opts.from] -
   *          Phone number or Client identifier to filter `from` on
   * @param {string} [opts.parentCallSid] - Parent Call Sid to filter on
   * @param {call.status} [opts.status] - Status to filter on
   * @param {Date} [opts.startTimeBefore] - StartTime to filter on
   * @param {Date} [opts.startTime] - StartTime to filter on
   * @param {Date} [opts.startTimeAfter] - StartTime to filter on
   * @param {Date} [opts.endTimeBefore] - EndTime to filter on
   * @param {Date} [opts.endTime] - EndTime to filter on
   * @param {Date} [opts.endTimeAfter] - EndTime to filter on
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  CallListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'To': _.get(opts, 'to'),
      'From': _.get(opts, 'from'),
      'ParentCallSid': _.get(opts, 'parentCallSid'),
      'Status': _.get(opts, 'status'),
      'StartTime<': serialize.iso8601DateTime(_.get(opts, 'startTimeBefore')),
      'StartTime': serialize.iso8601DateTime(_.get(opts, 'startTime')),
      'StartTime>': serialize.iso8601DateTime(_.get(opts, 'startTimeAfter')),
      'EndTime<': serialize.iso8601DateTime(_.get(opts, 'endTimeBefore')),
      'EndTime': serialize.iso8601DateTime(_.get(opts, 'endTime')),
      'EndTime>': serialize.iso8601DateTime(_.get(opts, 'endTimeAfter')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new CallPage(this._version, payload, this._solution));
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
 * @property url - URL that returns TwiML
 * @property method - HTTP method to use to fetch TwiML
 * @property status - Status to update the Call with
 * @property fallbackUrl - Fallback URL in case of error
 * @property fallbackMethod - HTTP Method to use with FallbackUrl
 * @property statusCallback - Status Callback URL
 * @property statusCallbackMethod - HTTP Method to use with StatusCallback
 */
export interface UpdateOptions {
  fallbackMethod?: string;
  fallbackUrl?: string;
  method?: string;
  status?: call.update_status;
  statusCallback?: string;
  statusCallbackMethod?: string;
  url?: string;
}

/**
 * Options to pass to update
 *
 * @property url - URL that returns TwiML
 * @property method - HTTP method to use to fetch TwiML
 * @property status - Status to update the Call with
 * @property fallbackUrl - Fallback URL in case of error
 * @property fallbackMethod - HTTP Method to use with FallbackUrl
 * @property statusCallback - Status Callback URL
 * @property statusCallbackMethod - HTTP Method to use with StatusCallback
 */
export interface UpdateOptions {
  fallbackMethod?: string;
  fallbackUrl?: string;
  method?: string;
  status?: call.update_status;
  statusCallback?: string;
  statusCallbackMethod?: string;
  url?: string;
}


declare class CallPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallPage
   * @augments Page
   * @description Initialize the CallPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of CallInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.CallPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CallInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallInstance
   * @description Initialize the CallContext
   *
   * @property accountSid - The unique id of the Account responsible for creating this Call
   * @property annotation - The annotation provided for the Call
   * @property answeredBy - Either `human` or `machine` if this Call was initiated with answering machine detection. Empty otherwise.
   * @property apiVersion - The API Version used to create the Call
   * @property callerName - The caller's name if this Call was an incoming call to a phone number with Caller ID Lookup enabled. Empty otherwise.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property direction - A string describing the direction of the Call. `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `Dial` verb.
   * @property duration - The length of the Call in seconds.
   * @property endTime - The end time of the Call. Null if the call did not complete successfully.
   * @property forwardedFrom - The forwarding phone number if this Call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Empty otherwise.
   * @property from - The phone number, SIP address or Client identifier that made this Call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   * @property fromFormatted - The phone number, SIP address or Client identifier that made this Call. Formatted for display.
   * @property groupSid - A 34-character Group Sid associated with this Call. Empty if no Group is associated with the Call.
   * @property parentCallSid - A 34-character string that uniquely identifies the Call that created this leg.
   * @property phoneNumberSid - If the call was inbound, this is the Sid of the `IncomingPhoneNumber` that received the call. If the call was outbound, it is the Sid of the `OutgoingCallerId` from which the call was placed.
   * @property price - The charge for this Call, in the currency associated with the account. Populated after the call is completed. May not be immediately available.
   * @property priceUnit - The currency in which `Price` is measured.
   * @property sid - A 34-character string that uniquely identifies the Call resource.
   * @property startTime - The start time of the Call. Null if the call has not yet been dialed.
   * @property status - A string representing the status of the Call.
   * @property subresourceUris - Call Instance Subresources
   * @property to - The phone number, SIP address or Client identifier that received this Call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   * @property toFormatted - The phone number, SIP address or Client identifier that received this Call. Formatted for display.
   * @property uri - The URI for this resource, relative to `https://api.twilio.com`
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account responsible for creating this Call
   * @param sid - Call Sid that uniquely identifies the Call to fetch
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: CallContext;
  /**
   * Access the feedback
   *
   * @function feedback
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   */
  feedback();
  /**
   * fetch a CallInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the notifications
   *
   * @function notifications
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   */
  notifications();
  /**
   * Access the recordings
   *
   * @function recordings
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   */
  recordings();
  /**
   * remove a CallInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CallInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   */
  toJSON();
  /**
   * update a CallInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.CallInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class CallContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.CallContext
   * @description Initialize the CallContext
   *
   * @property recordings - recordings resource
   * @property notifications - notifications resource
   * @property feedback - feedback resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Call Sid that uniquely identifies the Call to fetch
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  feedback?: Twilio.Api.V2010.AccountContext.CallContext.FeedbackList;
  /**
   * fetch a CallInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.CallContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  notifications?: Twilio.Api.V2010.AccountContext.CallContext.NotificationList;
  recordings?: Twilio.Api.V2010.AccountContext.CallContext.RecordingList;
  /**
   * remove a CallInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.CallContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CallInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.CallContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { CallContext, CallInstance, CallList, CallListInstance, CallPage, CallResource }