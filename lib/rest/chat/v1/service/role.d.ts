/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../interfaces';
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the RoleList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this role belongs to.
 */
declare function RoleList(version: V1, serviceSid: string): RoleListInstance;

interface RoleResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  permissions: string;
  service_sid: string;
  sid: string;
  type: RoleRoleType;
  url: string;
}

interface RolePayload extends RoleResource, Page.TwilioResponsePayload {
}

interface RoleSolution {
  serviceSid?: string;
}

interface RoleListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RoleContext;
  /**
   * create a RoleInstance
   *
   * @function create
   * @memberof Twilio.Chat.V1.ServiceContext.RoleList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * Streams RoleInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceContext.RoleList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a role
   *
   * @function get
   * @memberof Twilio.Chat.V1.ServiceContext.RoleList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V1.ServiceContext.RoleList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists RoleInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceContext.RoleList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of RoleInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceContext.RoleList
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
 * @property permission - A permission this role should have.
 */
export interface UpdateOptions {
  permission: string|list;
}

/**
 * Options to pass to update
 *
 * @property permission - A permission this role should have.
 */
export interface UpdateOptions {
  permission: string|list;
}


declare class RolePage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.RolePage
   * @augments Page
   * @description Initialize the RolePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of RoleInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V1.ServiceContext.RolePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RoleInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.RoleInstance
   * @description Initialize the RoleContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this role.
   * @property serviceSid - The unique id of the Service this role belongs to.
   * @property friendlyName - The human-readable name of this role.
   * @property type - What kind of role this is.
   * @property permissions - A JSON array of the permissions this role has.
   * @property dateCreated - The date that this resource was created in ISO 8601 format.
   * @property dateUpdated - The date that this resource was last updated in ISO 8601 format.
   * @property url - An absolute URL for this role.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this role belongs to.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, sid: sid);

  _proxy?: RoleContext;
  /**
   * fetch a RoleInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.RoleInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RoleInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.RoleInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the RoleInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V1.ServiceContext.RoleInstance
   * @instance
   */
  toJSON();
  /**
   * update a RoleInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.RoleInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}


declare class RoleContext {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.RoleContext
   * @description Initialize the RoleContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, serviceSid: sid, sid: sid);

  /**
   * fetch a RoleInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.RoleContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a RoleInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.RoleContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a RoleInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.RoleContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts: object, callback?: function);
}

export { RoleContext, RoleInstance, RoleList, RoleListInstance, RolePage, RolePayload, RoleResource, RoleSolution }
