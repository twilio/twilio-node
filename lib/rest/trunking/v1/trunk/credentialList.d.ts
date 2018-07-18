/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the CredentialListList
 *
 * @param version - Version of the resource
 * @param trunkSid - The trunk_sid
 */
declare function CredentialListList(version: V1, trunkSid: string): CredentialListListInstance;

interface CredentialListResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
  trunk_sid: string;
  url: string;
}

interface CredentialListPayload extends CredentialListResource, Page.TwilioResponsePayload {
}

interface CredentialListSolution {
  trunkSid?: string;
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
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of CredentialListInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
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
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class CredentialListPage extends Page {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListPage
   * @augments Page
   * @description Initialize the CredentialListPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Trunking.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of CredentialListInstance
   *
   * @function getInstance
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class CredentialListInstance {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListInstance
   * @description Initialize the CredentialListContext
   *
   * @property accountSid - The account_sid
   * @property sid - The sid
   * @property trunkSid - The trunk_sid
   * @property friendlyName - The friendly_name
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, payload: object, trunkSid: sid, sid: sid);

  _proxy?: CredentialListContext;
  /**
   * fetch a CredentialListInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialListInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListInstance
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
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListInstance
   * @instance
   */
  toJSON();
}


declare class CredentialListContext {
  /**
   * @constructor Twilio.Trunking.V1.TrunkContext.CredentialListContext
   * @description Initialize the CredentialListContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Trunking.V1, trunkSid: sid, sid: sid);

  /**
   * fetch a CredentialListInstance
   *
   * @function fetch
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a CredentialListInstance
   *
   * @function remove
   * @memberof Twilio.Trunking.V1.TrunkContext.CredentialListContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { CredentialListContext, CredentialListInstance, CredentialListList, CredentialListListInstance, CredentialListPage, CredentialListPayload, CredentialListResource, CredentialListSolution }
