/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the AuthorizedConnectAppList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function AuthorizedConnectAppList(version: V2010, accountSid: string): AuthorizedConnectAppListInstance;

interface AuthorizedConnectAppResource {
  account_sid: string;
  connect_app_company_name: string;
  connect_app_description: string;
  connect_app_friendly_name: string;
  connect_app_homepage_url: string;
  connect_app_sid: string;
  date_created: Date;
  date_updated: Date;
  permissions: AuthorizedConnectAppPermission;
  uri: string;
}

interface AuthorizedConnectAppPayload extends AuthorizedConnectAppResource, Page.TwilioResponsePayload {
}

interface AuthorizedConnectAppSolution {
  accountSid?: string;
}

interface AuthorizedConnectAppListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AuthorizedConnectAppContext;
  /**
   * Streams AuthorizedConnectAppInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AuthorizedConnectAppListInstanceEachOptions, callback?: (item: AuthorizedConnectAppInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a authorized_connect_app
   *
   * @param connectAppSid - The connect_app_sid
   */
  get(connectAppSid: string): AuthorizedConnectAppContext;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AuthorizedConnectAppListInstanceOptions, callback?: (error: Error | null, items: AuthorizedConnectAppInstance[]) => any): Promise<AuthorizedConnectAppInstance[]>;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AuthorizedConnectAppListInstancePageOptions, callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any): Promise<AuthorizedConnectAppPage>;
}


declare class AuthorizedConnectAppPage extends Page<V2010, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppInstance> {
  /**
   * Initialize the AuthorizedConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AuthorizedConnectAppSolution);

  /**
   * Build an instance of AuthorizedConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AuthorizedConnectAppPayload): AuthorizedConnectAppInstance;
}


declare class AuthorizedConnectAppInstance extends SerializableClass {
  /**
   * Initialize the AuthorizedConnectAppContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property connectAppCompanyName - The company name set for this Connect App.
   * @property connectAppDescription - Human readable description of the app
   * @property connectAppFriendlyName - A human readable name for the Connect App.
   * @property connectAppHomepageUrl - The public URL for this Connect App.
   * @property connectAppSid - A string that uniquely identifies this app
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property permissions - Permissions authorized to this app
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param connectAppSid - The connect_app_sid
   */
  constructor(version: V2010, payload: AuthorizedConnectAppPayload, accountSid: string, connectAppSid: string);

  private _proxy: AuthorizedConnectAppContext;
  accountSid: string;
  connectAppCompanyName: string;
  connectAppDescription: string;
  connectAppFriendlyName: string;
  connectAppHomepageUrl: string;
  connectAppSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthorizedConnectAppInstance) => any): void;
  permissions: authorized_connect_app.permission;
  /**
   * Produce a plain JSON object version of the AuthorizedConnectAppInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uri: string;
}


declare class AuthorizedConnectAppContext {
  /**
   * Initialize the AuthorizedConnectAppContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param connectAppSid - The connect_app_sid
   */
  constructor(version: V2010, accountSid: string, connectAppSid: string);

  /**
   * fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AuthorizedConnectAppInstance) => any): void;
}

export { AuthorizedConnectAppContext, AuthorizedConnectAppInstance, AuthorizedConnectAppList, AuthorizedConnectAppListInstance, AuthorizedConnectAppListInstanceEachOptions, AuthorizedConnectAppListInstanceOptions, AuthorizedConnectAppListInstancePageOptions, AuthorizedConnectAppPage, AuthorizedConnectAppPayload, AuthorizedConnectAppResource, AuthorizedConnectAppSolution }
