/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { ParticipantList } from './room/roomParticipant';
import { RoomRecordingList } from './room/recording';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the RoomList
 *
 * @param version - Version of the resource
 */
declare function RoomList(version: V1): RoomListInstance;

interface RoomResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: number;
  enable_turn: boolean;
  end_time: Date;
  links: string;
  max_participants: number;
  media_region: string;
  record_participants_on_connect: boolean;
  sid: string;
  status: RoomRoomStatus;
  status_callback: string;
  status_callback_method: string;
  type: RoomRoomType;
  unique_name: string;
  url: string;
  video_codecs: RoomVideoCodec;
}

interface RoomPayload extends RoomResource, Page.TwilioResponsePayload {
}

interface RoomListInstance {
  /* jshint ignore:start */
  /**
   * create a RoomInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {boolean} [opts.enableTurn] -
   *          Use Twilio Network Traversal for TURN service.
   * @param {room.room_type} [opts.type] -
   *          Type of room, either peer-to-peer or group.
   * @param {string} [opts.uniqueName] - Name of the Room.
   * @param {string} [opts.statusCallback] -
   *          A URL that Twilio sends asynchronous webhook requests to on every room event.
   * @param {string} [opts.statusCallbackMethod] -
   *          HTTP method Twilio should use when requesting the above URL.
   * @param {number} [opts.maxParticipants] -
   *          Maximum number of Participants in the Room.
   * @param {boolean} [opts.recordParticipantsOnConnect] -
   *          Start Participant recording when connected.
   * @param {room.video_codec|list} [opts.videoCodecs] -
   *          An array of video codecs supported when publishing a Track in the Room.
   * @param {string} [opts.mediaRegion] - Region for the media server in Group Rooms.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed RoomInstance
   */
  /* jshint ignore:end */
  RoomListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EnableTurn': serialize.bool(_.get(opts, 'enableTurn')),
      'Type': _.get(opts, 'type'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'StatusCallback': _.get(opts, 'statusCallback'),
      'StatusCallbackMethod': _.get(opts, 'statusCallbackMethod'),
      'MaxParticipants': _.get(opts, 'maxParticipants'),
      'RecordParticipantsOnConnect': serialize.bool(_.get(opts, 'recordParticipantsOnConnect')),
      'VideoCodecs': serialize.map(_.get(opts, 'videoCodecs'), function(e) { return e; }),
      'MediaRegion': _.get(opts, 'mediaRegion')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomInstance(this._version, payload, this._solution.sid));
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
   * Streams RoomInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {room.room_status} [opts.status] - Only show Rooms with the given status.
   * @param {string} [opts.uniqueName] - Only show Rooms with the provided Name.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Rooms that started on or after this date, given as YYYY-MM-DD.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Rooms that started before this date, given as YYYY-MM-DD.
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
  RoomListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomPage(this._version, payload, this._solution));
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
   * @description Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {room.room_status} [opts.status] - Only show Rooms with the given status.
   * @param {string} [opts.uniqueName] - Only show Rooms with the provided Name.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Rooms that started on or after this date, given as YYYY-MM-DD.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Rooms that started before this date, given as YYYY-MM-DD.
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
  RoomListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {room.room_status} [opts.status] - Only show Rooms with the given status.
   * @param {string} [opts.uniqueName] - Only show Rooms with the provided Name.
   * @param {Date} [opts.dateCreatedAfter] -
   *          Only show Rooms that started on or after this date, given as YYYY-MM-DD.
   * @param {Date} [opts.dateCreatedBefore] -
   *          Only show Rooms that started before this date, given as YYYY-MM-DD.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RoomListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'UniqueName': _.get(opts, 'uniqueName'),
      'DateCreatedAfter': serialize.iso8601DateTime(_.get(opts, 'dateCreatedAfter')),
      'DateCreatedBefore': serialize.iso8601DateTime(_.get(opts, 'dateCreatedBefore')),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RoomPage(this._version, payload, this._solution));
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
 * @property status - Set to completed to end the Room.
 */
export interface UpdateOptions {
  status: room.room_status;
}

/**
 * Options to pass to update
 *
 * @property status - Set to completed to end the Room.
 */
export interface UpdateOptions {
  status: room.room_status;
}


declare class RoomPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomPage
   * @augments Page
   * @description Initialize the RoomPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of RoomInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RoomInstance {
  /**
   * @constructor Twilio.Video.V1.RoomInstance
   * @description Initialize the RoomContext
   *
   * @property sid - A system-generated 34-character string that uniquely identifies this resource.
   * @property status - A string representing the status of the Room.
   * @property dateCreated - The date that this resource was created, given as a UTC ISO 8601 Timestamp.
   * @property dateUpdated - The date that this resource was last updated, given as a UTC ISO 8601 Timestamp.
   * @property accountSid - The unique ID of the Account associated with this Room.
   * @property enableTurn - Enable Twilio's Network Traversal TURN service.
   * @property uniqueName - A developer-supplied Name of the Room.
   * @property statusCallback - A URL that Twilio sends asynchronous webhook requests to on every Room event.
   * @property statusCallbackMethod - HTTP method Twilio should use when requesting the above URL.
   * @property endTime - The end time of the Room, given as a UTC ISO 8601 Timestamp.
   * @property duration - The duration of the Room in seconds.
   * @property type - Type of Room, either peer-to-peer or group.
   * @property maxParticipants - Maximum number of concurrent Participants allowed in the Room.
   * @property recordParticipantsOnConnect - Start recording when Participants connect.
   * @property videoCodecs - The video_codecs
   * @property mediaRegion - Region for the media server in Group Rooms.
   * @property url - The absolute URL for this resource.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, payload: object, sid: sid_like);

  _proxy?: RoomContext;
  /**
   * fetch a RoomInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the participants
   *
   * @function participants
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   */
  participants();
  /**
   * Access the recordings
   *
   * @function recordings
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   */
  recordings();
  /**
   * Produce a plain JSON object version of the RoomInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   */
  toJSON();
  /**
   * update a RoomInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class RoomContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext
   * @description Initialize the RoomContext
   *
   * @property recordings - recordings resource
   * @property participants - participants resource
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Twilio.Video.V1, sid: sid_like);

  /**
   * fetch a RoomInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  participants?: Twilio.Video.V1.RoomContext.ParticipantList;
  recordings?: Twilio.Video.V1.RoomContext.RoomRecordingList;
  /**
   * update a RoomInstance
   *
   * @function update
   * @memberof Twilio.Video.V1.RoomContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { RoomContext, RoomInstance, RoomList, RoomListInstance, RoomPage, RoomPayload, RoomResource }
