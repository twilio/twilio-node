/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

declare function MemberList(version: V2, serviceSid: string, channelSid: string): MemberListInstance

interface MemberResource {
  /**
   * The unique id of the [Account](https://www.twilio.com/console) responsible for this member.
   */
  account_sid: string;
  /**
   * The unique id of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) for this member.
   */
  channel_sid: string;
  /**
   * The date that this resource was created.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated.
   */
  date_updated: Date;
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/users) in this [Service](https://www.twilio.com/docs/api/chat/rest/services). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) docs for more details.
   */
  identity: string;
  /**
   * An Integer representing index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) this Member has read within this [Channel](https://www.twilio.com/docs/api/chat/rest/channels)
   */
  last_consumed_message_index: number;
  /**
   * An ISO8601 based timestamp string representing the datetime of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) read event for this Member within this [Channel](https://www.twilio.com/docs/api/chat/rest/channels)
   */
  last_consumption_timestamp: Date;
  /**
   * The [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to this member.
   */
  role_sid: string;
  /**
   * The unique id of the [Service](https://www.twilio.com/docs/api/chat/rest/services) this member belongs to.
   */
  service_sid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * An absolute URL for this member.
   */
  url: string;
}

interface MemberPayload extends MemberResource, Page.TwilioResponsePayload {
}

interface MemberSolution {
  channelSid: string;
  serviceSid: string;
}

interface MemberListCreateOptions {
  /**
   * The ISO8601 time specifying the datetime the Members should be set as being created.  Will be set to the current time by the Chat service if not specified.  Note that this should only be used in cases where a Member is being recreated from a backup/separate source
   */
  dateCreated?: Date;
  /**
   * The ISO8601 time specifying the datetime the Member should be set as having been last updated.  Will be set to the `null` by the Chat service if not specified.  Note that this should only be used in cases where a Member is being recreated from a backup/separate source  and where a Member was previously updated.
   */
  dateUpdated?: Date;
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/users) in this [Service](https://www.twilio.com/docs/api/chat/rest/services). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) docs for more details.
   */
  identity: string;
  /**
   * Field used to specify the last consumed Message index for the Channel for this Member.  Should only be used when recreating a Member from a backup/separate source.
   */
  lastConsumedMessageIndex?: number;
  /**
   * ISO8601 time indicating the last datetime the Member consumed a Message in the Channel.  Should only be used when recreating a Member from a backup/separate source
   */
  lastConsumptionTimestamp?: Date;
  /**
   * The role to be assigned to this member. Defaults to the roles specified on the [Service](https://www.twilio.com/docs/chat/api/services).
   */
  roleSid?: string;
}

interface MemberListEachOptions extends ListEachOptions<MemberInstance> {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/users) in this [Service](https://www.twilio.com/docs/api/chat/rest/services). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) docs for more details.
   */
  identity?: string[];
}

interface MemberListOptions extends ListOptions<MemberInstance> {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/users) in this [Service](https://www.twilio.com/docs/api/chat/rest/services). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) docs for more details.
   */
  identity?: string[];
}

interface MemberListPageOptions extends PageOptions<MemberPage> {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/users) in this [Service](https://www.twilio.com/docs/api/chat/rest/services). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) docs for more details.
   */
  identity?: string[];
}

interface MemberListInstance {
  /**
   * Gets context of a single Member resource
   *
   * @param sid - The sid
   */
  (sid: string): MemberContext;
  /**
   * create a MemberInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  create(opts: MemberListCreateOptions): Promise<MemberInstance>;
  /**
   * create a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: MemberListCreateOptions, callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * Streams MemberInstance records from the API.
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
  each(opts?: MemberListEachOptions): void;
  /**
   * Streams MemberInstance records from the API.
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
  each(callback: (item: MemberInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Member resource
   *
   * @param sid - The sid
   */
  get(sid: string): MemberContext;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<MemberPage>;
  /**
   * Retrieve a single target page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: MemberPage) => any): void;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: MemberListOptions): Promise<MemberInstance[]>;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: MemberListOptions, callback: (error: Error | null, items: MemberInstance[]) => any): void;
  /**
   * Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: MemberInstance[]) => any): void;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: MemberListPageOptions): Promise<MemberPage>;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: MemberListPageOptions, callback: (error: Error | null, items: MemberPage) => any): void;
  /**
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: MemberPage) => any): void;
}

interface MemberListFetchOptions {
  /**
   * The ISO8601 time specifying the datetime the Members should be set as being created.  Will be set to the current time by the Chat service if not specified.  Note that this should only be used in cases where a Member is being recreated from a backup/separate source
   */
  dateCreated?: Date;
  /**
   * The ISO8601 time specifying the datetime the Member should be set as having been last updated.  Will be set to the `null` by the Chat service if not specified.  Note that this should only be used in cases where a Member is being recreated from a backup/separate source  and where a Member was previously updated.
   */
  dateUpdated?: Date;
  /**
   * Field used to specify the last consumed Message index for the Channel for this Member.  Should only be used when recreating a Member from a backup/separate source.
   */
  lastConsumedMessageIndex?: number;
  /**
   * ISO8601 time indicating the last datetime the Member consumed a Message in the Channel.  Should only be used when recreating a Member from a backup/separate source
   */
  lastConsumptionTimestamp?: Date;
  /**
   * The role to be assigned to this member. Defaults to the roles specified on the [Service](https://www.twilio.com/docs/chat/api/services).
   */
  roleSid?: string;
}

