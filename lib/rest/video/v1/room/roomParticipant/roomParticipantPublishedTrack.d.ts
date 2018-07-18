/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the PublishedTrackList
 *
 * @param version - Version of the resource
 * @param roomSid - Unique Room identifier where this Track is published.
 * @param participantSid - Unique Participant identifier that publishes this Track.
 */
declare function PublishedTrackList(version: V1, roomSid: string, participantSid: string): PublishedTrackListInstance;

interface PublishedTrackResource {
  date_created: Date;
  date_updated: Date;
  enabled: boolean;
  kind: PublishedTrackKind;
  name: string;
  participant_sid: string;
  room_sid: string;
  sid: string;
  url: string;
}

interface PublishedTrackPayload extends PublishedTrackResource, Page.TwilioResponsePayload {
}

interface PublishedTrackSolution {
  participantSid?: string;
  roomSid?: string;
}

interface PublishedTrackListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): PublishedTrackContext;
  /**
   * Streams PublishedTrackInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a published_track
   *
   * @function get
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList
   * @instance
   *
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of PublishedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists PublishedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of PublishedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class PublishedTrackPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackPage
   * @augments Page
   * @description Initialize the PublishedTrackPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of PublishedTrackInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class PublishedTrackInstance {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackInstance
   * @description Initialize the PublishedTrackContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property participantSid - Unique Participant identifier that publishes this Track.
   * @property roomSid - Unique Room identifier where this Track is published.
   * @property name - Track name. Limited to 128 characters.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property enabled - Specifies whether the Track is enabled or not.
   * @property kind - Specifies whether Track represents `audio`, `video` or `data`
   * @property url - The absolute URL for this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - Unique Room identifier where this Track is published.
   * @param participantSid - Unique Participant identifier that publishes this Track.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Video.V1, payload: object, roomSid: sid, participantSid: sid, sid: sid_like);

  _proxy?: PublishedTrackContext;
  /**
   * fetch a PublishedTrackInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the PublishedTrackInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackInstance
   * @instance
   */
  toJSON();
}


declare class PublishedTrackContext {
  /**
   * @constructor Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackContext
   * @description Initialize the PublishedTrackContext
   *
   * @param version - Version of the resource
   * @param roomSid - Unique Room identifier where this Track is published.
   * @param participantSid - Unique Participant identifier that publishes this Track.
   * @param sid - A 34 character string that uniquely identifies this resource.
   */
  constructor(version: Twilio.Video.V1, roomSid: sid_like, participantSid: sid_like, sid: sid_like);

  /**
   * fetch a PublishedTrackInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RoomContext.ParticipantContext.PublishedTrackContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { PublishedTrackContext, PublishedTrackInstance, PublishedTrackList, PublishedTrackListInstance, PublishedTrackPage, PublishedTrackPayload, PublishedTrackResource, PublishedTrackSolution }
