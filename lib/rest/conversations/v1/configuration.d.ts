/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';
import { WebhookListInstance } from './configuration/webhook';

/**
 * Initialize the ConfigurationList
 *
 * @param version - Version of the resource
 */
declare function ConfigurationList(version: V1): ConfigurationListInstance;

/**
 * Options to pass to update
 *
 * @property defaultChatServiceSid - The SID of the default Conversation Service that every new conversation will be associated with.
 * @property defaultClosedTimer - Default ISO8601 duration when conversation will be switched to `closed` state.
 * @property defaultInactiveTimer - Default ISO8601 duration when conversation will be switched to `inactive` state.
 * @property defaultMessagingServiceSid - The SID of the default Messaging Service that every new conversation will be associated with.
 */
interface ConfigurationInstanceUpdateOptions {
  defaultChatServiceSid?: string;
  defaultClosedTimer?: string;
  defaultInactiveTimer?: string;
  defaultMessagingServiceSid?: string;
}

interface ConfigurationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ConfigurationContext;
  /**
   * Constructs a configuration
   */
  get(): ConfigurationContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  webhooks?: WebhookListInstance;
}

interface ConfigurationPayload extends ConfigurationResource, Page.TwilioResponsePayload {
}

interface ConfigurationResource {
  account_sid: string;
  default_chat_service_sid: string;
  default_closed_timer: string;
  default_inactive_timer: string;
  default_messaging_service_sid: string;
  links: string;
  url: string;
}

interface ConfigurationSolution {
}


declare class ConfigurationContext {
  /**
   * Initialize the ConfigurationContext
   *
   * @param version - Version of the resource
   */
  constructor(version: V1);

  /**
   * fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * update a ConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConfigurationInstanceUpdateOptions, callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
}


declare class ConfigurationInstance extends SerializableClass {
  /**
   * Initialize the ConfigurationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: V1, payload: ConfigurationPayload);

  private _proxy: ConfigurationContext;
  accountSid: string;
  defaultChatServiceSid: string;
  defaultClosedTimer: string;
  defaultInactiveTimer: string;
  defaultMessagingServiceSid: string;
  /**
   * fetch a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  links: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a ConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  /**
   * update a ConfigurationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ConfigurationInstanceUpdateOptions, callback?: (error: Error | null, items: ConfigurationInstance) => any): Promise<ConfigurationInstance>;
  url: string;
}


declare class ConfigurationPage extends Page<V1, ConfigurationPayload, ConfigurationResource, ConfigurationInstance> {
  /**
   * Initialize the ConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ConfigurationSolution);

  /**
   * Build an instance of ConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ConfigurationPayload): ConfigurationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { ConfigurationContext, ConfigurationInstance, ConfigurationInstanceUpdateOptions, ConfigurationList, ConfigurationListInstance, ConfigurationPage, ConfigurationPayload, ConfigurationResource, ConfigurationSolution }
