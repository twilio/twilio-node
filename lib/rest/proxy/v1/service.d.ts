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
import { PhoneNumberListInstance } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { SessionListInstance } from './service/session';
import { ShortCodeListInstance } from './service/shortCode';

declare function ServiceList(version: V1): ServiceListInstance

type ServiceGeoMatchLevel = 'area-code'|'overlay'|'radius'|'country';

type ServiceNumberSelectionBehavior = 'avoid-sticky'|'prefer-sticky';

interface ServiceResource {
  /**
   * The unique SID identifier of the Account.
   */
  account_sid: string;
  /**
   * The URL to which Twilio will make callbacks on interaction status changes.
   */
  callback_url: string;
  /**
   * The date that this Service was created, given in ISO 8601 format.
   */
  date_created: Date;
  /**
   * The date that this Service was last updated, given in ISO 8601 format.
   */
  date_updated: Date;
  /**
   * The default time to live for Sessions created in this Service. The amount of time, specified in seconds, that each Session should remain open. Keys off the last interaction or Session creation time. Defaults to a value of 0 (unlimited Session length). You can override this value by setting a specific TTL on individual Sessions.
   */
  default_ttl: number;
  /**
   * Whether proxy number selected must be in the same area code as the participant identifier. Options: `country`, `area-code`, `extended-area-code`. Default: `country`. Levels lower than country are only available in North America.
   */
  geo_match_level: ServiceGeoMatchLevel;
  /**
   * Fires on each interaction. If you respond with a 403 status, we will abort/block the interaction. For any other status or timeout, the interaction continues.
   */
  intercept_callback_url: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Service.
   */
  links: string;
  /**
   * The preference for Proxy Number selection for this instance. `prefer-sticky` means that we will try and select the same Proxy Number for a given participant if they have previous [Sessions](https://www.twilio.com/docs/proxy/api/session), but we will not error and fail if that Proxy Number cannot be used.  `avoid-sticky` means that we will try to use different Proxy Numbers as long as that is possible within a given pool rather than try and use a previously assigned number.
   */
  number_selection_behavior: ServiceNumberSelectionBehavior;
  /**
   * A URL to send webhooks to when an action (inbound call or SMS) occurs where there is no Session or a closed Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/api/twiml), this will be processed. This means it is possible to, for example, play a message for a call, send an automated text message response, or redirect a call to another Phone Number.
   */
  out_of_session_callback_url: string;
  /**
   * A 34 character string that uniquely identifies this Service.
   */
  sid: string;
  /**
   * A human-readable description of this resource, up to 255 characters. *Should not contain PII.*
   */
  unique_name: string;
  /**
   * The URL of this resource.
   */
  url: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListEachOptions extends ListEachOptions<ServiceInstance> {
}

interface ServiceListOptions extends ListOptions<ServiceInstance> {
}

interface ServiceListPageOptions extends PageOptions<ServicePage> {
}

interface ServiceListCreateOptions {
  /**
   * The URL to which Twilio will make callbacks on interaction status changes.
   */
  callbackUrl?: string;
  /**
   * The default time delay in seconds after the latest of Session create time or the Session's last Interaction time, after which a session will expire.  Used for sessions where TTL is not specified.
   */
  defaultTtl?: number;
  /**
   * Whether proxy number selected must be in the same area code as the participant identifier. Options: `country`, `area-code`, `extended-area-code`. Default: `country`. Levels lower than country are only available in North America.
   */
  geoMatchLevel?: ServiceGeoMatchLevel;
  /**
   * A URL for Twilio call before each Interaction. Returning a 403 status code will prevent the interaction from continuing.
   */
  interceptCallbackUrl?: string;
  /**
   * Options: `prefer-sticky`, `avoid-sticky`. Default: `prefer-sticky`.
   */
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  /**
   * A URL for Twilio call when a new Interaction has no [Session](https://www.twilio.com/docs/proxy/api/session).
   */
  outOfSessionCallbackUrl?: string;
  /**
   * The human-readable string that uniquely identifies this Service, up to 64 characters. *Should not contain PII.*
   */
  uniqueName: string;
}

interface ServiceListInstance {
  /**
   * Gets context of a single Service resource
   *
   * @param sid - A string that uniquely identifies this Service.
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  create(opts: ServiceListCreateOptions): Promise<ServiceInstance>;
  /**
   * create a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ServiceListCreateOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Streams ServiceInstance records from the API.
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
  each(opts?: ServiceListEachOptions): void;
  /**
   * Streams ServiceInstance records from the API.
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
  each(callback: (item: ServiceInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Service resource
   *
   * @param sid - A string that uniquely identifies this Service.
   */
  get(sid: string): ServiceContext;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<ServicePage>;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: ServiceListOptions): Promise<ServiceInstance[]>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: ServiceListOptions, callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: ServiceInstance[]) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: ServiceListPageOptions): Promise<ServicePage>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: ServiceListPageOptions, callback: (error: Error | null, items: ServicePage) => any): void;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: ServicePage) => any): void;
}

interface ServiceListFetchOptions {
  /**
   * The URL to which Twilio will make callbacks on interaction status changes.
   */
  callbackUrl?: string;
  /**
   * The default time delay in seconds after the latest of Session create time or the Session's last Interaction time, after which a session will expire.  Used for sessions where TTL is not specified.
   */
  defaultTtl?: number;
  /**
   * Whether proxy number selected must be in the same area code as the participant identifier. Options: `country`, `area-code`, `extended-area-code`. Default: `country`. Levels lower than country are only available in North America.
   */
  geoMatchLevel?: ServiceGeoMatchLevel;
  /**
   * A URL for Twilio call before each Interaction. Returning a 403 status code will prevent the interaction from continuing.
   */
  interceptCallbackUrl?: string;
  /**
   * Options: `prefer-sticky`, `avoid-sticky`. Default: `prefer-sticky`.
   */
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  /**
   * A URL for Twilio call when a new Interaction has no [Session](https://www.twilio.com/docs/proxy/api/session).
   */
  outOfSessionCallbackUrl?: string;
  /**
   * A human-readable description of this resource, up to 64 characters. *Should not contain PII.*
   */
  uniqueName?: string;
}

