/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Wireless = require('../Wireless');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { SerializableClass } from '../../../interfaces';
import { UsageListInstance } from './sim/usage';

declare function SimList(version: Wireless): SimListInstance

interface SimResource {
  /**
   * The account_sid
   */
  account_sid: string;
  /**
   * The commands_callback_method
   */
  commands_callback_method: string;
  /**
   * The commands_callback_url
   */
  commands_callback_url: string;
  /**
   * The date_created
   */
  date_created: Date;
  /**
   * The date_updated
   */
  date_updated: Date;
  /**
   * The e_id
   */
  e_id: string;
  /**
   * The friendly_name
   */
  friendly_name: string;
  /**
   * The iccid
   */
  iccid: string;
  /**
   * The links
   */
  links: string;
  /**
   * The rate_plan_sid
   */
  rate_plan_sid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The sms_fallback_method
   */
  sms_fallback_method: string;
  /**
   * The sms_fallback_url
   */
  sms_fallback_url: string;
  /**
   * The sms_method
   */
  sms_method: string;
  /**
   * The sms_url
   */
  sms_url: string;
  /**
   * The status
   */
  status: string;
  /**
   * The unique_name
   */
  unique_name: string;
  /**
   * The url
   */
  url: string;
  /**
   * The voice_fallback_method
   */
  voice_fallback_method: string;
  /**
   * The voice_fallback_url
   */
  voice_fallback_url: string;
  /**
   * The voice_method
   */
  voice_method: string;
  /**
   * The voice_url
   */
  voice_url: string;
}

interface SimPayload extends SimResource, Page.TwilioResponsePayload {
}

interface SimSolution {
}

interface SimListEachOptions extends ListEachOptions<SimInstance> {
  /**
   * The e_id
   */
  eId?: string;
  /**
   * The iccid
   */
  iccid?: string;
  /**
   * The rate_plan
   */
  ratePlan?: string;
  /**
   * The sim_registration_code
   */
  simRegistrationCode?: string;
  /**
   * The status
   */
  status?: string;
}

interface SimListOptions extends ListOptions<SimInstance> {
  /**
   * The e_id
   */
  eId?: string;
  /**
   * The iccid
   */
  iccid?: string;
  /**
   * The rate_plan
   */
  ratePlan?: string;
  /**
   * The sim_registration_code
   */
  simRegistrationCode?: string;
  /**
   * The status
   */
  status?: string;
}

interface SimListPageOptions extends PageOptions<SimPage> {
  /**
   * The e_id
   */
  eId?: string;
  /**
   * The iccid
   */
  iccid?: string;
  /**
   * The rate_plan
   */
  ratePlan?: string;
  /**
   * The sim_registration_code
   */
  simRegistrationCode?: string;
  /**
   * The status
   */
  status?: string;
}

interface SimListInstance {
  /**
   * Gets context of a single Sim resource
   *
   * @param sid - The sid
   */
  (sid: string): SimContext;
  /**
   * Streams SimInstance records from the API.
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
  each(opts?: SimListEachOptions): void;
  /**
   * Streams SimInstance records from the API.
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
  each(callback: (item: SimInstance, done: (err?: Error) => void) => void): any;
  /**
   * Gets context of a single Sim resource
   *
   * @param sid - The sid
   */
  get(sid: string): SimContext;
  /**
   * Retrieve a single target page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   */
  getPage(targetUrl: string): Promise<SimPage>;
  /**
   * Retrieve a single target page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle processed record
   */
  getPage(targetUrl: string, callback: (error: Error | null, items: SimPage) => any): void;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  list(opts?: SimListOptions): Promise<SimInstance[]>;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  list(opts: SimListOptions, callback: (error: Error | null, items: SimInstance[]) => any): void;
  /**
   * Lists SimInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  list(callback: (error: Error | null, items: SimInstance[]) => any): void;
  /**
   * Retrieve a single page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   */
  page(opts?: SimListPageOptions): Promise<SimPage>;
  /**
   * Retrieve a single page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  page(opts: SimListPageOptions, callback: (error: Error | null, items: SimPage) => any): void;
  /**
   * Retrieve a single page of SimInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param callback - Callback to handle processed record
   */
  page(callback: (error: Error | null, items: SimPage) => any): void;
}

interface SimListFetchOptions {
  /**
   * The callback_method
   */
  callbackMethod?: string;
  /**
   * The callback_url
   */
  callbackUrl?: string;
  /**
   * The commands_callback_method
   */
  commandsCallbackMethod?: string;
  /**
   * The commands_callback_url
   */
  commandsCallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The rate_plan
   */
  ratePlan?: string;
  /**
   * The sms_fallback_method
   */
  smsFallbackMethod?: string;
  /**
   * The sms_fallback_url
   */
  smsFallbackUrl?: string;
  /**
   * The sms_method
   */
  smsMethod?: string;
  /**
   * The sms_url
   */
  smsUrl?: string;
  /**
   * The status
   */
  status?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
  /**
   * The voice_fallback_method
   */
  voiceFallbackMethod?: string;
  /**
   * The voice_fallback_url
   */
  voiceFallbackUrl?: string;
  /**
   * The voice_method
   */
  voiceMethod?: string;
  /**
   * The voice_url
   */
  voiceUrl?: string;
}

