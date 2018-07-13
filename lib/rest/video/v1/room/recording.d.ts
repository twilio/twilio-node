/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the RoomRecordingList
 *
 * @param version - Version of the resource
 * @param roomSid - The room_sid
 */
declare function RoomRecordingList(version: V1, roomSid: string): RoomRecordingListInstance;

interface RoomRecordingResource {
  account_sid: string;
  codec: RoomRecordingCodec;
  container_format: RoomRecordingFormat;
  date_created: Date;
  duration: number;
  grouping_sids: string;
  links: string;
  room_sid: string;
  sid: string;
  size: number;
  source_sid: string;
  status: RoomRecordingStatus;
  track_name: string;
  type: RoomRecordingType;
  url: string;
}

interface RoomRecordingListInstance {
  /* jshint ignore:start */
  /**
   * Streams RoomRecordingInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
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
  RoomRecordingListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomRecordingListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomRecordingPage(this._version, payload, this._solution));
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
   * @description Lists RoomRecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
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
  RoomRecordingListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RoomRecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {room_recording.status} [opts.status] - The status
   * @param {string} [opts.sourceSid] - The source_sid
   * @param {Date} [opts.dateCreatedAfter] - The date_created_after
   * @param {Date} [opts.dateCreatedBefore] - The date_created_before
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomRecordingListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'SourceSid': _.get(opts, 'sourceSid'),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomRecordingPage(this._version, payload, this._solution));
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


declare class RoomRecordingPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingPage
   * @augments Page
   * @description Initialize the RoomRecordingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of RoomRecordingInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RoomRecordingInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @description Initialize the RoomRecordingContext
   *
   * @property accountSid - The account_sid
   * @property status - The status
   * @property dateCreated - The date_created
   * @property sid - The sid
   * @property sourceSid - The source_sid
   * @property size - The size
   * @property url - The url
   * @property type - The type
   * @property duration - The duration
   * @property containerFormat - The container_format
   * @property codec - The codec
   * @property groupingSids - The grouping_sids
   * @property trackName - The track_name
   * @property roomSid - The room_sid
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, sid: sid);

  _proxy?: RoomRecordingContext;
  /**
   * fetch a RoomRecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the RoomRecordingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingInstance
   * @instance
   */
  toJSON();
}


declare class RoomRecordingContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext.RoomRecordingContext
   * @description Initialize the RoomRecordingContext
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, roomSid: sid, sid: sid);

  /**
   * fetch a RoomRecordingInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.RoomRecordingContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { RoomRecordingContext, RoomRecordingInstance, RoomRecordingList, RoomRecordingListInstance, RoomRecordingPage, RoomRecordingResource }