/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { ParticipantListInstance } from './room/roomParticipant';
import { RoomRecordingListInstance } from './room/recording';
import { SerializableClass } from '../../../interfaces';

declare function RoomList(version: V1): RoomListInstance

type RoomRoomStatus = 'in-progress'|'completed'|'failed';

type RoomRoomType = 'peer-to-peer'|'group';

type RoomVideoCodec = 'VP8'|'H264';

interface RoomResource {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/api/rest/account) associated with this Room.
   */
  account_sid: string;
  /**
   * The date that this resource was created, given as a [UTC ISO 8601 Timestamp](http://en.wikipedia.org/wiki/ISO_8601#UTC).
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given as a [UTC ISO 8601 Timestamp](http://en.wikipedia.org/wiki/ISO_8601#UTC).
   */
  date_updated: Date;
  /**
   * The duration of the Room in seconds.
   */
  duration: number;
  /**
   * Enable [Twilio's Network Traversal TURN service](https://www.twilio.com/stun-turn). TURN service is used when direct peer-to-peer media connections cannot be established due to firewall restrictions. When used, [TURN bandwidth usage is billed according to Network Traversal Service rates](https://www.twilio.com/stun-turn/pricing). This setting only applies to Rooms with type `peer-to-peer`.
   */
  enable_turn: boolean;
  /**
   * The end time of the Room, given as a [UTC ISO 8601 Timestamp](http://en.wikipedia.org/wiki/ISO_8601#UTC).
   */
  end_time: Date;
  /**
   * The links
   */
  links: string;
  /**
   * Maximum number of concurrent Participants allowed in the Room. `peer-to-peer` rooms can have a maximum of 10 Participants.
   */
  max_participants: number;
  /**
   * Region for the media server in Group Rooms.  See the [available Media Regions](https://www.twilio.com/docs/api/video/ip-address-whitelisting#group-rooms-media-servers)***This feature is not available in `peer-to-peer` rooms.***
   */
  media_region: string;
  /**
   * Start recording when Participants connect. ***This feature is not available in `peer-to-peer` rooms.***
   */
  record_participants_on_connect: boolean;
  /**
   * A system-generated 34-character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A string representing the status of the Room. It can be one of `in-progress`, `failed` or `completed`.
   */
  status: RoomRoomStatus;
  /**
   * A URL that Twilio sends asynchronous webhook requests to on every Room event. See [Status Callbacks](https://www.twilio.com/docs/api/video/status-callbacks) for details.
   */
  status_callback: string;
  /**
   * HTTP method Twilio should use when requesting the above URL.
   */
  status_callback_method: string;
  /**
   * Type of Room, either `peer-to-peer` or `group`. Will be  `group` by default.
   */
  type: RoomRoomType;
  /**
   * A developer-supplied Name of the Room. This is unique for `in-progress` rooms. SDK clients can use this name to connect to the Room. REST API clients can use this name in place of the Room Sid to interact with the Room as long as the room is `in-progress`.
   */
  unique_name: string;
  /**
   * The absolute URL for this resource.
   */
  url: string;
  /**
   * The video_codecs
   */
  video_codecs: RoomVideoCodec;
}

interface RoomPayload extends RoomResource, Page.TwilioResponsePayload {
}

interface RoomSolution {
}

interface RoomListCreateOptions {
  /**
   * Use Twilio Network Traversal for TURN service. Defaults to true. Only applicable to Rooms with type `peer-to-peer`.
   */
  enableTurn?: boolean;
  /**
   * Maximum number of Participants in the Room. peer-to-peer rooms can have a maximum of 10 Participants.
   */
  maxParticipants?: number;
  /**
   * Region for the media server in Group Rooms.  Default region is `us1`.  See the list of [available Media Regions.](https://www.twilio.com/docs/api/video/ip-address-whitelisting#group-rooms-media-servers)***This feature is not available in `peer-to-peer` rooms.***
   */
  mediaRegion?: string;
  /**
   * Start Participant recording when connected. ***This feature is not available in `peer-to-peer` rooms.***
   */
  recordParticipantsOnConnect?: boolean;
  /**
   * A URL that Twilio sends asynchronous webhook requests to on every room event. If not provided, status callback events will not be dispatched.
   */
  statusCallback?: string;
  /**
   * HTTP method Twilio should use when requesting the above URL. Defaults to `POST`.
   */
  statusCallbackMethod?: string;
  /**
   * Type of room, either `peer-to-peer` or `group`. Will be `group` by default.
   */
  type?: RoomRoomType;
  /**
   * Name of the Room.  This is unique for `in-progress` rooms. If not provided, Room name will be set to the Room Sid.
   */
  uniqueName?: string;
  /**
   * An array of video codecs supported when publishing a Track in the Room.  `VP8` and `H264` codecs are supported.  ***This feature is not available in `peer-to-peer` rooms***
   */
  videoCodecs?: RoomVideoCodec[];
}

