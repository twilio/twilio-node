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

declare function InviteList(version: V1, serviceSid: string, channelSid: string): InviteListInstance

interface InviteResource {
  /**
   * The unique id of the [Account](https://www.twilio.com/console)[/console] responsible for this member.
   */
  account_sid: string;
  /**
   * The unique id of the [Channel](https://www.twilio.com/docs/api/chat/rest/v1/channel) for this member.
   */
  channel_sid: string;
  /**
   * The created_by
   */
  created_by: string;
  /**
   * The date that this resource was created.
   */
  date_created: Date;
  /**
   * The date that this resource was last updated.
   */
  date_updated: Date;
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/v1/user) in this [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens)[/docs/api/chat/guides/create-tokens] docs for more details.
   */
  identity: string;
  /**
   * The [Role](https://www.twilio.com/docs/api/chat/rest/v1/role) assigned to this member.
   */
  role_sid: string;
  /**
   * The unique id of the [Service](https://www.twilio.com/docs/api/chat/rest/v1/service) this member belongs to.
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

interface InvitePayload extends InviteResource, Page.TwilioResponsePayload {
}

interface InviteSolution {
  channelSid: string;
  serviceSid: string;
}

interface InviteListCreateOptions {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/v1/user) in this [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens)[/docs/api/chat/guides/create-tokens] docs for more details.
   */
  identity: string;
  /**
   * The [Role](https://www.twilio.com/docs/api/chat/rest/v1/role) assigned to this member.
   */
  roleSid?: string;
}

interface InviteListEachOptions extends ListEachOptions<InviteInstance> {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/v1/user) in this [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens)[/docs/api/chat/guides/create-tokens] docs for more details.
   */
  identity?: string[];
}

interface InviteListOptions extends ListOptions<InviteInstance> {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/v1/user) in this [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens)[/docs/api/chat/guides/create-tokens] docs for more details.
   */
  identity?: string[];
}

interface InviteListPageOptions extends PageOptions<InvitePage> {
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/v1/user) in this [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens)[/docs/api/chat/guides/create-tokens] docs for more details.
   */
  identity?: string[];
}

interface InviteListInstance {
  /**
   * Gets context of a single Invite resource
   *
   * @param sid - The sid
   */
  (sid: string): InviteContext;
  /**
   * create a InviteInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed InviteInstance
   */
  create(opts: InviteListCreateOptions): Promise<InviteInstance>;
  /**
   * create a InviteInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: InviteListCreateOptions, callback: (error: Error | null, items: InviteInstance) => any): void;
  /**
   * Streams InviteInstance records from the API.
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
  each(opts?: InviteListEachOptions): void;
  /**
   * Streams InviteInstance records from the API.
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
  each(callback: (item: InviteInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Invite resource
   *
   * @param sid - The sid
   */
  get(sid: string): InviteContext;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<InvitePage>;
  /**
   * Retrieve a single target page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: InvitePage) => any): void;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: InviteListOptions): Promise<InviteInstance[]>;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: InviteListOptions, callback: (error: Error | null, items: InviteInstance[]) => any): void;
  /**
   * Lists InviteInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: InviteInstance[]) => any): void;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: InviteListPageOptions): Promise<InvitePage>;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: InviteListPageOptions, callback: (error: Error | null, items: InvitePage) => any): void;
  /**
   * Retrieve a single page of InviteInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: InvitePage) => any): void;
}

declare class InvitePage extends Page<V1, InvitePayload, InviteResource, InviteInstance> {
  constructor(version: V1, response: Response<string>, solution: InviteSolution);

  /**
   * Build an instance of InviteInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InvitePayload): InviteInstance;
}

declare class InviteInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: V1, payload: InvitePayload, serviceSid: string, channelSid: string, sid: string);

  private _proxy: InviteContext;
  /**
   * The unique id of the [Account](https://www.twilio.com/console)[/console] responsible for this member.
   */
  accountSid: string;
  /**
   * The unique id of the [Channel](https://www.twilio.com/docs/api/chat/rest/v1/channel) for this member.
   */
  channelSid: string;
  /**
   * The created_by
   */
  createdBy: string;
  /**
   * The date that this resource was created.
   */
  dateCreated: Date;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated: Date;
  /**
   * fetch a InviteInstance
   *
   * @returns Promise that resolves to processed InviteInstance
   */
  fetch(): Promise<InviteInstance>;
  /**
   * fetch a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InviteInstance) => any): void;
  /**
   * A unique string identifier for this [User](https://www.twilio.com/docs/api/chat/rest/v1/user) in this [Service](https://www.twilio.com/docs/api/chat/rest/v1/service). See the [access tokens](https://www.twilio.com/docs/api/chat/guides/create-tokens)[/docs/api/chat/guides/create-tokens] docs for more details.
   */
  identity: string;
  /**
   * remove a InviteInstance
   *
   * @returns Promise that resolves to processed InviteInstance
   */
  remove(): Promise<InviteInstance>;
  /**
   * remove a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: InviteInstance) => any): void;
  /**
   * The [Role](https://www.twilio.com/docs/api/chat/rest/v1/role) assigned to this member.
   */
  roleSid: string;
  /**
   * The unique id of the [Service](https://www.twilio.com/docs/api/chat/rest/v1/service) this member belongs to.
   */
  serviceSid: string;
  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid: string;
  /**
   * An absolute URL for this member.
   */
  url: string;
}

declare class InviteContext {
  constructor(version: V1, serviceSid: string, channelSid: string, sid: string);

  /**
   * fetch a InviteInstance
   *
   * @returns Promise that resolves to processed InviteInstance
   */
  fetch(): Promise<InviteInstance>;
  /**
   * fetch a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: InviteInstance) => any): void;
  /**
   * remove a InviteInstance
   *
   * @returns Promise that resolves to processed InviteInstance
   */
  remove(): Promise<InviteInstance>;
  /**
   * remove a InviteInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: InviteInstance) => any): void;
}

export { InviteContext, InviteInstance, InviteList, InviteListCreateOptions, InviteListEachOptions, InviteListInstance, InviteListOptions, InviteListPageOptions, InvitePage, InvitePayload, InviteResource, InviteSolution }
