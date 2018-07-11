/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { AddOnResultListInstance } from './recording/addOnResult';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';
import { TranscriptionListInstance } from './recording/transcription';

declare function RecordingList(version: V2010, accountSid: string): RecordingListInstance

type RecordingStatus = 'in-progress'|'paused'|'stopped'|'processing'|'completed'|'failed';

type RecordingSource = 'DialVerb'|'Conference'|'OutboundAPI'|'Trunking'|'RecordVerb'|'StartCallRecordingAPI'|'StartConferenceRecordingAPI';

interface RecordingResource {
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/api/rest/account) responsible for this recording.
   */
  account_sid: string;
  /**
   * The version of the API in use during the recording.
   */
  api_version: string;
  /**
   * A unique identifier for the call associated with the recording. This will always refer to the parent leg of a two leg call.
   */
  call_sid: string;
  /**
   * The number of channels in the final recording file as an integer.  Possible values are `1`, `2`.  Separating a two leg call into two separate channels of the recording file is supported in [Dial](https://www.twilio.com/docs/api/twiml/dial#attributes-record) and [Outbound Rest API](https://www.twilio.com/docs/api/voice/making-calls) record options.
   */
  channels: number;
  /**
   * The unique id for the conference associated with the recording, if a conference recording.
   */
  conference_sid: string;
  /**
   * The date that this resource was created, given in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated, given in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_updated: Date;
  /**
   * The length of the recording, in seconds.
   */
  duration: string;
  /**
   * Details for how to decrypt the recording.
   */
  encryption_details: string;
  /**
   * More information about the recording failure, if Status is failed. Value will be null for all other statuses.
   */
  error_code: number;
  /**
   * The one-time cost of creating this recording. Example: `-0.00250`
   */
  price: string;
  /**
   * The currency used in the `Price` property. Example: `USD`
   */
  price_unit: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The way in which this recording was created. Possible values are: DialVerb, Conference, OutboundAPI, Trunking, RecordVerb, StartCallRecordingAPI, StartConferenceRecordingAPI
   */
  source: RecordingSource;
  /**
   * The start time of the recording, given in RFC 2822 format.
   */
  start_time: Date;
  /**
   * The status of the recording. Possible values are: in-progress, paused, stopped, processing, completed, failed.
   */
  status: RecordingStatus;
  /**
   * The subresource_uris
   */
  subresource_uris: string;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

interface RecordingPayload extends RecordingResource, Page.TwilioResponsePayload {
}

interface RecordingSolution {
  accountSid: string;
}

interface RecordingListEachOptions extends ListEachOptions<RecordingInstance> {
  /**
   * Only show recordings made during the call given by the indicated sid
   */
  callSid?: string;
  /**
   * The conference_sid
   */
  conferenceSid?: string;
  /**
   * Only show recordings created on the given date. Should be formatted as `YYYY-MM-DD`. You can also specify inequality, such as `DateCreated<=YYYY-MM-DD` for recordings generated at or before midnight on a date, and `DateCreated>=YYYY-MM-DD` for recordings generated at or after midnight on a date.
   */
  dateCreated?: Date;
}

interface RecordingListOptions extends ListOptions<RecordingInstance> {
  /**
   * Only show recordings made during the call given by the indicated sid
   */
  callSid?: string;
  /**
   * The conference_sid
   */
  conferenceSid?: string;
  /**
   * Only show recordings created on the given date. Should be formatted as `YYYY-MM-DD`. You can also specify inequality, such as `DateCreated<=YYYY-MM-DD` for recordings generated at or before midnight on a date, and `DateCreated>=YYYY-MM-DD` for recordings generated at or after midnight on a date.
   */
  dateCreated?: Date;
}

interface RecordingListPageOptions extends PageOptions<RecordingPage> {
  /**
   * Only show recordings made during the call given by the indicated sid
   */
  callSid?: string;
  /**
   * The conference_sid
   */
  conferenceSid?: string;
  /**
   * Only show recordings created on the given date. Should be formatted as `YYYY-MM-DD`. You can also specify inequality, such as `DateCreated<=YYYY-MM-DD` for recordings generated at or before midnight on a date, and `DateCreated>=YYYY-MM-DD` for recordings generated at or after midnight on a date.
   */
  dateCreated?: Date;
}