interface ServiceListFetchOptions {
  /**
   * The URL to which Twilio will make callbacks on interaction status changes.
   */
  callbackUrl?: string;
  /**
   * The default time delay in seconds after the latest of Session create time or the Session's last Interaction time, after which a session will expire.  Used for sessions where TTL is not specified.
   */
  defaultTtl?: number;
  /**
   * Whether proxy number selected must be in the same area code as the participant identifier. Options: `country`, `area-code`, `extended-area-code`. Default: `country`. Levels lower than country are only available in North America.
   */
  geoMatchLevel?: ServiceGeoMatchLevel;
  /**
   * A URL for Twilio call before each Interaction. Returning a 403 status code will prevent the interaction from continuing.
   */
  interceptCallbackUrl?: string;
  /**
   * Options: `prefer-sticky`, `avoid-sticky`. Default: `prefer-sticky`.
   */
  numberSelectionBehavior?: ServiceNumberSelectionBehavior;
  /**
   * A URL for Twilio call when a new Interaction has no [Session](https://www.twilio.com/docs/proxy/api/session).
   */
  outOfSessionCallbackUrl?: string;
  /**
   * A human-readable description of this resource, up to 64 characters. *Should not contain PII.*
   */
  uniqueName?: string;
}

declare class ServicePage extends Page<V1, ServicePayload, ServiceResource, ServiceInstance> {
  constructor(version: V1, response: Response<string>, solution: ServiceSolution);

  /**
   * Build an instance of ServiceInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ServicePayload): ServiceInstance;
}

declare class ServiceInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: V1, payload: ServicePayload, sid: string);

  private _proxy: ServiceContext;
  /**
   * The unique SID identifier of the Account.
   */
  accountSid: string;
  /**
   * The URL to which Twilio will make callbacks on interaction status changes.
   */
  callbackUrl: string;
  /**
   * The date that this Service was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Service was last updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * The default time to live for Sessions created in this Service. The amount of time, specified in seconds, that each Session should remain open. Keys off the last interaction or Session creation time. Defaults to a value of 0 (unlimited Session length). You can override this value by setting a specific TTL on individual Sessions.
   */
  defaultTtl: number;
  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * Whether proxy number selected must be in the same area code as the participant identifier. Options: `country`, `area-code`, `extended-area-code`. Default: `country`. Levels lower than country are only available in North America.
   */
  geoMatchLevel: ServiceGeoMatchLevel;
  /**
   * Fires on each interaction. If you respond with a 403 status, we will abort/block the interaction. For any other status or timeout, the interaction continues.
   */
  interceptCallbackUrl: string;
  /**
   * Contains a dictionary of URL links to nested resources of this Service.
   */
  links: string;
  /**
   * The preference for Proxy Number selection for this instance. `prefer-sticky` means that we will try and select the same Proxy Number for a given participant if they have previous [Sessions](https://www.twilio.com/docs/proxy/api/session), but we will not error and fail if that Proxy Number cannot be used.  `avoid-sticky` means that we will try to use different Proxy Numbers as long as that is possible within a given pool rather than try and use a previously assigned number.
   */
  numberSelectionBehavior: ServiceNumberSelectionBehavior;
  /**
   * A URL to send webhooks to when an action (inbound call or SMS) occurs where there is no Session or a closed Session. If your server (or a Twilio [function](https://www.twilio.com/functions)) responds with valid [TwiML](https://www.twilio.com/docs/api/twiml), this will be processed. This means it is possible to, for example, play a message for a call, send an automated text message response, or redirect a call to another Phone Number.
   */
  outOfSessionCallbackUrl: string;
  phoneNumbers(): PhoneNumberListInstance;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  sessions(): SessionListInstance;
  shortCodes(): ShortCodeListInstance;
  /**
   * A 34 character string that uniquely identifies this Service.
   */
  sid: string;
  /**
   * A human-readable description of this resource, up to 255 characters. *Should not contain PII.*
   */
  uniqueName: string;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * The URL of this resource.
   */
  url: string;
}

declare class ServiceContext {
  constructor(version: V1, sid: string);

  /**
   * fetch a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  fetch(): Promise<ServiceInstance>;
  /**
   * fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: ServiceInstance) => any): void;
  phoneNumbers: PhoneNumberListInstance;
  /**
   * remove a ServiceInstance
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  remove(): Promise<ServiceInstance>;
  /**
   * remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback: (error: Error | null, items: ServiceInstance) => any): void;
  sessions: SessionListInstance;
  shortCodes: ShortCodeListInstance;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed ServiceInstance
   */
  update(opts?: ServiceListFetchOptions): Promise<ServiceInstance>;
  /**
   * update a ServiceInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: ServiceListFetchOptions, callback: (error: Error | null, items: ServiceInstance) => any): void;
  /**
   * update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: ServiceInstance) => any): void;
}

export { ServiceContext, ServiceGeoMatchLevel, ServiceInstance, ServiceList, ServiceListCreateOptions, ServiceListEachOptions, ServiceListFetchOptions, ServiceListInstance, ServiceListOptions, ServiceListPageOptions, ServiceNumberSelectionBehavior, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