interface RoomListEachOptions extends ListEachOptions<RoomInstance> {
  /**
   * Only show Rooms that started on or after this date, given as `YYYY-MM-DD`.
   */
  dateCreatedAfter?: Date;
  /**
   * Only show Rooms that started before this date, given as `YYYY-MM-DD`.
   */
  dateCreatedBefore?: Date;
  /**
   * Only show Rooms with the given status.
   */
  status?: RoomRoomStatus;
  /**
   * Only show Rooms with the provided Name.
   */
  uniqueName?: string;
}

interface RoomListOptions extends ListOptions<RoomInstance> {
  /**
   * Only show Rooms that started on or after this date, given as `YYYY-MM-DD`.
   */
  dateCreatedAfter?: Date;
  /**
   * Only show Rooms that started before this date, given as `YYYY-MM-DD`.
   */
  dateCreatedBefore?: Date;
  /**
   * Only show Rooms with the given status.
   */
  status?: RoomRoomStatus;
  /**
   * Only show Rooms with the provided Name.
   */
  uniqueName?: string;
}

interface RoomListPageOptions extends PageOptions<RoomPage> {
  /**
   * Only show Rooms that started on or after this date, given as `YYYY-MM-DD`.
   */
  dateCreatedAfter?: Date;
  /**
   * Only show Rooms that started before this date, given as `YYYY-MM-DD`.
   */
  dateCreatedBefore?: Date;
  /**
   * Only show Rooms with the given status.
   */
  status?: RoomRoomStatus;
  /**
   * Only show Rooms with the provided Name.
   */
  uniqueName?: string;
}

