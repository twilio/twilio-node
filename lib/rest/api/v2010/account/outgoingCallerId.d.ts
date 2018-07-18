/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the OutgoingCallerIdList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function OutgoingCallerIdList(version: V2010, accountSid: string): OutgoingCallerIdListInstance;

interface OutgoingCallerIdResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  phone_number: string;
  sid: string;
  uri: string;
}

interface OutgoingCallerIdPayload extends OutgoingCallerIdResource, Page.TwilioResponsePayload {
}

interface OutgoingCallerIdSolution {
  accountSid?: string;
}

interface OutgoingCallerIdListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): OutgoingCallerIdContext;
  /**
   * Streams OutgoingCallerIdInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a outgoing_caller_id
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists OutgoingCallerIdInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of OutgoingCallerIdInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdList
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
 * @property friendlyName - A human readable description of the caller ID
 */
export interface UpdateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of the caller ID
 */
export interface UpdateOptions {
  friendlyName?: string;
}


declare class OutgoingCallerIdPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdPage
   * @augments Page
   * @description Initialize the OutgoingCallerIdPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: Response<string>, solution: object);

  /**
   * Build an instance of OutgoingCallerIdInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class OutgoingCallerIdInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @description Initialize the OutgoingCallerIdContext
   *
   * @property sid - A string that uniquely identifies this outgoing-caller-ids
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A human readable description for this resource
   * @property accountSid - The unique sid that identifies this account
   * @property phoneNumber - The incoming phone number
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, sid: sid);

  _proxy?: OutgoingCallerIdContext;
  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the OutgoingCallerIdInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   */
  toJSON();
  /**
   * update a OutgoingCallerIdInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class OutgoingCallerIdContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @description Initialize the OutgoingCallerIdContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique outgoing-caller-id Sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, sid: sid);

  /**
   * fetch a OutgoingCallerIdInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a OutgoingCallerIdInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a OutgoingCallerIdInstance
   *
   * @function update
   * @memberof Twilio.Api.V2010.AccountContext.OutgoingCallerIdContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { OutgoingCallerIdContext, OutgoingCallerIdInstance, OutgoingCallerIdList, OutgoingCallerIdListInstance, OutgoingCallerIdPage, OutgoingCallerIdPayload, OutgoingCallerIdResource, OutgoingCallerIdSolution }
