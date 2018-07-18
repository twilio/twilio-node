/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Proxy = require('../Proxy');
import Response = require('../../../http/response');
import serialize = require('../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../interfaces';
import { PhoneNumberList } from './service/phoneNumber';
import { SerializableClass } from '../../../interfaces';
import { SessionList } from './service/session';
import { ShortCodeList } from './service/shortCode';

/**
 * @description Initialize the ServiceList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function ServiceList(version: Proxy): ServiceListInstance;

interface ServiceResource {
  account_sid: string;
  auto_create: boolean;
  callback_url: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  links: string;
  sid: string;
  url: string;
}

interface ServicePayload extends ServiceResource, Page.TwilioResponsePayload {
}

interface ServiceSolution {
}

interface ServiceListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ServiceContext;
  /**
   * create a ServiceInstance
   *
   * @function create
   * @memberof Twilio.Preview.Proxy.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
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
   * @function each
   * @memberof Twilio.Preview.Proxy.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a service
   *
   * @function get
   * @memberof Twilio.Preview.Proxy.ServiceList
   * @instance
   *
   * @param sid - A string that uniquely identifies this Service.
   */
  get(sid: string);
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Preview.Proxy.ServiceList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Preview.Proxy.ServiceList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Preview.Proxy.ServiceList
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
 * @property friendlyName - A human readable description of this resource
 * @property autoCreate - Boolean flag specifying whether to auto-create threads.
 * @property callbackUrl - URL Twilio will request for callbacks.
 */
export interface UpdateOptions {
  autoCreate?: boolean;
  callbackUrl?: string;
  friendlyName?: string;
}

/**
 * Options to pass to update
 *
 * @property friendlyName - A human readable description of this resource
 * @property autoCreate - Boolean flag specifying whether to auto-create threads.
 * @property callbackUrl - URL Twilio will request for callbacks.
 */
export interface UpdateOptions {
  autoCreate?: boolean;
  callbackUrl?: string;
  friendlyName?: string;
}


declare class ServicePage extends Page {
  /**
   * @constructor Twilio.Preview.Proxy.ServicePage
   * @augments Page
   * @description Initialize the ServicePage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Preview.Proxy, response: Response<string>, solution: object);

  /**
   * Build an instance of ServiceInstance
   *
   * @function getInstance
   * @memberof Twilio.Preview.Proxy.ServicePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class ServiceInstance {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceInstance
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Service.
   * @property friendlyName - A human readable description of this resource
   * @property accountSid - Account Sid.
   * @property autoCreate - Boolean flag specifying whether to auto-create threads.
   * @property callbackUrl - URL Twilio will request for callbacks.
   * @property dateCreated - The date this Service was created
   * @property dateUpdated - The date this Service was updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: Twilio.Preview.Proxy, payload: object, sid: sid_like);

  _proxy?: ServiceContext;
  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Access the phoneNumbers
   *
   * @function phoneNumbers
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   */
  phoneNumbers();
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Access the sessions
   *
   * @function sessions
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   */
  sessions();
  /**
   * Access the shortCodes
   *
   * @function shortCodes
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   */
  shortCodes();
  /**
   * Produce a plain JSON object version of the ServiceInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   */
  toJSON();
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Preview.Proxy.ServiceInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class ServiceContext {
  /**
   * @constructor Twilio.Preview.Proxy.ServiceContext
   * @description Initialize the ServiceContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sessions - sessions resource
   * @property phoneNumbers - phoneNumbers resource
   * @property shortCodes - shortCodes resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies this Service.
   */
  constructor(version: Twilio.Preview.Proxy, sid: sid_like);

  /**
   * fetch a ServiceInstance
   *
   * @function fetch
   * @memberof Twilio.Preview.Proxy.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  phoneNumbers?: Twilio.Preview.Proxy.ServiceContext.PhoneNumberList;
  /**
   * remove a ServiceInstance
   *
   * @function remove
   * @memberof Twilio.Preview.Proxy.ServiceContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  sessions?: Twilio.Preview.Proxy.ServiceContext.SessionList;
  shortCodes?: Twilio.Preview.Proxy.ServiceContext.ShortCodeList;
  /**
   * update a ServiceInstance
   *
   * @function update
   * @memberof Twilio.Preview.Proxy.ServiceContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { ServiceContext, ServiceInstance, ServiceList, ServiceListInstance, ServicePage, ServicePayload, ServiceResource, ServiceSolution }