interface MemberListFetchOptions {
  /**
   * The ISO8601 time specifying the datetime the Members should be set as being created.  Will be set to the current time by the Chat service if not specified.  Note that this should only be used in cases where a Member is being recreated from a backup/separate source
   */
  dateCreated?: Date;
  /**
   * The ISO8601 time specifying the datetime the Member should be set as having been last updated.  Will be set to the `null` by the Chat service if not specified.  Note that this should only be used in cases where a Member is being recreated from a backup/separate source  and where a Member was previously updated.
   */
  dateUpdated?: Date;
  /**
   * Field used to specify the last consumed Message index for the Channel for this Member.  Should only be used when recreating a Member from a backup/separate source.
   */
  lastConsumedMessageIndex?: number;
  /**
   * ISO8601 time indicating the last datetime the Member consumed a Message in the Channel.  Should only be used when recreating a Member from a backup/separate source
   */
  lastConsumptionTimestamp?: Date;
  /**
   * The role to be assigned to this member. Defaults to the roles specified on the [Service](https://www.twilio.com/docs/chat/api/services).
   */
  roleSid?: string;
}

declare class MemberPage extends Page<V2, MemberPayload, MemberResource, MemberInstance> {
  constructor(version: V2, response: Response<string>, solution: MemberSolution);

  /**
   * Build an instance of MemberInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MemberPayload): MemberInstance;
}

declare class MemberInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: V2, payload: MemberPayload, serviceSid: string, channelSid: string, sid: string);

  private _proxy: MemberContext;
  /**
   * The unique id of the [Account](https://www.twilio.com/console) responsible for this member.
   */
  accountSid: string;
  /**
   * The unique id of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) for this member.
   */
  channelSid: string;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * fetch a MemberInstance
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  fetch(): Promise<MemberInstance>;
  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/users) in this [Service](https://www.twilio.com/docs/api/chat/rest/services). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens) docs for more details.
   */
  identity: string;
  /**
   * An Integer representing index of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) this Member has read within this [Channel](https://www.twilio.com/docs/api/chat/rest/channels)
   */
  lastConsumedMessageIndex: number;
  /**
   * An ISO8601 based timestamp string representing the datetime of the last [Message](https://www.twilio.com/docs/api/chat/rest/messages) read event for this Member within this [Channel](https://www.twilio.com/docs/api/chat/rest/channels)
   */
  lastConsumptionTimestamp: Date;
  /**
   * remove a MemberInstance
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  remove(): Promise<MemberInstance>;
  /**
   * remove a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * The [Role](https://www.twilio.com/docs/api/chat/rest/roles) assigned to this member.
   */
  roleSid: string;
  /**
   * The unique id of the [Service](https://www.twilio.com/docs/api/chat/rest/services) this member belongs to.
   */
  serviceSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  update(opts?: MemberListFetchOptions): Promise<MemberInstance>;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MemberListFetchOptions, callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * update a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * An absolute URL for this member.
   */
  url: string;
}

declare class MemberContext {
  constructor(version: V2, serviceSid: string, channelSid: string, sid: string);

  /**
   * fetch a MemberInstance
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  fetch(): Promise<MemberInstance>;
  /**
   * fetch a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * remove a MemberInstance
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  remove(): Promise<MemberInstance>;
  /**
   * remove a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed MemberInstance
   */
  update(opts?: MemberListFetchOptions): Promise<MemberInstance>;
  /**
   * update a MemberInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: MemberListFetchOptions, callback: (error: Error | null, items: MemberInstance) => any): void;
  /**
   * update a MemberInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: MemberInstance) => any): void;
}

export { MemberContext, MemberInstance, MemberList, MemberListCreateOptions, MemberListEachOptions, MemberListFetchOptions, MemberListInstance, MemberListOptions, MemberListPageOptions, MemberPage, MemberPayload, MemberResource, MemberSolution }