interface SimListFetchOptions {
  /**
   * The callback_method
   */
  callbackMethod?: string;
  /**
   * The callback_url
   */
  callbackUrl?: string;
  /**
   * The commands_callback_method
   */
  commandsCallbackMethod?: string;
  /**
   * The commands_callback_url
   */
  commandsCallbackUrl?: string;
  /**
   * The friendly_name
   */
  friendlyName?: string;
  /**
   * The rate_plan
   */
  ratePlan?: string;
  /**
   * The sms_fallback_method
   */
  smsFallbackMethod?: string;
  /**
   * The sms_fallback_url
   */
  smsFallbackUrl?: string;
  /**
   * The sms_method
   */
  smsMethod?: string;
  /**
   * The sms_url
   */
  smsUrl?: string;
  /**
   * The status
   */
  status?: string;
  /**
   * The unique_name
   */
  uniqueName?: string;
  /**
   * The voice_fallback_method
   */
  voiceFallbackMethod?: string;
  /**
   * The voice_fallback_url
   */
  voiceFallbackUrl?: string;
  /**
   * The voice_method
   */
  voiceMethod?: string;
  /**
   * The voice_url
   */
  voiceUrl?: string;
}

declare class SimPage extends Page<Wireless, SimPayload, SimResource, SimInstance> {
  constructor(version: Wireless, response: Response<string>, solution: SimSolution);

  /**
   * Build an instance of SimInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SimPayload): SimInstance;
}

declare class SimInstance extends SerializableClass {
  /**
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Wireless, payload: SimPayload, sid: string);

  private _proxy: SimContext;
  /**
   * The account_sid
   */
  accountSid: string;
  /**
   * The commands_callback_method
   */
  commandsCallbackMethod: string;
  /**
   * The commands_callback_url
   */
  commandsCallbackUrl: string;
  /**
   * The date_created
   */
  dateCreated: Date;
  /**
   * The date_updated
   */
  dateUpdated: Date;
  /**
   * The e_id
   */
  eId: string;
  /**
   * fetch a SimInstance
   *
   * @returns Promise that resolves to processed SimInstance
   */
  fetch(): Promise<SimInstance>;
  /**
   * fetch a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SimInstance) => any): void;
  /**
   * The friendly_name
   */
  friendlyName: string;
  /**
   * The iccid
   */
  iccid: string;
  /**
   * The links
   */
  links: string;
  /**
   * The rate_plan_sid
   */
  ratePlanSid: string;
  /**
   * The sid
   */
  sid: string;
  /**
   * The sms_fallback_method
   */
  smsFallbackMethod: string;
  /**
   * The sms_fallback_url
   */
  smsFallbackUrl: string;
  /**
   * The sms_method
   */
  smsMethod: string;
  /**
   * The sms_url
   */
  smsUrl: string;
  /**
   * The status
   */
  status: string;
  /**
   * The unique_name
   */
  uniqueName: string;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SimInstance
   */
  update(opts?: SimListFetchOptions): Promise<SimInstance>;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SimListFetchOptions, callback: (error: Error | null, items: SimInstance) => any): void;
  /**
   * update a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SimInstance) => any): void;
  /**
   * The url
   */
  url: string;
  usage(): UsageListInstance;
  /**
   * The voice_fallback_method
   */
  voiceFallbackMethod: string;
  /**
   * The voice_fallback_url
   */
  voiceFallbackUrl: string;
  /**
   * The voice_method
   */
  voiceMethod: string;
  /**
   * The voice_url
   */
  voiceUrl: string;
}

declare class SimContext {
  constructor(version: Wireless, sid: string);

  /**
   * fetch a SimInstance
   *
   * @returns Promise that resolves to processed SimInstance
   */
  fetch(): Promise<SimInstance>;
  /**
   * fetch a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback: (error: Error | null, items: SimInstance) => any): void;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   *
   * @returns Promise that resolves to processed SimInstance
   */
  update(opts?: SimListFetchOptions): Promise<SimInstance>;
  /**
   * update a SimInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: SimListFetchOptions, callback: (error: Error | null, items: SimInstance) => any): void;
  /**
   * update a SimInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback: (error: Error | null, items: SimInstance) => any): void;
  usage: UsageListInstance;
}

export { SimContext, SimInstance, SimList, SimListEachOptions, SimListFetchOptions, SimListInstance, SimListOptions, SimListPageOptions, SimPage, SimPayload, SimResource, SimSolution }