interface RoomListInstance {
  /**
   * Gets context of a single Room resource
   *
   * @param sid - The sid
   */
  (sid: string): RoomContext;
  /**
   * create a RoomInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RoomInstance
   */
  create(opts?: RoomListCreateOptions): Promise<RoomInstance>;
  /**
   * create a RoomInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: RoomListCreateOptions, callback: (error: Error | null, items: RoomInstance) => any): void;
  /**
   * create a RoomInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback: (error: Error | null, items: RoomInstance) => any): void;
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
   * @param opts - Options for request
   */
  each(opts?: RoomListEachOptions): void;
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
   * @param callback - Callback to handle processed record
   */
  each(callback: (item: RoomInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Room resource
   *
   * @param sid - The sid
   */
  get(sid: string): RoomContext;
  /**
   * Retrieve a single target page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<RoomPage>;
  /**
   * Retrieve a single target page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: RoomPage) => any): void;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: RoomListOptions): Promise<RoomInstance[]>;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: RoomListOptions, callback: (error: Error | null, items: RoomInstance[]) => any): void;
  /**
   * Lists RoomInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: RoomInstance[]) => any): void;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: RoomListPageOptions): Promise<RoomPage>;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: RoomListPageOptions, callback: (error: Error | null, items: RoomPage) => any): void;
  /**
   * Retrieve a single page of RoomInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: RoomPage) => any): void;
}

interface RoomListFetchOptions {
  /**
   * Set to `completed` to end the Room.
   */
  status: RoomRoomStatus;
}

interface RoomListFetchOptions {
  /**
   * Set to `completed` to end the Room.
   */
  status: RoomRoomStatus;
}

declare class RoomPage extends Page<V1, RoomPayload, RoomResource, RoomInstance> {
  constructor(version: V1, response: Response<string>, solution: RoomSolution);

  /**
   * Build an instance of RoomInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RoomPayload): RoomInstance;
}

declare class RoomInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: RoomPayload, sid: string);

  private _proxy: RoomContext;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/api/rest/account) associated with this Room.
   */
  accountSid: string;
  /**
   * The date that this resource was created, given as a [UTC ISO 8601 Timestamp](http://en.wikipedia.org/wiki/ISO_8601#UTC).
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given as a [UTC ISO 8601 Timestamp](http://en.wikipedia.org/wiki/ISO_8601#UTC).
   */
  dateUpdated: Date;
  /**
   * The duration of the Room in seconds.
   */
  duration: number;
  /**
   * Enable [Twilio's Network Traversal TURN service](https://www.twilio.com/stun-turn). TURN service is used when direct peer-to-peer media connections cannot be established due to firewall restrictions. When used, [TURN bandwidth usage is billed according to Network Traversal Service rates](https://www.twilio.com/stun-turn/pricing). This setting only applies to Rooms with type `peer-to-peer`.
   */
  enableTurn: boolean;
  /**
   * The end time of the Room, given as a [UTC ISO 8601 Timestamp](http://en.wikipedia.org/wiki/ISO_8601#UTC).
   */
  endTime: Date;
  /**
   * fetch a RoomInstance
   *
   * @returns Promise that resolves to processed RoomInstance
   */
  fetch(): Promise<RoomInstance>;
  /**
   * fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RoomInstance) => any): void;
  /**
   * The links
   */
  links: string;
  /**
   * Maximum number of concurrent Participants allowed in the Room. `peer-to-peer` rooms can have a maximum of 10 Participants.
   */
  maxParticipants: number;
  /**
   * Region for the media server in Group Rooms.  See the [available Media Regions](https://www.twilio.com/docs/api/video/ip-address-whitelisting#group-rooms-media-servers)***This feature is not available in `peer-to-peer` rooms.***
   */
  mediaRegion: string;
  participants(): ParticipantListInstance;
  /**
   * Start recording when Participants connect. ***This feature is not available in `peer-to-peer` rooms.***
   */
  recordParticipantsOnConnect: boolean;
  recordings(): RoomRecordingListInstance;
  /**
   * A system-generated 34-character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * A string representing the status of the Room. It can be one of `in-progress`, `failed` or `completed`.
   */
  status: RoomRoomStatus;
  /**
   * A URL that Twilio sends asynchronous webhook requests to on every Room event. See [Status Callbacks](https://www.twilio.com/docs/api/video/status-callbacks) for details.
   */
  statusCallback: string;
  /**
   * HTTP method Twilio should use when requesting the above URL.
   */
  statusCallbackMethod: string;
  /**
   * Type of Room, either `peer-to-peer` or `group`. Will be  `group` by default.
   */
  type: RoomRoomType;
  /**
   * A developer-supplied Name of the Room. This is unique for `in-progress` rooms. SDK clients can use this name to connect to the Room. REST API clients can use this name in place of the Room Sid to interact with the Room as long as the room is `in-progress`.
   */
  uniqueName: string;
  /**
   * update a RoomInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RoomInstance
   */
  update(opts: RoomListFetchOptions): Promise<RoomInstance>;
  /**
   * update a RoomInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoomListFetchOptions, callback: (error: Error | null, items: RoomInstance) => any): void;
  /**
   * The absolute URL for this resource.
   */
  url: string;
  /**
   * The video_codecs
   */
  videoCodecs: RoomVideoCodec;
}

declare class RoomContext {
  constructor(version: V1, sid: string);

  /**
   * fetch a RoomInstance
   *
   * @returns Promise that resolves to processed RoomInstance
   */
  fetch(): Promise<RoomInstance>;
  /**
   * fetch a RoomInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RoomInstance) => any): void;
  participants: ParticipantListInstance;
  recordings: RoomRecordingListInstance;
  /**
   * update a RoomInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed RoomInstance
   */
  update(opts: RoomListFetchOptions): Promise<RoomInstance>;
  /**
   * update a RoomInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: RoomListFetchOptions, callback: (error: Error | null, items: RoomInstance) => any): void;
}

export { RoomContext, RoomInstance, RoomList, RoomListCreateOptions, RoomListEachOptions, RoomListFetchOptions, RoomListInstance, RoomListOptions, RoomListPageOptions, RoomPage, RoomPayload, RoomResource, RoomRoomStatus, RoomRoomType, RoomSolution, RoomVideoCodec }