interface RecordingListInstance {
  /**
   * Gets context of a single Recording resource
   *
   * @param sid - Fetch by unique recording Sid
   */
  (sid: string): RecordingContext;
  /**
   * Streams RecordingInstance records from the API.
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
  each(opts?: RecordingListEachOptions): void;
  /**
   * Streams RecordingInstance records from the API.
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
  each(callback: (item: RecordingInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Recording resource
   *
   * @param sid - Fetch by unique recording Sid
   */
  get(sid: string): RecordingContext;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<RecordingPage>;
  /**
   * Retrieve a single target page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: RecordingPage) => any): void;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: RecordingListOptions): Promise<RecordingInstance[]>;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: RecordingListOptions, callback: (error: Error | null, items: RecordingInstance[]) => any): void;
  /**
   * Lists RecordingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: RecordingInstance[]) => any): void;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: RecordingListPageOptions): Promise<RecordingPage>;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: RecordingListPageOptions, callback: (error: Error | null, items: RecordingPage) => any): void;
  /**
   * Retrieve a single page of RecordingInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: RecordingPage) => any): void;
}

declare class RecordingPage extends Page<V2010, RecordingPayload, RecordingResource, RecordingInstance> {
  constructor(version: V2010, response: Response<string>, solution: RecordingSolution);

  /**
   * Build an instance of RecordingInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingPayload): RecordingInstance;
}

declare class RecordingInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique recording Sid
   */
  constructor(version: V2010, payload: RecordingPayload, accountSid: string, sid: string);

  private _proxy: RecordingContext;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/api/rest/account) responsible for this recording.
   */
  accountSid: string;
  addOnResults(): AddOnResultListInstance;
  /**
   * The version of the API in use during the recording.
   */
  apiVersion: string;
  /**
   * A unique identifier for the call associated with the recording. This will always refer to the parent leg of a two leg call.
   */
  callSid: string;
  /**
   * The number of channels in the final recording file as an integer.  Possible values are `1`, `2`.  Separating a two leg call into two separate channels of the recording file is supported in [Dial](https://www.twilio.com/docs/api/twiml/dial#attributes-record) and [Outbound Rest API](https://www.twilio.com/docs/api/voice/making-calls) record options.
   */
  channels: number;
  /**
   * The unique id for the conference associated with the recording, if a conference recording.
   */
  conferenceSid: string;
  /**
   * The date that this resource was created, given in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated, given in [RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The length of the recording, in seconds.
   */
  duration: string;
  /**
   * Details for how to decrypt the recording.
   */
  encryptionDetails: string;
  /**
   * More information about the recording failure, if Status is failed. Value will be null for all other statuses.
   */
  errorCode: number;
  /**
   * fetch a RecordingInstance
   *
   * @returns Promise that resolves to processed RecordingInstance
   */
  fetch(): Promise<RecordingInstance>;
  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * The one-time cost of creating this recording. Example: `-0.00250`
   */
  price: string;
  /**
   * The currency used in the `Price` property. Example: `USD`
   */
  priceUnit: string;
  /**
   * remove a RecordingInstance
   *
   * @returns Promise that resolves to processed RecordingInstance
   */
  remove(): Promise<RecordingInstance>;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * The way in which this recording was created. Possible values are: DialVerb, Conference, OutboundAPI, Trunking, RecordVerb, StartCallRecordingAPI, StartConferenceRecordingAPI
   */
  source: RecordingSource;
  /**
   * The start time of the recording, given in RFC 2822 format.
   */
  startTime: Date;
  /**
   * The status of the recording. Possible values are: in-progress, paused, stopped, processing, completed, failed.
   */
  status: RecordingStatus;
  /**
   * The subresource_uris
   */
  subresourceUris: string;
  transcriptions(): TranscriptionListInstance;
  /**
   * The URI for this resource, relative to `https://api.twilio.com`
   */
  uri: string;
}

declare class RecordingContext {
  constructor(version: V2010, accountSid: string, sid: string);

  addOnResults: AddOnResultListInstance;
  /**
   * fetch a RecordingInstance
   *
   * @returns Promise that resolves to processed RecordingInstance
   */
  fetch(): Promise<RecordingInstance>;
  /**
   * fetch a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: RecordingInstance) => any): void;
  /**
   * remove a RecordingInstance
   *
   * @returns Promise that resolves to processed RecordingInstance
   */
  remove(): Promise<RecordingInstance>;
  /**
   * remove a RecordingInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: RecordingInstance) => any): void;
  transcriptions: TranscriptionListInstance;
}

export { RecordingContext, RecordingInstance, RecordingList, RecordingListEachOptions, RecordingListInstance, RecordingListOptions, RecordingListPageOptions, RecordingPage, RecordingPayload, RecordingResource, RecordingSolution, RecordingSource, RecordingStatus }
