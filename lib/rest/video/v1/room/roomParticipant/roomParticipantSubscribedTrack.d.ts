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

declare function SubscribedTrackList(version: V1, roomSid: string, subscriberSid: string): SubscribedTrackListInstance

type SubscribedTrackKind = 'audio'|'video'|'data';

type SubscribedTrackStatus = 'subscribe'|'unsubscribe';

interface SubscribedTrackResource {
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The enabled
   */
  enabled: boolean;
  /**
   * The kind
   */
  kind: SubscribedTrackKind;
  /**
   * The name
   */
  name: string;
  /**
   * The publisher_sid
   */
  publisher_sid: string;
  /**
   * The room_sid
   */
  room_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The subscriber_sid
   */
  subscriber_sid: string;
}

interface SubscribedTrackPayload extends SubscribedTrackResource, Page.TwilioResponsePayload {
}

interface SubscribedTrackSolution {
  roomSid: string;
  subscriberSid: string;
}

interface SubscribedTrackListEachOptions extends ListEachOptions<SubscribedTrackInstance> {
  /**
   * The date_created_after
   */
  dateCreatedAfter?: Date;
  /**
   * The date_created_before
   */
  dateCreatedBefore?: Date;
  /**
   * The kind
   */
  kind?: SubscribedTrackKind;
  /**
   * The publisher
   */
  publisher?: string;
  /**
   * The track
   */
  track?: string;
}

interface SubscribedTrackListOptions extends ListOptions<SubscribedTrackInstance> {
  /**
   * The date_created_after
   */
  dateCreatedAfter?: Date;
  /**
   * The date_created_before
   */
  dateCreatedBefore?: Date;
  /**
   * The kind
   */
  kind?: SubscribedTrackKind;
  /**
   * The publisher
   */
  publisher?: string;
  /**
   * The track
   */
  track?: string;
}

interface SubscribedTrackListPageOptions extends PageOptions<SubscribedTrackPage> {
  /**
   * The date_created_after
   */
  dateCreatedAfter?: Date;
  /**
   * The date_created_before
   */
  dateCreatedBefore?: Date;
  /**
   * The kind
   */
  kind?: SubscribedTrackKind;
  /**
   * The publisher
   */
  publisher?: string;
  /**
   * The track
   */
  track?: string;
}

interface SubscribedTrackListFetchOptions {
  /**
   * The kind
   */
  kind?: SubscribedTrackKind;
  /**
   * The publisher
   */
  publisher?: string;
  /**
   * The status
   */
  status?: SubscribedTrackStatus;
  /**
   * The track
   */
  track?: string;
}

interface SubscribedTrackListInstance {
  /**
   * Streams SubscribedTrackInstance records from the API.
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
  each(opts?: SubscribedTrackListEachOptions): void;
  /**
   * Streams SubscribedTrackInstance records from the API.
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
  each(callback: (item: SubscribedTrackInstance, done: (err?: Error) => void) => void): any;
  /**
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SubscribedTrackPage>;
  /**
   * Retrieve a single target page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SubscribedTrackPage) => any): void;
  /**
   * Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SubscribedTrackListOptions): Promise<SubscribedTrackInstance[]>;
  /**
   * Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SubscribedTrackListOptions, callback: (error: Error | null, items: SubscribedTrackInstance[]) => any): void;
  /**
   * Lists SubscribedTrackInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SubscribedTrackInstance[]) => any): void;
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SubscribedTrackListPageOptions): Promise<SubscribedTrackPage>;
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SubscribedTrackListPageOptions, callback: (error: Error | null, items: SubscribedTrackPage) => any): void;
  /**
   * Retrieve a single page of SubscribedTrackInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SubscribedTrackPage) => any): void;
  /**
   * update a SubscribedTrackInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SubscribedTrackInstance
   */
  update(opts?: SubscribedTrackListFetchOptions): Promise<SubscribedTrackInstance>;
  /**
   * update a SubscribedTrackInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SubscribedTrackListFetchOptions, callback: (error: Error | null, items: SubscribedTrackInstance) => any): void;
  /**
   * update a SubscribedTrackInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SubscribedTrackInstance) => any): void;
}

declare class SubscribedTrackPage extends Page<V1, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackInstance> {
  constructor(version: V1, response: Response<string>, solution: SubscribedTrackSolution);

  /**
   * Build an instance of SubscribedTrackInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SubscribedTrackPayload): SubscribedTrackInstance;
}

declare class SubscribedTrackInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: SubscribedTrackPayload);

  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The enabled
   */
  enabled: boolean;
  /**
   * The kind
   */
  kind: SubscribedTrackKind;
  /**
   * The name
   */
  name: string;
  /**
   * The publisher_sid
   */
  publisherSid: string;
  /**
   * The room_sid
   */
  roomSid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The subscriber_sid
   */
  subscriberSid: string;
}

export { SubscribedTrackInstance, SubscribedTrackKind, SubscribedTrackList, SubscribedTrackListEachOptions, SubscribedTrackListFetchOptions, SubscribedTrackListInstance, SubscribedTrackListOptions, SubscribedTrackListPageOptions, SubscribedTrackPage, SubscribedTrackPayload, SubscribedTrackResource, SubscribedTrackSolution, SubscribedTrackStatus }
