/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { CredentialList } from './credentialList/credential';
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the CredentialListList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function CredentialListList(version: V2010, accountSid: string): CredentialListListInstance;

interface CredentialListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  subresource_uris: string;
  uri: string;
}

interface CredentialListPayload extends CredentialListResource, Page.TwilioResponsePayload {
}

interface CredentialListSolution {
  accountSid?: string;
}

interface CredentialListListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialListContext;
  /**
   * create a CredentialListInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams CredentialListInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a credential_list
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param sid - Fetch by unique credential list Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists CredentialListInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable descriptive text
 */
export interface UpdateOptions {
  friendlyName: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - Human readable descriptive text
 */
export interface UpdateOptions {
  friendlyName: string;
}


declare class CredentialListPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.CredentialListPage
   * @augments Page
   * @description Initialize the CredentialListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of CredentialListInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialListInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @description Initialize the CredentialListContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - Human readable descriptive text
   * @property sid - A string that uniquely identifies this credential
   * @property subresourceUris - The subresource_uris
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique credential list Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: CredentialListContext;
  /**
   * Access the credentials
   *
   * @function credentials
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   */
  credentials();
  /**
   * fetch a CredentialListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the CredentialListInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   */
  toJSON();
  /**
   * update a CredentialListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class CredentialListContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @description Initialize the CredentialListContext
   *
   * @property credentials - credentials resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique credential list Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  credentials?: Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext.CredentialList;
  /**
   * fetch a CredentialListInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialListInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a CredentialListInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.CredentialListContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { CredentialListContext, CredentialListInstance, CredentialListList, CredentialListListInstance, CredentialListPage, CredentialListPayload, CredentialListResource, CredentialListSolution }
